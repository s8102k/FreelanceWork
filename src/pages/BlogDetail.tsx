import { useState } from 'react';

// Images from Figma assets
const imgEllipse953 = "http://localhost:9013/assets/5c8a1b9fe4bc550232239738354296ebe4ce9d02.png"; // Author profile image
const imgFrame1000001319 = "http://localhost:9013/assets/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png"; // Large banner image
const imgFrame1000001324 = "http://localhost:9013/assets/794d066b6c3d6571e9f1f4ddc28c49cfc7a62ef4.png"; // Screenshot 1
const imgFrame1000001326 = "http://localhost:9013/assets/d5e5780a19d98e2ced9836377f5a17e1079d0972.png"; // Screenshot 2
const img1JWnoKqsHlwTi0ZpgGsFtoA1 = "http://localhost:9013/assets/9fe3309ee599f18e8ca5b2ada1c6a3e8f48f28f6.png"; // Innovation screenshot

// FAQ Icons
const imgIcon = "http://localhost:9013/assets/1a5eed07aa1a574b0546394dd87f045777f0d008.svg"; // Marketing icon
const imgDown = "http://localhost:9013/assets/0ebad6000761b0cf8ffe68b54cc1f9d25fd24362.svg"; // Chevron down
const imgMaterialSymbolsTrendingUp = "http://localhost:9013/assets/2c64346072831d2d435ef1b5a37f89c224a01ee0.svg";

// CTA Assets
const imgCombinedShape9 = "http://localhost:9013/assets/9989e550043c7b0a22dbda4627d61ded4333ec15.svg";
const imgCombinedShape10 = "http://localhost:9013/assets/284976a07bac044dadc4a723b5517eadcb7c6614.svg";
const imgBlock = "http://localhost:9013/assets/7c5960c54678dae74172714524c3bf9c97cd6f12.svg";
const imgStar = "http://localhost:9013/assets/6d29adeaa3a5421e09c3b6ef994be6117b090d4a.svg";

// Recommended blog images
const imgBlog1 = "http://localhost:9013/assets/009533ddb18880647940253fa905f2a8d6a3a95e.png";
const imgBlog2 = imgFrame1000001319;

interface BlogDetailProps {
  setActiveTab: (tab: string) => void;
}

export default function BlogDetail({ setActiveTab }: BlogDetailProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const detailFaqs = [
    {
      q: "Marketing Integration",
      a: "Our marketing systems tie directly back to product delight models. By tracking visceral user delight points behaviorally and reflectively, we can build custom outreach campaigns with high authority links, generating up to 600% ROI on initial project deployment.",
      icon: imgIcon
    },
    {
      q: "UI UX System Alignment",
      a: "By adhering strictly to unified color swatches, font profiles (outfit/space grotesk), and standardized transitions across screens, digital agencies can reduce usability friction and align early-stage startup builds on high-converting product outcomes.",
      icon: imgIcon
    },
    {
      q: "Blogger Outreach & Backlinking",
      a: "Acquiring authority links requires curated context-driven pitches, local listings alignment, clean citation databases, and high-quality guest posts containing contextual anchor placements.",
      icon: imgIcon
    }
  ];

  const recommendedPosts = [
    {
      id: 'ux-mapping',
      title: 'UX Mapping Methods',
      excerpt: 'Visual-design principles can be applied consistently throughout the process of creating a polished UX map...',
      date: 'September 24, 2017',
      categories: ['Research', 'UI Design', 'UI Design'],
      image: imgBlog2
    },
    {
      id: 'user-delight',
      title: 'Three Pillars of User Delight',
      excerpt: 'Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...',
      date: 'November 16, 2014',
      categories: ['Research', 'UI UX'],
      image: imgBlog1
    }
  ];

  return (
    <div className="bg-[#fafdf8] text-black w-full overflow-x-hidden min-h-screen">
      
      {/* Breadcrumb Navigation Path */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 flex items-center gap-2 font-['Inter'] font-semibold text-[14px] text-gray-500">
        <span 
          onClick={() => setActiveTab('blog')}
          className="text-[#32a471] hover:underline cursor-pointer"
        >
          Blog
        </span>
        <span>&gt;</span>
        <span className="text-[#32a471]">UI/UX Design</span>
        <span>&gt;</span>
        <span className="text-[#565756] truncate">Agile Development Projects and Usability</span>
      </div>

      {/* 1. TOP AUTHOR BANNER HERO */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-[#56f095] p-8 md:p-12 rounded-[32px] md:rounded-[49px] shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center relative overflow-hidden">
          
          {/* Hero text */}
          <div className="flex-grow flex flex-col gap-6 max-w-xl text-left">
            <span className="font-['Inter'] font-bold text-xs uppercase tracking-wider text-black/60">
              UI/UX Design
            </span>
            <h1 className="font-['Inter'] font-extrabold text-[32px] md:text-[48px] text-[#101828] leading-[1.1] tracking-tight">
              Agile Development Projects and Usability
            </h1>
            <p className="font-['Inter'] text-[16px] md:text-[18px] text-black/70 leading-relaxed">
              Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 mt-4">
              <img 
                src={imgEllipse953} 
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shrink-0" 
                alt="Mamit Kumar" 
              />
              <div className="flex flex-col">
                <span className="font-['Inter'] font-bold text-[16px] text-[#101828]">
                  Mamit Kumar
                </span>
                <span className="font-['Inter'] text-[12px] text-[#122]/60">
                  Updated on March 13, 2014
                </span>
              </div>
            </div>
          </div>

          {/* Large showcase banner image */}
          <div className="w-full lg:w-[380px] h-[280px] rounded-[16px] overflow-hidden shadow-xl shrink-0 border-4 border-white/40">
            <img 
              src={imgFrame1000001319} 
              className="w-full h-full object-cover" 
              alt="Agile Usability" 
            />
          </div>

        </div>
      </section>

      {/* 2. RICH EDITORIAL TEXT BLOCK */}
      <section className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-start font-['Inter']">
        
        {/* Left column: Article statistics / quick links */}
        <div className="w-full md:w-[120px] flex md:flex-col gap-6 items-center shrink-0 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-6 sticky top-32">
          <div className="flex flex-col items-center">
            <span className="text-[26px] font-bold text-[#101828]">828</span>
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Claps</span>
          </div>
          <div className="w-px h-6 bg-gray-100 md:hidden" />
          <button className="flex flex-col items-center hover:text-[#32a471] transition-colors cursor-pointer group">
            <span className="text-xl">👏</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#32a471] mt-1">Applause</span>
          </button>
        </div>

        {/* Right column: Main body content */}
        <div className="flex-grow flex flex-col gap-8 text-[#101828] text-[18px] md:text-[20px] leading-[1.6]">
          
          <h2 className="font-bold text-[24px] md:text-[28px] text-black">
            What is Real Estate Buddy
          </h2>
          <p className="text-black/80 font-normal">
            If you're searching{' '}
            <a 
              href="https://uxcel.com/blog/10-best-job-boards-for-ux-designers" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#673ab7] font-semibold underline hover:text-[#32a471]"
            >
              job boards for UX designer positions
            </a>
            , you're probably aware that having a professional portfolio is essential to demonstrate your UI design skills and persuade hiring managers to invite you to an interview.
          </p>

          <p className="text-black/80">
            A UX portfolio is just another UX project — treat it as you would work for a client, and you’ll present yourself as a professional, credible UX designer.
          </p>

          <p className="text-black/80">
            In this article, we dive into our 11 top UX portfolio examples, as well as why you need a portfolio and what you should include.
          </p>

          {/* Screenshot 1 */}
          <div className="my-4 rounded-[26px] overflow-hidden shadow-lg h-[260px] md:h-[440px] border border-gray-100 bg-[#0b0b0b]">
            <img src={imgFrame1000001324} className="w-full h-full object-cover" alt="Portfolio Screenshot" />
          </div>

          <h2 className="font-extrabold text-[32px] md:text-[40px] leading-tight text-black mt-6">
            Do you even need a UX design portfolio?
          </h2>
          <p className="text-black/80">
            Still here? Cool, let’s look at why you need a UX design portfolio and what should be included in yours.
          </p>

          <h3 className="font-bold text-[22px] text-black mt-4">
            11 of the best UX design portfolios & why they work
          </h3>

          <ol className="list-decimal pl-6 flex flex-col gap-3 font-semibold text-[#673ab7] underline hover:text-[#32a471]">
            <li><a href="# bianca" className="hover:underline">The Fresh Portfolio, by Bianca Oliveira</a></li>
            <li><a href="# jennifer" className="hover:underline">The Eye-Catching Portfolio, by Jennifer Etsuko Higa</a></li>
            <li><a href="# pratibha" className="hover:underline">The Straightforward Portfolio, by Pratibha Joshi</a></li>
            <li><a href="# jeff" className="hover:underline">The Entry-Level Portfolio, by Jeff Shibasaski</a></li>
            <li><a href="# sophie" className="hover:underline">The Bold Portfolio, by Sophie Brittain</a></li>
            <li><a href="# victoria" className="hover:underline">The Organized Portfolio, by Victoria P</a></li>
            <li><a href="# natalie" className="hover:underline">The Simple Portfolio, by Natalie Kyle</a></li>
            <li><a href="# wendy" className="hover:underline">The Innovative Portfolio, by Wendy Schorr</a></li>
            <li><a href="# vicky" className="hover:underline">The Friendly Portfolio, by Vicky Marchenko</a></li>
            <li><a href="# daniel" className="hover:underline">The Animated Portfolio, by Daniel Novykov</a></li>
            <li><a href="# aaron" className="hover:underline">The Dramatic Portfolio, by Aaron Rudyk</a></li>
          </ol>

          {/* Screenshot 2 */}
          <div className="my-4 rounded-[26px] overflow-hidden shadow-lg h-[260px] md:h-[440px] border border-gray-100 bg-[#0b0b0b]">
            <img src={imgFrame1000001326} className="w-full h-full object-cover" alt="Responsive design example" />
          </div>

          <h3 className="font-semibold text-[22px] text-black mt-4">
            Questions from interview sessions with users:
          </h3>
          
          <ul className="list-disc pl-6 flex flex-col gap-2 text-black/80 font-normal">
            <li>What is your name?</li>
            <li>What you do for a living?</li>
            <li>Do you own a smartphone?</li>
            <li>What do you look out for when searching for an apartment?</li>
            <li>How much is your budget (Relative)?</li>
            <li>Have you been able to find an apartment within your budget?</li>
            <li>How do you look out for the features?</li>
            <li>Have you ever met an agent?</li>
          </ul>

          {/* Special innovation block image */}
          <div className="my-4 rounded-[26px] overflow-hidden shadow-lg h-[220px] md:h-[300px] border border-gray-100 relative bg-[#0b0b0b]">
            <img src={img1JWnoKqsHlwTi0ZpgGsFtoA1} className="w-full h-full object-cover" alt="Innovation gallery mapping" />
          </div>

          <p className="text-black/80">
            A large contributor to better AR/VR experiences, is better UX. Deeply understanding the tech behind the pretty designs, using an actual VR headset, testing things out in spatial environments, will all be part of the job. 
          </p>

          <p className="text-black/80">
            If you liked the article, a quick *clap* would go a long way. Following us here will keep you up-to-date with our new articles and designs.
          </p>

        </div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="py-24 bg-[#ebf8e8]/20 border-t border-b border-[#c8eedd]/30 w-full">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Inter'] font-extrabold text-[36px] md:text-[44px] text-[#101828] text-center mb-12">
            Frequently Asked Questions!
          </h2>

          <div className="flex flex-col gap-4">
            {detailFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[15px] shadow-sm overflow-hidden border border-[#c8eedd]/20 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-[#d2f7e6]/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
                        <img src={faq.icon} className="w-full h-full filter invert-[0.3]" alt="" />
                      </div>
                      <span className="font-['Inter'] font-semibold text-[18px] md:text-[21px] text-[#391400]">
                        {faq.q}
                      </span>
                    </div>
                    <img 
                      src={imgDown} 
                      className={`w-[14px] h-[14px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      alt="" 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-[#c8eedd]/15' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 font-['Inter'] text-[15px] md:text-[16px] text-black/70 leading-relaxed bg-[#ebf8e8]/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED POSTS */}
      <section className="py-24 px-6 md:px-16 w-full max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="font-['Inter'] font-extrabold text-[28px] text-[#101828] mb-10 text-center md:text-left">
          Recommended for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
          {recommendedPosts.map((post, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveTab('blogdetail')}
              className="border border-gray-200 p-5 rounded-[20px] bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-[180px] rounded-[12px] overflow-hidden shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
              </div>

              <div className="flex-grow flex flex-col justify-between pt-4 gap-3">
                <div>
                  <span className="font-['Inter'] font-semibold text-[13px] text-[#20b486]">
                    {post.date}
                  </span>
                  <div className="flex justify-between items-start gap-2 mt-1">
                    <h3 className="font-['Inter'] font-bold text-[18px] text-[#101828] leading-snug group-hover:text-[#20b486] transition-colors">
                      {post.title}
                    </h3>
                    <img src={imgMaterialSymbolsTrendingUp} className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" alt="" />
                  </div>
                  <p className="font-['Inter'] text-[14px] text-[#667085] leading-relaxed line-clamp-2 mt-1">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.categories.map((cat, catIdx) => (
                    <span 
                      key={catIdx} 
                      className="bg-gray-50 text-gray-500 font-['Inter'] font-medium text-[11px] px-2.5 py-1 rounded-[16px]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION */}
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
