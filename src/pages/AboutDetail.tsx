import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { aboutFeatures } from "@/data/AboutData";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

const AboutDetail = () => {
    const [activeTab, setActiveTab] = useState('benefits');

    return (
        <div className="min-h-screen  py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h1
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    className="text-5xl font-bold text-center mb-5 pt-10  "
                >
                    Revolutionizing Business Connections

                </motion.h1>
                <p className="text-muted-foreground  mx-auto mb-10">
                    We empower businesses with cutting-edge barcode and mobile solutions that eliminate inefficiencies, enhance accuracy, and automate workflows—giving you total control over your operations.
                    From real-time inventory tracking to seamless ERP integration, our technology ensures that every scan counts, every transaction is precise, and every decision is backed by data.

                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {aboutFeatures.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({feature, index}) => {
    const [activeTab, setActiveTab] = useState('benefits');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <Card className="h-full p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex flex-col h-full">
                    {/* Image Header */}
                    {/*<div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">*/}
                    {/*    <img*/}
                    {/*        src={feature.image}*/}
                    {/*        alt={feature.title}*/}
                    {/*        className="w-full h-full object-cover"*/}
                    {/*    />*/}
                    {/*    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />*/}
                    {/*    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">*/}
                    {/*        {feature.title}*/}
                    {/*    </h3>*/}
                    {/*</div>*/}

                    <div className="relative h-10 mb-6 rounded-2xl overflow-hidden ">

                        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-primary ">
                            {feature.title}
                        </h3>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex gap-2 mb-4">
                        {['benefits', 'industries', 'how'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full text-sm ${
                                    activeTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'benefits' && (
                        <div className="space-y-4">
                            {feature.benefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle className="flex-shrink-0 text-green-500 mt-1" />
                                    <p className="text-gray-600">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'industries' && (
                        <div className="grid grid-cols-2 gap-3">
                            {feature.industries.map((industry) => (
                                <div key={industry.name} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                    <span className="text-2xl">{industry.icon}</span>
                                    <div>
                                        <p className="font-medium">{industry.name}</p>
                                        <p className="text-sm text-gray-500">{industry.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'how' && (
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold mb-2">How It Works</h4>
                                <p className="text-gray-600">{feature.howItWorks}</p>
                            </div>
                            <div className="flex justify-end">
                                <Link to='/contact'>
                                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                                    {feature.cta}
                                    <ArrowRight size={18} />

                                </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};

export default AboutDetail;