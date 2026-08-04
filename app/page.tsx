import type { Metadata } from "next"
import Image from "next/image"
import {
  Activity,
  ArrowRight,
  Check,
  CircleDollarSign,
  Cloud,
  Gauge,
  HardDrive,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react"

import { AppIcon } from "@/components/brand"
import { SiteFooter, SiteHeader } from "@/components/site-shell"
import { StructuredData } from "@/components/structured-data"
import { AppleDark } from "@/components/ui/svgs/appleDark"
import { APP_STORE_URL, IS_APP_AVAILABLE, IS_IN_APP_REVIEW, SITE_BASE_PATH, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Hetzner Cloud iOS App for iPhone | HetzPilot" },
  description:
    "Monitor and manage Hetzner Cloud servers, networks, volumes, firewalls, and costs securely from your iPhone with the native HetzPilot iOS app.",
  keywords: [
    "Hetzner Cloud iOS app",
    "Hetzner Cloud iPhone app",
    "Hetzner server management app",
    "Hetzner mobile app",
    "manage Hetzner Cloud from iPhone",
    "Hetzner Cloud monitoring",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "HetzPilot",
    title: "HetzPilot — Hetzner Cloud management for iPhone",
    description:
      "A native iOS app for monitoring and managing Hetzner Cloud infrastructure securely from your iPhone.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "HetzPilot — Hetzner Cloud management for iPhone" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HetzPilot — Hetzner Cloud management for iPhone",
    description:
      "Monitor servers, manage resources, and review costs from a focused native iOS app.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const resourceGroups = [
  { label: "Compute", icon: Server, items: ["Servers", "Load balancers"] },
  { label: "Network", icon: Network, items: ["Networks", "Firewalls", "Primary IPs", "Floating IPs"] },
  { label: "Storage", icon: HardDrive, items: ["Volumes", "Storage Boxes"] },
  { label: "Access", icon: KeyRound, items: ["SSH keys", "Certificates"] },
]

const appScreens = [
  {
    src: "/mockup-resources.png",
    width: 1317,
    height: 2716,
    mockup: true,
    title: "Every resource, organized",
    caption: "Move through compute, network, storage, DNS, and security from one native hierarchy.",
  },
  {
    src: "/mockup-servers.png",
    width: 1317,
    height: 2716,
    mockup: true,
    title: "Status at a glance",
    caption: "See which machines are running and open the one that needs your attention.",
  },
  {
    src: "/mockup-create-server.png",
    width: 1317,
    height: 2716,
    mockup: true,
    title: "Create with context",
    caption: "Configure location, server type, operating system, access, backups, and networking before launch.",
  },
]

const faqs = [
  {
    question: "What is HetzPilot?",
    answer:
      "HetzPilot is an independent native iOS app for monitoring and managing Hetzner Cloud infrastructure from an iPhone. It brings servers, networks, volumes, firewalls, IPs, and cost estimates into one focused interface.",
  },
  {
    question: "Is HetzPilot an official Hetzner app?",
    answer:
      "No. HetzPilot is independently designed and developed by Björn Benouarets and is not affiliated with, sponsored by, or endorsed by Hetzner Online GmbH.",
  },
  {
    question: "Where is my Hetzner API token stored?",
    answer:
      "The API token is stored in the iOS Keychain on your device. HetzPilot connects directly to the Hetzner Cloud API and does not route the token through a HetzPilot server.",
  },
  {
    question: "Which Hetzner Cloud resources can I manage?",
    answer:
      "HetzPilot covers servers, networks, volumes, firewalls, load balancers, primary and floating IPs, SSH keys, certificates, and Storage Boxes, with the exact feature set documented for the current release.",
  },
  {
    question: "Does HetzPilot work on iPhone?",
    answer:
      "Yes. HetzPilot is built as a native SwiftUI app for iPhone and follows familiar iOS navigation, security, and interaction patterns.",
  },
]

const releaseCopy = IS_IN_APP_REVIEW
  ? {
      eyebrow: "Now in App Review",
      action: "In App Review",
      status: "In App Review",
      statusDetail: "Apple is reviewing the release",
      sectionLabel: "Almost there",
      description: "Apple is reviewing HetzPilot. The App Store release is close.",
      dotClass: "review-dot",
    }
  : IS_APP_AVAILABLE
    ? {
        eyebrow: "Available now on the App Store",
        action: "Download on the App Store",
        status: "Available now",
        statusDetail: "Download for iPhone",
        sectionLabel: "Available now",
        description: "HetzPilot is available now on the App Store for iPhone.",
        dotClass: "live-dot",
      }
    : {
        eyebrow: "Coming soon to the App Store",
        action: "Coming soon",
        status: "Coming soon",
        statusDetail: "App Store release in preparation",
        sectionLabel: "Coming soon",
        description: "HetzPilot is coming soon to the App Store for iPhone.",
        dotClass: "pending-dot",
      }

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": `${SITE_URL}#app`,
      name: "HetzPilot",
      description:
        "A native iOS app for monitoring and managing Hetzner Cloud servers and infrastructure securely from an iPhone.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "iOS",
      url: SITE_URL,
      ...(IS_APP_AVAILABLE && { downloadUrl: APP_STORE_URL }),
      image: `${SITE_URL}/ios-logo.png`,
      screenshot: [
        `${SITE_URL}/mockup-overview.png`,
        `${SITE_URL}/mockup-resources.png`,
        `${SITE_URL}/mockup-servers.png`,
        `${SITE_URL}/mockup-create-server.png`,
      ],
      featureList: [
        "Hetzner Cloud server monitoring and management",
        "Networks, volumes, firewalls, load balancers, and IP management",
        "Monthly infrastructure cost estimates",
        "API credentials stored in the iOS Keychain",
        "Direct encrypted connection to the Hetzner Cloud API",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: IS_APP_AVAILABLE ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
        url: IS_APP_AVAILABLE ? APP_STORE_URL : SITE_URL,
      },
      author: {
        "@type": "Person",
        "@id": "https://benouarets.dev#bjorn-benouarets",
        name: "Björn Benouarets",
        url: "https://benouarets.dev",
        sameAs: ["https://github.com/bbenouarets", "https://www.instagram.com/bbenouarets/"],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: "Hetzner Cloud iOS App for iPhone | HetzPilot",
      description:
        "Monitor and manage Hetzner Cloud infrastructure securely from your iPhone with the native HetzPilot iOS app.",
      inLanguage: "en",
      dateModified: "2026-08-03",
      mainEntity: { "@id": `${SITE_URL}#app` },
      author: { "@id": "https://benouarets.dev#bjorn-benouarets" },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

function DashboardPreview() {
  return (
    <div className="phone-stage" aria-label="HetzPilot overview running on iPhone">
      <div className="orbit orbit--one" />
      <div className="orbit orbit--two" />
      <div className="hero-product-mockup">
        <Image
          src="/mockup-overview.png"
          alt="HetzPilot iPhone overview showing healthy Hetzner Cloud infrastructure"
          width={1935}
          height={5436}
          sizes="(max-width: 680px) 250px, 310px"
          priority
        />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero__content">
            <div className="eyebrow"><span /> {releaseCopy.eyebrow}</div>
            <h1>Hetzner Cloud.<br /><em>Within reach.</em></h1>
            <p className="hero__lede">
              HetzPilot is a native Hetzner Cloud iOS app for iPhone—built to monitor servers, manage infrastructure, and act securely without opening a laptop.
            </p>
            <div className="hero__actions">
              {!IS_APP_AVAILABLE ? (
                <span className="primary-button primary-button--static">
                  <AppleDark className="apple-mark" aria-hidden="true" /> {releaseCopy.action}
                </span>
              ) : (
                <a className="primary-button" href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="hero">
                  <AppleDark className="apple-mark" aria-hidden="true" /> Download on the App Store
                </a>
              )}
              <a className="text-link" href="#capabilities">
                Explore the app <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero__trust">
              <span><Check /> Native SwiftUI</span>
              <span><Check /> Credentials in Keychain</span>
              <span><Check /> No advertising</span>
            </div>
          </div>
          <DashboardPreview />
        </section>

        <section className="signal-strip" aria-label="Product summary">
          <div className="signal-strip__intro">
            <span>App status</span>
            <p>One clear view from server health to estimated cost.</p>
          </div>
          <div className="signal-strip__facts">
            <div>
              <span className="signal-strip__icon"><span className={releaseCopy.dotClass} /></span>
              <span><strong>{releaseCopy.status}</strong><small>{releaseCopy.statusDetail}</small></span>
            </div>
            <div>
              <span className="signal-strip__icon"><Zap /></span>
              <span><strong>Native on iOS</strong><small>Built with SwiftUI</small></span>
            </div>
            <div>
              <span className="signal-strip__icon"><Cloud /></span>
              <span><strong>Direct connection</strong><small>Hetzner Cloud API</small></span>
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="section-heading">
            <div>
              <span className="section-label">Built for real operations</span>
              <h2>Less dashboard.<br />More direction.</h2>
            </div>
            <p>
              The essential signals are close at hand. Dense infrastructure detail stays readable; destructive actions stay deliberate.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-card--wide">
              <div className="feature-copy">
                <span className="feature-icon"><Gauge /></span>
                <h3>See the state of things.</h3>
                <p>A composed overview of active servers, infrastructure health, current activity, and estimated monthly cost.</p>
              </div>
              <div className="signal-board" aria-hidden="true">
                <div className="signal-board__top"><span>System radar</span><span className="status-pill">Steady</span></div>
                <div className="signal-chart">
                  <svg viewBox="0 0 560 180" role="img" aria-label="Stylized server activity graph">
                    <defs>
                      <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#d50f2e" stopOpacity=".28" />
                        <stop offset="1" stopColor="#d50f2e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="chart-area" d="M0 143 C58 137 62 96 116 111 C169 126 188 83 236 91 C295 101 306 43 361 61 C411 78 440 30 497 47 C525 56 541 42 560 27 L560 180 L0 180Z" />
                    <path className="chart-line" d="M0 143 C58 137 62 96 116 111 C169 126 188 83 236 91 C295 101 306 43 361 61 C411 78 440 30 497 47 C525 56 541 42 560 27" />
                  </svg>
                </div>
                <div className="signal-board__stats"><span><strong>4</strong> active</span><span><strong>0</strong> warnings</span><span><strong>12 ms</strong> API</span></div>
              </div>
            </article>

            <article className="feature-card">
              <span className="feature-icon feature-icon--blue"><Zap /></span>
              <h3>Act from anywhere.</h3>
              <p>Power controls, rescue mode, backups, remote console sessions, and resource creation—with confirmations where they matter.</p>
              <div className="action-stack" aria-hidden="true">
                <span><span><Activity /> Reboot server</span><small>Ready</small></span>
                <span><span><Terminal /> Open console</span><small>Secure</small></span>
                <span><span><ShieldCheck /> Add firewall rule</span><small>Review</small></span>
              </div>
            </article>

            <article className="feature-card feature-card--dark">
              <span className="feature-icon"><CircleDollarSign /></span>
              <h3>Know what it costs.</h3>
              <p>See a clear monthly estimate derived from current Hetzner list prices and your active resources.</p>
              <div className="cost-figure" aria-hidden="true">
                <small>Estimated this month</small>
                <strong>€ 18.42</strong>
                <span><i style={{ width: "52%" }} /> Servers</span>
                <span><i style={{ width: "28%" }} /> Volumes</span>
                <span><i style={{ width: "14%" }} /> Backups</span>
              </div>
            </article>
          </div>
        </section>

        <section className="screens-section" aria-labelledby="screens-title">
          <div className="screens-section__heading">
            <span className="section-label">The real app</span>
            <h2 id="screens-title">From overview<br />to action.</h2>
            <p>Built in SwiftUI for the conventions you already know on iPhone. No web dashboard squeezed into a small screen.</p>
          </div>
          <div className="screens-track">
            {appScreens.map((screen, index) => (
              <figure className={`screenshot-card screenshot-card--${index + 1}`} key={screen.src}>
                <div className={`screenshot-card__device${screen.mockup ? " screenshot-card__device--mockup" : ""}`}>
                  <Image
                    src={screen.src}
                    alt={`${screen.title} in HetzPilot for iPhone`}
                    width={screen.width}
                    height={screen.height}
                    sizes="(max-width: 680px) 72vw, (max-width: 1100px) 35vw, 260px"
                  />
                </div>
                <figcaption>
                  <strong>{screen.title}</strong>
                  <span>{screen.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section direct-section">
          <div className="direct-visual" aria-hidden="true">
            <div className="connection-line" />
            <div className="connection-node connection-node--phone"><AppIcon compact /><span>Your iPhone</span></div>
            <div className="connection-lock"><KeyRound /></div>
            <div className="connection-node connection-node--cloud"><Cloud /><span>Hetzner API</span></div>
          </div>
          <div className="direct-copy">
            <span className="section-label">Direct by design</span>
            <h2>Your token is yours.</h2>
            <p>
              HetzPilot connects straight to the Hetzner Cloud API. API credentials are stored in the iOS Keychain and are never sent to a HetzPilot server.
            </p>
            <ul>
              <li><ShieldCheck /> TLS certificate validation stays enabled</li>
              <li><KeyRound /> Credentials remain in the iOS Keychain</li>
              <li><Terminal /> Technical data is shown where you need it</li>
            </ul>
            <a className="text-link" href={`${SITE_BASE_PATH}/privacy`}>Read the privacy policy <ArrowRight /></a>
          </div>
        </section>

        <section className="section resources-section surface-section">
          <div className="resources-copy">
            <span className="section-label">The whole project</span>
            <h2>Infrastructure, connected.</h2>
            <p>Move from a server to its network, volumes, firewall, IPs, and load balancers without losing context.</p>
          </div>
          <div className="resource-map" aria-label="Supported Hetzner Cloud resources">
            <div className="resource-map__header">
              <span>Project map</span>
              <strong>10 resource types</strong>
            </div>
            <div className="resource-map__groups">
              {resourceGroups.map((group) => {
                const Icon = group.icon
                return (
                  <div className="resource-group" key={group.label}>
                    <div className="resource-group__title"><Icon /><strong>{group.label}</strong></div>
                    <ul>
                      {group.items.map((item) => (
                        <li className={item === "Servers" ? "resource-group__primary" : undefined} key={item}>
                          <span />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-section__heading">
            <span className="section-label">Frequently asked</span>
            <h2 id="faq-title">HetzPilot,<br />explained.</h2>
            <p>Clear answers about the independent Hetzner Cloud iPhone app, its security model, and supported infrastructure.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="availability" id="availability">
          <div className="availability__mark" aria-hidden="true">
            <Image src="/pilot-logo.png" alt="" width={78} height={78} sizes="78px" />
          </div>
          <span className="section-label">{releaseCopy.sectionLabel}</span>
          <h2>Cloud operations<br />without the noise.</h2>
          <p>{releaseCopy.description}</p>
          <div className="availability__actions">
            {!IS_APP_AVAILABLE ? (
              <span className="primary-button primary-button--static">
                <AppleDark className="apple-mark" aria-hidden="true" /> {releaseCopy.action}
              </span>
            ) : (
              <a className="primary-button" href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="final-cta">
                <AppleDark className="apple-mark" aria-hidden="true" /> Download now
              </a>
            )}
            <a className="secondary-button" href={`${SITE_BASE_PATH}/support`}>
              Get support <ArrowRight />
            </a>
          </div>
          <p className="availability__developer">
            Designed and developed by <a href="https://benouarets.dev">Björn Benouarets</a>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
