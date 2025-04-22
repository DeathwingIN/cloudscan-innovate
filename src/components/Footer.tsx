import { Facebook, Linkedin, Youtube,Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CloudSmart</h3>
            <p className="text-gray-400">
              Transforming business operations through innovative scanning solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              {/*<li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Products</a></li>*/}
              {/*<li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>*/}
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="/products/smart-scanner-pro" className="text-gray-400 hover:text-white transition-colors">Handheld Scanners</a></li>
              <li><a href="/products/scanner-lite" className="text-gray-400 hover:text-white transition-colors">Mobile Phone-Style Scanners</a></li>
              <li><a href="/products/cloudsmart-app" className="text-gray-400 hover:text-white transition-colors">Cloud Smart Mobile Application</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20}/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20}/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20}/>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20}/>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} CloudSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;