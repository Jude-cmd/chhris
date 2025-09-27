"use client";

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Removed MovingFlowers import
// Removed ScrollParallaxElements import
import { ArrowLeft } from "lucide-react";
import GalleryImageModal from "@/components/GalleryImageModal";

interface ProductDetailPageProps {
  onOpenContact: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenContact }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState("");
  const [selectedImageAlt, setSelectedImageAlt] = useState("");

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
    setIsModalOpen(true);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden pt-14">
        {/* Removed MovingFlowers component */}
        {/* Removed ScrollParallaxElements component */}
        <div className="text-center z-10">
          <h1 className="text-4xl font-bold mb-4 text-destructive">Product Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The product you are looking for does not exist.
          </p>
          <Link to="/cream">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 relative overflow-hidden pt-14">
      {/* Removed MovingFlowers component */}
      {/* Removed ScrollParallaxElements component */}
      <div className="max-w-4xl mx-auto z-10 relative">
        <header className="text-center mb-12 relative">
          <Link to="/cream" className="absolute top-4 left-4">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Button>
          </Link>
          <h1 className="text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            {product.name}
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Discover the magic of Clear Wonders.
          </p>
        </header>

        <section className="mb-12">
          <Card className="overflow-hidden shadow-lg border">
            <img
              src={product.src}
              alt={product.alt}
              className="w-full h-96 object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(product.src, product.alt)}
            />
            <CardHeader>
              <CardTitle className="text-3xl text-foreground">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                {product.description}
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Like this product? Go to "About Us" or "Contact Us" in the navigation to see how you can reach us!
              </p>
              <Button 
                className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-6 py-3"
                onClick={onOpenContact}
              >
                Interested? Contact Us!
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>

      <GalleryImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImageSrc}
        imageAlt={selectedImageAlt}
      />
    </div>
  );
};

export default ProductDetailPage;