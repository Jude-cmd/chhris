"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Removed Star import

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Fatima A.",
    quote: "Clear Wonders products have transformed my skin! I've never felt more confident and radiant. The natural ingredients are truly amazing.",
    rating: 5,
  },
  {
    name: "Blessing O.",
    quote: "I was skeptical at first, but after using Clear Wonders cream for a few weeks, my skin feels incredibly soft and looks so much brighter. Highly recommend!",
    rating: 5,
  },
  {
    name: "Grace E.",
    quote: "The customer service is as wonderful as the products! I had a question about my order and received a prompt, helpful response. A truly caring brand.",
    rating: 4,
  },
  {
    name: "Chiamaka N.",
    quote: "Finally, a skincare line that understands what my sensitive skin needs. No irritation, just pure nourishment and a healthy glow. Thank you, Clear Wonders!",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center text-foreground mb-8">
        What Our Wonderful Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg border border-rose-200 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center mb-2">
                {/* Replaced Star icons with text stars */}
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <span key={i + testimonial.rating} className="text-gray-300">☆</span>
                ))}
              </div>
              <CardTitle className="text-xl font-semibold text-rose-700">
                {testimonial.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;