import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
              Smart Scanning for
              <span className="text-primary"> Modern Business</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Transform your business operations with our innovative smart scanners and companion app.
              Seamlessly integrate with Microsoft Business Central.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl animate-float">
              {/* Placeholder for 3D animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">3D Scanner Animation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;