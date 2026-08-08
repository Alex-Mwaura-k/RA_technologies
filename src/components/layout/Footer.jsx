import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../constants/siteConfig';

const Footer = () => {
  const footerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    footerRef.current.style.setProperty('--mouse-x', `${x}px`);
    footerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden bg-slate-950 border-t border-slate-900 pt-10 pb-12 text-slate-400"
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-3xl"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(16, 185, 129, 0.25) 0%, 
            rgba(16, 185, 129, 0.05) 40%, 
            rgba(16, 185, 129, 0) 70%
          )`
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900/50 rounded-3xl border border-slate-800 p-6 md:p-6 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          <div className="w-full md:w-1/2 md:pr-12 flex justify-start">
            <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="bg-white text-slate-950 font-black text-xl w-12 h-12 flex items-center justify-center rounded-lg">
                {SITE_CONFIG.brandShort}
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                {SITE_CONFIG.brandName}
              </span>
            </Link>
          </div>

          <div className="w-full md:w-1/2 md:pl-12">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow text-sm bg-transparent border border-slate-700 rounded-full px-6 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[var(--dark-blue)] focus:ring-1 focus:ring-[var(--dark-blue)] transition-all shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-[var(--dark-blue)] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold Subscribe text-sm flex-shrink-0 transition-opacity shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-10 mb-12">
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-slate-500">Contact Information</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors opacity-80 hover:opacity-100">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a 
                  href={`tel:${SITE_CONFIG.contact.phone}`} 
                  className="text-sm font-medium hover:text-white transition-colors opacity-80 hover:opacity-100"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-12 md:col-span-2">
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-slate-500">Platform</h4>
              <ul className="space-y-3 text-sm">
                {SITE_CONFIG.platformLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-slate-500">Legal</h4>
              <ul className="space-y-3 text-sm">
                {SITE_CONFIG.legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest text-slate-500">Follow Us</h4>
            <div className="flex space-x-5 justify-center md:justify-start">
              <a href={SITE_CONFIG.socialLinks[0].href} className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-white transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={SITE_CONFIG.socialLinks[1].href} className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-white transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href={SITE_CONFIG.socialLinks[2].href} className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-white transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-[var(--dark-blue)]">{SITE_CONFIG.copyrightName}</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm font-medium">
            {SITE_CONFIG.socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;