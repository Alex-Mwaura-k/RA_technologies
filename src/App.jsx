import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes'; // Points directly to your index.jsx definitions

function App() {
  return <RouterProvider router={router} />;
}

export default App;