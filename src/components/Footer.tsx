"use client";

import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-rose-200 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {currentYear} Clear Wonders. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/cream" className="hover:text-primary transition-colors">
            Products
          </Link>
          {/* Add more links here if needed, e.g., About Us, Contact Us */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;