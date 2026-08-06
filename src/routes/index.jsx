import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Solutions from '../pages/Solutions';
import Academy from '../pages/Academy';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import ScrollToTop from '../components/floating/ScrollToTop';
import ChatbotButton from '../components/floating/ChatbotButton';

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <ScrollToTop />
      <ChatbotButton />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/solutions',
        element: <Solutions />,
      },
      {
        path: '/academy',
        element: <Academy />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/blog/:id',
        element: <BlogPost />, 
      },
    ]
  },
  {
    path: '*',
    element: (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--off-white)] text-[var(--deep-black)] font-sans antialiased px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--tech-blue)] bg-blue-50 border border-blue-200 px-3 py-1 rounded-md mb-4">
          Error 404
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[var(--deep-black)]">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-slate-600 max-w-md leading-relaxed">
          The route or publication you are looking for doesn't exist or may have been relocated.
        </p>
        <a 
          href="/" 
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[var(--deep-black)] rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm"
        >
          Return Home &rarr;
        </a>
      </div>
    ),
  },
]);