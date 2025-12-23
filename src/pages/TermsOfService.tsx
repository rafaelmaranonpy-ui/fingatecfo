
import React from 'react';
import { Layout } from '@/components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Fingate's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>
            Fingate provides fractional and interim CFO services to businesses, including strategic financial planning, financial modeling, cash flow management, and fundraising support. Our services are tailored to each client's specific needs and requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Client Responsibilities</h2>
          <p>
            Clients are responsible for:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Providing accurate and complete information necessary for our services</li>
            <li>Reviewing and approving financial reports and recommendations</li>
            <li>Making timely payments for services rendered</li>
            <li>Implementing recommended financial practices at their discretion</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Confidentiality</h2>
          <p>
            We maintain strict confidentiality regarding all client information and business details. We do not share client information with third parties unless required by law or with explicit client permission.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All content on the Fingate website, including text, graphics, logos, and images, is the property of Fingate and is protected by copyright and other intellectual property laws. Clients retain ownership of their business information and data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            Fingate provides professional financial guidance, but the implementation of our recommendations is at the client's discretion. We are not liable for business outcomes resulting from the application or non-application of our services. Our services do not constitute legal or tax advice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination of Services</h2>
          <p>
            Either party may terminate services with appropriate notice as specified in individual client agreements. Upon termination, clients are responsible for payment of services rendered up to the termination date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Fingate operates, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>Email: rafael.maranon@fingategrow.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
