import React from 'react';
import LazyImage from './LazyImage';
import { assets } from '../assets';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10">
         <LazyImage 
            src={assets.site.logo.main}
            alt={assets.site.logo.alt}
            className="object-contain"
         />
      </div>
      <span className="text-xl font-bold text-content tracking-wider hidden sm:block font-serif">Tri Surya Jaya</span>
    </div>
  );
};

export default Logo;
