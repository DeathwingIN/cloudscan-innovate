// productData.ts
export const products = {
  "smart-scanner-pro": {
    title: "SCX400 Series ",
    description:
      "The SCX400  is a high-performance handheld terminal designed for industrial applications, featuring a 4.0-inch HD screen," +
      " high-speed Octa-Core processor, and Android OS. " +
      "It supports advanced barcode scanning, NFC, and seamless data collection to improve operational efficiency.",
    name: "SCX400  Handheld Terminal",
    icon: "./HandHeld/H01.jpg",
    images: ["/HandHeld/H02.jpg", "/HandHeld/H03.jpg", "/HandHeld/H04.jpg"],
    features: [
      "Lightning-fast scanning with high-precision accuracy",
      "Wireless, Bluetooth-enabled for seamless mobility",
      "Durable, ergonomic designs built for industrial & commercial use",
    ],
    specifications: {
      Display: "4.0-inch HD screen (480x800)",
      Processor: "Cortex-A53 Octa-core 2.0GHz",
      "Operating System": "Android OS",
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
      Durability:
        "IP66-rated | 1.2m drop resistance | -20°C to 55°C operating temp",
      Ports: "Type-C USB (OTG), Dual SIM, TF Card",
      Extras: "NFC (Optional), POGO Pin",
    },
  },
  "scanner-lite": {
    title: "SMT700 Series",
    description:
      "The SMT700 is a powerful, rugged mobile terminal with a 6-inch IPS display, Android OS, and high-speed Cortex-A76 processor. " +
      "It offers superior barcode scanning, NFC, and UHF RFID for high-performance enterprise applications.",
    name: "SMT700 Handheld Terminal",
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
      Display: "6-inch IPS screen (720x1440 / 1080P)",
      Processor: "Cortex-A76/A55 2.3GHz",
      "Operating System": "Android OS",
      Memory: "4GB RAM + 64GB Storage",
      "Barcode Scanning": {
        Default: "CM60 | Optional: SE4710, N1",
        "Supported Codes": "QR, Data Matrix, PDF417, MaxiCode, etc.",
      },
      Camera: {
        Rear: "13MP (autofocus, flash, anti-shake)",
        Front: "5MP",
      },
      Battery: "7.7V 4000mAh removable (15+ hours working time)",
      Connectivity: "4G LTE | Dual-band WiFi | Bluetooth 5.0",
      Durability:
        "IP68-rated | 1.8m drop resistance | -30°C to 55°C operating temp",
      Ports: "Type-C USB (OTG), Nano SIM, PSAM slot",
      Extras: "NFC (Optional), UHF RFID (Optional, up to 15m range)",
    },
  },

  "t10-rugged-smart-pda": {
    title: "T1000 Series",
    description:
      "The T1000 is a rugged Android OS handheld terminal built for demanding environments such as warehousing, fleet management, asset tracking, and retail. Featuring a powerful Octa-Core processor, advanced 2D barcode scanning options (including long-range Zebra SE5500), and optional UHF RFID capability, the T1000 is designed for high-efficiency data collection and durability in the field.",
    name: "T1000 Rugged Smart PDA",
    icon: "/T10/T103.JPG",
    images: ["/T10/T101.png", "/T10/T102.jpg", "/T10/T104.JPG"],
    features: [
      "Rugged build with IP65 sealing and 1.5m drop resistance",
      "Optional long-range 2D scanning and UHF RFID for bulk reading",
      "Supports Android  OS, NFC, and multi-network connectivity",
    ],
    specifications: {
      Display:
        "5.5-inch IPS HD+ screen (720x1440) with Corning Gorilla Glass.",
      Processor:
        "Octa-core 64-bit CPU ( up to 2.2GHz).",
        "GPU": "Arm Mali-G57 MC2",
      "Operating System": "Android ",
      Memory:
        "4GB RAM + 64GB ROM / 6GB RAM + 128GB ROM.",
        "Expandable": "Up to 256GB via TF card",
      "Barcode Scanning ": {
        "2D Scanners": "Newland N1, Zebra SE4770 / SE5500 (long-distance)",
        "Supported Codes":
          "PDF417, QR, Data Matrix, Aztec, MaxiCode, Micro QR, Postal Codes (US, UK, JP, AU, Dutch), and more",
      },
      Camera: {
        Rear: "16MP ",
        Front: "8MP",
      },
      Battery:
        "7.7V 3000mAh Li-ion battery + 100mAh backup battery. (12+ hours working time)",
      Connectivity: {
        WiFi: "IEEE 802.11 a/b/g/n/ac, dual-band 2.4G/5G",
        WWAN: "Global: 2G/3G/4G LTE (FDD & TDD bands)",
        Bluetooth: "v5.2",
      },
      Durability:
        " -40°C to 70°C Operating Temp |  1.5m drop resistance | IP65 - rated",
      Ports: "USB 2.0 Type-C (OTG) | 2× SIM slots | TF card slot",
      Extras:
        "NFC (Optional) | G-sensor, Proximity, Light Sensor, E-Compass, Gyroscope.",
      
    },
  },

  "cloudsmart-app": {
    title: "Mobile Application",
    description:
      "The Cloud Smart Mobile Application is a robust mobile solution designed to integrate seamlessly with Microsoft Dynamics 365 Business Central. Tailored for industries like manufacturing, warehousing, and logistics, this app streamlines inventory management, production tracking, and order fulfillment—ensuring accuracy, efficiency, and real-time data synchronization.",
    name: "Contact for Pricing",
    icon: "/App/3.png", // Icon name for Services.tsx
    images: ["/App/3.png", "/App/2.png", "/App/1.png"],
    features: [
      "Purchase Order Integration: Manage POs , scan barcodes, validate, print labels.",
      "Production Tracking: Track materials, scan components, update orders live. ",
      "Goods Management: Scan pallets, track lots, automate journals.",
      "Sales Fulfillment: Scan orders, validate shipments, post to Business Central.",
    ],
    specifications: {
      "Core Modules": {
        Receive:
          "Streamline goods receiving, validate supplier barcodes, and post Goods Receipt Notes directly to Business Central.",
        Consumption:
          "Track raw material usage, manage component lines, and automate Consumption Journal creation.",
        Output:
          "Record finished goods production, validate pallet details, and submit Output Journal Lines.",
        Ship: "Fulfill sales orders, validate shipments, and post Sales Shipments directly from the app.",
      },
      "Supported Codes": "QR, Data Matrix, PDF417, MaxiCode, and more.",
      Integration:
        "Fully integrated with Microsoft Dynamics 365 Business Central for real-time data sync.",
    },
  },
};
