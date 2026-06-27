import React, { useState, useMemo, useEffect } from 'react';
import imgBlog1 from '../assets/blog_img1.png';
import imgBlog2 from '../assets/blog_img2.png';
import imgBlog3 from '../assets/blog_img3.png';
import imgBell21 from '../assets/bell2.png';
import imgCTAPerson from '../assets/cta_person.png';
import imgImage16 from '../assets/image16.png';
import imgImage13 from '../assets/image13.png';
import imgBlogLightbulb from '../assets/blog_lightbulb.png';
import imgBlogLighttrail from '../assets/blog_lighttrail.png';
import imgCtaShape2 from '../assets/cta_shape2.svg';


interface BlogProps {
  setActiveTab: (tab: string) => void;
}

interface HiringCardProps {
  style?: React.CSSProperties;
  imgSize?: number;
  imgLeft?: string;
  imgTop?: string;
  linkLeft?: string;
  linkTop?: string;
}

function HiringCard({ style, imgSize = 300, imgLeft = "114px", imgTop = "22px", linkLeft = "41px", linkTop = "175px" }: HiringCardProps) {
  return (
    <div
      className="hiring-card"
      style={{
        width: 392,
        height: 221,
        ...style
      }}
    >
      <div className="absolute left-[30px] top-[30px] font-['Space_Grotesk'] font-bold text-[48px] text-[#030A22] leading-[54px] z-10">
        We are<br />Hiring
      </div>
      <img
        src={imgImage13}
        className="absolute pointer-events-none object-contain"
        style={{
          width: imgSize,
          height: imgSize,
          left: imgLeft,
          top: imgTop
        }}
        alt="Hiring"
      />
      <div
        className="absolute font-['Manrope'] font-bold text-[16px] text-black z-10"
        style={{ left: linkLeft, top: linkTop }}
      >
        &gt;&gt;See Detail
      </div>
    </div>
  );
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: { label: string; bg: string; color: string }[];
  image: string;
  featured?: boolean;
}

const allPosts: BlogPost[] = [
  {
    id: 'agile-dev',
    title: 'Agile Development Projects and Usability',
    excerpt: 'Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.',
    date: 'March 13, 2014',
    categories: [
      { label: 'Programming', bg: '#FFF9F3', color: '#FF9B26' },
      { label: 'Research', bg: '#EEF4FF', color: '#3538CD' },
      { label: 'Developments', bg: '#FDF2FA', color: '#C11574' },
    ],
    image: imgBlog3,
    featured: true,
  },
  {
    id: 'user-delight',
    title: 'Three Pillars of User Delight',
    excerpt: 'Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...',
    date: 'November 16, 2014',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI UX', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog1,
  },
  {
    id: 'ux-mapping',
    title: 'UX Mapping Methods',
    excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...',
    date: 'September 24, 2017',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI Design', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog2,
  },
  {
    id: 'branding-principles',
    title: 'New Age Branding Principles',
    excerpt: 'Understand how modern typography, harmonies, and interactive features combine to make stellar branding.',
    date: 'January 10, 2020',
    categories: [
      { label: 'Design', bg: '#FDF2FA', color: '#C11574' },
      { label: 'Marketing', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog3,
  },
  {
    id: 'startup-scaling',
    title: 'Scaling Tech in Early Startups',
    excerpt: 'Fostering a growth ecosystem requires continuous product updates and clean architectural layout patterns.',
    date: 'February 18, 2021',
    categories: [
      { label: 'Development', bg: '#EEF4FF', color: '#3538CD' },
      { label: 'Technology', bg: '#FFF9F3', color: '#FF9B26' },
    ],
    image: imgBlog1,
  },
  {
    id: 'marketing-roi',
    title: 'Unlocking 600% ROI in Marketing Campaigns',
    excerpt: 'How we structured campaigns to build awareness, drive traffic, and create memorable customer loops.',
    date: 'May 05, 2022',
    categories: [
      { label: 'Marketing', bg: '#FDF2FA', color: '#C11574' },
      { label: 'Research', bg: '#EEF4FF', color: '#3538CD' },
    ],
    image: imgBlog2,
  },
  {
    id: 'structured-thinking',
    title: 'Structured Thinking in Product Teams',
    excerpt: 'UX mapping and structured product specs keep development teams aligned on core user outcomes.',
    date: 'July 12, 2023',
    categories: [
      { label: 'Design', bg: '#F0F9FF', color: '#026AA2' },
      { label: 'Technology', bg: '#FFF9F3', color: '#FF9B26' },
    ],
    image: imgBlog1,
  },
  {
    id: 'usability-testing',
    title: 'Advanced Usability Testing Methods',
    excerpt: 'A comprehensive guide on running unmoderated studies and gathering visceral feedback from users.',
    date: 'October 15, 2024',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI UX', bg: '#EEF4FF', color: '#3538CD' },
    ],
    image: imgBlog2,
  },
  {
    id: 'growth-outreach',
    title: 'Blogger Outreach and Authority Links',
    excerpt: 'Building credibility using high-quality blogger outreach networks and contextual SEO structures.',
    date: 'December 28, 2025',
    categories: [
      { label: 'Marketing', bg: '#FDF2FA', color: '#C11574' },
      { label: 'Technology', bg: '#FFF9F3', color: '#FF9B26' },
    ],
    image: imgBlog3,
  },
];

const CATEGORIES = [
  { label: 'All', count: 36 },
  { label: 'Trending', icon: true },
  { label: 'Development' },
  { label: 'Technology' },
  { label: 'Digital Marketing' },
  { label: 'UIUX Design' },
];

export default function Blog({ setActiveTab }: BlogProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1440) {
        const minWidth = 1280;
        const currentScale = Math.max(width / 1440, minWidth / 1440);
        setScale(currentScale);
      } else {
        setScale(1);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [emailSub, setEmailSub] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' ||
        post.categories.some(c => c.label.toLowerCase().includes(selectedCategory.toLowerCase()));
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;

  const paginatedExtra = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEmailSub('');
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const isDefaultView = searchQuery === '' && selectedCategory === 'All' && currentPage === 1;

  return (
    <div className="text-black w-full relative min-h-screen">

      {/* ───── HERO SECTION ───── */}
      {/* Desktop Version: Exact Figma coordinates and dimensions */}
      <section
        className="bg-[#112222] text-white w-full overflow-visible relative hidden xl:block"
        style={{ height: `${816 * scale}px` }}
      >
        <div
          className="w-[1440px] h-[816px] absolute origin-top"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            left: 'calc(50% - 720px)',
          }}
        >
          {/* Large "Blog" watermark */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              left: -619,
              top: 13,
              width: 1339.46,
              height: 212.97,
              fontSize: 224.7,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.5)',
              lineHeight: '222.49px',
              whiteSpace: 'nowrap',
              letterSpacing: '-1.12px',
              textAlign: 'center',
            }}
          >
            Blog
          </div>

          {/* "Recent Blog" watermark */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              left: 67,
              top: 748,
              width: 731.14,
              height: 104.09,
              fontSize: 90.8,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.5)',
              lineHeight: '89.9px',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.45px',
            }}
          >
            Recent Blog
          </div>

          {/* Main headline */}
          <div className="absolute" style={{ left: 81, top: 276 }}>
            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: 60,
                color: 'white',
                lineHeight: '75px',
                margin: 0,
              }}
            >
              Expanding Our Knowledge &amp;<br />Yours, One Blog at a Time.
            </h1>
          </div>

          {/* Floating bell decoration */}
          <img
            src={imgBell21}
            alt=""
            className="absolute pointer-events-none select-none z-20 animate-float"
            style={{
              width: 95.95,
              height: 89.22,
              left: 904,
              top: 456,
              transform: 'rotate(16deg)',
              transformOrigin: 'top left',
            }}
          />

          {/* Newsletter pill — positioned in hero */}
          <div
            className="absolute flex items-center"
            style={{ left: 527, top: 514, width: 386, height: 50 }}
          >
            <div className="relative w-full h-full flex items-center bg-white rounded-full">
              <input
                type="email"
                value={emailSub}
                onChange={e => setEmailSub(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent w-full outline-none pl-6 pr-32 text-[16px] text-black/80 font-['Epilogue']"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-0 h-full flex items-center justify-center cursor-pointer font-['Epilogue'] font-medium"
                style={{
                  width: 121,
                  background: '#112222',
                  borderRadius: 360,
                  border: '5px solid white',
                  color: 'white',
                  fontSize: 16,
                }}
              >
                <span style={{ display: 'inline-block', transform: 'rotate(-4.85deg)' }}>
                  Subscribe
                </span>
              </button>
            </div>
          </div>

          {/* Category + Search Bar */}
          <div
            className="absolute flex items-center justify-between"
            style={{
              left: 69,
              top: 643,
              width: 1260,
              height: 80,
              background: 'white',
              borderRadius: 360,
              boxShadow: '-2px 21px 47px rgba(0,0,0,0.10), -9px 85px 86px rgba(0,0,0,0.09)',
              padding: '0 20px',
            }}
          >
            {/* Left: categories */}
            <div className="flex items-center gap-1">
              {CATEGORIES.map(cat => {
                const isSelected = selectedCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => handleCategorySelect(cat.label)}
                    className="flex items-center gap-2 cursor-pointer transition-all"
                    style={{
                      padding: '3.6px 18px',
                      borderRadius: 28.88,
                      background: isSelected ? '#164630' : 'transparent',
                      border: 'none',
                      outline: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: isSelected ? 23 : 18,
                        color: isSelected ? 'white' : '#010101',
                      }}
                    >
                      {cat.label}
                    </span>
                    {cat.count && isSelected && (
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'white',
                          outline: '1px solid #E1EA78',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 13,
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          color: 'black',
                        }}
                      >
                        {cat.count}
                      </span>
                    )}
                    {cat.icon && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#36ED81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="17 6 23 6 23 12" stroke="#36ED81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: search wrapper */}
            <div
              ref={searchRef}
              className="flex items-center gap-3 relative"
              style={{
                position: 'absolute',
                left: 942,
                top: 10,
                width: 298,
                height: 60,
                background: '#112222',
                borderRadius: 360,
                padding: '0 20px',
                outline: '1px solid #F2F2F2',
              }}
            >
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); setIsDropdownOpen(true); }}
                placeholder="Search..."
                className="bg-transparent outline-none flex-1 font-['Inter']"
                style={{ color: 'white', fontWeight: 300, fontSize: 18 }}
              />
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer bg-transparent border-none flex items-center justify-center p-0"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div 
                  className="absolute left-0 w-full bg-[#112222] border border-white/10 rounded-[15px] shadow-2xl z-50 overflow-hidden flex flex-col py-2"
                  style={{
                    top: '70px',
                  }}
                >
                  {filteredPosts.length > 0 ? (
                    filteredPosts.slice(0, 5).map(post => (
                      <button
                        key={post.title}
                        onClick={() => {
                          setSearchQuery(post.title);
                          setIsDropdownOpen(false);
                          setActiveTab('blogdetail');
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-[#164630] transition-colors border-none bg-transparent cursor-pointer flex flex-col gap-0.5"
                      >
                        <span className="font-['Inter'] text-[15px] font-semibold text-white truncate w-full">
                          {post.title}
                        </span>
                        <span className="font-['Inter'] text-[12px] text-white/50 truncate w-full">
                          {post.excerpt}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-white/50 text-[14px] font-['Inter']">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version: Fully responsive layout */}
      <section className="relative w-full bg-[#112222] py-16 px-6 overflow-hidden xl:hidden flex flex-col gap-8">
        <div
          className="absolute select-none pointer-events-none opacity-10 text-[100px] font-['Poppins'] font-bold text-white left-4 top-4 leading-none"
        >
          Blog
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <h1
            className="font-['Poppins'] font-extrabold text-[36px] sm:text-[48px] text-white leading-tight"
          >
            Expanding Our Knowledge &amp;<br />Yours, One Blog at a Time.
          </h1>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-[400px] flex items-center">
            <input
              type="email"
              value={emailSub}
              onChange={e => setEmailSub(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white border border-gray-300 rounded-[10px] py-4 pl-4 pr-32 text-black placeholder-black/40 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-1.5 bg-[#20b486] hover:bg-[#1a936d] text-white font-bold uppercase text-[12px] px-5 py-3 rounded-[8px] cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Mobile: categories row */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 border-t border-white/10 mt-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat.label}
              onClick={() => handleCategorySelect(cat.label)}
              className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all"
              style={{
                background: selectedCategory === cat.label ? '#164630' : 'rgba(255,255,255,0.15)',
                color: 'white',
                border: 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ───── RECENT BLOG SECTION ───── */}
      <section className="w-full px-6 xl:px-[87px] pt-16 pb-0 flex flex-col items-center bg-[#FCFEFB]">

        {/* "Latest Articles" Section Header */}
        <div className="flex justify-between items-end mb-10 w-full max-w-[1248px]">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Poppins'] font-bold text-[36px] text-[#101828] leading-[44px] m-0">
              Latest Articles
            </h2>
            <p className="font-['Inter'] text-[16px] text-[#667085] leading-[24px] m-0">
              Explore best articles on UX, UI &amp; Product design
            </p>
          </div>
          <button 
            onClick={() => setActiveTab('articles')}
            className="px-6 py-2.5 bg-white border border-[#D0D5DD] hover:bg-gray-50 transition-colors rounded-[8px] font-['Inter'] font-semibold text-[14px] text-[#344054] cursor-pointer"
          >
            View all
          </button>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[24px] border border-dashed border-gray-200 flex flex-col items-center gap-4 w-full max-w-[1248px]">
            <span className="text-4xl">🔍</span>
            <h3 className="font-['Space_Grotesk'] font-bold text-[22px] text-[#112121]">No articles found</h3>
            <p className="text-black/60 max-w-md">Try widening your search filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-2 bg-[#20b486] text-white px-6 py-2.5 rounded-[10px] font-semibold text-[15px] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured Showcase Area (Only shown in default view) */}
            {isDefaultView && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-[1248px] mb-[48px] mt-4 items-start">
                  {/* Two Stacked Cards (Left) */}
                  <div className="flex flex-col gap-8">
                    {/* Card 1 */}
                    <div
                      onClick={() => setActiveTab('blogdetail')}
                      className="flex flex-col sm:flex-row gap-6 cursor-pointer group"
                    >
                      <div className="w-full sm:w-[307px] h-[200px] rounded-[16px] overflow-hidden shrink-0">
                        <img src={imgBlog1} alt="Three Pillars of User Delight" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                        <div>
                          <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">November 16, 2014</span>
                          <h4 className="font-['Inter'] font-bold text-[20px] text-[#101828] mt-2 group-hover:text-[#20b486] transition-colors leading-snug">
                            Three Pillars of User Delight
                          </h4>
                          <p className="font-['Inter'] text-[15px] text-[#667085] mt-2 line-clamp-2 leading-relaxed">
                            Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
                          </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                          <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">Research</span>
                          <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">UI UX</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div
                      onClick={() => setActiveTab('blogdetail')}
                      className="flex flex-col sm:flex-row gap-6 cursor-pointer group"
                    >
                      <div className="w-full sm:w-[307px] h-[200px] rounded-[16px] overflow-hidden shrink-0">
                        <img src={imgBlog2} alt="UX Mapping Methods" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                        <div>
                          <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">September 24, 2017</span>
                          <h4 className="font-['Inter'] font-bold text-[20px] text-[#101828] mt-2 group-hover:text-[#20b486] transition-colors leading-snug">
                            UX Mapping Methods
                          </h4>
                          <p className="font-['Inter'] text-[15px] text-[#667085] mt-2 line-clamp-2 leading-relaxed">
                            Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                          </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                          <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">Research</span>
                          <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">UI Design</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Large Featured Card (Right) */}
                  <div
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex flex-col gap-8 cursor-pointer group"
                  >
                    <div className="w-full h-[240px] rounded-[16px] overflow-hidden shrink-0">
                      <img
                        src={imgBlog3}
                        alt="Agile Development and Usability"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1 flex-1 min-w-0">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">March 13, 2014</span>
                        <h4 className="font-['Inter'] font-bold text-[24px] md:text-[28px] text-[#101828] mt-2 group-hover:text-[#20b486] transition-colors leading-snug">
                          Agile Development Projects and Usability
                        </h4>
                        <p className="font-['Inter'] text-[16px] text-[#667085] mt-3 leading-relaxed line-clamp-3">
                          Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
                        </p>
                      </div>
                      <div className="flex gap-2 mt-6">
                        <span className="bg-[#FFF9F3] text-[#FF9B26] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">Programming</span>
                        <span className="bg-[#EEF4FF] text-[#3538CD] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">Research</span>
                        <span className="bg-[#FDF2FA] text-[#C11574] font-medium text-[14px] font-['Inter'] px-2.5 py-0.5 rounded-[16px]">Developments</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Small Horizontal Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[32px] w-full max-w-[1248px] mb-[64px]">

                  {/* Card 1: Image Left */}
                  <div
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex gap-6 p-4 bg-white rounded-[16px] border border-[#EAECF0] hover:shadow-md transition-shadow cursor-pointer group h-[168px] items-center"
                  >
                    <div className="w-[225px] h-[136px] rounded-[12px] overflow-hidden shrink-0">
                      <img src={imgBlogLightbulb} alt="UX Mapping Methods" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between h-full py-1 flex-1 min-w-0">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#667085]">September 24, 2017</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#20b486] mt-1 group-hover:text-[#164630] transition-colors leading-snug line-clamp-1">
                          UX Mapping Methods
                        </h4>
                        <p className="font-['Inter'] text-[13px] text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                          Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Image Right */}
                  <div
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex justify-between gap-6 p-4 bg-white rounded-[16px] border border-[#EAECF0] hover:shadow-md transition-shadow cursor-pointer group h-[168px] items-center"
                  >
                    <div className="flex flex-col justify-between h-full py-1 flex-1 min-w-0">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#667085]">September 24, 2017</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#20b486] mt-1 group-hover:text-[#164630] transition-colors leading-snug line-clamp-1">
                          Agile Development
                        </h4>
                        <p className="font-['Inter'] text-[13px] text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                          Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI Design</span>
                      </div>
                    </div>
                    <div className="w-[225px] h-[136px] rounded-[12px] overflow-hidden shrink-0">
                      <img src={imgBlogLighttrail} alt="Agile Development" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Card 2: Image Left */}
                  <div
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex gap-6 p-4 bg-white rounded-[16px] border border-[#EAECF0] hover:shadow-md transition-shadow cursor-pointer group h-[168px] items-center"
                  >
                    <div className="w-[225px] h-[136px] rounded-[12px] overflow-hidden shrink-0">
                      <img src={imgBlogLightbulb} alt="UX Mapping Methods" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-between h-full py-1 flex-1 min-w-0">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#667085]">September 24, 2017</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#20b486] mt-1 group-hover:text-[#164630] transition-colors leading-snug line-clamp-1">
                          UX Mapping Methods
                        </h4>
                        <p className="font-['Inter'] text-[13px] text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                          Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Image Right */}
                  <div
                    onClick={() => setActiveTab('blogdetail')}
                    className="flex justify-between gap-6 p-4 bg-white rounded-[16px] border border-[#EAECF0] hover:shadow-md transition-shadow cursor-pointer group h-[168px] items-center"
                  >
                    <div className="flex flex-col justify-between h-full py-1 flex-1 min-w-0">
                      <div>
                        <span className="font-['Inter'] font-semibold text-[13px] text-[#667085]">September 24, 2017</span>
                        <h4 className="font-['Inter'] font-bold text-[18px] text-[#20b486] mt-1 group-hover:text-[#164630] transition-colors leading-snug line-clamp-1">
                          Agile Development
                        </h4>
                        <p className="font-['Inter'] text-[13px] text-[#667085] mt-1.5 line-clamp-2 leading-relaxed">
                          Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-[#fdf2fa] text-[#c11574] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">Research</span>
                        <span className="bg-[#f0f9ff] text-[#026aa2] font-medium text-[11px] px-2.5 py-1 rounded-[16px]">UI Design</span>
                      </div>
                    </div>
                    <div className="w-[225px] h-[136px] rounded-[12px] overflow-hidden shrink-0">
                      <img src={imgBlogLighttrail} alt="Agile Development" className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                    </div>
                  </div>

                </div>

                {/* Section Header for the Lower Grid */}
                <div className="flex justify-between items-end mb-10 w-full max-w-[1248px] mt-12">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-['Poppins'] font-bold text-[36px] text-[#101828] leading-[44px] m-0">
                      Latest Articles
                    </h2>
                    <p className="font-['Inter'] text-[16px] text-[#667085] leading-[24px] m-0">
                      Explore best articles on UX, UI &amp; Product design
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('articles')}
                    className="px-6 py-2.5 bg-white border border-[#D0D5DD] hover:bg-gray-50 transition-colors rounded-[8px] font-['Inter'] font-semibold text-[14px] text-[#344054] cursor-pointer"
                  >
                    View all
                  </button>
                </div>
              </>
            )}

            {/* 3-column vertical grid of articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[32px] gap-x-[48px] w-full max-w-[1248px] mt-4">
              {paginatedExtra.map(post => (
                <div
                  key={post.id}
                  onClick={() => setActiveTab('blogdetail')}
                  className="flex flex-col cursor-pointer group w-full p-[16px] bg-white hover:shadow-lg transition-shadow duration-300"
                  style={{
                    borderRadius: 16,
                    border: '1px solid #EAECF0',
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-[12px] object-cover w-full h-[217px] shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-1 mt-[24px]">
                    <div className="flex flex-col gap-2">
                      <span className="font-['Inter'] font-semibold text-[14px] text-[#20B486]">
                        {post.date}
                      </span>
                      <div className="flex justify-between items-start gap-4 mt-1">
                        <h4 className="group-hover:text-[#20b486] transition-colors font-['Inter'] font-bold text-[20px] text-[#101828] leading-[30px] m-0 line-clamp-2 flex-1">
                          {post.title}
                        </h4>
                        <svg className="w-5 h-5 text-[#101828] group-hover:text-[#20b486] transition-colors shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                      <p className="font-['Inter'] text-[15px] text-[#667085] leading-[24px] mt-2 line-clamp-3 m-0">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-[24px]">
                      {post.categories.map(c => (
                        <span key={c.label} style={{ background: c.bg, color: c.color, fontSize: 14, fontFamily: 'Inter', fontWeight: 500, padding: '2px 10px', borderRadius: 16 }}>
                          {c.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center border-t border-gray-200 pt-8 mt-12 w-full max-w-[1248px] font-['Inter'] select-none">
                <button
                  disabled={currentPage === 1}
                  onClick={() => { setCurrentPage(p => Math.max(p - 1, 1)); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="flex items-center gap-2 font-semibold text-[14px] text-[#667085] hover:text-[#101828] disabled:opacity-40 cursor-pointer transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Preview
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const n = idx + 1;
                    const isSelected = n === currentPage;
                    return (
                      <button
                        key={n}
                        onClick={() => { setCurrentPage(n); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                        className={`w-10 h-10 rounded-full font-semibold text-[14px] transition-all cursor-pointer ${isSelected
                            ? 'bg-[#164630] text-white'
                            : 'text-[#667085] hover:bg-gray-100 hover:text-[#101828]'
                          }`}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => { setCurrentPage(p => Math.min(p + 1, totalPages)); window.scrollTo({ top: 500, behavior: 'smooth' }); }}
                  className="flex items-center gap-2 font-semibold text-[14px] text-[#667085] hover:text-[#101828] disabled:opacity-40 cursor-pointer transition-colors"
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* ───── NEWSLETTER, GREEN BANNER, AND CTA SECTION ───── */}
      {/* Desktop Version */}
      <section
        className="text-black w-full overflow-hidden relative hidden xl:block z-20"
        style={{
          height: `${1433 * scale}px`,
          marginBottom: `${-149 * scale}px`,
          marginTop: `${80 * scale}px`
        }}
      >
        <div
          className="w-[1440px] h-[1433px] absolute origin-top"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            left: 'calc(50% - 720px)'
          }}
        >
          {/* Top Line separator */}
          <div className="absolute left-0 top-0 w-full border-t border-gray-200" />

          {/* White Background for the top part */}
          <div className="absolute left-0 top-0 w-full h-[1284px] bg-white -z-10" />

          {/* Newsletter block */}
          <div className="absolute left-[106px] top-[81px] w-[421px] h-[153px] flex flex-col justify-start">
            <span className="font-['Poppins'] text-[#20b486] font-medium text-[16px] uppercase tracking-[1.5px] text-left">
              Newsletter
            </span>
            <h2 className="font-['Poppins'] font-bold text-[40px] text-[#101828] leading-[48px] mt-[10px] tracking-tight text-left">
              Stories and News
            </h2>
            <p className="font-['Poppins'] text-[16px] text-[#667085] leading-[26px] mt-[12px] font-light text-left">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>

          {/* Form wrapper */}
          <div className="absolute left-[914px] top-[116px] w-[406px] flex flex-col gap-[12px]">
            <form onSubmit={handleSubscribe} className="relative w-[406px] h-[54px] bg-white rounded-[100px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E9E9E9] flex items-center p-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full bg-transparent pl-[24px] pr-[140px] font-['Poppins'] text-[15px] text-[#101828] placeholder-[#101828]/40 border-none outline-none"
                value={emailSub}
                onChange={e => setEmailSub(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-[5px] top-[5px] bottom-[5px] w-[127px] bg-black hover:bg-gray-900 text-white font-['Poppins'] font-semibold text-[15px] rounded-[100px] flex items-center justify-center transition-colors cursor-pointer border-none"
              >
                Subscribe
              </button>
            </form>
            <p className="font-['Poppins'] text-[14px] text-black/85 text-left">
              We care about your data in our <span className="underline cursor-pointer hover:text-black">privacy policy</span>
            </p>
          </div>

          {/* Bottom Line separator */}
          <div className="absolute left-0 top-[327px] w-full border-t border-gray-250" />

          {/* Green banner container */}
          <div className="absolute left-[207px] top-[392px] w-[1025px] h-[325px] bg-[#164630] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <span className="font-['Poppins'] text-[#A6E8C5] text-[16px] font-medium tracking-[2.5px] uppercase">
              Get An Idea?
            </span>
            <h3 className="font-['Poppins'] font-bold text-[56px] text-white leading-[68px] text-center mt-[12px] max-w-[800px] tracking-tight">
              Let’s Level up Your Brand, together
            </h3>
            <button
              className="w-[234px] h-[54px] bg-[#FCFEFB] hover:bg-gray-100 text-black font-['Poppins'] font-semibold text-[18px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-md mt-[28px] transition-all border-none"
              onClick={() => setActiveTab('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Floating Hiring Cards */}
          <HiringCard
            style={{ left: '-46px', top: '605px', transform: 'rotate(-9deg)', zIndex: 5 }}
            imgSize={321}
            imgLeft="98px"
            imgTop="41px"
            linkLeft="28px"
            linkTop="175px"
          />
          <HiringCard
            style={{ left: '1061px', top: '627px', transform: 'rotate(9deg)', zIndex: 5 }}
            imgSize={321}
            imgLeft="98px"
            imgTop="41px"
            linkLeft="28px"
            linkTop="175px"
          />

          {/* White Let's Talk Card container */}
          <div data-layer="Rectangle_4" className="absolute left-[137px] top-[812px] w-[1168px] h-[560px] bg-white rounded-[21px] shadow-2xl z-10">
            <h3 className="absolute left-[99px] top-[107px] w-[526px] font-['Inter'] font-extrabold text-[56px] leading-[64px] text-[#1C0202] tracking-tight">
              Let’s Talk To Build <br />Your Dream <br />Project
            </h3>
            <p className="absolute left-[99px] top-[327px] w-[469px] font-['Epilogue'] font-normal text-[16px] leading-[32px] text-black/60">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>

            {/* Decorative shapes inside white card */}
            <div className="absolute right-[80px] top-[40px] w-[350px] h-[350px] pointer-events-none select-none z-10">
              {/* Green Starburst with User Icon */}
              <div className="absolute w-[177px] h-[177px] flex items-center justify-center" style={{ left: '50px', top: '-10px' }}>
                <svg width="177" height="177" viewBox="0 0 147 147" fill="none" className="absolute top-0 left-0 w-full h-full">
                  <path d="M65.0395 108.377L39.9283 138.411L49.2286 100.363L13.0557 115.271L38.9478 85.9097L-5.47938e-05 82.2761L36.5522 68.3272L3.75192 46.9846L42.5907 51.6438L23.4521 17.4817L55.6799 39.6815L54.5874 0.525967L72.8213 35.1808L90.0252 0.00185166L90.0879 39.1726L121.647 16.0294L103.524 50.7426L142.209 44.9369L110.052 67.2401L147 80.102L108.176 84.8858L134.923 113.469L98.326 99.6373L108.744 137.393L82.7584 108.115L74.4616 146.395L65.0395 108.377Z" fill="#B7F9D2"/>
                </svg>
                <svg width="36" height="36" viewBox="0 0 32 32" fill="#112222" className="relative z-10">
                  <circle cx="16" cy="10" r="6.5" />
                  <path d="M4 28 C4 21.37 9.37 18 16 18 C22.63 18 28 21.37 28 28 Z" />
                </svg>
              </div>
              {/* Zig-zag arrow graphic */}
              <img 
                src={imgCtaShape2} 
                className="absolute w-[92px] h-[117px] object-contain" 
                style={{ left: '170px', top: '95px' }}
                alt="deco"
              />
              {/* Yellow circle ornament */}
              <div 
                className="absolute w-[36px] h-[36px] bg-[#F7CC47] rounded-full" 
                style={{ left: '70px', top: '190px' }}
              />
            </div>

            {/* Support cards container */}
            <div className="absolute left-[99px] top-[437px] flex gap-[18px]">
              {/* Support Badge */}
              <div className="w-[244px] h-[90px] bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] px-[15px] hover:scale-103 transition-transform duration-300">
                <div className="w-[42px] h-[42px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Poppins'] font-semibold text-[19px] text-black">Support</span>
                  <span className="font-['Nunito'] text-[15.8px] text-[#565756]">24*7</span>
                </div>
              </div>

              {/* Call Badge */}
              <div className="w-[244px] h-[90px] bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] px-[15px] hover:scale-103 transition-transform duration-300">
                <div className="w-[42px] h-[42px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] text-black">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Poppins'] font-semibold text-[19px] text-black">Call Us</span>
                  <span className="font-['Nunito'] text-[15.8px] text-[#565756]">+910000000000</span>
                </div>
              </div>

              {/* Email Badge */}
              <div className="w-[290px] h-[90px] bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] px-[15px] hover:scale-103 transition-transform duration-300">
                <div className="w-[42px] h-[42px] bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-['Poppins'] font-semibold text-[19px] text-black">Email Us</span>
                  <span className="font-['Nunito'] text-[15.8px] text-[#565756]">supportmafia@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Float illustration on the right side next to white card */}
          <img
            src={imgImage16}
            className="absolute left-[839px] top-[945px] w-[484px] h-[484px] object-contain select-none pointer-events-none z-20"
            alt="Dream Project illustration"
          />
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="bg-white text-[#112121] py-16 px-6 md:px-16 w-full flex flex-col items-center xl:hidden border-t border-black/5 gap-12">
        <div className="max-w-[800px] w-full flex flex-col items-center gap-12">

          {/* Mobile Newsletter Block */}
          <div className="w-full flex flex-col items-center text-center gap-4">
            <span className="font-['Poppins'] text-[#20b486] font-medium text-[16px] uppercase tracking-[1.5px]">
              Newsletter
            </span>
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#101828] leading-tight tracking-tight">
              Stories and News
            </h2>
            <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#667085] leading-relaxed max-w-[500px]">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-[450px] h-[54px] bg-white rounded-[100px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E9E9E9] flex items-center mt-2 p-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full bg-transparent pl-[20px] pr-[130px] font-['Poppins'] text-[15px] text-[#101828] placeholder-[#101828]/40 border-none outline-none"
                value={emailSub}
                onChange={e => setEmailSub(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-[5px] top-[5px] bottom-[5px] w-[110px] bg-black hover:bg-gray-900 text-white font-['Poppins'] font-semibold text-[14px] rounded-[100px] flex items-center justify-center transition-colors cursor-pointer border-none"
              >
                Subscribe
              </button>
            </form>
            <p className="font-['Poppins'] text-[13px] md:text-[14px] text-black/80">
              We care about your data in our <span className="underline cursor-pointer hover:text-black">privacy policy</span>
            </p>
          </div>

          <div className="w-full border-t border-gray-200" />

          {/* Mobile Green Banner */}
          <div className="w-full bg-[#164630] rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center gap-4 shadow-lg">
            <span className="font-['Poppins'] text-[#A6E8C5] text-[14px] md:text-[16px] font-medium tracking-[2.5px] uppercase">
              Get An Idea?
            </span>
            <h3 className="font-['Poppins'] font-bold text-[32px] md:text-[44px] text-white leading-tight max-w-[600px] tracking-tight">
              Let’s Level up Your Brand, together
            </h3>
            <button
              className="px-8 py-3 bg-[#FCFEFB] hover:bg-gray-100 text-black font-['Poppins'] font-semibold text-[16px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-md mt-4 transition-all border-none"
              onClick={() => setActiveTab('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Hiring Cards Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[800px]">
            {/* Left Card */}
            <div
              onClick={() => setActiveTab('about')}
              className="bg-[#B7F9D2] rounded-[21px] overflow-hidden select-none hover:scale-102 hover:shadow-lg transition-all duration-300 cursor-pointer relative h-[220px]"
            >
              <div className="absolute left-[24px] top-[24px] font-['Space_Grotesk'] font-bold text-[36px] text-[#030A22] leading-[40px] z-10">
                We are<br />Hiring
              </div>
              <img
                src={imgImage13}
                className="absolute right-[-20px] bottom-[-20px] w-[260px] h-[260px] pointer-events-none object-contain"
                alt="Hiring"
              />
              <div className="absolute left-[24px] bottom-[24px] font-['Manrope'] font-bold text-[15px] text-black z-10">
                &gt;&gt;See Detail
              </div>
            </div>

            {/* Right Card */}
            <div
              onClick={() => setActiveTab('about')}
              className="bg-[#B7F9D2] rounded-[21px] overflow-hidden select-none hover:scale-102 hover:shadow-lg transition-all duration-300 cursor-pointer relative h-[220px]"
            >
              <div className="absolute left-[24px] top-[24px] font-['Space_Grotesk'] font-bold text-[36px] text-[#030A22] leading-[40px] z-10">
                We are<br />Hiring
              </div>
              <img
                src={imgImage13}
                className="absolute right-[-20px] bottom-[-20px] w-[260px] h-[260px] pointer-events-none object-contain"
                alt="Hiring"
              />
              <div className="absolute left-[24px] bottom-[24px] font-['Manrope'] font-bold text-[15px] text-black z-10">
                &gt;&gt;See Detail
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-150 my-4" />

          {/* Let's Talk container box fluid layout */}
          <div className="w-full bg-[#fcfcfc] rounded-[20px] p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
            <h3 className="font-['Inter'] font-extrabold text-[36px] leading-tight text-[#1C0202]">
              Let’s Talk To Build Your Dream Project
            </h3>
            <p className="font-['Epilogue'] text-[16px] leading-relaxed text-black/60">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>

            {/* Badges */}
            <div className="flex flex-col gap-4 font-['Poppins']">
              {/* Support */}
              <div className="bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] p-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-[17px] text-black">Support</span>
                  <span className="font-['Nunito'] text-[14px] text-[#565756]">24*7</span>
                </div>
              </div>

              {/* Call */}
              <div className="bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] p-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-black">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1a11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-[17px] text-black">Call Us</span>
                  <span className="font-['Nunito'] text-[14px] text-[#565756]">+910000000000</span>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] p-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-semibold text-[17px] text-black">Email Us</span>
                  <span className="font-['Nunito'] text-[14px] text-[#565756]">supportmafia@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
