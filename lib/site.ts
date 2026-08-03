export const SITE_URL = "https://hetzpilot.benouarets.dev"
export const SITE_BASE_PATH = ""

export const IS_UNPUBLISHED = process.env.RELEASE === "unpublished"

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/de/search?term=HetzPilot"
