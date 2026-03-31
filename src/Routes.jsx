import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// ✅ CORRECTED IMPORTS - matching your actual folder names
import Homepage from "pages/homepage";
import TeamPage from "pages/team";
import ContactPage from "pages/contact";
import GalleryPage from "pages/gallery";
import LargeFormatServicesPage from "pages/large-format";
import PlottingServicesPage from "pages/plotting";
import UVPrintingServicesPage from "pages/uv-printing";
import CNCCuttingServicesPage from "pages/cnc-cutting";
import LaserCuttingServicesPage from "pages/laser-cutting";
import TShirtPrintingServicesPage from "pages/t-shirt-printing";
import CorporateServicesPage from "pages/corporate-services";
import PrivacyPolicy from "pages/privacy-policy";
import TermsOfService from "pages/terms-of-service";
import CorporateTerms from "pages/corporate-terms";
import WhatsAppChat from './components/ui/WhatsAppChat';
import About from './pages/about/About';
import EventsExhibitions from './pages/corporate/EventsExhibitions';
import CorporateBranding from './pages/corporate/CorporateBranding';
import Shop from './pages/shop/Shop';
import ProductDetail from './pages/shop/ProductDetail';
import Cart from './pages/cart/Cart';
import ServiceDetail from './pages/shop/components/ServiceDetail';
import BlogPage from "pages/Blog";
import BlogPost from "pages/BlogPost";
import FAQPage from "pages/faq";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* ✅ ROOT SHOWS SHOP */}
          <Route path="/" element={<Shop />} />
          <Route path="/homepage" element={<Homepage />} />
          
          {/* ✅ KEEP /shop WORKING - don't redirect, just render Shop */}
          <Route path="/shop" element={<Shop />} />
          
          {/* Services */}
          <Route path="/services/large-format" element={<LargeFormatServicesPage />} />
          <Route path="/services/plotting" element={<PlottingServicesPage />} />
          <Route path="/services/uv-printing" element={<UVPrintingServicesPage />} />
          <Route path="/services/cnc-cutting" element={<CNCCuttingServicesPage />} />
          <Route path="/services/laser-cutting" element={<LaserCuttingServicesPage />} />
          <Route path="/services/t-shirt-printing" element={<TShirtPrintingServicesPage />} />
          
          {/* Main pages */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/corporate-services" element={<CorporateServicesPage />} />
          <Route path="/corporate/events-exhibitions" element={<EventsExhibitions />} />
          <Route path="/corporate/corporate-branding" element={<CorporateBranding />} />
          
          {/* Shop routes */}
          <Route path="/shop/category/:categoryId" element={<Shop />} />
          <Route path="/shop/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />

          {/* Legal pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/corporate-terms" element={<CorporateTerms />} />
          <Route path="/about" element={<About />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <WhatsAppChat />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;