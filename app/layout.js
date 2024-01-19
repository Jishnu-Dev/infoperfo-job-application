import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import classNames from "classnames";
import Footer from "@/components/layout/Footer";
import { siteName, tagline } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteName,
  description: tagline,
  // metadataBase: new URL(siteBasePath),
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [siteName, tagline],
  colorScheme: "light",
  creator: "Jishnu Raj",
  publisher: "Jishnu Raj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteName,
    description: tagline,
    url: "https://stoziaclub.com",
    siteName: siteName,
    locale: "en_US",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Jishnu Raj"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: tagline,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // sitemap: `${siteBasePath}/sitemap.xml`
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "text-black min-h-screen flex flex-col"
        )}
      >
        <Header />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
