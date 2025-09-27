"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AboutFounderSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutFounderSidebar: React.FC<AboutFounderSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md bg-background text-foreground p-6 overflow-y-auto">
        <SheetHeader className="mb-6 text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-primary shadow-md">
            <AvatarImage src="/founder-photo.jpg" alt="Aaisha Musa Adiele's Avatar" />
            <AvatarFallback className="bg-secondary text-secondary-foreground text-xl font-semibold">AM</AvatarFallback>
          </Avatar>
          <SheetTitle className="text-3xl font-bold text-foreground">About Our Founder, Aaisha Musa Adiele</SheetTitle>
          <SheetDescription className="text-muted-foreground text-lg italic">
            The Heart and Vision Behind Clear Wonders
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            Welcome to Clear Wonders! Our story is deeply rooted in the unwavering love and dedication of our founder, Aaisha Musa Adiele. For years, Aaisha poured her heart into caring for her beloved family, nurturing not just her own children, but every member of her extended family with boundless warmth and devotion.
          </p>
          <p>
            It was during these precious years, while tending to the needs of her loved ones, that Aaisha discovered a profound passion for natural wellness and beauty. She realized that true care begins with the skin, and she dreamed of creating products that would bring comfort, confidence, and a touch of wonder to everyone.
          </p>
          <p>
            With this vision, and inspired by the radiant smiles of her family, Aaisha embarked on a journey of research and meticulous formulation. She harnessed the purest ingredients and her innate understanding of care to bring Clear Wonders to life. Each product is a testament to her nurturing spirit and her belief that everyone deserves to feel cherished and beautiful.
          </p>
          <p className="text-right font-semibold text-primary">
            — With love and care, Aaisha Musa Adiele
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutFounderSidebar;