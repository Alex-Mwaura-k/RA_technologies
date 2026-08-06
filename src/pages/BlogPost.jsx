import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogPostContent from '../features/blog/BlogPostContent';

const BlogPost = () => {
  // Scroll to top when loading a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--off-white)] text-[var(--deep-black)] font-sans antialiased flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-10 pb-4">
        <BlogPostContent />
      </main>

      <Footer />
    </div>
  );
};
export default BlogPost;