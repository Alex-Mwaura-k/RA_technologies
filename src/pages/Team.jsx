// src/pages/Team.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const teamMembers = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Co-Founder & Chief Executive Officer',
    category: 'Leadership',
    bio: 'Ex-AWS Cloud Architect with 10+ years scaling high-concurrency SaaS infrastructures and enterprise security models at RAtechnologies.',
    story: 'Alex holds a Master’s degree in Cloud Computing from MIT. Before founding RAtechnologies, he spent a decade at AWS architecting resilient, distributed systems for Fortune 500 companies. His vision is to bridge the gap between enterprise security needs and accessible developer education.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/alex-rivera',
      github: 'https://github.com/alexrivera',
      twitter: 'https://twitter.com/alexrivera',
    },
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Co-Founder & Head of Academy',
    category: 'Leadership',
    bio: 'Former Tech Lead & Security Researcher at RAtechnologies. Passionate about mentoring the next generation of full-stack and cloud engineers.',
    story: 'With a background in Cybersecurity from Stanford University, Marcus has discovered numerous zero-day vulnerabilities in popular open-source frameworks. He transitioned into education to build RAtechnologies’ core curriculum, aiming to produce security-first engineers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/marcus-chen',
      github: 'https://github.com/marcuschen',
      twitter: 'https://twitter.com/marcuschen',
    },
  },
  {
    id: '3',
    name: 'Sophia Patel',
    role: 'Lead Full-Stack Engineer',
    category: 'Engineering',
    bio: 'Specializes in distributed systems, microservices, and modern frontend frameworks like React and Next.js at RAtechnologies.',
    story: 'Sophia graduated top of her class in Software Engineering at the University of Waterloo. She previously led frontend architecture at a major fintech startup before joining RAtechnologies. She is a prominent speaker at React conferences and an active open-source contributor.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/sophiapatel',
      github: 'https://github.com/sophiapatel',
    },
  },
  {
    id: '4',
    name: 'David Vance',
    role: 'Senior Security Architect',
    category: 'Engineering',
    bio: 'Penetration testing lead and ethical hacker at RAtechnologies directing enterprise vulnerability audits and bug bounty initiatives.',
    story: 'A self-taught ethical hacker, David earned his OSCP and CISSP certifications by age 22. He has spent the last 8 years executing high-stakes penetration tests for government agencies and financial institutions. At RAtechnologies, he ensures all internal products and student platforms are bulletproof.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    socials: {
      linkedin: 'https://linkedin.com/in/davidvance',
      github: 'https://github.com/davidvance',
      twitter: 'https://twitter.com/davidvance',
    },
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    // 1. Dynamic Page Meta Tags Update for SEO Search Visibility
    document.title = "RA technologies";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionText = "Meet the leadership team behind RAtechnologies: Alex Rivera (CEO), Marcus Chen (Head of Academy), Sophia Patel (Lead Full-Stack Engineer), and David Vance (Senior Security Architect).";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionText);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionText;
      document.head.appendChild(meta);
    }

    // 2. Inject Schema.org JSON-LD Structured Data for Rich Search Snippets
    const jsonLdData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://ratechnologies.com/#organization",
          "name": "RAtechnologies",
          "url": "https://ratechnologies.com",
          "logo": "https://ratechnologies.com/assets/logo.png"
        },
        {
          "@type": "AboutPage",
          "@id": "https://ratechnologies.com/team/#webpage",
          "url": "https://ratechnologies.com/team",
          "name": "Our Team | RAtechnologies",
          "description": descriptionText,
          "isPartOf": { "@id": "https://ratechnologies.com/#organization" }
        },
        ...teamMembers.map((member) => ({
          "@type": "Person",
          "@id": `https://ratechnologies.com/team/#${member.id}`,
          "name": member.name,
          "jobTitle": member.role,
          "description": member.bio,
          "image": member.image,
          "worksFor": { "@id": "https://ratechnologies.com/#organization" },
          "sameAs": Object.values(member.socials).filter(Boolean)
        }))
      ]
    };

    let script = document.getElementById('team-jsonld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'team-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdData);

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--off-white)] font-sans antialiased relative">
      <Navbar />

      <main className="flex-grow pt-8 pb-16 relative z-10">
        {/* Subtle architectural grid background line from Solutions/Privacy/Terms */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', 
            backgroundSize: '4rem 4rem' 
          }}
        ></div>

        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-8">
          
          {/* Header Block matching Privacy and Terms style */}
          <header className="mb-8 w-full">
            <div className="flex pt-8 items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Company Leadership & Engineering
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
              Meet Our <span className="text-[var(--dark-blue)]">Team</span>
            </h1>

            <p className="mt-3 text-base text-slate-500 max-w-3xl leading-relaxed">
              Engineers, creators, and educators. Our leadership team combines deep enterprise software experience with a passion for training the next generation of technology pioneers.
            </p>

            <p className="mt-4 text-sm text-slate-400 font-small text-right">
              RAtechnologies Core Team
            </p>
          </header>

          {/* Team Grid Content Body */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <article
                  key={member.id}
                  itemScope
                  itemType="https://schema.org/Person"
                  className="bg-[var(--pure-white)] border border-slate-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-grow flex flex-col">
                    {/* Member Avatar */}
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-5 bg-slate-100 border border-slate-200/60 group">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at RAtechnologies`}
                        itemProp="image"
                        loading="lazy"
                        width="600"
                        height="600"
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-[10px] font-semibold text-white rounded-md z-10">
                        {member.category}
                      </span>
                      
                      {/* Social Icons moved ON TOP of the image */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                        {member.socials.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noreferrer me"
                            itemProp="sameAs"
                            className="p-1.5 text-slate-500 hover:text-blue-700 bg-white/90 hover:bg-white backdrop-blur-sm shadow-sm rounded-md transition-all"
                            aria-label={`Connect with ${member.name} on LinkedIn`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </a>
                        )}

                        {member.socials.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noreferrer me"
                            itemProp="sameAs"
                            className="p-1.5 text-slate-500 hover:text-slate-900 bg-white/90 hover:bg-white backdrop-blur-sm shadow-sm rounded-md transition-all"
                            aria-label={`${member.name}'s GitHub profile`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                            </svg>
                          </a>
                        )}

                        {member.socials.twitter && (
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noreferrer me"
                            itemProp="sameAs"
                            className="p-1.5 text-slate-500 hover:text-blue-500 bg-white/90 hover:bg-white backdrop-blur-sm shadow-sm rounded-md transition-all"
                            aria-label={`${member.name}'s Twitter profile`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Member Details */}
                    <h2 itemProp="name" className="text-lg font-bold text-slate-900 leading-snug">
                      {member.name}
                    </h2>
                    <p itemProp="jobTitle" className="text-xs font-semibold text-[var(--tech-blue)] mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p itemProp="description" className="text-xs text-slate-600 leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>

                    {/* Hidden organization itemProp link for search engines */}
                    <meta itemProp="worksFor" content="RAtechnologies" />
                  </div>

                  {/* Centered Read More Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-sm font-semibold text-[var(--dark-blue)] hover:text-blue-700 transition-colors py-1 px-3 rounded hover:bg-slate-50"
                    >
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Join Us Banner */}
            <div className="bg-[var(--deep-black)] text-white rounded-xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Want to build with us?</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  We are always looking for passionate cloud engineers, security instructors, and developers.
                </p>
              </div>
              <Link
                to="/academy"
                className="whitespace-nowrap bg-[#b2f042] hover:bg-[#a1dc33] text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Explore Academy & Careers
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Story Popup Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex items-center gap-5 mb-5 border-b border-slate-100 pb-5">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-16 h-16 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedMember.name}</h3>
                <p className="text-sm font-semibold text-[var(--tech-blue)]">{selectedMember.role}</p>
              </div>
            </div>
            
            <div className="prose prose-sm prose-slate">
              <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Background & Story</h4>
              <p className="text-slate-600 leading-relaxed">
                {selectedMember.story}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;