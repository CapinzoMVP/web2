/**
 * =================================================================
 * ASSET MANIFEST
 * =================================================================
 * This file is the single source of truth for all visual assets in the application.
 * All image URLs should be hosted on a CDN (like JSDelivr, Cloudinary, etc.)
 * to decouple assets from deployments.
 *
 * How to use:
 * 1. Add new image URLs to the appropriate section.
 * 2. To invalidate the client-side cache and force a re-download of all assets,
 *    simply increment the `version` string (e.g., "1.0.0" -> "1.0.1").
 * =================================================================
 */

// --- CACHE VERSION ---
// Increment this version to invalidate the browser cache for all assets.
export const ASSET_VERSION = "1.0.0";

// A generic placeholder for images that fail to load.
const FALLBACK_IMAGE = "https://aistudiocdn.com/static/images/placeholder.svg";

// --- SITE-WIDE ASSETS ---
const SITE_ASSETS = {
  logo: {
    main: "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/Logos.png",
    alt: "logo Tri Surya Jaya"
  },
  fallback: FALLBACK_IMAGE,
  heroBackground: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  aboutImage: "https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// --- TESTIMONIALS DATA ---
const TESTIMONIALS_DATA = [
  {
    quote: "Setiap kali datang, saya selalu merasakan pelayanan yang konsisten, hangat, dan penuh perhatian. Bukan sekadar tempat, tapi pengalaman yang membuat saya ingin kembali lagi.",
    name: "Name",
    title: "Pelanggan Setia",
    avatar: "https://i.pravatar.cc/150?u=andi"
  },
  {
    quote: "Bekerja sama dengan Tri Surya Jaya untuk mengembangkan brand kami adalah keputusan yang tepat. Tim mereka sangat suportif dan berwawasan luas dalam industri perhotelan.",
    name: "Name",
    title: "Partner Bisnis",
    avatar: "https://i.pravatar.cc/150?u=agus"
  }
];


const BRANDS_DATA = {
  'kopisoe': {
    id: 'kopisoe',
    name: 'Kopisoe',
    description: 'Kopi Soe adalah brand kopi populer di Indonesia dengan ratusan cabang, termasuk di Tarakan.',
    longDescription: 'Sebagai salah satu jaringan kopi terbesar di Indonesia, Kopi Soe terus menghadirkan inovasi rasa dan kualitas pelayanan. Di Tarakan, kami bukan hanya menyuguhkan minuman kopi berkualitas tinggi, tetapi juga menciptakan suasana yang hangat dan pengalaman berbeda bagi setiap pelanggan yang datang.',
    logoUrl: 'https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png',
    images: [
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/kopisoe.png"
    ]
  },
  '360-Billiard-Familly': {
    id: '360-Billiard-Familly',
    name: '360 Billiard Familly',
    description: '3-Sixty Family Billiard adalah tempat billiard keluarga di Tarakan dengan konsep nyaman dan ramah keluarga.',
    longDescription: '3-Sixty Family Billiard menghadirkan hiburan billiard dengan suasana family friendly di Tarakan. Dengan peralatan berkualitas impor dan dukungan manajemen berpengalaman lebih dari 10 tahun di industri hospitality, kami berkomitmen menciptakan ruang rekreasi yang aman, menyenangkan, dan nyaman untuk seluruh anggota keluarga.',
    logoUrl: 'https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/360.png',
    images: [
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/360.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/360.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/360.png"
    ]
  },
  'level-up': {
    id: 'level-up',
    name: 'Level Up',
    description: 'Level-Up adalah kafe unik di Tarakan yang menghadirkan suasana berbeda, tempat seru untuk bersantai sekaligus terhubung dengan komunitas.',
    longDescription: 'Level-Up bukan sekadar kafe, tetapi pusat hiburan dan komunitas di Tarakan yang dirancang untuk menghadirkan pengalaman tak terlupakan. Di sini, pengunjung bisa menikmati hidangan dan minuman berkualitas sambil merasakan suasana yang hangat dan penuh inspirasi. Lebih dari sekadar tempat nongkrong, Level-Up mengajak setiap orang untuk membangun relasi, bertumbuh bersama tim, dan menemukan momen berharga dalam kebersamaan.',
    logoUrl: 'https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/levelUp.jpg.png',
     images: [
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/levelUp.jpg.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/levelUp.jpg.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/levelUp.jpg.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/levelUp.jpg.png"
    ]
  },
  't2p': {
    id: 't2p',
    name: 'Time 2 Play',
    description: 'Time To Play adalah playground modern yang aman dan menyenangkan untuk anak-anak, cocok sebagai tempat quality time keluarga.',
    longDescription: 'Time To Play menghadirkan konsep playground modern yang dirancang khusus untuk anak-anak dengan mengutamakan keamanan, kreativitas, dan kenyamanan. Setiap area bermain didesain untuk mendukung eksplorasi, interaksi sosial, dan pembelajaran melalui permainan seru. Menjadi pilihan ideal bagi keluarga, Time To Play bukan hanya tempat hiburan, tetapi juga ruang tumbuh bagi anak-anak untuk mengembangkan imajinasi dan keterampilan mereka dalam suasana yang menyenangkan.',
    logoUrl: 'https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png',
     images: [
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png",
      "https://cdn.jsdelivr.net/gh/CapinzoMVP/Logos@main/T2P.png"
    ]
  }
};
// --- EXPORTED ASSET OBJECT ---
// This is the final object that will be imported by the application.
export const assets = {
  version: ASSET_VERSION,
  site: SITE_ASSETS,
  testimonials: TESTIMONIALS_DATA,
  brands: BRANDS_DATA
};


// --- UTILITY FUNCTIONS ---
// These functions provide a clean API for components to get data.

export const getBrands = () => Object.values(assets.brands);

export const getBrandById = (id: string | undefined) => {
  if (!id) return undefined;
  // The assertion `as keyof typeof assets.brands` tells TypeScript that `id` is a valid key.
  return assets.brands[id as keyof typeof assets.brands];
}
