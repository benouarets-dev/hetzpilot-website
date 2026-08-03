import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions governing the use of the HetzPilot iOS app.",
  alternates: { canonical: "/agb" },
}

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms and Conditions"
      title="Clear terms for HetzPilot."
      intro="These Terms and Conditions govern use of the HetzPilot iOS app and its paid features. Statutory consumer rights remain unaffected."
      path="/agb"
    >
      <section>
        <h2>1. Provider and scope</h2>
        <p>
          HetzPilot is provided by Björn Benouarets, Ansbacher Straße 26C, 91710 Gunzenhausen, Germany (“Provider”). These Terms and Conditions apply to agreements between the Provider and users concerning the HetzPilot iOS app.
        </p>
        <p>
          Apple’s applicable terms additionally govern the download, payment process, and use of the Apple App Store. Mandatory law and the Apple terms applicable to the relevant App Store transaction take precedence in the event of a conflict.
        </p>
      </section>

      <section>
        <h2>2. Service</h2>
        <p>
          HetzPilot is an independent iOS app for viewing and managing infrastructure in a connected Hetzner Cloud project. Using an API token supplied by the user, the app connects directly to the Hetzner Cloud API. The current App Store description and the information shown in the app define the specific feature set.
        </p>
        <p>
          HetzPilot is not affiliated with, sponsored by, or endorsed by Hetzner Online GmbH. Hetzner accounts, APIs, prices, and services are supplied and controlled exclusively by Hetzner.
        </p>
      </section>

      <section>
        <h2>3. Formation of the agreement and user account</h2>
        <p>
          The agreement for use of the free app is formed when the app is downloaded and first used. An agreement for paid features is formed when the purchase is confirmed in the Apple App Store. The product, price, duration, and any automatic renewal are displayed before purchase.
        </p>
        <p>
          Use of the app requires the user’s own Hetzner account and a suitable API token. The Provider does not open or administer a Hetzner account on the user’s behalf.
        </p>
      </section>

      <section>
        <h2>4. Prices, subscriptions, and cancellation</h2>
        <p>
          The prices displayed in the Apple App Store apply, including taxes shown there. Depending on the current offer, paid features may be available as a subscription or a one-time purchase. Subscriptions renew for the period displayed during purchase unless cancelled in time through the user’s Apple Account.
        </p>
        <p>
          Subscription management, cancellation, purchase restoration, and refund requests are handled through Apple. This does not limit any statutory withdrawal, warranty, or refund rights.
        </p>
      </section>

      <section>
        <h2>5. User responsibilities</h2>
        <ul>
          <li>Users may connect and manage only projects for which they have appropriate authorization.</li>
          <li>The device, Apple Account, and API tokens must be protected against unauthorized access.</li>
          <li>Token permissions should be limited to what is required, and compromised tokens must be revoked promptly in the Hetzner Cloud Console.</li>
          <li>Critical actions must be reviewed before confirmation, and suitable backups must be maintained for important data and systems.</li>
          <li>The app must not be used unlawfully, abusively, or to interfere with third-party systems.</li>
        </ul>
      </section>

      <section>
        <h2>6. Availability, third-party services, and cost estimates</h2>
        <p>
          Availability may depend on iOS, the Apple App Store, the Hetzner Cloud API, network connections, and other third-party services. The Provider cannot guarantee uninterrupted availability or continued compatibility with every future operating-system or API version.
        </p>
        <p>
          Costs shown in the app are non-binding estimates based on available resource and pricing data. They may not fully account for traffic, snapshots, taxes, discounts, credits, or later price changes and do not replace an invoice from the infrastructure provider.
        </p>
      </section>

      <section>
        <h2>7. Updates and changes</h2>
        <p>
          The Provider may develop the app further, supply security updates, and adapt features to technical or legal changes. Statutory requirements governing updates and modifications to digital products, including Sections 327 et seq. of the German Civil Code (BGB), remain unaffected. Material changes that disadvantage users will only be made where permitted by law.
        </p>
      </section>

      <section>
        <h2>8. Warranty and liability</h2>
        <p>
          Statutory warranty rights apply. The Provider is liable without limitation for intent and gross negligence, injury to life, body, or health, and under mandatory statutory provisions, including the German Product Liability Act.
        </p>
        <p>
          For a slightly negligent breach of an essential contractual obligation, liability is limited to the foreseeable loss typical for this kind of agreement. Essential obligations are those whose performance is necessary for proper execution of the agreement and on whose observance users may regularly rely. Liability for other cases of slight negligence is excluded to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>9. Duration and termination</h2>
        <p>
          The agreement for free use runs indefinitely and can be terminated by deleting the app. A subscription can be cancelled through the Apple Account’s subscription management with effect from the end of the relevant billing period. The right to terminate for good cause remains unaffected.
        </p>
      </section>

      <section>
        <h2>10. Governing law and dispute resolution</h2>
        <p>
          German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. For consumers, this choice of law applies only insofar as it does not deprive them of mandatory protection under the law of their country of habitual residence.
        </p>
        <p>
          The Provider is neither willing nor obliged to participate in dispute-resolution proceedings before a consumer arbitration board. The former EU Online Dispute Resolution platform has been discontinued.
        </p>
        <p>
          Questions about these terms can be sent to <a href="mailto:info@benouarets.dev">info@benouarets.dev</a>.
        </p>
      </section>
    </LegalPage>
  )
}
