import manufacturingImage from '../../public/Industries/Manufacturing.jpg';
import warehousingImage from '../../public/Industries/Warehousing.jpg';
import retailImage from '../../public/Industries/Retail.jpg';
import healthcareImage from '../../public/Industries/hospital.jpg';
import transportationImage from '../../public/Industries/Transportation.jpg';
import foodImage from '../../public/Industries/food.jpg';

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
    description03: string;

}

export const industries: Record<string, Industry> = {
    manufacturing: {
        id: "manufacturing",
        title: "Manufacturing",
        emoji: "🏭",
        shortDescription: "Track. Optimize. Automate.",
        description: "Improve production efficiency with real-time material tracking, automated workflows, and seamless ERP integration.",
        description2:"In manufacturing, precision, speed, and efficiency aren’t optional—they’re essential. Cloud Smart’s barcode and mobile solutions empower manufacturers to eliminate errors, reduce downtime, and achieve full supply chain visibility with seamless real-time tracking and automated workflows that optimize production processes.",
        description03:"Revolutionize Production with Smart Automation",
        image: manufacturingImage,
        challenges: [
            "Manual tracking errors that cause production delays",
            "Inventory discrepancies leading to material shortages",
            "Inefficiencies in work order processing & tracking",
            "Struggles with regulatory compliance & traceability",
        ],
        solutions: [
            "Live Tracking:   Know where every material is in real-time.   ",
            "Smart Automation:   Assign tasks instantly with barcode scanning.  ",
            "ERP Sync:   Seamless integration for precise reporting.  ",
            "Full Traceability:   Stay compliant with automated audits.  ",
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
        description03:"Maximize Warehouse Efficiency & Reduce Errors",
        description2:"Warehouses operate in high-pressure, high-volume environments where errors cost time and money. Cloud Smart’s barcode-driven inventory solutions ensure every item is accounted for, properly stored, and quickly retrieved for faster fulfillment",
        image: warehousingImage,
        challenges: [
            "Slow and error-prone order picking and packing",
            "Overstocking or stock outs due to inaccurate inventory",
            "Wasted warehouse space & poor layout optimization",
            "Late shipments & misplaced orders causing customer dissatisfaction",
        ],
        solutions: [
            "Real-Time Updates:   Never lose track of inventory again.  ",
            "Automated Picking:   Speed up fulfillment with zero errors",
            "Smart Layouts:   Optimize space with barcode mapping.  ",
            "End-to-End Tracking:   Sync with shipping providers for faster deliveries.",
        ],
        benefits: [
            "99% inventory accuracy with barcode automation",
            "Cut order processing time in half and reduce errors",
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
        description03:"Faster Checkouts, Smarter Stock Management",
        image: retailImage,
        challenges: [
            "Lost revenue from incorrect stock levels and stock outs",
            "Long checkout lines and frustrated customers",
            "Pricing errors and mismatches in POS systems",
            "Difficulty managing multi-location inventory",
        ],
        solutions: [
            "Instant Stock Sync:   Manage all locations from one dashboard.  ",
            "Mobile Checkouts:   Scan and sell faster than ever.",
            "Smart Alerts:   Never run out of best-sellers again.  ",
            "Dynamic Pricing:   Update prices across platforms in real-time.  ",
        ],
        benefits: [
            "Boost customer satisfaction with faster checkouts",
            "Reduce inventory loss with automated tracking",
            "Optimize pricing accuracy with barcode-verified transactions",
            "Sell smarter with real-time sales insights and alerts",
        ],
    },
    Healthcare: {
        id: "Healthcare",
        title: "Healthcare",
        emoji: "🏥",
        shortDescription: "Accuracy That Saves Lives.",
        description: "Ensure error-free patient care, track medical inventory, and maintain regulatory compliance with barcode-enabled safety.",
        description2:"In healthcare, accuracy saves lives. Cloud Smart ensures that medications, supplies, and patient data are tracked with 100% precision, reducing risks and improving care quality.",
        description03:"Enhancing Patient Safety with Accurate Data Tracking",
        image: healthcareImage,
        challenges: [
            "Medication errors caused by accidental mislabeling",
            "Lost or misplaced medical equipment leading to inefficiencies",
            "Regulatory compliance failures resulting in severe consequences",
            "Inventory mismanagement causing unnecessary treatment delays",

        ],
        solutions: [
            "Barcode-Based Patient Identification: Match medication to patient.",
            "Inventory Control:   Track supplies in real-time to prevent shortages.  ",
            "Regulatory Ready:   Full traceability for audits and compliance.",
            "EHR Integration:   Sync data instantly for seamless care.",
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
        description03:"Real-Time Shipment Tracking & Delivery Optimization",
        image: transportationImage,
        challenges: [
            "Late deliveries & lost shipments causing customer dissatisfaction",
            "Inefficient package sorting & route planning leading to delays",
            "Manual paperwork slowing down logistics and increasing errors",
            "Limited real-time tracking visibility hindering operational efficiency",
        ],
        solutions: [
            "Live Tracking:   Monitor every package in real-time.  ",
            "Route Optimization:   AI-powered logistics for faster deliveries.",
            "Warehouse-to-Doorstep:   Full visibility from start to finish.",
            "Digital Proof:   Instant delivery confirmations with e-signatures.  ",
        ],
        benefits: [
            "100% shipment traceability with barcode tracking",
            "Cut shipping errors by 80% with advanced tracking systems.",
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
        description03:"Ensure Quality, Compliance, and Efficient Supply Chain Management",
        image: foodImage,
        challenges: [
            "Difficulty maintaining food safety compliance and traceability",
            "Expired or wasted inventory due to lack of visibility",
            "Slow and inefficient order processing causing delivery delays",
            "Managing multiple distribution channels effectively",
        ],
        solutions: [
            "Expiration Control:   Automate FIFO to reduce waste.",
            "End-to-End Traceability:   Track raw materials to finished goods.",
            "Smart Fulfillment:   Barcode-enabled picking for faster orders.",
            "ERP Sync:   Prevent stock outs with seamless integration. ",
        ],
        benefits: [
            "Ensure food safety compliance with automated tracking",
            "Reduce waste and expired stock through real-time monitoring",
            "Improve order accuracy and faster delivery times",
            "Gain full transparency across the supply chain",
        ],
    },

};