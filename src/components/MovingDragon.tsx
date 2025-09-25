"use client";

import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react'; // Using Sparkles as a placeholder for a dragon

const MovingDragon: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Check if the animation has already played in this session
    const sessionKey = 'dragonAnimationPlayed';
    if (sessionStorage.getItem(sessionKey)) {
      setHasAnimated(true); // If played, don't show again
      return;
    }

    // If not played, set a timeout to mark it as played after animation duration
    const animationDuration = 5000; // Matches the CSS animation duration
    const timer = setTimeout(() => {
      setHasAnimated(true);
      sessionStorage.setItem(sessionKey, 'true');
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  if (hasAnimated) return null; // Don't render if already animated

  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 z-50 w-16 h-16 flex items-center justify-center animate-dragon-fly">
      <Sparkles size={64} className="text-purple-500" /> {/* Placeholder icon */}
    </div>
  );
};

export default MovingDragon;