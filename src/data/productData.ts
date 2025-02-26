// productData.ts
export const products = {
    "smart-scanner-pro": {
        title: "Handheld Scanners ",
        description: "The SCX41 is a high-performance handheld terminal designed for industrial applications, featuring a 4.0-inch HD screen," +
            " high-speed Octa-Core processor, and Android 10/13 OS. " +
            "It supports advanced barcode scanning, NFC, and seamless data collection to improve operational efficiency.",
        name: "SCX41 Handheld Terminal",
        icon: "./HandHeld/H01.jpg",
        images: [
            "/HandHeld/H02.jpg",
            "/HandHeld/H03.jpg",
            "/HandHeld/H04.jpg",
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
        icon: "./MobileType/Mob01.jpg",
        images: [
            "/MobileType/Mob06.jpg",
            "/MobileType/Mob03.jpg",
            "/MobileType/Mob04.jpg",
            // "/MobileType/Mob07.jpg",
            // "/MobileType/Mob08.jpg",
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
        title: "Mobile Application",
        description: "The Cloud Smart Mobile Application is a robust mobile solution designed to integrate seamlessly with Microsoft Dynamics 365 Business Central. Tailored for industries like manufacturing, warehousing, and logistics, this app streamlines inventory management, production tracking, and order fulfillment—ensuring accuracy, efficiency, and real-time data synchronization.",
        name: "Contact for Pricing",
        icon: "/App/3.png", // Icon name for Services.tsx
        images: [
            "/App/3.png",
            "/App/2.png",
            "/App/1.png",
        ],
        features: [
            "Barcode Scanning & Validation: Scan supplier, pallet, and item barcodes to validate against purchase orders, production orders, and sales orders.",
            "Automated Journal Creation: Automatically generate Consumption, Output, and Shipment Journals in Business Central for real-time updates.",
            "Customizable Label Printing: Print barcode labels directly from the app, including Lot Numbers, Expiration Dates, and Item Descriptions.",
            "Configurable Quantity Management: Adjust pallet quantities, expiration dates, and lot details with ease.",
        ],
        specifications: {
            'Core Modules': {
                Receive: "Streamline goods receiving, validate supplier barcodes, and post Goods Receipt Notes directly to Business Central.",
                Consumption: "Track raw material usage, manage component lines, and automate Consumption Journal creation.",
                Output: "Record finished goods production, validate pallet details, and submit Output Journal Lines.",
                Ship: "Fulfill sales orders, validate shipments, and post Sales Shipments directly from the app.",
            },
            'Supported Codes': "QR, Data Matrix, PDF417, MaxiCode, and more.",
            Integration: "Fully integrated with Microsoft Dynamics 365 Business Central for real-time data sync.",
            'Device Compatibility': "Optimized for rugged mobile scanners like the SMT71i, ensuring high performance in demanding environments.",
        },
    },



};