import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../constants/siteConfig';
import toast from 'react-hot-toast';

const Footer = () => {
  const footerRef = useRef(null);
  const [email, setEmail] = useState('');

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    footerRef.current.style.setProperty('--mouse-x', `${x}px`);
    footerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Process subscription logic here (API call, etc.)
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
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
            rgba(16, 185, 129, 0.3) 0%, 
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
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="flex-grow text-sm bg-transparent border border-slate-700 rounded-full px-6 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-[var(--dark-blue)] focus:ring-1 focus:ring-[var(--dark-blue)] transition-all shadow-inner"
              />
              <button 
                type="submit" 
                className="bg-[var(--dark-blue)] hover:bg-[var(--tech-blue)] text-white px-8 py-3 rounded-full font-semibold Subscribe text-sm flex-shrink-0 transition-opacity shadow-lg"
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
              {/* LinkedIn */}
              <a href={SITE_CONFIG.socialLinks[0].href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-[var(--dark-blue)] transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* X (Twitter) */}
              <a href={SITE_CONFIG.socialLinks[1].href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-[var(--dark-blue)] transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href={SITE_CONFIG.socialLinks[2].href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-[var(--dark-blue)] transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href={SITE_CONFIG.socialLinks[3].href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-[var(--dark-blue)] transition-colors group/icon">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0c-6.627 0-11.996 5.37-11.996 11.996 0 2.12.553 4.148 1.558 5.946l-1.593 5.816 5.952-1.564c1.748.918 3.692 1.402 5.728 1.402h.004c6.627 0 12-5.37 12-11.998 0-3.21-1.25-6.228-3.518-8.498s-5.286-3.517-8.495-3.517zm0 2.016c2.67 0 5.178 1.042 7.067 2.932 1.89 1.892 2.933 4.402 2.93 7.07-.003 5.518-4.492 10.007-10.012 10.007h-.002c-1.843 0-3.649-.494-5.234-1.432l-.375-.222-3.89 1.022 1.04-3.79-.244-.39c-1.03-1.64-1.573-3.535-1.573-5.514 0-5.515 4.49-10.003 10.005-10.003zm5.293 14.154c-.29-.824-2.812-1.39-3.136-1.455-.323-.064-.558-.097-.792.257-.234.355-.91 1.16-1.116 1.385-.205.226-.41.258-.732.096-1.82-.916-3.118-1.782-4.32-3.82-.128-.216.12-.2.32-.4.202-.202.404-.473.606-.71.202-.236.27-.403.404-.672.134-.268.067-.504-.034-.705-.101-.202-.792-1.914-1.084-2.617-.285-.688-.573-.595-.792-.605-.205-.01-.441-.01-.676-.01-.235 0-.616.088-.94.442-.323.355-1.232 1.204-1.232 2.937 0 1.733 1.264 3.41 1.44 3.644.175.235 2.49 3.8 6.027 5.253 2.11.865 2.846 1.057 3.842 1.018 1.137-.047 3.135-1.282 3.576-2.525.441-1.243.441-2.31.306-2.535-.134-.225-.494-.354-.978-.597z"/>
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