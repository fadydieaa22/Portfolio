import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let timeoutId;
    let finished = false;
    
    // Progress bar animation (0 to 100 over 3 seconds) with easing
    const duration = 3000; // 3 seconds
    const startTime = Date.now();
    
    // Easing function: starts fast, slows down at the end
    const easeOutQuart = (x) => {
      return 1 - Math.pow(1 - x, 4);
    };
    
    const animate = () => {
      if (finished) return;
      
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 to 1
      
      // Apply easing function
      const easedProgress = easeOutQuart(progress);
      const currentProgress = easedProgress * 100;
      
      setProgress(currentProgress);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        // Wait a bit after reaching 100% then call onFinish
        timeoutId = setTimeout(() => {
          if (!finished) {
            finished = true;
            onFinish?.();
          }
        }, 300);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      finished = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-bg loader-fade-in overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative flex flex-col items-center gap-8 w-full max-w-2xl px-8">
        {/* Animated Name */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight animate-fade-in-up">
            <span className="inline-block animate-shimmer bg-gradient-to-r from-neon-blue via-neon-purple via-neon-pink to-neon-blue bg-[length:200%_100%] text-transparent bg-clip-text">
              Fady Dieaa
            </span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase animate-fade-in-up font-light" style={{ animationDelay: '0.3s' }}>
            Full Stack Developer
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse"></div>

        {/* Enhanced Progress Bar Container */}
        <div className="w-full max-w-3xl relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {/* Outer glow container - stronger neon glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-40 blur-2xl rounded-full"></div>
          
          {/* Progress bar track */}
          <div className="relative w-full h-6 bg-dark-border/30 backdrop-blur-sm rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-2xl shadow-neon-blue/30">
            {/* Progress Bar Fill with animation */}
            <div 
              className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full relative shadow-2xl shadow-neon-purple/50"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
              
              {/* Inner glow - stronger */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink blur-md opacity-80"></div>
              
              {/* Moving light effect at the end */}
              {progress < 100 && (
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/60 to-transparent animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex gap-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
