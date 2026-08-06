// src/features/academy/AcademyTracks.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const academyData = [
  {
    id: 'full-stack',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Advanced Full-Stack Engineering',
    shortDescription: 'Master modern web architecture, from reactive front-ends to scalable backend databases.',
    fullDescription: 'An intensive, production-focused track designed to bridge the gap between basic coding and enterprise-grade software development. Learn to architect, deploy, and maintain scalable applications.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'React & Modern Frontend Architecture',
      'Node.js & Express API Development',
      'PostgreSQL & Database Schema Design',
      'System Architecture & Microservices'
    ]
  },
  {
    id: 'cloud-devops',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Infrastructure & DevOps',
    shortDescription: 'Learn to deploy, manage, and scale enterprise applications using industry-standard cloud tools.',
    fullDescription: 'Master the lifecycle of software deployment. This track focuses on automating CI/CD pipelines, containerization, and provisioning resilient cloud infrastructure that handles high traffic with zero downtime.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'AWS Infrastructure & Provisioning',
      'Docker Containerization',
      'Kubernetes Orchestration',
      'Automated CI/CD Pipelines'
    ]
  },
  {
    id: 'cybersecurity',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Enterprise Cybersecurity',
    shortDescription: 'Defend systems against modern threats with hands-on security operations and penetration testing.',
    fullDescription: 'Move beyond theory and engage in live-fire security scenarios. This curriculum teaches threat modeling, secure code auditing, and compliance standards necessary to protect enterprise SaaS environments.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Network Threat Modeling',
      'Penetration Testing (Ethical Hacking)',
      'Secure Application Auditing',
      'ISO/Compliance Frameworks'
    ]
  },
  {
    id: 'ai-machine-learning',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    shortDescription: 'Design and deploy intelligent systems using deep learning and neural networks.',
    fullDescription: 'Dive into the world of artificial intelligence. This track covers data preprocessing, model training, and deploying scalable ML pipelines in production environments to solve real-world problems.',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'Python for Data Science',
      'TensorFlow & PyTorch',
      'NLP & Computer Vision',
      'MLOps & Model Deployment'
    ]
  },
  {
    id: 'mobile-engineering',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Engineering',
    shortDescription: 'Build high-performance, cross-platform mobile applications for iOS and Android.',
    fullDescription: 'Learn the intricacies of modern mobile development. This track teaches you how to build fluid, native-feeling applications, manage complex state, and integrate smoothly with device hardware APIs.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'React Native & Expo Ecosystem',
      'iOS & Android Native Modules',
      'Mobile State Management',
      'App Store Deployment Strategies'
    ]
  },
  {
    id: 'data-engineering',
    icon: (
      <svg className="w-5 h-5 text-[var(--tech-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Data Engineering',
    shortDescription: 'Architect robust data pipelines and scalable enterprise data warehouses.',
    fullDescription: 'Master the flow of information. From complex ETL processes to distributed computing, learn to build the critical infrastructure that powers enterprise analytics and business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    curriculum: [
      'ETL Pipeline Construction',
      'Apache Spark & Kafka',
      'Data Warehousing (Snowflake)',
      'Big Data Architecture'
    ]
  }
];

const AcademyTracks = ({ isHomePage = false }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <section id="academy" className="bg-white font-sans antialiased py-16 border-t border-slate-200 relative">
      
      {/* Subtle enterprise grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.10]" 
           style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Enterprise Header Section */}
        <div className={`mb-12 ${isHomePage ? 'max-w-2xl' : 'border-b border-slate-200 pb-8 max-w-4xl'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Elite Training Program</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
            Engineering <span className="text-[var(--dark-blue)]">Academy Tracks</span>
          </h2>

          {!isHomePage && (
            <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
              We don't just teach code; we forge production-ready engineers. Our curriculum is directly derived from the enterprise architectures we build, ensuring graduates are ready for high-impact roles from day one.
            </p>
          )}
        </div>

        {/* CONDITIONAL RENDER: Homepage Cards vs. Full Page Layout */}
        {isHomePage ? (
          
          /* --- HOME PAGE: COMPACT CARDS --- */
          /* Note: .slice(0, 6) guarantees we never exceed 6 cards on the home page */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academyData.slice(0, 6).map((track) => (
              <Link 
                to={`/academy#${track.id}`}
                key={track.id} 
                className="group bg-[var(--off-white)] border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Header */}
                <div className="h-40 overflow-hidden relative bg-slate-200 border-b border-slate-200">
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                
                {/* Compact Content Block */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 shadow-sm -mt-10 relative z-10">
                    {track.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--deep-black)] tracking-tight mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {track.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        ) : (

          /* --- ACADEMY PAGE: DETAILED CURRICULUM LAYOUT --- */
          <div className="space-y-8">
            {academyData.map((track) => (
              <div 
                id={track.id}
                key={track.id} 
                className="bg-[var(--off-white)] border border-slate-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm scroll-mt-24"
              >
                
                {/* Left Side: Image (Span 4) */}
                <div className="lg:col-span-4 h-64 lg:h-auto relative bg-slate-800">
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                    {track.icon}
                  </div>
                </div>

                {/* Middle: Description (Span 4) */}
                <div className="lg:col-span-4 p-8 flex flex-col justify-center border-r border-slate-200/60">
                  <h3 className="text-xl font-bold text-[var(--deep-black)] tracking-tight mb-4">{track.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{track.fullDescription}</p>
                </div>
                
                {/* Right Side: Curriculum Outline (Span 4) */}
                <div className="lg:col-span-4 bg-white p-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5 border-b border-slate-100 pb-3">
                    Core Curriculum
                  </h4>
                  <ul className="space-y-4">
                    {track.curriculum.map((module, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-[var(--tech-blue)] text-sm font-bold mt-0.5">{`0${i + 1}.`}</span>
                        <span className="text-sm font-medium text-slate-700">{module}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:bg-[var(--tech-blue)] hover:text-white hover:border-[var(--tech-blue)] transition-colors duration-200">
                    Download Syllabus
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Action Button for Homepage */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/academy" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            >
              Explore Full Curriculum
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

export default AcademyTracks;