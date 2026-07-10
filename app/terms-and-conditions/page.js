import PolicySection from "../components/PolicySection";

export const metadata = {
  title: "Terms and Conditions | Study Point",
  description:
    "Terms and Conditions for using the Study Point Android app and website.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Study Point
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Terms and Conditions
          </h1>
        </div>

        <div className="space-y-6">
          <PolicySection title="Use of Study Point">
            <p>
              These Terms and Conditions apply to the Study Point Android app
              and website operated by StackForge. By using Study Point, users
              agree to use the platform only for lawful, personal educational
              purposes.
            </p>
          </PolicySection>

          <PolicySection title="Account Information">
            <p>
              Users must provide accurate account information, including name,
              email address, phone number, and any required profile details.
              Users are responsible for keeping their account information
              accurate and for protecting access to their account.
            </p>
          </PolicySection>

          <PolicySection title="Digital Content Access">
            <p>
              Study Point provides paid digital educational content such as PDFs,
              notes, quizzes, current affairs, previous year question practice,
              and mock tests inside the Android app.
            </p>
            <p>
              Paid digital content access is provided inside the app. Access may
              be linked to the user account used for purchase or approval.
            </p>
          </PolicySection>

          <PolicySection title="Payments">
            <p>
              Payment options may include UPI, debit cards, credit cards, net
              banking, wallets, or other methods supported by the selected
              payment gateway. Payment method availability may depend on the
              gateway, bank, UPI provider, wallet provider, and app checkout
              configuration.
            </p>
            <p>
              Study Point does not store card numbers, CVV, UPI PINs, or payment
              credentials on this website.
            </p>
          </PolicySection>

          <PolicySection title="Personal Educational Use Only">
            <p>
              Content available through Study Point is for personal educational
              use only. Users must not copy, resell, redistribute, record, share,
              publicly upload, reproduce, or otherwise misuse paid content.
            </p>
          </PolicySection>

          <PolicySection title="Mock Tests and Results">
            <p>
              Mock tests, quizzes, and practice materials are provided for
              learning and exam preparation practice only. Study Point does not
              guarantee exam selection, marks, rank, job placement, or any
              specific exam result.
            </p>
          </PolicySection>

          <PolicySection title="No Government Affiliation">
            <p>
              Study Point is an independent educational platform. We are not
              affiliated with any government body, exam board, SSC, Railway,
              Banking authority, UPSC, or official recruitment agency.
            </p>
          </PolicySection>

          <PolicySection title="Misuse and Account Suspension">
            <p>
              We may suspend or restrict account access if we identify misuse,
              fraud, unauthorized sharing, redistribution of paid content,
              payment abuse, security risk, or violation of these Terms and
              Conditions.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For questions about these Terms and Conditions, contact us at{" "}
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
