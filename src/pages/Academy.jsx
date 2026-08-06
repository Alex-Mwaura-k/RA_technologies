// src/pages/Academy.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AcademyTracks from '../features/academy/AcademyTracks';
import ContactForm from '../features/contact/ContactForm';

const Academy = () => {
  return (
    <div className="min-h-screen bg-[var(--off-white)] text-[var(--deep-black)] font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8">
        <AcademyTracks />
        <div id="enroll" className="bg-slate-50 border-t border-slate-200">
          <ContactForm />
        </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default Academy;