"use client";

import React from "react";
import { Sparkles, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollParallaxElementsProps {
  className?: string;
}

const ScrollParallaxElements: React.FC<ScrollParallaxElementsProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}>
      {/* Example elements, adjust positions and animations as needed */}
      <Leaf className="absolute top-[5%] left-[10%] h-20 w-20 text-rose-200 opacity-50 animate-float animate-delay-100" style={{ transform: 'translateY(calc(var(--scroll) * 0.1px))' }} />
      <Sparkles className="absolute top-[15%] right-[5%] h-16 w-16 text-yellow-300 opacity-60 animate-float animate-delay-200" style={{ transform: 'translateY(calc(var(--scroll) * 0.05px))' }} />
      <Leaf className="absolute bottom-[10%] left-[20%] h-24 w-24 text-rose-200 opacity-40 animate-float animate-delay-300" style={{ transform: 'translateY(calc(var(--scroll) * 0.15px))' }} />
      <Sparkles className="absolute bottom-[20%] right-[15%] h-12 w-12 text-yellow-300 opacity-70 animate-float animate-delay-400" style={{ transform: 'translateY(calc(var(--scroll) * 0.08px))' }} />
    </div>
  );
};

export default ScrollParallaxElements;