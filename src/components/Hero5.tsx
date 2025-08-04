import { useState, useEffect } from "react";

const Hero = () => {
    // --- Manually Adjustable Breakpoints ---
    // Adjust these pixel values to change when the layout switches.
    const DESKTOP_BREAKPOINT = 1024;
    const TABLET_BREAKPOINT = 768;

    // --- Utility function to detect device type ---
    const getDeviceType = (width: number, height: number) => {
        const aspectRatio = width / height;
        
        if (width >= DESKTOP_BREAKPOINT) {
            // Large tablets like iPad Pro have wider screens but lower aspect ratios
            // iPad Pro 12.9" has aspect ratio ~1.33, regular desktops are usually ~1.77+
            if (aspectRatio < 1.6) {
                return { 
                    type: 'large-tablet', 
                    useContain: true,   // Prevent cropping on tablet-like devices
                    bgWhite: true       // Add white background for contain mode
                };
            }
            return { 
                type: 'desktop', 
                useContain: false,      // Desktop images are designed for cover mode
                bgWhite: false 
            };
        } else if (width >= TABLET_BREAKPOINT) {
            return { 
                type: 'tablet', 
                useContain: true,       // Regular tablets also benefit from contain mode
                bgWhite: true 
            };
        }
        return { 
            type: 'mobile', 
            useContain: false,          // Mobile images work well with cover mode
            bgWhite: false 
        };
    };

    // --- Data for different devices ---
    const desktopSlides = [
        { image: "Heo0501.svg" },
        { image: "Heo0502.svg" },
        { image: "Heo0503.svg" },
        { image: "Heo0504.svg" },
        { image: "Heo0505.svg" },
    ];

    const tabletSlides = [
        { image: "Heo0501-tablet.svg" },
        { image: "Heo0502-tablet.svg" },
        { image: "Heo0503-tablet.svg" },
        { image: "Heo0504-tablet.svg" },
        { image: "Heo0505-tablet.svg" },
    ];

    const mobileSlides = [
        { image: "Heo0501-mobile.svg" },
        { image: "Heo0502-mobile.svg" },
        { image: "Heo0503-mobile.svg" },
        { image: "Heo0504-mobile.svg" },
        { image: "Heo0505-mobile.svg" },
    ];
    
    // --- State Management ---
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeSlides, setActiveSlides] = useState(desktopSlides);
    const [deviceInfo, setDeviceInfo] = useState({
        type: 'desktop',
        useContain: false,
        bgWhite: false
    });

    // --- Hooks ---

    // useEffect to set the correct slides based on window width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            const deviceType = getDeviceType(width, height);
            setDeviceInfo(deviceType);
            
            // Uncomment for debugging device detection
            // console.log(`Device: ${width}x${height}, ratio: ${(width/height).toFixed(2)}, type: ${deviceType.type}`);
            
            if (width >= DESKTOP_BREAKPOINT) {
                setActiveSlides(desktopSlides);
            } else if (width >= TABLET_BREAKPOINT) {
                setActiveSlides(tabletSlides);
            } else {
                setActiveSlides(mobileSlides);
            }
        };

        handleResize(); // Set the initial slides on mount
        window.addEventListener("resize", handleResize);

        // Cleanup: remove the event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, [DESKTOP_BREAKPOINT, TABLET_BREAKPOINT]); // Rerun if breakpoints were to change dynamically

    // Slideshow timer effect
    useEffect(() => {
        setCurrentSlide(0); // Reset to first slide if the slide deck changes

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [activeSlides]);

    return (
        <div className="relative w-full h-screen max-h-screen overflow-hidden bg-white">
            {/* Desktop Images */}
            <div className="hidden lg:block">
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
                            // Remember you can change 'object-center' to 'object-top', 'object-left', etc.
                            // to control image cropping on different screens.
                            className={`w-full h-full ${deviceInfo.useContain ? 'object-contain' : 'object-cover'} object-center ${deviceInfo.bgWhite ? 'bg-white' : ''}`}
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {/* Tablet Images */}
            <div className="hidden md:block lg:hidden">
                {tabletSlides.map((slide, index) => (
                    <div
                        key={`tablet-${index}`}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Tablet Hero Slide ${index + 1}`}
                            className={`w-full h-full ${deviceInfo.useContain ? 'object-contain' : 'object-cover'} object-center ${deviceInfo.bgWhite ? 'bg-white' : ''}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = desktopSlides[index].image;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Images */}
            <div className="block md:hidden">
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
                            className={`w-full h-full ${deviceInfo.type === 'mobile' ? 'object-cover' : 'object-contain'} object-center ${deviceInfo.bgWhite ? 'bg-white' : ''}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = desktopSlides[index].image;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Responsive Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
                {activeSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${
                            index === currentSlide
                                ? "bg-primary w-6 sm:w-8 md:w-10 scale-125"
                                : "bg-white/80 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;