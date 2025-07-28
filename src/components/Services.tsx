import { Button } from "@/components/ui/button";
import { ArrowRight, QrCode, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/productData"; // Import shared product data

const Services = () => {
  return (
      <section id="services" className="py-20 bg-[rgba(44,170,226,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Description */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful, Precise, and Built for Performance
            </p>
          </motion.div>
          {/* Product Cards */}
          <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {Object.entries(products).map(([key, product]) => {
              const Icon = product.icon === "QrCode" ? QrCode : product.icon === "Database" ? Database : Smartphone;
              return (
                  <motion.div
                      key={key}
                      variants={{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, y: 0},
                      }}
                      transition={{duration: 0.6}}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}

                  >
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            {/* Icon */}
                            {/*<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">*/}
                            {/*    */}
                            {/*</div>*/}
                            <img src={product.icon} alt={product.title} className=" max-h-72 bg-cover overflow-hidden rounded-lg flex items-center justify-center mb-6"/>
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-secondary mb-4">
                                {product.title}
                            </h3>
                        </div>

                        {/* Learn More Button (Fixed Position) */}
                        <div>
                            <Link to={`/products/${key}`}>
                            <Button  className="group w-full md:w-auto">
                            Learn More
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                          </Button>
                        </Link>
                      </div>
                    </div>

                  </motion.div>

              );
            })}
          </motion.div>
        </div>
      </section>
  );
};

export default Services;