// src/data/IndustryData.ts

export interface Industry {
    id: string;
    title: string;
    description: string;
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
        title: "Smart Manufacturing",
        emoji: "🏥️",
        shortDescription: "Revolutionizing patient care",
        description: "Revolutionize Production with Smart Automation",
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
    healthcare: {
        id: "healthcare",
        title: "Healthcare",
        emoji: "🏥️",
        shortDescription: "Revolutionizing patient care",
        description: "Enhance Patient Care with Seamless Inventory Management",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        challenges: [
            "Difficulty managing medical supplies efficiently",
            "Errors in manual inventory tracking",
            "Lack of real-time visibility into stock levels",
        ],
        solutions: [
            "Real-time inventory tracking with barcode scanning",
            "Automated alerts for low stock levels",
            "Integration with hospital management systems",
        ],
        benefits: [
            "Improved accuracy in inventory management",
            "Reduced operational costs",
            "Enhanced patient care through timely availability of supplies",
        ],
    },
    retail: {
        id: "retail",
        title: "Retail",
        emoji: "🏥️",
        shortDescription: "Revolutionizing patient care",
        description: "Optimize Inventory Tracking and Customer Experience",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        challenges: [
            "Stockouts and overstocking due to poor inventory management",
            "Manual processes leading to inefficiencies",
            "Difficulty personalizing customer experiences",
        ],
        solutions: [
            "Real-time inventory updates with smart scanning",
            "Automated restocking alerts and purchase orders",
            "Customer insights through integrated analytics",
        ],
        benefits: [
            "Minimized stockouts and overstocking",
            "Streamlined operations with automation",
            "Personalized customer experiences through data-driven insights",
        ],
    },
};