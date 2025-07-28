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
            "Purchase Order Integration: Manage POs , scan barcodes, validate, print labels.",
            "Production Tracking: Track materials, scan components, update orders live. ",
            "Goods Management: Scan pallets, track lots, automate journals.",
            "Sales Fulfillment: Scan orders, validate shipments, post to Business Central.",
        ],
        specifications: {
            'Core Modules': {
                Receive:"Streamline goods receiving, validate supplier barcodes, and post Goods Receipt Notes directly to Business Central.",
                Consumption:"Track raw material usage, manage component lines, and automate Consumption Journal creation.",
                Output:"Record finished goods production, validate pallet details, and submit Output Journal Lines.",
                Ship:"Fulfill sales orders, validate shipments, and post Sales Shipments directly from the app.",
            },
            'Supported Codes':"QR, Data Matrix, PDF417, MaxiCode, and more.",
            Integration: "Fully integrated with Microsoft Dynamics 365 Business Central for real-time data sync.",

        },
    },

    "t10-rugged-smart-pda": {
        title: "T10 Rugged Smart PDA",
        description: "The T10 is a rugged Android 14 handheld terminal built for demanding environments such as warehousing, fleet management, asset tracking, and retail. Featuring a powerful Octa-Core processor, advanced 2D barcode scanning options (including long-range Zebra SE5500), and optional UHF RFID capability, the T10 is designed for high-efficiency data collection and durability in the field.",
        name: "T10 Rugged Smart PDA",
        icon: "/T10/T103.JPG",  
        images: [
            "/T10/T101.JPG",
            "/T10/T102.jpg",
            "/T10/T104.JPG",
        ],
        features: [
            "Rugged build with IP65 sealing and 1.5m drop resistance",
            "Optional long-range 2D scanning and UHF RFID for bulk reading",
            "Supports Android 14 OS, NFC, and multi-network connectivity",
        ],
        specifications: {
            Display: "5.5-inch IPS HD+ screen (720x1440) with Corning Gorilla Glass. Supports touch input with gloves and wet hands",
            Processor: "Octa-core 64-bit CPU (2× Arm Cortex-A76 up to 2.2GHz, 6× Arm Cortex-A55 up to 2.0GHz). GPU: Arm Mali-G57 MC2",
            "Operating System": "Android 14 (Google Certified)",
            Memory: "4GB RAM + 64GB ROM. Optional: 6GB RAM + 128GB ROM. Expandable up to 256GB via TF card",
            "Barcode Scanning (Optional)": {
                "2D Scanners": "Newland N1, Zebra SE4770 / SE5500 (long-distance)",
                "Supported Codes": "PDF417, QR, Data Matrix, Aztec, MaxiCode, Micro QR, Postal Codes (US, UK, JP, AU, Dutch), and more",
            },
            Camera: {
                Rear: "16MP with autofocus and flash",
                Front: "8MP",
            },
            Battery: "7.7V 3000mAh Li-ion battery + 100mAh backup battery. Standby time: Over 500 hours. Usage time: 12+ hours. Charging time: 3–4 hours (USB Type-C, OTG supported)",
            Connectivity: {
                WiFi: "IEEE 802.11 a/b/g/n/ac, dual-band 2.4G/5G",
                WWAN: "Global: 2G/3G/4G LTE (FDD & TDD bands). Local: CDMA, TD-SCDMA (China specific bands)",
                Bluetooth: "v5.2",
                GNSS: "GPS/AGPS, GLONASS, BeiDou (internal antenna)",
            },
            Durability: "Operating Temp: -20°C to 50°C. Storage Temp: -40°C to 70°C. Humidity: 5% – 95% non-condensing. Drop Spec: 1.5m (multiple drops across all 6 sides). Sealing: IP65. ESD: ±15kV air, ±6kV contact discharge",
            Ports: "USB 2.0 Type-C (OTG supported), 2× SIM slots, 1× TF card slot",
            Extras: "NFC (Optional). Sensors: G-sensor, Proximity, Light Sensor, E-Compass, Gyroscope. Audio: Speaker, Dual Microphones",
            "RFID (Optional)": {
                Engine: "EM710 module (based on Impinj)",
                Frequency: "865–868MHz / 920–925MHz / 902–928MHz",
                Protocol: "EPC C1 GEN2 / ISO18000-6C",
                "Read Range": "Up to 20 meters (depends on environment and tag type)",
                "Read Rate": "Over 200 tags/second (circular polarization)",
            },
            Accessories: "Standard: AC adapter, USB cable. Optional: Charging cradle, pistol grip, protective cover, carrying bag",
        },
    },



};