import { Facebook, Instagram } from "lucide-react";

// TikTok SVG Icon Component
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Cloud Smart</h3>
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
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="/products/smart-scanner-pro" className="text-gray-400 hover:text-white transition-colors">SCX400 Series</a></li>
              <li><a href="/products/scanner-lite" className="text-gray-400 hover:text-white transition-colors">SMT700 Series</a></li>
              <li><a href="/products/t10-rugged-smart-pda" className="text-gray-400 hover:text-white transition-colors">T1000 Series</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BviDTFoCz/?mibextid=wwXIfr" 
                className="text-gray-400 hover:text-white transition-colors"
                title="Follow us on Facebook"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20}/>
              </a>
              <a 
                href="https://www.instagram.com/cloudsmartbarcode/" 
                className="text-gray-400 hover:text-white transition-colors"
                title="Follow us on Instagram"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20}/>
              </a>
              <a 
                href="https://www.tiktok.com/@cloudsmartbarcode" 
                className="text-gray-400 hover:text-white transition-colors"
                title="Follow us on TikTok"
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon size={20}/>
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