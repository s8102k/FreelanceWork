

import logo from '../assets/logo.png';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <div className="bg-[#0d1a1a] h-[86px] w-full flex items-center justify-between px-6 md:px-16 border-b border-white/5 sticky top-0 z-50">
      {/* Logo */}
      <div 
        className="cursor-pointer flex items-center"
        onClick={() => setActiveTab('home')}
      >
        <img 
          alt="ARKIYA DIGITAL AGENCY Logo" 
          className="h-[44px] w-auto object-contain select-none" 
          src={logo} 
        />
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center gap-8">
        <button 
          onClick={() => setActiveTab('home')}
          className={`font-['Manrope'] transition-colors cursor-pointer text-[16px] ${
            activeTab === 'home' ? 'text-white font-bold' : 'text-[#a8b8b8] hover:text-white font-medium'
          }`}
        >
          Home
        </button>

        <div className="relative group cursor-pointer">
          <div 
            onClick={() => setActiveTab('articles')}
            className={`flex items-center gap-1.5 font-['Manrope'] text-[16px] transition-colors ${
              activeTab === 'articles' ? 'text-white font-bold' : 'text-[#a8b8b8] hover:text-white font-medium'
            }`}
          >
            Services
            <svg 
              className="w-3 h-3 text-current transition-transform duration-200 group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {/* Dropdown menu */}
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#162727] border border-white/10 rounded-[10px] shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
            <button 
              onClick={() => setActiveTab('articles')}
              className="w-full text-left px-4 py-3 text-[#fafbfb] hover:text-[#36ed81] hover:bg-[#0d1a1a] transition-colors rounded-t-[10px] text-sm"
            >
              All Services
            </button>
            <button 
              onClick={() => setActiveTab('home')} 
              className="w-full text-left px-4 py-3 text-[#fafbfb] hover:text-[#36ed81] hover:bg-[#0d1a1a] transition-colors text-sm"
            >
              UX/UI Design
            </button>
            <button 
              onClick={() => setActiveTab('home')} 
              className="w-full text-left px-4 py-3 text-[#fafbfb] hover:text-[#36ed81] hover:bg-[#0d1a1a] transition-colors rounded-b-[10px] text-sm"
            >
              Development
            </button>
          </div>
        </div>

        <button 
          onClick={() => setActiveTab('blog')}
          className={`font-['Manrope'] transition-colors cursor-pointer text-[16px] ${
            activeTab === 'blog' ? 'text-white font-bold' : 'text-[#a8b8b8] hover:text-white font-medium'
          }`}
        >
          Blog
        </button>

        <button 
          onClick={() => setActiveTab('contact')}
          className={`font-['Manrope'] transition-colors cursor-pointer text-[16px] ${
            activeTab === 'contact' ? 'text-white font-bold' : 'text-[#a8b8b8] hover:text-white font-medium'
          }`}
        >
          Contact
        </button>

        <button 
          onClick={() => setActiveTab('about')}
          className={`font-['Manrope'] transition-colors cursor-pointer text-[16px] ${
            activeTab === 'about' ? 'text-white font-bold' : 'text-[#a8b8b8] hover:text-white font-medium'
          }`}
        >
          About
        </button>
      </div>

      {/* Nav Actions */}
      <div className="flex items-center gap-4">
        {/* Chat with us */}
        <button 
          onClick={() => setActiveTab('contact')}
          className="border border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 h-[44px] rounded-full px-5 flex items-center justify-center gap-2 cursor-pointer text-white"
        >
          <span className="font-['Manrope'] font-medium text-[15px] text-inherit">
            Chat With Us
          </span>
          <svg 
            className="w-3.5 h-3.5 text-white translate-y-[0.5px]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="3"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Book Appointment */}
        <button 
          onClick={() => setActiveTab('contact')}
          className="bg-[#2dd36f] hover:bg-[#25b55e] text-black font-['Manrope'] font-bold text-[15px] h-[44px] px-6 rounded-[10px] transition-all duration-300 shadow-[0_4px_14px_rgba(45,211,111,0.2)] hover:scale-[1.02] cursor-pointer whitespace-nowrap"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}
