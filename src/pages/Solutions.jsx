// src/pages/Solutions.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SolutionsSection from '../features/solutions/SolutionsSection';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-[var(--off-white)] text-[var(--deep-black)] font-sans antialiased flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8"> 
        <SolutionsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;