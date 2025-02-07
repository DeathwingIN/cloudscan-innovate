import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const history = useNavigate(); // For programmatic navigation

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Smooth scroll to sections
  const handleScrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // Navigate to the homepage first
      history("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to allow navigation to complete
    } else {
      // Already on the homepage, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false); // Close the menu after scrolling
  };

  return (
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                  to="/"
                  className="text-2xl font-bold text-primary tracking-wide transition-colors hover:text-primary/80"
              >
                CloudSmart
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                  to="/"
                  className="text-secondary hover:text-primary transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("about");
                  }}
                  className="text-secondary hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
              >
                About
              </a>
              <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("services");
                  }}
                  className="text-secondary hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
              >
                Services
              </a>
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
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="block px-3 py-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
              <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("about");
                  }}
                  className="block px-3 py-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
              >
                About
              </a>
              <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection("services");
                  }}
                  className="block px-3 py-2 rounded-md text-secondary hover:text-primary hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Services
              </a>
              <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)} // Close menu on click
              >
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