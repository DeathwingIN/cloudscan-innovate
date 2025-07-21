import { useState, useEffect } from "react";
// Removed unused imports like Button, ArrowRight, useNavigate as they are not used in the current version of Hero

const Hero = () => {
    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slide data, now only containing the image path
    // IMPORTANT: Ensure these image paths are correct relative to your public folder
    const slides = [
        {
            image: "Heo0501.png", // Example: if your image is in public/Heo0501.png
        },
        {
            image: "Heo0502.png",
        },
        {
            image: "Heo0503.png",
        },
        {
            image: "Heo0504.png",
        },
        {
            image: "Heo0505.png",
        },
    ];

    // useEffect hook to handle automatic slide transitions
    useEffect(() => {
        // Set up an interval to change the slide every 3 seconds (3000 milliseconds)
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle through slides
        }, 3000);

        // Cleanup function: Clear the interval when the component unmounts
        // This prevents memory leaks and ensures the timer stops when Hero is not on screen
        return () => clearInterval(timer);
    }, [slides.length]); // Dependency array: Re-run effect if slides.length changes (unlikely for static data)

    return (
        // Main container for the hero section, taking full width and 98% of viewport height
        // `overflow-hidden` ensures content outside this div's bounds is clipped
        <div className="relative w-full h-[98vh] overflow-hidden">
            {/* Map through the slides array to render each image as a background */}
            {slides.map((slide, index) => (
                <div
                    key={index} // Unique key is crucial for React list rendering
                    // Apply Tailwind CSS classes for absolute positioning and transitions
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                        index === currentSlide
                            ? "opacity-100 scale-100" // Current slide: fully visible, normal scale
                            : "opacity-0 scale-105" // Other slides: invisible, slightly scaled up for a subtle "zoom out" effect
                    }`}
                >
                    {/* The image element that fills its parent div */}
                    <img
                        src={slide.image} // Path to the image
                        alt={`Hero Slide ${index + 1}`} // Descriptive alt text for accessibility and SEO
                        className="w-full h-full object-cover" // Ensures image covers the area, cropping if necessary
                    />
                </div>
            ))}

            {/* Pagination dots at the bottom of the slider */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index} // Unique key for each button
                        onClick={() => setCurrentSlide(index)} // Clicking a dot changes the current slide
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            index === currentSlide
                                ? "bg-primary w-8 scale-125" // Active dot: wider, uses 'primary' color (assuming it's defined in Tailwind config), slightly larger
                                : "bg-white/80 hover:bg-white/70" // Inactive dots: semi-transparent white, brighter on hover
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;