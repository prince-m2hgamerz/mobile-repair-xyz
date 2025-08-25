import React from 'react';
import PolicyLayout from '../components/PolicyLayout';
import { FileText } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      subtitle="The rules and guidelines for using our services"
      icon={FileText}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Last updated: <span className="font-medium">25 August 2025</span>
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">1. Service Agreement</h2>
        <p className="text-gray-700 text-sm md:text-base">
          By booking a service, you agree to provide accurate details and ensure availability during the appointment slot.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">2. Payment Terms</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
          <li>All charges must be paid as per the service booking confirmation.</li>
          <li>Online payments are processed through secure gateways.</li>
          <li>Any additional costs will be communicated before proceeding.</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">3. User Responsibilities</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm md:text-base text-gray-700">
          You agree not to misuse our services or engage in illegal activities using our platform.
        </div>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">4. Liability</h2>
        <p className="text-gray-700 text-sm md:text-base">
          We are not liable for indirect losses, software-related issues, or pre-existing device damage.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">5. Warranty</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Repairs include a <strong>90-day limited warranty</strong> unless otherwise stated. Warranty does not cover new physical/liquid damage or third-party tampering.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">6. Termination</h2>
        <p className="text-gray-700 text-sm md:text-base">
          We reserve the right to cancel or refuse service if terms are violated or fraudulent activity is suspected.
        </p>

        <h2 className="text-xl md:text-2xl font-semibold mt-8">7. Contact</h2>
        <p className="text-gray-700 text-sm md:text-base">
          support@mobilerepairxyz.in · +91 9891176282 · mobilerepairxyz.in
        </p>

        <p className="text-xs md:text-sm text-gray-500 mt-8 italic">
          These terms are a general template and not legal advice. Please adapt for your business.
        </p>
      </div>
    </PolicyLayout>
  );
};

export default TermsAndConditions;
