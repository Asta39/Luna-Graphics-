import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';

const CorporateTerms = () => {
  const navigate = useNavigate();
  const brandName = "Luna Graphics";
  const pageTitle = `Corporate Terms & Conditions | ${brandName}`;
  const pageDescription = "Corporate terms, bulk pricing agreements, and B2B service conditions for Luna Graphics corporate printing and branding solutions in Nairobi.";
  const pageUrl = "https://lunagraphics.co.ke/corporate-terms";

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Corporate Terms & Conditions</h1>
          <p className="text-xl text-gray-600 mb-6">
            Specific terms for corporate clients, bulk orders, political campaigns, and B2B printing solutions
          </p>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-KE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8">
            <p className="text-sm text-green-800">
              <strong>Note:</strong> These Corporate Terms supplement our general <button onClick={() => navigate('/terms-of-service')} className="underline hover:text-green-900">Terms of Service</button> and <button onClick={() => navigate('/privacy-policy')} className="underline hover:text-green-900">Privacy Policy</button>. In case of conflict, these Corporate Terms prevail for business clients.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Corporate Client Eligibility</h2>
            <p className="text-gray-600 mb-4">
              Corporate Terms apply to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Registered companies and businesses in Kenya</li>
              <li>Political parties and campaign organizations</li>
              <li>Non-governmental organizations (NGOs) and non-profits</li>
              <li>Government agencies and parastatals</li>
              <li>Educational institutions</li>
              <li>Religious organizations</li>
              <li>Any entity placing bulk orders exceeding KES 100,000</li>
            </ul>
            <p className="text-gray-600">
              Corporate clients may be required to provide business registration documents, tax compliance certificates, or other credentials to qualify for corporate pricing and terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Corporate Account Setup</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Account Application</h3>
            <p className="text-gray-600 mb-4">
              To establish a corporate account, clients must provide:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Certificate of Incorporation or Business Registration</li>
              <li>KRA PIN Certificate</li>
              <li>Tax Compliance Certificate (where applicable)</li>
              <li>Authorized signatory identification</li>
              <li>Completed Corporate Account Application Form</li>
              <li>Trade references (for credit applications)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Account Approval</h3>
            <p className="text-gray-600 mb-4">
              Luna Graphics reserves the right to approve or decline corporate account applications. Approval typically takes 2-3 business days pending verification of submitted documents.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">2.3 Account Benefits</h3>
            <p className="text-gray-600 mb-4">Approved corporate accounts enjoy:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Negotiated bulk pricing and volume discounts</li>
              <li>Priority production scheduling</li>
              <li>Dedicated account manager for large projects</li>
              <li>Extended payment terms (subject to credit approval)</li>
              <li>Monthly billing and invoicing</li>
              <li>Brand asset storage for repeat orders</li>
              <li>Complimentary design consultation (for qualifying orders)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Corporate Pricing & Payment Terms</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">3.1 Volume Pricing Tiers</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Tier</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Monthly Spend (KES)</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Discount</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Payment Terms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">Bronze</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">50,000 - 150,000</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">5%</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">50% deposit, 50% on delivery</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">Silver</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">150,001 - 500,000</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">10%</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">30 days net</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">Gold</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">500,001 - 2,000,000</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">15%</td>
                    <td className="px-4 py-2 text-sm text-gray-600 border-b">45 days net</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-600">Platinum</td>
                    <td className="px-4 py-2 text-sm text-gray-600">2,000,000+</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Custom</td>
                    <td className="px-4 py-2 text-sm text-gray-600">60 days net / Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-gray-700 mb-3">3.2 Political Campaign Pricing</h3>
            <p className="text-gray-600 mb-4">
              Political campaign orders are subject to special terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Campaign materials require 100% upfront payment for orders under KES 500,000</li>
              <li>Orders exceeding KES 500,000 may qualify for staged payments with approved credit</li>
              <li>All campaign materials must comply with IEBC regulations and Kenyan election laws</li>
              <li>Luna Graphics reserves the right to decline orders that violate electoral codes</li>
              <li>Rush fees apply for orders requiring delivery within 48 hours</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">3.3 Payment Methods for Corporates</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Bank Transfer:</strong> Preferred method for corporate accounts</li>
              <li><strong>Corporate Cheque:</strong> Subject to 5-day clearance</li>
              <li><strong>M-Pesa Business:</strong> For immediate processing</li>
              <li><strong>Letter of Credit:</strong> Available for international corporate clients</li>
              <li><strong>Mobile Money:</strong> M-Pesa Paybill for registered businesses</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">3.4 Late Payment Penalties</h3>
            <p className="text-gray-600 mb-4">
              Corporate accounts exceeding agreed payment terms are subject to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>2% monthly interest on outstanding balances</li>
              <li>Suspension of credit privileges</li>
              <li>Hold on current orders until payment is received</li>
              <li>Legal recovery proceedings for accounts overdue by 90+ days</li>
              <li>Reporting to credit reference bureaus (CRB) for persistent defaulters</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Corporate Branding Services</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">4.1 Brand Asset Management</h3>
            <p className="text-gray-600 mb-4">
              Luna Graphics offers secure storage of corporate brand assets including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Logo files (vector and raster formats)</li>
              <li>Brand guidelines and style sheets</li>
              <li>Approved color profiles and pantone references</li>
              <li>Template designs for recurring materials</li>
              <li>Historical print files for reorder consistency</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Brand assets are stored securely and will not be shared with third parties or used for any purpose other than fulfilling your orders.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">4.2 Brand Consistency Guarantee</h3>
            <p className="text-gray-600 mb-4">
              For corporate clients with stored brand assets, we guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Color consistency within 95% accuracy across all print runs</li>
              <li>Use of approved logo versions only</li>
              <li>Adherence to brand guidelines for all materials</li>
              <li>Pre-production approval for brand-sensitive items</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">4.3 Corporate Merchandise</h3>
            <p className="text-gray-600 mb-4">
              For branded merchandise orders:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Minimum order quantities apply (typically 50+ units)</li>
              <li>Sample approval required before bulk production</li>
              <li>Quality control inspection for all merchandise</li>
              <li>Packaging options available (individual, bulk, or gift-wrapped)</li>
              <li>Storage and fulfillment services available for qualifying accounts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Election Campaign Materials</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">5.1 Compliance Requirements</h3>
            <p className="text-gray-600 mb-4">
              All political campaign materials must comply with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Independent Electoral and Boundaries Commission (IEBC) regulations</li>
              <li>Electoral Code of Conduct</li>
              <li>Kenyan election laws and guidelines</li>
              <li>County-specific signage and advertising bylaws</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">5.2 Campaign Client Obligations</h3>
            <p className="text-gray-600 mb-4">Political campaign clients must:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Provide written authorization from the candidate or party</li>
              <li>Submit IEBC registration documents</li>
              <li>Ensure all messaging complies with electoral regulations</li>
              <li>Assume full legal responsibility for content</li>
              <li>Obtain necessary permits for outdoor advertising</li>
            </ul>
            <p className="text-gray-600">
              Luna Graphics produces materials based on client specifications and assumes no liability for content compliance or regulatory violations.
            </p>

            <h3 className="text-xl font-medium text-gray-700 mb-3">5.3 Campaign Rush Orders</h3>
            <p className="text-gray-600 mb-4">
              During election periods, rush order fees apply:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>48-hour turnaround: +25% surcharge</li>
              <li>24-hour turnaround: +50% surcharge</li>
              <li>Same-day production: +100% surcharge (subject to availability)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Bulk Order Terms</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">6.1 Minimum Order Values</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Corporate accounts: No minimum</li>
              <li>Bulk discount eligibility: KES 50,000 minimum per order</li>
              <li>Custom merchandise: 50 units minimum per design</li>
              <li>National distribution campaigns: KES 500,000 minimum</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">6.2 Production Scheduling</h3>
            <p className="text-gray-600 mb-4">
              Large orders require production scheduling:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Orders over KES 500,000: 2-week advance notice recommended</li>
              <li>Nationwide campaign materials: 3-4 weeks advance notice</li>
              <li>Staged delivery available for large campaigns</li>
              <li>Production timelines confirmed in writing upon order confirmation</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">6.3 Quality Control for Bulk Orders</h3>
            <p className="text-gray-600 mb-4">
              For orders exceeding KES 200,000:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Pre-production sample provided for approval</li>
              <li>Mid-production inspection available upon request</li>
              <li>Final quality check before release</li>
              <li>Certificate of compliance available for corporate audits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Delivery & Logistics</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">7.1 Corporate Delivery Options</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Standard Delivery:</strong> 2-3 business days within Nairobi</li>
              <li><strong>Express Delivery:</strong> Same day or next day (surcharge applies)</li>
              <li><strong>National Distribution:</strong> To multiple counties or constituencies</li>
              <li><strong>Warehouse Storage:</strong> For phased campaign distribution</li>
              <li><strong>Event Delivery:</strong> Direct to rally venues or campaign offices</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">7.2 Delivery Acceptance</h3>
            <p className="text-gray-600 mb-4">
              Corporate deliveries require:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Authorized signatory or appointed representative</li>
              <li>Official company stamp or signed delivery note</li>
              <li>Inspection of goods upon receipt</li>
              <li>Immediate notification of any discrepancies or damage</li>
            </ul>
            <p className="text-gray-600">
              Claims for missing or damaged items must be submitted within 24 hours of delivery with photographic evidence.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Confidentiality & Non-Disclosure</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">8.1 Corporate Confidentiality</h3>
            <p className="text-gray-600 mb-4">
              Luna Graphics agrees to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Maintain strict confidentiality of all corporate client information</li>
              <li>Not disclose pricing agreements to competing firms</li>
              <li>Secure storage of sensitive campaign strategies and materials</li>
              <li>Limit access to client files to essential personnel only</li>
              <li>Execute specific Non-Disclosure Agreements (NDAs) when required</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">8.2 Political Campaign Confidentiality</h3>
            <p className="text-gray-600">
              For political clients, we guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>No disclosure of campaign material designs to opposing parties</li>
              <li>Secure handling of voter data (if provided for targeted materials)</li>
              <li>Discretion regarding campaign timelines and strategies</li>
              <li>No public association without client consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property for Corporate Clients</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">9.1 Work-for-Hire Arrangements</h3>
            <p className="text-gray-600 mb-4">
              For design services commissioned by corporate clients:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Full ownership transfers to client upon final payment</li>
              <li>Luna Graphics retains right to display work in portfolio unless otherwise agreed</li>
              <li>Source files provided in standard formats (AI, PSD, PDF)</li>
              <li>Font licenses and stock image licenses transferred where applicable</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">9.2 Campaign Material Rights</h3>
            <p className="text-gray-600">
              For political campaign materials:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Candidate/party retains all rights to portrait and likeness usage</li>
              <li>Slogans and campaign messaging remain property of the campaign</li>
              <li>Generic design templates may be adapted for other clients</li>
              <li>Reproduction of campaign materials for opposing candidates is prohibited</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Termination & Dispute Resolution</h2>
            
            <h3 className="text-xl font-medium text-gray-700 mb-3">10.1 Account Termination</h3>
            <p className="text-gray-600 mb-4">
              Luna Graphics may terminate corporate accounts for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Repeated late payments (3+ instances)</li>
              <li>Violations of electoral laws or ethical standards</li>
              <li>Abusive behavior toward staff</li>
              <li>Attempted fraud or misrepresentation</li>
              <li>Material breach of these terms</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-700 mb-3">10.2 Dispute Resolution</h3>
            <p className="text-gray-600 mb-4">
              Any disputes arising from corporate agreements shall be resolved through:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>Negotiation:</strong> Good faith discussions between parties (30 days)</li>
              <li><strong>Mediation:</strong> Neutral third-party mediation if negotiation fails</li>
              <li><strong>Arbitration:</strong> Binding arbitration under Kenyan law if mediation fails</li>
              <li><strong>Litigation:</strong> Kenyan courts as final resort</li>
            </ol>

            <h3 className="text-xl font-medium text-gray-700 mb-3">10.3 Governing Law</h3>
            <p className="text-gray-600">
              These Corporate Terms are governed by the laws of the Republic of Kenya. The parties submit to the exclusive jurisdiction of the courts of Nairobi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Amendments</h2>
            <p className="text-gray-600">
              Luna Graphics reserves the right to amend these Corporate Terms. Corporate clients will receive 30 days written notice of material changes. Continued use of services after amendments constitutes acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Corporate Services</h2>
            <p className="text-gray-600 mb-4">
              For corporate account inquiries, bulk pricing, or campaign support:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-800 font-medium">Luna Graphics - Corporate Division</p>
              <p className="text-gray-600">Kweria Road, Nairobi, Kenya</p>
              <p className="text-gray-600"><strong>Corporate Hotline:</strong> +254 791 159 618</p>
              <p className="text-gray-600"><strong>Email:</strong> info.lunagraphics@gmail.com</p>
              <p className="text-gray-600"><strong>Business Hours:</strong> Monday-Friday 8AM-6PM, Saturday 9AM-2PM</p>
              <p className="text-gray-600 mt-2"><strong>Dedicated Support:</strong> Available for Platinum tier clients</p>
            </div>
          </section>

          <p className="text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
            By establishing a corporate account or placing bulk orders with Luna Graphics, you acknowledge that you have read, understood, and agree to be bound by these Corporate Terms & Conditions.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
          <button 
            onClick={() => navigate('/corporate-services-page')}
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            ← Back to Corporate Services
          </button>
          <button 
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
          >
            Home →
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
            <button onClick={() => navigate('/privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => navigate('/terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button>
            <span>|</span>
            <button onClick={() => navigate('/corporate-terms')} className="hover:text-white transition-colors">Corporate Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateTerms;