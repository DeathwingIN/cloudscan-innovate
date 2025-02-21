// src/pages/IndustryDetail.tsx

import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/IndustryData";

const IndustryDetail = () => {
    const { industryId } = useParams<{ industryId: string }>();
    const industry = industries[industryId as keyof typeof industries];

    if (!industry) {
        return <div>Industry not found</div>;
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-secondary mb-4">
                        {industry.title}
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {industry.description}
                    </p>
                </div>

                {/* Challenges */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">
                        Industry Challenges
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {industry.challenges.map((challenge, index) => (
                            <li
                                key={index}
                                className="flex items-start space-x-2 text-red-500"
                            >
                                ❌
                                <span>{challenge}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Solutions */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">
                        How Cloud Smart Helps
                    </h2>
                    <ul className="space-y-4">
                        {industry.solutions.map((solution, index) => (
                            <li
                                key={index}
                                className="flex items-start space-x-2 text-green-500"
                            >
                                ✅
                                <span>{solution}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">
                        Why Choose Cloud Smart?
                    </h2>
                    <ul className="space-y-4">
                        {industry.benefits.map((benefit, index) => (
                            <li
                                key={index}
                                className="flex items-start space-x-2 text-blue-500"
                            >
                                ✔
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Button
                        variant="default"
                        className="group transform transition-all hover:scale-105"
                    >
                        Transform Your Process
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IndustryDetail;