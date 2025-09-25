"use client";

import React, { useEffect, useState } from 'react';
import { Flower } from 'lucide-react';

const ScrollParallaxElements: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // These values determine how much slower/faster the elements move relative to the scroll
  const parallaxSpeedLeft = 0.2; // Moves 20% of the scroll speed
  const parallaxSpeedRight = 0.3; // Moves 30% of the scroll speed

  return (
    <>
      {/* Left side element */}
      <div
        className="fixed top-1/4 left-4 z-0 opacity-70 hidden md:block pointer-events-none"
        style={{ transform: `translateY(${scrollY * parallaxSpeedLeft}px)` }}
      >
        <Flower size={64} className="text-rose-300" />
      </div>

      {/* Right side element */}
      <div
        className="fixed top-3/4 right-4 z-0 opacity-70 hidden md:block pointer-events-none"
        style={{ transform: `translateY(${scrollY * parallaxSpeedRight}px)` }}
      >
        <Flower size={64} className="text-rose-300" />
      </div>
    </>
  );
};

export default ScrollParallaxElements;