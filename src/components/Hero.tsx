import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
      <section
          id="home"
          className="h-screen bg-cover bg-center bg-no-repeat overflow-hidden relative"
          style={{
            backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1663040309722-6c9dbe9a1f0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 min-h-screen"
            >
              {/* Text Content */}
              <div
                  className="flex-1 text-center md:text-left max-w-md lg:max-w-lg pt-[150px]  md:pt-0"
                  style={{ margin: "0 auto" }} // Center content on mobile
              >
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight md:leading-normal"
                >
                  Smart Scanning for
                  <span className="text-primary"> Modern Business</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8"
                >
                  Transform your business operations with our innovative smart
                  scanners and companion app. Seamlessly integrate with Microsoft
                  Business Central.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <Button size="lg" className="group transform transition-all hover:scale-105">
                    Explore Products
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                  <Button size="lg" variant="outline" className="group transform transition-all border-0 hover:scale-105">
                    Watch Demo
                  </Button>
                </motion.div>
              </div>

              {/* Video (Visible Only on Medium and Larger Screens) */}
              <div className="hidden md:flex flex-1 relative">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl animate-float shadow-lg"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Video Embed */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/placeholder.svg" // Path to a fallback image
                        className="w-full h-full object-cover rounded-2xl"
                    >
                      <source src="/scannervideo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Hero;