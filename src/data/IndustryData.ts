// src/data/IndustryData.ts

export interface Industry {
    id: string;
    title: string;
    description: string;
    description2: string;
    image: string;
    challenges: string[];
    solutions: string[];
    benefits: string[];
    emoji: string;
    shortDescription: string;

}

export const industries: Record<string, Industry> = {
    manufacturing: {
        id: "manufacturing",
        title: "Manufacturing",
        emoji: "🏭",
        shortDescription: "Track. Optimize. Automate.",
        description: "Improve production efficiency with real-time material tracking, automated workflows, and seamless ERP integration.",
        description2:"In manufacturing, precision, speed, and efficiency aren’t optional—they’re essential. Cloud Smart’s barcode and mobile solutions empower manufacturers to eliminate errors, reduce downtime, and achieve full supply chain visibility with seamless real-time tracking and automated workflows.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        challenges: [
            "Manual tracking errors that cause production delays",
            "Inventory discrepancies leading to material shortages",
            "Inefficiencies in work order processing & tracking",
            "Struggles with regulatory compliance & traceability",
        ],
        solutions: [
            "Live Material & Production Tracking – Know exactly where your raw materials and finished goods are at all times.",
            "Automated Work Orders – Scan and assign tasks instantly, reducing processing time.",
            "Seamless ERP Integration – Sync all data with Microsoft Dynamics 365 Business Central for precise reporting.",
            "Compliance & Quality Control – Meet strict industry regulations with automated lot tracking and real-time audits.",
        ],
        benefits: [
            "Cut production downtime by 40% with automated workflows",
            "Reduce errors and waste with real-time barcode tracking",
            "Improve supply chain efficiency and on-time deliveries",
            "Stay compliant with full product traceability & reports",
        ],
    },
    Warehousing: {
        id: "Warehousing",
        title: "Warehousing & Distribution",
        emoji: "📦",
        shortDescription: "Faster Fulfillment. Zero Errors.",
        description: "Gain total inventory control, speed up order processing, and reduce stock discrepancies with barcode-driven automation.",
        description2:"Warehouses operate in high-pressure, high-volume environments where errors cost time and money. Cloud Smart’s barcode-driven inventory solutions ensure every item is accounted for, properly stored, and quickly retrieved for faster fulfillment",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Slow and error-prone order picking and packing",
            "Overstocking or stock outs due to inaccurate inventory",
            "Wasted warehouse space & poor layout optimization",
            "Late shipments & misplaced orders",
        ],
        solutions: [
            "Real-Time Inventory Updates – Never lose track of stock again with live data synchronization.",
            "Automated Order Picking & Packing – Boost fulfillment speeds while reducing human error.",
            "Optimized Space Utilization – Organize warehouse storage efficiently using barcode-assisted layout mapping.",
            "Integrated Shipping & Tracking – Sync with shipping providers to reduce delays.",
        ],
        benefits: [
            "99% inventory accuracy with barcode automation",
            "Cut order processing time in half",
            "Increase warehouse efficiency with AI-powered stock tracking",
            "Ensure faster, error-free deliveries to customers",
        ],
    },
    Retail: {
        id: "Retail",
        title: "Retail & E-Commerce",
        emoji: "🛒",
        shortDescription: "Smart Stock. Seamless Checkout.",
        description: "Enhance inventory accuracy, prevent stock outs, and enable fast, hassle-free checkouts with cutting-edge barcode technology.",
        description2:"Retail and e-commerce businesses thrive on speed, accuracy, and customer satisfaction. Cloud Smart ensures real-time inventory tracking, seamless checkout experiences, and automated restocking, so your business never skips a beat.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Lost revenue from incorrect stock levels",
            "Long checkout lines and frustrated customers",
            "Pricing errors and mismatches in POS systems",
            "Difficulty managing multi-location inventory",
        ],
        solutions: [
            "Instant Stock Updates Across Locations – Manage multiple stores and warehouses from a single dashboard.",
            "POS & Mobile Scanning Integration – Speed up checkouts and eliminate pricing errors.",
            "Automated Replenishment Alerts – Never run out of best-selling items again.",
            "Dynamic Pricing & Promotions – Ensure accurate and real-time price updates across platforms.",
        ],
        benefits: [
            "Boost customer satisfaction with faster checkouts",
            "Reduce inventory loss with automated tracking",
            "Optimize pricing accuracy with barcode-verified transactions",
            "Sell smarter with real-time sales insights",
        ],
    },
    Healthcare: {
        id: "Healthcare",
        title: "Healthcare",
        emoji: "🏥",
        shortDescription: "Accuracy That Saves Lives.",
        description: "Ensure error-free patient care, track medical inventory, and maintain regulatory compliance with barcode-enabled safety.",
        description2:"In healthcare, accuracy saves lives. Cloud Smart ensures that medications, supplies, and patient data are tracked with 100% precision, reducing risks and improving care quality.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Medication errors due to mislabeling",
            "Lost or misplaced medical equipment",
            "Regulatory compliance failures",
            "Inventory mismanagement causing treatment delays",
        ],
        solutions: [
            "Barcode-Based Patient Identification – Match the right medication to the right patient.",
            "Medical Inventory Tracking – Keep essential supplies stocked and accessible.",
            "Regulatory Compliance & Audits – Maintain full traceability for every dose, device, or procedure.",
            "Seamless Integration with EHR Systems – Ensure real-time updates in patient records.",
        ],
        benefits: [
            "Eliminate medication errors with barcode verification",
            "Reduce waste and stock outs of critical medical supplies",
            "Improve patient outcomes with real-time tracking",
            "Stay compliant with full regulatory traceability",
        ],
    },
    Transportation: {
        id: "Transportation",
        title: "Transportation & Logistics",
        emoji: "🚚",
        shortDescription: "Real-Time Visibility. Effortless Tracking.",
        description: "From warehouse to doorstep, manage shipments, reduce delays, and improve traceability with barcode-powered logistics.",
        description2:"In logistics, speed and accuracy determine success. Cloud Smart’s solutions help companies streamline fleet management, track shipments in real-time, and eliminate delivery errors.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Late deliveries & lost shipments",
            "Inefficient package sorting & route planning",
            "Manual paperwork slowing down logistics",
            "Limited real-time tracking visibility",
        ],
        solutions: [
            "Live Shipment Tracking – Get real-time updates on every package.",
            "Automated Sorting & Route Optimization – Reduce delivery time with AI-powered logistics.",
            "Warehouse-to-Doorstep Visibility – Ensure full tracking from sender to recipient.",
            "Digital Proof of Delivery – Capture electronic signatures and confirm receipt instantly.",
        ],
        benefits: [
            "100% shipment traceability with barcode tracking",
            "Cut shipping errors by 80%",
            "Increase on-time deliveries with optimized routes",
            "Digitize workflows for faster, paperless operations",
        ],
    },
    Food : {
        id: "Food",
        title: "Food & Beverage",
        emoji: "🍽",
        shortDescription: "Freshness. Safety. Compliance.",
        description: "Track expiration dates, manage perishable goods, and maintain food safety standards with barcode-enabled traceability.",
        description2:"The food and beverage industry demands precision, traceability, and strict compliance to ensure product safety and minimize waste. Cloud Smart helps businesses track inventory, manage expiration dates, and optimize supply chain efficiency.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Difficulty maintaining food safety compliance and traceability",
            "Expired or wasted inventory due to lack of visibility",
            "Slow and inefficient order processing causing delivery delays",
            "Managing multiple distribution channels effectively",
        ],
        solutions: [
            "Automated Lot Tracking & Expiration Date Management – Ensure FIFO (First-In-First-Out) inventory control and reduce waste.",
            "Traceability from Supplier to Consumer – Maintain full visibility of raw materials, production, and distribution for compliance.",
            "Smart Order Fulfillment & Delivery Coordination – Speed up processing times with barcode-enabled order picking and tracking.",
            "Seamless ERP Integration – Sync all inventory and order data with Microsoft Dynamics 365 Business Central to prevent stockouts.",
        ],
        benefits: [
            "Ensure food safety compliance with automated tracking",
            "Reduce waste and expired stock through real-time monitoring",
            "Improve order accuracy and faster delivery times",
            "Gain full transparency across the supply chain",
        ],
    },

};