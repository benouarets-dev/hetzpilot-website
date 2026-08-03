import type { Metadata } from "next"

import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Imprint",
  description: "Provider identification and contact details for HetzPilot.",
  alternates: { canonical: "/impressum" },
}

export default function ImprintPage() {
  return (
    <LegalPage
      eyebrow="Imprint"
      title="Provider identification."
      intro="Legal information about the provider of the HetzPilot website and the HetzPilot iOS app."
      path="/impressum"
    >
      <section>
        <h2>Information pursuant to Section 5 DDG</h2>
        <address>
          Björn Benouarets<br />
          Ansbacher Straße 26C<br />
          91710 Gunzenhausen<br />
          Germany (Bavaria)
        </address>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Phone: <a href="tel:+4915292604752">+49 152 92604752</a><br />
          Email: <a href="mailto:info@benouarets.dev">info@benouarets.dev</a><br />
          Developer website: <a href="https://benouarets.dev">benouarets.dev</a>
        </p>
      </section>

      <section>
        <h2>VAT information</h2>
        <p>
          In accordance with Section 19 UStG, no value-added tax is charged or shown due to small-business status (Kleinunternehmer).
        </p>
      </section>

      <section>
        <h2>Editorial responsibility</h2>
        <address>
          Björn Benouarets<br />
          Ansbacher Straße 26C<br />
          91710 Gunzenhausen<br />
          Germany
        </address>
      </section>

      <section>
        <h2>Consumer dispute resolution</h2>
        <p>
          The provider is neither willing nor obliged to participate in dispute-resolution proceedings before a consumer arbitration board. The former EU Online Dispute Resolution platform was discontinued on July 20, 2025.
        </p>
      </section>

      <section>
        <h2>Liability for content and links</h2>
        <p>
          As a service provider, we are responsible for our own content on these pages under the general laws. External websites linked from this site remain the responsibility of their respective operators. Continuous monitoring of external content is not reasonable without specific evidence of an infringement. If we become aware of an infringement, we will remove the relevant link without delay.
        </p>
      </section>

      <section>
        <h2>Copyright</h2>
        <p>
          Content and works created by the provider on this website are protected by German copyright law. Reproduction, adaptation, distribution, or other use outside the statutory limits requires the prior consent of the relevant rights holder.
        </p>
      </section>
    </LegalPage>
  )
}
