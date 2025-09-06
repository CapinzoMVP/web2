import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary mt-12 border-t border-border-color">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-content-secondary">
          &copy; {new Date().getFullYear()} Perusahaan XYZ. Semua Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;