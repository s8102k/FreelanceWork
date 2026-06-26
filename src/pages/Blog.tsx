import React, { useState, useMemo } from 'react';

// Images from Figma assets
const imgBlog1 = "http://localhost:9013/assets/009533ddb18880647940253fa905f2a8d6a3a95e.png";
const imgBlog2 = "http://localhost:9013/assets/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png";
const imgBlog3 = "http://localhost:9013/assets/9ca412fa840de131974162b09d68033e23a850b5.png";
const imgBell21 = "http://localhost:9013/assets/720a43ec4674546f1db0c24bd21cde7c303ab68a.png";

// CTA Assets
const imgCombinedShape9 = "http://localhost:9013/assets/9989e550043c7b0a22dbda4627d61ded4333ec15.svg";
const imgCombinedShape10 = "http://localhost:9013/assets/284976a07bac044dadc4a723b5517eadcb7c6614.svg";
const imgBlock = "http://localhost:9013/assets/7c5960c54678dae74172714524c3bf9c97cd6f12.svg";
const imgStar = "http://localhost:9013/assets/6d29adeaa3a5421e09c3b6ef994be6117b090d4a.svg";

interface BlogProps {
  setActiveTab: (tab: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  categories: string[];
  image: string;
  featured?: boolean;
}

export default function Blog({ setActiveTab }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [emailSub, setEmailSub] = useState('');
  const [subMessage, setSubMessage] = useState('');

  // Sample blog posts matching the Figma design structure
  const allPosts: BlogPost[] = useMemo(() => [
    {
      id: 'agile-dev',
      title: 'Agile Development Projects and Usability',
      excerpt: 'Agile methods aim to overcome usability barriers in traditional development, but pose new threats to user experience quality. Discover methods to build sustainable and delightful applications.',
      date: 'March 13, 2014',
      author: 'Mamit Kumar',
      categories: ['Development', 'Technology', 'Research'],
      image: imgBlog3,
      featured: true
    },
    {
      id: 'user-delight',
      title: 'Three Pillars of User Delight',
      excerpt: 'Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...',
      date: 'November 16, 2014',
      author: 'Mamit Kumar',
      categories: ['Design', 'UI UX', 'Research'],
      image: imgBlog1
    },
    {
      id: 'ux-mapping',
      title: 'UX Mapping Methods',
      excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...',
      date: 'September 24, 2017',
      author: 'Mamit Kumar',
      categories: ['Design', 'UI Design', 'Research'],
      image: imgBlog2
    },
    // Page 2 & 3 content replication
    {
      id: 'branding-principles',
      title: 'New Age Branding Principles',
      excerpt: 'Understand how modern typography, harmonies, and interactive features combine to make stellar branding.',
      date: 'January 10, 2020',
      author: 'Mamit Kumar',
      categories: ['Digital Mafia', 'Design'],
      image: imgBlog3
    },
    {
      id: 'startup-scaling',
      title: 'Scaling Tech in Early Startups',
      excerpt: 'Fostering a growth ecosystem requires continuous product updates and clean architectural layout patterns.',
      date: 'February 18, 2021',
      author: 'Mamit Kumar',
      categories: ['Development', 'Customer Stories'],
      image: imgBlog1
    },
    {
      id: 'marketing-roi',
      title: 'Unlocking 600% ROI in Marketing Campaigns',
      excerpt: 'How we structured campaigns to build awareness, drive traffic, and create memorable customer loops.',
      date: 'May 05, 2022',
      author: 'Mamit Kumar',
      categories: ['Marketing', 'Customer Stories'],
      image: imgBlog2
    },
    {
      id: 'structured-thinking',
      title: 'Structured Thinking in Product Teams',
      excerpt: 'UX mapping and structured product specs keep development teams aligned on core user outcomes.',
      date: 'July 12, 2023',
      author: 'Mamit Kumar',
      categories: ['Design', 'Technology'],
      image: imgBlog1
    },
    {
      id: 'usability-testing',
      title: 'Advanced Usability Testing Methods',
      excerpt: 'A comprehensive guide on running unmoderated studies and gathering visceral feedback from users.',
      date: 'October 15, 2024',
      author: 'Mamit Kumar',
      categories: ['Design', 'Research'],
      image: imgBlog2
    },
    {
      id: 'growth-outreach',
      title: 'Blogger Outreach and Authority Links',
      excerpt: 'Building credibility using high-quality blogger outreach networks and contextual SEO structures.',
      date: 'December 28, 2025',
      author: 'Mamit Kumar',
      categories: ['Marketing', 'Technology'],
      image: imgBlog3
    }
  ], []);

  const categories = ['All', 'Design', 'Development', 'Marketing', 'Customer Stories', 'Digital Mafia'];

  // Filtering posts based on search query and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || 
                              post.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase() || 
                                                          (selectedCategory === 'Design' && cat === 'UI UX') ||
                                                          (selectedCategory === 'Design' && cat === 'UI Design'));
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchQuery, selectedCategory]);

  // Pagination Math (3 posts per page for display)
  const postsPerPage = 3;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubMessage('Subscribed! We care about your data.');
    setEmailSub('');
    setTimeout(() => setSubMessage(''), 4000);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#fafdf8] text-black w-full overflow-x-hidden min-h-screen">
      {/* Background decoration: Large absolute watermark */}
      <div className="absolute top-[80px] left-[-150px] opacity-[0.03] select-none pointer-events-none z-0 hidden xl:block">
        <span className="font-['Poppins'] font-black text-[22vw] text-black">Blog</span>
      </div>

      {/* 1. HERO SEARCH HEADER */}
      <section className="bg-[#ebf8e8] py-20 px-6 md:px-16 w-full flex flex-col items-center justify-center relative border-b border-[#c8eedd]/40 overflow-hidden">
        {/* Floating Bell Floater */}
        <div className="absolute right-[12%] bottom-[10%] opacity-15 animate-float select-none pointer-events-none">
          <img src={imgBell21} className="w-[90px] h-[80px]" alt="" />
        </div>

        <div className="max-w-4xl text-center relative z-10 flex flex-col items-center gap-6">
          <span className="bg-[#20b486]/10 text-[#20b486] px-4 py-1.5 rounded-full font-['Inter'] font-semibold text-[14px] uppercase tracking-wider">
            Why Digital Mafia?
          </span>
          <h1 className="font-['Poppins'] font-extrabold text-[36px] md:text-[60px] text-[#112121] leading-tight tracking-tight max-w-3xl">
            Expanding Our Knowledge & Yours, One Blog at a Time.
          </h1>
        </div>

        {/* Categories and Search Controls Header Container */}
        <div className="w-full max-w-6xl bg-white border border-[#c8eedd]/30 rounded-[20px] shadow-lg p-4 md:p-6 mt-16 flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
          
          {/* Categories Horizontal Selector */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto py-1 no-scrollbar scroll-smooth">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-5 py-2.5 rounded-full text-[15px] font-['Inter'] font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-[#20b486] text-white shadow-[0_4px_12px_rgba(32,180,134,0.25)]' 
                      : 'bg-[#fafdf8] text-[#112121]/70 hover:bg-[#ebf8e8] hover:text-[#20b486]'
                  }`}
                >
                  {cat}
                  {cat === 'Design' && (
                    <span className="ml-1.5 text-xs">📈</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px h-10 bg-[#c8eedd]" />

          {/* Search box input */}
          <div className="relative w-full lg:w-[320px] flex items-center bg-[#fafdf8] border border-[#c8eedd]/40 rounded-[12px] px-4 py-3 focus-within:border-[#20b486] transition-colors">
            <svg className="w-5 h-5 text-black/40 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search articles..."
              className="bg-transparent w-full text-[15px] text-[#112121] outline-none placeholder-black/40"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-black/40 hover:text-black shrink-0 text-sm ml-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. RECENT / FILTERED POSTS SECTION */}
      <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto z-10 relative">
        <h2 className="font-['Inter'] font-extrabold text-[32px] md:text-[40px] text-[#101828] mb-12">
          {searchQuery || selectedCategory !== 'All' ? 'Filtered Results' : 'Recent Blog Posts'}
        </h2>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[24px] border border-dashed border-[#c8eedd] flex flex-col items-center justify-center gap-4">
            <span className="text-4xl">🔍</span>
            <h3 className="font-['Space_Grotesk'] font-bold text-[22px] text-[#112121]">No articles found</h3>
            <p className="text-black/60 max-w-md">We couldn't find any blog posts matching "{searchQuery}" under category "{selectedCategory}". Try widening your search filter.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 bg-[#20b486] text-white px-6 py-2.5 rounded-[10px] font-semibold text-[15px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            
            {/* Main Showcase Layout (Only show default view if no active filters are set) */}
            {searchQuery === '' && selectedCategory === 'All' && currentPage === 1 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Large Featured Card (Right) */}
                <div 
                  onClick={() => setActiveTab('blogdetail')}
                  className="lg:col-span-7 bg-white p-6 rounded-[24px] shadow-md border border-[#c8eedd]/20 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="rounded-[16px] overflow-hidden h-[340px] mb-6">
                    <img 
                      src={imgBlog3} 
                      alt="Agile Development and Usability" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">Mamit Kumar</span>
                      <span className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                      <span className="font-['Inter'] font-semibold text-[14px] text-black/50">March 13, 2014</span>
                    </div>
                    <h3 className="font-['Inter'] font-bold text-[24px] md:text-[28px] text-[#101828] mt-3 group-hover:text-[#20b486] transition-colors leading-snug">
                      Agile Development Projects and Usability
                    </h3>
                    <p className="font-['Inter'] text-[16px] text-[#667085] mt-3 leading-relaxed line-clamp-3">
                      Agile methods aim to overcome usability barriers in traditional development, but pose new threats to user experience quality. Discover methods to build sustainable and delightful applications.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="bg-[#fff9f3] text-[#ff9b26] font-medium text-[13px] px-3 py-1 rounded-[16px]">Technology</span>
                    <span className="bg-[#eef4ff] text-[#3538cd] font-medium text-[13px] px-3 py-1 rounded-[16px]">Development</span>
                    <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[13px] px-3 py-1 rounded-[16px]">Research</span>
                  </div>
                </div>

                {/* Two Stacked Cards (Left) */}
                <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
                  {/* Card 1 */}
                  <div 
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex flex-col sm:flex-row gap-6 p-5 bg-white rounded-[24px] shadow-sm border border-[#c8eedd]/20 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="w-full sm:w-[200px] h-[160px] rounded-[16px] overflow-hidden shrink-0">
                      <img src={imgBlog1} alt="Three Pillars of User Delight" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#20b486]">November 16, 2014</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#101828] mt-2 group-hover:text-[#20b486] transition-colors leading-snug">
                          Three Pillars of User Delight
                        </h4>
                        <p className="font-['Inter'] text-[14px] text-[#667085] mt-2 line-clamp-2">
                          Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI UX</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div 
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex flex-col sm:flex-row gap-6 p-5 bg-white rounded-[24px] shadow-sm border border-[#c8eedd]/20 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="w-full sm:w-[200px] h-[160px] rounded-[16px] overflow-hidden shrink-0">
                      <img src={imgBlog2} alt="UX Mapping Methods" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#20b486]">September 24, 2017</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#101828] mt-2 group-hover:text-[#20b486] transition-colors leading-snug">
                          UX Mapping Methods
                        </h4>
                        <p className="font-['Inter'] text-[14px] text-[#667085] mt-2 line-clamp-2">
                          Visual-design principles can be applied consistently throughout the process of creating UX maps...
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Standard Grid Layout (Used when paginating or searching) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* If we are in default state, we skip first 3 posts since they are already displayed in featured section */}
              {(searchQuery === '' && selectedCategory === 'All' && currentPage === 1 
                ? filteredPosts.slice(3) 
                : paginatedPosts
              ).map((post) => (
                <div 
                  key={post.id}
                  onClick={() => setActiveTab('blogdetail')}
                  className="bg-white rounded-[24px] border border-[#c8eedd]/30 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[460px]"
                >
                  <div className="h-[210px] w-full overflow-hidden relative shrink-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                    {post.featured && (
                      <span className="absolute top-4 left-4 bg-[#20b486] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        Trending 🔥
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs text-black/50 font-semibold font-['Inter']">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-['Space_Grotesk'] font-bold text-[20px] text-[#101828] leading-tight group-hover:text-[#20b486] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-['Inter'] text-[15px] text-[#667085] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.categories.map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#f2fbf7] text-[#20b486] font-['Inter'] font-semibold text-[11px] px-2.5 py-1 rounded-full border border-[#20b486]/10"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center border-t border-[#c8eedd]/40 pt-8 mt-4 font-['Inter']">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="flex items-center gap-2 font-semibold text-[15px] text-[#667085] hover:text-[#20b486] disabled:opacity-40 disabled:hover:text-[#667085] cursor-pointer transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    const isActive = pageNum === currentPage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-[8px] font-semibold text-[15px] transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-[#20b486]/10 text-[#20b486] border-2 border-[#20b486]/20' 
                            : 'text-[#667085] hover:bg-[#ebf8e8]/40 hover:text-[#20b486]'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="flex items-center gap-2 font-semibold text-[15px] text-[#667085] hover:text-[#20b486] disabled:opacity-40 disabled:hover:text-[#667085] cursor-pointer transition-colors"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            )}

          </div>
        )}
      </section>

      {/* 3. NEWSLETTER BANNER SECTION */}
      <section className="bg-[#ebf8e8]/30 py-20 border-t border-b border-[#c8eedd]/20 w-full px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-['Space_Grotesk'] font-bold text-[28px] text-[#112121]">
              Sign up for our newsletter
            </h3>
            <p className="font-['Inter'] text-[15px] text-black/60 max-w-md">
              We care about your data in our <span className="text-[#20b486] underline cursor-pointer">privacy policy</span>. Score valuable tips and monthly insider updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-[400px] flex items-center shrink-0">
            <input 
              type="email" 
              required
              value={emailSub}
              onChange={(e) => setEmailSub(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white border border-[#c8eedd] rounded-[10px] py-4 pl-4 pr-32 text-black placeholder-black/40 focus:outline-none focus:border-[#20b486] transition-colors shadow-sm"
            />
            <button 
              type="submit"
              className="absolute right-1.5 bg-[#20b486] hover:bg-[#1a936d] text-white font-bold uppercase text-[12px] px-5 py-3 rounded-[8px] transition-all duration-300 shadow-md cursor-pointer"
            >
              Subscribe
            </button>
            {subMessage && (
              <p className="absolute bottom-[-28px] left-2 text-xs font-semibold text-[#20b486]">
                {subMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* 4. CALL TO ACTION SECTION */}
      <section className="py-28 px-6 md:px-16 bg-[#122] text-white text-center relative overflow-hidden w-full">
        {/* Floating shapes */}
        <img src={imgCombinedShape9} className="absolute left-[8%] top-[10%] w-[80px] opacity-10 animate-float" alt="" />
        <img src={imgCombinedShape10} className="absolute right-[8%] bottom-[12%] w-[70px] opacity-10 animate-float-delayed" alt="" />
        <img src={imgBlock} className="absolute left-[15%] bottom-[8%] w-[120px] opacity-10" alt="" />
        <img src={imgStar} className="absolute right-[12%] top-[8%] w-[100px] opacity-15 rotate-12" alt="" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <span className="bg-[#36ed81]/25 text-[#36ed81] uppercase font-semibold text-[14px] tracking-[2px] px-4 py-1.5 rounded-full">
            Get An Idea?
          </span>
          <h2 className="font-['Inter'] font-extrabold text-[36px] md:text-[56px] leading-tight tracking-tight mt-2">
            Let's Level up Your Brand, <span className="text-[#36ed81]">together</span>
          </h2>
          <p className="font-['Epilogue'] text-white/70 max-w-xl text-[16px] md:text-[18px] leading-relaxed">
            A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling them in-house. Let's make it extraordinary.
          </p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="mt-8 bg-[#36ed81] hover:bg-[#2fd471] text-[#122] font-semibold text-[16px] h-[54px] px-10 rounded-[10px] transition-all duration-300 shadow-[0_4px_14px_rgba(9,236,103,0.2)] hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
