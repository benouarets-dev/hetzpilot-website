import type { Metadata } from "next"
import { ArrowUpRight, Bug, Clock3, ExternalLink, Mail, RefreshCw, ShieldCheck, Wrench } from "lucide-react"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with HetzPilot for iPhone.",
  alternates: { canonical: "/support" },
}

export default function SupportPage() {
  const supportCard = (
    <div className="support-contact">
      <div className="support-contact__copy">
        <span className="support-contact__eyebrow"><Mail /> Direct developer support</span>
        <h2>Tell me what happened.</h2>
        <p>Send the app version, your iOS version, and the steps that led to the issue. Screenshots are welcome when they do not contain sensitive data.</p>
        <a className="support-contact__action" href="mailto:info@benouarets.dev?subject=HetzPilot%20Support">
          Email support <ArrowUpRight />
        </a>
      </div>
      <div className="support-contact__details">
        <div>
          <Clock3 />
          <span>Response target</span>
          <strong>Within 2 business days</strong>
        </div>
        <div>
          <ShieldCheck />
          <span>Keep it safe</span>
          <strong>Never send an API token</strong>
        </div>
      </div>
    </div>
  )

  return (
    <LegalPage
      eyebrow="Support"
      title="Let’s get you back in control."
      intro="For app issues, purchase questions, feedback, or feature requests, contact the developer directly."
      path="/support"
      featured={supportCard}
    >
      <section>
        <h2>Start with these checks</h2>
        <p>A few common issues can be resolved immediately without changing your infrastructure.</p>
        <div className="support-grid">
          <div><Wrench /><h3>Connection issue</h3><p>Confirm that the API token is active, has the permissions required for your action, and belongs to the selected project.</p></div>
          <div><RefreshCw /><h3>Purchase issue</h3><p>Open Settings in HetzPilot and choose Restore purchases. Confirm that the App Store uses the Apple Account that made the purchase.</p></div>
          <div><Bug /><h3>Unexpected behavior</h3><p>Restart the app and note the exact action, resource type, and screen where the issue occurred before contacting support.</p></div>
        </div>
      </section>

      <section>
        <h2>The right place for each question</h2>
        <div className="support-links">
          <a href="https://docs.hetzner.com/" target="_blank" rel="noreferrer">
            <span><small>Infrastructure provider</small><strong>Hetzner documentation and account support</strong></span>
            <ExternalLink />
          </a>
          <a href="https://benouarets.dev" target="_blank" rel="noreferrer">
            <span><small>Independent developer</small><strong>Björn Benouarets · benouarets.dev</strong></span>
            <ArrowUpRight />
          </a>
        </div>
        <p>HetzPilot is an independent app. Hetzner controls account access, provider billing, service availability, quotas, and API behavior.</p>
      </section>
    </LegalPage>
  )
}
