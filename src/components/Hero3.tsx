import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Updated slides array with image properties
const slides = [
    {
        title: "Bringing Intelligence to Every Scan",
        subtitle: "Smarter Solutions. Limitless Possibilities",
        image: "3.png",
    },
    {
        title: "Boost Efficiency with Smart Tech & Custom Solutions",
        subtitle: "Smarter Scanning. Faster Operations. Zero Errors",
        image: "3.png",
    },
    {
        title: "From SMEs to Giants, Devices to Data  We Scale with You",
        image: "3.png",
    },
    {
        title: "From Shop Floor to Boardroom  Seamless Integration with Microsoft Dynamics 365",
        image: "3.png",
    },
    {
        title: "Beyond Service. A Partnership.",
        subtitle: "We're with you at every step",
        image: "3.png",
    },
];

const Hero3 = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="h-screen relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #f5f5f5 50%, #ffffff 50%)",
            }}
        >
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
                        <div className="flex-1 text-center md:text-left max-w-md lg:max-w-lg -mt-[100px] md:mt-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlide}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 50 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight md:leading-normal">
                                        {slides[activeSlide].title}
                                    </h1>
                                    {slides[activeSlide].subtitle && (
                                        <p className="text-lg md:text-lg lg:text-xl text-black/90">
                                            {slides[activeSlide].subtitle}
                                        </p>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
                            >
                                <Button
                                    size="lg"
                                    className="group transform transition-all border-0 hover:scale-105"
                                    onClick={() => {
                                        window.open("https://www.youtube.com/watch?v=uLsfAou6C1U");
                                    }}
                                >
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Image Container for Desktop */}
            <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${slides[activeSlide].image})`,
                            transformOrigin: "right center",
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === activeSlide ? "bg-primary" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>

            {/* Mobile Image */}
            <div className="md:hidden absolute bottom-0 left-0 w-full h-screen">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={activeSlide}
                        src={slides[activeSlide].image}
                        alt="Product demo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-1/2 object-cover mt-[350px]"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-white/50"></div>
            </div>
        </section>
    );
};

export default Hero3;