import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Articles from './pages/Articles';
import BlogDetail from './pages/BlogDetail';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle active page switching with fade animation
  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 250);
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={handleTabChange} />;
      case 'about':
        return <About setActiveTab={handleTabChange} />;
      case 'contact':
        return <Contact setActiveTab={handleTabChange} />;
      case 'blog':
        return <Blog setActiveTab={handleTabChange} />;
      case 'articles':
        return <Articles setActiveTab={handleTabChange} />;
      case 'blogdetail':
        return <BlogDetail setActiveTab={handleTabChange} />;
      default:
        return <Home setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafdf8] text-black selection:bg-[#36ed81] selection:text-[#122] font-sans">
      
      {/* 1. Header & Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* 2. Main content viewport with fade animation */}
      <main 
        className={`flex-grow w-full transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0 scale-[0.995]' : 'opacity-100 scale-100'
        }`}
      >
        {renderPage()}
      </main>

      {/* 3. Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* 4. Collapsible Floating Design Switcher */}
      <DesignSwitcher activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}

// Collapsible helper design switcher for review and navigation
function DesignSwitcher({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { key: 'home', label: '1. Landing Page (Home)' },
    { key: 'about', label: '2. About Page' },
    { key: 'contact', label: '3. Contact Page' },
    { key: 'blog', label: '4. Blog List' },
    { key: 'articles', label: '5. Articles Alt List' },
    { key: 'blogdetail', label: '6. Blog Details' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-['Space_Grotesk'] text-sm">
      {isOpen ? (
        <div className="bg-[#122] text-white border border-[#36ed81]/30 p-4 rounded-[16px] shadow-2xl flex flex-col gap-3 min-w-[240px] animate-fade-in">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="font-bold text-[#36ed81] flex items-center gap-1.5">
              <span>🛠️</span> Figma Design Switcher
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white cursor-pointer px-1 text-base font-bold"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {pages.map(page => (
              <button
                key={page.key}
                onClick={() => {
                  setActiveTab(page.key);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-[8px] transition-colors cursor-pointer text-xs font-semibold ${
                  activeTab === page.key 
                    ? 'bg-[#36ed81] text-[#122]' 
                    : 'bg-white/5 hover:bg-white/10 text-white/90'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#122] hover:bg-[#1a3d3d] text-[#36ed81] border border-[#36ed81]/40 px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer font-semibold hover:scale-105 transition-all duration-300"
        >
          <span>🛠️</span> Switch Designs
        </button>
      )}
    </div>
  );
}