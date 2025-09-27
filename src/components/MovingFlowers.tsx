"use client";

import React from "react";
import { Sparkles, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface MovingFlowersProps {
  className?: string;
}

const MovingFlowers: React.FC<MovingFlowersProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}>
      <Leaf className="absolute top-[10%] left-[5%] h-16 w-16 text-rose-200 opacity-70 animate-float animate-delay-100" />
      <Sparkles className="absolute top-[20%] right-[10%] h-12 w-12 text-yellow-300 opacity-80 animate-float animate-delay-200" />
      <Leaf className="absolute bottom-[15%] left-[15%] h-20 w-20 text-rose-200 opacity-60 animate-float animate-delay-300" />
      <Sparkles className="absolute bottom-[5%] right-[20%] h-10 w-10 text-yellow-300 opacity-90 animate-float animate-delay-400" />
      <Leaf className="absolute top-[30%] right-[25%] h-18 w-18 text-rose-200 opacity-75 animate-float animate-delay-200" />
      <Sparkles className="absolute bottom-[25%] left-[30%] h-14 w-14 text-yellow-300 opacity-85 animate-float animate-delay-100" />
    </div>
  );
};

export default MovingFlowers;