import { useState, useMemo, useEffect } from 'react';
import imgImage13 from '../assets/image13.png';
import imgImage16 from '../assets/image16.png';
import imgBlog1 from '../assets/blog_img1.png';
import imgBlog2 from '../assets/blog_img2.png';
import imgBlog3 from '../assets/blog_img3.png';
import imgBell21 from '../assets/bell2.png';
import imgCustomerStory from '../assets/customer_story.png';
import imgCtaShape2 from '../assets/cta_shape2.svg';

// ─── HiringCard ──────────────────────────────────────────────────────────────
interface HiringCardProps {
  left: string;
  top: string;
  rotation: string;
  imgSize?: number;
  imgLeft?: string;
  imgTop?: string;
  linkLeft?: string;
  linkTop?: string;
}

function HiringCard({ left, top, rotation, imgSize = 300, imgLeft = '114px', imgTop = '22px', linkLeft = '41px', linkTop = '175px' }: HiringCardProps) {
  return (
    <div
      className="hiring-card"
      style={{ width: 392, height: 221, left, top, transform: `rotate(${rotation})`, transformOrigin: 'top left' }}
    >
      <div className="absolute left-[30px] top-[30px] font-['Space_Grotesk'] font-bold text-[48px] text-[#030A22] leading-[54px] z-10">
        We are<br />Hiring
      </div>
      <img
        src={imgImage13}
        className="absolute pointer-events-none object-contain"
        style={{ width: imgSize, height: imgSize, left: imgLeft, top: imgTop }}
        alt="Hiring"
      />
      <div className="absolute font-['Manrope'] font-bold text-[16px] text-black z-10" style={{ left: linkLeft, top: linkTop }}>
        &gt;&gt;See Detail
      </div>
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
interface ArticlesProps {
  setActiveTab: (tab: string) => void;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: { label: string; bg: string; color: string }[];
  image: string;
  isTrending?: boolean;
}

const articlesList: Article[] = [
  {
    id: 'ux-mapping',
    title: 'UX Mapping Methods',
    excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map that delights users.',
    date: 'September 24, 2017',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI Design', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog2,
    isTrending: true,
  },
  {
    id: 'agile-dev',
    title: 'Agile Development Projects',
    excerpt: 'Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.',
    date: 'September 24, 2017',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI Design', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog3,
    isTrending: true,
  },
  {
    id: 'user-delight',
    title: 'Three Pillars of User Delight',
    excerpt: 'Delight can be experienced viscerally, behaviourally, and reflectively. A great design incorporates all three dimensions.',
    date: 'November 16, 2014',
    categories: [
      { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
      { label: 'UI Design', bg: '#F0F9FF', color: '#026AA2' },
    ],
    image: imgBlog1,
    isTrending: true,
  },
  {
    id: 'wordpress-plugins',
    title: 'WordPress Plugins & Custom Themes',
    excerpt: 'Creating highly optimized plugins that speed up page rendering speed and enhance search indexing structure for maximum SEO.',
    date: 'October 14, 2019',
    categories: [
      { label: 'Development', bg: '#FFF9F3', color: '#FF9B26' },
      { label: 'Technology', bg: '#EEF4FF', color: '#3538CD' },
    ],
    image: imgBlog2,
  },
  {
    id: 'modern-seo',
    title: 'Fully Managed SEO Services',
    excerpt: 'Understand how authority homepage link schemes and local listing cleanup boosts organic traffic ranks and conversions.',
    date: 'August 08, 2021',
    categories: [
      { label: 'Digital Marketing', bg: '#FDF2FA', color: '#C11574' },
      { label: 'Technology', bg: '#EEF4FF', color: '#3538CD' },
    ],
    image: imgBlog3,
  },
  {
    id: 'interface-design',
    title: 'UI/UX Interactive System Designs',
    excerpt: 'How standard micro-animations, color gradients, and glassmorphism styling parameters create visceral delight.',
    date: 'November 12, 2024',
    categories: [
      { label: 'UI/UX', bg: '#FDF2FA', color: '#C11574' },
      { label: 'Research', bg: '#EEF4FF', color: '#3538CD' },
    ],
    image: imgBlog1,
  },
];

const CATEGORIES = ['All', 'Trending', 'Development', 'Technology', 'Digital Marketing', 'UI/UX'];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Articles({ setActiveTab }: ArticlesProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailSub, setEmailSub] = useState('');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1440) {
        setScale(Math.max(width / 1440, 1280 / 1440));
      } else {
        setScale(1);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredArticles = useMemo(() => {
    return articlesList.filter(article => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' ||
        (selectedCategory === 'Trending' && article.isTrending) ||
        article.categories.some(c => c.label.toLowerCase().includes(selectedCategory.toLowerCase()));
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEmailSub('');
  };

  return (
    <div className="text-black w-full relative min-h-screen">

      <section
        className="bg-[#112222] text-white w-full overflow-visible relative hidden xl:block"
        style={{ height: `${420 * scale}px` }}
      >
        <div
          className="w-[1440px] h-[420px] absolute origin-top"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            left: 'calc(50% - 720px)',
          }}
        >
          {/* Giant "Articles" outline watermark — exact Figma coords */}
          <div
            className="absolute select-none pointer-events-none"
            style={{
              left: -157,
              top: 111.54,
              width: 1023.25,
              height: 105.68,
              fontSize: 224.74,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: 'rgba(255,255,255,0)',
              WebkitTextStroke: '1px rgba(255,255,255,0.28)',
              lineHeight: '222.49px',
              whiteSpace: 'nowrap',
              letterSpacing: '-1.12px',
            }}
          >
            Articles
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          1b. HERO SECTION — Mobile/Tablet (xl:hidden)
          ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#112222] py-14 px-6 overflow-hidden xl:hidden flex flex-col gap-6">
        {/* Mobile watermark */}
        <div className="absolute select-none pointer-events-none opacity-10 font-['Poppins'] font-bold text-white leading-none"
          style={{ fontSize: 120, top: -10, left: -20 }}>
          Art.
        </div>

        <div className="relative z-10 flex flex-col gap-5">
          <h1 className="font-['Poppins'] font-extrabold text-[34px] sm:text-[44px] text-white leading-tight">
            Digital Mafia Insights &amp;<br />One Article at a Time.
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
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. ARTICLES GRID SECTION
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFDF8] px-6 xl:px-[87px] py-16">
        {/* Section header */}
        <div className="flex justify-between items-end mb-10 max-w-[1248px] mx-auto">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Poppins'] font-bold text-[28px] xl:text-[36px] text-[#101828] leading-tight m-0">
              Latest Articles
            </h2>
            <p className="font-['Inter'] text-[15px] xl:text-[16px] text-[#667085] leading-[24px] m-0">
              Explore best articles on UX, UI &amp; Product design
            </p>
          </div>
          <span className="font-['Inter'] text-[13px] text-[#667085]">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Category tabs */}
        <div className="max-w-[1248px] mx-auto border-b border-gray-200 mb-10 flex gap-8 overflow-x-auto no-scrollbar pb-3">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative pb-3 font-['Inter'] font-medium text-[16px] xl:text-[18px] transition-all cursor-pointer border-none bg-transparent outline-none flex items-center gap-2 whitespace-nowrap"
                style={{
                  color: isSelected ? '#112222' : '#667085',
                  fontWeight: isSelected ? 600 : 500,
                }}
              >
                {cat === 'Trending' && (
                  <svg className="w-[18px] h-[18px] text-[#E84B3E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                )}
                <span>{cat}</span>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#112222] translate-y-[1.5px]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="max-w-[1248px] mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-[20px] border border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">No articles under "{selectedCategory}" category yet.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <div
                    key={article.id}
                    onClick={() => setActiveTab('blogdetail')}
                    className="border border-gray-200 p-5 rounded-[20px] bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[460px]"
                  >
                    <div className="h-[218px] rounded-[13px] overflow-hidden shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-grow flex flex-col justify-between pt-5 gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">
                          {article.date}
                        </span>
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-['Inter'] font-semibold text-[20px] text-[#101828] leading-tight group-hover:text-[#20b486] transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          {article.isTrending && (
                            <svg className="w-5 h-5 text-[#101828] group-hover:text-[#20b486] shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                              <polyline points="17 6 23 6 23 12" />
                            </svg>
                          )}
                        </div>
                        <p className="font-['Inter'] text-[15px] text-[#667085] leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {article.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="font-['Inter'] font-medium text-[13px] px-3 py-1 rounded-[16px]"
                            style={{ background: cat.bg, color: cat.color }}
                          >
                            {cat.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="flex justify-center mt-12">
                <button
                  className="flex items-center gap-2 bg-[#164630] hover:bg-[#1e5a3e] text-[#FAFDF8] font-['Poppins'] font-semibold text-[16px] py-3.5 px-7 rounded-[10px] transition-all cursor-pointer border-none shadow-md"
                >
                  <span>View All</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2b. CUSTOMER STORY SECTION — from Figma top:1850 (below grid)
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFDF8] px-6 xl:px-[87px] pb-24 border-b border-gray-200">
        <div className="max-w-[1248px] mx-auto flex flex-col gap-10">
          {/* Section header */}
          <div className="flex flex-col gap-2">
            <h2 className="font-['Poppins'] font-bold text-[28px] xl:text-[36px] text-[#101828] leading-tight m-0">
              Read the lastest customer story
            </h2>
            <p className="font-['Inter'] text-[15px] xl:text-[16px] text-[#667085] leading-[24px] m-0">
              See why customers all over the world love what Excel has to offer
            </p>
          </div>

          {/* Customer story card */}
          <div 
            onClick={() => setActiveTab('blogdetail')}
            className="border border-gray-200 p-5 rounded-[20px] bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col lg:flex-row gap-8 items-stretch"
          >
            {/* Left side: Image */}
            <div className="w-full lg:w-[50%] xl:w-[540px] h-[250px] sm:h-[300px] xl:h-[308px] rounded-[16px] overflow-hidden shrink-0">
              <img
                src={imgCustomerStory}
                alt="Agile Development Projects and Usability"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right side: Content */}
            <div className="flex-grow flex flex-col justify-between py-2 gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-['Inter'] font-semibold text-[14px] text-[#20b486]">
                  March 13, 2014
                </span>
                <h3 className="font-['Inter'] font-semibold text-[24px] xl:text-[30px] text-[#101828] leading-tight group-hover:text-[#20b486] transition-colors">
                  Agile Development Projects and Usability
                </h3>
                <p className="font-['Inter'] text-[15px] xl:text-[16px] text-[#667085] leading-relaxed">
                  Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { label: 'Programming', bg: '#FFF9F3', color: '#FF9B26' },
                  { label: 'Research', bg: '#FDF2FA', color: '#C11574' },
                  { label: 'Developments', bg: '#EEF4FF', color: '#3538CD' }
                ].map((cat, idx) => (
                  <span
                    key={idx}
                    className="font-['Inter'] font-medium text-[13px] px-3 py-1 rounded-[16px]"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════
          4. NEWSLETTER SECTION — Desktop only (before hiring cards)
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 py-16 px-6 xl:px-16 hidden xl:flex flex-col items-center gap-10">
        <div className="max-w-[1200px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-[540px]">
            <span className="font-['Poppins'] text-[#20b486] font-medium text-[16px] uppercase tracking-[1.5px]">Newsletter</span>
            <h2 className="font-['Poppins'] font-bold text-[40px] text-[#101828] leading-tight tracking-tight">Stories and News</h2>
            <p className="font-['Poppins'] text-[16px] text-[#667085] leading-relaxed">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-[440px]">
            <form className="relative w-full h-[54px] bg-white rounded-[100px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E9E9E9] flex items-center p-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full bg-transparent pl-[20px] pr-[140px] font-['Poppins'] text-[15px] text-[#101828] placeholder-[#101828]/40 border-none outline-none"
              />
              <button type="submit" className="absolute right-[5px] top-[5px] bottom-[5px] w-[120px] bg-black hover:bg-gray-900 text-white font-['Poppins'] font-semibold text-[14px] rounded-[100px] flex items-center justify-center transition-colors cursor-pointer border-none">
                Subscribe
              </button>
            </form>
            <p className="font-['Poppins'] text-[13px] text-black/60 text-center">
              We care about your data in our <span className="underline cursor-pointer hover:text-black">privacy policy</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. HIRING & FOOTER OVERLAP — Desktop (xl+)
          ═══════════════════════════════════════════════════════ */}
      <section
        className="text-black w-full overflow-hidden relative hidden xl:block z-20"
        style={{
          height: `${1433 * scale}px`,
          marginBottom: `${-149 * scale}px`,
          marginTop: `${80 * scale}px`,
        }}
      >
        <div
          className="w-[1440px] h-[1433px] absolute origin-top"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            left: 'calc(50% - 720px)',
          }}
        >
          {/* White bg — exactly 1284px = 1433-149 visible height */}
          <div className="absolute left-0 top-0 w-full h-[1284px] bg-white -z-10" />

          {/* Green Banner */}
          <div
            className="absolute left-[207px] w-[1025px] h-[325px] bg-[#164630] rounded-[20px] shadow-lg flex flex-col items-center justify-center"
            style={{ top: '48px' }}
          >
            <span className="font-['Poppins'] text-[#A6E8C5] text-[16px] font-medium tracking-[2.5px] uppercase">
              Get An Idea?
            </span>
            <h3 className="font-['Poppins'] font-bold text-[56px] text-white leading-[68px] text-center mt-[12px] max-w-[800px] tracking-tight">
              Let's Level up Your Brand, together
            </h3>
            <button
              className="w-[234px] h-[54px] bg-[#FCFEFB] hover:bg-gray-100 text-black font-['Poppins'] font-semibold text-[18px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-md mt-[28px] transition-all border-none"
              onClick={() => setActiveTab('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Hiring Cards */}
          <HiringCard left="539.38px" top="371.65px" rotation="-5deg" />
          <HiringCard left="1px" top="257.83px" rotation="-10deg" imgSize={323} imgLeft="115px" imgTop="22px" linkLeft="58px" linkTop="175px" />
          <HiringCard left="-43.61px" top="514px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1063.39px" top="536px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1101px" top="118.80px" rotation="-6deg" imgSize={307} imgLeft="114px" imgTop="22px" linkLeft="46px" linkTop="175px" />

          {/* White Let's Talk Card */}
          <div
            data-layer="Rectangle_4"
            className="absolute left-[137px] top-[812px] w-[1168px] h-[560px] bg-white rounded-[21px] shadow-2xl z-10"
          >
            <h3 className="absolute left-[99px] top-[107px] w-[526px] font-['Inter'] font-extrabold text-[56px] leading-[64px] text-[#1C0202] tracking-tight">
              Let's Talk To Build <br />Your Dream <br />Project
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

            {/* Support/Call/Email badges */}
            <div className="absolute left-[99px] top-[437px] flex gap-[18px]">
              {[
                {
                  icon: <><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></>,
                  fill: 'none', stroke: 'currentColor', label: 'Support', sub: '24*7', w: 244
                },
                {
                  icon: <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />,
                  fill: 'currentColor', stroke: undefined, label: 'Call Us', sub: '+910000000000', w: 244
                },
                {
                  icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
                  fill: 'none', stroke: 'currentColor', label: 'Email Us', sub: 'supportmafia@gmail.com', w: 290
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="h-[90px] bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] px-[15px] hover:scale-105 transition-transform duration-300 cursor-pointer"
                  style={{ width: badge.w }}
                >
                  <div className="w-[42px] h-[42px] bg-white rounded-[10px] flex items-center justify-center shadow-sm shrink-0">
                    <svg viewBox="0 0 24 24" fill={badge.fill} stroke={badge.stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-black">
                      {badge.icon}
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-['Poppins'] font-semibold text-[19px] text-black">{badge.label}</span>
                    <span className="font-['Nunito'] text-[15.8px] text-[#565756]">{badge.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. MOBILE CTA BOTTOM — (xl:hidden)
          ═══════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFDF8] text-[#112121] w-full flex flex-col xl:hidden border-t border-black/5">

        {/* Mobile Newsletter */}
        <div className="px-6 md:px-16 py-10 flex flex-col gap-6 bg-white">
          <div className="flex flex-col gap-2 text-center">
            <span className="font-['Poppins'] text-[#20b486] font-medium text-[16px] uppercase tracking-[1.5px]">Newsletter</span>
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#101828] leading-tight tracking-tight">Stories and News</h2>
            <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#667085] leading-relaxed max-w-[500px] mx-auto">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>
          <form className="relative w-full max-w-[450px] mx-auto h-[54px] bg-white rounded-[100px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E9E9E9] flex items-center p-[5px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-full bg-transparent pl-[20px] pr-[130px] font-['Poppins'] text-[15px] text-[#101828] placeholder-[#101828]/40 border-none outline-none"
            />
            <button type="submit" className="absolute right-[5px] top-[5px] bottom-[5px] w-[110px] bg-black hover:bg-gray-900 text-white font-['Poppins'] font-semibold text-[14px] rounded-[100px] flex items-center justify-center transition-colors cursor-pointer border-none">
              Subscribe
            </button>
          </form>
          <p className="font-['Poppins'] text-[13px] text-black/80 text-center">
            We care about your data in our <span className="underline cursor-pointer hover:text-black">privacy policy</span>
          </p>
        </div>

        <div className="w-full border-t border-gray-200" />

        {/* Mobile Green Banner */}
        <div className="px-6 md:px-16 py-8">
          <div className="w-full bg-[#164630] rounded-[20px] p-8 md:p-12 text-center flex flex-col items-center gap-4 shadow-lg">
            <span className="font-['Poppins'] text-[#A6E8C5] text-[14px] md:text-[16px] font-medium tracking-[2.5px] uppercase">
              Get An Idea?
            </span>
            <h3 className="font-['Poppins'] font-bold text-[32px] md:text-[44px] text-white leading-tight max-w-[600px] tracking-tight">
              Let's Level up Your Brand, together
            </h3>
            <button
              className="px-8 py-3 bg-[#FCFEFB] hover:bg-gray-100 text-black font-['Poppins'] font-semibold text-[16px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-md mt-4 transition-all border-none"
              onClick={() => setActiveTab('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Mobile Hiring Cards */}
        <div className="px-6 md:px-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[800px] mx-auto">
            {[0, 1].map(idx => (
              <div key={idx} className="bg-[#B7F9D2] rounded-[21px] overflow-hidden select-none hover:shadow-lg transition-all duration-300 cursor-pointer relative h-[220px]">
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
            ))}
          </div>
        </div>

        <div className="w-full border-t border-gray-100 my-4" />

        {/* Let's Talk Card */}
        <div className="px-6 md:px-16 pb-16">
          <div className="w-full bg-[#fcfcfc] rounded-[20px] p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
            <h3 className="font-['Inter'] font-extrabold text-[36px] leading-tight text-[#1C0202]">
              Let's Talk To Build Your Dream Project
            </h3>
            <p className="font-['Epilogue'] text-[16px] leading-relaxed text-black/60">
              A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
            </p>
            <div className="flex flex-col gap-4 font-['Poppins']">
              {[
                { icon: 'support', label: 'Support', sub: '24*7' },
                { icon: 'call', label: 'Call Us', sub: '+910000000000' },
                { icon: 'email', label: 'Email Us', sub: 'supportmafia@gmail.com' },
              ].map(b => (
                <div key={b.label} className="bg-[#C7FADC] rounded-[12px] flex items-center gap-[15px] p-4">
                  {b.icon === 'support' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  )}
                  {b.icon === 'call' && (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-black">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                    </svg>
                  )}
                  {b.icon === 'email' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-black">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  <div className="flex flex-col">
                    <span className="font-semibold text-[17px] text-black">{b.label}</span>
                    <span className="font-['Nunito'] text-[14px] text-[#565756]">{b.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}
