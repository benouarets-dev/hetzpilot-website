"use client"

import { useActionState } from "react"
import Link from "next/link"
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react"

import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter"
import { SITE_BASE_PATH } from "@/lib/site"

const initialState: NewsletterState = {}

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState)

  return (
    <div className="newsletter-card">
      <div className="newsletter-card__header">
        <span className="section-label">Newsletter</span>
        <h3>Stay updated on HetzPilot</h3>
        <p>
          Get notified about new features, release updates, and tips for managing your Hetzner Cloud infrastructure on iOS.
        </p>
      </div>

      {state.success ? (
        <div className="newsletter-state newsletter-state--success" role="status" aria-live="polite">
          <CheckCircle2 className="newsletter-state__icon" aria-hidden="true" />
          <div className="newsletter-state__content">
            <strong>Check your inbox!</strong>
            <p>{state.message || "We’ve sent you a confirmation link. Please check your email to confirm your newsletter subscription."}</p>
          </div>
        </div>
      ) : (
        <form action={formAction} className="newsletter-form" noValidate>
          {/* Honeypot field for bot protection */}
          <div className="hp-wrapper" aria-hidden="true" style={{ display: "none" }}>
            <label htmlFor="hp_field">Leave this empty</label>
            <input type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="newsletter-input-group">
            <input
              type="email"
              name="email"
              id="newsletter-email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              aria-label="Email address for newsletter"
              className="newsletter-input"
            />
            <button
              type="submit"
              disabled={isPending}
              className="primary-button newsletter-submit"
              aria-label="Subscribe to newsletter"
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" aria-hidden="true" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="newsletter-send-icon" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {state.error ? (
            <div className="newsletter-state newsletter-state--error" role="alert" aria-live="assertive">
              <AlertCircle className="newsletter-state__icon" aria-hidden="true" />
              <span>{state.error}</span>
            </div>
          ) : null}

          <p className="newsletter-privacy-note">
            Confirmation required. Unsubscribe anytime. View our{" "}
            <Link href={`${SITE_BASE_PATH}/privacy`}>Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  )
}
