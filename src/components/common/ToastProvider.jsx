// src/components/common/ToastProvider.jsx
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-[9999] pointer-events-none mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-end">
      <style>{`
        /* Override react-hot-toast default container top offsets */
        .react-hot-toast-container {
          position: relative !important;
          top: 0.7rem !important;
          pointer-events: none;
        }

        /* Clear internal margin added by the library to move toast higher */
        .react-hot-toast-container > div {
          pointer-events: auto;
          max-width: none !important;
          margin-top: 0 !important;
        }

        /* Desktop: keep single line */
        .react-hot-toast-container [role="status"] {
          white-space: nowrap !important;
        }

        /* Mobile (≤ 640px): shrink-wrap and center at top */
        @media (max-width: 640px) {
          .react-hot-toast-container {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          .react-hot-toast-container > div {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }

          .react-hot-toast-container [role="status"] {
            white-space: normal !important;
            word-break: normal !important;
            width: auto !important;
            max-width: calc(100vw - 2.5rem) !important;
            box-sizing: border-box !important;
            margin: 0 auto !important;
          }
        }
      `}</style>

      <Toaster
        position="top-right"
        containerClassName="react-hot-toast-container"
        containerStyle={{
          top: 0,
          position: 'relative',
        }}
        toastOptions={{
          duration: 4000,
          style: {
            pointerEvents: 'auto',
            background: '#0f172a',
            color: '#f8fafc',
            border: '1px solid #1e293b',
            borderRadius: '0.75rem',
            padding: '12px 16px',
            fontSize: '0.875rem',
            fontWeight: '500',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -4px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: 'none',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#0f172a',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#0f172a',
            },
          },
        }}
      />
    </div>
  );
};

export default ToastProvider;