import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, QrCode, Database } from "lucide-react";

const Services = () => {
  const products = [
    {
      title: "Smart Scanner Pro",
      icon: QrCode,
      description: "Advanced QR scanning with real-time ERP updates",
    },
    {
      title: "Scanner Lite",
      icon: Database,
      description: "Efficient scanning solution for small businesses",
    },
    {
      title: "CloudSmart App",
      icon: Smartphone,
      description: "Companion app for seamless integration",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of smart scanning solutions designed to streamline your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <product.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">{product.title}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;