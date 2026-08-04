import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Brand } from "@/components/brand"
import { AppleDark } from "@/components/ui/svgs/appleDark"
import { GithubDark } from "@/components/ui/svgs/githubDark"
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon"
import { APP_STORE_URL, IS_APP_AVAILABLE, IS_IN_APP_REVIEW, SITE_BASE_PATH } from "@/lib/site"

export function SiteHeader() {
  const pendingLabel = IS_IN_APP_REVIEW ? "In App Review" : "Coming soon"

  return (
    <header className="site-header">
      {IS_IN_APP_REVIEW ? (
        <div className="release-banner release-banner--review" role="status">
          <span className="release-banner__dot" aria-hidden="true" />
          <strong>Apple is reviewing HetzPilot.</strong>
          <span>It won’t be long now.</span>
        </div>
      ) : IS_APP_AVAILABLE ? (
        <a className="release-banner release-banner--available" href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="release-banner">
          <span className="release-banner__dot" aria-hidden="true" />
          <strong>HetzPilot is now available.</strong>
          <span>Download it on the App Store.</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
      <div className="site-header__inner">
        <Brand />
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href={`${SITE_BASE_PATH}#capabilities`}>Capabilities</Link>
          <Link href={`${SITE_BASE_PATH}/support`}>Support</Link>
          <a href="https://benouarets.dev" target="_blank" rel="noreferrer">
            Developer <ArrowUpRight aria-hidden="true" />
          </a>
          {!IS_APP_AVAILABLE ? (
            <span className="nav-download nav-download--static">
              <AppleDark className="apple-mark" aria-hidden="true" /> {pendingLabel}
            </span>
          ) : (
            <a className="nav-download" href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="header">
              <AppleDark className="apple-mark" aria-hidden="true" /> Download
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const pendingLabel = IS_IN_APP_REVIEW ? "In App Review" : "Coming soon"

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Brand />
          <p>A native iOS control center for your Hetzner Cloud infrastructure.</p>
          {!IS_APP_AVAILABLE ? (
            <div className="footer-store-button footer-store-button--static">
              <AppleDark className="apple-mark" aria-hidden="true" />
              <span><small>App Store release</small>{pendingLabel}</span>
            </div>
          ) : (
            <a className="footer-store-button" href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="footer">
              <AppleDark className="apple-mark" aria-hidden="true" />
              <span><small>Download on the</small>App Store</span>
            </a>
          )}
        </div>
        <div className="site-footer__column">
          <strong>Product</strong>
          <nav aria-label="Product">
            <Link href={`${SITE_BASE_PATH}#capabilities`}>Capabilities</Link>
            {!IS_APP_AVAILABLE ? <span className="footer-coming-soon">{pendingLabel}</span> : <a href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="footer-navigation">App Store</a>}
            <Link href={`${SITE_BASE_PATH}/support`}>Support</Link>
          </nav>
        </div>
        <div className="site-footer__column">
          <strong>Legal</strong>
          <nav aria-label="Legal">
            <Link href={`${SITE_BASE_PATH}/impressum`}>Imprint</Link>
            <Link href={`${SITE_BASE_PATH}/privacy`}>Privacy</Link>
            <Link href={`${SITE_BASE_PATH}/agb`}>Terms</Link>
            <a href="mailto:info@benouarets.dev">Contact</a>
          </nav>
        </div>
        <div className="site-footer__column site-footer__developer">
          <strong>Developer</strong>
          <p>Designed and developed independently by Björn Benouarets.</p>
          <a href="https://benouarets.dev" target="_blank" rel="noreferrer">benouarets.dev <ArrowUpRight /></a>
        </div>
      </div>
      <div className="site-footer__fineprint">
        <span>© 2026 Björn Benouarets</span>
        <div className="site-footer__socials" aria-label="Social media">
          <a href="https://www.instagram.com/bbenouarets/" target="_blank" rel="noreferrer" aria-label="Björn Benouarets on Instagram">
            <InstagramIcon aria-hidden="true" />
          </a>
          <a href="https://github.com/bbenouarets" target="_blank" rel="noreferrer" aria-label="Björn Benouarets on GitHub">
            <GithubDark aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
