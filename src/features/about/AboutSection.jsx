// src/features/about/AboutSection.jsx
import React from 'react';

const challengesData = [
  {
    id: 'scaling',
    problemIcon: (
      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-100">
        <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
    ),
    problemText: "Inflexible infrastructure bottlenecking enterprise scale",
    solutionText: "Modular SaaS blueprints built for unlimited scalability"
  },
  {
    id: 'talent',
    problemIcon: (
      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 border border-orange-100">
        <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    problemText: "Skill gaps between academic theory and production",
    solutionText: "Immersive academy tracks led by industry engineers"
  },
  {
    id: 'siloes',
    problemIcon: (
      <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0 border border-purple-100">
        <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </div>
    ),
    problemText: "Siloed development creating deployment bottlenecks",
    solutionText: "Streamlined DevOps and automated CI/CD pipelines"
  },
  {
    id: 'security',
    problemIcon: (
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
    ),
    problemText: "Security vulnerabilities hidden in legacy code",
    solutionText: "Enterprise-grade security & proactive bug bounties"
  }
];

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[var(--off-white)] to-white font-sans antialiased py-12 sm:py-12 relative overflow-hidden border-t border-slate-200/70">
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]" 
           style={{ backgroundImage: 'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Story & Mission + Problems Solved */}
        <div>
          
          {/* Centered Intro Text */}
          <div className="text-center mx-auto max-w-4xl mb-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[var(--tech-blue)] rounded-full"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Our Story & Mission</span>
              <span className="w-8 h-[2px] bg-[var(--tech-blue)] rounded-full"></span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--deep-black)] leading-[1.15] mb-8">
              Engineering the Future of <span className="text-[var(--dark-blue)]">Software & Talent.</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium mx-auto">
              <p>
                At RATechnologies, we exist at the intersection of industry-leading software development and high-tier tech education. We recognized a dual need in the market: organizations require bulletproof, scalable SaaS infrastructure, and aspiring engineers need hands-on, production-level experience.
              </p>
              <p>
                We solve both. By building modular enterprise blueprints, we empower businesses to scale securely. Simultaneously, our immersive academy tracks bring students directly into the fold, transforming them into cloud, security, and development experts ready for the modern workforce.
              </p>
            </div>
          </div>

          {/* Problem / Solution Grid Inline Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {challengesData.map((challenge) => (
              <div key={challenge.id} className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col text-left">
                {/* Problem */}
                <div className="flex items-start gap-4 flex-grow">
                  {challenge.problemIcon}
                  <p className="text-[13.5px] sm:text-sm font-semibold text-slate-800 leading-snug pt-1">{challenge.problemText}</p>
                </div>
                
                {/* Arrow Indicator */}
                <div className="flex justify-center my-4">
                  <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                
                {/* Solution */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 border border-green-100">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[13.5px] sm:text-sm font-medium text-slate-600 leading-snug pt-1">{challenge.solutionText}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;