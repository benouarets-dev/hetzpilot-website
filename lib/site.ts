export const SITE_URL = "https://hetzpilot.benouarets.dev"
export const SITE_BASE_PATH = ""

export type ReleaseStatus = "unpublished" | "inapplereview" | "published"

export const RELEASE_STATUS: ReleaseStatus =
  process.env.RELEASE === "unpublished" || process.env.RELEASE === "inapplereview"
    ? process.env.RELEASE
    : "published"

export const IS_UNPUBLISHED = RELEASE_STATUS === "unpublished"
export const IS_IN_APP_REVIEW = RELEASE_STATUS === "inapplereview"
export const IS_APP_AVAILABLE = RELEASE_STATUS === "published"

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/de/search?term=HetzPilot"
