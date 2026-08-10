// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Hero from '../features/hero/Hero';
import AboutSection from '../features/about/AboutSection';
import StatsSection from '../features/home/StatsSection';
import SolutionsSection from '../features/solutions/SolutionsSection';
import AcademyTracks from '../features/academy/AcademyTracks';
import BlogSection from '../features/blog/BlogSection'; 
import ContactForm from '../features/contact/ContactForm';
import Footer from '../components/layout/Footer';

const Home = () => {
  const location = useLocation();

  // Listen for changes in the URL hash and force a smooth scroll to ANY section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
    // REMOVED the else block here to prevent conflicts with ScrollToTop.jsx
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col selection:bg-[var(--tech-blue)] selection:text-white">
      <Navbar />
      
      <main className="flex-grow pt-0">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-15">
          <AboutSection />
        </section>

        <section id="stats">
          <StatsSection />
        </section>
        
        <section id="solutions" className="scroll-mt-24 bg-slate-50/50 border-y border-slate-200/60">
          <SolutionsSection isHomePage={true} />
        </section>
        
        <section id="academy" className="scroll-mt-24">
          <AcademyTracks isHomePage={true} />
        </section>

        <section id="blog" className="scroll-mt-24">
          <BlogSection isHomePage={true} />
        </section>

        <section id="contact" className="scroll-mt-24 bg-slate-50/50 border-t border-slate-200/60">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;