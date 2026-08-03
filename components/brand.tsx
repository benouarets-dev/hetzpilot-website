import Image from "next/image"
import Link from "next/link"

import { SITE_BASE_PATH } from "@/lib/site"

export function AppIcon({ compact = false }: { compact?: boolean }) {
  const size = compact ? 34 : 76

  return (
    <span className={compact ? "app-icon app-icon--compact" : "app-icon"} aria-hidden="true">
      <Image
        className="app-icon__image"
        src="/ios-logo.png"
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
      />
    </span>
  )
}

export function Brand() {
  return (
    <Link className="brand" href={SITE_BASE_PATH} aria-label="HetzPilot home">
      <AppIcon compact />
      <span>HetzPilot</span>
    </Link>
  )
}
