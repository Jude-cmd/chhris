"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, MessageSquareText } from "lucide-react";
// Removed GalleryImageModal import as it's no longer directly used here
import FAQSection from "@/components/FAQSection";
import MovingFlowers from "@/components/MovingFlowers";
import ScrollParallaxElements from "@/components/ScrollParallaxElements";
import SidebarActionButton from "@/components/SidebarActionButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { products } from "@/data/products"; // Import the products data

interface CreamPageProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

const CreamPage: React.FC<CreamPageProps> = ({ onOpenAbout, onOpenContact }) => {
  // Removed isModalOpen and selectedImage states as modal is no longer directly opened from here
  // Removed handleImageClick function as it's no longer needed

  return (
    <div className="min-h-screen p-4 sm:p-8 relative overflow-hidden pt-14">
      <MovingFlowers />
      <ScrollParallaxElements />
      <div className="max-w-4xl mx-auto z-10 relative">
        <header className="text-center mb-12 relative">
          {/* Floating mobile sidebar toggle buttons */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-rose-700 border-rose-300 hover:bg-rose-50"
              onClick={onOpenAbout}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open About Founder Sidebar</span>
            </Button>
          </div>
          <div className="absolute top-4 right-4 flex flex-col space-y-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-rose-700 border-rose-300 hover:bg-rose-50"
              onClick={onOpenContact}
            >
              <MessageSquareText className="h-5 w-5" />
              <span className="sr-only">Open Contact Us Sidebar</span>
            </Button>
          </div>

          {/* Floating desktop Sidebar Action Buttons and ThemeToggle */}
          <div className="absolute top-24 left-4 z-20 hidden md:block">
            <SidebarActionButton label="About Us" onClick={onOpenAbout} className="w-auto px-4 py-2 text-sm" />
          </div>
          <div className="absolute top-24 right-4 z-20 hidden md:block flex flex-col items-end">
            <SidebarActionButton label="Contact Us" onClick={onOpenContact} className="w-auto px-4 py-2 text-sm" />
            <div className="mt-2">
              <ThemeToggle />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            The Wonderful World of Clear Wonders Authentic and Beauty Products
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Indulge in the rich, smooth, and delightful essence of our products.
          </p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="outline">
              Back to Home
            </Button>
          </Link>
        </header>

        <section className="mb-12">
          <Card className="overflow-hidden shadow-lg border">
            <img
              src="/WhatsApp Image 2025-09-25 at 00.34.20_436040a4.jpg"
              alt="Clear Wonders Product Showcase"
              className="w-full h-64 object-cover [object-position:top_20%]"
            />
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">Your Trusted Source for Authentic Beauty</CardTitle>
              <CardDescription className="text-muted-foreground">
                Discover the Clear Wonders difference – quality, authenticity, and a touch of magic.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-foreground">
                At Clear Wonders, we pride ourselves on being a trustworthy and authentic store dedicated to bringing you the finest beauty and skincare products. Our commitment to quality ensures that every item you find here is crafted with care and integrity, designed to enhance your natural radiance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                We offer a diverse range of products, each carefully selected to meet your unique needs. Below, you'll find a glimpse into our extensive collection, showcasing the variety and excellence that define the Clear Wonders experience. Explore our gallery and find your next favorite beauty essential!
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center text-foreground mb-8">Gallery of Clear Wonders Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => ( // Using the imported products array
              <Link to={`/products/${product.id}`} key={product.id}> {/* Link to product detail page */}
                <Card
                  className="overflow-hidden shadow-md border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardContent className="p-4">
                    <p className="text-md font-semibold text-foreground">{product.name}</p> {/* Display product name */}
                    <p className="text-sm text-muted-foreground">{product.price}</p> {/* Display product price */}
                  </CardContent>
                </Card>
              </Link>
            ))}
            <div className="col-span-full flex items-center justify-center p-8">
              <p className="text-2xl font-bold text-foreground italic">... and so much more!</p>
            </div>
          </div>
        </section>

        <FAQSection />

      </div>
      {/* Removed GalleryImageModal as it's no longer triggered from here */}
    </div>
  );
};

export default CreamPage;