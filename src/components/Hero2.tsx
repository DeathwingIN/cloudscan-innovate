import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
      <section
          id="home"
          className="h-screen relative overflow-hidden "
          style={{
            background: "linear-gradient(135deg, #f5f5f5 50%, #ffffff 50%)"
          }}
      >
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 h-full"
            >
              {/* Left Content */}
              <div className="flex-1 text-center md:text-left max-w-md lg:max-w-lg -mt-[100px] md:mt-0 ">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:leading-normal"
                >
                  Smarter Scanning Faster Operations
                  <span className="text-primary"> Zero Errors</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-lg lg:text-xl text-black/90 mb-6 sm:mb-8"
                >
                  Supercharge your business with Cloud Smart’s barcode and mobile scanning solutions. Whether you’re managing
                  inventory, tracking production, or streamlining
                  logistics, our cutting-edge technology ensures every step is fast, accurate, and effortless.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <Button
                      size="lg"
                      className="group transform transition-all border-0 hover:scale-105 "
                      onClick={() => {
                        window.open("https://www.youtube.com/watch?v=uLsfAou6C1U");
                      }}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </div>

              {/* Background Image Container */}
              <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 pt-20 ">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(/3.png)",
                      transformOrigin: "right center"
                    }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden absolute bottom-0 left-0 w-full h-screen ">
          <img
              src="/3.png"
              alt="Product demo"
              className="w-full h-1/2 object-cover mt-[350px]"
          />
          <div className="absolute inset-0 bg-white/50"></div>
        </div>
      </section>
  );
};

export default Hero;