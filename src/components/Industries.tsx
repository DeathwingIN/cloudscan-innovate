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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { industries } from "@/data/IndustryData";

const Industries = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const isMobile = useIsMobile();

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Object.keys(industries).length);
    }, 3000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  }, []);

  // Start autoplay on mount
  useState(() => {
    if (autoPlay) startAutoPlay();
    return () => stopAutoPlay();
  });

  return (
      <section className="py-20 bg-gray-50" id="industries">
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
              Empower your business with fast, accurate, and reliable CloudSmart solutions designed to streamline workflows, reduce errors, and boost efficiency.
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
            <CarouselContent className="py-4">
              {Object.values(industries).map((industry) => (
                  <CarouselItem
                      key={industry.id}
                      className={`${isMobile ? "basis-full" : "basis-1/4"} pl-4`}
                  >
                    <Link to={`/industries/${industry.id}`}>
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group">
                          <div className="relative aspect-square overflow-hidden">
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Non-Hover Content (Displays by Default) */}
                            <div className="absolute inset-0 p-4 flex flex-col items-center justify-center bg-black/50 backdrop-blur  group-hover:opacity-0 transition-opacity duration-300 text-white">
                              <h4 className="font-semibold mb-2 text-[30px]  ">
                                {industry.emoji}
                              </h4>
                              <p className="text-xl text-center mb-4">
                                {industry.title}
                              </p>

                            </div>

                            {/* Hover Overlay (Displays on Hover) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-4 text-white"
                            >
                              <h4 className="text-lg font-semibold mb-2">
                                {industry.title}
                              </h4>
                              <p className="text-sm text-center mb-4">
                                {industry.description}
                              </p>
                              <Button className="border-white">
                                Learn More
                              </Button>
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    </Link>
                  </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block ">
              <CarouselPrevious className="-left-16 hover:bg-primary" />
              <CarouselNext className="-right-16 hover:bg-primary" />
            </div>
          </Carousel>
        </div>
      </section>
  );
};

export default Industries;