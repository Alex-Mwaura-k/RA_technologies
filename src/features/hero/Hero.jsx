import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CascadeText from '../../components/animations/CascadeText';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const isColor = (index) => {
    if (hoveredIndex !== null) {
      return hoveredIndex === index;
    }
    return activeIndex === index;
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[620px] flex flex-col justify-center bg-gradient-to-t from-slate-100 via-blue-50/30 to-white overflow-hidden pt-20 pb-2 sm:pb-8">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-35" 
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-0 w-[28rem] h-[28rem] bg-indigo-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-[22rem] h-[22rem] bg-[#b2f042]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none backdrop-blur-[2px]"></div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full max-h-[750px]">
          
          <div className="flex flex-col justify-between h-full max-h-[580px] max-w-2xl py-2">
            
            <div className="flex flex-col items-center sm:items-start w-full">
              
              {/* 
                Top Banner - -mt-10 pushes the pill up, mb-10 perfectly compensates 
                so the H1 below it DOES NOT move from its original position. 
                Desktop values (sm:mt-0, sm:mb-6) remain unchanged.
              */}
              <div className="w-full flex justify-center sm:justify-start -mt-10 sm:mt-0 mb-10 sm:mb-6">
                <div className="flex items-center gap-3">
                  {/* Left Pill */}
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#b2f042]"></div>
                    <div className="w-5 h-5 rounded-r-full bg-[var(--deep-black)]"></div>
                  </div>
                  
                  <span className="font-bold text-slate-600 tracking-wide text-xs sm:text-sm text-center sm:text-left">
                    Next-Gen Tech Systems & Academy
                  </span>

                  {/* Right Pill - Duplicate for symmetry on mobile */}
                  <div className="flex sm:hidden -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#b2f042]"></div>
                    <div className="w-5 h-5 rounded-r-full bg-[var(--deep-black)]"></div>
                  </div>
                </div>
              </div>

              {/* Added text-center sm:text-left to center the text on mobile */}
              <h1 className="text-center sm:text-left text-lg min-[375px]:text-xl min-[414px]:text-2xl sm:text-4xl lg:text-[2.6rem] xl:text-[3.2rem] font-extrabold tracking-tight text-[var(--deep-black)] leading-[1.2] w-full">
                <span className="block whitespace-nowrap">
                  <CascadeText text="Architecting Enterprise Code." delay={300} speed={25} />
                </span>
                <span className="block whitespace-nowrap text-[var(--dark-blue)]">
                  <CascadeText text="Training Tech Pioneers." delay={1200} speed={25} />
                </span>
              </h1>
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 py-4 lg:py-6 border-y border-slate-200/80 w-full lg:w-[90%] bg-white/40 backdrop-blur-sm px-3 lg:px-4 rounded-2xl my-4 lg:my-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
                Technology that Scales Business
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 lg:gap-2.5">
                {['Cloud Architecture', 'Software Development', 'Bug Bounty', 'Enterprise Security', 'Data Analytics', 'DevOps'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 lg:px-3.5 lg:py-1.5 bg-white text-slate-700 rounded-full text-[10px] sm:text-xs font-semibold border border-slate-200/80 shadow-sm transition-colors hover:border-[var(--tech-blue)] cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start w-full">
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 my-2 sm:my-3 max-w-2xl leading-relaxed text-center sm:text-left">
                RA technologies builds robust, high-performance SaaS platforms for modern organizations, 
                while empowering students with elite engineering tracks in Cloud, Security, and Development. 
              </p>

              <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-14 gap-4 w-full sm:w-auto">
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center justify-center gap-2 bg-[var(--dark-blue)] hover:bg-[var(--deep-black)] text-[var(--pure-white)] font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-300 shadow-lg shadow-blue-900/10 w-full sm:w-auto"
                >
                  Deploy Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link 
                  to="/academy" 
                  className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-slate-300 hover:border-[var(--tech-blue)] text-slate-800 hover:text-[var(--tech-blue)] font-semibold px-8 py-3.5 rounded-full text-base transition-colors duration-300 shadow-sm w-full sm:w-auto"
                >
                  Explore Academy
                </Link>
              </div>
            </div>

          </div>

          <div className="relative w-full h-full max-h-[500px] lg:max-h-[580px] hidden md:block self-center aspect-[4/3] lg:aspect-auto">
            
            <div 
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute top-0 right-0 w-[63%] h-[48%] bg-slate-200 rounded-[2rem] rounded-bl-[4rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaborating" 
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${isColor(0) ? 'grayscale-0 contrast-105' : 'grayscale'} ${hoveredIndex === 0 ? 'scale-105' : ''}`} 
              />
            </div>

            <div 
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute bottom-0 right-0 w-[63%] h-[48%] bg-slate-200 rounded-[2rem] rounded-tl-[3rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Development" 
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${isColor(1) ? 'grayscale-0 contrast-105' : 'grayscale'} ${hoveredIndex === 1 ? 'scale-105' : ''}`} 
              />
            </div>

            <div 
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute bottom-[18%] left-[5%] w-[45%] h-[43%] bg-slate-200 rounded-[2rem] rounded-tr-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Meeting" 
                className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${isColor(2) ? 'grayscale-0 contrast-105' : 'grayscale'} ${hoveredIndex === 2 ? 'scale-105' : ''}`} 
              />
            </div>

            <div className="absolute bottom-[29%] left-0 w-24 sm:w-28 h-24 sm:h-28 bg-[var(--deep-black)] rounded-full z-20 flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#b2f042] p-1.5">
                  <path id="curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fill="var(--pure-white)" fontSize="10.5" fontWeight="bold" letterSpacing="1.8">
                    <textPath href="#curve" startOffset="0%">
                      EXPLORE ACADEMY • BUILD TECH •
                    </textPath>
                  </text>
                </svg>
              </div>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#b2f042] z-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="absolute bottom-[10%] right-[-2%] w-8 sm:w-10 h-8 sm:h-10 text-[var(--tech-blue)] z-20 animate-pulse">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;