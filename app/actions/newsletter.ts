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
    if (cf?.env && typeof (cf.env as Record<string, unknown>)[key] === "string") {
      return (cf.env as Record<string, string>)[key]
    }
  } catch {
    // Ignore and fallback to process.env
  }
  return process.env[key]
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
      message: "Fast geschafft! Bitte überprüfe dein Postfach, um deine Anmeldung zu bestätigen.",
    }
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return {
      success: false,
      error: "Bitte gib eine gültige E-Mail-Adresse ein.",
    }
  }

  const apiKey = await getEnvVar("BREVO_API_KEY")
  const listId = Number((await getEnvVar("BREVO_LIST_ID")) || 9)
  const templateId = Number((await getEnvVar("BREVO_DOI_TEMPLATE_ID")) || 8)
  const siteUrl = (await getEnvVar("NEXT_PUBLIC_SITE_URL")) || SITE_URL
  const redirectionUrl = `${siteUrl.replace(/\/$/, "")}/newsletter/confirmed`

  if (!apiKey) {
    console.error("BREVO_API_KEY is not set.")
    // In local dev without key, return mock success message to test UI
    if (process.env.NODE_ENV === "development") {
      return {
        success: true,
        message:
          "[DEV MODUS: Kein API-Key hinterlegt] Fast geschafft! Bitte überprüfe dein Postfach, um deine Anmeldung zu bestätigen.",
      }
    }
    return {
      success: false,
      error: "Newsletter-Dienst ist derzeit nicht konfiguriert. Bitte versuche es später noch einmal.",
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
        message: "Fast geschafft! Wir haben dir eine E-Mail mit einem Bestätigungslink gesendet.",
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
        message: "Du bist bereits eingetragen oder die Bestätigungs-E-Mail wurde bereits versendet.",
      }
    }

    return {
      success: false,
      error: data?.message || "Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
    }
  } catch (error) {
    console.error("Failed to subscribe via Brevo:", error)
    return {
      success: false,
      error: "Verbindungsfehler. Bitte überprüfe deine Internetverbindung und versuche es erneut.",
    }
  }
}
