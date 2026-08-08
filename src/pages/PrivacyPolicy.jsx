// src/pages/PrivacyPolicy.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
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
          
          {/* Header Block - Changed from max-w-4xl to w-full so the date can float to the edge */}
          <div className="mb-8 w-full">
            <div className="flex pt-8 items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[var(--tech-blue)]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Legal Compliance</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
              Privacy <span className="text-[var(--dark-blue)]">Policy</span>
            </h1>

            <p className="mt-3 text-base text-slate-500 max-w-3xl leading-relaxed">
              At RAtechnologies, we respect your privacy and are committed to protecting your personal data. Review how we collect, process, and safeguard your information.
            </p>

            <p className="mt-4 text-sm text-slate-400 font-small text-right">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Policy Content Body */}
          <div className="bg-[var(--pure-white)] border border-slate-200 rounded-xl p-6 sm:p-10 shadow-sm space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Introduction</h2>
              <p>
                At RAtechnologies, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. The Data We Collect About You</h2>
              <p className="mb-3">
                Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[var(--tech-blue)]">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. How We Use Your Personal Data</h2>
              <p className="mb-3">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[var(--tech-blue)]">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Your Legal Rights</h2>
              <p className="mb-3">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-[var(--tech-blue)]">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us via our Contact page or directly email us at our designated support email address.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;