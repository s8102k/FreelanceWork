const fs = require('fs');
const https = require('https');
const path = require('path');

let FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
  try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      const match = envContent.match(/^FIGMA_TOKEN=(.*)$/m);
      if (match) {
        FIGMA_TOKEN = match[1].trim().replace(/['"]/g, '');
      }
    }
  } catch (err) {
    // Ignore error
  }
}

const FILE_KEY = '0MwCVVrHeFyqtFgrgck0hD';
const ASSETS_DIR = path.join(__dirname, 'src', 'assets', 'figma_images');

if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function fetchFigma(apiPath) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'api.figma.com',
            path: `/v1${apiPath}`,
            method: 'GET',
            headers: { 'X-Figma-Token': FIGMA_TOKEN }
        }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        });
        req.on('error', reject);
        req.end();
    });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const req = https.get(url, { timeout: 10000 }, response => {
            if (response.statusCode !== 200) {
                return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', err => {
            fs.unlink(dest, () => {});
            reject(err);
        }).on('timeout', () => {
            req.destroy();
            reject(new Error('Timeout'));
        });
    });
}

async function run() {
    console.log('Fetching all image fills from Figma...');
    try {
        const res = await fetchFigma(`/files/${FILE_KEY}/images`);
        if (res.err) {
            console.error('API Error:', res.err);
            return;
        }
        
        const imageHashes = Object.keys(res.meta.images);
        console.log(`Found ${imageHashes.length} image fills.`);
        
        for (const hash of imageHashes) {
            const url = res.meta.images[hash];
            const dest = path.join(ASSETS_DIR, `${hash}.png`);
            if (fs.existsSync(dest)) continue;
            
            console.log(`Downloading ${hash}.png...`);
            try {
                await downloadFile(url, dest);
            } catch(e) {
                console.error(`Error downloading ${hash}: ${e.message}`);
            }
        }
        console.log('Done downloading all image fills.');
    } catch (e) {
        console.error('Error:', e);
    }
}

run();
