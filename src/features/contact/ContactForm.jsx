import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName.trim()) {
      toast.error('Please enter your first name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      toast.error('Please enter your message or inquiry.');
      return;
    }

    // Trigger non-wrapping custom toast matching design tokens
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } flex items-center gap-3 bg-slate-900 text-white border border-slate-800 px-4 py-3 rounded-xl shadow-lg pointer-events-auto whitespace-nowrap max-w-[calc(100vw-2rem)] sm:max-w-none`}
      >
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-slate-950 font-bold text-xs flex-shrink-0">
          ✓
        </div>
        <span className="text-sm font-medium">
          Thank you! Your inquiry has been submitted successfully.
        </span>
      </div>
    ));

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Updated Heading Section matching the reference image */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-2 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500">
            <span className="w-8 md:w-12 h-[2px] bg-blue-600/40 rounded-full"></span>
            GET IN TOUCH
            <span className="w-8 md:w-12 h-[2px] bg-blue-600/40 rounded-full"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--deep-black)] leading-tight">
            Initialize <span className="text-[var(--dark-blue)]">Contact.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to scale your infrastructure or start your engineering journey? Reach out to our team.
          </p>
        </div>

        {/* Card container spanning the full available width up to 1300px */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side: Dimmed Image */}
          <div className="relative w-full lg:w-5/12 min-h-[300px] lg:min-h-full flex-shrink-0">
            {/* Dark overlay for the dimming effect */}
            <div className="absolute inset-0 bg-slate-900/60 z-10 mix-blend-multiply"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="Engineering Team Collaboration" 
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            
            <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-3">Let's build something great.</h3>
              <p className="text-slate-200 font-medium leading-relaxed">
                Whether you need to architect a new payment ledger or optimize your current stack, our team of principal engineers is here to help.
              </p>
            </div>
          </div>

          {/* Right Side: Form Inputs */}
          <div className="w-full lg:w-7/12 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Rivera"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message or Inquiry</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="How can we help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
              >
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;