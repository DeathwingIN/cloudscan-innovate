import { useState, useEffect } from "react";
// Removed unused imports like Button, ArrowRight, useNavigate as they are not used in the current version of Hero

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Desktop slides (existing images)
    const desktopSlides = [
        { image: "Heo0501.svg" },
        { image: "Heo0502.svg" },
        { image: "Heo0503.svg" },
        { image: "Heo0504.svg" },
        { image: "Heo0505.svg" },
    ];

    // Mobile slides (placeholder images - replace with actual mobile images)
    const mobileSlides = [
        { image: "Heo0501-mobile.svg" }, // Placeholder - replace with actual mobile image
        { image: "Heo0502-mobile.svg" }, // Placeholder - replace with actual mobile image
        { image: "Heo0503-mobile.svg" }, // Placeholder - replace with actual mobile image
        { image: "Heo0504-mobile.svg" }, // Placeholder - replace with actual mobile image
        { image: "Heo0505-mobile.svg" }, // Placeholder - replace with actual mobile image
    ];

    const slides = desktopSlides; // Default to desktop slides for timer length

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        // Full screen height for all devices since mobile images will be 9:16 ratio
        <div className="relative w-full h-screen max-h-screen overflow-hidden bg-white">
            {/* Desktop Images - Hidden on mobile */}
            <div className="hidden sm:block">
                {desktopSlides.map((slide, index) => (
                    <div
                        key={`desktop-${index}`}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Hero Slide ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Images - Visible only on mobile (9:16 ratio for Full HD mobile) */}
            <div className="block sm:hidden">
                {mobileSlides.map((slide, index) => (
                    <div
                        key={`mobile-${index}`}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Mobile Hero Slide ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                                // Fallback to desktop image if mobile image doesn't exist
                                const target = e.target as HTMLImageElement;
                                target.src = desktopSlides[index].image;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Responsive Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                            index === currentSlide
                                ? "bg-primary w-6 sm:w-8 scale-125"
                                : "bg-white/80 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;