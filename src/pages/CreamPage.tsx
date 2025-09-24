"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const CreamPage = () => {
  const galleryImages = [
    { src: "/IMG-20250924-WA0003.jpg", alt: "Clear Wonders Cream product 1" },
    { src: "/IMG-20250924-WA0005.jpg", alt: "Clear Wonders Cream product 2" },
    { src: "/IMG-20250924-WA0006.jpg", alt: "Clear Wonders Cream product 3" },
    { src: "/IMG-20250924-WA0007.jpg", alt: "Clear Wonders Cream product 4" },
    { src: "/IMG-20250924-WA0008.jpg", alt: "Clear Wonders Cream product 5" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800 p-4 sm:p-8">
      {/* Super Diagnostic Image - This should be impossible to miss if loaded */}
      <img
        src="/IMG-20250924-WA0005.jpg"
        alt="Super Diagnostic Test Image"
        style={{
          width: '300px',
          height: '300px',
          border: '5px solid green',
          display: 'block',
          margin: '20px auto',
          backgroundColor: 'yellow',
          objectFit: 'cover',
        }}
      />
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-rose-800 mb-4 tracking-tight">
            The Wonderful World of Clear Wonders Cream
          </h1>
          <p className="text-xl text-rose-600 font-light">
            Indulge in the rich, smooth, and delightful essence of our products.
          </p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="outline" className="bg-white text-rose-700 border-rose-300 hover:bg-rose-50">
              Back to Home
            </Button>
          </Link>
        </header>

        <section className="mb-12">
          <Card className="overflow-hidden shadow-lg border-rose-200">
            <img
              src="/IMG-20250924-WA0003.jpg" // Changed from placeholder.svg to one of your new images
              alt="Delicious Cream"
              className="w-full h-64 object-cover object-center"
            />
            <CardHeader>
              <CardTitle className="text-3xl text-rose-700">Our Creamy Delights</CardTitle>
              <CardDescription className="text-rose-500">
                Discover the versatility and luxury of cream in all its forms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-gray-700">
                Cream, a dairy product composed of the higher-fat layer skimmed from the top of milk before homogenization, is a staple in kitchens worldwide. From enriching savory dishes to perfecting sweet desserts, its velvety texture and rich flavor are simply unparalleled. We celebrate the simple elegance and profound impact of cream in culinary arts.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Whether it's whipped into a cloud-like topping, churned into butter, or simmered into a decadent sauce, cream adds a touch of magic to every recipe. We invite you to explore the beauty and deliciousness of cream through our curated collection of images.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center text-rose-800 mb-8">Gallery of Clear Wonders Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-md border-rose-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover object-center"
                />
                <CardContent className="p-4">
                  <p className="text-md font-semibold text-rose-700">{image.alt}</p>
                  <p className="text-sm text-gray-600">A delightful capture.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default CreamPage;