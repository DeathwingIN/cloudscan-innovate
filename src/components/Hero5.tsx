import { useState, useEffect } from "react";
// Removed unused imports like Button, ArrowRight, useNavigate as they are not used in the current version of Hero

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: "Heo0501.svg" },
        { image: "Heo0502.svg" },
        { image: "Heo0503.svg" },
        { image: "Heo0504.svg" },
        { image: "Heo0505.svg" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        // Fixed height and positioning to prevent bottom overlap
        <div className="relative w-full h-screen max-h-screen overflow-hidden  bg-white">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                    }`}
                >
                    <img
                        src={slide.image}
                        alt={`Hero Slide ${index + 1}`}
                        className="w-full h-full object-cover object-left"
                    />
                </div>
            ))}

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            index === currentSlide
                                ? "bg-primary w-8 scale-125"
                                : "bg-white/80 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;