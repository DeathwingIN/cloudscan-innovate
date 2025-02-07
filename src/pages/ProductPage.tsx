import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = {
  "smart-scanner-pro": {
    title: "Smart Scanner Pro",
    description: "Advanced QR scanning with real-time ERP updates",
    price: "$499",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ],
    features: [
      "Real-time Microsoft Business Central Integration",
      "High-speed QR & Barcode Scanning",
      "Wireless Connectivity",
      "10-hour Battery Life",
      "Enterprise-grade Security",
    ],
    specifications: {
      "Scanning Technology": "2D Imaging",
      "Scan Range": "3-30 cm",
      "Battery": "3600mAh Li-ion",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.0",
      "Display": "4.5\" Touch Screen",
      "OS Compatibility": "Android 11",
    },
  },
  "scanner-lite": {
    title: "Scanner Lite",
    description: "Efficient scanning solution for small businesses",
    price: "$299",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ],
    features: [
      "Business Central Basic Integration",
      "QR & 1D Barcode Scanning",
      "USB & Bluetooth Connectivity",
      "8-hour Battery Life",
      "Small Business Optimized",
    ],
    specifications: {
      "Scanning Technology": "1D/2D Imaging",
      "Scan Range": "5-25 cm",
      "Battery": "2600mAh Li-ion",
      "Connectivity": "Wi-Fi 5, Bluetooth 4.2",
      "Display": "3.5\" LCD",
      "OS Compatibility": "Android 10",
    },
  },
  "cloudsmart-app": {
    title: "CloudSmart App",
    description: "Companion app for seamless integration",
    price: "Contact for Pricing",
    images: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],
    features: [
      "Real-time Sync with Scanners",
      "Cloud Data Management",
      "Advanced Analytics Dashboard",
      "Multi-device Support",
      "Customizable Workflows",
    ],
    specifications: {
      "Platform": "iOS & Android",
      "Cloud Storage": "Unlimited",
      "Updates": "Automatic",
      "Security": "Enterprise-grade Encryption",
      "Integration": "Microsoft Business Central API",
      "Support": "24/7 Technical Support",
    },
  },
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);

  const product = products[productId as keyof typeof products];
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Percentage X position
    const y = ((e.clientY - top) / height) * 100; // Percentage Y position
    setHoverPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4 relative">
                {/* Main Image with Zoom */}
                <div
                    className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setIsFullScreenModalOpen(true)} // Open full-screen modal on mobile
                >
                  <img
                      src={product.images[selectedImage]}
                      alt={`${product.title} main view`}
                      className="w-full h-full object-cover"
                  />
                  {/* Highlight Box */}
                  {hoverPosition && (
                      <div
                          className="absolute border-2 border-primary bg-black/20 pointer-events-none md:block hidden"
                          style={{
                            left: `${hoverPosition.x}%`,
                            top: `${hoverPosition.y}%`,
                            transform: "translate(-50%, -50%)",
                            width: "20%",
                            height: "20%",
                          }}
                      />
                  )}
                </div>

                {/* Zoom Pane */}
                {hoverPosition && (
                    <div
                        className={`hidden md:block absolute top-0 left-full ml-4 w-[300px] h-[300px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200`}
                        style={{
                          backgroundImage: `url(${product.images[selectedImage]})`,
                          backgroundPosition: `${hoverPosition.x}% ${hoverPosition.y}%`,
                          backgroundSize: "200%",
                        }}
                    />
                )}

                {/* Thumbnail Images */}
                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                      <button
                          key={index}
                          className={`aspect-square rounded-lg overflow-hidden border-2 ${
                              selectedImage === index ? "border-primary" : "border-transparent"
                          }`}
                          onClick={() => setSelectedImage(index)}
                      >
                        <img
                            src={image}
                            alt={`${product.title} view ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                      </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold text-primary mb-4">{product.title}</h1>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <p className="text-2xl font-semibold">{product.price}</p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Specifications */}
                <Collapsible open={isSpecsOpen} onOpenChange={setIsSpecsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                    <span className="text-xl font-semibold">Specifications</span>
                    {isSpecsOpen ? <ChevronUp /> : <ChevronDown />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <dl className="space-y-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-2">
                            <dt className="font-medium text-muted-foreground">{key}</dt>
                            <dd>{value}</dd>
                          </div>
                      ))}
                    </dl>
                  </CollapsibleContent>
                </Collapsible>

                {/* Call to Action */}
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Full-Screen Modal for Mobile */}
        {isFullScreenModalOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setIsFullScreenModalOpen(false); // Close modal when clicking outside
                }}
            >
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white text-xl z-10"
                    onClick={() => setIsFullScreenModalOpen(false)}
                >
                  &times;
                </button>

                {/* Slider */}
                <div className="flex items-center justify-center">
                  <img
                      src={product.images[selectedImage]}
                      alt={`${product.title} full view`}
                      className="w-full h-auto max-h-screen object-contain"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center space-x-4 mt-4">
                  {product.images.map((image, index) => (
                      <button
                          key={index}
                          className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                              selectedImage === index ? "border-white" : "border-transparent"
                          }`}
                          onClick={() => setSelectedImage(index)}
                      >
                        <img
                            src={image}
                            alt={`${product.title} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                      </button>
                  ))}
                </div>
              </div>
            </div>
        )}

        <Footer />
      </div>
  );
};

export default ProductPage;