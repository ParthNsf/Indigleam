import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import PersonalAccountVipMemberSanctuary from './pages/personal-account-vip-member-sanctuary';
import ShopCollectionsPage from './pages/shop-collections-interactive-jewelry-gallery';
import VirtualTryOnStylingTools from './pages/virtual-try-on-styling-tools';
import ProductExperienceImmersiveJewelryShowcase from './pages/product-experience-immersive-jewelry-showcase';
import HomepageLuxuryJewelryAtelier from './pages/homepage-luxury-jewelry-atelier';
import SecureCheckout from './pages/secure-checkout-luxury-purchase-experience';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageLuxuryJewelryAtelier />} />
        <Route path="/personal-account-vip-member-sanctuary" element={<PersonalAccountVipMemberSanctuary />} />
        <Route path="/shop-collections-interactive-jewelry-gallery" element={<ShopCollectionsPage />} />
        <Route path="/virtual-try-on-styling-tools" element={<VirtualTryOnStylingTools />} />
        <Route path="/product-experience-immersive-jewelry-showcase" element={<ProductExperienceImmersiveJewelryShowcase />} />
        <Route path="/homepage-luxury-jewelry-atelier" element={<HomepageLuxuryJewelryAtelier />} />
        <Route path="/secure-checkout-luxury-purchase-experience" element={<SecureCheckout />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
