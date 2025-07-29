import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
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
    { id: "t10-rugged-smart-pda", name: "T10 Rugged Smart PDA" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
    setDesktopDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isDesktopMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDesktopMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdown && !event.target.closest(".dropdown-container")) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [desktopDropdown]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
    setDesktopDropdown(null);
  };

  const handleScrollToSection = async (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
    setIsDesktopMenuOpen(false);
    setDesktopDropdown(null);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)}
                className="hidden md:block text-gray-600 hover:text-gray-900 transition-colors duration-300"
                aria-label="Open desktop menu"
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center">
                <img
                  src="./logo.png"
                  alt="Cloud Smart"
                  className="h-[30px] pl-1 w-auto object-contain cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-14">
              <Link
                to="/"
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out group"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => handleScrollToSection("about")}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div className="relative dropdown-container">
                <button
                  onClick={() =>
                    setDesktopDropdown(
                      desktopDropdown === "industries" ? null : "industries"
                    )
                  }
                  className="flex items-center relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out group"
                >
                  Industries
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      desktopDropdown === "industries" ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {desktopDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-lg z-50"
                  >
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() =>
                          handleNavigation(`/industries/${industry.id}`)
                        }
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {industry.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="relative dropdown-container">
                <button
                  onClick={() =>
                    setDesktopDropdown(
                      desktopDropdown === "products" ? null : "products"
                    )
                  }
                  className="flex items-center relative text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out group"
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-300 ${
                      desktopDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {desktopDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded-lg z-50"
                  >
                    {products.map((product) => (
                      <button
                        key={product.id}
                        onClick={() =>
                          handleNavigation(`/products/${product.id}`)
                        }
                        className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {product.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
              <Link to="/contact">
                <Button
                  variant="default"
                  className="transition-transform hover:scale-105 bg-primary "
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <motion.div
            className={`md:hidden ${
              isOpen ? "block" : "hidden"
            } bg-white/95 backdrop-blur-md border-t border-gray-200`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
              <button
                onClick={() => handleScrollToSection("about")}
                className="w-full text-left block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 ease-in-out"
              >
                About
              </button>
              <div className="border-t border-b border-gray-200">
                <button
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === "mobile-industries" ? null : "mobile-industries"
                    )
                  }
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300"
                >
                  Industries
                  {activeDropdown === "mobile-industries" ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                <div
                  className={`${
                    activeDropdown === "mobile-industries" ? "block" : "hidden"
                  } px-4 py-2 space-y-1`}
                >
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() =>
                        handleNavigation(`/industries/${industry.id}`)
                      }
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded transition-all duration-300"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t border-b border-gray-200">
                <button
                  onClick={() =>
                    setActiveDropdown((prev) =>
                      prev === "mobile-products" ? null : "mobile-products"
                    )
                  }
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all duration-300"
                >
                  Products
                  {activeDropdown === "mobile-products" ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                <div
                  className={`${
                    activeDropdown === "mobile-products" ? "block" : "hidden"
                  } px-4 py-2 space-y-1`}
                >
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() =>
                        handleNavigation(`/products/${product.id}`)
                      }
                      className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded transition-all duration-300"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              </div>
              <Link to="/contact">
                <Button
                  variant="default"
                  className="w-full mt-4 transition-transform hover:scale-105 bg-primary hover:bg-blue-700"
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
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsDesktopMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex justify-between space-x-8">
                <div>
                  <span className="block font-semibold text-gray-800 mb-2">
                    Main Links
                  </span>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleScrollToSection("about")}
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    Contact Us
                  </button>
                </div>
                <div>
                  <span className="block font-semibold text-gray-800 mb-2">
                    Industries
                  </span>
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() =>
                        handleNavigation(`/industries/${industry.id}`)
                      }
                      className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
                <div>
                  <span className="block font-semibold text-gray-800 mb-2">
                    Products
                  </span>
                  {products.map((product) => (
                    <button
                      key={product.id}
                      onClick={() =>
                        handleNavigation(`/products/${product.id}`)
                      }
                      className="block py-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
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
