import { useState, useEffect } from 'react';

// Images from Figma assets
import imgEllipse953 from '../assets/ellipse_author.png';
import imgFrame1000001319 from '../assets/blog_img3.png';
import imgFrame1000001324 from '../assets/frame_screenshot1.png';
import imgFrame1000001326 from '../assets/frame_screenshot2.png';
import img1JWnoKqsHlwTi0ZpgGsFtoA1 from '../assets/innovation_screenshot.png';
import imgImage13 from '../assets/image13.png';
import imgImage16 from '../assets/image16.png';
import imgBlog2 from '../assets/blog_img2.png';
import imgBlog3 from '../assets/blog_img3.png';
import imgCtaShape2 from '../assets/cta_shape2.svg';

// FAQ Icons / SVG
const imgMaterialSymbolsTrendingUp = "http://localhost:9013/assets/2c64346072831d2d435ef1b5a37f89c224a01ee0.svg";

interface BlogDetailProps {
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

export default function BlogDetail({ setActiveTab }: BlogDetailProps) {
  const [scale, setScale] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive stats for claps, comments, shares
  const [claps, setClaps] = useState(828);
  const [comments, setComments] = useState(124);
  const [shares, setShares] = useState(568);
  const [hasClapped, setHasClapped] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);
  const [hasShared, setHasShared] = useState(false);

  const [emailSub, setEmailSub] = useState('');

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

  const handleClap = () => {
    if (!hasClapped) {
      setClaps(prev => prev + 1);
      setHasClapped(true);
    } else {
      setClaps(prev => prev - 1);
      setHasClapped(false);
    }
  };

  const handleComment = () => {
    if (!hasCommented) {
      setComments(prev => prev + 1);
      setHasCommented(true);
    } else {
      setComments(prev => prev - 1);
      setHasCommented(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    if (!hasShared) {
      setShares(prev => prev + 1);
      setHasShared(true);
    }
    alert('Link copied to clipboard!');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim()) {
      alert(`Subscribed successfully with email: ${emailSub}`);
      setEmailSub('');
    }
  };

  const detailFaqs = [
    {
      q: "Marketing Integration",
      a: "Our marketing systems tie directly back to product delight models. By tracking visceral user delight points behaviorally and reflectively, we can build custom outreach campaigns with high authority links, generating up to 600% ROI on initial project deployment."
    },
    {
      q: "UI UX System Alignment",
      a: "By adhering strictly to unified color swatches, font profiles (outfit/space grotesk), and standardized transitions across screens, digital agencies can reduce usability friction and align early-stage startup builds on high-converting product outcomes."
    },
    {
      q: "Blogger Outreach & Backlinking",
      a: "Acquiring authority links requires curated context-driven pitches, local listings alignment, clean citation databases, and high-quality guest posts containing contextual anchor placements."
    }
  ];

  // Dynamic layout offset for desktop absolute elements below FAQ
  // Base offset of 170 accounts for the two extra FAQ list elements.
  // Additional 110 accounts for the height of the active FAQ detail block when expanded.
  const faqOffset = 170 + (activeFaq !== null ? 110 : 0);

  return (
    <div className="text-black w-full min-h-screen">

      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP ABSOLUTE POSITIONED SCALED LAYOUT (xl:block) */}
      {/* ──────────────────────────────────────────────────────── */}
      <div
        className="w-full overflow-hidden relative hidden xl:block text-black"
        style={{
          height: `${(9160 + faqOffset) * scale}px`,
          marginBottom: `${-149 * scale}px` // Pulls the footer up to allow hiring cards overlap
        }}
      >
        <div
          className="w-[1440px] absolute origin-top"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            left: 'calc(50% - 720px)',
            height: `${9160 + faqOffset}px`
          }}
        >
          {/* Main body background that ends before the footer overlap */}
          <div className="absolute left-0 top-0 w-full bg-[#FAFDF8] -z-10" style={{ height: `${9011 + faqOffset}px` }} />
          {/* Breadcrumbs Navigation Path */}
          <div
            className="absolute font-['Inter'] font-semibold text-[17px] leading-[20px] text-[#565756]"
            style={{ left: 140, top: 174, width: 558, height: 20 }}
          >
            <span
              onClick={() => setActiveTab('blog')}
              className="text-[#32A471] hover:underline cursor-pointer"
            >
              Blog
            </span>
            <span className="mx-2 text-[#32A471]">&gt;</span>
            <span
              onClick={() => setActiveTab('blog')}
              className="text-[#32A471] hover:underline cursor-pointer"
            >
              UI/UX Design
            </span>
            <span className="mx-2 text-[#32A471]">&gt;</span>
            <span>Agile Development Projects and Usability</span>
          </div>

          {/* Hero Header Banner (Frame 1000001316) */}
          <div
            className="absolute bg-[#56F095] overflow-hidden rounded-[49px] animate-slide-up-hero"
            style={{ left: 120, top: 223, width: 1199, height: 448 }}
          >
            {/* Category tag */}
            <div
              className="absolute font-['Inter'] font-semibold text-[17px] leading-[20px] text-[#5D6969]"
              style={{ left: 58, top: 43 }}
            >
              UI/UX Design
            </div>

            {/* Headline and text container */}
            <div
              className="absolute flex flex-col justify-center items-start gap-[12px]"
              style={{ width: 477, left: 58, top: 84 }}
            >
              <h1
                className="font-['Inter'] font-bold text-[#101828]"
                style={{ width: 630, fontSize: '59.18px', lineHeight: '78.91px', letterSpacing: '-1px' }}
              >
                Agile Development Projects and Usability
              </h1>
              <p
                className="font-['Inter'] font-normal text-[#565756]"
                style={{ width: 605, fontSize: '21.33px', lineHeight: '32px' }}
              >
                Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
              </p>
            </div>

            {/* Author Profile section */}
            <div
              className="absolute flex justify-start items-center gap-[16px]"
              style={{ left: 58, top: 362 }}
            >
              <img
                className="rounded-full border-2 border-white object-cover"
                style={{ width: 48, height: 48 }}
                src={imgEllipse953}
                alt="Mamit Kumar"
              />
              <div className="flex flex-col justify-start items-start">
                <div
                  className="font-['Inter'] font-semibold text-black"
                  style={{ fontSize: '21.33px', lineHeight: '32px' }}
                >
                  Mamit Kumar
                </div>
                <div
                  className="font-['Inter'] font-semibold text-[#32A471]"
                  style={{ fontSize: '14px', lineHeight: '20px' }}
                >
                  Updated on March 13, 2014
                </div>
              </div>
            </div>

            {/* Hero Banner Large Illustration image */}
            <img
              className="absolute object-cover rounded-[13.03px] shadow-md"
              style={{ width: 385, height: 290, left: 737, top: 79 }}
              src={imgFrame1000001319}
              alt="Agile Usability Illustration"
            />
          </div>

          {/* Floating Right Sidebar (Frame 1000001347) */}
          <div
            className="absolute flex flex-col items-center justify-start bg-transparent"
            style={{ left: 1278, top: 671, width: 117, height: 587 }}
          >
            <div className="flex flex-col items-center gap-[21px] mt-[88px]">

              {/* Claps button */}
              <div className="flex flex-col items-center gap-[7px]">
                <button
                  onClick={handleClap}
                  className={`w-[95px] h-[95px] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-gray-100 cursor-pointer ${hasClapped ? 'bg-[#36ED81] scale-105' : 'bg-[#F2F2F2] hover:bg-gray-200'
                    }`}
                >
                  <svg className={`w-[33px] h-[33px] transition-colors duration-300 ${hasClapped ? 'text-[#122]' : 'text-black'}`} fill={hasClapped ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
                <span className="font-['Epilogue'] font-normal text-[20px] leading-[21px] text-center text-black">
                  {claps}
                </span>
              </div>

              {/* Comment button */}
              <div className="flex flex-col items-center gap-[7px]">
                <button
                  onClick={handleComment}
                  className={`w-[95px] h-[95px] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-gray-100 cursor-pointer ${hasCommented ? 'bg-[#36ED81] scale-105' : 'bg-[#F2F2F2] hover:bg-gray-200'
                    }`}
                >
                  <svg className={`w-[33px] h-[33px] transition-colors duration-300 ${hasCommented ? 'text-[#122]' : 'text-black'}`} fill={hasCommented ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </button>
                <span className="font-['Epilogue'] font-normal text-[20px] leading-[21px] text-center text-black">
                  {comments}
                </span>
              </div>

              {/* Share button */}
              <div className="flex flex-col items-center gap-[7px]">
                <button
                  onClick={handleShare}
                  className={`w-[95px] h-[95px] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border border-gray-100 cursor-pointer ${hasShared ? 'bg-[#36ED81] scale-105' : 'bg-[#F2F2F2] hover:bg-gray-200'
                    }`}
                >
                  <svg className={`w-[31px] h-[31px] transition-colors duration-300 ${hasShared ? 'text-[#122]' : 'text-black'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
                <span className="font-['Epilogue'] font-normal text-[20px] leading-[21px] text-center text-black">
                  {shares}
                </span>
              </div>

            </div>
          </div>

          {/* Heading 1 */}
          <div
            className="absolute font-['Inter'] font-semibold text-black"
            style={{ left: 222, top: 731, width: 605, height: 32, fontSize: '24px', lineHeight: '32px' }}
          >
            What is Real Estate Buddy
          </div>

          {/* Body Paragraph 1 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 221, top: 783, width: 983, height: 266, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            If you're searching{' '}
            <a
              href="https://uxcel.com/blog/10-best-job-boards-for-ux-designers"
              target="_blank"
              rel="noreferrer"
              className="text-[#673AB7] hover:text-[#32a471] underline font-medium"
            >
              job boards for UX designer positions
            </a>
            , you're probably aware that having a professional portfolio is essential to demonstrate your UI design skills and persuade hiring managers to invite you to an interview.<br />
            A UX portfolio is just another UX project — treat it as you would work for a client, and you’ll present yourself as a professional, credible UX designer.<br />
            In this article, we dive into our 11 top UX portfolio examples, as well as why you need a portfolio and what you should include.
          </div>

          {/* Heading 2 */}
          <div
            className="absolute font-['Inter'] font-semibold text-black"
            style={{ left: 223, top: 1101, width: 605, height: 32, fontSize: '24px', lineHeight: '32px' }}
          >
            What is Real Estate Buddy
          </div>

          {/* Portfolio Links (Bullet list of 11 portfolios) */}
          <div
            className="absolute font-['Inter'] font-normal flex flex-col gap-[7.5px]"
            style={{ left: 242, top: 1153, width: 496, height: 452 }}
          >
            {[
              "The Fresh Portfolio", "The Eye-Catching Portfolio", "The Straightforward Portfolio",
              "The Entry-Level Portfolio", "The Bold Portfolio", "The Organized Portfolio",
              "The Simple Portfolio", "The Innovative Portfolio", "The Friendly Portfolio",
              "The Animated Portfolio", "The Dramatic Portfolio"
            ].map((p, i) => (
              <a
                key={i}
                href={`#${p.toLowerCase().replace(/ /g, '-')}`}
                className="text-[#673AB7] hover:text-[#32a471] underline font-medium text-[21.33px] leading-[32px] block"
              >
                {p}
              </a>
            ))}
          </div>

          {/* Body Paragraph 2 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 226, top: 1637, width: 983, height: 64, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            Still here? Cool, let’s look at why you need a UX design portfolio and what should be included in yours.<br />
          </div>

          {/* Heading 3 */}
          <div
            className="absolute font-['Inter'] font-extrabold text-black"
            style={{ left: 221, top: 1743, width: 986, height: 67, fontSize: '48px', lineHeight: '67px' }}
          >
            Do you even need a UX design portfolio?
          </div>

          {/* Screenshot Image 1 (Frame 1000001324) */}
          <div
            className="absolute bg-[#0B0B0B] rounded-[26px] overflow-hidden shadow-sm"
            style={{ left: 221, top: 1841, width: 1004, height: 440 }}
          >
            <img src={imgFrame1000001324} className="w-full h-full object-cover select-none pointer-events-none" alt="Figma Layout 1" />
          </div>

          {/* Body Paragraph 3 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 223, top: 2293, width: 983, height: 64, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            Still here? Cool, let’s look at why you need a UX design portfolio and what should be included in yours.<br />
          </div>

          {/* Heading 4 */}
          <div
            className="absolute font-['Inter'] font-semibold text-black"
            style={{ left: 221, top: 2428, width: 605, height: 32, fontSize: '24px', lineHeight: '32px' }}
          >
            Here’s why?
          </div>

          {/* Body Paragraph 4 (Bulleted claims) */}
          <div
            className="absolute font-['Inter'] font-normal text-black flex flex-col gap-1"
            style={{ left: 242, top: 2480, width: 967, height: 110, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            <p>• A portfolio showcases your skills and experience as a UX designer and builds your personal brand</p>
            <p>• A portfolio helps you apply for UX roles</p>
          </div>

          {/* Heading 5 */}
          <div
            className="absolute font-['Inter'] font-semibold text-black"
            style={{ left: 226, top: 2621, width: 605, height: 32, fontSize: '24px', lineHeight: '32px' }}
          >
            Questions from interview session with users
          </div>

          {/* Interview Questions list */}
          <div
            className="absolute font-['Inter'] font-normal text-black flex flex-col gap-1"
            style={{ left: 242, top: 2673, width: 967, height: 326, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            {[
              "What is your name", "What you do for a living", "Do you own a smartphone",
              "what do you look out for when searching for an apartment", "how much is your budget ( Relative )",
              "have you been able to find an apartment within your budget’s", "How do you look out for the features",
              "Have you ever met an agent"
            ].map((q, idx) => (
              <p key={idx}>• {q}</p>
            ))}
          </div>

          {/* Body Paragraph 5 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 226, top: 3030, width: 983, height: 444, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            If you're searching <a href="#jobboards" className="text-[#673AB7] underline">job boards for UX designer positions</a>, you're probably aware that having a professional portfolio is essential to demonstrate your UI design <strong>skills</strong> and persuade hiring managers to invite you to an interview.<br />
            A UX portfolio is just another UX project — treat it as you would work for a client, and you’ll present yourself as a professional, credible <strong>UX designer.</strong><br />
            In this article, we dive into our 11 top UX portfolio examples, as well as why you need a portfolio and what <strong>you should include.</strong><br />
            If you don't have enough enterprise work experience and lack projects to showcase, consider participating in <a href="#challenges" className="underline text-black hover:text-[#32a471]">design challenges</a>, volunteering for design projects, or offering your assistance to friends who need help with design services. These activities can help you build a robust portfolio even without extensive job experience.
          </div>

          {/* Green Box Banner 1 (Frame 1000001325) */}
          <div
            className="absolute bg-[#B7F9D2] rounded-[20.63px] overflow-hidden flex items-center px-[38px]"
            style={{ left: 226, top: 3505, width: 979, height: 134 }}
          >
            <span
              className="font-['Inter'] font-normal text-black"
              style={{ fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
            >
              Looking to build case studies for your UX portfolio? Try <a href="#uxcel" className="underline font-bold hover:text-[#32a471]">Uxcel’s UX challenges</a>, based on common real-life design issues and scenarios.
            </span>
          </div>

          {/* Heading 6 */}
          <div
            className="absolute font-['Inter'] font-extrabold text-black"
            style={{ left: 226, top: 3670, width: 986, height: 134, fontSize: '48px', lineHeight: '67px' }}
          >
            11 of the best UX design portfolios & why they work
          </div>

          {/* Body Paragraph 6 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 226, top: 3824, width: 983, height: 128, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            Creating a killer UX design portfolio is no simple task—sometimes some inspiration can help you on your way. We’ve compiled a list of some of the best stand-out UX design portfolios around. Each website is completely original, showcasing each designer’s strengths and personal brand.
          </div>

          {/* Heading 7 */}
          <div
            className="absolute font-['Inter'] font-extrabold text-black"
            style={{ left: 214, top: 3994, width: 986, height: 67, fontSize: '48px', lineHeight: '67px' }}
          >
            Do you even need a UX design portfolio?
          </div>

          {/* Screenshot Image 2 (Frame 1000001326) */}
          <div
            className="absolute bg-[#0B0B0B] rounded-[26px] overflow-hidden shadow-sm"
            style={{ left: 214, top: 4092, width: 1004, height: 440 }}
          >
            <img src={imgFrame1000001326} className="w-full h-full object-cover select-none pointer-events-none" alt="Figma Layout 2" />
          </div>

          {/* Body Paragraph 7 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 214, top: 4544, width: 983, height: 64, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            Jennifer’s UX portfolio is immediately eye-catching; their personal brand as a UX designer comes across strongly with an abstract design and custom cursor (check it out!).
          </div>

          {/* Tip Box Paragraph */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 214, top: 4639, width: 983, height: 64, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            <strong>🧠 Uxcel's top tip: </strong>Use the same color palette and font for both your UX resume and portfolio to come across as extra professional.
          </div>

          {/* Image 3 (Frame 1000001327) */}
          <div
            className="absolute bg-[#0B0B0B] rounded-[26px] overflow-hidden shadow-sm"
            style={{ left: 408, top: 4740, width: 595, height: 296 }}
          >
            <img src={imgFrame1000001326} className="w-full h-full object-cover select-none pointer-events-none" alt="Figma Layout 3" />
          </div>

          {/* Body Paragraph 8 */}
          <div
            className="absolute font-['Inter'] font-extralight text-black"
            style={{ left: 214, top: 5053, width: 983, height: 160, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            A large contributor to better AR/VR experiences, is better UX. Deeply understanding the tech behind the pretty designs, using an actual VR headset, testing things out in spatial environments, will all be part of the job. There will definitely be a lot of new lessons and changes to our current understanding of UX as we go along. However, this is one of those skills you want to stack up right now, and possibly use in the future.
          </div>

          {/* Heading 8 */}
          <div
            className="absolute font-['Inter'] font-semibold text-black"
            style={{ left: 214, top: 5249, width: 605, height: 32, fontSize: '24px', lineHeight: '32px' }}
          >
            Here’s why?
          </div>

          {/* Body Paragraph 9 */}
          <div
            className="absolute font-['Inter'] font-normal text-black flex flex-col gap-1"
            style={{ left: 235, top: 5302, width: 967, height: 110, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            <p>• A portfolio showcases your skills and experience as a UX designer and builds your personal brand</p>
            <p>• A portfolio helps you apply for UX roles</p>
          </div>

          {/* Body Paragraph 10 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 227, top: 5454, width: 983, height: 160, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            A large contributor to better AR/VR experiences, is better UX. Deeply understanding the tech behind the pretty designs, using an actual VR headset, testing things out in spatial environments, will all be part of the job. There will definitely be a lot of new lessons and changes to our current understanding of UX as we go along. However, this is one of those skills you want to stack up right now, and possibly use in the future.
          </div>

          {/* Image 4 (Frame 1000001328) */}
          <div
            className="absolute bg-[#0B0B0B] rounded-[26px] overflow-hidden shadow-sm"
            style={{ left: 227, top: 5638, width: 991, height: 296 }}
          >
            <img src={img1JWnoKqsHlwTi0ZpgGsFtoA1} className="w-full h-full object-cover select-none pointer-events-none" alt="Figma Layout 4" />
          </div>

          {/* Body Paragraph 11 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 227, top: 5969, width: 983, height: 160, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            You might also observe various apps experimenting with a new feature for a few days, and then pulling it back because users didn’t appreciate it. This is a direct representation of how UX designers are taking the lead when it comes to the future of products and services.
          </div>

          {/* Body Paragraph 12 */}
          <div
            className="absolute font-['Inter'] font-normal text-black"
            style={{ left: 227, top: 6123, width: 983, height: 74, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
          >
            If you liked the article, a quick *clap* would go a long way. Following me here on Medium will keep you up-to-date with my new articles and designs.
          </div>

          {/* Green Box Banner 2 (Frame 1000001329) */}
          <div
            className="absolute bg-[#B7F9D2] rounded-[20.63px] overflow-hidden flex items-center px-[38px]"
            style={{ left: 223, top: 6239, width: 979, height: 134 }}
          >
            <span
              className="font-['Inter'] font-normal text-black"
              style={{ fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
            >
              Looking to build case studies for your UX portfolio? Try <a href="#uxcel" className="underline font-bold hover:text-[#32a471]">Uxcel’s UX challenges</a>, based on common real-life design issues and scenarios.
            </span>
          </div>

          {/* Heading 9 (Frequently Asked Questions!) */}
          <div
            className="absolute font-['Inter'] font-extrabold text-black"
            style={{ left: 223, top: 6446, width: 891, height: 61, fontSize: '43.38px', lineHeight: '60.54px' }}
          >
            Frequently Asked Questions!
          </div>

          {/* FAQ Accordion container (using inline flow for items, starting at top: 6540) */}
          <div
            className="absolute flex flex-col gap-[16px] z-10"
            style={{ left: 223, top: 6540, width: 975 }}
          >
            {detailFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="w-full bg-[#FAFDF8] rounded-[15px] border border-gray-100 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-[12px] text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-[23px]">
                      {/* Red circle container */}
                      <div className="w-[63px] h-[63px] bg-[#FF5B5B] rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-[25.2px] h-[25.2px] text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <span className="font-['Inter'] font-medium text-[32px] text-[#391400]">
                        {faq.q}
                      </span>
                    </div>

                    {/* Chevron icon inside circle */}
                    <div className="w-[32px] h-[32px] bg-[#EF6D58] rounded-full flex items-center justify-center shrink-0">
                      <svg className={`w-[14px] h-[14px] text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100 pb-[12px]' : 'max-h-0 opacity-0'}`}>
                    <p className="pl-[86px] pr-[40px] text-[18px] text-black/75 font-['Inter'] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#C4C4C4] mt-2" />
                </div>
              );
            })}

            {/* Concluding Paragraph (repeated 3 times inside the flowing container) */}
            <div
              className="font-['Inter'] font-normal text-black pt-4"
              style={{ width: 887, fontSize: '21.33px', lineHeight: '32px', letterSpacing: '0.21px' }}
            >
              If you liked the article, a quick *clap* would go a long way. Following me here on Medium will keep you up-to-date with my new articles and designs.If you liked the article, a quick *clap* would go a long way. Following me here on Medium will keep you up-to-date with my new articles and designs.<br />
              If you liked the article, a quick *clap* would go a long way. Following me here on Medium will keep you up-to-date with my new articles and designs.
            </div>
          </div>

          {/* Recommended Posts Header block (Frame 1000001315) */}
          <div
            className="absolute flex justify-between items-center"
            style={{ left: 120, top: `${7030 + faqOffset}px`, width: 1200, height: 93 }}
          >
            <div className="flex flex-col">
              <h2 className="font-['Inter'] font-semibold text-[#101828]" style={{ fontSize: '36.13px', lineHeight: '56.21px' }}>
                Latest Articles
              </h2>
              <p className="font-['Inter'] text-[#667085] text-[17.37px] leading-[26.06px]">
                Explore best articles on UX, UI &amp; Product design
              </p>
            </div>

            <button
              onClick={() => setActiveTab('blog')}
              className="w-[137px] h-[46px] border-2 border-black rounded-[12px] font-['Inter'] font-medium text-[20px] leading-[26.06px] text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              View all
            </button>
          </div>

          {/* Recommended Cards */}
          {/* Card 1 */}
          <div
            onClick={() => setActiveTab('blogdetail')}
            className="absolute bg-white border border-[#D8D8D8] rounded-[20.63px] p-[18.46px] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            style={{ left: 101, top: `${7165 + faqOffset}px`, width: '384.34px', height: '479.71px' }}
          >
            <div className="w-full h-[217.14px] rounded-[13.03px] overflow-hidden shrink-0">
              <img src={imgBlog2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="UX Mapping Methods" />
            </div>
            <div className="flex flex-col gap-[21.71px] pt-[20px]">
              <div className="flex flex-col gap-[13.03px]">
                <span className="font-['Inter'] font-semibold text-[15.2px] text-[#20B486]">September 24, 2017</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Inter'] font-semibold text-[19.54px] text-[#101828] group-hover:text-[#20B486] transition-colors leading-[30.4px]">
                    UX Mapping Methods
                  </h3>
                  <img src={imgMaterialSymbolsTrendingUp} className="w-[26px] h-[26px]" alt="" />
                </div>
                <p className="font-['Inter'] font-normal text-[17.37px] text-[#667085] leading-[26.06px] line-clamp-2">
                  Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                </p>
              </div>
              <div className="flex gap-[8.69px]">
                <span className="bg-[#FDF2FA] text-[#C11574] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">Research</span>
                <span className="bg-[#F0F9FF] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
                <span className="bg-[#FAEED3] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setActiveTab('blogdetail')}
            className="absolute bg-white border border-[#D8D8D8] rounded-[20.63px] p-[18.46px] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            style={{ left: 527.34, top: `${7165 + faqOffset}px`, width: '384.34px', height: '479.71px' }}
          >
            <div className="w-full h-[217.14px] rounded-[13.03px] overflow-hidden shrink-0">
              <img src={imgBlog2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="UX Mapping Methods" />
            </div>
            <div className="flex flex-col gap-[21.71px] pt-[20px]">
              <div className="flex flex-col gap-[13.03px]">
                <span className="font-['Inter'] font-semibold text-[15.2px] text-[#20B486]">September 24, 2017</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Inter'] font-semibold text-[19.54px] text-[#101828] group-hover:text-[#20B486] transition-colors leading-[30.4px]">
                    UX Mapping Methods
                  </h3>
                  <img src={imgMaterialSymbolsTrendingUp} className="w-[26px] h-[26px]" alt="" />
                </div>
                <p className="font-['Inter'] font-normal text-[17.37px] text-[#667085] leading-[26.06px] line-clamp-2">
                  Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                </p>
              </div>
              <div className="flex gap-[8.69px]">
                <span className="bg-[#FDF2FA] text-[#C11574] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">Research</span>
                <span className="bg-[#F0F9FF] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
                <span className="bg-[#FAEED3] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setActiveTab('blogdetail')}
            className="absolute bg-white border border-[#D8D8D8] rounded-[20.63px] p-[18.46px] hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            style={{ left: 953.68, top: `${7165 + faqOffset}px`, width: '384.34px', height: '480.71px' }}
          >
            <div className="w-full h-[217.14px] rounded-[13.03px] overflow-hidden shrink-0">
              <img src={imgBlog3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Agile Development" />
            </div>
            <div className="flex flex-col gap-[21.71px] pt-[20px]">
              <div className="flex flex-col gap-[13.03px]">
                <span className="font-['Inter'] font-semibold text-[15.2px] text-[#20B486]">September 24, 2017</span>
                <div className="flex items-center justify-between">
                  <h3 className="font-['Inter'] font-semibold text-[19.54px] text-[#101828] group-hover:text-[#20B486] transition-colors leading-[30.4px]">
                    Agile Development
                  </h3>
                  <img src={imgMaterialSymbolsTrendingUp} className="w-[26px] h-[26px]" alt="" />
                </div>
                <p className="font-['Inter'] font-normal text-[17.37px] text-[#667085] leading-[26.06px] line-clamp-2">
                  Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
                </p>
              </div>
              <div className="flex gap-[8.69px]">
                <span className="bg-[#FDF2FA] text-[#C11574] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">Research</span>
                <span className="bg-[#F0F9FF] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
                <span className="bg-[#FAEED3] text-[#026AA2] font-['Inter'] font-medium text-[15.2px] px-[10.86px] py-[2.17px] rounded-[17.37px]">UI Design</span>
              </div>
            </div>
          </div>

          {/* Separator Line 114 */}
          <div className="absolute left-0 w-full border-t border-gray-200" style={{ top: `${7728 + faqOffset}px` }} />

          {/* White Background for the top part */}
          <div className="absolute left-0 w-full bg-white -z-10" style={{ top: `${7728 + faqOffset}px`, height: '1284px' }} />

          {/* Newsletter block details */}
          <div
            className="absolute flex flex-col justify-start items-start gap-[13.03px]"
            style={{ left: 120, top: `${7809 + faqOffset}px`, width: 426, height: 153 }}
          >
            <span className="font-['Inter'] font-semibold text-[15.2px] leading-[21.71px] text-[#20B486]">Newsletter</span>
            <div className="flex flex-col gap-[8.69px]">
              <h2 className="font-['Inter'] font-semibold text-[#101828]" style={{ fontSize: '36.13px', lineHeight: '56.21px' }}>
                Stories and News
              </h2>
              <p className="font-['Inter'] text-[#667085] text-[17.37px] leading-[26.06px]">
                Subscribe to learn about new product features, the latest in technology, solutions, and updates.
              </p>
            </div>
          </div>

          {/* Newsletter form wrapper (Frame 1000001304) */}
          <div
            className="absolute flex flex-col justify-start items-center"
            style={{ left: 907, top: `${7844 + faqOffset}px`, width: 406, height: 96 }}
          >
            <form onSubmit={handleSubscribe} className="relative w-[406px] h-[54.1px] bg-white rounded-[15px] border border-[#E9E9E9] flex items-center p-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-full bg-transparent pl-[20px] pr-[140px] font-['Epilogue'] text-[17.15px] text-black placeholder-black/50 border-none outline-none"
                value={emailSub}
                onChange={e => setEmailSub(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 w-[127.29px] h-[44.1px] bg-[#010101] text-white hover:bg-[#36ED81] hover:text-[#122] font-['Epilogue'] font-normal text-[16px] rounded-[10px] border border-white transition-all duration-300 cursor-pointer shadow-md"
              >
                Subscribe
              </button>
            </form>
            <div
              className="font-['Epilogue'] font-normal text-black/60 text-[14px] leading-[36.45px] text-center mt-[8px]"
            >
              We care about your data in our <a href="#privacy" className="text-[#2C2762] underline">privacy policy</a>
            </div>
          </div>

          {/* Separator Line 113 */}
          <div className="absolute left-0 w-full border-t border-gray-250" style={{ top: `${8055 + faqOffset}px` }} />

          {/* Green banner container */}
          <div
            className="absolute left-[207px] w-[1025px] h-[325px] bg-[#164630] rounded-[20px] shadow-lg flex flex-col items-center justify-center"
            style={{ top: `${8120 + faqOffset}px` }}
          >
            <span className="font-['Poppins'] text-[#A6E8C5] text-[16px] font-medium tracking-[2.5px] uppercase">
              Get An Idea?
            </span>
            <h3 className="font-['Poppins'] font-bold text-[56px] text-white leading-[68px] text-center mt-[12px] max-w-[800px] tracking-tight">
              Let’s Level up Your Brand, together
            </h3>
            <button
              className="w-[234px] h-[54px] bg-[#FCFEFB] hover:bg-gray-100 text-black font-['Poppins'] font-semibold text-[18px] rounded-[100px] flex items-center justify-center cursor-pointer shadow-md mt-[28px] transition-all border-none animate-bounce-slow"
              onClick={() => setActiveTab('contact')}
            >
              Get In Touch
            </button>
          </div>

          {/* Floating Hiring Cards */}
          <HiringCard
            style={{ left: '-46px', top: `${8333 + faqOffset}px`, transform: 'rotate(-9deg)', zIndex: 30 }}
            imgSize={321}
            imgLeft="98px"
            imgTop="41px"
            linkLeft="28px"
            linkTop="175px"
          />
          <HiringCard
            style={{ left: '1061px', top: `${8355 + faqOffset}px`, transform: 'rotate(9deg)', zIndex: 30 }}
            imgSize={321}
            imgLeft="98px"
            imgTop="41px"
            linkLeft="28px"
            linkTop="175px"
          />

          {/* White Let's Talk Card container */}
          <div data-layer="Rectangle_4" className="absolute left-[137px] w-[1168px] h-[560px] bg-white rounded-[21px] shadow-2xl z-10" style={{ top: `${8540 + faqOffset}px` }}>
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
            className="absolute left-[839px] w-[484px] h-[484px] object-contain select-none pointer-events-none z-20"
            style={{ top: `${8673 + faqOffset}px` }}
            alt="Dream Project illustration"
          />

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. MOBILE & TABLET FLUID RESPONSIVE VIEW (xl:hidden)     */}
      {/* ──────────────────────────────────────────────────────── */}
      <div className="xl:hidden w-full flex flex-col bg-[#FAFDF8] text-black pb-16">

        {/* Breadcrumbs Nav path */}
        <div className="px-6 pt-8 pb-4 flex items-center flex-wrap gap-1.5 font-['Inter'] font-semibold text-[14px] text-gray-500">
          <span onClick={() => setActiveTab('blog')} className="text-[#32a471] hover:underline cursor-pointer">Blog</span>
          <span>&gt;</span>
          <span className="text-[#32a471]">UI/UX Design</span>
          <span>&gt;</span>
          <span className="text-gray-500 truncate max-w-[200px]">Agile Development</span>
        </div>

        {/* Hero banner section */}
        <div className="px-6 pb-8">
          <div className="bg-[#56f095] p-6 md:p-10 rounded-[32px] flex flex-col gap-6 relative overflow-hidden animate-slide-up-hero">
            <span className="font-['Inter'] font-semibold text-xs uppercase tracking-wider text-black/60">
              UI/UX Design
            </span>
            <h1 className="font-['Inter'] font-extrabold text-[28px] md:text-[40px] text-[#101828] leading-tight">
              Agile Development Projects and Usability
            </h1>
            <p className="font-['Inter'] text-[15px] md:text-[17px] text-black/75 leading-relaxed">
              Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
            </p>

            {/* Profile */}
            <div className="flex items-center gap-3.5 mt-2">
              <img src={imgEllipse953} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0" alt="Mamit Kumar" />
              <div className="flex flex-col">
                <span className="font-['Inter'] font-bold text-[15px] text-[#101828]">Mamit Kumar</span>
                <span className="font-['Inter'] text-[11px] text-[#122]/60">Updated on March 13, 2014</span>
              </div>
            </div>

            {/* Hero Banner Large image */}
            <div className="w-full h-[220px] rounded-[16px] overflow-hidden mt-4 shadow-md">
              <img src={imgFrame1000001319} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* Floating statistics panel (Like / Comments / Share) inside body section */}
        <div className="px-6 py-4 flex items-center justify-around bg-gray-50 border-t border-b border-gray-100 my-4">
          <button onClick={handleClap} className="flex items-center gap-2 font-medium hover:text-[#32A471] transition-colors">
            <span className="text-xl">👏</span>
            <span className="text-sm font-semibold">{claps} Claps</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button onClick={handleComment} className="flex items-center gap-2 font-medium hover:text-[#32A471] transition-colors">
            <span className="text-xl">💬</span>
            <span className="text-sm font-semibold">{comments} Comments</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button onClick={handleShare} className="flex items-center gap-2 font-medium hover:text-[#32A471] transition-colors">
            <span className="text-xl">🔗</span>
            <span className="text-sm font-semibold">Share ({shares})</span>
          </button>
        </div>

        {/* Editorial Text blocks */}
        <div className="px-6 py-6 flex flex-col gap-6 font-['Inter'] text-[17px] md:text-[18px] leading-relaxed text-[#101828]">

          <h2 className="font-bold text-[22px] md:text-[26px]">What is Real Estate Buddy</h2>
          <p>
            If you're searching{' '}
            <a href="#jobboards" className="text-[#673AB7] font-semibold underline">
              job boards for UX designer positions
            </a>
            , you're probably aware that having a professional portfolio is essential to demonstrate your UI design skills and persuade hiring managers to invite you to an interview.
          </p>
          <p>
            A UX portfolio is just another UX project — treat it as you would work for a client, and you’ll present yourself as a professional, credible UX designer.
          </p>

          <h2 className="font-bold text-[22px] md:text-[26px] mt-2">11 UX Portfolios list:</h2>
          <ul className="list-disc pl-6 flex flex-col gap-2 text-[#673AB7] underline font-medium">
            {["The Fresh Portfolio", "The Eye-Catching Portfolio", "The Straightforward Portfolio", "The Entry-Level Portfolio", "The Bold Portfolio"].map((item, idx) => (
              <li key={idx}><a href={`#${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a></li>
            ))}
          </ul>

          <p className="mt-4">
            Still here? Cool, let’s look at why you need a UX design portfolio and what should be included in yours.
          </p>

          <h2 className="font-extrabold text-[28px] leading-snug mt-4">Do you even need a UX design portfolio?</h2>

          <div className="rounded-[20px] overflow-hidden my-2 shadow-md bg-[#0B0B0B]">
            <img src={imgFrame1000001324} className="w-full h-auto" alt="" />
          </div>

          <h2 className="font-bold text-[20px] mt-2">Here’s why?</h2>
          <div className="flex flex-col gap-1.5 font-normal pl-4 border-l-2 border-[#56F095]">
            <p>• A portfolio showcases your skills and experience as a UX designer and builds your personal brand</p>
            <p>• A portfolio helps you apply for UX roles</p>
          </div>

          <h2 className="font-bold text-[20px] mt-4">Questions from interview sessions:</h2>
          <ul className="list-decimal pl-6 flex flex-col gap-1 text-black/80 font-normal">
            <li>What is your name?</li>
            <li>What you do for a living?</li>
            <li>Do you own a smartphone?</li>
            <li>What do you look out for when searching for an apartment?</li>
          </ul>

          <div className="rounded-[20px] overflow-hidden my-2 shadow-md bg-[#0B0B0B]">
            <img src={imgFrame1000001326} className="w-full h-auto" alt="" />
          </div>

          {/* Green block 1 */}
          <div className="bg-[#B7F9D2] p-6 rounded-[20px] my-4 font-normal text-black">
            Looking to build case studies for your UX portfolio? Try <a href="#uxcel" className="underline font-bold">Uxcel’s UX challenges</a>, based on common real-life design issues and scenarios.
          </div>

          <h2 className="font-extrabold text-[28px] leading-snug mt-4">11 of the best UX design portfolios & why they work</h2>
          <p>
            Creating a killer UX design portfolio is no simple task—sometimes some inspiration can help you on your way. We’ve compiled a list of some of the best stand-out UX design portfolios around. Each website is completely original, showcasing each designer’s strengths and personal brand.
          </p>

          <div className="rounded-[20px] overflow-hidden my-2 shadow-md bg-[#0B0B0B] w-full max-w-[450px] mx-auto">
            <img src={img1JWnoKqsHlwTi0ZpgGsFtoA1} className="w-full h-auto" alt="" />
          </div>

          <p className="mt-4 font-normal">
            <strong>🧠 Uxcel's top tip: </strong>Use the same color palette and font for both your UX resume and portfolio to come across as extra professional.
          </p>
        </div>

        {/* Mobile Accordion FAQ block */}
        <div className="px-6 py-8 border-t border-b border-gray-100 my-6 bg-[#ebf8e8]/20">
          <h2 className="font-['Inter'] font-extrabold text-[26px] mb-6 text-[#101828]">
            Frequently Asked Questions!
          </h2>
          <div className="flex flex-col gap-3">
            {detailFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-[12px] border border-gray-100 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-['Inter'] font-semibold text-[17px] text-[#391400]">
                      {faq.q}
                    </span>
                    <div className="w-[24px] h-[24px] bg-[#EF6D58] rounded-full flex items-center justify-center shrink-0">
                      <svg className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-1 text-[14px] text-black/70 leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Recommended posts list */}
        <div className="px-6 py-6">
          <h2 className="font-['Inter'] font-extrabold text-[22px] text-[#101828] mb-6">
            Recommended for you
          </h2>
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div onClick={() => setActiveTab('blogdetail')} className="border border-gray-100 p-4 rounded-[16px] bg-white shadow-sm flex flex-col gap-3 cursor-pointer">
              <img src={imgBlog2} className="w-full h-[160px] object-cover rounded-[10px]" alt="" />
              <span className="font-semibold text-[12px] text-[#20b486]">September 24, 2017</span>
              <h3 className="font-bold text-[16px] text-[#101828]">UX Mapping Methods</h3>
              <p className="text-[13px] text-[#667085] line-clamp-2">Visual-design principles can be applied consistently throughout the process of creating a polished UX map...</p>
            </div>

            {/* Card 2 */}
            <div onClick={() => setActiveTab('blogdetail')} className="border border-gray-100 p-4 rounded-[16px] bg-white shadow-sm flex flex-col gap-3 cursor-pointer">
              <img src={imgBlog3} className="w-full h-[160px] object-cover rounded-[10px]" alt="" />
              <span className="font-semibold text-[12px] text-[#20b486]">September 24, 2017</span>
              <h3 className="font-bold text-[16px] text-[#101828]">Agile Development</h3>
              <p className="text-[13px] text-[#667085] line-clamp-2">Visual-design principles can be applied consistently throughout the process of creating a polished UX map...</p>
            </div>
          </div>
        </div>

        {/* Mobile Newsletter form block */}
        <div className="px-6 md:px-16 py-8 border-t border-gray-100 flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <span className="font-['Poppins'] text-[#20b486] font-medium text-[16px] uppercase tracking-[1.5px]">Newsletter</span>
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#101828] leading-tight tracking-tight">Stories and News</h2>
            <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#667085] leading-relaxed max-w-[500px] mx-auto">
              Subscribe to learn about new product features, the latest in technology, solutions, and updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-[450px] mx-auto h-[54px] bg-white rounded-[100px] shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-[#E9E9E9] flex items-center p-[5px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-full bg-transparent pl-[20px] pr-[130px] font-['Poppins'] text-[15px] text-[#101828] placeholder-[#101828]/40 border-none outline-none"
              value={emailSub}
              onChange={e => setEmailSub(e.target.value)}
              required
            />
            <button type="submit" className="absolute right-[5px] top-[5px] bottom-[5px] w-[110px] bg-black hover:bg-gray-900 text-white font-['Poppins'] font-semibold text-[14px] rounded-[100px] flex items-center justify-center transition-colors cursor-pointer border-none">
              Subscribe
            </button>
          </form>
          <p className="font-['Poppins'] text-[13px] md:text-[14px] text-black/80 text-center">
            We care about your data in our <span className="underline cursor-pointer hover:text-black">privacy policy</span>
          </p>
        </div>

        <div className="w-full border-t border-gray-200 mx-0" />

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

        {/* Mobile Hiring Cards Stack */}
        <div className="px-6 md:px-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[800px] mx-auto">
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
        </div>

        <div className="w-full border-t border-gray-150 my-4" />

        {/* Let's Talk container box fluid layout (Mobile) */}
        <div className="px-6 md:px-16 pb-16">
          <div className="w-full bg-[#fcfcfc] rounded-[20px] p-8 shadow-xl border border-gray-100 flex flex-col gap-8">
            <h3 className="font-['Inter'] font-extrabold text-[36px] leading-tight text-[#1C0202]">
              Let's Talk To Build Your Dream Project
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
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a1 1 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
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

      </div>

    </div>
  );
}
