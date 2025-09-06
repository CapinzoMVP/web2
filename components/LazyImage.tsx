import React, { useState } from 'react';
import { assets } from '../assets';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * A performance-optimized image component that includes:
 * - Native lazy-loading (`loading="lazy"`).
 * - An animated skeleton placeholder to prevent layout shift and improve perceived performance.
 * - Automatic fallback to a default placeholder image on loading error.
 * - Smooth fade-in transition once the image has loaded.
 */
const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const imageSrc = hasError ? assets.site.fallback : src;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-secondary animate-pulse"></div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
