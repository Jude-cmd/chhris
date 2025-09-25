"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Mail, Phone, MapPin } from "lucide-react";
import SidebarActionButton from "@/components/SidebarActionButton"; // Import the new button component

interface ContactUsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactUsSidebar: React.FC<ContactUsSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800 p-6 overflow-y-auto">
        <SheetHeader className="mb-6 text-center">
          <SheetTitle className="text-3xl font-bold text-rose-800">Contact Clear Wonders</SheetTitle>
          <SheetDescription className="text-rose-600 text-lg italic">
            We'd love to hear from you!
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-rose-700" />
            <p>Email: <a href="mailto:majzbusiness@gmail.com" className="text-blue-600 hover:underline">majzbusiness@gmail.com</a></p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-rose-700" />
            <p>Phone 1: <a href="tel:+2348099993355" className="text-blue-600 hover:underline">08099993355</a></p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6 text-rose-700" />
            <p>Phone 2: <a href="tel:+2348033210309" className="text-blue-600 hover:underline">08033210309</a></p>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-6 w-6 text-rose-700 flex-shrink-0 mt-1" />
            <p>Address: 123 Beauty Lane, Skincare City, BW 54321</p>
          </div>
          <p className="mt-8 text-center text-md text-gray-600">
            Our customer service team is available Monday to Saturday, 9 AM - 6 PM.
          </p>
        </div>
        <SidebarActionButton label="Get in Touch" onClick={onClose} /> {/* Added the moving button */}
      </SheetContent>
    </Sheet>
  );
};

export default ContactUsSidebar;