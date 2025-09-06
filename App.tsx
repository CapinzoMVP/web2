import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import ContactPage from './pages/ContactPage';
import MembershipPage from './pages/MembershipPage';
import { manageAssetCache } from './utils/cache';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to top on new page navigation (PUSH or REPLACE actions).
    // The browser automatically handles scroll restoration for POP actions (back/forward).
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navigationType]); // Re-run effect when path or navigation type changes

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/*
        The `key={location.pathname}` prop is crucial. It tells React to treat
        navigations to different paths as distinct components. This unmounts the old
        page component and mounts the new one, allowing our animation to re-trigger
        on every page change.
      */}
      <main
        key={location.pathname}
        className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 motion-safe:animate-page-fade-in"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/brand-kami" element={<BrandsPage />} />
          <Route path="/brand/:brandId" element={<BrandDetailPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/member" element={<MembershipPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  // On initial app load, trigger the asset caching process.
  // This runs once and does not block the main thread.
  useEffect(() => {
    manageAssetCache();
  }, []);
  
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;