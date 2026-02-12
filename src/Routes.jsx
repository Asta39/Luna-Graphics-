import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import TeamPage from "pages/team-page";
import ContactPage from "pages/contact-page";
import GalleryPage from "pages/gallery-page";
import ServiceDetailPage from "pages/service-detail-page";
import PlottingServicesPage from "pages/plotting-services-page";
import UVPrintingServicesPage from "pages/uv-printing-services-page";
import CNCCuttingServicesPage from "pages/cnc-cutting-services-page";
import LaserCuttingServicesPage from "pages/laser-cutting-services-page";
import TShirtPrintingServicesPage from "pages/t-shirt-printing-services-page";
import CorporateServicesPage from "pages/corporate-services-page";
import PrivacyPolicy from './pages/privacy-policy';
import TermsOfService from './pages/terms-of-service';
import CorporateTerms from './pages/corporate-terms';
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/team-page" element={<TeamPage />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/service-detail-page" element={<ServiceDetailPage />} />
        <Route path="/plotting-services-page" element={<PlottingServicesPage />} />
        <Route path="/uv-printing-services-page" element={<UVPrintingServicesPage />} />
        <Route path="/cnc-cutting-services-page" element={<CNCCuttingServicesPage />} />
        <Route path="/laser-cutting-services-page" element={<LaserCuttingServicesPage />} />
        <Route path="/t-shirt-printing-services-page" element={<TShirtPrintingServicesPage />} />
        <Route path="/corporate-services-page" element={<CorporateServicesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/corporate-terms" element={<CorporateTerms />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;