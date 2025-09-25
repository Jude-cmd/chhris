"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

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
    name: "Aisha M.",
    quote: "I was skeptical at first, but after using Clear Wonders cream for a few weeks, my skin feels incredibly soft and looks so much brighter. Highly recommend!",
    rating: 5,
  },
  {
    name: "Hauwa S.",
    quote: "The customer service is as wonderful as the products! I had a question about my order and received a prompt, helpful response. A truly caring brand.",
    rating: 4,
  },
  {
    name: "Zainab B.",
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
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
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