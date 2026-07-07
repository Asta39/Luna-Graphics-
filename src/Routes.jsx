import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

const Homepage = lazy(() => import("pages/homepage"));
const TeamPage = lazy(() => import("pages/team"));
const ContactPage = lazy(() => import("pages/contact"));
const GalleryPage = lazy(() => import("pages/gallery"));
const LargeFormatServicesPage = lazy(() => import("pages/large-format"));
const PlottingServicesPage = lazy(() => import("pages/plotting"));
const UVPrintingServicesPage = lazy(() => import("pages/uv-printing"));
const CNCCuttingServicesPage = lazy(() => import("pages/cnc-cutting"));
const LaserCuttingServicesPage = lazy(() => import("pages/laser-cutting"));
const TShirtPrintingServicesPage = lazy(() => import("pages/t-shirt-printing"));
const CorporateServicesPage = lazy(() => import("pages/corporate-services"));
const PrivacyPolicy = lazy(() => import("pages/privacy-policy"));
const TermsOfService = lazy(() => import("pages/terms-of-service"));
const CorporateTerms = lazy(() => import("pages/corporate-terms"));
const WhatsAppChat = lazy(() => import("./components/ui/WhatsAppChat"));
const About = lazy(() => import("./pages/about/About"));
const EventsExhibitions = lazy(() => import("./pages/corporate/EventsExhibitions"));
const CorporateBranding = lazy(() => import("./pages/corporate/CorporateBranding"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const ProductDetail = lazy(() => import("./pages/shop/ProductDetail"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const ServiceDetail = lazy(() => import("./pages/shop/components/ServiceDetail"));
const DTFPrintingPage = lazy(() => import("./pages/dtf-printing"));
const SublimationPrintingPage = lazy(() => import("./pages/sublimation-printing"));
const DigitalPrintingPage = lazy(() => import("./pages/digital-printing"));
const BlogPage = lazy(() => import("pages/Blog"));
const BlogPost = lazy(() => import("pages/BlogPost"));
const FAQPage = lazy(() => import("pages/faq"));
const SitemapPage = lazy(() => import("pages/sitemap/SitemapPage"));
const NotFound = lazy(() => import("pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50" aria-label="Loading page">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
  </div>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <RouterRoutes>
            <Route path="/" element={<Shop />} />
            <Route path="/shop" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/homepage" element={<Navigate to="/home" replace />} />

            <Route path="/services/large-format" element={<LargeFormatServicesPage />} />
            <Route path="/services/plotting" element={<PlottingServicesPage />} />
            <Route path="/services/uv-printing" element={<UVPrintingServicesPage />} />
            <Route path="/services/cnc-cutting" element={<CNCCuttingServicesPage />} />
            <Route path="/services/laser-cutting" element={<LaserCuttingServicesPage />} />
            <Route path="/services/t-shirt-printing" element={<TShirtPrintingServicesPage />} />
            <Route path="/services/dtf-printing" element={<DTFPrintingPage />} />
            <Route path="/services/sublimation-printing" element={<SublimationPrintingPage />} />
            <Route path="/services/digital-printing" element={<DigitalPrintingPage />} />
            <Route path="/dtf-printing" element={<Navigate to="/services/dtf-printing" replace />} />
            <Route path="/sublimation-printing" element={<Navigate to="/services/sublimation-printing" replace />} />
            <Route path="/digital-printing" element={<Navigate to="/services/digital-printing" replace />} />

            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/corporate-services" element={<CorporateServicesPage />} />
            <Route path="/corporate/events-exhibitions" element={<EventsExhibitions />} />
            <Route path="/corporate/corporate-branding" element={<CorporateBranding />} />

            <Route path="/shop/category/:categoryId" element={<Shop />} />
            <Route path="/shop/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/corporate-terms" element={<CorporateTerms />} />
            <Route path="/about" element={<About />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
          <WhatsAppChat />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
