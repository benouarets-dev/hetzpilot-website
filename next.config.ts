import type { NextConfig } from "next"
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/terms", destination: "/agb", permanent: true },
      { source: "/hetzpilot", destination: "/", permanent: true },
      { source: "/hetzpilot/support", destination: "/support", permanent: true },
      { source: "/hetzpilot/privacy", destination: "/privacy", permanent: true },
      { source: "/hetzpilot/agb", destination: "/agb", permanent: true },
      { source: "/hetzpilot/terms", destination: "/agb", permanent: true },
      { source: "/hetzpilot/impressum", destination: "/impressum", permanent: true },
    ]
  },
}

export default nextConfig

initOpenNextCloudflareForDev()
