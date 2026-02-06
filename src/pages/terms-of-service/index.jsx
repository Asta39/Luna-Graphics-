import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';

const TermsOfService = () => {
  const navigate = useNavigate();
  const brandName = "Luna Graphics";
  const pageTitle = `Terms of Service | ${brandName}`;
  const pageDescription = "Terms and conditions for using Luna Graphics printing services in Nairobi. Read our policies on orders, payments, delivery, and returns.";
  const pageUrl = "https://lunagraphics.co.ke/terms-of-service";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> By accessing or using Luna Graphics services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Definitions</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>"Company," "We," "Us," "Our"</strong> refers to Luna Graphics, located at Kweria Road, Nairobi, Kenya.</li>
              <li><strong>"Customer," "You," "Your"</strong> refers to the individual or entity using our services.</li>
              <li><strong>"Services"</strong> refers to printing, cutting, branding, and related services offered by Luna Graphics.</li>
              <li><strong>"Products"</strong> refers to physical items produced through our services.</li>
              <li><strong>"Order"</strong> refers to a request for services placed by you.</li>
              <li><strong>"Print Files"</strong> refers to digital files (PDFs, images, designs) submitted for printing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By placing an order, using our website, or communicating with us via WhatsApp, phone, or email, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="text-gray-600">
              These terms apply to all customers, including individual consumers, corporate clients, political campaigns, and any other entities purchasing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Services Description</h2>
            <p className="text-gray-600 mb-4">Luna Graphics provides the following services in Nairobi, Kenya:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Large format printing (banners, posters, signage)</li>
              <li>UV flatbed printing on rigid materials</li>
              <li>CNC cutting and routing</li>
              <li>Laser cutting and engraving</li>
              <li>T-shirt printing and embroidery</li>
              <li>Architectural plotting and CAD printing</li>
              <li>Corporate branding solutions</li>
              <li>Political campaign materials</li>
              <li>Custom merchandise production</li>
            </ul>
            <p className="text-gray-600">
              We reserve the right to modify, discontinue, or add services at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Order Process</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">4.1 Placing Orders</h3>
            <p className="text-gray-600 mb-4">
              Orders can be placed through:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Our website contact forms</li>
              <li>WhatsApp Business: +254 791 159 618</li>
              <li>Phone: +254 791 159 618</li>
              <li>Email: info@lunagraphics.co.ke</li>
              <li>In-person at our Nairobi location</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">4.2 Order Confirmation</h3>
            <p className="text-gray-600 mb-4">
              All orders require confirmation from Luna Graphics before production begins. A valid order confirmation includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Written quote approval from the customer</li>
              <li>Payment of deposit (where applicable)</li>
              <li>Confirmation of print specifications</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">4.3 Print-Ready Files</h3>
            <p className="text-gray-600 mb-4">
              You are responsible for providing print-ready files. We accept:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>PDF (preferred format)</li>
              <li>AI (Adobe Illustrator)</li>
              <li>EPS (Encapsulated PostScript)</li>
              <li>High-resolution PNG/JPEG (300 DPI minimum)</li>
              <li>PSD (Photoshop files)</li>
            </ul>
            <p className="text-gray-600">
              Files not meeting our specifications may incur additional design fees or result in suboptimal print quality. We are not responsible for quality issues stemming from low-resolution or improperly formatted files.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Pricing and Payment</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">5.1 Pricing</h3>
            <p className="text-gray-600 mb-4">
              All prices are quoted in Kenyan Shillings (KES) unless otherwise specified. Prices are valid for 30 days from the date of quotation unless otherwise stated.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">5.2 Payment Terms</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Small Orders (Under KES 10,000):</strong> Full payment required before production</li>
              <li><strong>Medium Orders (KES 10,000 - KES 50,000):</strong> 50% deposit, 50% before delivery</li>
              <li><strong>Large Orders (Over KES 50,000):</strong> 50% deposit, 50% before delivery</li>
              <li><strong>Corporate Accounts:</strong> Subject to approved credit terms</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">5.3 Payment Methods</h3>
            <p className="text-gray-600 mb-4">We accept:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>M-Pesa</li>
              <li>Bank transfer</li>
              <li>Cash (in-person only)</li>
              <li>Corporate cheques (subject to clearance)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">5.4 Late Payment</h3>
            <p className="text-gray-600">
              Orders not paid according to agreed terms may be put on hold. Completed orders with outstanding balances will not be released for delivery until payment is received in full.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Turnaround Time</h2>
            <p className="text-gray-600 mb-4">
              Turnaround times vary based on project complexity, quantity, and current workload. Estimated timeframes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Small Format Digital:</strong> Same day to 2 business days</li>
              <li><strong>Large Format Printing:</strong> 2-3 business days</li>
              <li><strong>UV Printing:</strong> 3-5 business days</li>
              <li><strong>CNC/Laser Cutting:</strong> 3-7 business days</li>
              <li><strong>T-Shirt Printing:</strong> 2-5 business days</li>
              <li><strong>Bulk/Campaign Orders:</strong> 7-14 business days</li>
            </ul>
            <p className="text-gray-600">
              Rush orders may be accommodated for an additional fee, subject to availability. We are not liable for delays caused by circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Delivery and Pickup</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">7.1 Pickup</h3>
            <p className="text-gray-600 mb-4">
              Customers may pick up completed orders from our Nairobi location during business hours (Monday-Friday 8AM-6PM, Saturday 9AM-2PM).
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">7.2 Delivery</h3>
            <p className="text-gray-600 mb-4">
              Delivery is available within Nairobi and surrounding areas for an additional fee. Delivery fees are calculated based on distance and order size.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">7.3 Risk of Loss</h3>
            <p className="text-gray-600">
              Risk of loss and title for items pass to you upon delivery to the carrier or upon pickup from our premises, whichever occurs first.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cancellations and Refunds</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">8.1 Order Cancellation</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Before Production:</strong> Full refund minus any design fees incurred</li>
              <li><strong>During Production:</strong> 50% refund based on work completed</li>
              <li><strong>After Completion:</strong> No refunds, but reprints may be offered at our discretion</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">8.2 Quality Issues</h3>
            <p className="text-gray-600 mb-4">
              If you receive products with manufacturing defects or quality issues caused by our production process:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Notify us within 48 hours of receipt</li>
              <li>Provide photos of the defect</li>
              <li>Return the defective items (if requested)</li>
              <li>We will reprint or refund at our discretion</li>
            </ul>
            <p className="text-gray-600">
              We do not offer refunds or reprints for errors in customer-provided files, including typos, wrong colors, or low-resolution images that were approved by you before production.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">9.1 Your Content</h3>
            <p className="text-gray-600 mb-4">
              You retain all rights to your designs and content. By submitting files to us, you grant Luna Graphics a limited license to use, reproduce, and modify your content solely for the purpose of fulfilling your order.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">9.2 Copyright Responsibility</h3>
            <p className="text-gray-600 mb-4">
              You warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>You own or have permission to use all content submitted</li>
              <li>Your content does not infringe on any third-party rights</li>
              <li>Your content complies with all applicable laws</li>
            </ul>
            <p className="text-gray-600">
              Luna Graphics reserves the right to refuse orders containing content that violates copyright, trademark, or other intellectual property rights, or that contains illegal, defamatory, or offensive material.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">9.3 Portfolio Use</h3>
            <p className="text-gray-600">
              Unless you request otherwise in writing, we may use photos of completed projects for our portfolio, website, and marketing materials. We will not disclose confidential corporate information or proprietary designs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, Luna Graphics shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Lost profits or revenue</li>
              <li>Loss of data or goodwill</li>
              <li>Service interruptions or delays</li>
              <li>Viruses or malware transmitted through our digital services</li>
              <li>Damages exceeding the amount paid for the specific order</li>
            </ul>
            <p className="text-gray-600">
              Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the order giving rise to such claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify and hold harmless Luna Graphics, its employees, agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of our services, your violation of these terms, or your violation of any rights of a third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Force Majeure</h2>
            <p className="text-gray-600">
              We shall not be liable for any failure or delay in performing our obligations where such failure or delay results from circumstances beyond our reasonable control, including but not limited to: acts of God, government restrictions, wars, acts of terrorism, labor disputes, equipment failure, power outages, or internet service disruptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">16. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-800 font-medium">Luna Graphics</p>
              <p className="text-gray-600">Kweria Road, Nairobi, Kenya</p>
              <p className="text-gray-600">Email: info@lunagraphics.co.ke</p>
              <p className="text-gray-600">Phone: +254 791 159 618</p>
              <p className="text-gray-600">WhatsApp: +254 791 159 618</p>
            </div>
          </section>

          <p className="text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
            By using Luna Graphics services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
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
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;