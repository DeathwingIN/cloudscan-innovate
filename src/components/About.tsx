import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    "Seamless ERP Integration",
    "Real-time Data Sync",
    "Enterprise-grade Security",
    "24/7 Technical Support",
  ];

  return (
      <section id="about" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center md:text-start text-center">
          {/* Content Container */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3, // Staggered animation for child elements
                  },
                },
              }}
              className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Left Column: Text Content */}
            <motion.div
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                About CloudSmart
              </h2>
              <p className="text-muted-foreground mb-8">
                CloudSmart is revolutionizing business operations through innovative scanning solutions.
                Our mission is to streamline workflow processes and enhance productivity for businesses worldwide.
              </p>

              {/* Features List */}
              <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              >
                {features.map((feature) => (
                    <div key={feature} className="flex items-center md:m-0 m-auto gap-2">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-secondary ">{feature}</span>
                    </div>
                ))}
              </motion.div>

              {/* Button */}
              <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/*<Button size="lg">Learn More</Button>*/}
              </motion.div>
            </motion.div>

            {/* Right Column: Image Placeholder */}
            <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.8 }}
                className="flex-1 relative"
            >
              <div className="w-full md:block hidden h-[400px] bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
                {/* Add a background image or gradient */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage:
                          "url('https://plus.unsplash.com/premium_photo-1663040309722-6c9dbe9a1f0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;