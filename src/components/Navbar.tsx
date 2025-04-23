import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const industries = [
    { id: "manufacturing", name: "Manufacturing" },
    { id: "Warehousing", name: "Warehousing & Distribution" },
    { id: "Retail", name: "Retail & E-Commerce" },
    { id: "Healthcare", name: "Healthcare" },
    { id: "Transportation", name: "Transportation & Logistics" },
    { id: "Food", name: "Food & Beverage" },
  ];

  const products = [
    { id: "smart-scanner-pro", name: "Handheld Scanners" },
    { id: "scanner-lite", name: "Mobile Phone-Style Scanners" },
    { id: "cloudsmart-app", name: "Mobile Application" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDesktopMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDesktopMenuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
  };

  const handleScrollToSection = async (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
  };

  return (
      <>
        <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-4">
                <button
                    onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                    className="hidden md:block text-secondary hover:text-primary transition-colors duration-300"
                    aria-label="Open desktop menu"
                >
                  <Menu size={24} />
                </button>
                <Link to="/" className="flex items-center">
                  <img
                      src="./logo.png"
                      alt="Cloud Smart"
                      className="h-[40px] w-auto object-contain cursor-pointer"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  />
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <Link
                    to="/"
                    className="text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Home
                </Link>
                <button
                    onClick={() => handleScrollToSection("about")}
                    className="text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                >
                  About
                </button>
                <div className="relative group">
                  <button
                      onClick={() => handleScrollToSection("industries")}
                      className="flex items-center text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                  >
                    Industries <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            onClick={() => handleNavigation(`/industries/${industry.id}`)}
                            className="block w-full text-left px-4 py-2 text-secondary hover:bg-gray-100 transition-all duration-300"
                        >
                          {industry.name}
                        </button>
                    ))}
                  </div>
                </div>
                <div className="relative group">
                  <button
                      onClick={() => handleScrollToSection("services")}
                      className="flex items-center text-secondary hover:text-primary transition-all duration-300 ease-in-out"
                  >
                    Products <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    {products.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => handleNavigation(`/products/${product.id}`)}
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
                            onClick={() => handleNavigation(`/industries/${industry.id}`)}
                            className="block w-full text-left px-2 py-1 text-sm text-secondary hover:bg-gray-100 rounded transition-all duration-300"
                        >
                          {industry.name}
                        </button>
                    ))}
                  </div>
                </div>
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
                            onClick={() => handleNavigation(`/products/${product.id}`)}
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

        {isDesktopMenuOpen && (
            <>
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setIsDesktopMenuOpen(false)}
              />
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 right-0 top-16 bg-white shadow-lg z-50"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="flex justify-between space-x-8">
                    <div>
                      <span className="block font-semibold text-gray-700 mb-2">Main Links</span>
                      <button onClick={() => handleNavigation("/")} className="block py-1 text-gray-600 hover:text-gray-900">Home</button>
                      <button onClick={() => handleScrollToSection("about")} className="block py-1 text-gray-600 hover:text-gray-900">About</button>
                      <button onClick={() => handleNavigation("/contact")} className="block py-1 text-gray-600 hover:text-gray-900">Contact Us</button>
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-700 mb-2">Industries</span>
                      {industries.map((industry) => (
                          <button key={industry.id} onClick={() => handleNavigation(`/industries/${industry.id}`)} className="block py-1 text-gray-600 hover:text-gray-900">
                            {industry.name}
                          </button>
                      ))}
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-700 mb-2">Products</span>
                      {products.map((product) => (
                          <button key={product.id} onClick={() => handleNavigation(`/products/${product.id}`)} className="block py-1 text-gray-600 hover:text-gray-900">
                            {product.name}
                          </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
        )}
      </>
  );
};

export default Navbar;