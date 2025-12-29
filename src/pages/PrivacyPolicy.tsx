
import React from 'react';
import { Layout } from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Fingate ("we," "our," or "us"). We are committed to protecting your privacy and handling your data with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We may collect information about you in various ways when you use our website or services:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when contacting us or signing up for our services.
            </li>
            <li>
              <strong>Business Information:</strong> Company name, industry, size, and financial information relevant to providing our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on our site.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>Email: contact@fingategrow.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
