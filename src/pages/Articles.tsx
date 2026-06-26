import { useState, useMemo } from 'react';

// Images from Figma assets
const imgImage = "http://localhost:9013/assets/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png"; // UX Mapping Methods / Agile image
const imgBlog1 = "http://localhost:9013/assets/009533ddb18880647940253fa905f2a8d6a3a95e.png";
const imgBlog3 = "http://localhost:9013/assets/9ca412fa840de131974162b09d68033e23a850b5.png";
const imgTrendingUp = "http://localhost:9013/assets/84a13c08b154a7e0f51916035ffd55e6dbf85e74.svg";
const imgMaterialSymbolsTrendingUp = "http://localhost:9013/assets/2c64346072831d2d435ef1b5a37f89c224a01ee0.svg";

// CTA Graphics (Help To Build Your Dream Project)
const imgOval = "http://localhost:9013/assets/9d040605cbcddf0c10ce575cb3dd15ed5d864adb.svg";
const imgCombinedShape = "http://localhost:9013/assets/8704e0e9655dc206f534a5e2258117f96a661b25.svg";
const imgCombinedShape1 = "http://localhost:9013/assets/422ee37a7c5ffa56b87e2c33aa7501e4079c89d7.svg";
const imgBitmap1 = "http://localhost:9013/assets/e25c813f117b340503cc828e8782a76cfb870055.png";
const imgBlock = "http://localhost:9013/assets/243ec4a83f307637b2ba499776ddfc581bffa7bf.svg";
const imgStar = "http://localhost:9013/assets/7b85d8947c9f0d7b0f88f2f40f0cc3bf55c24ff2.svg";
const imgShape = "http://localhost:9013/assets/3641c356e7f3f8e4b9c8be3761b6dfb3d461fa36.svg";

interface ArticlesProps {
  setActiveTab: (tab: string) => void;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  image: string;
  isTrending?: boolean;
}

export default function Articles({ setActiveTab }: ArticlesProps) {
  const [selectedCategory, setSelectedCategory] = useState('Trending');

  const articlesList: Article[] = useMemo(() => [
    {
      id: 'ux-mapping',
      title: 'UX Mapping Methods',
      excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...',
      date: 'September 24, 2017',
      categories: ['Research', 'UI Design'],
      image: imgImage,
      isTrending: true
    },
    {
      id: 'agile-dev',
      title: 'Agile Development Projects',
      excerpt: 'Agile methods aim to overcome usability barriers in traditional development, but post new threats...',
      date: 'September 24, 2017',
      categories: ['Research', 'UI Design'],
      image: imgBlog3,
      isTrending: true
    },
    {
      id: 'user-delight',
      title: 'Three Pillars of User Delight',
      excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...',
      date: 'September 24, 2017',
      categories: ['Research', 'UI Design'],
      image: imgBlog1,
      isTrending: true
    },
    {
      id: 'wordpress-plugins',
      title: 'WordPress Plugins & Custom Themes',
      excerpt: 'Creating highly optimized plugins that speed up page rendering speed and enhance search indexing structure.',
      date: 'October 14, 2019',
      categories: ['Development', 'Technology'],
      image: imgImage
    },
    {
      id: 'modern-seo',
      title: 'Fully Managed SEO Services',
      excerpt: 'Understand how authority homepage link schemes and local listing cleanup boosts organic traffic ranks.',
      date: 'August 08, 2021',
      categories: ['Digital Marketing', 'Technology'],
      image: imgBlog3
    },
    {
      id: 'interface-design',
      title: 'UI/UX Interactive System Designs',
      excerpt: 'How standard micro-animations, color gradients, and glassmorphism styling parameters create visceral delight.',
      date: 'November 12, 2024',
      categories: ['UI/UX', 'Research'],
      image: imgBlog1
    }
  ], []);

  const categories = ['Trending', 'Development', 'Technology', 'Digital Marketing', 'UI/UX'];

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'Trending') {
      return articlesList.filter(article => article.isTrending);
    }
    return articlesList.filter(article => 
      article.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase())
    );
  }, [selectedCategory, articlesList]);

  return (
    <div className="bg-[#fcfefb] text-black w-full overflow-x-hidden min-h-screen">
      
      {/* 1. DARK HEADER WITH WATERMARK */}
      <section className="bg-[#122] h-[340px] w-full flex items-center justify-center relative overflow-hidden">
        {/* Transparent Giant outline watermark text */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
          <span 
            className="font-['Poppins'] font-medium text-[10vw] tracking-wider leading-none uppercase text-white/5 opacity-5"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
              textStroke: '1px rgba(255, 255, 255, 0.4)',
            } as any}
          >
            Articles
          </span>
        </div>
        
        <div className="relative z-10 text-center flex flex-col gap-3">
          <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[52px] text-white">
            Digital Mafia Insights
          </h1>
          <p className="font-['Inter'] text-[15px] md:text-[17px] text-white/60 max-w-xl mx-auto">
            Deep dive into design trends, programming patterns, and digital marketing insights.
          </p>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER BADGES */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-16">
        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-gray-100">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[17px] font-['Inter'] font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isSelected 
                    ? 'bg-[#122] text-[#36ed81] shadow-lg scale-102 border border-transparent' 
                    : 'bg-gray-50 text-[#010101] hover:bg-gray-100 border border-gray-200/50'
                }`}
              >
                <span>{cat}</span>
                {cat === 'Trending' && (
                  <img src={imgTrendingUp} className="w-5 h-5 filter invert-0" alt="trending" />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. ARTICLES CARD GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-[20px] border border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">No articles under "{selectedCategory}" category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                onClick={() => setActiveTab('blogdetail')}
                className="border border-gray-200 p-5 rounded-[20px] bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[460px]"
              >
                <div className="h-[218px] rounded-[13px] overflow-hidden shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between pt-5 gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">
                      {article.date}
                    </span>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-['Inter'] font-semibold text-[20px] text-[#101828] leading-tight group-hover:text-[#20b486] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <img src={imgMaterialSymbolsTrendingUp} className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" alt="" />
                    </div>
                    <p className="font-['Inter'] text-[15px] text-[#667085] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.categories.map((cat, idx) => {
                      const bg = idx === 0 ? 'bg-[#fdf2fa] text-[#c11574]' : 'bg-[#f0f9ff] text-[#026aa2]';
                      return (
                        <span 
                          key={idx} 
                          className={`${bg} font-['Inter'] font-medium text-[13px] px-3 py-1 rounded-[16px]`}
                        >
                          {cat}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. DREAM PROJECT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 mb-20">
        <div className="bg-[#164630] text-white p-8 md:p-16 rounded-[24px] shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text details */}
          <div className="flex flex-col gap-6 max-w-2xl relative z-10">
            <span className="text-[#36ed81] uppercase font-bold text-[14px] tracking-[2px] font-['Epilogue']">
              Get An Idea?
            </span>
            <h2 className="font-['Epilogue'] font-extrabold text-[36px] md:text-[50px] leading-tight">
              Let’s Level up Your Brand, together
            </h2>
            <p className="font-['Epilogue'] text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. Let's create something landmark together.
            </p>
            <button 
              onClick={() => setActiveTab('contact')}
              className="bg-[#36ed81] hover:bg-[#2fd471] text-[#122] font-semibold text-[16px] h-[54px] w-fit px-8 rounded-[10px] transition-all duration-300 shadow-[0_4px_14px_rgba(9,236,103,0.2)] hover:scale-105 cursor-pointer mt-4"
            >
              Get In Touch
            </button>
          </div>

          {/* Right graphics - High Fidelity visual layout matching Figma */}
          <div className="relative w-[340px] h-[340px] shrink-0 pointer-events-none select-none hidden lg:block">
            {/* Spinning oval outline */}
            <img src={imgOval} className="absolute inset-0 w-full h-full animate-spin-slow opacity-60" alt="" />
            
            {/* Floating cards */}
            <img src={imgCombinedShape} className="absolute left-[35%] top-[10%] w-[90px] animate-float opacity-85" alt="" />
            <img src={imgCombinedShape1} className="absolute right-[10%] bottom-[15%] w-[80px] animate-float-delayed opacity-85" alt="" />
            
            {/* Block overlay */}
            <img src={imgBlock} className="absolute left-[20%] bottom-[20%] w-[160px] opacity-90" alt="" />
            
            {/* Masks / Images */}
            <div className="absolute right-[5%] top-[15%] w-[120px] h-[150px] rounded-full overflow-hidden border-4 border-[#36ed81] shadow-2xl">
              <img src={imgBitmap1} className="w-full h-full object-cover" alt="" />
            </div>

            {/* Glowing Star */}
            <img src={imgStar} className="absolute left-[10%] top-[40%] w-[50px] rotate-[13deg] opacity-75" alt="" />
            <img src={imgShape} className="absolute right-[30%] top-[8%] w-[24px] opacity-80" alt="" />
          </div>

        </div>
      </section>

    </div>
  );
}
