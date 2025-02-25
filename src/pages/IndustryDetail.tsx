// src/pages/IndustryDetail.tsx
import { motion } from 'framer-motion';
import { industries } from '@/data/IndustryData';
import {Link, useParams} from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, CheckCircle, Cog } from 'lucide-react';

// Animation Variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delayChildren: 0.1, staggerChildren: 0.2 }
    }
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const IndustryDetail = () => {
    const { industryId } = useParams<{ industryId: string }>();
    const industry = industries[industryId as keyof typeof industries];
    if (!industry) {
        return <div className="font-semibold py-4 text-center">Industry not found</div>;
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-screen bg-gray-50 overflow-hidden"
        >
            {/* Hero Section */}
            <motion.div
                variants={itemVariants}
                className="relative h-[400px] bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden "
            >
                <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
                <div className="z-10 text-center space-y-4">
                    <h1 className="md:text-6xl  text-4xl font-bold text-white tracking-tight md:pt-5 pt-20">
                        {industry.title}
                    </h1>
                    <p className="md:text-xl  text-white max-w-5xl mx-auto px-5 ">
                        {industry.description2}
                    </p>
                </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
                variants={containerVariants}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 mt-16 md:grid-cols-3"
            >
                {/* Challenges Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 relative group min-h-[300px] overflow-x-hidden overflow-y-auto"
                >
                    <div className="text-red-500 mb-3">
                        <AlertTriangle size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Challenges</h3>
                    <ul className="text-gray-600 mt-2 list-outside list-disc ml-8 whitespace-normal break-words">
                        {industry.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>

                </motion.div>

                {/* Solutions Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 relative group min-h-[300px] overflow-x-hidden overflow-y-auto"
                >
                    <div className="text-green-500 mb-3">
                        <CheckCircle size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Solutions</h3>
                    <ul className="text-gray-600 mt-2 list-outside list-disc ml-8 whitespace-normal break-words">
                        {industry.solutions.map((solution, index) => (
                            <li key={index}>{solution}</li>
                        ))}
                    </ul>

                </motion.div>

                {/* Benefits Card */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 relative group min-h-[300px] overflow-x-hidden overflow-y-auto"
                >
                    <div className="text-blue-500 mb-3">
                        <Cog size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Benefits</h3>
                    <ul className="text-gray-600 mt-2 list-outside list-disc ml-8 whitespace-normal break-words">
                        {industry.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>

                </motion.div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
                variants={itemVariants}
                className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center"
            >
                <h2 className="md:text-5xl  text-4xl font-bold text-white mb-4 px-5">
                    {industry.description03}
                </h2>
                <p className="text-lg text-white max-w-2xl mx-auto mb-8">
                    Discover how our solutions can help you overcome challenges and achieve your goals.
                </p>

                <Link
                    to="/contact"
                >
                    <Button
                        variant="default"
                        className="group transform transition-transform  rounded-full px-8 py-5 text-lg font-semibold bg-white text-primary hover:text-white"

                    >
                        Get Support
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300 hover:text-white" />
                    </Button>
                </Link>


            </motion.div>
        </motion.section>
    );
};

export default IndustryDetail;