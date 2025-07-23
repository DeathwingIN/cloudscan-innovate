import { useState, useCallback, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industries } from "@/data/IndustryData"; // Ensure this path is correct

const Industries = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const isMobile = useIsMobile();

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      // Autoplay logic remains the same, assuming external control or internal carousel API
    }, 3000); // Autoplay interval
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  // Effect to manage autoplay on mount and unmount
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [autoPlay, startAutoPlay, stopAutoPlay]);

  return (
    <section className="py-20 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
          >
            Tailored Solutions for Every Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Empower your business with fast, accurate, and reliable Cloud Smart solutions designed to streamline workflows, reduce errors, and boost efficiency.
          </motion.p>
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
          <CarouselContent className="py-4 -ml-4">
            {Object.values(industries).map((industry) => (
              <CarouselItem
                key={industry.id}
                className={`${isMobile ? "basis-full" : "basis-1/4"} pl-4`}
              >
                <Link to={`/industries/${industry.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer group h-80">
                      {/* Image always present, blurs/fades on hover */}
                      <motion.img
                        src={industry.image}
                        alt={industry.title}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:opacity-50"
                        initial={{ opacity: 1, filter: "blur(0px)" }}
                        whileHover={{ opacity: 0.5, filter: "blur(4px)" }}
                      />

                      {/* Initial visible content: Only the Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-10 group-hover:opacity-0 transition-opacity duration-300">
                        <h4 className="font-bold text-xl mb-1">
                          {industry.title}
                        </h4>
                      </div>

                      {/* Hover Overlay - Full description and button */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-white z-20"
                      >
                        <h4 className="text-xl font-bold mb-2 text-center">
                          {industry.title}
                        </h4>
                        <p className="text-sm text-center mb-4">
                          {industry.description}
                        </p>
                        <Button className="border-white text-white hover:bg-white hover:text-primary">
                          Learn More
                        </Button>
                      </motion.div>
                    </Card>
                  </motion.div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-16 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="-right-16 hover:bg-primary hover:text-primary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Industries;