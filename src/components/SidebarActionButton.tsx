"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SidebarActionButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const SidebarActionButton: React.FC<SidebarActionButtonProps> = ({ label, onClick, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`w-full mt-8 bg-rose-600 hover:bg-rose-700 text-white text-lg py-3 animate-float flex items-center justify-center gap-2 ${className}`}
    >
      {label} <ArrowRight className="h-5 w-5" />
    </Button>
  );
};

export default SidebarActionButton;