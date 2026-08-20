"use server"

import { SITE_URL } from "@/lib/site"

export interface NewsletterState {
  success?: boolean
  error?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function getEnvVar(key: string): Promise<string | undefined> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare")
    const cf = await getCloudflareContext({ async: true })
    if (cf?.env) {
      const binding = (cf.env as Record<string, unknown>)[key]
      if (typeof binding === "string" && binding.length > 0) {
        return binding
      }
      if (
        binding &&
        typeof binding === "object" &&
        "get" in binding &&
        typeof (binding as { get: () => Promise<string> }).get === "function"
      ) {
        const val = await (binding as { get: () => Promise<string> }).get()
        if (typeof val === "string" && val.length > 0) {
          return val
        }
      }
    }
  } catch (err) {
    console.error("Error reading Cloudflare context:", err)
  }

  if (typeof process.env[key] === "string" && process.env[key].length > 0) {
    return process.env[key]
  }

  return undefined
}

export async function subscribeNewsletter(
  _prevState: NewsletterState | null,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get("email")?.toString().trim()
  const honeypot = formData.get("hp_field")?.toString().trim()

  // Silent reject if honeypot is filled (bot protection)
  if (honeypot) {
    return {
      success: true,
      message: "Almost done! Please check your inbox to confirm your newsletter subscription.",
    }
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  const apiKey = await getEnvVar("BREVO_API_KEY")
  const listId = Number((await getEnvVar("BREVO_LIST_ID")) || 9)
  const templateId = Number((await getEnvVar("BREVO_DOI_TEMPLATE_ID")) || 8)
  const siteUrl = (await getEnvVar("NEXT_PUBLIC_SITE_URL")) || SITE_URL
  const redirectionUrl = `${siteUrl.replace(/\/$/, "")}/newsletter/confirmed`

  if (!apiKey) {
    try {
      const { getCloudflareContext } = await import("@opennextjs/cloudflare")
      const cf = await getCloudflareContext({ async: true })
      console.error(
        "BREVO_API_KEY is not set. Available cf.env keys:",
        cf?.env ? Object.keys(cf.env) : "no cf.env"
      )
    } catch {
      console.error("BREVO_API_KEY is not set.")
    }
    // In local dev without key, return mock success message to test UI
    if (process.env.NODE_ENV === "development") {
      return {
        success: true,
        message:
          "[DEV MODE: No API key set] Almost done! Please check your inbox to confirm your newsletter subscription.",
      }
    }
    return {
      success: false,
      error: "Newsletter service is currently not configured. Please try again later.",
    }
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        includeListIds: [listId],
        templateId,
        redirectionUrl,
      }),
    })

    if (response.status === 201 || response.status === 204 || response.status === 200) {
      return {
        success: true,
        message: "Almost done! We’ve sent a confirmation email to your inbox. Please click the link inside to confirm your newsletter subscription.",
      }
    }

    const data = (await response.json().catch(() => null)) as {
      code?: string
      message?: string
    } | null
    console.error("Brevo API error:", response.status, data)

    if (data?.code === "duplicate_parameter" || data?.message?.includes("already exist")) {
      return {
        success: true,
        message: "You are already subscribed or a confirmation email has already been sent.",
      }
    }

    return {
      success: false,
      error: data?.message || "An error occurred while processing your subscription. Please try again later.",
    }
  } catch (error) {
    console.error("Failed to subscribe via Brevo:", error)
    return {
      success: false,
      error: "Connection error. Please check your network connection and try again.",
    }
  }
}
