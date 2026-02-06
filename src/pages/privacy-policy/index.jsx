import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import logoImage from '../../assets/luna-logo2.png';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const brandName = "Luna Graphics";
  const pageTitle = `Privacy Policy | ${brandName}`;
  const pageDescription = "Learn how Luna Graphics collects, uses, and protects your personal information when you use our printing services in Nairobi.";
  const pageUrl = "https://lunagraphics.co.ke/privacy-policy";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Luna Graphics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our printing services in Nairobi, Kenya.
            </p>
            <p className="text-gray-600">
              By accessing our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Personal Information</h3>
            <p className="text-gray-600 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Name</strong> - For order identification and communication</li>
              <li><strong>Email Address</strong> - For order confirmations and quotes</li>
              <li><strong>Phone Number</strong> - For delivery coordination and urgent updates</li>
              <li><strong>Company/Business Name</strong> - For corporate clients and invoicing</li>
              <li><strong>Billing Address</strong> - For payment processing</li>
              <li><strong>Payment Information</strong> - Processed securely through our payment providers</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Print Project Files</h3>
            <p className="text-gray-600 mb-4">
              When you upload files for printing (logos, designs, artwork), we collect and store these temporarily to process your order. We do not claim ownership of your designs.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">2.3 Usage Data</h3>
            <p className="text-gray-600">
              We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages. This helps us improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">Luna Graphics uses your information to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Process and fulfill your printing orders</li>
              <li>Communicate about your order status, quotes, and delivery</li>
              <li>Send promotional offers and updates (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. WhatsApp Integration</h2>
            <p className="text-gray-600 mb-4">
              We use WhatsApp Business for customer communication. When you contact us via WhatsApp:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Your phone number and messages are processed through WhatsApp's platform</li>
              <li>WhatsApp's Privacy Policy also applies to these communications</li>
              <li>We do not share your WhatsApp conversations with third parties</li>
              <li>Message history is retained for customer service purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>SSL encryption for all website data transmission</li>
              <li>Secure payment processing through trusted providers</li>
              <li>Limited access to customer data within our organization</li>
              <li>Regular security audits of our systems</li>
            </ul>
            <p className="text-gray-600">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 mb-4">We may share information with:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Payment Processors</strong> - To process your transactions</li>
              <li><strong>Delivery/Courier Services</strong> - To fulfill shipping requirements</li>
              <li><strong>Google Analytics</strong> - To understand website usage (anonymized data)</li>
              <li><strong>WhatsApp Business</strong> - For customer communication</li>
            </ul>
            <p className="text-gray-600">
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 mb-4">Under Kenyan data protection laws, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-600">
              To exercise these rights, contact us at <strong>info@lunagraphics.co.ke</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Data Retention</h2>
            <p className="text-gray-600">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Print files are typically deleted 30 days after order completion unless you request otherwise.
            </p>
          </section>

          <section className="mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Cookies & Tracking Technologies</h2>
  
  <h3 className="text-xl font-medium text-gray-700 mb-3">9.1 What Are Cookies</h3>
  <p className="text-gray-600 mb-4">
    Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.
  </p>

  <h3 className="text-xl font-medium text-gray-700 mb-3">9.2 Types of Cookies We Use</h3>
  
  <div className="space-y-4 mb-4">
    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-800 mb-2">Necessary Cookies (Always Active)</h4>
      <p className="text-gray-600 text-sm">
        Essential for website functionality. These include:
      </p>
      <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
        <li><strong>Consent Cookie:</strong> Stores your cookie preferences (lunaCookieConsent)</li>
        <li><strong>Session Management:</strong> Maintains your browsing session</li>
      </ul>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-800 mb-2">Analytics Cookies (Optional)</h4>
      <p className="text-gray-600 text-sm">
        Help us understand website usage through Google Analytics:
      </p>
      <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
        <li><strong>_ga:</strong> Distinguishes users (2 years)</li>
        <li><strong>_gid:</strong> Distinguishes users (24 hours)</li>
        <li><strong>_gat:</strong> Throttles request rate (1 minute)</li>
      </ul>
      <p className="text-gray-600 text-sm mt-2">
        Only activated with your explicit consent. You can opt-out anytime.
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg">
      <h4 className="font-semibold text-gray-800 mb-2">Marketing Cookies (Not Currently Used)</h4>
      <p className="text-gray-600 text-sm">
        Reserved for future advertising features. Currently disabled.
      </p>
    </div>
  </div>

  <h3 className="text-xl font-medium text-gray-700 mb-3">9.3 Managing Your Cookie Preferences</h3>
  <p className="text-gray-600 mb-4">
    You have full control over cookies:
  </p>
  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
    <li>Click the cookie icon in the bottom corner anytime to change preferences</li>
    <li>Choose "Necessary Only" for minimal data collection</li>
    <li>Choose "Accept All" for full website analytics</li>
    <li>Customize individual cookie types in preferences</li>
  </ul>
  <p className="text-gray-600 mb-4">
    You can also disable cookies through your browser settings, though this may affect website functionality.
  </p>

  <h3 className="text-xl font-medium text-gray-700 mb-3">9.4 Third-Party Cookies</h3>
  <p className="text-gray-600">
    We only use Google Analytics cookies. We do not allow third-party advertisers or social media trackers.
  </p>
</section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-800 font-medium">Luna Graphics</p>
              <p className="text-gray-600">Kweria Road, Nairobi, Kenya</p>
              <p className="text-gray-600">Email: info@lunagraphics.co.ke</p>
              <p className="text-gray-600">Phone: +254 791 159 618</p>
              <p className="text-gray-600">WhatsApp: +254 791 159 618</p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Luna Graphics. All rights reserved.
          </p>
          <div className="mt-2 space-x-4 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>|</span>
            <button onClick={() => navigate('/terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;