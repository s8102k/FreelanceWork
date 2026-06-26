import { useState } from 'react';

// Images from Figma assets
const imgBell21 = "http://localhost:9013/assets/720a43ec4674546f1db0c24bd21cde7c303ab68a.png";
const imgMaps = "http://localhost:9013/assets/3f967bc1ca6c86f1ac0142027f8bba9e9df43673.png";
const imgSocialMediaIcons = "http://localhost:9013/assets/1555e0890d3d24d5b5d7101714065c12cc08a7fe.svg";
const imgGroup47453 = "http://localhost:9013/assets/9bac4e2c4f972437d035c953792081f3b6d74b06.svg"; // copy icon
const imgArrowPaperplaneSvg = "http://localhost:9013/assets/66fbfa328ba9aef16d1bad4bb504e8e8a2e6816e.svg";

// Support badges assets
const imgVector85 = "http://localhost:9013/assets/8f6b3508a0ed8b0233d7ecb282d86f0857265606.svg"; // support icon
const imgVector86 = "http://localhost:9013/assets/2500c768a43afc22d352ca85535dcdbeea770224.svg"; // phone icon
const imgGroup30 = "http://localhost:9013/assets/d004b112049204d4931ca711a82f69f2b93ce3c8.svg"; // email icon

// ReCaptcha assets
const imgDivRcAnchorLogoImg = "http://localhost:9013/assets/4736508c795667dcea21f8d864233031223b7832.png";

// CTA Assets
const imgBlock1 = "http://localhost:9013/assets/243ec4a83f307637b2ba499776ddfc581bffa7bf.svg";
const imgStar1 = "http://localhost:9013/assets/7b85d8947c9f0d7b0f88f2f40f0cc3bf55c24ff2.svg";

interface ContactProps {
  setActiveTab: (tab: string) => void;
}

export default function Contact({ setActiveTab }: ContactProps) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    <div className="bg-[#fcfefb] text-black w-full min-h-screen relative font-['Inter'] pb-20">
      {/* 1. DARK HERO BANNER */}
      <section className="bg-[#122] text-white pt-24 pb-48 px-6 md:px-16 relative flex flex-col items-center justify-center overflow-hidden min-h-[420px]">
        {/* Giant curved text background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="font-['Poppins'] font-bold text-[16vw] text-white">Contact US</span>
        </div>

        {/* Floating Bell */}
        <div className="absolute left-[14%] bottom-[15%] animate-float select-none pointer-events-none">
          <img src={imgBell21} className="w-[80px] h-[70px] transform rotate-[15deg]" alt="bell" />
        </div>

        <h1 className="font-['Poppins'] font-medium text-[44px] md:text-[64px] text-white leading-tight tracking-tight relative z-10 text-center">
          Let’s Talk To Build <span className="text-[#36ed81] block md:inline">Your Dream Project</span>
        </h1>
        <p className="font-['Epilogue'] text-white/70 max-w-xl text-[16px] leading-relaxed text-center mt-6 relative z-10">
          A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
        </p>

        {/* 3 Support Badges */}
        <div className="absolute bottom-[-60px] left-6 right-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-20">
          {/* Badge 1: Support */}
          <div className="bg-[#c7fadc] text-black p-5 rounded-[15px] flex items-center gap-4 shadow-lg border border-[#c7fadc]/40 hover:scale-103 transition-transform duration-300">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0">
              <img src={imgVector85} className="w-[24px] h-[24px]" alt="Support" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Poppins'] font-semibold text-[18px]">Support</span>
              <span className="font-['Nunito'] text-[14px] text-[#565756]">24*7 Live support</span>
            </div>
          </div>

          {/* Badge 2: Call Us */}
          <div className="bg-[#c7fadc] text-black p-5 rounded-[15px] flex items-center gap-4 shadow-lg border border-[#c7fadc]/40 hover:scale-103 transition-transform duration-300">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0">
              <img src={imgVector86} className="w-[20px] h-[24px]" alt="Call" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Poppins'] font-semibold text-[18px]">Call Us</span>
              <span className="font-['Nunito'] text-[14px] text-[#565756] font-medium">+91 000 000 0000</span>
            </div>
          </div>

          {/* Badge 3: Email Us */}
          <div className="bg-[#c7fadc] text-black p-5 rounded-[15px] flex items-center gap-4 shadow-lg border border-[#c7fadc]/40 hover:scale-103 transition-transform duration-300">
            <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shrink-0">
              <img src={imgGroup30} className="w-[24px] h-[20px]" alt="Email" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Poppins'] font-semibold text-[18px]">Email Us</span>
              <span className="font-['Nunito'] text-[14px] text-[#565756]">supportmafia@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to handle badge layout offset */}
      <div className="h-20" />

      {/* 2. FORM & MAP WRAPPER */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-white border border-[#c8eedd]/30 rounded-[26px] shadow-2xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 overflow-hidden">
        {/* Background Paperplane Decor */}
        <div className="absolute right-[-40px] top-[10%] opacity-[0.04] pointer-events-none select-none">
          <img src={imgArrowPaperplaneSvg} className="w-[450px]" alt="" />
        </div>

        {/* Left Column: Form */}
        <div className="flex flex-col gap-8 relative z-10">
          <h2 className="font-['Space_Grotesk'] font-bold text-[32px] text-[#030a22]">
            Drop us a message
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black/70">Full name*</label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Raine Avery"
                className="border-b-2 border-black/30 focus:border-[#36ed81] outline-none py-2 text-[16px] bg-transparent transition-colors"
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black/70">Company name*</label>
              <input 
                type="text" 
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Avery & Avery"
                className="border-b-2 border-black/30 focus:border-[#36ed81] outline-none py-2 text-[16px] bg-transparent transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black/70">Work email*</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. raine.avery@averycom.io"
                className="border-b-2 border-black/30 focus:border-[#36ed81] outline-none py-2 text-[16px] bg-transparent transition-colors"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-semibold text-black/70">Message*</label>
              <textarea 
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your project goals..."
                className="border-b-2 border-black/30 focus:border-[#36ed81] outline-none py-2 text-[16px] bg-transparent resize-none transition-colors"
              />
            </div>

            {/* ReCaptcha Widget Simulation */}
            <div className="bg-[#f9f9f9] border border-gray-300 p-4 rounded-[6px] shadow-sm flex items-center justify-between w-full max-w-[280px] mt-2">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  checked={recaptchaChecked}
                  onChange={(e) => setRecaptchaChecked(e.target.checked)}
                  className="w-6 h-6 border-2 border-gray-400 rounded-[3px] focus:ring-0 text-[#36ed81] cursor-pointer"
                />
                <span className="font-['Roboto'] font-normal text-[14px] text-gray-700 select-none">
                  I'm not a robot
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 select-none">
                <img src={imgDivRcAnchorLogoImg} className="w-[30px] h-[30px]" alt="" />
                <span className="text-[8px] text-gray-500 font-['Roboto']">reCAPTCHA</span>
                <div className="flex gap-1 text-[7px] text-gray-500 font-['Roboto']">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:underline">Privacy</a>
                  <span>-</span>
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="hover:underline">Terms</a>
                </div>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="flex items-center gap-2 mt-2">
              <input 
                type="checkbox"
                required
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 border-2 border-gray-400 rounded-[2px] cursor-pointer"
              />
              <label htmlFor="terms" className="text-[13px] text-black/70 select-none cursor-pointer">
                I hereby accept all <span className="text-[#0b8447] underline">terms and conditions*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={submitted}
              className="bg-black hover:bg-[#36ed81] text-white hover:text-[#122] font-bold text-[16px] py-4 rounded-[10px] shadow-md border-2 border-black transition-all duration-300 mt-4 cursor-pointer flex items-center justify-center gap-2"
            >
              {submitted ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <span>Send message</span>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Location Map & Fast Contact */}
        <div className="flex flex-col justify-between gap-10 relative z-10">
          {/* Interactive Map Overlay Showcase */}
          <div className="relative rounded-[20px] overflow-hidden shadow-xl h-[260px] md:h-[300px] border border-gray-100">
            <img src={imgMaps} className="w-full h-full object-cover" alt="Map Location" />
            <div className="absolute top-4 right-4 bg-white/95 text-black p-4 rounded-[12px] shadow-lg border border-gray-100 backdrop-blur-md max-w-[160px] font-['Poppins']">
              <p className="font-bold text-[13px] text-[#122]">DigitalMafia</p>
              <p className="text-[11px] text-gray-500 mt-1">Dlf Phase 2 City,</p>
              <p className="text-[11px] text-gray-500">NY 122005</p>
            </div>
          </div>

          {/* Fast Contact Options */}
          <div className="flex flex-col gap-6 text-[#122] pl-2">
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[17px]">Drop us a line</span>
                <button 
                  onClick={handleCopyEmail}
                  className="text-left font-semibold text-[17px] text-[#0b8447] hover:underline flex items-center gap-2 group cursor-pointer"
                >
                  hello@uxstudioteam.com
                  <img src={imgGroup47453} className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" alt="copy" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[17px]">Reach us faster</span>
                <a href="#call" className="font-semibold text-[17px] text-[#0b8447] hover:underline">
                  Schedule a call
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-[17px]">Meet up for a coffee</span>
                <p className="text-[15px] text-gray-500 mt-1">Visit our Leeds headquarters any weekday between 9 AM and 6 PM.</p>
              </div>
            </div>

            {/* Social Media Link Icons */}
            <div className="flex gap-4 items-center mt-4">
              <span className="text-[14px] text-gray-400 font-medium">Follow us:</span>
              <img src={imgSocialMediaIcons} className="h-[25px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer" alt="socials" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA & FOOTER WRAPPER */}
      <section className="py-24 px-6 md:px-16 bg-[#122] text-white text-center relative overflow-hidden w-full mt-24 rounded-t-[40px]">
        {/* Floating shapes */}
        <img src={imgStar1} className="absolute right-[12%] top-[8%] w-[100px] opacity-15 rotate-12" alt="" />
        <img src={imgBlock1} className="absolute left-[15%] bottom-[8%] w-[120px] opacity-10" alt="" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6">
          <span className="bg-[#36ed81]/25 text-[#36ed81] uppercase font-semibold text-[14px] tracking-[2px] px-4 py-1.5 rounded-full">
            Ready to deploy?
          </span>
          <h2 className="font-['Epilogue'] font-extrabold text-[36px] md:text-[56px] leading-tight tracking-tight mt-2">
            Help To Build Your Dream Project
          </h2>
          <p className="font-['Epilogue'] text-white/70 max-w-xl text-[16px] leading-relaxed">
            A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
          </p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="mt-8 bg-[#e84b3e] hover:bg-[#d83c2f] text-white font-semibold text-[15px] py-4 px-10 rounded-[6px] transition-all duration-300 shadow-[0_3px_9px_rgba(57,20,0,0.1)] hover:scale-105 cursor-pointer"
          >
            Contact Now
          </button>
        </div>
      </section>
    </div>
  );
}
