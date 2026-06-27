import { useState, useEffect } from 'react';
import imgImage16 from '../assets/image16.png';
import imgImage13 from '../assets/image13.png';

import imgBell21 from '../assets/bell2.png';
import imgMaps from '../assets/maps.png';
import imgSocialMediaIcons from '../assets/social_media_icons.svg';
import imgGroup47453 from '../assets/copy.svg';
import imgArrowPaperplaneSvg from '../assets/arrow_paperplane.svg';
import imgVector85 from '../assets/support_icon.svg';
import imgVector86 from '../assets/phone_icon.svg';
import imgGroup30 from '../assets/email_icon.svg';
import imgDivRcAnchorLogoImg from '../assets/recaptcha_logo.png';
import imgCtaShape2 from '../assets/cta_shape2.svg';

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

interface ContactProps {
  setActiveTab: (tab: string) => void;
}

export default function Contact({ setActiveTab }: ContactProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _dummy = setActiveTab;
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaChecked) {
      alert('Please check the reCAPTCHA box.');
      return;
    }
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setCompanyName('');
      setEmail('');
      setMessage('');
      setRecaptchaChecked(false);
      setTermsAccepted(false);
      alert('Your message was sent successfully!');
    }, 1500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@uxstudioteam.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div className="text-black w-full min-h-screen font-['Inter']">
      {/* ───── DESKTOP VERSION (1440px Scaled) ───── */}
      <section 
        className="w-full overflow-hidden relative hidden xl:block z-20"
        style={{ 
          height: `${966 * scale}px`,
          background: '#112222'
        }}
      >
        <div 
          className="w-[1440px] h-[966px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >
          {/* Watermark "Contact US" */}
          <div 
            data-layer="Contact US" 
            className="ContactUs" 
            style={{
              position: 'absolute',
              left: -290,
              top: 34,
              width: 1127,
              height: 179,
              textAlign: 'center', 
              color: 'rgba(255, 255, 255, 0)', 
              fontSize: 189.10, 
              fontFamily: 'Poppins', 
              fontWeight: '500', 
              lineHeight: '187.21px', 
              wordWrap: 'break-word',
              WebkitTextStroke: '2.42px rgba(255, 255, 255, 0.5)',
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          >
            Contact US
          </div>

          {/* Floating Bell */}
          <img 
            data-layer="bell_2 1" 
            className="Bell21" 
            style={{
              width: 79.94, 
              height: 70.22, 
              left: 226.99, 
              top: 697, 
              position: 'absolute', 
              transform: 'rotate(16deg)', 
              transformOrigin: 'top left'
            }} 
            src={imgBell21} 
            alt="bell"
          />

          {/* Why Digiital Mafia ? Heading (placed at exact coordinates) */}
          <div 
            data-layer="Why Digiital Mafia ?" 
            className="WhyDigiitalMafia" 
            style={{
              width: 547.20, 
              left: 128, 
              top: 1501, 
              position: 'absolute'
            }}
          >
            <span style={{color: 'black', fontSize: 51.20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '64px', wordWrap: 'break-word'}}>Why</span>
            <span style={{color: '#E84B3E', fontSize: 51.20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '64px', wordWrap: 'break-word'}}> Digiital</span>
            <span style={{color: 'black', fontSize: 51.20, fontFamily: 'Poppins', fontWeight: '600', lineHeight: '64px', wordWrap: 'break-word'}}> Mafia ? </span>
          </div>

          {/* Empty Frame 8 */}
          <div 
            data-layer="Frame 8" 
            className="Frame8" 
            style={{
              width: 612.27, 
              height: 64, 
              left: 81, 
              top: 412, 
              position: 'absolute'
            }} 
          />

          {/* Desktop-12 White Card */}
          <div 
            data-layer="Desktop - 12" 
            className="Desktop12" 
            style={{
              width: 1048, 
              height: 657, 
              left: 196, 
              top: 203, 
              position: 'absolute', 
              background: 'white', 
              overflow: 'hidden', 
              outline: '1.05px rgba(4.96, 4.96, 4.96, 0) solid', 
              outlineOffset: '-0.52px'
            }}
          >
            {/* Background elements */}
            <div 
              data-layer="background" 
              className="Background" 
              style={{
                width: 641.73, 
                height: 913.91, 
                left: -127.72, 
                top: -150.75, 
                position: 'absolute', 
                background: 'white', 
                boxShadow: '0px 4.2731709480285645px 4.2731709480285645px rgba(0, 0, 0, 0.25)'
              }} 
            />
            <div 
              data-layer="Rectangle 13" 
              className="Rectangle13" 
              style={{
                width: 112.24, 
                height: 5.02, 
                left: 48.28, 
                top: 89.80, 
                position: 'absolute', 
                background: 'rgba(0.23, 0.23, 0.23, 0)'
              }} 
            />
            <div 
              data-layer="Ellipse 1" 
              className="Ellipse1" 
              style={{
                width: 128.41, 
                height: 112.92, 
                left: 1000.11, 
                top: 629.30, 
                position: 'absolute', 
                background: 'rgba(0.23, 0.23, 0.23, 0)', 
                borderRadius: 9999
              }} 
            />
            <div 
              data-layer="Ellipse 2" 
              className="Ellipse2" 
              style={{
                width: 66.45, 
                height: 56.04, 
                left: 998.32, 
                top: 600.87, 
                position: 'absolute', 
                background: 'rgba(0.23, 0.23, 0.23, 0)', 
                borderRadius: 9999
              }} 
            />

            {/* Introduction Text */}
            <div 
              data-layer="Introduction" 
              className="Introduction" 
              style={{
                width: 435.50, 
                left: 571.54, 
                top: 55.55, 
                position: 'absolute'
              }}
            >
              <span style={{color: 'black', fontSize: 12.82, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Ready </span>
              <span style={{color: 'black', fontSize: 12.82, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>to launch your brand into the digital stratosphere? Reach out to us, and let's embark on this cosmic journey together.</span>
            </div>

            {/* Describtion - Location Map */}
            <div 
              data-layer="Describtion" 
              className="Describtion" 
              style={{
                left: 571.54, 
                top: 103.63, 
                position: 'absolute', 
                flexDirection: 'column', 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', 
                gap: 22.43, 
                display: 'inline-flex'
              }}
            >
              <div 
                data-layer="Location" 
                className="Location" 
                style={{
                  width: 435.86, 
                  height: 220.07, 
                  position: 'relative', 
                  borderRadius: 10.47,
                  overflow: 'hidden'
                }}
              >
                <img 
                  data-layer="Maps" 
                  className="Maps" 
                  style={{
                    width: 435.86, 
                    height: 220.07, 
                    left: -0.05, 
                    top: -0.42, 
                    position: 'absolute'
                  }} 
                  src={imgMaps} 
                  alt="map"
                />
                <div 
                  data-layer="Text" 
                  className="Text" 
                  style={{
                    width: 118.30, 
                    height: 65.95, 
                    left: 305.68, 
                    top: 10.47, 
                    position: 'absolute', 
                    background: 'white', 
                    boxShadow: '0px 0px 4.18746280670166px rgba(0, 0, 0, 0.25)', 
                    overflow: 'hidden', 
                    borderRadius: 10.47
                  }}
                >
                  <div data-layer="DigitalMafia" className="Digitalmafia" style={{left: 7.33, top: 4.19, position: 'absolute', color: 'black', fontSize: 12.56, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>DigitalMafia</div>
                  <div data-layer="Dlf Pahse 2 City" className="DlfPahse2City" style={{left: 8.38, top: 25.13, position: 'absolute', color: 'black', fontSize: 11.52, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Dlf Pahse 2 City</div>
                  <div data-layer="NY 122005" className="Ny122005" style={{left: 8.38, top: 42.92, position: 'absolute', color: 'black', fontSize: 11.52, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>NY 122005</div>
                </div>
              </div>
            </div>

            {/* Frame 1000001261 - Reach us faster / Coffee */}
            <div 
              data-layer="Frame 1000001261" 
              className="Frame1000001261" 
              style={{
                left: 571.54, 
                top: 352.54, 
                position: 'absolute', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'flex-start', 
                gap: 11.75, 
                display: 'inline-flex'
              }}
            >
              <div data-layer="Frame 1000001366" className="Frame1000001366" style={{justifyContent: 'center', alignItems: 'flex-end', display: 'inline-flex'}}>
                <div 
                  data-layer="Drop us a line hello@uxstudioteam.com" 
                  className="DropUsALineHelloUxstudioteamCom" 
                  style={{width: 227.38, height: 53.41, justifyContent: 'center', display: 'flex', flexDirection: 'column'}}
                >
                  <span style={{color: '#112222', fontSize: 17.09, fontFamily: 'Inter', fontWeight: '700', lineHeight: '34.19px', wordWrap: 'break-word'}}>Drop us a line<br/></span>
                  <button 
                    type="button"
                    onClick={handleCopyEmail}
                    style={{color: '#112222', fontSize: 17.09, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', lineHeight: '34.19px', wordWrap: 'break-word', textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}
                  >
                    hello@uxstudioteam.com
                  </button>
                </div>
                <button 
                  type="button"
                  onClick={handleCopyEmail}
                  data-layer="Link → copy.svg" 
                  className="LinkCopySvg" 
                  style={{width: 25.64, height: 25.64, position: 'relative', opacity: 0.60, overflow: 'hidden', background: 'none', border: 'none', cursor: 'pointer'}}
                >
                  <div data-layer="copy.svg fill" className="CopySvgFill" style={{width: 17.26, height: 17.26, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                    <div data-layer="copy.svg" className="CopySvg" style={{width: 17.26, height: 17.26, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                      <div data-layer="Vector" className="Vector" style={{width: 10.79, height: 10.79, left: 5.75, top: 5.75, position: 'absolute', background: '#51BE8C'}} />
                      <div data-layer="Vector" className="Vector" style={{width: 10.79, height: 10.79, left: 0.72, top: 0.72, position: 'absolute', background: '#51BE8C'}} />
                    </div>
                  </div>
                </button>
              </div>

              <div data-layer="Frame 1000001367" className="Frame1000001367" style={{justifyContent: 'center', alignItems: 'flex-start', gap: 8.55, display: 'inline-flex'}}>
                <div data-layer="Reach us faster Schedule a call" className="ReachUsFasterScheduleACall" style={{width: 148.86, height: 53.41, justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                  <span style={{color: '#112222', fontSize: 17.09, fontFamily: 'Inter', fontWeight: '700', lineHeight: '34.19px', wordWrap: 'break-word'}}>Reach us faster<br/></span>
                  <a href="#call" style={{color: '#112222', fontSize: 17.09, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', lineHeight: '34.19px', wordWrap: 'break-word'}}>Schedule a call</a>
                </div>
              </div>

              <div data-layer="Meet up for a coffee" className="MeetUpForACoffee" style={{width: 194.76, height: 34.19, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#112222', fontSize: 19.23, fontFamily: 'Inter', fontWeight: '700', lineHeight: '34.19px', wordWrap: 'break-word'}}>Meet up for a coffee</div>
              <div data-layer="Frame 835" className="Frame835" style={{width: 252.29, justifyContent: 'flex-start', alignItems: 'center', gap: 15.70, display: 'inline-flex'}}>
                <div data-layer="Frame 833" className="Frame833" style={{width: 29.31, height: 29.31, position: 'relative'}}>
                  {/* Subtle Premium Coffee Icon */}
                  <svg className="w-full h-full text-[#112222]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div 
              data-layer="Social Media Icons" 
              className="SocialMediaIcons" 
              style={{
                left: 856.77, 
                top: 537.35, 
                position: 'absolute', 
                justifyContent: 'flex-start', 
                alignItems: 'center', 
                gap: 16.02, 
                display: 'inline-flex'
              }}
            >
              <a href="#instagram" aria-label="Instagram" style={{width: 24.23, height: 24.23, display: 'block'}}>
                <svg className="w-full h-full text-black hover:text-[#E84B3E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter" style={{width: 27.03, height: 21.97, display: 'block'}}>
                <svg className="w-full h-full text-black hover:text-[#E84B3E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#facebook" aria-label="Facebook" style={{width: 25.84, height: 25.78, display: 'block'}}>
                <svg className="w-full h-full text-black hover:text-[#E84B3E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#youtube" aria-label="YouTube" style={{width: 25.84, height: 18.09, display: 'block'}}>
                <svg className="w-full h-full text-black hover:text-[#E84B3E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.51 9.388.51 9.388.51s7.505 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Form Block */}
            <form 
              onSubmit={handleSubmit}
              data-layer="div.form-block" 
              className="DivFormBlock" 
              style={{
                width: 456.16, 
                height: 521.33, 
                left: 36.32, 
                top: 56.62, 
                position: 'absolute', 
                background: 'white'
              }}
            >
              {/* Full name input */}
              <div 
                data-layer="Form - Contact form → Label → Full name*" 
                className="FormContactFormLabelFullName" 
                style={{
                  width: 68.25, 
                  height: 14.15, 
                  left: 33.01, 
                  top: 38.44, 
                  position: 'absolute', 
                  justifyContent: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  color: 'black', 
                  fontSize: 13.59, 
                  fontFamily: 'Inter', 
                  fontWeight: '400', 
                  lineHeight: '19.81px', 
                  wordWrap: 'break-word',
                  whiteSpace: 'nowrap'
                }}
              >
                Full name*
              </div>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Raine Avery"
                style={{
                  width: 260.26,
                  height: 29.87,
                  left: 162.89,
                  top: 33.01,
                  position: 'absolute',
                  border: 'none',
                  borderBottom: '1.57px black solid',
                  outline: 'none',
                  fontSize: 12,
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  background: 'transparent',
                  padding: '0 8px',
                }}
              />

              {/* Flex Container for other inputs */}
              <div 
                data-layer="Frame 1000001365" 
                className="Frame 1000001365" 
                style={{
                  width: 390.34, 
                  left: 33.01, 
                  top: 100.60, 
                  position: 'absolute', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: 20.30, 
                  display: 'inline-flex', 
                  flexWrap: 'wrap', 
                  alignContent: 'flex-start'
                }}
              >
                {/* Company Name */}
                <div 
                  data-layer="Form - Contact form → Label → Company name*" 
                  className="FormContactFormLabelCompanyName" 
                  style={{
                    width: 109.22, 
                    height: 14.15, 
                    justifyContent: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    color: 'black', 
                    fontSize: 13.82, 
                    fontFamily: 'Inter', 
                    fontWeight: '400', 
                    lineHeight: '19.81px', 
                    wordWrap: 'break-word',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Company name*
                </div>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Avery & Avery"
                  style={{
                    width: 260.26,
                    height: 29.87,
                    border: 'none',
                    borderBottom: '1.57px black solid',
                    outline: 'none',
                    fontSize: 12,
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    background: 'transparent',
                    padding: '0 8px',
                  }}
                />

                {/* Inner flex block for Email and Message */}
                <div 
                  data-layer="Frame 1000001364" 
                  className="Frame 1000001364" 
                  style={{
                    width: 390.34, 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start', 
                    gap: 51.28, 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    alignContent: 'flex-start'
                  }}
                >
                  {/* Email */}
                  <div 
                    data-layer="Form - Contact form → Label → Work email*" 
                    className="FormContactFormLabelWorkEmail" 
                    style={{
                      width: 78.30, 
                      height: 14.15, 
                      justifyContent: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      color: 'black', 
                      fontSize: 13.70, 
                      fontFamily: 'Inter', 
                      fontWeight: '400', 
                      lineHeight: '19.81px', 
                      wordWrap: 'break-word',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Work email*
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. raine.avery@averycom.io"
                    style={{
                      width: 260.26,
                      height: 29.87,
                      border: 'none',
                      borderBottom: '1.57px black solid',
                      outline: 'none',
                      fontSize: 12,
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      background: 'transparent',
                      padding: '0 8px',
                    }}
                  />

                  {/* Message */}
                  <div 
                    data-layer="Frame 1000001363" 
                    className="Frame 1000001363" 
                    style={{
                      justifyContent: 'flex-start', 
                      alignItems: 'center', 
                      gap: 65.17, 
                      display: 'flex'
                    }}
                  >
                    <div 
                      data-layer="Form - Contact form → Label → Message*" 
                      className="FormContactFormLabelMessage" 
                      style={{
                        width: 64.51, 
                        height: 14.15, 
                        justifyContent: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        color: 'black', 
                        fontSize: 13.48, 
                        fontFamily: 'Inter', 
                        fontWeight: '400', 
                        lineHeight: '19.81px', 
                        wordWrap: 'break-word',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Message*
                    </div>
                    <div data-layer="Form - Contact form" className="FormContactForm" style={{width: 260.66, height: 38.46, position: 'relative', overflow: 'hidden'}}>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly describe your project goals..."
                        style={{
                          width: 260.26,
                          height: 33.01,
                          left: 0,
                          top: 6.29,
                          position: 'absolute',
                          border: 'none',
                          borderBottom: '1.57px black solid',
                          outline: 'none',
                          fontSize: 12,
                          fontFamily: 'Inter',
                          fontWeight: 400,
                          background: 'transparent',
                          padding: '0 8px',
                          resize: 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* reCAPTCHA check container */}
              <div 
                data-layer="Form - Contact form" 
                className="FormContactForm" 
                style={{
                  left: 33.01, 
                  top: 312.81, 
                  position: 'absolute', 
                  overflow: 'hidden', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: 8.55, 
                  display: 'inline-flex'
                }}
              >
                <div 
                  data-layer="Body" 
                  className="Body" 
                  style={{
                    width: 237.36, 
                    height: 59.73, 
                    position: 'relative', 
                    background: '#F9F9F9', 
                    boxShadow: '0px 0px 3.1437931060791016px 0.7859482765197754px rgba(0, 0, 0, 0.08)', 
                    overflow: 'hidden', 
                    borderRadius: 2.36, 
                    outline: '0.79px #D3D3D3 solid', 
                    outlineOffset: '-0.79px'
                  }}
                >
                  <div 
                    onClick={() => setRecaptchaChecked(!recaptchaChecked)}
                    data-layer="Checkbox" 
                    className="Checkbox cursor-pointer" 
                    style={{
                      width: 22.01, 
                      height: 22.01, 
                      left: 10.22, 
                      top: 17.68, 
                      position: 'absolute', 
                      background: 'white', 
                      borderRadius: 1.57, 
                      border: '1.57px #C1C1C1 solid',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {recaptchaChecked && (
                      <svg className="w-[16px] h-[16px] text-[#00b45a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <div 
                    onClick={() => setRecaptchaChecked(!recaptchaChecked)}
                    data-layer="I'm not a robot" 
                    className="IMNotARobot cursor-pointer select-none" 
                    style={{
                      width: 70.76, 
                      height: 12.58, 
                      left: 41.66, 
                      top: 23.18, 
                      position: 'absolute', 
                      justifyContent: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      color: 'black', 
                      fontSize: 11, 
                      fontFamily: 'Roboto', 
                      fontWeight: '400', 
                      lineHeight: '13.36px', 
                      wordWrap: 'break-word'
                    }}
                  >
                    I'm not a robot
                  </div>
                  <img data-layer="div.rc-anchor-logo-img" className="DivRcAnchorLogoImg" style={{width: 25.15, height: 25.15, left: 193.34, top: 8.64, position: 'absolute'}} src={imgDivRcAnchorLogoImg} alt="" />
                  <div data-layer="reCAPTCHA" className="Recaptcha" style={{width: 42.74, height: 7.86, left: 184.68, top: 37.73, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#555555', fontSize: 7.86, fontFamily: 'Roboto', fontWeight: '400', lineHeight: '7.86px', wordWrap: 'break-word'}}>reCAPTCHA</div>
                  <div data-layer="div.rc-anchor-pt" className="DivRcAnchorPt" style={{width: 218.49, height: 7.07, left: 11.79, top: 47.16, position: 'absolute'}}>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" data-layer="Link → Privacy" className="LinkPrivacy hover:underline" style={{width: 20.59, height: 7.07, left: 171.75, top: 0, position: 'absolute', textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#555555', fontSize: 6.29, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Privacy</a>
                    <div style={{width: 5.11, height: 7.07, left: 192.84, top: 0, position: 'absolute', textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 6.29, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}> - </div>
                    <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" data-layer="Link → Terms" className="LinkTerms hover:underline" style={{width: 17.92, height: 7.07, left: 198.48, top: 0, position: 'absolute', textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#555555', fontSize: 6.29, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Terms</a>
                  </div>
                </div>
              </div>

              {/* Accept terms & Submit */}
              <div 
                data-layer="Frame 1000001362" 
                className="Frame 1000001362" 
                style={{
                  left: 35.25, 
                  top: 403.98, 
                  position: 'absolute', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-start', 
                  alignItems: 'flex-start', 
                  gap: 30.98, 
                  display: 'inline-flex'
                }}
              >
                <div 
                  onClick={() => setTermsAccepted(!termsAccepted)}
                  data-layer="Frame 1000001361" 
                  className="Frame 1000001361 cursor-pointer select-none" 
                  style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 7.48, display: 'inline-flex'}}
                >
                  <div 
                    data-layer="Form - Contact form → Label → Input" 
                    className="FormContactFormLabelInput" 
                    style={{
                      width: 9.61, 
                      height: 9.61, 
                      background: 'white', 
                      borderRadius: 1.96, 
                      border: '0.79px #767676 solid',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {termsAccepted && (
                      <div style={{ width: 4.8, height: 4.8, background: '#0B8447', borderRadius: 0.5 }} />
                    )}
                  </div>
                  <div 
                    data-layer="Form - Contact form → Label → I hereby accept all" 
                    className="FormContactFormLabelIHerebyAcceptAll" 
                    style={{width: 208.87, height: 11, justifyContent: 'center', display: 'flex', flexDirection: 'column'}}
                  >
                    <span style={{color: 'black', fontSize: 10.75, fontFamily: 'Inter', fontWeight: '400', lineHeight: '19.81px', wordWrap: 'break-word'}}>
                      I hereby accept all <span style={{color: '#0B8447', textDecoration: 'underline'}}>terms and conditions*</span>
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  data-layer="Form - Contact form → Input"
                  className="FormContactFormInput hover:bg-[#36ed81] hover:text-black transition-all duration-300"
                  style={{
                    width: 349.33, 
                    height: 42.73, 
                    position: 'relative', 
                    outline: '1.57px black solid', 
                    outlineOffset: '-1.57px',
                    background: submitted ? '#e5e5e5' : 'white',
                    color: 'black',
                    cursor: submitted ? 'not-allowed' : 'pointer',
                    border: 'none',
                  }}
                >
                  <span 
                    data-layer="Send message" 
                    className="SendMessage" 
                    style={{
                      width: 103.72, 
                      height: 14.15, 
                      left: 122.85, 
                      top: 13.41, 
                      position: 'absolute', 
                      textAlign: 'center', 
                      justifyContent: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      color: 'inherit', 
                      fontSize: 14.15, 
                      fontFamily: 'Inter', 
                      fontWeight: '700', 
                      lineHeight: '19.81px', 
                      wordWrap: 'break-word'
                    }}
                  >
                    {submitted ? 'Sending...' : 'Send message'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Sibling Decorator Paperplane Wrapper */}
      <div 
        className="w-full absolute hidden xl:block z-25 pointer-events-none"
        style={{ 
          height: 0,
          top: 0
        }}
      >
        <div 
          className="w-[1440px] h-[966px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >
          <img
            src={imgArrowPaperplaneSvg}
            style={{
              position: 'absolute',
              left: 503,
              top: 618,
              width: 619.2,
              height: 744.7,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            alt="decor"
          />
        </div>
      </div>

      {/* ───── MOBILE/TABLET VERSION (Responsive Stack) ───── */}
      <section className="bg-[#112222] text-white py-16 px-6 md:px-12 xl:hidden relative flex flex-col items-center">
        {/* Mobile Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
          <span className="font-['Poppins'] font-bold text-[14vw] text-white leading-none whitespace-nowrap">Contact US</span>
        </div>

        <div className="max-w-[600px] w-full bg-white text-black p-6 md:p-10 rounded-[20px] shadow-2xl relative z-10 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Space_Grotesk'] font-bold text-[28px] text-[#030a22]">Drop us a message</h2>
            <p className="font-['Inter'] text-[13px] text-gray-500 leading-relaxed">
              Ready to launch your brand into the digital stratosphere? Reach out to us, and let's embark on this cosmic journey together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-black/70">Full name*</label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Raine Avery"
                className="border-b border-black/30 focus:border-[#E84B3E] outline-none py-2 text-[15px] bg-transparent transition-colors"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-black/70">Company name*</label>
              <input 
                type="text" 
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Avery & Avery"
                className="border-b border-black/30 focus:border-[#E84B3E] outline-none py-2 text-[15px] bg-transparent transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-black/70">Work email*</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. raine.avery@averycom.io"
                className="border-b border-black/30 focus:border-[#E84B3E] outline-none py-2 text-[15px] bg-transparent transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-black/70">Message*</label>
              <textarea 
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your project goals..."
                className="border-b border-black/30 focus:border-[#E84B3E] outline-none py-2 text-[15px] bg-transparent resize-none transition-colors"
              />
            </div>

            {/* reCAPTCHA Mobile */}
            <div 
              onClick={() => setRecaptchaChecked(!recaptchaChecked)}
              className="bg-[#f9f9f9] border border-gray-300 p-4 rounded-[6px] shadow-sm flex items-center justify-between w-full max-w-[280px] cursor-pointer select-none"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-6 h-6 border-2 border-gray-400 rounded-[3px] flex items-center justify-center bg-white"
                >
                  {recaptchaChecked && (
                    <svg className="w-[18px] h-[18px] text-[#00b45a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <span className="font-['Roboto'] font-normal text-[14px] text-gray-700">
                  I'm not a robot
                </span>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <img src={imgDivRcAnchorLogoImg} className="w-[26px] h-[26px]" alt="" />
                <span className="text-[7px] text-gray-500 font-['Roboto']">reCAPTCHA</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div 
              onClick={() => setTermsAccepted(!termsAccepted)}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div 
                className="w-4 h-4 border-2 border-gray-400 rounded-[2px] flex items-center justify-center bg-white"
              >
                {termsAccepted && (
                  <div className="w-2.5 h-2.5 bg-[#0b8447]" />
                )}
              </div>
              <span className="text-[12px] text-black/70">
                I hereby accept all <span className="text-[#0b8447] underline">terms and conditions*</span>
              </span>
            </div>

            {/* Submit Button Mobile */}
            <button 
              type="submit"
              disabled={submitted}
              className="bg-black hover:bg-[#36ed81] text-white hover:text-black font-bold text-[15px] py-3.5 rounded-[10px] shadow-md border border-black transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              {submitted ? 'Sending...' : 'Send message'}
            </button>
          </form>

          <hr className="border-black/5" />

          {/* Quick Contact & Map for Mobile */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-[15px] overflow-hidden shadow-md h-[180px] border border-gray-100">
              <img src={imgMaps} className="w-full h-full object-cover" alt="Map" />
              <div className="absolute top-3 right-3 bg-white/95 text-black p-3 rounded-[8px] shadow-md max-w-[130px] font-['Poppins']">
                <p className="font-bold text-[11px] text-[#122]">DigitalMafia</p>
                <p className="text-[9px] text-gray-500 mt-0.5">Dlf Phase 2, NY 122005</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-[#112222]">
              <div className="flex flex-col">
                <span className="font-bold text-[15px]">Drop us a line</span>
                <button 
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-left font-semibold text-[15px] text-[#0b8447] hover:underline flex items-center gap-1.5"
                >
                  hello@uxstudioteam.com
                  <img src={imgGroup47453} className="w-3.5 h-3.5 opacity-60" alt="" />
                </button>
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-[15px]">Reach us faster</span>
                <a href="#call" className="font-semibold text-[15px] text-[#0b8447] hover:underline">Schedule a call</a>
              </div>

              {/* Social Media Link Icons */}
              <div className="flex gap-4 items-center mt-2">
                <span className="text-[13px] text-gray-400 font-medium">Follow us:</span>
                <img src={imgSocialMediaIcons} className="h-[22px] opacity-80" alt="socials" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQS, HIRING & FOOTER SECTION */}
      {/* Desktop Version */}
      <section 
        className="text-black w-full overflow-hidden relative hidden xl:block z-20"
        style={{ 
          height: `${1355 * scale}px`,
          marginBottom: `${-140 * scale}px`
        }}
      >
        <div 
          className="w-[1440px] h-[1355px] absolute origin-top"
          style={{ 
            transform: `scale(${scale})`, 
            transformOrigin: 'top center', 
            left: 'calc(50% - 720px)' 
          }}
        >
          {/* White Background for the top part */}
          <div className="absolute left-0 top-0 w-full h-[1215px] bg-white -z-10" />

          {/* Hiring Cards */}
          <HiringCard left="539.38px" top="371.65px" rotation="-5deg" />
          <HiringCard left="1px" top="257.83px" rotation="-10deg" imgSize={323} imgLeft="115px" imgTop="22px" linkLeft="58px" linkTop="175px" />
          <HiringCard left="-43.61px" top="514px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1063.39px" top="536px" rotation="9deg" imgSize={321} imgLeft="98px" imgTop="41px" linkLeft="28px" linkTop="175px" />
          <HiringCard left="1101px" top="118.80px" rotation="-6deg" imgSize={307} imgLeft="114px" imgTop="22px" linkLeft="46px" linkTop="175px" />

          {/* White Let's Talk Card container */}
          <div data-layer="Rectangle_4" className="absolute left-[137px] top-[732px] w-[1168px] h-[560px] bg-white rounded-[21px] shadow-2xl z-10">
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
            className="absolute left-[839px] top-[865px] w-[484px] h-[484px] object-contain select-none pointer-events-none z-20" 
            alt="Dream Project illustration" 
          />
        </div>
      </section>

      {/* Mobile/Tablet Version */}
      <section className="bg-white text-[#112121] py-16 px-6 md:px-16 w-full flex flex-col items-center xl:hidden border-t border-black/5">
        <div className="max-w-[800px] w-full flex flex-col items-center">
          {/* Stacking Hiring Cards cleanly for mobile */}
          <div className="w-full flex flex-col gap-6 mb-16 items-center">
            {[1, 2, 3].map((_, idx) => (
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
    </div>
  );
}
