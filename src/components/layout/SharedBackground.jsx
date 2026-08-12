import React from 'react';

const SharedBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full h-full min-h-screen flex flex-col justify-center bg-gradient-to-t from-slate-100 via-blue-50/30 to-white overflow-hidden ${className}`}>
      
      {/* Radial Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35" 
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 2px, transparent 2px)', backgroundSize: '30px 30px' }}
      ></div>

      {/* Floating Blur Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-blue-200/50 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-0 w-[28rem] h-[28rem] bg-indigo-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-[22rem] h-[22rem] bg-[#b2f042]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none backdrop-blur-[2px]"></div>

      {/* Render Page Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
      
    </div>
  );
};

export default SharedBackground;