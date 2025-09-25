"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAbout, onOpenContact }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <img src="/clear-wonders-logo.png" alt="Clear Wonders Logo" className="h-8 w-auto" />
          <span className="hidden font-bold sm:inline-block text-foreground">Clear Wonders</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/cream" className="text-sm font-medium transition-colors hover:text-primary">
            Products
          </Link>
          <Button variant="ghost" onClick={onOpenAbout} className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Button>
          <Button variant="ghost" onClick={onOpenContact} className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[200px] sm:w-[240px] flex flex-col">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src="/clear-wonders-logo.png" alt="Clear Wonders Logo" className="h-8 w-auto" />
                <span className="font-bold text-foreground">Clear Wonders</span>
              </Link>
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
                <Link to="/cream" className="hover:text-primary">
                  Products
                </Link>
                <Button variant="ghost" onClick={onOpenAbout} className="justify-start px-0 hover:text-primary">
                  About Us
                </Button>
                <Button variant="ghost" onClick={onOpenContact} className="justify-start px-0 hover:text-primary">
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;