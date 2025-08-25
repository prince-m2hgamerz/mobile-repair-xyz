import React from 'react';
import PolicyLayout from '../components/PolicyLayout';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your data"
      icon={Shield}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Last updated: <span className="font-medium">25 August 2025</span>
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
          <li>Personal details like name, phone number, and email when you book services.</li>
          <li>Device details (brand/model/issue) for repair purposes only.</li>
          <li>Payment information is processed securely by our payment partners.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">2. How We Use Your Data</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-3 text-sm md:text-base text-gray-700">
          Your data is used only for service delivery, communication, and legal compliance.  
          <strong>We never sell your data</strong> to third parties.
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
          <li>Shared only with assigned technicians for fulfilling your service request.</li>
          <li>Shared with payment providers for secure transactions.</li>
          <li>Legal disclosure when required by authorities.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">4. Data Security</h2>
        <p className="text-gray-700 text-sm md:text-base">
          We use industry-standard security measures to protect your data. However, no system is 100% secure, so we cannot guarantee absolute protection.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">5. Your Rights</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm md:text-base text-gray-700 space-y-2">
          <p>You can request access, correction, or deletion of your data anytime.</p>
          <p>To do so, contact us via <strong>support@mobilerepairxyz.in</strong>.</p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">6. Contact</h2>
        <p className="text-gray-700 text-sm md:text-base">
          support@mobilerepairxyz.in · +91 9891176282 · mobilerepairxyz.in
        </p>

        <p className="text-xs md:text-sm text-gray-500 mt-8 italic">
          This privacy policy is a general template and not legal advice. Please adapt as per your business.
        </p>
      </div>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
