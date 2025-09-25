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

  // These values determine how much slower the elements move relative to the scroll.
  // A smaller factor means they move less.
  // For a classic parallax effect where background elements move slower than foreground:
  // - An element starting at the top should move DOWN as you scroll DOWN (positive translateY).
  // - An element starting at the bottom should move UP as you scroll DOWN (negative translateY).
  const parallaxFactorTopLeft = 0.1; // Top-left flower moves down 10% of scroll distance
  const parallaxFactorBottomRight = 0.15; // Bottom-right flower moves up 15% of scroll distance

  return (
    <>
      {/* Top-Left Flower: Moves DOWN slowly as user scrolls DOWN */}
      <div
        className="fixed top-1/4 left-4 z-0 opacity-70 hidden md:block pointer-events-none"
        style={{ transform: `translateY(${scrollY * parallaxFactorTopLeft}px)` }}
      >
        <Flower size={64} className="text-emerald-400" /> {/* Changed text-rose-300 to text-emerald-400 */}
      </div>

      {/* Bottom-Right Flower: Moves UP slowly as user scrolls DOWN */}
      <div
        className="fixed bottom-1/4 right-4 z-0 opacity-70 hidden md:block pointer-events-none"
        style={{ transform: `translateY(-${scrollY * parallaxFactorBottomRight}px)` }}
      >
        <Flower size={64} className="text-emerald-400" /> {/* Changed text-rose-300 to text-emerald-400 */}
      </div>
    </>
  );
};

export default ScrollParallaxElements;