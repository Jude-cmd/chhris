"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const GalleryImageModal: React.FC<GalleryImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 border-none bg-transparent">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
        />
      </DialogContent>
    </Dialog>
  );
};

export default GalleryImageModal;