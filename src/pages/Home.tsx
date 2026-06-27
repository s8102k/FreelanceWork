import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion, useSpring } from 'framer-motion';
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

// Icons and SVGs
const imgArrowDown = "http://localhost:9013/assets/bcd67fb81bafd311876b872f574da82b350557b4.svg";

// Cards images
const imgImage13 = "http://localhost:9013/assets/ebd82cd3b56560730d12f6252e1476c6755068eb.png";
const imgImage14 = "http://localhost:9013/assets/3544a730e2a573f03c2bbbc1014ced7d9760aac2.png";
const imgImage15 = "http://localhost:9013/assets/d7c7f76296f891e8241f91f6bea6cce774dbda88.png";
const imgImage16 = "http://localhost:9013/assets/53f0465993b727cb0e8563118258f156b87a5a28.png";
const imgGroup15127 = "http://localhost:9013/assets/51959169d2428db978d9068f8b6b3d16e5de6db6.svg"; // circular text center arrow

// Blog images
const imgBlog1 = "http://localhost:9013/assets/009533ddb18880647940253fa905f2a8d6a3a95e.png";
const imgBlog2 = "http://localhost:9013/assets/c220b565fba3f3369a85cb9bd4d04bf17c85be21.png";
const imgBlog3 = "http://localhost:9013/assets/9ca412fa840de131974162b09d68033e23a850b5.png";

// CTA Assets
const imgCombinedShape9 = "http://localhost:9013/assets/9989e550043c7b0a22dbda4627d61ded4333ec15.svg";
const imgCombinedShape10 = "http://localhost:9013/assets/284976a07bac044dadc4a723b5517eadcb7c6614.svg";
const imgBlock = "http://localhost:9013/assets/7c5960c54678dae74172714524c3bf9c97cd6f12.svg";
const imgStar = "http://localhost:9013/assets/6d29adeaa3a5421e09c3b6ef994be6117b090d4a.svg";

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const heroX = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const heroY = useTransform(smoothMouseY, [-0.5, 0.5], [-4, 4]);

  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [-2, 2]);

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


  const faqs = [
    { q: "Do you provide a Digital Marketing?", a: "Yes, we provide fully managed digital marketing services including SEO, SMO, search ads, and branding outreach." },
    { q: "What kind of jobs will candidates get at the end of the program?", a: "Candidates are placed into high-growth startup positions, product management, visual design, or core technical dev tracks." },
    { q: "Why is this program in-person and not online?", a: "Our in-person model facilitates close collaboration, structured mentoring sessions, and intense startup ecosystem integration." },
    { q: "How do I apply for marketing team?", a: "You can apply directly via our careers page or send your portfolio to careers@digitalmafia.com." }
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
                  <span className="absolute w-[8px] h-[8px] bg-[#da3838] rounded-full top-[50%] left-[55%] -translate-x-1/2 -translate-y-[20%]"></span>
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
                  className="bg-[#132222] border border-white/[0.06] hover:border-[#2dd36f]/30 rounded-[24px] p-8 md:p-10 flex flex-col items-start min-h-[380px] md:min-h-[460px] transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(13,26,26,0.5)] group"
                >
                  {/* Warning/Info Icon */}
                  <div className="w-12 h-12 rounded-[12px] border border-white/10 bg-white/[0.02] flex items-center justify-center mb-8">
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
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden group cursor-pointer">
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
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden group cursor-pointer">
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
                className="relative w-full aspect-[3/4] rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Mars" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Typography
                </div>
              </div>
              {/* Card 2.2 */}
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden group cursor-pointer">
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
                className="relative w-full aspect-[3/4] rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo3} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Tested on Animals" />
                <div className="absolute bottom-6 left-6 text-[#132222]/80 text-[12px] font-semibold tracking-wide select-none">
                  &gt; Ad design
                </div>
              </div>
              {/* Card 3.2 */}
              <div className="relative w-full aspect-[3/4] rounded-[20px] cursor-pointer overflow-hidden group">
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
                className="relative w-full aspect-[3/4] rounded-[20px] cursor-pointer overflow-hidden group z-10"
              >
                <img src={photo4} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Photoshop editing" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Photoshop editing
                </div>
              </div>
              {/* Card 4.2 */}
              <div className="relative w-full aspect-[3/4] rounded-[20px] overflow-hidden group">
                <img src={photo4} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Photoshop editing" />
                <div className="absolute bottom-6 left-6 text-white text-[12px] font-semibold tracking-wide select-none">
                  &gt; Photoshop editing
                </div>
              </div>
            </div>

            {/* Column 5 - shifted down */}
            <div className="flex flex-col gap-6 lg:mt-24">
              {/* Card 5.1 */}
              <div className="relative w-full aspect-[3/4] rounded-[20px] bg-[#132222] border border-white/[0.04] p-6 flex flex-col justify-between overflow-hidden group">
                <div className="flex-1 flex items-center justify-center select-none overflow-hidden mt-2">
                  <img src={photo5} className="max-h-[85%] max-w-full object-contain rounded-sm shadow-md group-hover:scale-105 transition-transform duration-500" alt="E-book cover" />
                </div>
                <div className="text-white/80 text-[12px] font-semibold tracking-wide mt-4 select-none">
                  &gt; E-book cover design
                </div>
              </div>
              {/* Card 5.2 */}
              <div className="relative w-full aspect-[3/4] rounded-[20px] bg-[#132222] border border-white/[0.04] p-6 flex flex-col justify-between overflow-hidden group">
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start self-stretch max-w-[1180px] relative py-[1px] mb-12 mx-auto gap-20 lg:gap-0 px-6 lg:px-0">

            {/* Card 1 */}
            <div className="flex flex-col items-start relative pt-[19px] pr-[0px] lg:pr-[30px] mr-[0px] lg:mr-[26px] w-full max-w-[360px] lg:max-w-none lg:flex-1">
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
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center -ml-[32px]" >
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
                          <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[9px] right-[-75px]">
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
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[42px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[70px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute bottom-[88px] right-[1px]">
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
            <div className="flex flex-col items-start relative pt-[19px] pr-[0px] lg:pr-[30px] mr-[0px] lg:mr-[26px] w-full max-w-[360px] lg:max-w-none lg:flex-1">
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
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center -ml-[32px]" >
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
                          <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[9px] right-[-75px]">
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
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[43px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[71px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute bottom-[88px] right-[1px]">
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
                className="absolute top-[12px] right-[6px] w-[95px] h-[95px] object-contain rotate-[12deg] z-20"
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
                      <span className="text-[#242424] text-[34px] font-bold absolute bottom-[26px] left-0 right-0 text-center -ml-[32px]" >
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
                          <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[9px] right-[-75px]">
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
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[43px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute top-[71px] right-[1px]">
                      </div>
                      <div className="bg-[#F2F2F2] w-[274px] h-[1px] absolute bottom-[88px] right-[1px]">
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


        {/* Dark Navy Bottom Wave */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          style={{ width: '100%', lineHeight: 0, display: 'block' }}
        >
          <svg viewBox="0 0 1440 170" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }} preserveAspectRatio="none">
            <path d="M0,100 C80,160 180,30 320,90 C440,140 520,20 660,70 C780,110 860,30 980,60 C1100,90 1180,150 1280,80 C1360,30 1410,60 1440,90 L1440,170 L0,170 Z" fill="#08191D" />
          </svg>
        </motion.div>

      </section>

    </motion.div>
  );
}
