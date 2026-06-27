import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion, useSpring } from 'framer-motion';
// @ts-ignore
import Lenis from 'lenis/dist/lenis.mjs';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import blurbg from '../assets/blurbg.png';
import Rectangle from '../assets/Rectangle.png';
import stats from '../assets/stats.png';
import discount from '../assets/discount.png';
import rating from '../assets/rating.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.png';
import Touchup from '../assets/Touchup.png';
import hand from '../assets/hand.png';

import imgGrowwWebp from '../assets/logo_groww.png';
import imgSliceWebp from '../assets/logo_slice.png';
import imgBharatPeWebp from '../assets/logo_bharatpe.png';
import imgPostmanWebp from '../assets/logo_postman.png';
import imgGrofersWebp from '../assets/logo_grofers.png';
import imgCredWebp from '../assets/logo_cred.png';
import imgMicrosoftWebp from '../assets/logo_microsoft.png';
import imgAmazonWebp from '../assets/logo_amazon.png';
import imgGrabWebp from '../assets/logo_grab.png';
import imgSalesforceWebp from '../assets/logo_salesforce.svg';
import imgOracleWebp from '../assets/logo_oracle.svg';
import imgIbmWebp from '../assets/logo_ibm.svg';
import stickerNiceWork from '../assets/sticker_nice_work.png';
import stickerAwesome from '../assets/sticker_awesome.png';
import stickerYouDidIt from '../assets/sticker_you_did_it.png';

// Team and News section assets
import imgAkshay from '../assets/figma_images/4e23c508ccad58251ee69768e4be40ccae72a5b1.png';
import imgKunal from '../assets/figma_images/e8d5a07da942473006638f4e994787d52f5c98f3.png';
import imgPratab from '../assets/figma_images/8712c4464d336ec0164e1e405da31c462603b11f.png';
import imgAnuj from '../assets/figma_images/e3310c799411eebe9d944fdabd59f62b2133e1ff.png';
import imgCredLogoSmall from '../assets/figma_images/8f31b424582e9dd8f362e950be92551b19f89a85.png';
import imgMeeshoLogoSmall from '../assets/figma_images/29ce7b4d63e56580d68cc6a3d50a759a2ab0e0a2.png';
import imgETScreenshot from '../assets/figma_images/d847da7b021e6456d75f9e4864d355b5de4b4921.png';
import imgTOIScreenshot from '../assets/figma_images/91fa6aa524a91f739ff4db8aa0507e19c211ca11.png';
import imgInc42Screenshot from '../assets/figma_images/92f7f58a86fd3b950f535009b60f9093c002bbcc.png';
import imgYSScreenshot from '../assets/figma_images/51f74586c8cff6149037e6bedc3930b6669925f0.png';
import imgETLogo from '../assets/figma_images/6ff52c71afcec8e5cf6a741e769e98c32ed96b1e.png';
import imgTOILogo from '../assets/figma_images/56e3d2c8f2975b2f3a358640039bba1d7914246d.png';
import imgInc42Logo from '../assets/figma_images/19600d99e9c82675928ba6d13bc124f2bb81b9c3.png';
import imgYSLogo from '../assets/figma_images/a264e8f0ec937bdb339146094333ae7d525249b4.png';
import imgWaveBottom from '../assets/wave.png';

// New layout section assets
import imgIconClean from '../assets/figma_images/e48233df128631eb75690f4fb7a5d45d15335e47.png';
import imgIconSEO from '../assets/figma_images/737dbd4184d1b9e75614ddbb94a28bcf728c2175.png';
import imgIconResearch from '../assets/figma_images/1eb3bce551928ddf2f3e7e46f2f0fcf13d4b36c3.png';
import imgIconTraffic from '../assets/figma_images/dde81aa13527aebf06e6e362ccdb6a080fb78b4f.png';
import imgIconBriefing from '../assets/figma_images/4f07965b8a9c0ae26eb3edac8237119dec538b29.png';
import imgIconQuality from '../assets/figma_images/a7a795496c001ced73aeea301ee04a171dc845eb.png';
import imgErrorsRobot from '../assets/Group_8361.svg';
import imgHiringCardGroup from '../assets/image16.png';
import imgCtaAirplane from '../assets/image17.png';

// Blogs
import imgBlogDetailDelight from '../assets/figma_images/009533ddb18880647940253fa905f2a8d6a3a95e.png';
import imgBlogDetailMapping from '../assets/figma_images/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png';
import imgBlogDetailAgile from '../assets/figma_images/9ca412fa840de131974162b09d68033e23a850b5.png';

// Branding On Demand Card images
import imgServices from '../assets/image14.png';
import imgJoinUs from '../assets/image15.png';
import imgHiring from '../assets/image16.png';
import imgCTA from '../assets/image17.png';


// Icons and SVGs
// const imgArrowDown = "http://localhost:9013/assets/bcd67fb81bafd311876b872f574da82b350557b4.svg";

// Cards images
// const imgImage13 = "http://localhost:9013/assets/ebd82cd3b56560730d12f6252e1476c6755068eb.png";
// const imgImage14 = "http://localhost:9013/assets/3544a730e2a573f03c2bbbc1014ced7d9760aac2.png";
// const imgImage15 = "http://localhost:9013/assets/d7c7f76296f891e8241f91f6bea6cce774dbda88.png";
// const imgImage16 = "http://localhost:9013/assets/53f0465993b727cb0e8563118258f156b87a5a28.png";
// const imgGroup15127 = "http://localhost:9013/assets/51959169d2428db978d9068f8b6b3d16e5de6db6.svg"; // circular text center arrow

// Blog images
// const imgBlog1 = "http://localhost:9013/assets/009533ddb18880647940253fa905f2a8d6a3a95e.png";
// const imgBlog2 = "http://localhost:9013/assets/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png";
// const imgBlog3 = "http://localhost:9013/assets/9ca412fa840de131974162b09d68033e23a850b5.png";

// CTA Assets
// const imgCombinedShape9 = "http://localhost:9013/assets/9989e550043c7b0a22dbda4627d61ded4333ec15.svg";
// const imgCombinedShape10 = "http://localhost:9013/assets/284976a07bac044dadc4a723b5517eadcb7c6614.svg";
// const imgBlock = "http://localhost:9013/assets/7c5960c54678dae74172714524c3bf9c97cd6f12.svg";
// const imgStar = "http://localhost:9013/assets/6d29adeaa3a5421e09c3b6ef994be6117b090d4a.svg";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
//   const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "What types of services do you offer?",
      a: "We offer comprehensive digital design and branding solutions, including visual identity systems, website design & development, UI/UX optimization, SEO/SMO, and strategic creative direction."
    },
    {
      q: "How does the Unlimited Branding plan work?",
      a: "Our unlimited branding subscription allows you to request as many design tasks as you need. We deliver them sequentially, one by one, with standard turnarounds of 1-2 business days per task."
    },
    {
      q: "Can I cancel my subscription at any time?",
      a: "Yes, you can pause or cancel your subscription at any time with no lock-in contracts or hidden cancellation fees."
    },
    {
      q: "What is your typical turnaround time?",
      a: "Most design requests (landing pages, social creatives, icons, etc.) are completed within 24-48 hours. Larger projects like complex web apps are broken down into smaller milestones."
    },
    {
      q: "Who actually designs my assets?",
      a: "Your assets are designed by our highly skilled, in-house team of senior creative designers, developers, and product marketing specialists."
    }
  ];

  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const heroX = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const heroY = useTransform(smoothMouseY, [-0.5, 0.5], [-4, 4]);

//   const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
//   const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

//   const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2]);
//   const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [-2, 2]);

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const [hoveredMars, setHoveredMars] = useState(false);
  const [testedGlow, setTestedGlow] = useState(false);
  const [photoshopGlow, setPhotoshopGlow] = useState(false);

  const clientLogos = [
    imgGrowwWebp, imgSliceWebp, imgBharatPeWebp, imgPostmanWebp, imgGrofersWebp,
    imgCredWebp, imgMicrosoftWebp, imgAmazonWebp, imgGrabWebp, imgSalesforceWebp,
    imgOracleWebp, imgIbmWebp
  ];

  const row1 = [img6, img3, img9, img12];
  const row2 = [img5, img2, img8, img11];
  const row3 = [img4, img1, img7, img10];

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="bg-[#fafdf8] text-black w-full overflow-x-hidden min-h-screen"
    >
      {/* 1. TOP HERO SECTION */}
      <section className="relative w-full min-h-[906px] overflow-hidden flex flex-col items-center justify-center py-20 px-6 md:px-16 border-b border-[rgba(255,255,255,0.05)] bg-[#0d1a1a]">
        {/* Background Tilted Card Grid and Gradients (Variant 2) */}
        <div className="absolute inset-0 select-none pointer-events-none z-0 overflow-hidden bg-[#0d1a1a]">
          <div className="absolute w-[220%] h-[150%] left-[-40%] top-[-25%] origin-center rotate-[9deg] flex flex-col gap-6 justify-center">
            {/* Row 1 */}
            <div className="flex gap-6 w-max animate-marquee-right">
              {[...row1, ...row1].map((img, idx) => (
                <div key={`r1-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
              {[...row1, ...row1].map((img, idx) => (
                <div key={`r1-dup-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-6 w-max animate-marquee-right">
              {[...row2, ...row2].map((img, idx) => (
                <div key={`r2-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
              {[...row2, ...row2].map((img, idx) => (
                <div key={`r2-dup-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex gap-6 w-max animate-marquee-right">
              {[...row3, ...row3].map((img, idx) => (
                <div key={`r3-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
              {[...row3, ...row3].map((img, idx) => (
                <div key={`r3-dup-${idx}`} className="w-[380px] h-[240px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 shrink-0 bg-white/5">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* Dark Overlay Gradient on top of cards */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #0d1a1a 0%, #0d1a1a 45%, rgba(13, 26, 26, 0.95) 48%, rgba(13, 26, 26, 0) 55%)'
            }}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-7xl flex flex-col items-start px-4 md:px-8 mt-12">
          {/* Title */}
          <h1 className="font-['Space_Grotesk'] font-bold text-[48px] md:text-[68px] text-white leading-[1.08] tracking-tight text-left">
            Dstudio Creative<br />
            Web <span className="text-[#d8f243]">Soluti On</span><br />
            Company
          </h1>
          {/* Lime Underline Bar */}
          <div className="w-[100px] h-[6px] bg-[#d8f243] mt-4 mb-8 rounded-full" />

          {/* Subheading */}
          <p className="font-['Manrope'] text-[18px] md:text-[22px] text-[#e0e7e7] max-w-2xl leading-relaxed text-left font-medium">
            Hello! We are Designer, Developer,<br />
            Programmer,<br />
            marketing specialist working hard to transform<br />
            your next idea into a big success.
          </p>

          {/* Button */}
          <button
            onClick={() => setActiveTab('contact')}
            className="mt-10 bg-[#ffd500] hover:bg-[#ffcc00] text-black font-['Space_Grotesk'] font-bold text-[18px] px-8 py-4 rounded-[14px] flex items-center gap-3 transition-all duration-300 shadow-[0_4px_20px_rgba(255,213,0,0.25)] hover:scale-105 cursor-pointer"
          >
            <span>Let talk</span>
            <span className="text-xl">→</span>
          </button>

          {/* Partner Logos */}
          <div className="flex flex-wrap items-center gap-x-16 gap-y-8 mt-20 md:mt-28">
            {/* Upwork */}
            <div className="flex flex-col items-start gap-1.5">
              <div className="font-['Space_Grotesk'] font-extrabold text-[32px] tracking-tight text-white select-none">
                <span className="text-[#36ed81]">up</span>work<span className="text-[#36ed81]">™</span>
              </div>
              <div className="text-white/40 text-[11px] uppercase font-bold tracking-widest font-sans">
                Top Rated <span className="mx-1">|</span> 100% Job Success
              </div>
            </div>

            {/* Trustpilot */}
            <div className="flex flex-col items-start gap-1.5">
              <div className="font-['Space_Grotesk'] font-bold text-[30px] tracking-tight text-white flex items-center gap-2 select-none">
                <svg className="w-7 h-7 text-[#36ed81] fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Trustpilot
              </div>
              <div className="flex gap-1 select-none">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#36ed81] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Clutch */}
            <div className="flex flex-col items-start gap-1.5">
              <div className="font-['Space_Grotesk'] font-extrabold text-[30px] tracking-tight text-white flex items-center select-none leading-none">
                Clut
                <span className="relative inline-block leading-none">
                  c
                  <span className="absolute w-[8px] h-[8px] bg-[#da3838] rounded-full top-[50%] left-[55%] -translate-x-1/2 translate-y-[-20%]"></span>
                </span>
                h
              </div>
              <div className="text-white/40 text-[11px] uppercase font-bold tracking-widest font-sans">
                FIRMS THAT DELIVER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND TRUST SECTION */}
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.95 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0d1a1a] py-14 px-6 md:px-16 border-t border-b border-white/5 flex flex-col items-center justify-center"
      >
        <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center gap-10">
          <p className="font-['Manrope'] md:text-[18px] text-[15px] font-bold text-white tracking-normal select-none">
            Trusted By Greatest Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-8 max-w-6xl w-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              className="h-[28px] md:h-[36px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none"
              alt="Google"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
              className="h-[30px] md:h-[38px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none"
              alt="Airbnb"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
              className="h-[32px] md:h-[40px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none"
              alt="Shopify"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/creativemarket.svg"
              className="h-[26px] md:h-[33px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none"
              alt="Creative Market"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
              className="h-[32px] md:h-[40px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none"
              alt="Shopify"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              className="h-[22px] md:h-[28px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity select-none translate-y-1.5"
              alt="Amazon"
            />
          </div>
        </div>
      </motion.section>

      {/* 1.5 SERVICES WE PROVIDE SECTION */}
      <motion.section 
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.95 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0d1a1a] py-24 px-6 md:px-16 border-b border-white/5 w-full flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
            <h2 className="font-['Space_Grotesk'] font-bold text-[36px] md:text-[54px] text-white leading-tight mb-4 select-none">
              <span className="text-[#2dd36f]">Services</span>{' '}
              <span className="relative inline-block">
                We Provide
                <svg
                  className="absolute -top-3 -right-4 w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="15" x2="14" y2="2" />
                  <line x1="8" y1="16" x2="22" y2="9" />
                  <line x1="12" y1="17" x2="19" y2="19" />
                </svg>
              </span>
            </h2>
            <p className="font-['Manrope'] text-[#a8b8b8] text-[16px] md:text-[18px] leading-relaxed">
              We drive our clients' growth through innovation and hard work
            </p>
          </div>

          {/* Cards Grid Container with background blurbg positioned relative to the grid */}
          <div className="w-full relative">
            {/* Background Design */}
            <div className="absolute left-[50%] lg:left-[66.6%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[950px] lg:w-[1200px] h-[950px] lg:h-[1200px] pointer-events-none select-none z-0 opacity-75">
              <img src={blurbg} className="w-full h-full object-contain" alt="" />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
              {[
                {
                  title: "Website Maintenance",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                },
                {
                  title: "UX & UI Design",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                },
                {
                  title: "Web Design",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                },
                {
                  title: "Affordable SEO",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                },
                {
                  title: "E- commerce",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                },
                {
                  title: "Mobile Friendly",
                  description: "We provide constant monitoring and repairing services to make your site active 24/7."
                }
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#132222] border border-white/6 hover:border-[#2dd36f]/30 rounded-[24px] p-8 md:p-10 flex flex-col items-start min-h-[380px] md:min-h-[460px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(13,26,26,0.5)] group"
                >
                  {/* Warning/Info Icon */}
                  <div className="w-12 h-12 rounded-[12px] border border-white/10 bg-white/2 flex items-center justify-center mb-8">
                    <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Space_Grotesk'] font-bold text-[22px] md:text-[24px] text-white mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Manrope'] text-[#a8b8b8] text-[15px] md:text-[16px] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <button
                    onClick={() => setActiveTab('articles')}
                    className="read-more-btn mt-auto mb-8"
                  >
                    <span>Read more</span>
                    <span className="arrow-icon">
                      <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 1.6 GROW YOUR BUSINESS PILLARS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-32 relative z-10">
            {/* Grow Your Business */}
            <div className="flex flex-col items-start text-left">
              {/* Icon Container */}
              <div className="w-24 h-24 relative flex items-center justify-center mb-8 select-none">
                <img src={Rectangle} className="absolute inset-0 w-full h-full object-contain" alt="" />
                <img src={stats} className="relative z-10 w-12 h-12 object-contain" alt="Grow" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[24px] text-white mb-4 leading-snug">
                Grow Your Business
              </h3>
              <p className="font-['Manrope'] text-[#a8b8b8] text-[16px] leading-relaxed mb-8 max-w-sm min-h-[52px]">
                we always to help your company to grow with us.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="text-white bg-transparent font-semibold text-[16px] py-2.5 inline-flex items-center cursor-pointer select-none"
              >
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Drive more sales */}
            <div className="flex flex-col items-start text-left">
              {/* Icon Container */}
              <div className="w-24 h-24 relative flex items-center justify-center mb-8 select-none">
                <img src={Rectangle} className="absolute inset-0 w-full h-full object-contain" alt="" />
                <img src={discount} className="relative z-10 w-12 h-12 object-contain" alt="Sales" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[24px] text-white mb-4 leading-snug">
                Drive more sales
              </h3>
              <p className="font-['Manrope'] text-[#a8b8b8] text-[16px] leading-relaxed mb-8 max-w-sm min-h-[52px]">
                Every company that we handle we always drive more sales.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="text-[#0d1a1a] bg-[#2dd36f] font-semibold text-[16px] px-5 py-2.5 -ml-5 rounded-full inline-flex items-center cursor-pointer select-none"
              >
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Handle by Experts */}
            <div className="flex flex-col items-start text-left">
              {/* Icon Container */}
              <div className="w-24 h-24 relative flex items-center justify-center mb-8 select-none">
                <img src={Rectangle} className="absolute inset-0 w-full h-full object-contain" alt="" />
                <img src={rating} className="relative z-10 w-12 h-12 object-contain" alt="Experts" />
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[24px] text-white mb-4 leading-snug">
                Handle by Experts
              </h3>
              <p className="font-['Manrope'] text-[#a8b8b8] text-[16px] leading-relaxed mb-8 max-w-sm min-h-[52px]">
                You don't need to worry, We are experts.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="text-white bg-transparent font-semibold text-[16px] py-2.5 inline-flex items-center cursor-pointer select-none"
              >
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RECENT WORKS SECTION */}
      <section className="py-24 px-6 md:px-16 w-full flex flex-col items-center justify-center relative overflow-hidden">
        {/* Base Background Layer */}
        <div className="absolute inset-0 bg-[#0d1a1a] z-0" />
        {/* Greyish-Teal Gradient Layer (Fades in when hovering on Tested on Animals card) */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
          style={{
            background: 'radial-gradient(circle at 50% 45%, #384848 0%, #0d1a1a 80%)',
            opacity: testedGlow ? 1 : 0
          }}
        />
        {/* Clay-Orange Gradient Layer (Fades in when hovering on Mars card) */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #af704f 0%, #0d1a1a 80%)',
            opacity: hoveredMars ? 1 : 0
          }}
        />
        {/* Golden-Brown Gradient Layer (Fades in when hovering on Photoshop editing card) */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
          style={{
            background: 'radial-gradient(circle at 70% 30%, #33261c 0%, #0d1a1a 80%)',
            opacity: photoshopGlow ? 1 : 0
          }}
        />
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">

          {/* Header */}
          <div className="text-center w-full mb-16 flex flex-col items-center">
            <h2 className="font-['Space_Grotesk'] font-bold text-[36px] md:text-[54px] text-white leading-tight mb-6 select-none">
              Here Are Few Our Recent Works
            </h2>
            <p className="font-['Manrope'] text-[#a8b8b8] text-[16px] md:text-[18px] leading-relaxed w-full">
              We drive our clients’ growth through innovation and hard workclients’
              <br />
              growth through
            </p>
          </div>

          {/* Staggered Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mt-8">

            {/* Column 1 - shifted down */}
            <div className="flex flex-col gap-6 lg:mt-24">
              {/* Card 1.1 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] overflow-hidden group cursor-pointer">
                <img src={photo1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Touchp" />
                {/* Center Hand and Text Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={hand}
                    className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 object-contain select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    alt="Hand Icon"
                  />
                  <img
                    src={Touchup}
                    className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] max-w-[150px] object-contain select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    alt="Touchp Text"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Typography
                </div>
              </div>
              {/* Card 1.2 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] overflow-hidden group cursor-pointer">
                <img src={photo1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Touchp" />
                {/* Center Hand and Text Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={hand}
                    className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 object-contain select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    alt="Hand Icon"
                  />
                  <img
                    src={Touchup}
                    className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] max-w-[150px] object-contain select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                    alt="Touchp Text"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Typography
                </div>
              </div>
            </div>

            {/* Column 2 - aligned high */}
            <div className="flex flex-col gap-6">
              {/* Card 2.1 */}
              <div
                onMouseEnter={() => setHoveredMars(true)}
                onMouseLeave={() => setHoveredMars(false)}
                className="relative w-full aspect-3/4 rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mars" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Typography
                </div>
              </div>
              {/* Card 2.2 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] overflow-hidden group cursor-pointer">
                <img src={photo2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mars" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Typography
                </div>
              </div>
            </div>

            {/* Column 3 - shifted down */}
            <div className="flex flex-col gap-6 lg:mt-24">
              {/* Card 3.1 */}
              <div
                onMouseEnter={() => setTestedGlow(true)}
                onMouseLeave={() => setTestedGlow(false)}
                className="relative w-full aspect-3/4 rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tested on Animals" />
                <div className="absolute bottom-6 left-6 text-[#132222]/80 text-[12px] font-semibold tracking-wide select-none">
                  &gt; Ad design
                </div>
              </div>
              {/* Card 3.2 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] cursor-pointer overflow-hidden group">
                <img src={photo3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tested on Animals" />
                <div className="absolute bottom-6 left-6 text-[#132222]/80 text-[12px] font-semibold tracking-wide select-none">
                  &gt; Ad design
                </div>
              </div>
            </div>

            {/* Column 4 - aligned high */}
            <div className="flex flex-col gap-6">
              {/* Card 4.1 */}
              <div
                onMouseEnter={() => setPhotoshopGlow(true)}
                onMouseLeave={() => setPhotoshopGlow(false)}
                className="relative w-full aspect-3/4 rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo4} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Photoshop editing" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Photoshop editing
                </div>
              </div>
              {/* Card 4.2 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] overflow-hidden group">
                <img src={photo4} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Photoshop editing" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Photoshop editing
                </div>
              </div>
            </div>

            {/* Column 5 - shifted down */}
            <div className="flex flex-col gap-6 lg:mt-24">
              {/* Card 5.1 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] bg-[#132222] border border-white/4 p-6 flex flex-col justify-between overflow-hidden group">
                <div className="flex-1 flex items-center justify-center select-none overflow-hidden mt-2">
                  <img src={photo5} className="max-h-[85%] max-w-full object-contain rounded-sm shadow-md group-hover:scale-105 transition-transform duration-500" alt="E-book cover" />
                </div>
                <div className="text-white/80 text-[12px] font-semibold tracking-wide mt-4 select-none">
                  &gt; E-book cover design
                </div>
              </div>
              {/* Card 5.2 */}
              <div className="relative w-full aspect-3/4 rounded-[20px] bg-[#132222] border border-white/4 p-6 flex flex-col justify-between overflow-hidden group">
                <div className="flex-1 flex items-center justify-center select-none overflow-hidden mt-2">
                  <img src={photo5} className="max-h-[85%] max-w-full object-contain rounded-sm shadow-md group-hover:scale-105 transition-transform duration-500" alt="E-book cover" />
                </div>
                <div className="text-white/80 text-[12px] font-semibold tracking-wide mt-4 select-none">
                  &gt; E-book cover design
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4.5 METRICS & BRAND STRIPE SECTION */}
      <section
        className="w-full relative overflow-hidden px-6 md:px-20"
        style={{
          background: 'linear-gradient(135deg, #041A1F 0%, #071F1B 100%)',
          minHeight: '1000px',
        }}
      >
        {/* Subtle radial glow behind circles */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '5%', top: '20%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(57,232,122,0.06) 0%, transparent 70%)',
          }}
        />

        {/* ── Content Row ── */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start justify-between pt-20 pb-[260px]">

          {/* Left: Headline + Description */}
          <div className="flex-1 flex flex-col items-start pt-8 max-w-[520px]">
            <h2
              className="text-white tracking-tight"
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(54px, 5.5vw, 90px)',
                lineHeight: 1.1,
              }}
            >
              It's all quiet,<br />Simple
            </h2>
            <p
              className="mt-6 leading-relaxed"
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: '#D9D9D9',
                fontSize: '15px',
                fontWeight: 400,
                maxWidth: '320px',
              }}
            >
              We're obsessed with crafting distinctive brands,<br />
              and we're pretty great at it, too!
            </p>
          </div>

          {/* Right: Floating dot + Circles */}
          <div className="flex-1 flex items-center justify-center relative pt-10">
            {/* Floating white dot */}
            <div
              className="absolute animate-float"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'white',
                top: '8px',
                left: '5%',
                boxShadow: '0 0 10px rgba(255,255,255,0.45)',
              }}
            />

            {/* Three overlapping circles — pushed down and right */}
            <div className="flex items-center justify-center" style={{ transform: 'translate(140px, 320px)' }}>
              {/* Circle 1 — light gray (furthest back) */}
              <div
                className="rounded-full flex flex-col items-center justify-center shadow-lg shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-default select-none"
                style={{ width: '195px', height: '195px', background: '#F2F2F2', zIndex: 10 }}
              >
                <span style={{ fontFamily: "'Space Grotesk', serif", fontWeight: 700, fontSize: '44px', color: '#111', lineHeight: 1 }}>120+</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', color: '#555', marginTop: '8px', fontWeight: 500 }}>Branded Launch</span>
              </div>

              {/* Circle 2 — green (middle layer) */}
              <div
                className="rounded-full flex flex-col items-center justify-center shadow-2xl shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-default select-none"
                style={{ width: '195px', height: '195px', background: '#39E87A', marginLeft: '-45px', marginRight: '-45px', zIndex: 15 }}
              >
                <span style={{ fontFamily: "'Space Grotesk', serif", fontWeight: 700, fontSize: '44px', color: '#071F1B', lineHeight: 1 }}>100+</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', color: '#0a2e18', marginTop: '8px', fontWeight: 600 }}>Rowanwe Model</span>
              </div>

              {/* Circle 3 — light gray (front layer, above green) */}
              <div
                className="rounded-full flex flex-col items-center justify-center shadow-lg shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-default select-none"
                style={{ width: '195px', height: '195px', background: '#F2F2F2', zIndex: 20 }}
              >
                <span style={{ fontFamily: "'Space Grotesk', serif", fontWeight: 700, fontSize: '44px', color: '#111', lineHeight: 1 }}>20+</span>
                <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: '12px', color: '#555', marginTop: '8px', fontWeight: 500 }}>Branded Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Diagonal Brand Ribbon ── absolute, bottom of section */}
        <div
          className="absolute overflow-hidden z-10 shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
          style={{
            left: '-20%',
            width: '140%',
            height: '60px',
            bottom: '180px',
            background: '#e0f7ed',
            transform: 'rotate(11.87deg)',
          }}
        >
          <div
            className="flex w-max items-center h-full animate-logo-marquee"
            style={{ gap: '48px', paddingLeft: '32px' }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                style={{ height: '28px' }}
                className="object-contain shrink-0 select-none pointer-events-none"
                alt=""
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivering Outstanding Results Section ── */}
      <div className="flex flex-col bg-white">
        <div className="self-stretch bg-[#F7FCF5] pt-20 pb-24">
          <div className="flex flex-col items-center self-stretch max-w-[1024px] mb-12 mx-auto gap-[33px]">
            <h2 className="font-['Space_Grotesk'] text-[36px] md:text-[67px] leading-tight text-center font-bold text-black select-none">
              <span className="text-outline font-light">Delivering</span>{" "}
              <span className="font-extrabold text-black">Outstanding</span>{" "}
              <span className="text-outline font-light">Results</span>
            </h2>
            <span className="text-black text-2xl md:text-3xl font-semibold text-center px-4" >
              {"Over 800 Client Testimonials and Success stories"}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start self-stretch max-w-[1180px] relative py-px mb-12 mx-auto gap-20 lg:gap-0 px-6 lg:px-0">

            {/* Card 1 */}
            <div className="flex flex-col items-start relative pt-[19px] pr-0 lg:pr-[30px] mr-0 lg:mr-[26px] w-full max-w-[360px] lg:max-w-none lg:flex-1">
              <div className="flex flex-col items-start self-stretch gap-[31px]">
                <span className="text-[#7A7A7A] text-[11px] font-bold ml-12" >
                  {"Costumer Review"}
                </span>
                <div className="flex flex-col items-start self-stretch bg-[#FBFBFC] py-[51px] rounded-[13px] border border-solid border-[#F2F2F2]"
                  style={{
                    boxShadow: "0px 15px 32px #ADADAD1A"
                  }}>
                  <span className="text-[#4A4646] text-[17px] font-bold mb-3 ml-[26px]" >
                    {"Improved the Revenue & Conversion"}
                  </span>
                  <div className="flex flex-col items-center mb-4 self-center gap-2.5">
                    <div className="flex flex-col items-center relative">
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/7pius595_expires_30_days.png"}
                        className="w-[260px] h-[138px] object-fill"
                        alt=""
                      />
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center ml-[-32px]" >
                        {"57.43%"}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold" >
                      <span className="text-[#04B200]">{"4 Keywords"}</span>
                      <span className="text-[#222222]">{" ranked in Google"}</span>
                    </span>
                  </div>
                  <div className="flex justify-center items-center self-stretch mb-[35px] mx-8">
                    <div className="flex flex-col shrink-0 items-start bg-[#75C57F5E] py-[3px] px-2 mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Lip Fillers Casey"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#FEECEB] py-[3px] px-[7px] mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Casey Powell Botox"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#978FED57] py-[3px] px-[7px] mr-2 rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Botox"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#EAEAEA] py-1 px-2 rounded-[5px]">
                      <span className="text-white text-[11px]" >
                        {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch relative mx-[22px]">
                    <div className="flex justify-end items-start self-stretch bg-cover bg-center relative"
                      style={{
                        backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/7l51mnyw_expires_30_days.png)',
                      }}
                    >
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/kijnbkbi_expires_30_days.png"}
                        className="w-[5px] h-[63px] mt-[91px] mr-[26px] object-fill"
                        alt=""
                      />
                      <div className="flex flex-col shrink-0 items-start mt-1.5 mb-[30px] mr-[53px] gap-1">
                        <div className="flex flex-col items-center relative">
                          <div className="flex flex-col items-start bg-white py-[9px] pl-[13px] pr-6 gap-[3px] rounded-[7px] border border-solid border-[#F9F9F9]"
                            style={{
                              boxShadow: "0px 1.8642522096633911px 3px #00000008"
                            }}>
                            <span className="text-[#7A7A7A] text-[9px]" >
                              {"Lip Fillers Casey"}
                            </span>
                            <div className="flex flex-col items-start bg-[#FEECEB] pt-0.5 px-[3px] rounded-[3px]">
                              <span className="text-[#da3838] text-[11px] font-bold" >
                                {"+3.4%"}
                              </span>
                            </div>
                          </div>
                          <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[9px] right-[-75px]">
                          </div>
                        </div>
                        <div className="flex items-center ml-[31px] gap-[46px]">
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/54fg2nr8_expires_30_days.png"}
                            className="w-[5px] h-[85px] object-fill"
                            alt=""
                          />
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/onfus2t0_expires_30_days.png"}
                            className="w-[5px] h-[86px] object-fill"
                            alt=""
                          />
                        </div>
                      </div>
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/0zuqbx2o_expires_30_days.png"}
                        className="w-[5px] h-[133px] mt-4 mr-[17px] object-fill"
                        alt=""
                      />
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[42px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[70px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute bottom-[88px] right-px">
                      </div>
                    </div>
                    <div className="flex flex-col items-center absolute top-2.5 left-0 gap-[17px]">
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 4"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 3"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 2"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 1"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/ehn9k8nu_expires_30_days.png"}
                className="w-[131px] h-[111px] absolute top-0 right-[104px] object-fill"
                alt=""
              />
              <img
                src={stickerNiceWork}
                className="absolute top-[15px] right-[10px] w-[95px] h-[95px] object-contain rotate-[8deg] z-20"
                alt="Nice Work"
              />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start relative pt-[19px] pr-0 lg:pr-[30px] mr-0 lg:mr-[26px] w-full max-w-[360px] lg:max-w-none lg:flex-1">
              <div className="flex flex-col items-start self-stretch gap-[31px]">
                <span className="text-[#7A7A7A] text-[11px] font-bold ml-12" >
                  {"Costumer Review"}
                </span>
                <div className="flex flex-col items-start self-stretch bg-[#FBFBFC] py-[51px] rounded-[13px] border border-solid border-[#F2F2F2]"
                  style={{
                    boxShadow: "0px 15px 32px #ADADAD1A"
                  }}>
                  <span className="text-[#4A4646] text-[17px] font-bold mb-3 ml-[27px]" >
                    {"Improved the Revenue & Conversion"}
                  </span>
                  <div className="flex flex-col items-center mb-[17px] self-center gap-[9px]">
                    <div className="flex flex-col items-center relative">
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/7pius595_expires_30_days.png"}
                        className="w-[260px] h-[138px] object-fill"
                        alt=""
                      />
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center ml-[-32px]" >
                        {"77.73%"}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold" >
                      <span className="text-[#04B200]">{"2 Keywords"}</span>
                      <span className="text-[#222222]">{" ranked in Google"}</span>
                    </span>
                  </div>
                  <div className="flex justify-center items-center self-stretch mb-[34px] mx-[31px]">
                    <div className="flex flex-col shrink-0 items-start bg-[#75C57F5E] py-[3px] px-[7px] mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Home Fab"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#FEECEB] py-[3px] px-[7px] mr-2 rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"FAB Stick"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#80DDCB5E] py-[3px] px-2 mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Star"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#978FED57] py-[3px] px-[7px] mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"StarxPoint"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#EAEAEA] py-1 px-[7px] rounded-[5px]">
                      <span className="text-white text-[11px]" >
                        {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch relative mx-[23px]">
                    <div className="flex justify-end items-start self-stretch bg-cover bg-center relative"
                      style={{
                        backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/5zvq6kkx_expires_30_days.png)',
                      }}
                    >
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/fq7dpw6r_expires_30_days.png"}
                        className="w-[5px] h-[63px] mt-[91px] mr-[26px] object-fill"
                        alt=""
                      />
                      <div className="flex flex-col shrink-0 items-start mt-1.5 mb-[30px] mr-[53px] gap-1">
                        <div className="flex flex-col items-center relative">
                          <div className="flex flex-col items-start bg-white py-2.5 pl-3 pr-[25px] gap-0.5 rounded-[7px] border border-solid border-[#F9F9F9]"
                            style={{
                              boxShadow: "0px 1.8642522096633911px 3px #00000008"
                            }}>
                            <span className="text-[#7A7A7A] text-[9px]" >
                              {"Lip Fillers Casey"}
                            </span>
                            <div className="flex flex-col items-start bg-[#FEECEB] pt-0.5 px-1 rounded-[3px]">
                              <span className="text-[#da3838] text-[11px] font-bold" >
                                {"+3.4%"}
                              </span>
                            </div>
                          </div>
                          <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[9px] right-[-75px]">
                          </div>
                        </div>
                        <div className="flex items-center ml-[31px] gap-[46px]">
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/1q7ibzqf_expires_30_days.png"}
                            className="w-[5px] h-[85px] object-fill"
                            alt=""
                          />
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/hcc0f876_expires_30_days.png"}
                            className="w-[5px] h-[86px] object-fill"
                            alt=""
                          />
                        </div>
                      </div>
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/84imepja_expires_30_days.png"}
                        className="w-[5px] h-[133px] mt-4 mr-[17px] object-fill"
                        alt=""
                      />
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[43px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[71px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute bottom-[88px] right-px">
                      </div>
                    </div>
                    <div className="flex flex-col items-center absolute top-[11px] left-0 gap-[17px]">
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 4"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 3"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 2"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 1"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/6ebu9xux_expires_30_days.png"}
                className="w-[131px] h-[111px] absolute top-2 right-[73px] object-fill z-20 pointer-events-none"
                alt=""
              />
              <img
                src={stickerYouDidIt}
                className="absolute top-[12px] right-[6px] w-[95px] h-[95px] object-contain rotate-12 z-20"
                alt="You Did It"
              />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start relative pt-[19px] w-full max-w-[360px] lg:max-w-none lg:flex-1">
              <div className="flex flex-col items-start self-stretch gap-[31px]">
                <span className="text-[#7A7A7A] text-[11px] font-bold ml-12" >
                  {"Costumer Review"}
                </span>
                <div className="flex flex-col items-start self-stretch bg-[#FBFBFC] py-[51px] rounded-[13px] border border-solid border-[#F2F2F2]"
                  style={{
                    boxShadow: "0px 15px 32px #ADADAD1A"
                  }}>
                  <span className="text-[#4A4646] text-[17px] font-bold mb-3 ml-[27px]" >
                    {"Improved the Revenue & Conversion"}
                  </span>
                  <div className="flex flex-col items-center mb-[17px] self-center gap-[9px]">
                    <div className="flex flex-col items-center relative">
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/7pius595_expires_30_days.png"}
                        className="w-[260px] h-[138px] object-fill"
                        alt=""
                      />
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center ml-[-32px]" >
                        {"17.80%"}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold" >
                      <span className="text-[#04B200]">{"5 Keywords"}</span>
                      <span className="text-[#222222]">{" ranked in Google"}</span>
                    </span>
                  </div>
                  <div className="flex justify-center items-center self-stretch mb-[34px] mx-[33px]">
                    <div className="flex flex-col shrink-0 items-start bg-[#75C57F5E] py-[3px] px-2 mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Digital Mafia"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#FEECEB] py-[3px] px-[7px] mr-2 rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"Marketing With Ani"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#978FED57] py-[3px] px-2 mr-[9px] rounded-[5px]">
                      <span className="text-[#7A7A7A] text-[10px]" >
                        {"SEO Ads"}
                      </span>
                    </div>
                    <div className="flex flex-col shrink-0 items-start bg-[#EAEAEA] py-1 px-2 rounded-[5px]">
                      <span className="text-white text-[11px]" >
                        {">"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start self-stretch relative mx-[23px]">
                    <div className="flex justify-end items-start self-stretch bg-cover bg-center relative"
                      style={{
                        backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/dimflo2f_expires_30_days.png)',
                      }}
                    >
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/i2buaqmp_expires_30_days.png"}
                        className="w-[5px] h-[63px] mt-[91px] mr-[26px] object-fill"
                        alt=""
                      />
                      <div className="flex flex-col shrink-0 items-start mt-1.5 mb-[30px] mr-[53px] gap-1">
                        <div className="flex flex-col items-center relative">
                          <div className="flex flex-col items-start bg-white py-2.5 pl-[13px] pr-6 gap-0.5 rounded-[7px] border border-solid border-[#F9F9F9]"
                            style={{
                              boxShadow: "0px 1.8642522096633911px 3px #00000008"
                            }}>
                            <span className="text-[#7A7A7A] text-[9px]" >
                              {"Lip Fillers Casey"}
                            </span>
                            <div className="flex flex-col items-start bg-[#FEECEB] pt-0.5 px-[3px] rounded-[3px]">
                              <span className="text-[#da3838] text-[11px] font-bold" >
                                {"+3.4%"}
                              </span>
                            </div>
                          </div>
                          <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[9px] right-[-75px]">
                          </div>
                        </div>
                        <div className="flex items-center ml-[31px] gap-[46px]">
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/j5ju8z22_expires_30_days.png"}
                            className="w-[5px] h-[85px] object-fill"
                            alt=""
                          />
                          <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/hufxak5l_expires_30_days.png"}
                            className="w-[5px] h-[86px] object-fill"
                            alt=""
                          />
                        </div>
                      </div>
                      <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/1b97d9if_expires_30_days.png"}
                        className="w-[5px] h-[133px] mt-4 mr-[17px] object-fill"
                        alt=""
                      />
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[43px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute top-[71px] right-px">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-px absolute bottom-[88px] right-px">
                      </div>
                    </div>
                    <div className="flex flex-col items-center absolute top-[11px] left-0 gap-[17px]">
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 4"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 3"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 2"}
                      </span>
                      <span className="text-[#464646] text-[7px]" >
                        {"Rank 1"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9FiMMD8bS3/9oitzr8m_expires_30_days.png"}
                className="w-[131px] h-[111px] absolute top-0 right-[103px] object-fill"
                alt=""
              />
              <img
                src={stickerAwesome}
                className="absolute top-[18px] right-[24px] w-[95px] h-[95px] object-contain rotate-[-4deg] z-20"
                alt="Awesome"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── LET'S GET YOUR PROJECT STARTED ── */}
      <section style={{ width: '100%', background: '#fff', fontFamily: "'Inter', sans-serif", position: 'relative', overflow: 'hidden', paddingBottom: 0 }}>

        {/* Hero */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '72px', paddingBottom: '56px', paddingLeft: '24px', paddingRight: '24px' }}>

          {/* SVG heading — paint-order stroke fill eliminates inner-letter artifacts */}

          <div className="hero-hover-container">
            {/* Top Left Doodle: Concentric Arcs */}
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="hero-doodle doodle-tl" style={{ top: '-50px', left: '-80px' }}>
              {[...Array(12)].map((_, i) => (
                <path key={i} d={`M 0 ${20 + i * 12} A ${20 + i * 12} ${20 + i * 12} 0 0 1 ${20 + i * 12} 0`} stroke="#111" strokeWidth="1.2" />
              ))}
            </svg>

            {/* Top Right Doodle: Wavy Lines and Sun */}
            <svg width="220" height="120" viewBox="0 0 220 120" fill="none" className="hero-doodle doodle-tr" style={{ top: '-10px', right: '-110px' }}>
              <path d="M 0 30 Q 25 10 50 30 T 100 30 T 150 30 T 200 30" stroke="#111" strokeWidth="1.2" />
              <path d="M 0 60 Q 25 40 50 60 T 100 60 T 150 60 T 200 60" stroke="#111" strokeWidth="1.2" />
              {/* Semi-circle sun on middle wave */}
              <path d="M 125 51 A 15 15 0 0 1 155 51 Z" fill="#111" />
              <path d="M 0 90 Q 25 70 50 90 T 100 90 T 150 90 T 200 90" stroke="#111" strokeWidth="1.2" />
            </svg>

            {/* Bottom Left Doodle: Dot Grid & Dashed Arrow */}
            <svg width="350" height="250" viewBox="0 0 350 250" fill="none" className="hero-doodle doodle-bl" style={{ top: '220px', left: '-180px' }}>
              <pattern id="dotPattern" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#111" />
              </pattern>
              <rect x="0" y="0" width="84" height="126" fill="url(#dotPattern)" />
              {/* Swirly dashed arrow pointing to the button */}
              <path d="M 80 100 C 150 200, 250 80, 200 150 C 180 180, 240 230, 320 230" stroke="#111" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round" />
              {/* Arrow head */}
              <path d="M 315 225 L 325 230 L 315 235" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <svg
              viewBox="0 0 1100 260"
              style={{ width: '100%', maxWidth: '1000px', overflow: 'visible', display: 'block' }}
              aria-label="Let's Get Your Project Started"
            >
              {/* Line 1: "Let's Get" — smaller, outlined */}
              <motion.text
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                x="550"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontSize="90"
                letterSpacing="-2"
                paintOrder="stroke fill"
                fill="white"
                stroke="#111"
                strokeWidth="3"
              >Let's Get</motion.text>

              {/* Line 2: "Your Project Started" — larger, centered as one line */}
              <text
                x="550" y="235"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
                fontWeight="900"
                fontSize="112"
                letterSpacing="-3"
              >
                <motion.tspan 
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30, rotate: -2 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0, rotate: 2 }}
                  transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                  paintOrder="stroke fill" fill="white" stroke="#111" strokeWidth="3.5" style={{ originX: '50%', originY: '50%' }}
                >Your </motion.tspan>
                
                <motion.tspan 
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.6, fill: '#fff' }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, fill: '#2EE66D' }}
                  transition={{ duration: 0.9, delay: 0.24, type: "spring", bounce: 0.4 }}
                  stroke="none" style={{ originX: '50%', originY: '50%' }}
                >Project</motion.tspan>
                
                <motion.tspan 
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.36, ease: "easeOut" }}
                  paintOrder="stroke fill" fill="white" stroke="#111" strokeWidth="3.5"
                > Started</motion.tspan>
              </text>
            </svg>
          </div>

          <motion.div className="hero-content-wrapper" style={{ x: heroX, y: heroY }}>
            {/* Subtitle */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: "easeOut" }}
              style={{ color: '#888', fontSize: '16px', textAlign: 'center', maxWidth: '420px', marginTop: '20px', marginBottom: '30px', lineHeight: 1.55 }}
            >
              Our team of certified designers provides the best E-Commerce web service.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(255, 213, 0, 0.4)" }}
              onClick={() => setActiveTab('contact')}
              style={{ background: '#FFD400', color: '#111', fontWeight: 600, fontSize: '14px', padding: '11px 26px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '0.3px' }}
            >
              REQUEST A QUOTE
              <motion.svg 
                whileHover={{ x: 5 }}
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>


        {/* Card Grid */}
        <motion.div 
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px 80px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="card-parallax-container"
        >

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>

            {/* Column 1, Row 1 — Green "Let's work" */}
            <motion.div 
              variants={{
                hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.95 },
                visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ background: '#58EA8A', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', minHeight: '480px', gridColumn: '1', gridRow: '1', transition: 'box-shadow 0.35s ease' }}
            >
              <div style={{ fontSize: '52px', fontWeight: 900, lineHeight: 1, color: '#111', fontFamily: "'Inter', sans-serif" }}>✳</div>
              <h2 style={{ fontSize: '56px', fontWeight: 900, lineHeight: 1.08, color: '#111', margin: '20px 0 18px', fontFamily: "'Inter', sans-serif" }}>
                Let's<br />work
              </h2>
              <p style={{ fontSize: '13px', color: '#333', lineHeight: 1.7, flex: 1 }}>
                It goes without saying that we love what we do, so we continue to learn and grow every day, instilling that knowledge and innovation into all of our projects. We take every new project as an opportunity to collaborate with our clients and bring their unique vision to life, while still adding our own personal touch as well.
              </p>
              <div style={{ marginTop: '32px' }}>
                <button
                  onClick={() => setActiveTab('about')}
                  style={{ background: '#111', color: '#fff', borderRadius: '12px', padding: '13px 28px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px', fontFamily: "'Inter', sans-serif" }}
                >
                  Our team
                </button>
              </div>
            </motion.div>

            {/* Column 2, Row 1 — Yellow Testimonial */}
            <motion.div 
              variants={{
                hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.95 },
                visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ background: '#F4F3B4', borderRadius: '24px', padding: '36px', display: 'flex', flexDirection: 'column', minHeight: '480px', gridColumn: '2', gridRow: '1', transition: 'box-shadow 0.35s ease' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '58px', fontWeight: 400, color: '#4285F4', lineHeight: 1, fontFamily: 'Georgia, serif' }}>G</span>
                <div style={{ display: 'flex', gap: '3px', paddingTop: '8px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD400', fontSize: '20px' }}>★</span>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: '13px', color: '#333', lineHeight: 1.75, marginTop: '22px', flex: 1 }}>
                " Method did a great job redoing our website. They took the time to listen and really understood what we wanted. He completed the work in super quick time to a very high professional standard. Will definitely recommend... "
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '24px' }}>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '13px', color: '#111', margin: '0 0 4px' }}>- Hilde V.</p>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Dynamic Engineering Consultants</p>
                </div>
                <button
                  style={{ width: '46px', height: '46px', borderRadius: '50%', background: '#111', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  onClick={() => setActiveTab('contact')}
                >
                  →
                </button>
              </div>
            </motion.div>

            {/* Column 3, Rows 1 & 2 — Mint Contact (Spans 2 rows, on the right side) */}
            <motion.div 
              variants={{
                hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.95 },
                visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ background: '#DDF7EC', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gridColumn: '3', gridRow: '1 / span 2', position: 'relative', transition: 'box-shadow 0.35s ease' }}
            >
              {/* Mountain icon */}
              <svg width="52" height="38" viewBox="0 0 52 38" fill="none">
                <path d="M2 36L18 8L30 22L39 12L50 36H2Z" stroke="#111" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              </svg>
              <h2 style={{ fontSize: '40px', fontWeight: 900, lineHeight: 1.12, color: '#111', margin: '22px 0 22px', fontFamily: "'Inter', sans-serif" }}>
                Have a<br />coffee with<br />us...
              </h2>
              <div style={{ fontSize: '13px', color: '#333', lineHeight: 2.1 }}>
                <p style={{ margin: 0 }}>Phone: (08) 9242 5529</p>
                <p style={{ margin: 0 }}>Email: hello@mafia.au</p>
                <p style={{ margin: 0 }}>Address: DLF phase 1 tower a G Wtn,<br />Haryana (Gurgaon)</p>
              </div>
              <div style={{ marginTop: '36px', marginBottom: 'auto', paddingBottom: '40px' }}>
                <button
                  onClick={() => setActiveTab('contact')}
                  style={{ background: '#111', color: '#fff', borderRadius: '12px', padding: '15px 36px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '13px', fontFamily: "'Inter', sans-serif" }}
                >
                  Book a meeting
                </button>
              </div>

              {/* Floating "Book Now" Badge — continuously rotating */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                whileHover={{ scale: 1.08 }}
                style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', zIndex: 50, cursor: 'pointer' }}
                onClick={() => setActiveTab('contact')}
              >
                <img
                  src="/src/assets/Badge.png"
                  alt="Book Now"
                  style={{ width: '150px', height: '150px', display: 'block' }}
                />
              </motion.div>
            </motion.div>

            {/* Column 1, Row 2 — SEO Card */}
            <motion.div 
              variants={{
                hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50, scale: 0.95 },
                visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ background: '#EAF36B', borderRadius: '24px', padding: '36px', display: 'flex', flexDirection: 'column', minHeight: '230px', gridColumn: '1', gridRow: '2', transition: 'box-shadow 0.35s ease' }}
            >
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: "'Inter', sans-serif" }}>Latest insights</span>
              <h3 style={{ fontSize: '30px', fontWeight: 900, color: '#111', margin: '14px 0 16px', fontFamily: "'Inter', sans-serif", lineHeight: 1.15 }}>What is SEO</h3>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.65, flex: 1, margin: 0 }}>
                SEO is a term we're hearing more and more of these days, especially online. But exactly what is SEO ?
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '22px' }}>
                <span style={{ fontSize: '13px', color: '#333', cursor: 'pointer', fontWeight: 500 }}>Read more &gt;</span>
                <span style={{ fontSize: '12px', color: '#666' }}>November 22, 2022</span>
              </div>
            </motion.div>

            {/* Column 2, Row 2 — Blog Card */}
            <motion.div 
              variants={{
                hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 50, scale: 0.95 },
                visible: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ background: '#F59D8F', borderRadius: '24px', padding: '36px', display: 'flex', flexDirection: 'column', minHeight: '230px', gridColumn: '2', gridRow: '2', transition: 'box-shadow 0.35s ease' }}
            >
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#7a2a1a', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: "'Inter', sans-serif" }}>Latest insights</span>
              <h3 style={{ fontSize: '30px', fontWeight: 900, color: '#111', margin: '14px 0 16px', fontFamily: "'Inter', sans-serif", lineHeight: 1.15 }}>Local Web Design vs Outsourcing</h3>
              <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.65, flex: 1, margin: 0 }}>
                We come across domains each and every day online, but we rarely stop to think about what, they are, how they come about, and how ...
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '22px' }}>
                <span style={{ fontSize: '13px', color: '#333', cursor: 'pointer', fontWeight: 500 }}>Read more &gt;</span>
                <span style={{ fontSize: '12px', color: '#7a2a1a' }}>July 8, 2022</span>
              </div>
            </motion.div>

          </div>
        </motion.div>



      </section>

      {/* ─────────────── SERVICES SECTION ─────────────── */}
      <section className="bg-[#EBF8E8] w-full py-24 relative z-10 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-[#112121] text-[32px] md:text-[42px] font-bold text-center mb-4">
            Our <span className="text-[#35CAA3]">Services</span>
          </h2>
          <p className="text-[#555] text-center max-w-3xl mx-auto mb-16 text-[15px] md:text-[16px]">
            We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, etc.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {/* Col 1 */}
            <div>
              <h3 className="text-[#112121] text-[13px] uppercase tracking-wider font-semibold mb-6">Visual Identity</h3>
              <div className="flex flex-col gap-1">
                <ServiceItem text="Communication" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="Product Management" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="Structured Thinking" />
                <ServiceItem text="New Age Industries" />
                <ServiceItem text="Data Fluency" />
                <ServiceItem text="Business Foundation" />
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="text-[#112121] text-[13px] uppercase tracking-wider font-semibold mb-6">SEO & SMO</h3>
              <div className="flex flex-col gap-1">
                <ServiceItem text="Communication" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="New Age Industries" />
                <ServiceItem text="Data Fluency" />
                <ServiceItem text="Sales Mentality" />
                <ServiceItem text="Business Foundation" />
              </div>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="text-[#112121] text-[13px] uppercase tracking-wider font-semibold mb-6">Website Development</h3>
              <div className="flex flex-col gap-1">
                <ServiceItem text="Communication" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="Product Management" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="Structured Thinking" />
                <ServiceItem text="New Age Industries" />
                <ServiceItem text="Data Fluency" />
                <ServiceItem text="Sales Mentality" />
                <ServiceItem text="Business Foundation" />
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <h3 className="text-[#112121] text-[13px] uppercase tracking-wider font-semibold mb-6">Marketing</h3>
              <div className="flex flex-col gap-1">
                <ServiceItem text="Communication" />
                <ServiceItem text="Startup Ecosystem" />
                <ServiceItem text="Data Fluency" />
                <ServiceItem text="Sales Mentality" />
                <ServiceItem text="Business Foundation" />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200/60 my-16" />

          {/* Call to action */}
          <div className="text-center max-w-4xl mx-auto pb-10">
            <h3 className="text-[#112121] text-[24px] md:text-[32px] font-bold mb-4">
              We Transform Companies Through Design Innovation
            </h3>
            <p className="text-gray-600 text-[14px] md:text-[15px] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              <span className="font-bold text-gray-800">A full-service creative</span> agency designing and building inventive digital experiences across all platforms and brand touchpoints.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 rounded-[12px] border-2 border-gray-300 text-[#112121] font-semibold text-[14px] hover:border-[#35CAA3] hover:text-[#35CAA3] transition-colors flex items-center gap-2">
                Explore Our Services 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
              <button className="px-8 py-3 rounded-[12px] bg-[#FFD700] hover:bg-[#F0C800] text-[#112121] font-semibold text-[14px] transition-colors flex items-center gap-2 shadow-sm">
                Book Your Free Trial, Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS OF YOUR PROJECT ─────────────── */}
      <section className="bg-[#EBF8E8] w-full pt-10 pb-32 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-[#112121] text-[32px] md:text-[42px] font-bold mb-16 md:pl-20">
            Process Of Your <span className="text-[#35CAA3]">Project</span>
          </h2>
          
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 max-w-[1300px] mx-auto px-10">
            {/* Diamond 1 */}
            <div className="mb-0 md:mb-32">
              <ProcessDiamond text="Empathize" />
            </div>
            <ProcessArrow down />
            {/* Diamond 2 */}
            <div className="mt-0 md:mt-32">
              <ProcessDiamond text="Define" />
            </div>
            <ProcessArrow up />
            {/* Diamond 3 */}
            <div className="mb-0 md:mb-32">
              <ProcessDiamond text="Ideate" />
            </div>
            <ProcessArrow down />
            {/* Diamond 4 */}
            <div className="mt-0 md:mt-32">
              <ProcessDiamond text="Prototype" />
            </div>
            <ProcessArrow up />
            {/* Diamond 5 */}
            <div className="mb-0 md:mb-32">
              <ProcessDiamond text="Qualitative test" />
            </div>
            <ProcessArrow down />
            {/* Diamond 6 */}
            <div className="mt-0 md:mt-32">
              <ProcessDiamond text="Quantitative test" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── BRANDING ON DEMAND SECTION ─────────────── */}
      <section className="w-full bg-[#f9f9f9] relative overflow-hidden py-32 md:py-48 min-h-[900px] flex items-center justify-center">
        {/* Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <h1 className="text-[14vw] leading-[0.9] font-bold text-[#112121] uppercase tracking-tight text-center font-['Poppins']">
            Unlimited<br/>Branding<br/>On Demand
          </h1>
        </div>

        {/* Circular Badge */}
        <div className="absolute top-8 right-8 md:top-16 md:right-16 w-24 h-24 md:w-[130px] md:h-[130px] bg-black/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-50 shadow-xl">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text>
              <textPath href="#circlePath" fill="white" fontSize="11" letterSpacing="4.5">
                Book Now &gt; Book Now &gt; Book Now &gt;
              </textPath>
            </text>
          </svg>
          <div className="absolute w-[58%] h-[58%] bg-[#FCC334] rounded-full flex items-center justify-center shadow-inner">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/></svg>
          </div>
        </div>

        {/* Floating Cards Container */}
        <div className="relative w-full max-w-6xl h-[600px] z-10 hidden md:block pointer-events-none">
          {/* Price Plan Card */}
          <div className="absolute left-[3%] top-[3%] w-[392px] h-[221px] bg-white/95 backdrop-blur shadow-2xl rounded-[21px] rotate-[-14deg] pointer-events-auto hover:rotate-0 transition-transform duration-500 cursor-pointer border border-gray-100 flex flex-col justify-center items-start pl-8 overflow-hidden">
            <div className="absolute top-[-10px] right-20 w-[103px] h-[72px] bg-[#B5ECD4] rounded-full -z-10" />
            <h3 className="text-[#030A22] text-[48px] font-bold leading-tight mb-0 z-10">Price Plan</h3>
            <img src={imgCTA} alt="Price Plan" className="absolute right-[-60px] top-4 w-[250px] aspect-square object-cover mix-blend-multiply opacity-50 z-0" />
            <div className="text-black font-bold text-[16px] uppercase tracking-wider flex items-center hover:text-green-600 transition-colors mt-20 z-10">
              &gt;&gt; See Detail
            </div>
          </div>

          {/* Services Card */}
          <div className="absolute right-[5%] top-[5%] w-[306px] h-[172px] bg-[#E1EA78] shadow-2xl rounded-[16px] rotate-[-5deg] pointer-events-auto hover:rotate-0 transition-transform duration-500 cursor-pointer flex flex-col justify-center items-start pl-6 overflow-hidden">
            <div className="absolute top-[-5px] right-10 w-[76px] h-[46px] bg-[#B5ECD4] rounded-full -z-10" />
            <h3 className="text-[#030A22] text-[38px] font-bold leading-tight mb-0 z-10">Services</h3>
            <img src={imgServices} alt="Services" className="absolute right-[-40px] top-2 w-[180px] aspect-square object-cover mix-blend-multiply opacity-50 z-0" />
            <div className="text-black font-bold text-[12px] uppercase tracking-wider flex items-center hover:opacity-70 transition-opacity mt-14 z-10">
              &gt;&gt; See Detail
            </div>
          </div>

          {/* Join Us Card */}
          <div className="absolute left-[15%] bottom-[5%] w-[335px] h-[189px] bg-[#25A158] shadow-2xl rounded-[18px] rotate-[-32deg] pointer-events-auto hover:rotate-0 transition-transform duration-500 cursor-pointer flex flex-col justify-center items-start pl-8 overflow-hidden">
            <h3 className="text-[#F7F9D9] text-[41px] font-bold leading-tight mb-0 z-10">Join US</h3>
            <img src={imgJoinUs} alt="Join US" className="absolute right-[-40px] top-2 w-[200px] aspect-square object-cover mix-blend-overlay opacity-50 z-0" />
            <div className="text-[#FAFBFB] font-bold text-[13px] uppercase tracking-wider flex items-center hover:opacity-70 transition-opacity mt-16 z-10">
              &gt;&gt; See Detail
            </div>
          </div>

          {/* We are Hiring Card */}
          <div className="absolute right-[10%] bottom-[15%] w-[392px] h-[221px] bg-[#B7F9D2] shadow-2xl rounded-[21px] rotate-[9deg] pointer-events-auto hover:rotate-0 transition-transform duration-500 cursor-pointer flex flex-col justify-center items-start pl-8 overflow-hidden">
            <h3 className="text-[#030A22] text-[48px] font-bold leading-tight mb-0 z-10">We are Hiring</h3>
            <img src={imgHiring} alt="We are Hiring" className="absolute right-[-40px] top-2 w-[220px] aspect-square object-cover mix-blend-multiply opacity-50 z-0" />
            <div className="text-black font-bold text-[16px] uppercase tracking-wider flex items-center hover:opacity-70 transition-opacity mt-20 z-10">
              &gt;&gt; See Detail
            </div>
          </div>
        </div>

        {/* Mobile View (Stacked) */}
        <div className="relative w-full z-10 flex flex-col items-center gap-8 md:hidden px-4 mt-32">
           <div className="w-full max-w-[320px] bg-white/95 shadow-xl rounded-[20px] p-6 border border-gray-100 flex flex-col items-center">
             <h3 className="text-[#030A22] text-[36px] font-bold mb-4">Price Plan</h3>
             <img src={imgCTA} className="w-[150px] aspect-square rounded-[12px] mb-4 object-cover" />
             <div className="text-black font-bold text-[14px] text-center uppercase tracking-wider">&gt;&gt; See Detail</div>
           </div>
           
           <div className="w-full max-w-[320px] bg-[#E1EA78] shadow-xl rounded-[20px] p-6 flex flex-col items-center">
             <h3 className="text-[#030A22] text-[32px] font-bold mb-4">Services</h3>
             <img src={imgServices} className="w-[150px] aspect-square rounded-[12px] mb-4 object-cover" />
             <div className="text-black font-bold text-[14px] text-center uppercase tracking-wider">&gt;&gt; See Detail</div>
           </div>

           <div className="w-full max-w-[320px] bg-[#25A158] shadow-xl rounded-[20px] p-6 flex flex-col items-center">
             <h3 className="text-[#F7F9D9] text-[36px] font-bold mb-4">Join US</h3>
             <img src={imgJoinUs} className="w-[150px] aspect-square rounded-[12px] mb-4 object-cover" />
             <div className="text-[#FAFBFB] font-bold text-[14px] text-center uppercase tracking-wider">&gt;&gt; See Detail</div>
           </div>

           <div className="w-full max-w-[320px] bg-[#B7F9D2] shadow-xl rounded-[20px] p-6 flex flex-col items-center">
             <h3 className="text-[#030A22] text-[36px] font-bold mb-4">We are Hiring</h3>
             <img src={imgHiring} className="w-[150px] aspect-square rounded-[12px] mb-4 object-cover" />
             <div className="text-black font-bold text-[14px] text-center uppercase tracking-wider">&gt;&gt; See Detail</div>
           </div>
        </div>
      </section>

      {/* ─────────────── DARK BOTTOM WRAPPER ─────────────── */}
      <div className="relative w-full bg-[#112121] pt-16 pb-16">

        {/* ─────────────── OUR TEAMS SECTION ─────────────── */}
        <section className="w-full max-w-7xl mx-auto px-6 pt-16 pb-8 text-white relative z-10">
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-[40px] md:text-[50px] font-bold leading-tight">
                Our <span className="text-[#5DE299]">Teams</span>
              </h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5DE299" strokeWidth="2.5" className="animate-pulse">
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8"/>
              </svg>
            </div>
            <p className="text-white/75 text-[16px] max-w-2xl leading-relaxed">
              We are Designer, Developer, Programmer, Marketing specialist working hard to transform your next idea into a big success.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {/* Card 1: Akshay */}
            <div className="w-full max-w-[270px] bg-linear-to-b from-[#A4F2CC] to-[#DDF7EB] rounded-[24px] p-5 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-transform duration-300">
              <div className="w-full aspect-230/280 rounded-[18px] overflow-hidden mb-5">
                <img src={imgAkshay} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-[#112121] text-[20px] font-bold mb-1">Akshay</h3>
                <div className="flex items-center gap-2">
                  <img src={imgCredLogoSmall} className="w-4 h-4 object-contain" />
                  <span className="text-[#112121]/75 text-[14px] font-semibold">CRED</span>
                </div>
              </div>
            </div>

            {/* Card 2: Kunal */}
            <div className="w-full max-w-[270px] bg-linear-to-b from-[#F5DE7B] to-[#FDF4D1] rounded-[24px] p-5 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-transform duration-300">
              <div className="w-full aspect-230/280 rounded-[18px] overflow-hidden mb-5">
                <img src={imgKunal} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-[#112121] text-[20px] font-bold mb-1">Kunal</h3>
                <div className="flex items-center gap-2">
                  <img src={imgMeeshoLogoSmall} className="w-4 h-4 object-contain" />
                  <span className="text-[#112121]/75 text-[14px] font-semibold">meesho</span>
                </div>
              </div>
            </div>

            {/* Card 3: Pratab */}
            <div className="w-full max-w-[270px] bg-linear-to-b from-[#6EE7B7] to-[#D1FAE5] rounded-[24px] p-5 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-transform duration-300">
              <div className="w-full aspect-230/280 rounded-[18px] overflow-hidden mb-5">
                <img src={imgPratab} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-[#112121] text-[20px] font-bold mb-1">Pratab</h3>
                <div className="flex items-center gap-2">
                  <img src={imgCredLogoSmall} className="w-4 h-4 object-contain" />
                  <span className="text-[#112121]/75 text-[14px] font-semibold">CRED</span>
                </div>
              </div>
            </div>

            {/* Card 4: Anuj */}
            <div className="w-full max-w-[270px] bg-linear-to-b from-[#FCA5A5] to-[#FEE2E2] rounded-[24px] p-5 flex flex-col justify-between shadow-lg hover:scale-[1.03] transition-transform duration-300">
              <div className="w-full aspect-230/280 rounded-[18px] overflow-hidden mb-5">
                <img src={imgAnuj} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <h3 className="text-[#112121] text-[20px] font-bold mb-1">Anuj</h3>
                <div className="flex items-center gap-2">
                  <img src={imgCredLogoSmall} className="w-4 h-4 object-contain" />
                  <span className="text-[#112121]/75 text-[14px] font-semibold">CRED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Article Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-16 text-white relative z-10">
          <h2 className="text-[40px] md:text-[50px] font-bold mb-12">
            News <span className="text-[#F5DE7B]">Article</span>
          </h2>

          {/* Carousel Container */}
          <div className="relative w-full flex items-center">
            {/* Left navigation arrow */}
            <button className="absolute -left-4 md:-left-8 z-10 w-12 h-12 rounded-full border-2 border-white/20 bg-[#112121] flex items-center justify-center text-white hover:bg-white hover:text-[#112121] hover:border-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            
            {/* Horizontal scroll container with scrollbar hidden */}
            <div className="w-full overflow-x-auto scrollbar-hide flex gap-6 pb-6 px-2">
              {/* Card 1: Economic Times */}
              <div className="w-[300px] h-[400px] shrink-0 bg-[#E8F8F0] rounded-[24px] p-5 flex flex-col justify-between shadow-lg relative group">
                <div className="w-full h-[280px] rounded-[18px] overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <img src={imgETScreenshot} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex items-center mt-4">
                  <img src={imgETLogo} className="h-6 object-contain" />
                </div>
              </div>

              {/* Card 2: TOI */}
              <div className="w-[300px] h-[400px] shrink-0 bg-[#E8F8F0] rounded-[24px] p-5 flex flex-col justify-between shadow-lg relative group">
                <div className="w-full h-[280px] rounded-[18px] overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <img src={imgTOIScreenshot} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex items-center mt-4">
                  <img src={imgTOILogo} className="h-6 object-contain" />
                </div>
              </div>

              {/* Card 3: Inc42 */}
              <div className="w-[300px] h-[400px] shrink-0 bg-[#E8F8F0] rounded-[24px] p-5 flex flex-col justify-between shadow-lg relative group">
                <div className="w-full h-[280px] rounded-[18px] overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <img src={imgInc42Screenshot} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex items-center mt-4">
                  <img src={imgInc42Logo} className="h-6 object-contain" />
                </div>
              </div>

              {/* Card 4: YourStory */}
              <div className="w-[300px] h-[400px] shrink-0 bg-[#E8F8F0] rounded-[24px] p-5 flex flex-col justify-between shadow-lg relative group">
                <div className="w-full h-[280px] rounded-[18px] overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <img src={imgYSScreenshot} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="flex items-center mt-4">
                  <img src={imgYSLogo} className="h-6 object-contain" />
                </div>
              </div>
            </div>

            {/* Right navigation arrow */}
            <button className="absolute -right-4 md:-right-8 z-10 w-12 h-12 rounded-full border-2 border-white/20 bg-[#112121] flex items-center justify-center text-white hover:bg-white hover:text-[#112121] hover:border-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </section>

        {/* Featured In Section */}
        <section className="w-full max-w-5xl mx-auto px-6 py-16 text-center relative z-10">
          <div className="relative bg-[#D6F6E5] rounded-[32px] px-8 py-10 shadow-lg border border-[#B1EAC8] flex flex-col items-center">
            {/* Yellow Tag */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F5DE7B] text-[#112121] text-[14px] font-bold px-5 py-2 rounded-full flex items-center gap-1.5 shadow-md border border-[#E1C65E]">
              <span className="w-2.5 h-2.5 bg-[#5DE299] rounded-full animate-ping" />
              Featured In
            </div>

            {/* Logos Row */}
            <div className="w-full flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide py-4 px-2 mt-2">
              <img src={imgGrowwWebp} className="h-8 object-contain shrink-0" />
              <img src={imgSliceWebp} className="h-8 object-contain shrink-0" />
              <img src={imgBharatPeWebp} className="h-8 object-contain shrink-0" />
              <img src={imgPostmanWebp} className="h-8 object-contain shrink-0" />
              <img src={imgGrofersWebp} className="h-8 object-contain shrink-0" />
              <img src={imgCredWebp} className="h-8 object-contain shrink-0" />
            </div>
          </div>
        </section>

        {/* Wave divider graphic */}
        <div className="w-full overflow-hidden leading-0 -mb-1 relative z-10">
          <img src={imgWaveBottom} className="w-full h-auto object-cover min-h-[80px]" />
        </div>
      </div>

      {/* ─────────────── NEW SECTIONS WITH WHITE BACKGROUND ─────────────── */}
      <div className="bg-[#FAFBFB] py-20 relative">
        {/* 10 Errors Signs Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-3/5">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-[#112121] text-[32px] md:text-[42px] font-bold leading-tight max-w-xl">
                <span className="text-[#35CAA3]">10 Errors signs</span> - that your website needs rebuild or maintenance
              </h2>
              <a href="#" className="text-[#35CAA3] font-bold text-sm flex items-center gap-1 hover:underline shrink-0">
                View All 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconClean} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">Clean UI Design</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconSEO} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">SEO</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconResearch} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">Research</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconTraffic} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">Traffic</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconBriefing} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">Briefing</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-[#EAF8F2] p-5 rounded-[20px] flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  <img src={imgIconQuality} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h4 className="text-[#112121] font-bold text-[16px]">Quality</h4>
                  <span className="text-[#112121]/50 text-xs font-semibold uppercase tracking-wider">View More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration panel */}
          <div className="lg:w-2/5 flex flex-col items-center justify-center">
            <img src={imgErrorsRobot} className="w-[300px] md:w-[360px] object-contain mb-8" />
            <button className="px-8 py-3 rounded-[12px] bg-[#112121] text-white font-bold text-[15px] hover:bg-black transition-colors flex items-center gap-2 shadow-lg">
              Let Fix These Errors
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </section>

        {/* Our Recent Blogs Section */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-[#112121] text-[32px] md:text-[40px] font-bold mb-10 text-left">
            Our Recent Blogs
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left stacked blogs */}
            <div className="lg:w-7/12 flex flex-col gap-6">
              {/* Blog 1 */}
              <div className="bg-white rounded-[24px] border border-gray-100 p-5 flex flex-col md:flex-row gap-5 hover:shadow-lg transition-shadow duration-300">
                <div className="md:w-2/5 aspect-16/10 rounded-[16px] overflow-hidden shrink-0">
                  <img src={imgBlogDetailDelight} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">November 18, 2014</span>
                    <h3 className="text-[#112121] text-[20px] font-bold mt-2 mb-2 leading-snug">Three Pillars of User Delight</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                      Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[11px] font-semibold">Research</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[11px] font-semibold">UI UX</span>
                  </div>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="bg-white rounded-[24px] border border-gray-100 p-5 flex flex-col md:flex-row gap-5 hover:shadow-lg transition-shadow duration-300">
                <div className="md:w-2/5 aspect-16/10 rounded-[16px] overflow-hidden shrink-0">
                  <img src={imgBlogDetailMapping} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">September 26, 2017</span>
                    <h3 className="text-[#112121] text-[20px] font-bold mt-2 mb-2 leading-snug">UX Mapping Methods</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2">
                      Visual design principles can be applied consistently throughout the process of creating a polished UX map...
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[11px] font-semibold">Research</span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[11px] font-semibold">UI Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right featured blog card */}
            <div className="lg:w-5/12">
              <div className="bg-white rounded-[24px] border border-gray-100 p-5 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="aspect-16/10 rounded-[16px] overflow-hidden mb-5">
                    <img src={imgBlogDetailAgile} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">March 13, 2014</span>
                  <h3 className="text-[#112121] text-[24px] font-bold mt-2 mb-3 leading-snug">Agile Development Projects and Usability</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.
                  </p>
                </div>
                <div className="flex gap-2 mt-6">
                  <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[11px] font-semibold">Programming</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-[11px] font-semibold">Research</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-[11px] font-semibold">Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-[#112121] text-[36px] font-bold text-center mb-10 font-serif">
            FAQs
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div key={idx} className="bg-[#EAF8F2] rounded-[16px] overflow-hidden transition-all duration-300 shadow-sm border border-transparent hover:border-[#35CAA3]/20">
                  <button 
                    onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[#112121] text-[15px] md:text-[16px] focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <svg 
                      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
                      className={`transform transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 text-[14px] leading-relaxed border-t border-[#35CAA3]/10 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* We Are Hiring Scattered Cards Section */}
        <section className="w-full max-w-6xl mx-auto px-6 py-20 relative h-[500px] overflow-hidden hidden md:block">
          <div className="absolute left-[5%] top-[10%] z-10 -rotate-12 hover:rotate-0 hover:scale-[1.05] hover:z-50 transition-all duration-300 cursor-pointer shadow-xl rounded-[18px] overflow-hidden w-[240px]">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
          <div className="absolute left-[38%] top-[35%] z-20 rotate-6 hover:rotate-0 hover:scale-[1.05] hover:z-50 transition-all duration-300 cursor-pointer shadow-xl rounded-[18px] overflow-hidden w-[260px]">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
          <div className="absolute right-[5%] top-[15%] z-10 rotate-15 hover:rotate-0 hover:scale-[1.05] hover:z-50 transition-all duration-300 cursor-pointer shadow-xl rounded-[18px] overflow-hidden w-[250px]">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
          <div className="absolute left-[15%] bottom-[5%] z-20 rotate-[-8deg] hover:rotate-0 hover:scale-[1.05] hover:z-50 transition-all duration-300 cursor-pointer shadow-xl rounded-[18px] overflow-hidden w-[230px]">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
          <div className="absolute right-[22%] bottom-[8%] z-30 rotate-[-4deg] hover:rotate-0 hover:scale-[1.05] hover:z-50 transition-all duration-300 cursor-pointer shadow-xl rounded-[18px] overflow-hidden w-[270px]">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
        </section>

        {/* Mobile Hiring View */}
        <section className="w-full max-w-md mx-auto px-6 py-8 flex flex-col gap-6 md:hidden">
          <div className="shadow-lg rounded-[18px] overflow-hidden w-full max-w-[280px] mx-auto -rotate-3">
            <img src={imgHiringCardGroup} className="w-full h-auto" />
          </div>
        </section>

        {/* ─────────────── LET'S TALK CTA ─────────────── */}
        <section className="w-full max-w-5xl mx-auto px-6 py-16">
          <div className="w-full bg-[#5DE299] rounded-[24px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
            {/* Left side text and support rows */}
            <div className="lg:w-3/5 z-10">
              <h2 className="text-[#112121] text-[28px] md:text-[36px] font-bold max-w-md mb-3 leading-tight font-['Space_Grotesk']">
                Let's Talk To Build Your Dream Project
              </h2>
              <p className="text-[#112121]/70 text-[14px] leading-relaxed max-w-lg mb-8 font-medium">
                A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
              </p>

              {/* Badges Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/90 p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-white/50 shrink-0">
                  <div className="w-10 h-10 bg-[#EAF8F2] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#35CAA3" strokeWidth="2.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3"/></svg>
                  </div>
                  <div>
                    <h5 className="text-[#112121] text-[13px] font-bold">Support</h5>
                    <span className="text-[#112121]/60 text-[11px] font-bold">24/7</span>
                  </div>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-white/50 shrink-0">
                  <div className="w-10 h-10 bg-[#EAF8F2] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#35CAA3" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h5 className="text-[#112121] text-[13px] font-bold">Call Us</h5>
                    <span className="text-[#112121]/60 text-[11px] font-bold">+91 8009800980</span>
                  </div>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl flex items-center gap-3 shadow-sm border border-white/50 shrink-0">
                  <div className="w-10 h-10 bg-[#EAF8F2] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#35CAA3" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  </div>
                  <div>
                    <h5 className="text-[#112121] text-[13px] font-bold">Email Us</h5>
                    <span className="text-[#112121]/60 text-[11px] font-bold">support@mafia.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side illustration */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0 z-10">
              <img src={imgCtaAirplane} className="w-[280px] md:w-[320px] object-contain drop-shadow-2xl" />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

const ServiceItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-[18px] h-[18px] rounded-full border border-[#35CAA3] bg-[#E8F8E8] flex items-center justify-center shrink-0">
      <div className="w-[8px] h-[8px] bg-[#35CAA3] rounded-full" />
    </div>
    <span className="text-[#112121] text-[14px] font-medium">{text}</span>
  </div>
);

const ProcessDiamond = ({ text }: { text: string }) => (
  <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] shrink-0">
    <div className="absolute inset-0 rotate-45 border-dashed border-[#A3A3A3] border rounded-[24px]" />
    <div className="absolute inset-[6px] rotate-45 bg-[#0A0A0A] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.15)] flex items-center justify-center border border-[#333]" />
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2 text-center pointer-events-none">
      <span className="text-white text-[12px] md:text-[13px] font-medium">{text}</span>
    </div>
  </div>
);

const ProcessArrow = ({ up }: { up?: boolean, down?: boolean }) => (
  <div className="hidden md:flex w-8 h-8 items-center justify-center shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
      className={up ? "-rotate-45 -translate-y-4" : "rotate-45 translate-y-4"}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </div>
);
