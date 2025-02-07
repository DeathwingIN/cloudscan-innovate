import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Seamless ERP Integration",
    "Real-time Data Sync",
    "Enterprise-grade Security",
    "24/7 Technical Support",
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About CloudSmart
            </h2>
            <p className="text-muted-foreground mb-8">
              CloudSmart is revolutionizing business operations through innovative scanning solutions.
              Our mission is to streamline workflow processes and enhance productivity for businesses worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-secondary">{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg">Learn More</Button>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="w-full h-[400px] bg-white rounded-2xl shadow-lg p-8">
                {/* Placeholder for about image/content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Company Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;