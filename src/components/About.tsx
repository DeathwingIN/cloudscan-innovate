import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { aboutHero, aboutFeatures } from "@/data/AboutData";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const About = () => {
    const navigate = useNavigate();
    const features = aboutFeatures.map(f => f.title);

    return (
        <section className="relative py-28 bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden" id="about"

        >
            {/*Animated background*/}

            <motion.div
                // animate={{
                //     rotate: 90,
                //     backgroundPosition: ['0% 0%', '100% 100%']
                // }}
                // transition={{
                //     duration: 40,
                //     repeat: Infinity,
                //     ease: "linear"
                // }}
                className="absolute -top-1/2 left-1/2 w-[200%] aspect-square rounded-full"
                style={{
                    background: `
      linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent),
      url('https://plus.unsplash.com/premium_photo-1670249421324-232b654455d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    `,
                    // backgroundSize: '150% 150%',
                    backgroundBlendMode: 'soft-light'
                }}
            />

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
                                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transform transition hover:scale-105"
                            >
                                {aboutHero.cta} →
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/*/!* 3D Sphere Section *!/*/}
                    {/*<motion.div*/}
                    {/*    initial={{scale: 0.8, opacity: 0}}*/}
                    {/*    animate={{scale: 1, opacity: 1}}*/}
                    {/*    className="relative h-96 flex items-center justify-center"*/}
                    {/*>*/}
                        {/*/!* Rotating Sphere *!/*/}
                    {/*    /!*<div className="absolute inset-0 flex items-center justify-center">*!/*/}
                    {/*    /!*    <motion.div*!/*/}
                    {/*    /!*        animate={{rotateY: 360}}*!/*/}
                    {/*    /!*        transition={{duration: 25, repeat: Infinity, ease: "linear"}}*!/*/}
                    {/*    /!*        className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl"*!/*/}
                    {/*    /!*    />*!/*/}
                    {/*    /!*</div>*!/*/}

                        {/*/!* Floating Cards *!/*/}
                    {/*    /!*{features.map((feature, index) => (*!/*/}
                    {/*    /!*    <motion.div*!/*/}
                    {/*    /!*        key={feature}*!/*/}
                    {/*    /!*        initial={{scale: 0}}*!/*/}
                    {/*    /!*        animate={{scale: 1}}*!/*/}
                    {/*    /!*        transition={{*!/*/}
                    {/*    /!*            delay: index * 0.3,*!/*/}
                    {/*    /!*            type: "spring",*!/*/}
                    {/*    /!*            stiffness: 100*!/*/}
                    {/*    /!*        }}*!/*/}
                    {/*    /!*        className="absolute bg-white p-6 rounded-2xl shadow-xl "*!/*/}
                    {/*    /!*        style={{*!/*/}
                    {/*    /!*            ...getFloatingPosition(index),*!/*/}
                    {/*    /!*            width: '200px'*!/*/}
                    {/*    /!*        }}*!/*/}
                    {/*    /!*        whileHover={{scale: 1.05}}*!/*/}
                    {/*    /!*    >*!/*/}
                    {/*    /!*        <CheckCircle className="text-blue-600 mb-3"/>*!/*/}
                    {/*    /!*        <h3 className="font-semibold text-gray-800">{feature}</h3>*!/*/}
                    {/*    /!*    </motion.div>*!/*/}
                    {/*    /!*))}*!/*/}
                    {/*</motion.div>*/}
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