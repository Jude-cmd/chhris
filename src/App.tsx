import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreamPage from "./pages/CreamPage";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"; // Import Navbar
import AboutFounderSidebar from "@/components/AboutFounderSidebar"; // Import AboutFounderSidebar
import ContactUsSidebar from "@/components/ContactUsSidebar"; // Import ContactUsSidebar
import React, { useState } from "react"; // Import useState

const queryClient = new QueryClient();

const App = () => {
  const [isAboutSidebarOpen, setIsAboutSidebarOpen] = useState(false);
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" enableSystem attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar
              onOpenAbout={() => setIsAboutSidebarOpen(true)}
              onOpenContact={() => setIsContactSidebarOpen(true)}
            />
            <AboutFounderSidebar isOpen={isAboutSidebarOpen} onClose={() => setIsAboutSidebarOpen(false)} />
            <ContactUsSidebar isOpen={isContactSidebarOpen} onClose={() => setIsContactSidebarOpen(false)} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cream" element={<CreamPage />} />
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