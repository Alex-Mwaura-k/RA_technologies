import React, { useState, useEffect, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const ScrambleText = ({ text, speed = 40, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Setup initial state with spaces/random chars so layout doesn't jump
    setDisplayText(text.replace(/./g, ' '));

    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (!isAnimating) return;

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iterationRef.current) {
              return text[index]; // Lock in correct letter
            }
            if (letter === ' ') return ' '; // Keep spaces
            
            // Return random character
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iterationRef.current >= text.length) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
      }

      // Control how fast letters lock in. 
      // Higher divisor = slower decrypt speed relative to char flicker
      iterationRef.current += 1 / 3; 
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [isAnimating, text, speed]);

  return (
    <span className="font-mono tracking-tight">
      {displayText}
    </span>
  );
};

export default ScrambleText;