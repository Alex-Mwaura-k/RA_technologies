import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is available and send pageview on route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XE3QPHVN5Q', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component does not render anything visually
};

export default AnalyticsTracker;