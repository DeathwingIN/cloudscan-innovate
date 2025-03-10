import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { aboutHero, aboutFeatures } from "@/data/AboutData";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
    const navigate = useNavigate();
    const features = aboutFeatures.map(f => f.title);

    return (
        <section className="relative py-28 bg-[rgba(44,170,226,0.8)] overflow-hidden" id="about"

        >
            {/*Animated background*/}
            {/*<motion.div*/}
            {/*    className="absolute -top-1/2 left-1/4 w-[200%] aspect-square rounded-full overflow-hidden"*/}
            {/*>*/}
            {/*    /!* Video Background *!/*/}
            {/*    <video*/}
            {/*        autoPlay*/}
            {/*        loop*/}
            {/*        muted*/}
            {/*        playsInline*/}
            {/*        className="absolute inset-0 w-1/2  object-right-bottom z-0"*/}
            {/*    >*/}
            {/*        <source src="/V.mp4" type="video/mp4"/>*/}
            {/*        Your browser does not support the video tag.*/}
            {/*    </video>*/}
            {/*</motion.div>*/}
            <motion.div
                className="absolute inset-0 w-full h-full" // Cover entire section
                initial={{opacity: 0, scale: 1.2}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1, ease: "easeOut"}}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover" // Full coverage with proper aspect ratio
                >
                    <source src="/V.mp4" type="video/mp4"/>

                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"/>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {opacity: 0},
                            visible: {
                                opacity: 1,
                                transition: {staggerChildren: 0.2}
                            }
                        }}
                        className="space-y-8 text-white"
                    >
                        <motion.h1
                            variants={{hidden: {y: 30, opacity: 0}, visible: {y: 0, opacity: 1}}}
                            className="text-5xl md:text-6xl font-bold leading-tight"
                        >
                            {aboutHero.title}
                        </motion.h1>

                        <motion.p
                            variants={{hidden: {x: -30, opacity: 0}, visible: {x: 0, opacity: 1}}}
                            className="text-xl text-blue-100"
                        >
                            {aboutHero.subtitle}
                        </motion.p>

                        <motion.div
                            variants={{hidden: {scale: 0.9, opacity: 0}, visible: {scale: 1, opacity: 1}}}
                        >
                            <Button
                                onClick={() => navigate('/about-detail')}
                                className="bg-white text-primary hover:bg-blue-50 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transform transition hover:scale-105"
                            >
                                {aboutHero.cta} →
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Positioning helper
const getFloatingPosition = (index: number) => {
    const angles = [30, 150, 210, 330];
    const radius = 160;
    return {
        x: radius * Math.cos((angles[index] * Math.PI) / 180),
        y: radius * Math.sin((angles[index] * Math.PI) / 180)
    };
};

export default About;