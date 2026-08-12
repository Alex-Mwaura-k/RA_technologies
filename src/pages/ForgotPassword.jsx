// src/pages/ForgotPassword.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SharedBackground from '../components/layout/SharedBackground';
import logo from '../assets/logo.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Forgot Password | RAtechnologies";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your API call here to send the reset email
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <SharedBackground>
      <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-5 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200">
          
          <div className="text-center">
            <Link to="/" className="inline-block mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-full transition-transform hover:scale-105">
              <img 
                src={logo} 
                alt="RA Technologies Logo" 
                className="w-12 h-12 object-cover rounded-full mx-auto shadow-sm border-2 border-slate-100"
              />
            </Link>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[var(--deep-black)] mb-1 tracking-tight">
              Reset Password
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium px-2">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/50 border border-slate-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--tech-blue)] focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-white bg-[var(--deep-black)] hover:bg-slate-800 transition-all shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="mt-4 sm:mt-6 bg-emerald-50 border border-emerald-100 rounded-lg p-5 text-center shadow-sm">
              <svg className="w-10 h-10 text-emerald-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-bold text-emerald-800 mb-1">Check your email</h3>
              <p className="text-xs text-emerald-600 leading-relaxed">
                We've sent a password reset link to <br/>
                <strong className="font-semibold">{email}</strong>
              </p>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <Link 
              to="/login" 
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--tech-blue)] hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </SharedBackground>
  );
};

export default ForgotPassword;