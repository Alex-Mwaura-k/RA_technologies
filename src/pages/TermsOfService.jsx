// src/pages/TermsOfService.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--off-white)] font-sans antialiased relative">
      <Navbar />

      <main className="flex-grow pt-8 pb-16 relative z-10">
        
        {/* Subtle architectural grid background line from SolutionsSection */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)', 
            backgroundSize: '4rem 4rem' 
          }}
        ></div>

        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-8">
          
          {/* Header Block - Matches Privacy Policy w-full and right-aligned date */}
          <div className="mb-8 w-full">
            <div className="flex pt-8 items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Legal Agreements</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
              Terms of <span className="text-[var(--dark-blue)]">Service</span>
            </h1>

            <p className="mt-3 text-base text-slate-500 max-w-3xl leading-relaxed">
              Please read these terms carefully before using our services. By using RAtechnologies, you agree to be bound by these provisions and guidelines.
            </p>

            <p className="mt-4 text-sm text-slate-400 font-small text-right">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Policy Content Body */}
          <div className="bg-[var(--pure-white)] border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the RAtechnologies website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Description of Service</h2>
              <p>
                RAtechnologies provides users with access to a rich collection of resources, including various communications tools, forums, search services, and personalized content (the "Service"). You understand and agree that the Service is provided "AS-IS" and that RAtechnologies assumes no responsibility for the timeliness, deletion, mis-delivery, or failure to store any user communications or personalization settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. User Conduct</h2>
              <p className="mb-3">
                You agree to use the Service only for lawful purposes. You are prohibited from posting on or transmitting through the Service any material that:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[var(--tech-blue)]">
                <li>Is unlawful, threatening, abusive, harassing, defamatory, or deceptive.</li>
                <li>Infringes on any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
                <li>Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
              <p>
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of RAtechnologies or its content suppliers and protected by international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
              <p>
                You expressly understand and agree that RAtechnologies shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Modifications to Service</h2>
              <p>
                RAtechnologies reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that RAtechnologies shall not be liable to you or to any third party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of our primary operating jurisdiction, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;