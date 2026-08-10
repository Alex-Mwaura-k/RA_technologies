import React, { useState, useEffect, useRef } from 'react';

// 1. Custom Hook to trigger animation when the component scrolls into view
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when it enters the screen
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
};

// 2. The Animated Stat Component that handles the count-up logic
const AnimatedStat = ({ value }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [count, setCount] = useState(0);

  // Extract numeric and non-numeric parts (e.g., "99.99%" -> 99.99 and "%", "10M+" -> 10 and "M+")
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');
  const isFloat = value.includes('.');

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 30; // ms per frame
    const steps = duration / incrementTime;
    const increment = numericValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  // Format the output to keep decimals if the original number had them
  const displayCount = isFloat ? count.toFixed(2) : Math.floor(count);

  return (
    <span ref={ref} className="opacity-0 animate-fade-in-up block" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
      {displayCount}{suffix}
    </span>
  );
};

const stats = [
  { label: 'Uptime SLA', value: '99.99%' },
  { label: 'Transactions', value: '10M+' },
  { label: 'Engineers Trained', value: '500+' },
  { label: 'Active Deployments', value: '50+' },
];

const partners = [
  {
    name: 'ApexCloud',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    name: 'NexusSecurity',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: 'DataGrid',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    name: 'FinFlow',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    name: 'QuantumOps',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'AetherTech',
    logo: (
      <svg className="w-6 h-6 mr-2 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  }
];

const duplicatedPartners = [...partners, ...partners];

const StatsSection = () => {
  const sectionRef = useRef(null);

  // Calculate mouse position relative to the section and set CSS variables
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#020617] text-white py-16 border-y border-slate-800 overflow-hidden"
    >
      
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-scroll {
            animation: scroll-left 35s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          .fade-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* The Glow Element */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-3xl"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(16, 185, 129, 0.3) 0%, 
            rgba(16, 185, 129, 0.05) 40%, 
            rgba(16, 185, 129, 0) 70%
          )`
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-widest uppercase text-slate-500">
            Trusted by modern engineering teams
          </p>
        </div>

        <div className="relative flex overflow-hidden fade-mask group/scroll mb-16">
          <div className="flex w-max animate-scroll items-center gap-16 pr-16 cursor-pointer">
            {duplicatedPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                {partner.logo}
                <span className="text-xl font-bold text-slate-300 tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50 mb-12"></div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-4 sm:flex sm:flex-row sm:justify-between items-center w-full text-center sm:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--tech-blue)] tracking-tight">
                <AnimatedStat value={stat.value} />
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;