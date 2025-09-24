"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="text-center">
        <img
          src="/clear-wonders-logo.png"
          alt="Clear Wonders Skin Care Logo"
          className="mx-auto mb-8 h-48 w-auto"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Clear Wonders Skin Care</h1>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
          Where beauty begins with the skin
        </p>
        <Link to="/cream">
          <Button className="px-6 py-3 text-lg bg-rose-600 hover:bg-rose-700 text-white">
            Explore the World of Cream
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;