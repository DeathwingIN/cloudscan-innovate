import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">CloudSmart</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-secondary hover:text-primary transition-colors">Services</a>
            <Button variant="default">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-secondary hover:text-primary">Home</a>
              <a href="#about" className="block px-3 py-2 text-secondary hover:text-primary">About</a>
              <a href="#services" className="block px-3 py-2 text-secondary hover:text-primary">Services</a>
              <Button variant="default" className="w-full mt-4">Contact Us</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;