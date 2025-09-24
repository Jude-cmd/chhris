"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const CreamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 text-gray-800 p-4 sm:p-8">
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
              src="/placeholder.svg" // Placeholder image, you can replace this
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
          <h2 className="text-4xl font-bold text-center text-rose-800 mb-8">Gallery of Cream</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for images - you can replace these with your actual image components */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden shadow-md border-rose-100">
                <img
                  src="/placeholder.svg" // Replace with your image paths
                  alt={`Cream image ${i}`}
                  className="w-full h-48 object-cover object-center"
                />
                <CardContent className="p-4">
                  <p className="text-md font-semibold text-rose-700">Cream Moment {i}</p>
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