import React, { useState, useEffect } from "react";
 import Hero from "@/components/Hero";
//import Hero from "@/components/Hero2";
import About from "@/components/About";
import Services from "@/components/Services";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Show/hide scroll-to-top button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-white  relative">



            {/* Main Content */}
            <Hero/>
            <About/>
            <Services/>

            {/* Scroll-to-Top Button */}
            {showScrollButton && (
                <motion.button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.3}}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
                >
                    <ArrowUp size={20}/>
                </motion.button>
            )}


        </div>

    // <div>
    //     <Hero/>
    //     <About/>
    //     <Services/>
    // </div>

    );
};

export default Index;