// productData.ts
export const products = {
    "smart-scanner-pro": {
        title: "Handheld Scanners ",
        description: "The SCX41 is a high-performance handheld terminal designed for industrial applications, featuring a 4.0-inch HD screen," +
            " high-speed Octa-Core processor, and Android 10/13 OS. " +
            "It supports advanced barcode scanning, NFC, and seamless data collection to improve operational efficiency.",
        name: "SCX41 Handheld Terminal",
        icon: "./MobileType/Mob02.jpg",
        images: [
            "/MobileType/Mob01.jpg",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        ],
        features: [
            "Lightning-fast scanning with high-precision accuracy",
            "Wireless, Bluetooth-enabled for seamless mobility",
            "Durable, ergonomic designs built for industrial & commercial use",
        ],
        specifications: {
                Display: "4.0-inch HD screen (480x800)",
                Processor: "Cortex-A53 Octa-core 2.0GHz",
                "Operating System": "Android 10 / Android 13",
                Memory: "4GB RAM + 64GB ROM (expandable up to 256GB)",
                "Barcode Scanning": {
                    "1D": "Mindeo SE966, Honeywell N4313",
                    "2D": "Honeywell N6603/6703/5703, Zebra SE4710/4750/4850",
                    "Supported Codes": "QR, Data Matrix, PDF417, Aztec, etc.",
                },
                Camera: {
                    Rear: "8MP (autofocus, flash, anti-shake)",
                    Front: "2MP",
                },
                Battery: "7.6V 3750mAh removable (12+ hours working time)",
                Connectivity: "4G LTE | Dual-band WiFi | Bluetooth 5.0 | GPS",
                Durability: "IP66-rated | 1.2m drop resistance | -20°C to 55°C operating temp",
                Ports: "Type-C USB (OTG), Dual SIM, TF Card",
                Extras: "NFC (Optional), POGO Pin",
        },
    },
    "scanner-lite": {
        title: "Mobile Phone-Style Scanners",
        description: "The SMT71i is a powerful, rugged mobile terminal with a 6-inch IPS display, Android 13 OS, and high-speed Cortex-A76 processor. " +
            "It offers superior barcode scanning, NFC, and UHF RFID for high-performance enterprise applications.",
        name: "SMT71i Handheld Terminal",
        icon: "./SCX41.webp",// Icon name for Services.tsx
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        ],
        features: [
            "Customizable label printing for every industry need",
            "Automated lot tracking & expiration management",
            "Configurable pallet quantity & label setup",
        ],
        specifications: {
            Display: ":6-inch IPS screen (720x1440 / 1080P)",
            Processor: "Cortex-A76/A55 2.3GHz",
            "Operating System": "Android 13",
            Memory: "4GB RAM + 64GB Storage",
            "Barcode Scanning": {
                "Default": "CM60 | Optional: SE4710, N1",
                "Supported Codes": "QR, Data Matrix, PDF417, MaxiCode, etc.",
            },
            Camera: {
                Rear: "13MP (autofocus, flash, anti-shake)",
                Front: "5MP",
            },
            Battery: "7.7V 4000mAh removable (15+ hours working time)",
            Connectivity: "4G LTE | Dual-band WiFi | Bluetooth 5.0",
            Durability: "IP68-rated | 1.8m drop resistance | -30°C to 55°C operating temp",
            Ports: "Type-C USB (OTG), Nano SIM, PSAM slot",
            Extras: "NFC (Optional), UHF RFID (Optional, up to 15m range)",
        },
    },
    "cloudsmart-app": {
        title: "Cloud Smart Mobile Application",
        description: "Companion app for seamless integration",
        name: "Contact for Pricing",
        icon: "./SCX41.webp", // Icon name for Services.tsx
        images: [
            "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        ],
        features: [
            "Durable, ergonomic designs built for industrial & commercial use",
            "Real-time tracking for inventory, production, and shipping",
            "Intuitive, user-friendly interface for fast, error-free operations",
        ],
        specifications: {
            "Platform": "iOS & Android",
            "Cloud Storage": "Unlimited",
            "Updates": "Automatic",
            "Security": "Enterprise-grade Encryption",
            "Integration": "Microsoft Business Central API",
            "Support": "24/7 Technical Support",
        },
    },



};