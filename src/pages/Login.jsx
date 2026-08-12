import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import SharedBackground from '../components/layout/SharedBackground';
import logo from '../assets/logo.png'; 

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!formData.password.trim()) {
      toast.error('Please enter your password.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Successfully logged in! Welcome back.');
      navigate('/');
    }, 1500);
  };

  return (
    <SharedBackground>
      <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-5 bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 max-h-[95vh] overflow-y-auto">
          
          <div className="text-center">
            <Link to="/" className="inline-block mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-full transition-transform hover:scale-105">
              <img 
                src={logo} 
                alt="RA Technologies Logo" 
                className="w-12 h-12 object-cover rounded-full mx-auto shadow-sm border-2 border-slate-100"
              />
            </Link>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
              Please enter your details to sign in.
            </p>
          </div>

          <form className="mt-4 sm:mt-6 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-slate-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[var(--tech-blue)] focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="alex@company.com"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700">
                    Password
                  </label>
                  <Link to="#" className="text-[11px] sm:text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                    Forgot password?
                  </Link>
                </div>
                
                {/* Wrapped Input in a relative container */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    // Added pr-10 to prevent text from going under the icon
                    className="w-full bg-white/50 border border-slate-300 rounded-lg px-3 py-2 sm:py-2.5 pr-10 text-sm text-slate-900 focus:outline-none focus:border-[var(--tech-blue)] focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="••••••••"
                    disabled={isSubmitting}
                  />
                  
                  {/* Conditional rendering: only show button if password length > 0 */}
                  {formData.password.length > 0 && (
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        // Eye Slash Icon (Hide)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        // Eye Icon (Show)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  )}
                </div>

              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-semibold text-white bg-[var(--deep-black)] hover:bg-slate-800 transition-all shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="text-center text-xs sm:text-sm text-slate-600 font-medium mt-4 pt-4 border-t border-slate-100">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[var(--tech-blue)] hover:text-blue-700 font-bold transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </SharedBackground>
  );
};

export default Login;