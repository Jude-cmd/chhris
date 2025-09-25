import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreamPage from "./pages/CreamPage";
import ProductDetailPage from "./pages/ProductDetailPage"; // Import ProductDetailPage
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import AboutFounderSidebar from "@/components/AboutFounderSidebar";
import ContactUsSidebar from "@/components/ContactUsSidebar";
import React, { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false);

  const handleOpenAbout = () => setIsAboutSidebarOpen(true);
  const handleOpenContact = () => setIsContactSidebarOpen(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" enableSystem attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar
              onOpenAbout={handleOpenAbout}
              onOpenContact={handleOpenContact}
            />
            <AboutFounderSidebar isOpen={isAboutSidebarOpen} onClose={() => setIsAboutSidebarOpen(false)} />
            <ContactUsSidebar isOpen={isContactSidebarOpen} onClose={() => setIsContactSidebarOpen(false)} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/cream"
                element={
                  <CreamPage
                    onOpenAbout={handleOpenAbout}
                    onOpenContact={handleOpenContact}
                  />
                }
              />
              <Route 
                path="/products/:productId" 
                element={<ProductDetailPage onOpenContact={handleOpenContact} />} {/* Pass onOpenContact */}
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;