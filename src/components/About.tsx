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
            className="flex items-center justify-center w-full min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] bg-gray-50 py-8 sm:py-12 lg:py-16"
        >
            {/* Content Container */}
            <motion.div
                className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Large Text - responsive typography */}
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-800 leading-tight"
                    variants={itemVariants}
                >
                    <span className="block sm:inline">Cloud Smart</span>{" "}
                    <span className="block sm:inline">Where Technology</span>{" "}
                    <span className="block sm:inline">Meets Precision</span>
                </motion.h1>

                {/* Small Text & Redirect Button */}
                <motion.div variants={itemVariants} className="mt-6 sm:mt-8 lg:mt-10">
                    <Button
                        onClick={() => navigate('/about-detail')}
                        // Responsive button styling
                        className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white duration-300 bg-primary rounded-full shadow-lg transition-transform hover:scale-105 group w-full sm:w-auto"
                    >
                        <span className="hidden sm:inline">Explore how Cloud Smart powers your business</span>
                        <span className="sm:hidden">Explore Cloud Smart</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;