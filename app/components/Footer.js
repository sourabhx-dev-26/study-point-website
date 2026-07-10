import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">
            Study Point by StackForge
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Study Point is an independent educational platform. We are not
            affiliated with any government body, exam board, SSC, Railway,
            Banking authority, UPSC, or official recruitment agency.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Contact:{" "}
            <a
              className="font-semibold text-blue-700 hover:text-blue-800"
              href="mailto:support@stackforge.tech"
            >
              support@stackforge.tech
            </a>
          </p>
        </div>
        <div className="lg:justify-self-end">
          <p className="text-sm font-semibold uppercase text-slate-500">
            Links
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-700 lg:max-w-sm lg:justify-end">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-blue-700" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Copyright {year} Study Point by StackForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
