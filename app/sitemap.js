import { SITE_URL } from "@/lib/site";

/**
 * Dynamic sitemap.
 *
 * The site is a single-page experience: every section has a stable
 * `#fragment` (#home, #services, #portfolio, #showcase, #testimonials,
 * #contact) but they all live on the canonical root URL, so only "/" is
 * advertised to search engines to avoid duplicate content.
 */
export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
