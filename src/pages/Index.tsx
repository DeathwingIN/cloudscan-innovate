
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="min-h-screen bg-white relative">
            {/*<Hero/>*/}
            {/*<Hero2/>*/}
            <Hero3/>
            <About/>
            <Industries />

            <Services/>

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
    );
};

export default Index;
