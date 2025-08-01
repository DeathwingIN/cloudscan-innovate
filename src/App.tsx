import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import AboutDetail from "./pages/AboutDetail";
import ProductPage from "./pages/ProductPage";
import RequestForQuote from "./pages/RequestForQuote";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Your Navbar component
import Industries from "@/components/Industries"; // This import seems duplicated, might be a typo if not used as a component directly here
import IndustryDetail from "./pages/IndustryDetail";
import PrivacyPolicy from "./pages/PrivacyAndPolicy";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    console.log("Current pathname:", pathname);
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-grow "> 
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/industries/:industryId" element={<IndustryDetail />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-detail" element={<AboutDetail />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/request" element={<RequestForQuote />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;