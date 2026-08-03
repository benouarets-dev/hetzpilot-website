import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Brand } from "@/components/brand"
import { AppleDark } from "@/components/ui/svgs/appleDark"
import { GithubDark } from "@/components/ui/svgs/githubDark"
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon"
import { APP_STORE_URL, IS_UNPUBLISHED, SITE_BASE_PATH } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Brand />
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href={`${SITE_BASE_PATH}#capabilities`}>Capabilities</Link>
          <Link href={`${SITE_BASE_PATH}/support`}>Support</Link>
          <a href="https://benouarets.dev" target="_blank" rel="noreferrer">
            Developer <ArrowUpRight aria-hidden="true" />
          </a>
          {IS_UNPUBLISHED ? (
            <span className="nav-download nav-download--static">
              <AppleDark className="apple-mark" aria-hidden="true" /> Coming soon
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
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Brand />
          <p>A native iOS control center for your Hetzner Cloud infrastructure.</p>
          {IS_UNPUBLISHED ? (
            <div className="footer-store-button footer-store-button--static">
              <AppleDark className="apple-mark" aria-hidden="true" />
              <span><small>App Store release</small>Coming soon</span>
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
            {IS_UNPUBLISHED ? <span className="footer-coming-soon">Coming soon</span> : <a href={APP_STORE_URL} target="_blank" rel="noreferrer" data-conversion="app-store-download" data-placement="footer-navigation">App Store</a>}
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
