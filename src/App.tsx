import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import ProductPage from "./pages/ProductPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {useEffect} from "react";

const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <ScrollToTop />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
              <Route path="/products/:productId" element={<ProductPage/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            </main>
            <Footer/>
            </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;