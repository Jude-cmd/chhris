"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/data/products";
import { Link } from "react-router-dom"; // Restored Link import

const FeaturedProductsCarousel: React.FC = () => {
  // We'll display a subset of products for the carousel, e.g., the first 25
  const featuredProducts = products.slice(0, 25); // Displaying only the first 25

  if (featuredProducts.length === 0) {
    return (
      <section className="w-full max-w-4xl mx-auto my-12 z-10 text-center">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">
          Our Featured Products
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-8">
          No products available at the moment. Please check back later!
        </p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl mx-auto my-12 z-10">
      <h2 className="text-4xl font-bold text-center text-foreground mb-4">
        Our Featured Products
      </h2>
      <p className="text-lg text-center text-muted-foreground mb-8">
        Click the "Click Here" button to access all the products.
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Link to={`/products/${product.id}`}> {/* Restored Link component */}
                  <Card className="overflow-hidden shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </CardContent>
                    <div className="p-4 text-center">
                      <p className="text-lg font-semibold text-foreground">{product.name}</p>
                    </div>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </section>
  );
};

export default FeaturedProductsCarousel;