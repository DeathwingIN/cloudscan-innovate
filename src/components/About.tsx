import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
    const navigate = useNavigate();

    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Time delay between each child animating in
            },
        },
    };

    // Animation variants for the text and button to fade in and move up
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="about"
            // The section now has a simple background and still uses flexbox to center content.
            // min-h-[50vh] makes it take up half the viewport height, but you can change it to min-h-screen for a full-page effect.
            className="flex items-center justify-center w-full min-h-[60vh] bg-gray-50"
        >
            {/* Content Container */}
            <motion.div
                className="text-center px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Large Text - color changed to dark for readability */}
                <motion.h1
                    className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl"
                    variants={itemVariants}
                >
                    Cloud Smart where technology meets precision
                </motion.h1>

                {/* Small Text & Redirect Button */}
                <motion.div variants={itemVariants} className="mt-10">
                    <Button
                        onClick={() => navigate('/about-detail')}
                        // Updated button style for a solid background.
                        className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-colors duration-300 bg-primary rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                    >
                        Discover the Cloud Smart advantage
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;