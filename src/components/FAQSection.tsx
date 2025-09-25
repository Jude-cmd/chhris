"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What makes Clear Wonders products unique?",
      answer: "Our products are crafted with love and inspired by natural wellness, using the purest ingredients to bring comfort, confidence, and a touch of wonder to your skin. Each formula is meticulously developed with a nurturing spirit.",
    },
    {
      question: "Are Clear Wonders products suitable for all skin types?",
      answer: "Yes, we formulate our products to be gentle and effective for a wide range of skin types. However, if you have specific concerns or highly sensitive skin, we recommend checking the ingredient list or performing a patch test.",
    },
    {
      question: "Where can I purchase Clear Wonders products?",
      answer: "Currently, our products are available through our online store. We are working on expanding to select retail partners soon! Stay tuned to our newsletter for updates.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "At this moment, we primarily ship within [Your Country/Region]. We are exploring options for international shipping and hope to offer it in the near future.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer service team via email at majzbusiness@gmail.com or by phone at 08099993355 or 08033210309. Our team is available Monday to Saturday, 9 AM - 6 PM.",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold text-center text-rose-800 mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-rose-200">
            <AccordionTrigger className="text-lg font-semibold text-rose-700 hover:no-underline hover:text-rose-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;