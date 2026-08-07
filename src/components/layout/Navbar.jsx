// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSaaSOpen, setIsMobileSaaSOpen] = useState(false);
  const [isMobileAcademyOpen, setIsMobileAcademyOpen] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Toggle handlers ensuring only one mobile dropdown is open at a time
  const handleToggleSaaS = () => {
    setIsMobileSaaSOpen((prev) => {
      const nextState = !prev;
      if (nextState) setIsMobileAcademyOpen(false);
      return nextState;
    });
  };

  const handleToggleAcademy = () => {
    setIsMobileAcademyOpen((prev) => {
      const nextState = !prev;
      if (nextState) setIsMobileSaaSOpen(false);
      return nextState;
    });
  };

  return (
    <>
      {/* 1. Main Top Navbar (z-index increased to 110 to cover the drawer's top shadow) */}
      <nav className="fixed top-0 left-0 right-0 z-[110] bg-blue-50 transition-all h-16">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Left: Brand Logo */}
            <div className="flex-1 flex items-center justify-start group">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="RA Technologies Logo" 
                  className="w-9 h-9 object-contain rounded-lg shadow-sm group-hover:opacity-80 transition-opacity"
                />
                <span className="text-xl font-extrabold text-[var(--deep-black)] tracking-tight">
                  RAtechnologies<span className="text-[var(--tech-blue)]">.</span>
                </span>
              </Link>
            </div>

            {/* Center: Main Links with Hover Dropdowns */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8 h-full">
              
              {/* SaaS Solutions Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-[var(--tech-blue)] transition-colors focus:outline-none">
                  Solutions
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-[var(--tech-blue)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Desktop Dropdown 1 */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-2 hidden group-hover:block animate-fade-in z-50">
                  <Link to="/solutions#real-estate" className="flex flex-col px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded w-fit mb-1">
                      Ready Now
                    </span>
                    <span className="text-sm font-bold text-[var(--deep-black)] group-hover/item:text-[var(--tech-blue)]">
                      Real Estate Management
                    </span>
                  </Link>
                  <div className="h-[1px] bg-slate-100 my-1 mx-2"></div>
                  <Link to="/solutions" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Custom Web Apps
                  </Link>
                  <Link to="/solutions" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Cloud Infrastructure & AWS
                  </Link>
                  <Link to="/solutions" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Cybersecurity Management
                  </Link>
                </div>
              </div>

              {/* Academy Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 group-hover:text-[var(--tech-blue)] transition-colors focus:outline-none">
                  Academy
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-[var(--tech-blue)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Desktop Dropdown 2 */}
                <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-white border border-slate-200 rounded-xl shadow-xl p-2 hidden group-hover:block animate-fade-in z-50">
                  <Link to="/academy" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Full-Stack Engineering
                  </Link>
                  <Link to="/academy" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Cloud Computing & DevOps
                  </Link>
                  <Link to="/academy" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[var(--tech-blue)] transition-colors">
                    Cybersecurity & Ethical Hacking
                  </Link>
                </div>
              </div>

              <Link to="/blog" className="text-sm font-semibold text-slate-600 hover:text-[var(--tech-blue)] transition-colors">
                Blog
              </Link>

              <a href={isHome ? '#about' : '/#about'} className="text-sm font-semibold text-slate-600 hover:text-[var(--tech-blue)] transition-colors">
                About
              </a>
            </div>

            {/* Right: Auth Action Buttons */}
            <div className="flex-1 flex items-center justify-end gap-3">
              <Link 
                to="/login" 
                className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[var(--deep-black)] rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
              >
                Sign Up
              </Link>

              {/* Mobile Menu Toggle Icon */}
              <div className="md:hidden flex items-center relative z-[111]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 -mr-2 rounded-md text-slate-600 hover:text-[var(--deep-black)] hover:bg-blue-100/60 focus:outline-none transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Architecture --- */}

      {/* 2. Backdrop Blur Overlay */}
      <div 
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 z-[90] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* 3. Slide-in Side Drawer */}
      <div 
        className={`md:hidden fixed top-16 right-0 bottom-0 w-72 bg-blue-50 border-l border-blue-100 shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
          
          {/* Mobile Dropdown 1: SaaS Solutions */}
          <div>
            <button 
              onClick={handleToggleSaaS}
              className="flex items-center justify-between w-full text-left focus:outline-none group"
            >
              <span className="text-base font-bold text-[var(--deep-black)] group-hover:text-[var(--tech-blue)] transition-colors">SaaS Solutions</span>
              <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileSaaSOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileSaaSOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col space-y-1 border-l-2 border-blue-200 ml-2 pl-4">
                <Link to="/solutions#real-estate" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-emerald-600 py-2 hover:text-emerald-500 transition-colors">
                  Real Estate Management
                </Link>
                <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Custom Web Apps
                </Link>
                <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Cloud Infrastructure & AWS
                </Link>
                <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Cybersecurity Management
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown 2: Academy Courses */}
          <div>
            <button 
              onClick={handleToggleAcademy}
              className="flex items-center justify-between w-full text-left focus:outline-none group"
            >
              <span className="text-base font-bold text-[var(--deep-black)] group-hover:text-[var(--tech-blue)] transition-colors">Academy Courses</span>
              <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileAcademyOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileAcademyOpen ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col space-y-1 border-l-2 border-blue-200 ml-2 pl-4">
                <Link to="/academy" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Full-Stack Engineering
                </Link>
                <Link to="/academy" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Cloud Computing & DevOps
                </Link>
                <Link to="/academy" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 py-2 hover:text-[var(--tech-blue)] transition-colors">
                  Cybersecurity & Ethical Hacking
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-blue-200/60 my-4"></div>

          {/* Mobile Blog & Standard Links */}
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block text-base font-bold text-[var(--deep-black)] hover:text-[var(--tech-blue)] transition-colors">Blog</Link>
          <a href={isHome ? '#about' : '/#about'} onClick={() => setIsOpen(false)} className="block text-base font-bold text-[var(--deep-black)] hover:text-[var(--tech-blue)] transition-colors">About Us</a>
          <a href={isHome ? '#contact' : '/#contact'} onClick={() => setIsOpen(false)} className="block text-base font-bold text-[var(--deep-black)] hover:text-[var(--tech-blue)] transition-colors">Contact</a>
          
        </div>

        {/* Action Buttons for Mobile (Removed the border-t class completely) */}
        <div className="p-5 bg-blue-50 space-y-3 pb-8 mt-auto">
          <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-white border border-slate-300 text-slate-700 px-4 py-3 rounded-lg font-bold text-sm transition-colors shadow-sm hover:bg-slate-50">
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-[var(--deep-black)] text-white px-4 py-3 rounded-lg font-bold text-sm shadow-md transition-colors hover:bg-slate-800">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;