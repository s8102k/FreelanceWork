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

  // Scroll to top instantly on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
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
        className={`flex-grow w-full relative z-10 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0 scale-[0.995]' : 'opacity-100 scale-100'
        }`}
      >
        {renderPage()}
      </main>

      {/* 3. Footer */}
      <div className="relative z-0">
        <Footer setActiveTab={handleTabChange} />
      </div>
    </div>
  );
}