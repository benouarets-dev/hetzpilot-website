import type { MetadataRoute } from "next"

import { SITE_URL } from "@/lib/site"

const LAST_SIGNIFICANT_UPDATE = new Date("2026-08-03T00:00:00.000Z")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_SIGNIFICANT_UPDATE,
      images: [
        `${SITE_URL}/ios-logo.webp`,
        `${SITE_URL}/mockup-overview.webp`,
        `${SITE_URL}/mockup-resources.webp`,
        `${SITE_URL}/mockup-servers.webp`,
        `${SITE_URL}/mockup-create-server.webp`,
      ],
    },
    { url: `${SITE_URL}/support`, lastModified: LAST_SIGNIFICANT_UPDATE },
    { url: `${SITE_URL}/privacy`, lastModified: LAST_SIGNIFICANT_UPDATE },
    { url: `${SITE_URL}/agb`, lastModified: LAST_SIGNIFICANT_UPDATE },
    { url: `${SITE_URL}/impressum`, lastModified: LAST_SIGNIFICANT_UPDATE },
  ]
}
