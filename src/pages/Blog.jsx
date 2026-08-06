// src/pages/Blog.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogSection from '../features/blog/BlogSection';
import ContactForm from '../features/contact/ContactForm';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[var(--off-white)] text-[var(--deep-black)] font-sans antialiased flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-8">
        {/* Renders the full blog page directory layout */}
        <BlogSection isHomePage={false} />

        {/* Call to action form */}
        <div id="newsletter" className="bg-slate-50 border-t border-slate-200">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;