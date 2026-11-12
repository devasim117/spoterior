/**
 * Global site configuration.
 *
 * `NEXT_PUBLIC_SITE_URL` drives canonical URLs, Open Graph/Twitter tags,
 * sitemap.xml, robots.txt and JSON-LD. Set it in `.env.local` for local
 * development and in your hosting provider's environment variables for
 * production (see `.env.local.example`). A safe placeholder is used when it
 * is not defined so the build never fails.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
).replace(/\/+$/, "");

/** Turn any site-relative path into an absolute URL. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const DEFAULT_DESCRIPTION =
  "Award-winning luxury interior design studio crafting bespoke residential and commercial spaces with premium materials, considered detailing and timeless craftsmanship.";

export const KEYWORDS = [
  "luxury interior design",
  "interior design studio",
  "residential interior design",
  "commercial interior design",
  "bespoke furniture design",
  "space planning",
  "turnkey interior design",
  "hospitality interiors",
];

/** Social share image (absolute URL is applied by Next.js metadataBase). */
export const OG_IMAGE = {
  url: "/images/hero_image_3.png",
  width: 1536,
  height: 1024,
  alt: "Elegant contemporary living room designed by our studio",
};
