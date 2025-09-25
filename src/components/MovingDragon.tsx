"use client";

import React from 'react';
import { Sparkles } from 'lucide-react'; // Using Sparkles as a placeholder for a dragon

const MovingDragon: React.FC = () => {
  // Temporarily removed the one-time animation logic for debugging purposes.
  // The dragon should now appear and animate every time the CreamPage loads.

  return (
    <div className="absolute top-1/2 left-0 -translate-y-1/2 z-50 w-24 h-24 flex items-center justify-center animate-dragon-fly"> {/* Increased size to w-24 h-24 */}
      <Sparkles size={96} className="text-yellow-400 animate-pulse" /> {/* Increased size to 96 and changed color to bright yellow with pulse */}
    </div>
  );
};

export default MovingDragon;