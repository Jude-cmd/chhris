"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(`Thank you for subscribing, ${email}!`);
      setEmail("");
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 mt-12 border border-rose-200">
      <h3 className="text-2xl font-bold text-rose-800 mb-3 text-center">Stay in the Loop!</h3>
      <p className="text-center text-gray-700 mb-6">
        Subscribe to our newsletter for exclusive offers and updates.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          className="flex-grow border-rose-300 focus-visible:ring-rose-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email for newsletter"
        />
        <Button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white">
          <Mail className="h-5 w-5 mr-2" /> Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;