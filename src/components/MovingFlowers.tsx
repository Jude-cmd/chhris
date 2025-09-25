"use client";

import React from 'react';
import { Flower } from 'lucide-react'; // Importing the Flower icon

const MovingFlowers: React.FC = () => {
  const flowerClasses = "absolute text-rose-400 opacity-80 animate-float z-0"; // Adjusted classes for icon

  return (
    <>
      {/* Top-Left Flower */}
      <Flower size={48} className={`${flowerClasses} top-4 left-4 animate-delay-100`} />
      {/* Top-Right Flower */}
      <Flower size={48} className={`${flowerClasses} top-4 right-4 animate-delay-200`} />
      {/* Bottom-Left Flower */}
      <Flower size={48} className={`${flowerClasses} bottom-4 left-4 animate-delay-300`} />
      {/* Bottom-Right Flower */}
      <Flower size={48} className={`${flowerClasses} bottom-4 right-4 animate-delay-400`} />
    </>
  );
};

export default MovingFlowers;