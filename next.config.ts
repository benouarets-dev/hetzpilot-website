import type { NextConfig } from "next"
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"

import { APPLE_STANDARD_EULA_URL } from "./lib/site"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/agb", destination: APPLE_STANDARD_EULA_URL, permanent: true },
      { source: "/terms", destination: APPLE_STANDARD_EULA_URL, permanent: true },
      { source: "/hetzpilot", destination: "/", permanent: true },
      { source: "/hetzpilot/support", destination: "/support", permanent: true },
      { source: "/hetzpilot/privacy", destination: "/privacy", permanent: true },
      { source: "/hetzpilot/agb", destination: APPLE_STANDARD_EULA_URL, permanent: true },
      { source: "/hetzpilot/terms", destination: APPLE_STANDARD_EULA_URL, permanent: true },
      { source: "/hetzpilot/impressum", destination: "/impressum", permanent: true },
      { source: "/newsletter/bestaetigt", destination: "/newsletter/confirmed", permanent: true },
      { source: "/newsletter/confirm", destination: "/newsletter/confirmed", permanent: true },
    ]
  },
}

export default nextConfig

initOpenNextCloudflareForDev()
