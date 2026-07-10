import Link from "next/link";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const features = [
    {
      label: "PDF",
      title: "PDF Notes",
      description:
        "Structured digital notes for exam preparation, available inside the Android app.",
      color: "blue",
    },
    {
      label: "MT",
      title: "Mock Tests",
      description:
        "Practice tests designed to help students revise and measure preparation progress.",
      color: "violet",
    },
    {
      label: "QZ",
      title: "Quizzes",
      description:
        "Topic-wise quizzes for quick revision and daily learning practice.",
      color: "emerald",
    },
    {
      label: "CA",
      title: "Current Affairs",
      description:
        "Digital current affairs content for regular exam-focused preparation.",
      color: "sky",
    },
    {
      label: "PY",
      title: "Previous Year Practice",
      description:
        "Previous year question practice to help students understand exam patterns.",
      color: "indigo",
    },
    {
      label: "APP",
      title: "In-App PDF Viewer",
      description:
        "Students can open approved PDF content directly from My Library.",
      color: "purple",
    },
  ];

  const steps = [
    "Student creates an account in the Study Point Android app.",
    "Student browses available study materials and mock tests.",
    "Student purchases or requests access to paid content.",
    "Approved content appears in My Library.",
    "Student studies PDFs and attempts mock tests in the app.",
  ];

  const paymentOptions = [
    {
      title: "UPI",
      description:
        "Users may pay through supported UPI apps when enabled by the payment gateway.",
    },
    {
      title: "Debit and Credit Cards",
      description:
        "Card payments may be processed securely by the selected payment gateway.",
    },
    {
      title: "Net Banking",
      description:
        "Supported bank payment options may be available during checkout in the app.",
    },
    {
      title: "Wallets",
      description:
        "Wallet availability depends on the payment gateway and supported providers.",
    },
  ];

  return (
    <>
      <section className="border-b border-blue-100 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-6">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Study Point by StackForge
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Study Point
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-indigo-700">
              Digital exam preparation app for PDFs, notes, quizzes, and mock
              tests.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              We provide paid digital educational content such as PDFs, notes,
              quizzes, and mock tests through our Android app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Contact Support
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-base font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Policies
              </Link>
            </div>
          </div>

          <div className="mx-auto hidden w-full max-w-md md:block lg:justify-self-end">
            <div className="rounded-lg border border-slate-200 bg-slate-100 p-3 shadow-xl shadow-blue-100">
              <div className="rounded-lg bg-white p-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-700">
                      Android app
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-950">
                      My Library
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Digital access
                  </span>
                </div>
                <div className="mt-4 rounded-lg bg-blue-700 px-4 py-4 text-white">
                  <p className="text-xs font-semibold uppercase text-blue-100">
                    Study Point
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    PDFs, quizzes, and tests
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["PDF Notes", "Mock Test", "Quiz Set", "Current Affairs"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                      >
                        <div className="mb-3 h-2 w-10 rounded-full bg-indigo-200" />
                        <p className="whitespace-nowrap text-sm font-semibold text-slate-900">
                          {item}
                        </p>
                        <div className="mt-3 h-2 rounded-full bg-slate-200" />
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-800">
                    Approved content appears in My Library.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-blue-700">
              What we offer
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Digital study content for focused preparation
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-indigo-700">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Simple access through the Android app
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Study Point is designed for digital delivery. Students can browse,
              request, purchase, and access approved content inside the app.
            </p>
          </div>
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-blue-700">
              Payment and access
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Digital access, no physical shipping
            </h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
              <li>
                Paid content access is provided digitally inside the Android app.
              </li>
              <li>Users can access purchased content from My Library.</li>
              <li>No physical shipping is involved.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-indigo-700">
              Important disclaimer
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Independent educational platform
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Study Point is an independent educational platform. We are not
              affiliated with any government body, exam board, SSC, Railway,
              Banking authority, UPSC, or official recruitment agency.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-blue-700">
              Payment options
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Common digital payment methods
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Study Point does not collect payment credentials on this website.
              Payments for paid digital content are processed through a secure
              payment gateway when enabled inside the Android app.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paymentOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {option.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {option.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase text-blue-700">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Need help with Study Point?
            </h2>
            <div className="mt-6 grid gap-4 text-base leading-7 text-slate-700 sm:grid-cols-2">
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-blue-700 hover:text-blue-800"
                  href="mailto:support@stackforge.tech"
                >
                  support@stackforge.tech
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  className="font-semibold text-blue-700 hover:text-blue-800"
                  href="https://stackforge.tech"
                >
                  stackforge.tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
