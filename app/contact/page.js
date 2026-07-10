import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Study Point",
  description:
    "Contact Study Point by StackForge for payment issues, content access issues, PDF support, mock test issues, and refund requests.",
  alternates: {
    canonical: "/contact",
  },
};

const supportTopics = [
  "Payment issue",
  "Content access issue",
  "PDF not opening",
  "Mock test issue",
  "Refund request",
];

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">
            Contact support
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            We are here to help
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            For Study Point app, payment, content access, and refund-related
            help, contact our support team by email.
          </p>

          <div className="mt-8 space-y-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Support email
              </p>
              <a
                className="mt-1 inline-flex text-lg font-bold text-blue-700 hover:text-blue-800"
                href="mailto:support@stackforge.tech"
              >
                support@stackforge.tech
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Business name
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                Study Point by StackForge
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Support timing
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                Monday to Saturday, 10 AM to 6 PM IST.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold uppercase text-blue-700">
              Support topics
            </p>
            <ul className="mt-4 grid gap-3 text-base text-slate-700 sm:grid-cols-2">
              {supportTopics.map((topic) => (
                <li key={topic} className="rounded-lg bg-white px-4 py-3">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
