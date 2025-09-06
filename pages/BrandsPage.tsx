import React from 'react';
import BrandCard from '../components/BrandCard';
import { getBrands } from '../assets';

const BrandsPage: React.FC = () => {
  // Get all brands directly from the centralized asset manifest.
  const brands = getBrands();
  
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-accent font-serif">Brand di Bawah Naungan Tri Surya Jaya</h1>
        <p className="mt-4 text-lg text-content-secondary max-w-2xl mx-auto">Jelajahi portofolio brand terkemuka yang kami kelola dengan standar keunggulan tertinggi.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
