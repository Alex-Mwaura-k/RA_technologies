// src/App.jsx (or RootLayout.jsx)
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import ToastProvider from './components/common/ToastProvider';

function App() {
  return (
    <>
      <ToastProvider />
      <RouterProvider router={router} />
    </>
  );
}

export default App;