// src/pages/Home.jsx
import React from 'react';
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
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col selection:bg-[var(--tech-blue)] selection:text-white">
      <Navbar />
      
      {/* FIXED: Removed pt-20 here so the Hero background hits the very top of the screen */}
      <main className="flex-grow pt-0">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>

        <section id="stats">
          <StatsSection />
        </section>
        
        <section id="solutions" className="scroll-mt-20 bg-slate-50/50 border-y border-slate-200/60">
          <SolutionsSection isHomePage={true} />
        </section>
        
        <section id="academy" className="scroll-mt-20">
          <AcademyTracks isHomePage={true} />
        </section>

        <section id="blog" className="scroll-mt-20">
          <BlogSection isHomePage={true} />
        </section>

        <section id="contact" className="scroll-mt-20 bg-slate-50/50 border-t border-slate-200/60">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;