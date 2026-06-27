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
const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

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

function findExportableNodes(node, exportables) {
    if (node.exportSettings && node.exportSettings.length > 0) {
        exportables.push({
            id: node.id,
            name: node.name,
            format: node.exportSettings[0].format.toLowerCase()
        });
    }
    if (node.children) {
        node.children.forEach(child => findExportableNodes(child, exportables));
    }
}

function chunkArray(arr, size) {
    const res = [];
    for(let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
    return res;
}

async function run() {
    console.log('Fetching Figma document...');
    try {
        const file = await fetchFigma(`/files/${FILE_KEY}`);
        const exportables = [];
        findExportableNodes(file.document, exportables);
        
        const existingAssets = fs.readdirSync(ASSETS_DIR);
        
        let missing = [];
        for (const exp of exportables) {
            let safeName = exp.name.replace(/[^a-zA-Z0-9-_ ]/g, '').trim().replace(/ /g, '_');
            if (!safeName) safeName = exp.id.replace(':', '_');
            const fileName = `${safeName}.${exp.format}`;
            
            if (!existingAssets.includes(fileName) && !existingAssets.includes(exp.name + '.' + exp.format)) {
                missing.push({ ...exp, fileName });
            }
        }
        
        console.log(`Found ${missing.length} missing assets to download.`);
        if (missing.length === 0) return;
        
        // Group by format since API requires format in query
        const byFormat = { png: [], svg: [], jpg: [], pdf: [] };
        for (const m of missing) {
            if (byFormat[m.format]) byFormat[m.format].push(m);
        }
        
        for (const format of Object.keys(byFormat)) {
            const items = byFormat[format];
            if (items.length === 0) continue;
            
            const chunks = chunkArray(items, 30); // Reduce chunk size to 30
            for (const chunk of chunks) {
                const ids = chunk.map(c => c.id).join(',');
                console.log(`Fetching URLs for ${chunk.length} ${format} images...`);
                const res = await fetchFigma(`/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=${format}`);
                
                if (res.err) {
                    console.error('API Error:', res.err);
                    continue;
                }
                
                for (const item of chunk) {
                    const url = res.images[item.id];
                    if (url) {
                        const dest = path.join(ASSETS_DIR, item.fileName);
                        console.log(`Downloading ${item.fileName}...`);
                        try {
                            await downloadFile(url, dest);
                        } catch(e) {
                            console.error(`Error downloading ${item.fileName}: ${e.message}`);
                        }
                    } else {
                        console.log(`No URL returned for ${item.fileName}`);
                    }
                }
            }
        }
        console.log('Done downloading all missing assets.');
    } catch (e) {
        console.error('Error:', e);
    }
}

run();
