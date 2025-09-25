"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MovingFlowers from "@/components/MovingFlowers";
import { ArrowRight } from "lucide-react"; // Import the ArrowRight icon

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 relative overflow-hidden">
      <MovingFlowers />
      <div className="text-center z-10">
        <img
          src="/clear-wonders-logo.png"
          alt="Clear Wonders Skin Care Logo"
          className="mx-auto mb-8 h-48 w-auto"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Clear Wonders Skin Care</h1>
        <p className="text-xl italic font-normal text-gray-700 dark:text-gray-300 mb-8">
          "Where beauty begins with the skin"
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"> {/* Added mb-8 for spacing */}
          <Link to="/cream">
            <Button className="px-6 py-3 text-lg bg-rose-500 hover:bg-rose-600 text-white animate-float">
              Click Here
            </Button>
          </Link>
          <ArrowRight className="h-6 w-6 text-rose-600 animate-pulse" /> {/* Arrow icon */}
          <Link to="/cream">
            <Button className="px-6 py-3 text-lg bg-rose-600 hover:bg-rose-700 text-white">
              Explore the World of Astonishing products
            </Button>
          </Link>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">Created by Jude</p> {/* Added "Created by Jude" */}
      </div>
    </div>
  );
};

export default Index;