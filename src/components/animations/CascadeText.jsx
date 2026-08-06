import React from 'react';

const CascadeText = ({ text, delay = 0, speed = 30 }) => {
  const words = text.split(' ');
  let globalCharIndex = 0;

  return (
    <span className="inline-block">
      {/* Inject smooth keyframe styling */}
      <style>{`
        @keyframes cascadeUp3D {
          0% {
            opacity: 0;
            transform: translateY(110%) rotateX(-85deg);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0%) rotateX(0deg);
            filter: blur(0px);
          }
        }
      `}</style>

      {words.map((word, wordIdx) => (
        <span 
          key={wordIdx} 
          className="inline-block overflow-hidden py-1 mr-[0.28em] align-bottom"
        >
          <span className="inline-block [perspective:1000px]">
            {word.split('').map((char, charIdx) => {
              const charDelay = delay + globalCharIndex * speed;
              globalCharIndex++;

              return (
                <span
                  key={charIdx}
                  className="inline-block opacity-0 origin-bottom"
                  style={{
                    animation: 'cascadeUp3D 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: `${charDelay}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </span>
  );
};

export default CascadeText;