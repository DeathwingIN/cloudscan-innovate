import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();


  const industries = [
    { id: "manufacturing", name: "Manufacturing" },
    { id: "Warehousing", name: "Warehousing" },
    { id: "Retail", name: "Retail" },
    { id: "Healthcare", name: "Healthcare" },
    { id: "Transportation", name: "Transportation" },
    { id: "Food", name: "Food" },
  ];

  const products = [
    { id: "smart-scanner-pro", name: "Handheld Scanners" },
    { id: "scanner-lite", name: "Mobile Phone-Style Scanners" },
    { id: "cloudsmart-app", name: "Mobile Application" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleScrollToSection = async (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                  src="./logo.png"
                  alt="Cloud Smart"
                  className="h-[40px] w-auto object-contain cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                  to="/"
                  className="text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>

              {/* About Section (scroll) */}
              <button
                  onClick={() => handleScrollToSection("about")}
                  className="text-secondary hover:text-primary transition-all duration-300 ease-in-out"
              >
                About
              </button>

              {/* Industries Dropdown (route navigation) */}
              <div className="relative group">
                <button
                    onClick={() => setActiveDropdown(prev => prev === 'industries' ? null : 'industries')}
                    className="flex items-center text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                >
                  Industries <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {industries.map((industry) => (
                      <button
                          key={industry.id}
                          onClick={() => handleNavigation(`/industries/${industry.id}`)} // Route navigation <button class="citation-flag" data-index="6">
                          className="block w-full text-left px-4 py-2 text-secondary hover:bg-gray-100 transition-all duration-300"
                      >
                        {industry.name}
                      </button>
                  ))}
                </div>
              </div>

              {/* Products Dropdown (route navigation) */}
              <div className="relative group">
                <button
                    onClick={() => setActiveDropdown(prev => prev === 'products' ? null : 'products')}
                    className="flex items-center text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                >
                  Products <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  {products.map((product) => (
                      <button
                          key={product.id}
                          onClick={() => handleNavigation(`/products/${product.id}`)} // Route navigation <button class="citation-flag" data-index="6">
                          className="block w-full text-left px-4 py-2 text-secondary hover:bg-gray-100 transition-all duration-300"
                      >
                        {product.name}
                      </button>
                  ))}
                </div>
              </div>

              <Link to="/contact">
                <Button variant="default" className="transition-transform hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-secondary hover:text-primary transition-colors duration-300"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
              className={`md:hidden ${isOpen ? "block" : "hidden"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>

              <button
                  onClick={() => handleScrollToSection("about")}
                  className="w-full text-left block px-3 py-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                About
              </button>

              {/* Mobile Industries Accordion (route navigation) */}
              <div className="border-t border-b border-gray-200">
                <button
                    onClick={() => setActiveDropdown(prev => prev === 'mobile-industries' ? null : 'mobile-industries')}
                    className="w-full flex justify-between items-center px-3 py-2 text-secondary hover:bg-gray-100 transition-all duration-300"
                >
                  Industries
                  {activeDropdown === 'mobile-industries' ? <ChevronUp /> : <ChevronDown />}
                </button>
                <div className={`${activeDropdown === 'mobile-industries' ? 'block' : 'hidden'} px-4 py-2 space-y-1`}>
                  {industries.map((industry) => (
                      <button
                          key={industry.id}
                          onClick={() => handleNavigation(`/industries/${industry.id}`)} // Route navigation <button class="citation-flag" data-index="6">
                          className="block w-full text-left px-2 py-1 text-sm text-secondary hover:bg-gray-100 rounded transition-all duration-300"
                      >
                        {industry.name}
                      </button>
                  ))}
                </div>
              </div>

              {/* Mobile Products Accordion (route navigation) */}
              <div className="border-t border-b border-gray-200">
                <button
                    onClick={() => setActiveDropdown(prev => prev === 'mobile-products' ? null : 'mobile-products')}
                    className="w-full flex justify-between items-center px-3 py-2 text-secondary hover:bg-gray-100 transition-all duration-300"
                >
                  Products
                  {activeDropdown === 'mobile-products' ? <ChevronUp /> : <ChevronDown />}
                </button>
                <div className={`${activeDropdown === 'mobile-products' ? 'block' : 'hidden'} px-4 py-2 space-y-1`}>
                  {products.map((product) => (
                      <button
                          key={product.id}
                          onClick={() => handleNavigation(`/products/${product.id}`)} // Route navigation <button class="citation-flag" data-index="6">
                          className="block w-full text-left px-2 py-1 text-sm text-secondary hover:bg-gray-100 rounded transition-all duration-300"
                      >
                        {product.name}
                      </button>
                  ))}
                </div>
              </div>

              <Link to="/contact">
                <Button
                    variant="default"
                    className="w-full mt-4 transition-transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </nav>
  );
};

export default Navbar;