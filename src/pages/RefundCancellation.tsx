import React from 'react';
import PolicyLayout from '../components/PolicyLayout';
import { RotateCcw } from 'lucide-react';

const RefundCancellation: React.FC = () => {
  return (
<PolicyLayout
  title="Refund & Cancellation Policy"
  subtitle="How cancellations, rescheduling, and refunds work"
  icon={RotateCcw}
>
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="text-gray-600 text-sm md:text-base mb-6">
      Last updated: <span className="font-medium">25 August 2025</span>
    </p>

    {/* Section 1 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">1. Booking Cancellation</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
      <li><strong>Before technician dispatch:</strong> Free cancellation.</li>
      <li><strong>After technician dispatch/arrival:</strong> A visit/diagnosis fee may apply (disclosed before booking).</li>
    </ul>

    {/* Section 2 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">2. Rescheduling</h2>
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-3 text-sm md:text-base text-gray-700">
      You can reschedule <strong>once at no cost</strong> if requested at least 
      <strong> 2 hours before</strong> the appointment time, subject to technician availability.
    </div>

    {/* Section 3 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">3. Refunds</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
      <li>Refunds are issued to the <strong>original payment method</strong> after verification.</li>
      <li>Once approved, refunds are typically initiated within <strong>1–3 business days</strong>; your bank/issuer may take additional time to post.</li>
    </ul>

    {/* Section 4 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">4. No-Fix Scenarios</h2>
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm md:text-base text-gray-700 space-y-2">
      <p>If we cannot complete the repair, you pay only the applicable diagnosis/visit fee (if communicated in advance).</p>
      <p>For water/liquid damage and severe board-level faults, success cannot be guaranteed; charges cover time and consumables.</p>
    </div>

    {/* Section 5 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">5. Warranty Returns</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
      <li>Parts/services carry a <strong>90-day limited warranty</strong> unless noted otherwise.</li>
      <li>Eligible warranty cases will be repaired or the defective part replaced after inspection.</li>
      <li>Warranty excludes new physical damage, liquid ingress after service, unauthorized opening, or software corruption.</li>
    </ul>

    {/* Section 6 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">6. Non-Refundable Cases</h2>
    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm md:text-base text-gray-700">
      <ul className="list-disc pl-6 space-y-2">
        <li>Damage caused by the user after service (drops, pressure, liquid exposure).</li>
        <li>Third-party tampering after our repair.</li>
        <li>Issues unrelated to the serviced component (e.g., software bugs when only hardware was repaired).</li>
      </ul>
    </div>

    {/* Section 7 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">7. How to Request a Refund/Cancel</h2>
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-sm md:text-base">
      <li>Share your <strong>Order/Job ID</strong>, name, and contact number.</li>
      <li>Email <strong className="text-blue-600">support@mobilerepairxyz.in</strong> or WhatsApp/call <strong>+91 9891176282</strong>.</li>
      <li>We will verify details and confirm the resolution and timeline.</li>
    </ol>

    {/* Section 8 */}
    <h2 className="text-xl md:text-2xl font-semibold mt-8">8. Contact</h2>
    <p className="text-gray-700 text-sm md:text-base">
      support@mobilerepairxyz.in · +91 9891176282 · mobilerepairxyz.in
    </p>

    {/* Footer Note */}
    <p className="text-xs md:text-sm text-gray-500 mt-8 italic">
      This policy is a general template and not legal advice. Please customize amounts/fees and review with counsel.
    </p>
  </div>
</PolicyLayout>

  );
};

export default RefundCancellation;