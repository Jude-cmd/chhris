"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Mail, Phone, MapPin, Instagram } from "lucide-react"; // Import Instagram icon

interface ContactUsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsSidebar: React.FC<ContactUsSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background text-foreground p-6 overflow-y-auto">
        <SheetHeader className="mb-6 text-center">
          <SheetTitle className="text-3xl font-bold text-foreground">Contact Clear Wonders</SheetTitle>
          <SheetDescription className="text-muted-foreground text-lg italic">
            We'd love to hear from you!
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-primary" />
            <p>Email: <a href="mailto:majzbusiness@gmail.com" className="text-blue-600 hover:underline">majzbusiness@gmail.com</a></p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-primary" />
            <p>Phone 1: <a href="tel:+2348099993355" className="text-blue-600 hover:underline">08099993355</a></p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-primary" />
            <p>Phone 2: <a href="tel:+2348033210309" className="text-blue-600 hover:underline">08033210309</a></p>
          </div>
          {/* New Instagram Link */}
          <div className="flex items-center space-x-3">
            <Instagram className="h-6 w-6 text-primary" />
            <p>Instagram: <a href="https://www.instagram.com/aaishaswondersandcloset" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@Aaisha’s wonders and closet</a></p>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <p>Address: 123 Beauty Lane, Skincare City, BW 54321</p>
          </div>
          <p className="mt-8 text-center text-muted-foreground text-md">
            Our customer service team is available Monday to Saturday, 9 AM - 6 PM.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactUsSidebar;