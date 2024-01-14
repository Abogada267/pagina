const products = [
  {
    // source: https://tunotebook.com.ar/gamer/alienware-m15-r7-240hz-core-i7-12700h-32gb-512gb-rtx-3070ti/
    id: 'alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti',
    name: 'Alienware M15 R7 15.6″ 240hz Core i7 12700H 16GB / 512GB RTX 3070Ti',
    category: 'gamer',
    brand: 'Alienware',
    stock: 10,
    price: 1_275_890,
    priceCurrency: 'ARS',
    enabled: false,
    images: [
      '01-600x600.jpg',
      '02-600x600.jpg',
      '03-600x600.jpg',
      '04-600x600.jpg',
      '05-600x600.jpg',
      '06-600x600.jpg',
      '07-600x600.jpg',
      '08-600x600.jpg',
      '09-600x600.jpg'
    ],
    banner: 'banner-alienware-m15-r7.jpg',
    description: 'Obtén la ventaja que necesitas con la tecnología de refrigeración Alienware Cryo-tech™, que incorpora ventiladores con una nueva configuración y más del doble de aspas en un diseño un 37,5 % más fino que el de la generación anterior. El diseño con doble ventilador, que da prioridad al rendimiento, absorbe aire frío por las rejillas superior e inferior y expulsa el aire caliente por los lados izquierdo y derecho y la parte trasera. De este modo, se garantiza una experiencia de juego excepcional.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel Core i7 12700H
            4.7 GHz Performance 6-Core
            3.5 GHz Efficiency 8-Core
            Nucleos: 14
            Subprocesos: 20`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 32GB
            Tipo: DDR5
            Expandible: 64GB`
      },
      screen: {
        title: 'Pantalla',
        text: `Pulgadas: 15.6″
            Resolución: QHD 2560×1440
            Tecnología: WVA G-Sync
            Hz: 240Hz`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3070 Ti
            Memoria de Video: 8 GB GDDR6
            Switch MUX`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 512 GB
            Tipo: SSD
            Tecnología: PCIe 4.0 NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 802.11AX
            Bluetooth: Si
            Ethernet: Si 2500 Mbit/s`
      },
      os: {
        title: 'Sistema Operativo',
        text: 'Windows 11'
      },
      ports: {
        title: 'Puertos',
        text: `– 3 x USB Type-A 3.2 Gen 1
            – Type-C port (Thunderbolt™ 4, USB 3.2 Gen 2, DP 1.4, PD)
            – HDMI 2.1
            – RJ-45 Killer E3100 2.5Gbps
            – Headset jack`
      },
      other: {
        title: 'Otras características',
        text: `Webcam 720p
            Teclado Retroiluminado RGB
            AlienFX Lighting
            Cryo-tech`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Alienware
            Linea: m15 R7
            Modelo: AWM15R7-7730BLK-PUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35.6 x 27,2 x 2,39 cm
            Peso: 2,42 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Diseño, arquitectura, edición de fotografía, Render, Multimedia, internet, Gaming'
      }
    }
  },
  {
    // ... (Rest of the products follow the same structure)
  },
  // Add the rest of your products here
];

const DELAY = 200;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, DELAY);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, DELAY);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, DELAY);
  });
};
