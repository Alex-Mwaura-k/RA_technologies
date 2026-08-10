// src/features/solutions/SolutionsSection.jsx
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const solutionsData = [
  {
    id: 'asset-inventory',
    icon: (
      <svg className="w-6 h-6 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Dynamic Asset & Inventory',
    description: 'Whether managing real estate parcels, physical stock, or digital items, our flexible schemas handle state tracking, item valuation, and assignment effortlessly.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time availability tracking',
      'Custom metadata tagging & filtering',
      'Batch item uploads & AI profiling',
      'Automatic state-change triggers'
    ]
  },
  {
    id: 'payments-ledger',
    icon: (
      <svg className="w-6 h-6 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Unified Payment Ledgers',
    description: 'Secure transaction pipelines supporting direct Mobile Money (M-Pesa STK Push), cards, automated invoicing, and complex installment/payment schedules.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    features: [
      'M-Pesa & Bank API integrations',
      'Automated KRA / Tax compliance',
      'Installment tracking & billing engines',
      'Split-payment & escrow architecture'
    ]
  },
  {
    id: 'analytics-bi',
    icon: (
      <svg className="w-6 h-6 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-Time BI Dashboards',
    description: 'Transform database transactions into actionable operational insight with highly visible financial charts, trend predictions, and downloadable custom audits.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    features: [
      'Profitability & margin forecasting',
      'Custom filter report exporters (PDF/CSV)',
      'Sales rep & branch performance trackers',
      'Automated daily/weekly email digests'
    ]
  },
  {
    id: 'comms-engine',
    icon: (
      <svg className="w-6 h-6 text-[var(--tech-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Communication Matrix',
    description: 'Keep your customers engaged right where they are. Instant automated notifications trigger across multiple channels instantly upon status updates.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    features: [
      'Bulk SMS marketing & notifications',
      'WhatsApp Business API integration',
      'Transactional email workflows',
      'Automated billing & renewal alerts'
    ]
  }
];

const SolutionsSection = ({ isHomePage = false }) => {
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
    <section id="solutions" className="bg-[var(--off-white)] font-sans antialiased py-16 border-t border-slate-200 relative">
      
      {/* Very subtle architectural grid background line */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      ></div>

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Enterprise Header Section - Left Aligned */}
        <div className={`mb-12 ${isHomePage ? 'max-w-2xl' : 'border-b border-slate-200 pb-8 max-w-4xl'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Architecture Components</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
            Enterprise <span className="text-[var(--dark-blue)]">SaaS Blueprints</span>
          </h2>

          {!isHomePage && (
            <p className="mt-3 text-lg text-slate-500 max-w-3xl leading-relaxed">
              We build modular, resilient backbones engineered to scale. From asset management to multi-channel notifications, our features deploy seamlessly into any industrial sector.
            </p>
          )}
        </div>

        {/* CONDITIONAL RENDER */}
        {isHomePage ? (
          
          /* --- HOME PAGE: CLEAN, PROFESSIONAL GRID --- */
          /* Limited to 8 cards maximum */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.slice(0, 8).map((sol) => (
              <Link 
                key={sol.id} 
                to={`/solutions#${sol.id}`}
                className="group bg-[var(--pure-white)] border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col h-full cursor-pointer text-left" 
              >
                {/* Crisp Header Image */}
                <div className="h-44 overflow-hidden relative bg-slate-100 border-b border-slate-100">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Icon Overlaid on Image Top Right */}
                  <div className="absolute top-3 right-3 z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm group-hover:bg-blue-50 transition-colors">
                    {sol.icon}
                  </div>
                </div>
                
                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[var(--deep-black)] tracking-tight mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {sol.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        ) : (

          /* --- DETAILED LAYOUT FOR SOLUTIONS PAGE --- */
          <div className="space-y-8">
            {solutionsData.slice(0, 8).map((sol) => (
              <div id={sol.id} key={sol.id} className="bg-[var(--pure-white)] border border-slate-200 rounded-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start shadow-sm hover:shadow-md transition-shadow duration-300 text-left scroll-mt-24">
                
                {/* Left Column: Module Description */}
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50/50 border border-blue-100/50 mb-5">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--deep-black)] tracking-tight">{sol.title}</h3>
                  <p className="text-slate-500 mt-3 text-sm leading-relaxed">{sol.description}</p>
                </div>
                
                {/* Right Column: Key Deliverables Panel */}
                <div className="lg:col-span-2 bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5 border-b border-slate-200 pb-3">
                    Core Technical Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {sol.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-[var(--tech-blue)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Action Button - Exclusively Centered and Always Rendered */}
        {isHomePage && (
          <div className="mt-12 flex justify-center w-full">
            <Link className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors duration-200" to="/solutions">
              Explore Full Capabilities
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

export default SolutionsSection;