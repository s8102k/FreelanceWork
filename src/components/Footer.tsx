import logo from '../assets/logo.png';
const imgColorFill = "http://localhost:9013/assets/f701e874110183cd046271b32c08bc98ca2000f5.svg";
const imgUnderline2 = "http://localhost:9013/assets/e4d11a6aaeae8a902c55b8c2de87ebfea9ed180f.svg";
const imgUnderline3 = "http://localhost:9013/assets/bc6a5d90c76502e59ca8fdaa58791c42bc0a2a14.svg";
const imgUnderline5 = "http://localhost:9013/assets/3126479ca92371e3b215bccab451cb71e8c4fca0.svg";
const imgUnderline6 = "http://localhost:9013/assets/fbccc4c7a2f51d76ce283ca81216c36abb7e72b6.svg";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <div className="bg-[#122] text-white pt-16 pb-16 xl:pt-[180px] px-6 md:px-16 border-t border-[rgba(255,255,255,0.05)] w-full font-['Poppins']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Left Column: Logo & Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div 
            className="cursor-pointer flex items-center"
            onClick={() => setActiveTab('home')}
          >
            <img 
              alt="Logo" 
              className="h-[44px] w-auto object-contain select-none" 
              src={logo} 
            />
          </div>
          
          <div className="flex flex-col gap-1 text-[16px] text-white/80">
            <p className="font-['Space_Grotesk'] font-bold text-[24px] text-white mb-2 relative inline-block">
              Let's talk.
              <img src={imgUnderline2} className="absolute bottom-[-6px] left-0 w-[80px]" alt="" />
            </p>
            <p className="mt-4">Office 14 New Station St,</p>
            <p>Leeds, LS1 5DL</p>
            <p className="text-sm text-white/50 mt-1">2021 © DStudio.</p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <p className="text-white/80 max-w-sm text-[16px]">
              Score valuable tips, benefit from insider knowledge and get helpful updates.
            </p>
            <a 
              href="mailto:debuggers@gmail.com" 
              className="flex items-center gap-2 text-white hover:text-[#36ed81] transition-colors mt-2"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full">
                <img src={imgColorFill} className="w-[12px] h-[12px] filter invert brightness-200" alt="" />
              </div>
              <span className="font-semibold">debuggers@gmail.com</span>
            </a>
          </div>

          {/* Subscribe form */}
          <form onSubmit={handleSubscribe} className="relative w-full max-w-[370px] mt-4 flex items-center">
            <input 
              type="email" 
              required
              placeholder="Your email"
              className="w-full bg-[#1b3333] border border-[#32a471]/30 rounded-[10px] py-4 pl-4 pr-32 text-white placeholder-white/40 focus:outline-none focus:border-[#36ed81] transition-colors"
            />
            <button 
              type="submit"
              className="absolute right-1 bg-white hover:bg-[#36ed81] hover:text-[#122] text-[#122] font-black uppercase text-[14px] px-6 py-3 rounded-[8px] transition-all duration-300 shadow-md cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Directory Columns */}
        {/* Column 1: Company */}
        <div className="flex flex-col gap-4">
          <h4 className="font-['Space_Grotesk'] font-bold text-[20px] relative pb-2 inline-block">
            Company
            <img src={imgUnderline3} className="absolute bottom-0 left-0 w-[80px]" alt="" />
          </h4>
          <ul className="flex flex-col gap-3 text-[16px] text-white/80 mt-2">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-[#36ed81] cursor-pointer text-left">Home</button></li>
            <li><button onClick={() => setActiveTab('about')} className="hover:text-[#36ed81] cursor-pointer text-left">About Us</button></li>
            <li><button onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81] cursor-pointer text-left">Recent Work</button></li>
            <li><button onClick={() => setActiveTab('blog')} className="hover:text-[#36ed81] cursor-pointer text-left">Articles</button></li>
            <li><button onClick={() => setActiveTab('contact')} className="hover:text-[#36ed81] cursor-pointer text-left">Contact Us</button></li>
          </ul>
        </div>

        {/* Column 2: Website Service */}
        <div className="flex flex-col gap-4">
          <h4 className="font-['Space_Grotesk'] font-bold text-[20px] relative pb-2 inline-block">
            Website Service
            <img src={imgUnderline5} className="absolute bottom-0 left-0 w-[80px]" alt="" />
          </h4>
          <ul className="flex flex-col gap-3 text-[16px] text-white/80 mt-2 font-normal">
            <li><a href="#services" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Website packages</a></li>
            <li><a href="#services" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Wordpress Websites</a></li>
            <li><a href="#services" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Site Design</a></li>
            <li><a href="#services" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">WordPress Plugins</a></li>
          </ul>
        </div>

        {/* Column 3: SEO Services */}
        <div className="flex flex-col gap-4">
          <h4 className="font-['Space_Grotesk'] font-bold text-[20px] relative pb-2 inline-block">
            SEO Services
            <img src={imgUnderline6} className="absolute bottom-0 left-0 w-[80px]" alt="" />
          </h4>
          <ul className="flex flex-col gap-3 text-[14px] text-white/80 mt-2 font-normal">
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Affordable SEO Packages</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Fully Managed Blog Content Writing</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Authority Homepage Links</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Fully Managed SEO Services</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Top-Tier Blogger Outreach Links</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Local Listing & Citation Cleanup</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">On Page SEO Service</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">Online Reviews & Distribution</a></li>
            <li><a href="#seo" onClick={() => setActiveTab('articles')} className="hover:text-[#36ed81]">SEO Booster Link Packages</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
        <p>Copyright © 2022 DMafia. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-[#36ed81] transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#36ed81] transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>
  );
}
