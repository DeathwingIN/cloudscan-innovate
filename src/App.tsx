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
import Navbar from "@/components/Navbar";
import Industries from "@/components/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import PrivacyPolicy from "./pages/PrivacyAndPolicy";

const queryClient = new QueryClient();

// Improved ScrollToTop component with better scroll restoration
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
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
            <main className="flex-grow">
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<Index />} />

                {/* Industries Page */}
                <Route path="/industries" element={<Industries />} />

                {/* Industry Detail Page */}
                <Route path="/industries/:industryId" element={<IndustryDetail />} />

                {/* Contact Page */}
                <Route path="/contact" element={<ContactUs />} />

                <Route path="/about-detail" element={<AboutDetail />} />

                {/* Products Page */}
                <Route path="/products/:productId" element={<ProductPage />} />

                {/* Request for Quote Page */}
                <Route path="/request" element={<RequestForQuote />} />

                {/* Request for Quote Page */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                {/* 404 Not Found */}
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