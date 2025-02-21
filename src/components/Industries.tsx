
import { useState, useCallback, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

const industries: Industry[] = [
  {
    id: "manufacturing",
    title: "Smart Manufacturing",
    description: "Streamline production with intelligent scanning solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Enhance patient care with seamless inventory management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: "retail",
    title: "Retail",
    description: "Optimize inventory tracking and customer experience",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: "tech",
    title: "Technology",
    description: "Integrate smart solutions for digital transformation",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];

const Industries = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const isMobile = useIsMobile();

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  // Start autoplay on mount
  useState(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored Solutions for Your Sector
          </p>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => {
            setAutoPlay(false);
            stopAutoPlay();
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
            startAutoPlay();
          }}
        >
          <CarouselContent className="py-4">
            {industries.map((industry) => (
              <CarouselItem
                key={industry.id}
                className={`${isMobile ? "basis-full" : "basis-1/4"} pl-4`}
              >
                <div className="group relative">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                        <h4 className="text-lg font-semibold mb-2">{industry.title}</h4>
                        <p className="text-sm text-center mb-4">{industry.description}</p>
                        <Button
                          variant="outline"
                          className="text-white border-white hover:bg-white hover:text-primary"
                          onClick={() => {
                            // Handle navigation to industry page
                            console.log(`Navigate to /industries/${industry.id}`);
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    {/* Non-hover Content */}
                    <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className="font-semibold mb-2">{industry.title}</h4>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Industries;
