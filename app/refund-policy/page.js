import PolicySection from "../components/PolicySection";

export const metadata = {
  title: "Refund and Cancellation Policy | Study Point",
  description:
    "Refund and Cancellation Policy for Study Point digital educational content.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Study Point
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Refund and Cancellation Policy
          </h1>
        </div>

        <div className="space-y-6">
          <PolicySection title="Digital Educational Content">
            <p>
              Study Point sells digital educational content such as PDFs, notes,
              quizzes, previous year practice, current affairs, and mock tests
              through the Android app. No physical shipping is involved.
            </p>
          </PolicySection>

          <PolicySection title="Refund Eligibility">
            <p>
              Once digital content is unlocked or accessed, a refund may not be
              available. Refunds may be considered only in the following cases:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Duplicate payment for the same content or access request.</li>
              <li>
                Failed transaction where payment was deducted but access was not
                provided.
              </li>
              <li>
                A verified technical issue that prevents access and is confirmed
                by Study Point support.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="Refund Request Timeline">
            <p>
              Refund requests must be raised within 3 days of payment. Requests
              should include the registered account details, payment date,
              transaction reference if available, and a clear description of the
              issue.
            </p>
          </PolicySection>

          <PolicySection title="Approved Refunds">
            <p>
              Approved refunds will be processed to the original payment method
              as per the payment gateway or bank timeline. Actual credit time may
              depend on the payment provider, bank, or UPI service involved.
            </p>
          </PolicySection>

          <PolicySection title="Cancellation">
            <p>
              Since Study Point provides digital educational content, cancellation
              may not be possible after content access has been unlocked or
              provided inside the Android app.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              To request support for a payment or refund issue, email{" "}
              <a
                className="font-semibold text-blue-700 hover:text-blue-800"
                href="mailto:support@stackforge.tech"
              >
                support@stackforge.tech
              </a>
              .
            </p>
          </PolicySection>
        </div>
      </div>
    </div>
  );
}
