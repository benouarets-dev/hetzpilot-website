import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for the HetzPilot website and the HetzPilot iOS app.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your infrastructure stays under your control."
      intro="This policy explains what personal data is processed by the HetzPilot website and iOS app, for which purposes, and on which legal basis."
      path="/privacy"
    >
      <section>
        <h2>1. Controller</h2>
        <address>
          Björn Benouarets<br />
          Ansbacher Straße 26C<br />
          91710 Gunzenhausen<br />
          Germany
        </address>
        <p>
          Email: <a href="mailto:info@benouarets.dev">info@benouarets.dev</a><br />
          Phone: <a href="tel:+4915292604752">+49 152 92604752</a>
        </p>
      </section>

      <section>
        <h2>2. Scope</h2>
        <p>
          This Privacy Policy applies to the HetzPilot website and the HetzPilot iOS app. Third-party websites linked from this site are governed by their respective privacy notices.
        </p>
      </section>

      <section>
        <h2>3. Visiting this website</h2>
        <p>
          When you visit the website, your browser transmits technically necessary data to the hosting provider. This may include your IP address, date and time, requested file, referrer URL, browser, operating system, and amount of data transferred. This processing is necessary to deliver the website, maintain its security, and diagnose errors.
        </p>
        <p>
          The legal basis is Article 6(1)(f) GDPR. The legitimate interest is the secure and reliable operation of the website. Recipients are hosting and IT service providers acting as processors where required. Log data is deleted once it is no longer needed for operation and security, unless a legal retention duty or a specific security investigation requires longer storage.
        </p>
        <h3>Privacy-preserving reach measurement with Umami</h3>
        <p>
          This website uses a self-hosted Umami instance available at <a href="https://analytics.benouarets.cloud" target="_blank" rel="noreferrer">analytics.benouarets.cloud</a> to understand aggregated website usage and improve the content and user experience. Umami does not set cookies, use advertising identifiers, create cross-site profiles, or store directly identifying information. The tracker is restricted to this production domain, respects your browser’s Do Not Track setting, and excludes query parameters and URL fragments from collection.
        </p>
        <p>
          Processed information may include the visited page, page title, referrer, browser, operating system, device type, screen size, language, approximate country, and time of access. The transmitting IP address may be used transiently to derive an anonymized session and approximate location but is not stored by Umami. No individual user profile is created, and the data is not used for advertising.
        </p>
        <p>
          The legal basis is Article 6(1)(f) GDPR. The legitimate interests are measuring the reach of this website, identifying technical or content-related problems, and improving the website. Analytics data is retained only for as long as it is required for these purposes and is then deleted or aggregated. Because the configured tracker does not place or read cookies or comparable persistent identifiers on your device, no cookie consent banner is used for this measurement. You can prevent measurement by enabling Do Not Track in your browser.
        </p>
      </section>

      <section>
        <h2>4. Hetzner connection in the app</h2>
        <p>
          You provide a Hetzner Cloud API token so the app can retrieve information and perform actions you request. The token is stored in the iOS Keychain on your device. HetzPilot communicates directly with the Hetzner Cloud API; your token and infrastructure data are not routed through or stored on a server operated by the app Provider.
        </p>
        <p>
          Processed data may include project and resource names, status information, metrics, actions, configuration, and pricing data. Selected connection settings and display names may be stored locally on your device. The legal basis is Article 6(1)(b) GDPR where processing is necessary to provide the app functions you request.
        </p>
        <p>
          The recipient of these API requests is <a href="https://www.hetzner.com/legal/privacy-policy/" target="_blank" rel="noreferrer">Hetzner Online GmbH</a>. Hetzner is independently responsible for the Hetzner account and its processing under its own terms.
        </p>
      </section>

      <section>
        <h2>5. In-app purchases</h2>
        <p>
          Purchases are processed by Apple. HetzPilot uses RevenueCat to display products, unlock paid features, restore purchases, and manage access. RevenueCat may process an app-specific identifier, product, purchase, and entitlement information, app or device information, and technical diagnostic data. The Provider does not receive complete payment-card details.
        </p>
        <p>
          The legal basis is Article 6(1)(b) GDPR for performance of the agreement and Article 6(1)(c) GDPR where billing data must be processed to comply with legal obligations. Recipients are <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple</a> and <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">RevenueCat</a>. These providers may process data in third countries and rely on the applicable statutory transfer mechanisms and safeguards described in their privacy notices.
        </p>
      </section>

      <section>
        <h2>6. Support and contact</h2>
        <p>
          If you contact us by email, we process your sender address, message, and any information you provide voluntarily to handle your request. The legal basis is Article 6(1)(b) GDPR for pre-contractual or contractual matters and otherwise Article 6(1)(f) GDPR, based on our legitimate interest in responding to inquiries and documenting support cases.
        </p>
        <p>
          Messages are deleted once the request has been resolved, unless statutory retention duties or legitimate documentation interests require longer storage. Never send API tokens, passwords, or other secrets by email.
        </p>
      </section>

      <section>
        <h2>7. Retention and deletion</h2>
        <p>
          Credentials and settings stored locally remain on your device until you remove the connection, delete the app, or reset the relevant device data. The Provider does not permanently store infrastructure data retrieved from Hetzner. Apple and RevenueCat retain purchase data in accordance with their own legal obligations and retention periods.
        </p>
      </section>

      <section>
        <h2>8. Your rights</h2>
        <p>Subject to the statutory requirements, you have the right to:</p>
        <ul>
          <li>access your personal data (Article 15 GDPR),</li>
          <li>rectify inaccurate data (Article 16 GDPR),</li>
          <li>erasure (Article 17 GDPR),</li>
          <li>restriction of processing (Article 18 GDPR),</li>
          <li>data portability (Article 20 GDPR), and</li>
          <li>object to processing based on Article 6(1)(e) or (f) GDPR (Article 21 GDPR).</li>
        </ul>
        <p>
          You may withdraw consent at any time with future effect. To exercise your rights, email <a href="mailto:info@benouarets.dev">info@benouarets.dev</a>. You can also revoke an API token in the Hetzner Cloud Console at any time and manage subscriptions through your Apple Account.
        </p>
      </section>

      <section>
        <h2>9. Right to lodge a complaint</h2>
        <p>
          You have the right to lodge a complaint with a data-protection supervisory authority. For private-sector providers established in Bavaria, the competent authority is in particular the Bavarian State Office for Data Protection Supervision (BayLDA), Promenade 18, 91522 Ansbach, Germany. Information and its complaint form are available at <a href="https://www.lda.bayern.de/" target="_blank" rel="noreferrer">lda.bayern.de</a>.
        </p>
      </section>

      <section>
        <h2>10. Security and automated decisions</h2>
        <p>
          HetzPilot uses platform security features including the iOS Keychain and encrypted TLS connections. No method of storage or transmission is completely risk-free. Use only the token permissions you need and protect your device against unauthorized access.
        </p>
        <p>
          There is no automated decision-making, including profiling, within the meaning of Article 22 GDPR. This policy will be updated if the app’s features, providers, or legal requirements change.
        </p>
      </section>
    </LegalPage>
  )
}
