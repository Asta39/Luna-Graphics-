import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// ✅ CORRECTED IMPORTS - matching your actual folder names
import Homepage from "pages/homepage";
import TeamPage from "pages/team";                          // FIXED: was "team-page"
import ContactPage from "pages/contact";                    // FIXED: was "contact-page"
import GalleryPage from "pages/gallery";                    // FIXED: was "gallery-page"
import LargeFormatServicesPage from "pages/large-format";  // Keep as is
import PlottingServicesPage from "pages/plotting";          // FIXED: was "plotting-services-page"
import UVPrintingServicesPage from "pages/uv-printing";     // FIXED: was "uv-printing-services-page"
import CNCCuttingServicesPage from "pages/cnc-cutting";     // FIXED: was "cnc-cutting-services-page"
import LaserCuttingServicesPage from "pages/laser-cutting"; // FIXED: was "laser-cutting-services-page"
import TShirtPrintingServicesPage from "pages/t-shirt-printing"; // FIXED: was "t-shirt-printing-services-page"
import CorporateServicesPage from "pages/corporate-services";    // FIXED: was "corporate-services-page"
import PrivacyPolicy from "pages/privacy-policy";           // FIXED: removed './'
import TermsOfService from "pages/terms-of-service";        // FIXED: removed './'
import CorporateTerms from "pages/corporate-terms";  
import WhatsAppChat from './components/ui/WhatsAppChat';
       // FIXED: removed './'
// TODO: Create these pages or remove routes
// import CaseStudiesPage from "pages/case-studies";
import BlogPage from "pages/blog";
import BlogPost from "pages/BlogPost";  // Add this import

import FAQPage from "pages/faq";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* ✅ CORRECTED ROUTES - clean URL structure */}
          <Route path="/" element={<Homepage />} />
          
          {/* Services - nested under /services/ */}
          <Route path="/services/large-format" element={<LargeFormatServicesPage />} />
          <Route path="/services/plotting" element={<PlottingServicesPage />} />
          <Route path="/services/uv-printing" element={<UVPrintingServicesPage />} />
          <Route path="/services/cnc-cutting" element={<CNCCuttingServicesPage />} />
          <Route path="/services/laser-cutting" element={<LaserCuttingServicesPage />} />
          <Route path="/services/t-shirt-printing" element={<TShirtPrintingServicesPage />} />
          
          {/* Main pages */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />  {/* FIXED: was broken */}
          <Route path="/corporate-services" element={<CorporateServicesPage />} />
          
          {/* Legal pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/corporate-terms" element={<CorporateTerms />} />
          
          {/* TODO: Uncomment when pages are created */}
          {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
          {<Route path="/blog" element={<BlogPage />} /> }
          <Route path="/blog/:slug" element={<BlogPost />} />


          <Route path="/faq" element={<FAQPage />} />
          
          {/* 404 - must be last */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
              <WhatsAppChat />

      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;