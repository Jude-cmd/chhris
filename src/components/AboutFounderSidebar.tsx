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
      <SheetContent side="left" className="w-full sm:max-w-md bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800 p-6">
        <SheetHeader className="mb-6 text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4 border-4 border-rose-300 shadow-md">
            <AvatarImage src="/placeholder.svg" alt="Founder's Avatar" />
            <AvatarFallback className="bg-rose-200 text-rose-800 text-xl font-semibold">CW</AvatarFallback>
          </Avatar>
          <SheetTitle className="text-3xl font-bold text-rose-800">About the Founder</SheetTitle>
          <SheetDescription className="text-rose-600 text-lg italic">
            The Visionary Behind Clear Wonders
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Welcome to Clear Wonders! My journey began with a deep passion for natural beauty and a commitment to creating skincare products that truly make a difference. I believe that everyone deserves to feel confident and radiant in their own skin.
          </p>
          <p>
            Years of research, dedication, and a touch of magic went into formulating our signature Clear Wonders Cream. My goal was to harness the power of nature to deliver effective, gentle, and luxurious skincare solutions.
          </p>
          <p>
            It brings me immense joy to share these creations with you. Thank you for being a part of the Clear Wonders family. Here's to healthy, glowing skin!
          </p>
          <p className="text-right font-semibold text-rose-700">
            — With love, The Founder
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutFounderSidebar;