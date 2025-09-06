import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] bg-primary p-2 rounded-lg"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking on the image container
      >
        <img 
          src={imageUrl} 
          alt="Enlarged view" 
          className="max-w-full max-h-[85vh] object-contain"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-accent text-primary rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close image viewer"
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;