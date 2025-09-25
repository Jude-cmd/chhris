"use client";

import React from 'react';

const MovingFlowers: React.FC = () => {
  const flowerClasses = "absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-rose-200 opacity-70 blur-sm animate-float z-0";

  return (
    <>
      {/* Top-Left Flower */}
      <div className={`${flowerClasses} top-4 left-4 animate-delay-100`}></div>
      {/* Top-Right Flower */}
      <div className={`${flowerClasses} top-4 right-4 animate-delay-200`}></div>
      {/* Bottom-Left Flower */}
      <div className={`${flowerClasses} bottom-4 left-4 animate-delay-300`}></div>
      {/* Bottom-Right Flower */}
      <div className={`${flowerClasses} bottom-4 right-4 animate-delay-400`}></div>
    </>
  );
};

export default MovingFlowers;