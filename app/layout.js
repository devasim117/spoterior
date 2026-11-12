import { Inter, Playfair_Display } from "next/font/google";

import { brand } from "@/lib/siteContent";
import {
  SITE_URL,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
  OG_IMAGE,
  absoluteUrl,
} from "@/lib/site";

import "./globals.css";
import "./app.css";

/* Self-hosted, preloaded, zero-layout-shift font loading. The generated CSS
   variables are consumed by the `--font-display` / `--font-body` design
   tokens in globals.css, so typography is unchanged. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_TITLE = `${brand.name} — ${brand.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${brand.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: brand.name,
  category: "Interior Design",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: brand.name,
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/logo192.png", sizes: "192x192" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080a",
};

/* JSON-LD structured data — organisation + website. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignFirm",
  "@id": `${SITE_URL}/#organization`,
  name: brand.name,
  description:
    "Luxury interior design studio crafting bespoke residential and commercial spaces.",
  url: `${SITE_URL}/`,
  image: absoluteUrl(OG_IMAGE.url),
  logo: absoluteUrl(brand.logo),
  priceRange: "$$$",
  areaServed: "Worldwide",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: brand.name,
  url: `${SITE_URL}/`,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}
