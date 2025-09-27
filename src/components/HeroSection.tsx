"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Leaf } from "lucide-react"; // Added Leaf icon

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 bg-background text-center overflow-hidden rounded-xl shadow-2xl mb-12"> {/* Reverted mb-8 to mb-12 */}
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Leaf className="absolute top-1/4 left-1/4 h-24 w-24 text-muted-foreground animate-float animate-delay-100" />
        <Sparkles className="absolute bottom-1/3 right-1/4 h-20 w-20 text-muted-foreground animate-float animate-delay-200" />
        <Leaf className="absolute top-1/2 right-1/3 h-28 w-28 text-muted-foreground animate-float animate-delay-300" />
        <Sparkles className="absolute bottom-1/4 left-1/3 h-16 w-16 text-muted-foreground animate-float animate-delay-400" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
          Unveil Your Natural Radiance with Clear Wonders
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 font-light">
          Discover authentic beauty products crafted with love and inspired by natural wellness.
        </p>
        <Link to="/cream">
          <Button className="px-8 py-4 text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore Our Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;