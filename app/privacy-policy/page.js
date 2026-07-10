import PolicySection from "../components/PolicySection";

export const metadata = {
  title: "Privacy Policy | Study Point",
  description:
    "Privacy Policy for Study Point by StackForge, including data collection, payment data handling, third-party services, security, and user rights.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Study Point
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Last updated: {year}
          </p>
        </div>

        <div className="space-y-6">
          <PolicySection title="Overview">
            <p>
              Study Point by StackForge provides digital educational content
              through an Android app. This Privacy Policy explains what
              information we collect, why we collect it, how it may be used, and
              how users can contact us about privacy-related questions.
            </p>
          </PolicySection>

          <PolicySection title="Information We Collect">
            <p>We may collect the following information when users use Study Point:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name, email address, and phone number.</li>
              <li>Profile data submitted in the Android app.</li>
              <li>Purchase details related to paid digital content access.</li>
              <li>App activity such as content access, quizzes, and mock tests.</li>
              <li>Support messages and issue details shared with our team.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Why We Collect Data">
            <p>We collect and use information for the following purposes:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Account creation and user identification.</li>
              <li>Providing access to digital educational content.</li>
              <li>Payment processing and payment issue resolution.</li>
              <li>Customer support and refund request handling.</li>
              <li>Security, fraud prevention, and policy enforcement.</li>
              <li>Improving app content, reliability, and user experience.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Payment Data">
            <p>
              Card, UPI, and other payment instrument details are processed by
              the payment gateway selected for payment processing. We do not
              store card numbers, CVV, UPI PINs, or payment credentials on our
              website or app servers.
            </p>
            <p>
              Payment options may include UPI, debit cards, credit cards, net
              banking, wallets, or other methods supported by the payment gateway
              at the time of payment.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Services">
            <p>
              Study Point may use third-party services to operate the app and
              deliver content, including Firebase, payment gateway services,
              Google Drive links for content delivery during MVP, and analytics
              services if added later.
            </p>
            <p>
              These third-party services may process limited information as
              needed to provide their services, subject to their own privacy and
              security practices.
            </p>
          </PolicySection>

          <PolicySection title="Data Security">
            <p>
              We use reasonable technical and organizational measures to protect
              user information from unauthorized access, misuse, alteration, or
              loss. No online system can be guaranteed to be completely secure,
              but we work to keep user data protected.
            </p>
          </PolicySection>

          <PolicySection title="User Rights">
            <p>
              Users may contact us to request help with account information,
              support history, access issues, or privacy-related questions.
              Where applicable, users may request correction or deletion of
              personal information, subject to legal, security, payment, and
              support record requirements.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions, contact us at{" "}
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
