"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react"; // Restored Star import
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

const ReviewForm: React.FC = () => {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && reviewText && rating > 0) {
      toast.success(`Thank you, ${name}, for your ${rating}-star review!`);
      // In a real application, you would send this data to a backend.
      console.log({ name, reviewText, rating });
      setName("");
      setReviewText("");
      setRating(0);
    } else {
      toast.error("Please fill in all fields and provide a rating.");
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center text-foreground mb-8">
        Leave Your Wonderful Review!
      </h2>
      <Card className="max-w-2xl mx-auto shadow-lg border border-rose-200 bg-white/80 backdrop-blur-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-rose-300 focus-visible:ring-rose-500"
            />
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
              Your Review
            </label>
            <Textarea
              id="review"
              placeholder="Share your experience with Clear Wonders products..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={5}
              className="border-rose-300 focus-visible:ring-rose-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((starValue) => (
                <Star
                  key={starValue}
                  className={`h-7 w-7 text-2xl cursor-pointer transition-colors ${
                    starValue <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                  onClick={() => setRating(starValue)}
                />
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white text-lg py-3">
            Submit Review
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default ReviewForm;