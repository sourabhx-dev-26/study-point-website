import "./globals.css";

import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://stackforge.tech"),
  title: "Study Point | Digital Exam Preparation App",
  description:
    "Study Point provides digital educational content, PDFs, notes, quizzes and mock tests through an Android app.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Study Point | Digital Exam Preparation App",
    description:
      "Study Point provides digital educational content, PDFs, notes, quizzes and mock tests through an Android app.",
    url: "https://stackforge.tech",
    siteName: "Study Point",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
