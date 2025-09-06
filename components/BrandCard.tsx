import React from 'react';
import { Link } from 'react-router-dom';
import type { Brand } from '../types';
import LazyImage from './LazyImage';

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => (
  <Link 
    to={`/brand/${brand.id}`} 
    className="block bg-secondary rounded-xl shadow-premium overflow-hidden group transform hover:-translate-y-2 hover:shadow-premium-hover transition-all duration-300"
  >
    <div className="p-6">
      <div className="flex items-center space-x-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-border-color flex-shrink-0">
          <LazyImage className="w-full h-full object-cover" src={brand.logoUrl} alt={`${brand.name} logo`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-content group-hover:text-accent transition-colors duration-300 font-serif">{brand.name}</h3>
          <p className="text-sm text-content-secondary mt-1">{brand.description}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default BrandCard;
