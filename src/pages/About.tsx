import { useState, useEffect } from 'react';

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
import imgImage from '../assets/about_photo1.png';
import imgDivGatsbyImageWrapper from '../assets/about_photo2.png';
import imgAboutChild1Png from '../assets/about_photo3.png';
import imgBell21 from '../assets/bell.svg';
import imgSubtract1 from '../assets/subtract1.svg';
import imgSubtract2 from '../assets/subtract2.svg';
import imgSubtract3 from '../assets/subtract3.svg';
import imgWave from '../assets/wave.svg';
import imgPhoto5 from '../assets/about_photo5.png';
import imgProfileAkshay from '../assets/profile_akshay.png';
import imgProfileKunal from '../assets/profile_kunal.png';
import imgProfilePratap from '../assets/profile_pratap.png';
import imgProfileAnuj from '../assets/profile_anuj.png';
import imgLogoMeesho from '../assets/logo_meesho.png';
import imgNewsYourstory from '../assets/news_yourstory.png';
import imgNewsIndianexpress from '../assets/news_indianexpress.png';
import imgNewsEconomictimes from '../assets/news_economictimes.png';
import imgImage18 from '../assets/image18.png';
import imgImage17 from '../assets/image17.png';
import imgImage16 from '../assets/image16.png';
import imgImage13 from '../assets/image13.png';
import imgWaveBottom from '../assets/wave_bottom.svg';
import imgCtaShape2 from '../assets/cta_shape2.svg';
import chipsVideo from '../assets/chips.mp4';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

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

function HiringCard({ left, top, rotation, imgSize = 300, imgLeft = "114px", imgTop = "22px", linkLeft = "41px", linkTop = "175px" }: HiringCardProps) {
  return (
    <div 
      className="hiring-card"
      style={{
        width: 392,
        height: 221,
        left,
        top,
        transform: `rotate(${rotation})`,
        transformOrigin: 'top left'
      }}
    >
      <div className="absolute left-[30px] top-[30px] font-['Space_Grotesk'] font-bold text-[48px] text-[#030A22] leading-[54px] z-10">
        We are<br/>Hiring
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

export default function About({ setActiveTab }: AboutProps) {
  const [scale, setScale] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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

  return (
    <div className="text-black w-full min-h-screen">
      {/* 1. HERO HERO BANNER */}
      {/* Desktop Version: Exact Figma coordinates and dimensions */}
      <section 
        className="bg-[#112222] text-white w-full overflow-hidden relative hidden xl:block"
        style={{ height: `${931 * scale}px` }}
      >
        <div 
          className="w-[1440px] h-[931px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >

          {/* Floating Bell (Bottom-Left) */}
          <img 
            src={imgBell21} 
            className="absolute rotate-[16deg] z-20 animate-float select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(255,80,0,0.4)]" 
            style={{ width: 79.94, height: 70.22, left: 254.86, top: 700.39 }} 
            alt="" 
          />
          
          {/* Golden Chevron Arrows (Top-Right) */}
          <div className="absolute left-[1097.88px] top-[289.02px] w-[206.44px] h-[206.44px] rotate-[-39deg] z-10 select-none pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 206 206" fill="none">
              <defs>
                <linearGradient id="goldChevronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF7C2" />
                  <stop offset="50%" stopColor="#D6BE59" />
                  <stop offset="100%" stopColor="#876713" />
                </linearGradient>
              </defs>
              <path d="M40 70 L90 110 L140 70" stroke="url(#goldChevronGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
              <path d="M55 85 L90 113 L125 85" stroke="url(#goldChevronGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
              <path d="M70 100 L90 116 L110 100" stroke="url(#goldChevronGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </div>

          {/* Far Right Subtract Chevrons */}
          <img 
            src={imgSubtract1} 
            className="absolute select-none pointer-events-none z-10" 
            style={{ width: 125.25, height: 123.29, left: 1340.25, top: 428.29, transform: 'rotate(180deg)', transformOrigin: 'top left' }} 
            alt="" 
          />
          <img 
            src={imgSubtract2} 
            className="absolute select-none pointer-events-none z-10" 
            style={{ width: 117.36, height: 126.97, left: 1354.36, top: 425.97, transform: 'rotate(180deg)', transformOrigin: 'top left' }} 
            alt="" 
          />
          <img 
            src={imgSubtract3} 
            className="absolute select-none pointer-events-none z-10" 
            style={{ width: 125.68, height: 135.11, left: 1380.68, top: 427.11, transform: 'rotate(180deg)', transformOrigin: 'top left' }} 
            alt="" 
          />

          {/* Curious about us? */}
          <div className="absolute left-[267px] top-[34px] font-['Italianno'] font-normal text-[144.44px] leading-[200.78px] tracking-[8.67px] select-none text-white">
            Curious about us?
          </div>

          {/* Dive in to know */}
          <div className="absolute left-[398px] top-[150px] font-['Italianno'] font-normal text-[125.88px] leading-[174.97px] tracking-[7.55px] select-none text-white">
            Dive in to know
          </div>

          {/* Paragraph Description */}
          <div className="absolute left-[216px] top-[305px] w-[1009px] text-center text-[#EEF2F0] font-['Poppins'] font-light text-[24px] leading-[36px]">
            Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
          </div>

          {/* Left Stats Card */}
          <div className="absolute left-[-63px] top-[580px] w-[420px] h-[100px] bg-[#F2FBF7] text-black rounded-[20px] shadow-2xl flex items-center justify-start pl-[92px] gap-[75px] hover:scale-102 transition-transform duration-300 z-10">
            <div className="flex flex-col justify-center">
              <span className="font-['Manrope'] font-extrabold text-[24px] text-black leading-[36px] text-center">10 LPA</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16.58px] leading-[16.58px] text-center">Local Clients</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-['Manrope'] font-extrabold text-[24px] text-black leading-[36px] text-center">95%</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16.58px] leading-[16.58px] text-center">Project Completed</span>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="absolute left-[1098px] top-[580px] w-[420px] h-[100px] bg-[#F2FBF7] text-black rounded-[20px] shadow-2xl flex items-center justify-start pl-[33px] gap-[75px] hover:scale-102 transition-transform duration-300 z-10">
            <div className="flex flex-col justify-center">
              <span className="font-['Manrope'] font-extrabold text-[24px] text-black leading-[36px] text-center">10 LPA</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16.58px] leading-[16.58px] text-center">Local Clients</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-['Manrope'] font-extrabold text-[24px] text-black leading-[36px] text-center">95%</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16.58px] leading-[16.58px] text-center">Project Completed</span>
            </div>
          </div>

          {/* Let's build CTA button */}
          <button 
            onClick={() => setActiveTab('contact')}
            className="absolute left-[584px] top-[816px] w-[272px] h-[46px] bg-[#FFD500] hover:bg-[#ffe040] text-black font-['Space_Grotesk'] text-[18.88px] rounded-[11px] flex items-center justify-center gap-[7px] transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer select-none z-20"
          >
            <span>Let’s build it together.</span>
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Chips Video — dark bg removed via screen blend */}
          <video
            src={chipsVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute pointer-events-none select-none object-cover"
            style={{ width: 988, height: 534, left: 226, top: 315, zIndex: 0, mixBlendMode: 'screen' }}
          />
        </div>
      </section>

      {/* Mobile/Tablet Version: Fully responsive layout */}
      <section className="bg-[#112222] text-white py-16 px-6 md:px-16 relative flex flex-col items-center xl:hidden overflow-hidden">
        {/* Floating Bell (Bottom-Left) */}
        <div className="absolute left-[4%] bottom-[15%] w-[60px] h-[52px] z-10 animate-float select-none pointer-events-none hidden sm:block">
          <svg className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,138,0,0.35)] transform rotate-[16deg]" viewBox="0 0 100 100">
            <circle cx="50" cy="18" r="10" fill="none" stroke="#FB8C00" strokeWidth="6" />
            <path d="M 50 25 C 32 25, 28 68, 20 75 C 20 78, 80 78, 80 75 C 72 68, 68 25, 50 25 Z" fill="#FB8C00" />
            <circle cx="50" cy="83" r="8" fill="#FF3D00" />
          </svg>
        </div>
        
        {/* Golden Chevron Arrows (Top-Right) */}
        <div className="absolute right-[4%] top-[15%] z-10 select-none pointer-events-none hidden sm:block">
          <svg className="w-[80px] h-[55px]" viewBox="0 0 120 80">
            <path d="M20 15 L50 40 L20 65 L28 65 L58 40 L28 15 Z" fill="#D6BE59" />
            <path d="M45 15 L75 40 L45 65 L53 65 L83 40 L53 15 Z" fill="#D6BE59" opacity="0.8" />
          </svg>
        </div>

        <div className="max-w-5xl text-center flex flex-col items-center z-10">
          <h1 className="font-['Italianno'] font-normal text-[80px] sm:text-[100px] tracking-[6px] text-white leading-none select-none">
            Curious about us?
          </h1>
          <h2 className="font-['Italianno'] font-normal text-[60px] sm:text-[80px] tracking-[5px] text-white leading-none mt-2">
            Dive in to know
          </h2>

          <p className="font-['Poppins'] font-light text-[18px] text-[#EEF2F0] leading-relaxed max-w-[800px] mt-8">
            Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
          </p>  {/* Stats Badges - Mobile/Tablet inline version */}
          <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full max-w-xl justify-center z-20">
            <div className="bg-[#f2fbf7] text-[#122] p-6 rounded-[20px] shadow-lg flex justify-around items-center w-full gap-6 border border-white/10">
              <div className="flex flex-col items-center">
                <span className="font-['Manrope'] font-extrabold text-[22px] text-black leading-none">10 LPA</span>
                <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[14px] mt-1.5">Local Clients</span>
              </div>
              <div className="w-[1px] h-10 bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <span className="font-['Manrope'] font-extrabold text-[22px] text-black leading-none">95%</span>
                <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[14px] mt-1.5">Project Completed</span>
              </div>
            </div>
          </div>

          {/* Let's build CTA button */}
          <button 
            onClick={() => setActiveTab('contact')}
            className="mt-8 bg-[#FFD500] hover:bg-[#ffe040] text-black font-['Space_Grotesk'] text-[18px] py-3 px-8 rounded-[11px] flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer select-none z-20"
          >
            <span>Let’s build it together.</span>
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          {/* Chips Video — mobile */}
          <div className="mt-8 flex items-center justify-center select-none pointer-events-none">
            <video
              src={chipsVideo}
              autoPlay
              muted
              loop
              playsInline
              className="object-contain"
              style={{ width: 240, height: 240 }}
            />
          </div>
        </div>
      </section>

      {/* 2. METRICS SECTION */}
      <section className="bg-[#f7fcf5] py-24 w-full flex flex-col items-center">
        <div data-layer="Container" className="Container w-full max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col lg:flex-row justify-start items-center gap-16 lg:gap-[96px]">
            <img data-layer="Image" className="Image w-full max-w-[560px] h-[320px] sm:h-[480px] lg:h-[560px] object-cover rounded-[24px] shadow-xl relative" src={imgImage} alt="Metrics showcase" />
            <div data-layer="Content" className="Content w-full flex flex-col justify-start items-start gap-12 lg:gap-[64px]" style={{flex: '1 1 0'}}>
                <div data-layer="Heading and supporting text" className="HeadingAndSupportingText" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
                    <div data-layer="Heading and subheading" className="HeadingAndSubheading" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                        <div data-layer="Subheading" className="Subheading" style={{alignSelf: 'stretch', color: '#112222', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word'}}>We’ve helped hundreds of companies</div>
                        <div data-layer="Heading" className="Heading" style={{alignSelf: 'stretch', color: '#101828', fontSize: 48, fontFamily: 'Inter', fontWeight: '600', lineHeight: '60px', wordWrap: 'break-word'}}>We’re only just getting started on our journey</div>
                    </div>
                </div>
                <div data-layer="Content" className="Content" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
                    <div data-layer="Row" className="Row flex flex-col sm:flex-row self-stretch justify-start items-start gap-8 lg:gap-[32px]">
                        <div data-layer="_Metric item" data-action="False" data-breakpoint="Desktop" data-type="Left aligned text" className="MetricItem" style={{width: 264, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <div data-layer="Number and text" className="NumberAndText" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                                <div data-layer="Number" className="Number" style={{alignSelf: 'stretch', color: '#36ED81', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', lineHeight: '72px', wordWrap: 'break-word'}}>400+</div>
                                <div data-layer="Text" className="Text" style={{alignSelf: 'stretch', color: '#101828', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word'}}>Projects completed</div>
                            </div>
                        </div>
                        <div data-layer="_Metric item" data-action="False" data-breakpoint="Desktop" data-type="Left aligned text" className="MetricItem" style={{width: 264, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <div data-layer="Number and text" className="NumberAndText" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                                <div data-layer="Number" className="Number" style={{alignSelf: 'stretch', color: '#36ED81', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', lineHeight: '72px', wordWrap: 'break-word'}}>600%</div>
                                <div data-layer="Text" className="Text" style={{alignSelf: 'stretch', color: '#101828', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word'}}>Return on investment</div>
                            </div>
                        </div>
                    </div>
                    <div data-layer="Row" className="Row flex flex-col sm:flex-row self-stretch justify-start items-start gap-8 lg:gap-[32px]">
                        <div data-layer="_Metric item" data-action="False" data-breakpoint="Desktop" data-type="Left aligned text" className="MetricItem" style={{width: 264, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <div data-layer="Number and text" className="NumberAndText" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                                <div data-layer="Number" className="Number" style={{alignSelf: 'stretch', color: '#36ED81', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', lineHeight: '72px', wordWrap: 'break-word'}}>10k</div>
                                <div data-layer="Text" className="Text" style={{alignSelf: 'stretch', color: '#101828', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word'}}>Global downloads</div>
                            </div>
                        </div>
                        <div data-layer="_Metric item" data-action="False" data-breakpoint="Desktop" data-type="Left aligned text" className="MetricItem" style={{width: 264, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
                            <div data-layer="Number and text" className="NumberAndText" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                                <div data-layer="Number" className="Number" style={{alignSelf: 'stretch', color: '#36ED81', fontSize: 60, fontFamily: 'Inter', fontWeight: '600', lineHeight: '72px', wordWrap: 'break-word'}}>200+</div>
                                <div data-layer="Text" className="Text" style={{alignSelf: 'stretch', color: '#101828', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word'}}>5-star reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section className="bg-white py-24 px-6 md:px-16 w-full flex flex-col items-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
          <h2 className="font-['Inter'] font-bold text-[36px] md:text-[60px] text-[#004318] text-center leading-tight tracking-tight">
            It all started with overdrafts
          </h2>
          <p className="font-['DM_Sans'] text-[#004318]/80 text-[18px] md:text-[25px] text-center max-w-4xl leading-relaxed mt-6">
            Our first fight was to make overdraft fees a thing of the past by spotting members the money they needed, without charging them $38. Why? Because it’s the right thing to do.
          </p>

          {/* Yellow Banner Card */}
          <div className="bg-[#e1ea78] text-[#004318] py-12 px-8 rounded-[20px] w-full mt-16 text-center max-w-4xl shadow-md border border-[#e1ea78]/50 hover:scale-101 transition-transform duration-300">
            <p className="font-['Inter'] font-bold text-[28px] md:text-[40px] leading-tight tracking-[1px]">
              Indian is paid $11B in overdraft fees to banks in 2021²
            </p>
          </div>
        </div>
      </section>

      {/* 4. DIGITAL INNOVATION GALLERY */}
      <section className="py-20 px-6 md:px-16 bg-[#fafafa] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch justify-center">
          {/* Left Column: Stacked showcase images with exact Figma heights on desktop */}
          <div className="flex-grow flex flex-col gap-8 lg:gap-[39px] justify-between">
            <div className="rounded-[20px] overflow-hidden shadow-lg h-[260px] lg:h-[393px] w-full">
              <img src={imgDivGatsbyImageWrapper} className="w-full h-full object-cover hover:scale-103 transition-transform duration-500" alt="Innovation 1" />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg h-[150px] lg:h-[171px] w-full">
              <img src={imgAboutChild1Png} className="w-full h-full object-cover hover:scale-103 transition-transform duration-500" alt="About child" />
            </div>
          </div>

          {/* Right Column: Text banner matching the height of left column stacked */}
          <div className="flex-grow bg-[#001006] text-white p-10 md:p-16 rounded-[20px] border-7 border-[#e1ea78] flex flex-col justify-center gap-6 shadow-2xl lg:w-[599px] lg:h-[603px]">
            <h3 className="font-['Inter'] font-extrabold text-[36px] md:text-[60px] leading-[60px] tracking-[1px]">
              New Era In Digital Innovation.
            </h3>
            <p className="font-['DM_Sans'] text-white/80 text-[18px] md:text-[25px] leading-[32px] mt-4">
              Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
            </p>
          </div>
        </div>
      </section>

      {/* Wave Transition Separator */}
      <div className="w-full overflow-hidden bg-[#fafafa] -mb-[1px] leading-[0] select-none pointer-events-none">
        <img src={imgWave} className="w-full h-auto block" alt="" />
      </div>

      {/* Teams section moved to the bottom as combined Teams and News section */}

      {/* 5. VALUES / FEATURES SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#122] text-white relative overflow-hidden pb-48">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
            <span className="font-['Inter'] font-semibold text-[16px] text-[#e1ea78] uppercase tracking-[1.5px]">
              Our values
            </span>
            <h2 className="font-['Inter'] font-semibold text-[36px] md:text-[36px] text-[#e1ea78] tracking-tight">
              How we work at Untitled
            </h2>
            <p className="font-['Inter'] text-[#eef2f0] text-[18px] md:text-[20px] leading-relaxed">
              Our shared values keep us connected and guide us as one team.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Care about our team",
                description: "Understand what matters to our employees. Give them what they need to do their best work.",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Be excellent to each other",
                description: "No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                )
              },
              {
                title: "Pride in what we do",
                description: "Value quality and integrity in everything we do. At all times. No exceptions.",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                )
              },
              {
                title: "Don't #!&$ the customer",
                description: "Understand customers' stated and unstated needs. Make them wildly successful.",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                )
              },
              {
                title: "Do the impossible",
                description: "Be energized by difficult problems. Revel in unknowns. Ask \"Why?\", but always question, \"Why not?\"",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                )
              },
              {
                title: "Sweat the small stuff",
                description: "We believe the best products come from the best attention to detail. Sweat the small stuff.",
                icon: (
                  <svg className="w-5 h-5 text-[#EEF2F0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 group">
                <div className="w-12 h-12 rounded-full bg-[#164630] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-space font-semibold text-[20px] text-[#e1ea78] mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-white/60 text-[16px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Client circle removed from here, will be rendered below in the combined container */}
        </div>

        {/* Centered Client Circle & Double Overlapping Crossing Marquees */}
        <div className="relative w-full h-[450px] mt-16 z-10 select-none">
          {/* Ribbon 1: Rising from bottom-left to top-right */}
          <div
            className="absolute overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              left: '-20%',
              width: '140%',
              height: '71.45px',
              top: 'calc(50% - 35.7px)',
              background: '#E0F7ED',
              transform: 'rotate(-19deg)',
              transformOrigin: 'center',
              zIndex: 5,
            }}
          >
            <div
              className="flex w-max items-center h-full animate-logo-marquee"
              style={{ gap: '64px', paddingLeft: '32px' }}
            >
              {[
                imgGrowwWebp, imgSliceWebp, imgBharatPeWebp, imgPostmanWebp, imgGrofersWebp,
                imgCredWebp, imgMicrosoftWebp, imgAmazonWebp, imgGrabWebp, imgSalesforceWebp,
                imgOracleWebp, imgIbmWebp
              ].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  style={{ height: '26px' }}
                  className="object-contain shrink-0 select-none pointer-events-none"
                  alt=""
                />
              ))}
              {[
                imgGrowwWebp, imgSliceWebp, imgBharatPeWebp, imgPostmanWebp, imgGrofersWebp,
                imgCredWebp, imgMicrosoftWebp, imgAmazonWebp, imgGrabWebp, imgSalesforceWebp,
                imgOracleWebp, imgIbmWebp
              ].map((logo, idx) => (
                <img
                  key={idx + 12}
                  src={logo}
                  style={{ height: '26px' }}
                  className="object-contain shrink-0 select-none pointer-events-none"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* Ribbon 2: Falling from top-left to bottom-right */}
          <div
            className="absolute overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            style={{
              left: '-20%',
              width: '140%',
              height: '71.45px',
              top: 'calc(50% - 35.7px)',
              background: '#E0F7ED',
              transform: 'rotate(199deg)',
              transformOrigin: 'center',
              zIndex: 6,
            }}
          >
            <div
              className="flex w-max items-center h-full animate-logo-marquee"
              style={{ gap: '64px', paddingLeft: '32px' }}
            >
              {[
                imgGrowwWebp, imgSliceWebp, imgBharatPeWebp, imgPostmanWebp, imgGrofersWebp,
                imgCredWebp, imgMicrosoftWebp, imgAmazonWebp, imgGrabWebp, imgSalesforceWebp,
                imgOracleWebp, imgIbmWebp
              ].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  style={{ height: '26px' }}
                  className="object-contain shrink-0 select-none pointer-events-none"
                  alt=""
                />
              ))}
              {[
                imgGrowwWebp, imgSliceWebp, imgBharatPeWebp, imgPostmanWebp, imgGrofersWebp,
                imgCredWebp, imgMicrosoftWebp, imgAmazonWebp, imgGrabWebp, imgSalesforceWebp,
                imgOracleWebp, imgIbmWebp
              ].map((logo, idx) => (
                <img
                  key={idx + 12}
                  src={logo}
                  style={{ height: '26px' }}
                  className="object-contain shrink-0 select-none pointer-events-none"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* Centered Client Circle */}
          <div 
            className="w-[238px] h-[238px] bg-[#36ed81] rounded-full flex flex-col items-center justify-center text-black shadow-lg hover:scale-105 transition-transform duration-300 z-10 absolute"
            style={{
              top: 'calc(50% - 119px)',
              left: 'calc(50% - 119px)',
            }}
          >
            <span className="font-['Poly'] text-[60px] font-normal leading-none -mt-4">100+</span>
            <span className="font-['Poppins'] text-[20px] font-normal mt-1">Our Client</span>
          </div>
        </div>
      </section>

      {/* Wave Transition Separator (Bottom of Section 5 / Top of Section 6) */}
      <div 
        className="w-full overflow-hidden bg-[#F7FCF5] -mb-[1px] leading-[0] select-none pointer-events-none relative z-30 -mt-[20px]"
        style={{ height: '46px' }}
      >
        <img src={imgWaveBottom} className="w-full h-auto block" alt="" />
      </div>

      {/* 6. COMBINED TEAMS & NEWS SECTION */}
      {/* Desktop Version */}
      <section 
        className="bg-[#F7FCF5] text-[#374545] w-full overflow-hidden relative hidden xl:block border-t border-black/5"
        style={{ height: `${2900 * scale}px` }}
      >
        <div 
          className="w-[1440px] h-[2900px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >
          {/* Top dark vector decoration removed to let the wave transition separator show */}

          
          {/* Our Mission Section */}
          <h2 
            data-layer="Our Mission" 
            className="absolute font-['Inter'] font-extrabold text-[60px] leading-[60px] tracking-[1px] text-[#112222]"
            style={{ left: 124, top: 207, width: 463, height: 93, display: 'flex', alignItems: 'center' }}
          >
            Our Mission
          </h2>

          <p 
            data-layer="Our Mission Paragraph" 
            className="absolute font-['DM_Sans'] font-normal text-[25px] leading-[32px] tracking-[0.25px] text-[#838C8C]"
            style={{ left: 126, top: 326, width: 485, height: 160, display: 'flex', alignItems: 'center' }}
          >
            Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
          </p>

          <img 
            data-layer="image 17" 
            src={imgImage17} 
            className="absolute object-contain select-none pointer-events-none"
            style={{ left: 838, top: 190, width: 454, height: 432 }} 
            alt="Our Mission"
          />

          <div data-layer="Our client" className="OurClient" style={{width: 320, left: 130.25, top: 711.21, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <div className="font-space font-bold text-[54px] leading-none select-none">
              <span className="text-[#36ED81]">Our</span>
              <span className="text-[#112222]"> Teams</span>
            </div>
          </div>
 
          {/* Accent decoration next to heading (three clean delicate rays) */}
          <svg className="absolute select-none pointer-events-none" style={{ left: 377, top: 692, width: 60, height: 60 }} viewBox="0 0 60 60" fill="none">
            <path d="M 10 40 L 22 18" stroke="#36ED81" strokeWidth="3" strokeLinecap="round" />
            <path d="M 15 43 L 42 28" stroke="#36ED81" strokeWidth="3" strokeLinecap="round" />
            <path d="M 18 47 L 48 45" stroke="#36ED81" strokeWidth="3" strokeLinecap="round" />
          </svg>
 
          {/* Supporting Text */}
          <div data-layer="Heading 1" className="Heading1 font-poppins text-[#374545]" style={{width: 1275, height: 53, left: 126, top: 801, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', fontSize: 25, fontWeight: '400', lineHeight: '35px', wordWrap: 'break-word'}}>
            We are Designer, Developer, Programmer, Marketing specialist working<br/>hard to transform your next idea into a big success.
          </div>

          {/* Profile Cards Grid / Flex Container */}
          <div data-layer="Frame 163231" className="Frame163231" style={{left: 126, top: 923, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 35, display: 'inline-flex'}}>
            
            {/* 1. Akshay Card */}
            <div 
              data-layer="Frame 1_2" 
              className="Frame12 flex flex-col justify-end p-6 select-none relative" 
              style={{
                width: 327, 
                height: 437, 
                borderRadius: 30, 
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #C7FADC 360deg), url(${imgProfileAkshay})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[30px] font-normal text-black leading-tight mb-4">Akshay</div>
              <div style={{ height: '33.35px' }} className="flex items-center">
                <img src={imgCredWebp} style={{ width: '101.42px', height: '33.35px' }} className="object-contain" alt="Cred" />
              </div>
            </div>

            {/* 2. Kunal Card */}
            <div 
              data-layer="Frame 1_2" 
              className="Frame12 flex flex-col justify-end p-6 select-none relative" 
              style={{
                width: 226, 
                height: 437, 
                borderRadius: 30, 
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #E1EA78 360deg), url(${imgProfileKunal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[30px] font-normal text-black leading-tight mb-4">Kunal</div>
              <div style={{ height: '33px' }} className="flex items-center">
                <img src={imgLogoMeesho} style={{ width: '111.15px', height: '26.66px' }} className="object-contain" alt="Meesho" />
              </div>
            </div>

            {/* 3. Pratap Card */}
            <div 
              data-layer="Frame 1_2" 
              className="Frame12 flex flex-col justify-end p-6 select-none relative" 
              style={{
                width: 225, 
                height: 437, 
                borderRadius: 30, 
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #36ED81 360deg), url(${imgProfilePratap})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[30px] font-normal text-black leading-tight mb-4">Pratap</div>
              <div style={{ height: '33.35px' }} className="flex items-center">
                <img src={imgCredWebp} style={{ width: '101.42px', height: '33.35px' }} className="object-contain" alt="Cred" />
              </div>
            </div>

            {/* 4. Anuj Card */}
            <div 
              data-layer="Frame 1_2" 
              className="Frame12 flex flex-col justify-end p-6 select-none relative" 
              style={{
                width: 226, 
                height: 437, 
                borderRadius: 30, 
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, #FAFBFB 0deg, rgba(136, 118, 118, 0) 0deg, #FFAD61 360deg), url(${imgProfileAnuj})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[30px] font-normal text-black leading-tight mb-4">Anuj</div>
              <div style={{ height: '33.35px' }} className="flex items-center">
                <img src={imgCredWebp} style={{ width: '101.42px', height: '33.35px' }} className="object-contain" alt="Cred" />
              </div>
            </div>

            {/* Next Arrow Button */}
            <div data-layer="Frame 1000001442" className="Frame1000001442 cursor-pointer hover:scale-105 transition-transform" style={{width: 48, height: 48, position: 'relative'}}>
              <div data-layer="Arrow" className="Arrow" style={{width: 48, height: 48, left: 0, top: 0, position: 'absolute', background: '#E1EA78', borderRadius: 9999, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}} />
              {/* Arrow SVG */}
              <svg style={{width: 14, height: 11, left: 17, top: 19, position: 'absolute'}} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1L13 5.5M13 5.5L8.5 10M13 5.5H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Slider Dots */}
          <div data-layer="Frame 1000001445" className="Frame1000001445" style={{left: 695, top: 1396, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div data-layer="Ellipse 956" className="Ellipse956" style={{width: 10, height: 10, background: '#5BCD99', borderRadius: 9999}} />
            <div data-layer="Ellipse 957" className="Ellipse957" style={{width: 10, height: 10, background: '#BCC1C1', borderRadius: 9999}} />
            <div data-layer="Ellipse 958" className="Ellipse958" style={{width: 10, height: 10, background: '#BCC1C1', borderRadius: 9999}} />
          </div>
 
          {/* "In News" Heading */}
          <div data-layer="Our client" className="OurClient" style={{width: 240, left: 698, top: 1575.21, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
            <div className="font-space font-bold text-[54px] leading-none select-none">
              <span className="text-[#2DC76C]">In</span>
              <span className="text-[#112222]"> News</span>
            </div>
          </div>
 
          {/* Accent decoration next to In News (three clean delicate rays) */}
          <svg className="absolute select-none pointer-events-none" style={{ left: 867, top: 1555, width: 60, height: 60 }} viewBox="0 0 60 60" fill="none">
            <path d="M 10 40 L 22 18" stroke="#2DC76C" strokeWidth="3" strokeLinecap="round" />
            <path d="M 15 43 L 42 28" stroke="#2DC76C" strokeWidth="3" strokeLinecap="round" />
            <path d="M 18 47 L 48 45" stroke="#2DC76C" strokeWidth="3" strokeLinecap="round" />
          </svg>

          {/* News Content Row */}
          <div data-layer="Frame 1000001443" className="Frame 1000001443" style={{left: 209, top: 1652, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 73, display: 'inline-flex'}}>
            {/* News main image */}
            <img data-layer="image 18" className="Image18 object-cover rounded-[20px] shadow-lg" style={{width: 400, height: 400}} src={imgImage18} alt="In News" />
            
            {/* News links list */}
            <div data-layer="Section" className="Section flex flex-col gap-4" style={{width: 550, height: 420}}>
              
              {/* News Item 1: Yourstory */}
              <a 
                href="https://yourstory.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-layer="Link" 
                className="Link p-5 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
                style={{ width: 550, height: 140 }}
              >
                <img src={imgNewsYourstory} style={{ width: '100px', height: '40px' }} className="object-contain" alt="Yourstory" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[16px] leading-[26px]">
                  “This Binny Bansal-backed startup uses real-world problems to upskill developers”
                </div>
              </a>

              {/* News Item 2: Indian Express */}
              <a 
                href="https://indianexpress.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-layer="Link" 
                className="Link p-5 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
                style={{ width: 550, height: 124 }}
              >
                <img src={imgNewsIndianexpress} style={{ width: '150px', height: '15px' }} className="object-contain" alt="Indian Express" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[16px] leading-[26px]">
                  “Bengaluru-based start-up enables developers to learn in a work-like, virtual environment”
                </div>
              </a>

              {/* News Item 3: Economic Times */}
              <a 
                href="https://economictimes.indiatimes.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                data-layer="Link" 
                className="Link p-5 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
                style={{ width: 550, height: 124 }}
              >
                <img src={imgNewsEconomictimes} style={{ width: '150px', height: '14px' }} className="object-contain" alt="Economic Times" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[16px] leading-[26px]">
                  “Learning platform Crio raises $1 M in funding led by Binny Bansal, Udaan founders”
                </div>
              </a>
            </div>
          </div>

          {/* Join the team Section */}
          <div 
            data-layer="Frame 1000001444" 
            className="Frame1000001444 flex items-center justify-between" 
            style={{ left: 120, top: 2221, width: 1193, height: 581, position: 'absolute' }}
          >
            {/* Left Card: Join the Team Content */}
            <div 
              data-layer="div.flex" 
              className="flex flex-col justify-start p-[80px] bg-[#164630] rounded-[20px] relative text-white" 
              style={{ width: 579, height: 581 }}
            >
              <h3 
                data-layer="Join the team" 
                className="font-['Inter'] font-black text-[60px] leading-[60px] tracking-[-0.6px] mb-[49px]"
              >
                Join the team
              </h3>
              
              <p 
                data-layer="Help make a difference..." 
                className="font-['DM_Sans'] font-medium text-[25px] leading-[32px] text-white/90 mb-[49px]"
              >
                Help make a difference in improving our members’ relationship with money and join our growing team.
              </p>
              
              <a 
                href="#jobs" 
                data-layer="Link" 
                className="w-[210px] h-[64px] rounded-full bg-[#004318] hover:bg-[#003010] flex items-center justify-center text-[#FDFFF8] font-['DM_Sans'] font-bold text-[18px] transition-colors shadow-md"
              >
                View job openings
              </a>
            </div>

            {/* Right Card: Image container */}
            <div 
              data-layer="div.gatsby-image-wrapper" 
              className="rounded-[20px] overflow-hidden" 
              style={{ width: 579, height: 581 }}
            >
              <img 
                src={imgPhoto5} 
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-500" 
                alt="Join the team" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mobile/Tablet Version: Teams and News Section */}
      <section className="bg-[#F7FCF5] text-[#374545] pt-16 pb-32 px-6 md:px-16 w-full flex flex-col items-center xl:hidden border-t border-black/5">
        <div className="max-w-5xl w-full flex flex-col items-center">
          
          {/* Our Mission Section - Mobile/Tablet */}
          <div className="w-full flex flex-col items-center text-center max-w-2xl mb-16">
            <h2 className="font-['Inter'] font-extrabold text-[36px] md:text-[48px] text-[#112222] mb-4">
              Our Mission
            </h2>
            <p className="font-['DM_Sans'] font-normal text-[18px] md:text-[22px] leading-relaxed text-[#838C8C] mb-8">
              Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
            </p>
            <img 
              src={imgImage17} 
              className="w-full max-w-[360px] h-auto object-contain select-none pointer-events-none" 
              alt="Our Mission" 
            />
          </div>

          {/* Our Teams Header */}
          <div className="flex items-center gap-2 mb-6 select-none">
            <span className="font-space font-bold text-[36px] md:text-[48px] text-[#36ED81]">Our</span>
            <span className="font-space font-bold text-[36px] md:text-[48px] text-[#374545]"> Teams</span>
          </div>

          <p className="font-['Poppins'] text-[#374545] text-center text-[18px] md:text-[22px] leading-relaxed max-w-3xl mb-12">
            We are Designer, Developer, Programmer, Marketing specialist working hard to transform your next idea into a big success.
          </p>

          {/* Swipeable Profile Cards Container */}
          <div className="w-full overflow-x-auto flex gap-6 pb-8 snap-x snap-mandatory no-scrollbar select-none">
            {/* 1. Akshay */}
            <div 
              className="flex-shrink-0 w-[280px] h-[380px] rounded-[25px] p-6 flex flex-col justify-end snap-center relative shadow-lg"
              style={{
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #C7FADC 360deg), url(${imgProfileAkshay})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[24px] font-normal text-black leading-tight mb-3">Akshay</div>
              <img src={imgCredWebp} style={{ width: '80px', height: '26px' }} className="object-contain align-left" alt="Cred" />
            </div>

            {/* 2. Kunal */}
            <div 
              className="flex-shrink-0 w-[280px] h-[380px] rounded-[25px] p-6 flex flex-col justify-end snap-center relative shadow-lg"
              style={{
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #E1EA78 360deg), url(${imgProfileKunal})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[24px] font-normal text-black leading-tight mb-3">Kunal</div>
              <img src={imgLogoMeesho} style={{ width: '90px', height: '22px' }} className="object-contain" alt="Meesho" />
            </div>

            {/* 3. Pratap */}
            <div 
              className="flex-shrink-0 w-[280px] h-[380px] rounded-[25px] p-6 flex flex-col justify-end snap-center relative shadow-lg"
              style={{
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, rgba(136, 118, 118, 0) 0deg, rgba(136, 118, 118, 0) 0deg, #36ED81 360deg), url(${imgProfilePratap})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[24px] font-normal text-black leading-tight mb-3">Pratap</div>
              <img src={imgCredWebp} style={{ width: '80px', height: '26px' }} className="object-contain" alt="Cred" />
            </div>

            {/* 4. Anuj */}
            <div 
              className="flex-shrink-0 w-[280px] h-[380px] rounded-[25px] p-6 flex flex-col justify-end snap-center relative shadow-lg"
              style={{
                backgroundImage: `conic-gradient(from 270deg at 50.15% 71.74%, #FAFBFB 0deg, rgba(136, 118, 118, 0) 0deg, #FFAD61 360deg), url(${imgProfileAnuj})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="font-['Jost'] text-[24px] font-normal text-black leading-tight mb-3">Anuj</div>
              <img src={imgCredWebp} style={{ width: '80px', height: '26px' }} className="object-contain" alt="Cred" />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2.5 mb-16">
            <div className="w-2.5 h-2.5 bg-[#5BCD99] rounded-full" />
            <div className="w-2.5 h-2.5 bg-[#BCC1C1] rounded-full" />
            <div className="w-2.5 h-2.5 bg-[#BCC1C1] rounded-full" />
          </div>

          {/* "In News" Header */}
          <div className="flex items-center gap-2 mb-8 select-none">
            <span className="font-space font-bold text-[36px] md:text-[48px] text-[#2DC76C]">In</span>
            <span className="font-space font-bold text-[36px] md:text-[48px] text-[#374545]"> News</span>
          </div>

          {/* News Content Stack */}
          <div className="w-full max-w-[600px] flex flex-col items-center gap-8">
            <img className="w-full aspect-square object-cover rounded-[20px] shadow-lg max-w-[400px]" src={imgImage18} alt="In News" />
            
            <div className="w-full flex flex-col gap-4">
              {/* Yourstory */}
              <a 
                href="https://yourstory.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full p-6 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <img src={imgNewsYourstory} className="w-[100px] h-[30px] object-contain" alt="Yourstory" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[15px] leading-relaxed">
                  “This Binny Bansal-backed startup uses real-world problems to upskill developers”
                </div>
              </a>

              {/* Indian Express */}
              <a 
                href="https://indianexpress.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full p-6 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <img src={imgNewsIndianexpress} className="w-[120px] h-[15px] object-contain" alt="Indian Express" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[15px] leading-relaxed">
                  “Bengaluru-based start-up enables developers to learn in a work-like, virtual environment”
                </div>
              </a>

              {/* Economic Times */}
              <a 
                href="https://economictimes.indiatimes.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full p-6 bg-[#F2FBF7] rounded-[20px] flex flex-col gap-3 hover:shadow-md transition-shadow cursor-pointer block"
              >
                <img src={imgNewsEconomictimes} className="w-[120px] h-[15px] object-contain" alt="Economic Times" />
                <div className="font-['Rubik'] text-[#7A8B87] font-bold text-[15px] leading-relaxed">
                  “Learning platform Crio raises $1 M in funding led by Binny Bansal, Udaan founders”
                </div>
              </a>
            </div>
          </div>

          {/* Join the team Section - Mobile/Tablet */}
          <div className="w-full max-w-[600px] flex flex-col items-center gap-6 mt-16">
            {/* Left Card content */}
            <div className="w-full p-8 md:p-12 bg-[#164630] rounded-[20px] flex flex-col justify-start text-white text-center md:text-left items-center md:items-start relative">
              <h3 className="font-['Inter'] font-black text-[36px] md:text-[48px] leading-tight tracking-tight mb-4">
                Join the team
              </h3>
              <p className="font-['DM_Sans'] font-medium text-[16px] md:text-[20px] leading-relaxed text-white/90 mb-8">
                Help make a difference in improving our members’ relationship with money and join our growing team.
              </p>
              <a 
                href="#jobs" 
                className="w-full max-w-[240px] py-4 bg-[#004318] hover:bg-[#003010] rounded-full flex items-center justify-center text-[#FDFFF8] font-['DM_Sans'] font-bold text-[18px] transition-colors shadow-md"
              >
                View job openings
              </a>
            </div>
            
            {/* Right Card image */}
            <div className="w-full aspect-[579/581] max-w-[579px] rounded-[20px] overflow-hidden shadow-lg">
              <img 
                src={imgPhoto5} 
                className="w-full h-full object-cover" 
                alt="Join the team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Version: FAQs & Footer */}
      <section className="bg-white text-[#112121] py-16 px-6 md:px-16 w-full flex flex-col items-center xl:hidden border-t border-black/5">
        <div className="max-w-[800px] w-full flex flex-col items-center">
          {/* FAQs mobile stack */}
          <h2 className="font-serif font-semibold text-[32px] text-[#112121] text-center mb-8">
            FAQs
          </h2>
          
          <div className="w-full flex flex-col gap-4 mb-16">
            {[
              {
                question: "Do you provide a Digital Marketing?",
                answer: "Yes, we offer comprehensive digital marketing services including SEO, PPC, social media management, content strategy, and branding to help your business grow online."
              },
              {
                question: "What kind of jobs will candidates get at the end of the program?",
                answer: "Our candidates typically land roles as Digital Marketers, SEO Specialists, Content Strategists, Growth Managers, and Social Media Coordinators at leading tech startups and digital agencies."
              },
              {
                question: "Why is this program in-person and not online?",
                answer: "Our in-person format ensures high engagement, hands-on collaborative projects, direct mentorship from industry experts, and peer networking opportunities that are hard to replicate online."
              },
              {
                question: "How do I apply for marketing team?",
                answer: "You can apply directly through our careers portal by submitting your updated resume and portfolio. Our recruiting team will review your application and contact you for the next steps."
              }
            ].map((faq, index) => (
              <div key={index} className="w-full bg-[#D2F7E6] rounded-[15px] overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between px-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-['Manrope'] font-semibold text-[18px] text-[#112121] leading-snug pr-4">{faq.question}</span>
                  <svg className={`w-5 h-5 text-[#112121] shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 text-[15px] text-[#112121]/80 font-['Poppins'] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stacking Hiring Cards cleanly for mobile */}
          <div className="w-full flex flex-col gap-6 mb-16 items-center">
            {[
              { label: "Card 1" },
              { label: "Card 2" },
              { label: "Card 3" }
            ].map((_, idx) => (
              <div key={idx} className="w-full max-w-[360px] h-[200px] bg-[#B7F9D2] rounded-[20px] relative overflow-hidden select-none hover:shadow-lg transition-shadow duration-300">
                <div className="absolute left-[24px] top-[24px] font-['Space_Grotesk'] font-bold text-[36px] text-[#030A22] leading-tight z-10">
                  We are<br/>Hiring
                </div>
                <img 
                  src={imgImage13} 
                  className="absolute pointer-events-none object-contain w-[260px] h-[260px] right-[-40px] top-[10px]"
                  alt="Hiring"
                />
                <div className="absolute left-[24px] bottom-[24px] font-['Manrope'] font-bold text-[15px] text-black z-10">
                  &gt;&gt;See Detail
                </div>
              </div>
            ))}
          </div>

          {/* Let's Talk container box fluid layout */}
          <div className="w-full bg-[#fcfcfc] rounded-[20px] p-8 shadow-xl border border-gray-100 flex flex-col gap-8 mb-12">
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
      </section>

      {/* 7. FAQS & FOOTER SECTION */}
      {/* Desktop Version */}
      <section 
        className="text-black w-full overflow-hidden relative hidden xl:block z-20"
        style={{ 
          height: `${1810 * scale}px`,
          marginBottom: `${-149 * scale}px`
        }}
      >
        <div 
          className="w-[1440px] h-[1810px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >
          {/* White Background for the top part (FAQs and hiring cards area) */}
          <div className="absolute left-0 top-0 w-full h-[1661px] bg-white -z-10" />
          {/* FAQs Container */}
          <div data-layer="div.container" className="absolute left-[186px] top-[132px] w-[1074px] flex flex-col items-center">
            <h2 className="font-serif font-semibold text-[44px] leading-[52.8px] text-[#112121] text-center mb-[48px]">
              FAQs
            </h2>
            <div className="w-[1050px] flex flex-col gap-[16px]">
              {[
                {
                  question: "Do you provide a Digital Marketing?",
                  answer: "Yes, we offer comprehensive digital marketing services including SEO, PPC, social media management, content strategy, and branding to help your business grow online."
                },
                {
                  question: "What kind of jobs will candidates get at the end of the program?",
                  answer: "Our candidates typically land roles as Digital Marketers, SEO Specialists, Content Strategists, Growth Managers, and Social Media Coordinators at leading tech startups and digital agencies."
                },
                {
                  question: "Why is this program in-person and not online?",
                  answer: "Our in-person format ensures high engagement, hands-on collaborative projects, direct mentorship from industry experts, and peer networking opportunities that are hard to replicate online."
                },
                {
                  question: "How do I apply for marketing team?",
                  answer: "You can apply directly through our careers portal by submitting your updated resume and portfolio. Our recruiting team will review your application and contact you for the next steps."
                }
              ].map((faq, index) => (
                <div key={index} className="w-[1050px] bg-[#D2F7E6] rounded-[15px] overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full h-[88px] flex items-center justify-between px-10 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-['Manrope'] font-semibold text-[20px] text-[#112121]">{faq.question}</span>
                    <div className="w-[20px] h-[20px] flex items-center justify-center">
                      <svg className={`w-5 h-5 text-[#112121] transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                    <p className="px-10 text-[16px] text-[#112121]/80 font-['Poppins'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Hiring Cards */}
          <HiringCard left="539.38px" top="828.65px" rotation="-5deg" />
          <HiringCard left="1px" top="714.83px" rotation="-10deg" imgSize={323} imgLeft="115px" imgTop="22px" linkLeft="58px" linkTop="175px" />
          <HiringCard left="-43.61px" top="971px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1063.39px" top="993px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1101px" top="575.80px" rotation="-6deg" imgSize={307} imgLeft="114px" imgTop="22px" linkLeft="46px" linkTop="175px" />

          {/* White Let's Talk Card container */}
          <div data-layer="Rectangle_4" className="absolute left-[137px] top-[1189px] w-[1168px] h-[560px] bg-white rounded-[21px] shadow-2xl z-10">
            <h3 className="absolute left-[99px] top-[107px] w-[526px] font-['Inter'] font-extrabold text-[56px] leading-[64px] text-[#1C0202] tracking-tight">
              Let’s Talk To Build <br/>Your Dream <br/>Project
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
            className="absolute left-[839px] top-[1322px] w-[484px] h-[484px] object-contain select-none pointer-events-none z-20" 
            alt="Dream Project illustration" 
          />
        </div>
      </section>
    </div>
  );
}
