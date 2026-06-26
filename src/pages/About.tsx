
const imgBell21 = "http://localhost:9013/assets/720a43ec4674546f1db0c24bd21cde7c303ab68a.png";
const imgGroup2271 = "http://localhost:9013/assets/ee55d156b6c8ac74dea7d57096d0c0247e77592e.svg"; // line right
const imgColorFill = "http://localhost:9013/assets/f701e874110183cd046271b32c08bc98ca2000f5.svg"; // Arrow fill
const imgImage = "http://localhost:9013/assets/316b4cdf618efd0eb492fb14d243590a84e346b4.png"; // Metrics main image
const imgDivGatsbyImageWrapper = "http://localhost:9013/assets/8001f79b7e2a7421c72586287f3e3b447ea37140.png"; // Innovation image 1
const imgAboutChild1Png = "http://localhost:9013/assets/ce596135be844fbcce0cfd9fe247e5e01a14c24e.png"; // Innovation image 2
const imgIcon = "http://localhost:9013/assets/3e65a00f1a3d6328d2756f09468c05358b31641b.svg"; // value icon

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export default function About({ setActiveTab }: AboutProps) {
  return (
    <div className="bg-white text-black w-full overflow-x-hidden min-h-screen">
      {/* 1. HERO HERO BANNER */}
      <section className="bg-[#122] text-white py-24 px-6 md:px-16 relative flex flex-col items-center min-h-[820px] overflow-hidden">
        {/* Floating Bell */}
        <div className="absolute left-[8%] bottom-[12%] animate-float select-none pointer-events-none">
          <img src={imgBell21} className="w-[80px] h-[70px] transform rotate-[15deg]" alt="bell" />
        </div>
        
        {/* Line Right Decoration */}
        <div className="absolute right-[5%] top-[25%] opacity-30 select-none pointer-events-none">
          <img src={imgGroup2271} className="w-[165px] h-[136px]" alt="" />
        </div>

        <div className="max-w-5xl text-center flex flex-col items-center mt-12 z-10">
          <h1 className="font-['Italianno'] font-normal text-[80px] md:text-[144px] tracking-[6px] md:tracking-[8px] text-white leading-none">
            Curious about us?
          </h1>
          <h2 className="font-['Italianno'] font-normal text-[60px] md:text-[100px] tracking-[4px] md:tracking-[6px] text-[#36ed81] leading-none mt-4">
            Dive in to know
          </h2>

          <p className="font-['Poppins'] font-light text-[18px] md:text-[24px] text-[#eef2f0] leading-relaxed max-w-4xl mt-12">
            Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
          </p>

          {/* Stats Overlay Cards on Dark Hero */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 w-full max-w-2xl justify-center">
            {/* Stat Box 1 */}
            <div className="bg-[#f2fbf7] text-[#122] p-6 rounded-[20px] shadow-lg flex flex-col justify-center items-center flex-1 border border-white/10 hover:scale-105 transition-transform duration-300">
              <span className="font-['Manrope'] font-extrabold text-[32px]">10 LPA</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16px] mt-1">Local Clients</span>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-[#f2fbf7] text-[#122] p-6 rounded-[20px] shadow-lg flex flex-col justify-center items-center flex-1 border border-white/10 hover:scale-105 transition-transform duration-300">
              <span className="font-['Manrope'] font-extrabold text-[32px]">95%</span>
              <span className="font-['Space_Grotesk'] text-[#8e8e8e] text-[16px] mt-1">Projects Completed</span>
            </div>
          </div>

          {/* Let's build CTA button */}
          <button 
            onClick={() => setActiveTab('contact')}
            className="mt-16 bg-[#ffd500] hover:bg-[#ffe040] text-black font-['Space_Grotesk'] text-[20px] py-4 px-8 rounded-[11px] flex items-center gap-3 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          >
            <span>Let’s build it together.</span>
            <div className="w-6 h-6 flex items-center justify-center bg-black/10 rounded-full">
              <img src={imgColorFill} className="w-[12px] h-[12px] filter invert" alt="" />
            </div>
          </button>
        </div>
      </section>

      {/* 2. METRICS SECTION */}
      <section className="bg-[#f7fcf5] py-24 px-6 md:px-16 w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Main Showcase Image */}
          <div className="flex-1 w-full max-w-xl h-[450px] md:h-[560px] rounded-[24px] overflow-hidden shadow-xl">
            <img src={imgImage} alt="We've helped companies" className="w-full h-full object-cover" />
          </div>

          {/* Metrics Content */}
          <div className="flex-1 flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-4">
              <span className="font-['Inter'] font-semibold text-[16px] text-[#122] uppercase tracking-[1px]">
                We’ve helped hundreds of companies
              </span>
              <h2 className="font-['Inter'] font-semibold text-[36px] md:text-[48px] text-[#101828] leading-tight">
                We’re only just getting started on our journey
              </h2>
            </div>

            {/* Grid of stats */}
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="border-l-4 border-[#36ed81] pl-6 flex flex-col gap-2">
                <span className="font-['Inter'] font-bold text-[48px] md:text-[60px] text-[#36ed81] leading-none">
                  400+
                </span>
                <span className="font-['Inter'] font-medium text-[16px] md:text-[18px] text-[#101828]">
                  Projects completed
                </span>
              </div>

              <div className="border-l-4 border-[#36ed81] pl-6 flex flex-col gap-2">
                <span className="font-['Inter'] font-bold text-[48px] md:text-[60px] text-[#36ed81] leading-none">
                  600%
                </span>
                <span className="font-['Inter'] font-medium text-[16px] md:text-[18px] text-[#101828]">
                  Return on investment
                </span>
              </div>

              <div className="border-l-4 border-[#36ed81] pl-6 flex flex-col gap-2">
                <span className="font-['Inter'] font-bold text-[48px] md:text-[60px] text-[#36ed81] leading-none">
                  10k
                </span>
                <span className="font-['Inter'] font-medium text-[16px] md:text-[18px] text-[#101828]">
                  Global downloads
                </span>
              </div>

              <div className="border-l-4 border-[#36ed81] pl-6 flex flex-col gap-2">
                <span className="font-['Inter'] font-bold text-[48px] md:text-[60px] text-[#36ed81] leading-none">
                  200+
                </span>
                <span className="font-['Inter'] font-medium text-[16px] md:text-[18px] text-[#101828]">
                  5-star reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORY SECTION */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-['Inter'] font-bold text-[36px] md:text-[60px] text-[#004318] text-center leading-tight tracking-tight">
          It all started with overdrafts
        </h2>
        <p className="font-['DM_Sans'] text-[#004318]/80 text-[18px] md:text-[25px] text-center max-w-4xl leading-relaxed mt-6">
          Our first fight was to make overdraft fees a thing of the past by spotting members the money they needed, without charging them $38. Why? Because it’s the right thing to do.
        </p>

        {/* Yellow Banner Card */}
        <div className="bg-[#e1ea78] text-[#004318] py-12 px-8 rounded-[20px] w-full mt-16 text-center max-w-4xl shadow-md border border-[#e1ea78]/50 hover:scale-101 transition-transform duration-300">
          <p className="font-['Inter'] font-bold text-[28px] md:text-[40px] leading-tight tracking-[1px]">
            Indians paid $11B in overdraft fees to banks in 2021²
          </p>
        </div>
      </section>

      {/* 4. DIGITAL INNOVATION GALLERY */}
      <section className="py-20 px-6 md:px-16 bg-[#fafafa] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column: Two stacked showcase images */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="rounded-[20px] overflow-hidden shadow-lg h-[320px]">
              <img src={imgDivGatsbyImageWrapper} className="w-full h-full object-cover hover:scale-103 transition-transform duration-500" alt="Innovation 1" />
            </div>
            <div className="rounded-[20px] overflow-hidden shadow-lg h-[320px]">
              <img src={imgAboutChild1Png} className="w-full h-full object-cover hover:scale-103 transition-transform duration-500" alt="About child" />
            </div>
          </div>

          {/* Right Column: Text banner */}
          <div className="flex-1 bg-[#001006] text-white p-10 md:p-16 rounded-[20px] border-7 border-[#e1ea78] flex flex-col justify-center gap-6 shadow-2xl">
            <h3 className="font-['Inter'] font-extrabold text-[36px] md:text-[52px] leading-tight tracking-[1px]">
              New Era In Digital Innovation.
            </h3>
            <p className="font-['DM_Sans'] text-white/80 text-[18px] md:text-[22px] leading-relaxed mt-4">
              Our commitment to excellence has made us a leading force in the industry. We navigate the vast expanse of the web, ensuring your brand reaches new celestial heights.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VALUES / FEATURES SECTION */}
      <section className="py-24 px-6 md:px-16 bg-[#122] text-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-4">
            <span className="font-['Inter'] font-semibold text-[16px] text-[#e1ea78] uppercase tracking-[1.5px]">
              Our values
            </span>
            <h2 className="font-['Inter'] font-bold text-[36px] md:text-[44px] text-white tracking-tight">
              How we work at Untitled
            </h2>
            <p className="font-['Inter'] text-white/70 text-[18px] md:text-[20px] leading-relaxed">
              Our shared values keep us connected and guide us as one team. We strive for excellence at every step.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Value Item 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-[20px] border border-white/5 hover:border-[#36ed81]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#164630] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src={imgIcon} className="w-6 h-6 filter invert" alt="users" />
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#e1ea78] mb-3">
                Care about our team
              </h3>
              <p className="font-['Inter'] text-white/60 text-[16px] leading-relaxed">
                We believe in fostering a supportive, inclusive, and growth-oriented space for our members.
              </p>
            </div>

            {/* Value Item 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-[20px] border border-white/5 hover:border-[#36ed81]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#164630] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full border-2 border-[#e1ea78] flex items-center justify-center font-bold text-xs text-[#e1ea78]">🎯</div>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#e1ea78] mb-3">
                Be customer obsessed
              </h3>
              <p className="font-['Inter'] text-white/60 text-[16px] leading-relaxed">
                Our clients are at the center of everything we do. We align our goals to ensure their ultimate success.
              </p>
            </div>

            {/* Value Item 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-[20px] border border-white/5 hover:border-[#36ed81]/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#164630] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full border-2 border-[#e1ea78] flex items-center justify-center font-bold text-xs text-[#e1ea78]">⚖️</div>
              </div>
              <h3 className="font-['Inter'] font-semibold text-[20px] text-[#e1ea78] mb-3">
                Do the right thing
              </h3>
              <p className="font-['Inter'] text-white/60 text-[16px] leading-relaxed">
                Integrity is the baseline of our business. We make decisions based on what is fair, transparent, and correct.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
