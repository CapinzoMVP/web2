import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Brand } from '../types';
import { getBrandById } from '../assets';
import Lightbox from '../assets/components/Lightbox';
import LazyImage from '../assets/components/LazyImage';

const BrandDetailPage: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const [brand, setBrand] = useState<Brand | undefined>(undefined);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    // Fetch brand data from the central asset manifest.
    const foundBrand = getBrandById(brandId);
    setBrand(foundBrand);
  }, [brandId]);

  if (!brand) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-red-500 font-serif">Brand Tidak Ditemukan</h1>
        <p className="text-content-secondary mt-2">Brand yang Anda cari tidak ada dalam portofolio kami.</p>
        <Link to="/brand-kami" className="mt-6 inline-block bg-accent text-primary font-bold py-2 px-4 rounded hover:bg-accent-hover transition-colors">
          Kembali ke Daftar Brand
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-secondary p-8 rounded-xl shadow-premium max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
           <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent flex-shrink-0">
             <LazyImage 
              src={brand.logoUrl} 
              alt={`${brand.name} logo`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-accent font-serif">{brand.name}</h1>
            <p className="text-xl text-content-secondary mt-2">{brand.description}</p>
            <p className="text-content-secondary leading-relaxed mt-6">
              {brand.longDescription}
            </p>
            <Link to="/brand-kami" className="mt-8 inline-block text-accent hover:text-accent-hover transition-colors">
              &larr; Kembali ke Semua Brand
            </Link>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mt-12 pt-8 border-t border-border-color">
          <h2 className="text-3xl font-bold text-content mb-6 text-center font-serif">Galeri Foto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brand.images.map((img, index) => (
              <button 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg group relative focus:outline-none focus:ring-4 focus:ring-accent aspect-w-4 aspect-h-3"
                onClick={() => setLightboxImage(img)}
                aria-label={`Lihat gambar ${index + 1} lebih besar`}
              >
                <LazyImage 
                  src={img} 
                  alt={`${brand.name} gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {lightboxImage && (
        <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </>
  );
};

export default BrandDetailPage;
