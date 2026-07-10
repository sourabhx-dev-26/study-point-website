import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white shadow-sm shadow-blue-200">
            SP
          </span>
          <span>
            <span className="block text-lg font-bold leading-5 text-slate-950">
              Study Point
            </span>
            <span className="block text-xs font-medium text-slate-500">
              by StackForge
            </span>
          </span>
        </Link>

        <nav
          className="w-full lg:min-w-0 lg:flex-1"
          aria-label="Main navigation"
        >
          <ul className="flex flex-wrap gap-1 text-sm font-semibold text-slate-700 lg:justify-end">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full px-3 py-2 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
