"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";
import FeaturedProductsCarousel from "@/components/FeaturedProductsCarousel";
import HeroSection from "@/components/HeroSection";
import MovingFlowers from "@/components/MovingFlowers"; // Restored import

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 relative overflow-hidden pt-14">
      <MovingFlowers /> {/* Restored MovingFlowers component */}
      <div className="text-center z-10 relative">
        <img
          src="/clear-wonders-logo.png"
          alt="Clear Wonders Skin Care Logo"
          className="mx-auto mb-8 h-48 w-auto"
        />
        
        <h1 className="text-4xl font-bold mb-4">Welcome to Clear Wonders Skin Care</h1>
        <p className="text-xl italic font-normal text-gray-700 dark:text-gray-300 mb-8">
          "Where beauty begins with the skin"
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/cream">
            <Button className="px-6 py-3 text-lg bg-rose-500 hover:bg-rose-600 text-white animate-float">
              Click Here
            </Button>
          </Link>
          <ArrowRight className="h-6 w-6 text-rose-600 animate-pulse" />
          <Link to="/cream">
            <Button className="px-6 py-3 text-lg bg-rose-600 hover:bg-rose-700 text-white">
              Explore the World of Astonishing products
            </Button>
          </Link>
        </div>
        <NewsletterSignup />
      </div>
      <HeroSection />
      <FeaturedProductsCarousel />
      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-8">Created by Jude</p>
    </div>
  );
};

export default Index;