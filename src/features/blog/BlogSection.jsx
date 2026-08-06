// src/features/blog/BlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'building-scalable-saas-ledgers',
    title: 'Architecting Immutable Payment Ledgers for Enterprise SaaS',
    excerpt: 'How we build high-throughput, audit-proof transaction pipelines using double-entry ledger principles and distributed cloud locks.',
    category: 'SaaS Architecture',
    date: 'Jul 14, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alex Rivera',
      role: 'Principal Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bridging-academy-to-production',
    title: 'Why Traditional Bootcamps Fail Engineering Teams (And How We Fix It)',
    excerpt: 'Theoretical coding exercises don’t prepare developers for production incidents. Here is how we structure repository-based engineering workflows.',
    category: 'Engineering Education',
    date: 'Jun 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Head of Academy',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'zero-trust-cloud-infrastructure',
    title: 'Implementing Zero-Trust Security in Multi-Tenant Environments',
    excerpt: 'A deep dive into isolating enterprise tenant workloads using modern IAM policies, encrypted network overlays, and continuous runtime audits.',
    category: 'DevOps & Security',
    date: 'May 19, 2026',
    readTime: '10 min read',
    author: {
      name: 'David Omondi',
      role: 'Lead Cloud Security',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  }
];

const BlogSection = ({ isHomePage = false }) => {
  return (
    <section id="blog" className="bg-[var(--off-white)] font-sans antialiased py-16 border-t border-slate-200 relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]" 
           style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className={`mb-12 ${isHomePage ? 'max-w-2xl' : 'border-b border-slate-200 pb-8 max-w-4xl'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Engineering Insights</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
            Latest <span className="text-[var(--dark-blue)]">Articles & Thought Leadership</span>
          </h2>

          {!isHomePage && (
            <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
              Explore deep dives into enterprise software engineering, cloud architecture, system design patterns, and elite technical education methodologies.
            </p>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/blog/${post.id}`}
              key={post.id} 
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col h-full cursor-pointer block"
            >
              {/* Post Header Image */}
              <div className="h-48 overflow-hidden relative bg-slate-100 border-b border-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-md tracking-wider uppercase shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex items-center text-xs text-slate-400 font-medium mb-3 gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-[var(--deep-black)] tracking-tight mb-3 group-hover:text-[var(--tech-blue)] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author Metadata */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-none">{post.author.name}</p>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{post.author.role}</p>
                    </div>
                  </div>
                  
                  <span className="text-[var(--tech-blue)] text-xs font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Button on Homepage */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              View All Publications
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogSection;