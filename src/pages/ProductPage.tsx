import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { products } from "../data/productData";

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

  const renderSpecification = (key: string, value: any, depth: number = 0) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
          <div key={key} className={depth > 0 ? "ml-4" : ""}>
            <dt className="font-medium text-muted-foreground">{key}</dt>
            <dd>
              <dl className="space-y-2">
                {Object.entries(value).map(([nestedKey, nestedValue]) =>
                    renderSpecification(nestedKey, nestedValue, depth + 1)
                )}
              </dl>
            </dd>
          </div>
      );
    } else if (Array.isArray(value)) {
      return (
          <div key={key} className={depth > 0 ? "ml-4" : ""}>
            <dt className="font-medium text-muted-foreground">{key}</dt>
            <dd>
              <ul className="list-disc ml-4">
                {value.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
      );
    } else {
      return (
          <div key={key} className={`grid grid-cols-2 ${depth > 0 ? "ml-4" : ""}`}>
            <dt className="font-medium text-muted-foreground">{key}</dt>
            <dd>{value}</dd>
          </div>
      );
    }
  };

  return (
      <div className="min-h-screen flex flex-col">
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
                        className={`hidden md:block absolute top-0 left-full ml-4 w-[800px] h-[600px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200`}
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
                  {/*<p className="text-2xl font-semibold pb-4">{product.name}</p>*/}
                  <p className="text-muted-foreground text-justify mb-6">{product.description}</p>
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
                      {Object.entries(product.specifications).map(([key, value]) =>
                          renderSpecification(key, value, 0) // Start with depth 0 for top-level
                      )}
                    </dl>
                  </CollapsibleContent>
                </Collapsible>
                {/* Call to Action */}
                <div className="space-y-4">
                  <Link
                      to="/contact"
                      state={{ product: product.title }}
                  >
                    <Button variant="default" className="transition-transform hover:scale-105">
                      Get Support
                    </Button>
                  </Link>
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
      </div>
  );
};

export default ProductPage;