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
      <SheetContent side="left" className="w-full sm:max-w-md bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800 p-6 overflow-y-auto"> {/* Added overflow-y-auto */}
        <SheetHeader className="mb-6 text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-rose-300 shadow-md">
            <AvatarImage src="/placeholder.svg" alt="Aisha Musa's Avatar" />
            <AvatarFallback className="bg-rose-200 text-rose-800 text-xl font-semibold">AM</AvatarFallback>
          </Avatar>
          <SheetTitle className="text-3xl font-bold text-rose-800">About Our Founder, Aisha Musa</SheetTitle>
          <SheetDescription className="text-rose-600 text-lg italic">
            The Heart and Vision Behind Clear Wonders
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Welcome to Clear Wonders! Our story is deeply rooted in the unwavering love and dedication of our founder, Aisha Musa. For years, Aisha poured her heart into caring for her beloved family, nurturing not just her own children, but every member of her extended family with boundless warmth and devotion.
          </p>
          <p>
            It was during these precious years, while tending to the needs of her loved ones, that Aisha discovered a profound passion for natural wellness and beauty. She realized that true care begins with the skin, and she dreamed of creating products that would bring comfort, confidence, and a touch of wonder to everyone.
          </p>
          <p>
            With this vision, and inspired by the radiant smiles of her family, Aisha embarked on a journey of research and meticulous formulation. She harnessed the purest ingredients and her innate understanding of care to bring Clear Wonders to life. Each product is a testament to her nurturing spirit and her belief that everyone deserves to feel cherished and beautiful.
          </p>
          <p className="text-right font-semibold text-rose-700">
            — With love and care, Aisha Musa
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutFounderSidebar;