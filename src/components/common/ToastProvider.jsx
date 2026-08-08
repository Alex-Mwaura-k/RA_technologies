// src/components/common/ToastProvider.jsx
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <div className="fixed top-4 inset-x-0 z-[9999] pointer-events-none mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 flex justify-end">
      <style>{`
        /* Force react-hot-toast container nodes to fit text content */
        .react-hot-toast-container > div {
          max-width: max-content !important;
          width: auto !important;
        }
        
        /* Stop text content wrapper from forcing breaks */
        .react-hot-toast-container [role="status"] {
          max-width: max-content !important;
          white-space: nowrap !important;
        }

        /* Allow normal wrapping only on small screens */
        @media (max-width: 640px) {
          .react-hot-toast-container [role="status"] {
            white-space: normal !important;
            max-width: calc(100vw - 2rem) !important;
          }
        }
      `}</style>

      <Toaster
        position="top-right"
        containerClassName="react-hot-toast-container"
        containerStyle={{
          position: 'relative',
        }}
        toastOptions={{
          duration: 4000,
          style: {
            pointerEvents: 'auto',
            background: '#0f172a',
            color: '#fff',
            border: '1px solid #1e293b',
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
            maxWidth: 'max-content',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
};

export default ToastProvider;