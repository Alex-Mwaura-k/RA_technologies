import React, { useState, useEffect, useRef } from 'react';

// Custom Hook to trigger animation when the component scrolls into view
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when it enters the screen
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
};

// The Animated Stat Component
const AnimatedStat = ({ value }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [count, setCount] = useState(0);

  // Extract numeric and non-numeric parts (e.g., "99.99%" -> 99.99 and "%", "10M+" -> 10 and "M+")
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');
  const isFloat = value.includes('.');

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 30; // ms per frame
    const steps = duration / incrementTime;
    const increment = numericValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  // Format the output to keep decimals if the original number had them
  const displayCount = isFloat ? count.toFixed(2) : Math.floor(count);

  return (
    <span ref={ref} className="opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}>
      {displayCount}{suffix}
    </span>
  );
};