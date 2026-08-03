# HetzPilot SEO and SEA playbook

Updated: August 3, 2026

## Search positioning

Primary intent: people looking for a native iPhone app to monitor and manage Hetzner Cloud infrastructure.

- Primary keyword: `Hetzner Cloud iOS app`
- Secondary keywords: `Hetzner Cloud iPhone app`, `Hetzner server management app`, `Hetzner mobile app`, `manage Hetzner Cloud from iPhone`
- Security long tails: `Hetzner iOS app Keychain`, `secure Hetzner Cloud mobile app`, `Hetzner API token iPhone`
- Feature long tails: `Hetzner server monitoring iPhone`, `Hetzner Cloud cost app`, `Hetzner firewall iOS app`

Avoid positioning HetzPilot as an official Hetzner product. Use “independent” or “unofficial” wherever affiliation could be ambiguous.

## Apple Ads campaign structure

Use separate campaigns for Germany and any later priority market. Start with four search-results campaigns, following Apple’s recommended structure.

### 1. Brand — exact match

- `hetzpilot`
- `hetz pilot`
- `hetzpilot app`

### 2. Category — exact match

- `hetzner cloud`
- `hetzner app`
- `hetzner cloud app`
- `server management`
- `cloud server manager`
- `server monitoring`
- `cloud monitoring`
- `server admin`
- `devops tools`
- `infrastructure management`

### 3. Competitor — exact match

Build this campaign only after the brand and category campaigns have stable conversion data. Keep competitor names out of ad copy and App Store metadata unless legally permitted.

### 4. Discovery

- Broad-match ad group: broad versions of the best brand and category terms, Search Match off.
- Search Match ad group: no keywords, Search Match on.
- Add all active exact-match brand, category, and competitor terms as exact negative keywords in discovery.
- Move converting search terms into the appropriate exact-match campaign every week.

Initial negative-keyword candidates: `android`, `windows`, `linux desktop`, `web hosting`, `hetzner login`, `hetzner jobs`, `customer service`, `support phone`, `dedicated server app`. Validate against actual search-term data before broad exclusions.

Create App Store custom product pages for three intents:

1. Server monitoring: lead with overview, status, and metrics screenshots.
2. Infrastructure management: lead with resources, server actions, and creation.
3. Security and privacy: lead with Keychain storage and direct API connection.

## Google App campaign assets

Google App campaigns require the app to be published in the Apple App Store. Replace the current fallback search URL with the final App Store product URL before launch.

Headlines, each usable independently and within the 30-character limit:

- Manage Hetzner on iPhone
- Hetzner Cloud, Anywhere
- Native iOS Cloud Control
- Servers. Clear. Secure.
- Your Cloud in Your Pocket

Descriptions, each within the 90-character limit:

- Monitor servers and manage Hetzner Cloud resources securely from your iPhone.
- API tokens stay in the iOS Keychain while HetzPilot connects directly to Hetzner.
- See health, infrastructure, actions, and cost estimates in one native SwiftUI app.
- Manage servers, networks, volumes, firewalls, IPs, and load balancers from iOS.

Asset groups:

- Monitoring: dashboard, active servers, metrics, health state.
- Management: resource list, server actions, create-server flow.
- Security: Keychain, direct API connection, no advertising.
- Cost clarity: monthly estimates and resource breakdown.

Supply 1:1, 1.91:1, and 4:5 images without text overlays. Add at least one 10-second-or-longer product video when available.

## Measurement and privacy gate

All App Store CTAs include `data-conversion="app-store-download"` and a `data-placement` value so a consent-aware analytics layer can measure each placement later.

Do not activate Google Ads, Google Analytics, Meta, or third-party attribution scripts until:

1. the exact provider and IDs are known,
2. consent management is implemented for Germany/EU where required,
3. the Privacy Policy names the provider, purposes, data, retention, recipients, and transfers,
4. consent mode defaults to denied before user choice, and
5. in-app attribution is configured for installs and meaningful post-install events.

Recommended conversion hierarchy:

1. Primary: first successful Hetzner connection.
2. Secondary: App Store install.
3. Quality: first resource opened or first successful requested action.
4. Revenue: subscription or lifetime purchase.

## Launch checklist

- Set `NEXT_PUBLIC_APP_STORE_URL` to the final App Store product URL.
- Validate `/hetzpilot` in Google Rich Results Test and Schema.org Validator.
- Submit `/hetzpilot/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Request indexing for `/hetzpilot`, `/hetzpilot/support`, `/hetzpilot/privacy`, `/hetzpilot/agb`, and `/hetzpilot/impressum`.
- Verify the 1200 × 630 Open Graph image on LinkedIn, Facebook, and X card validators.
- Connect Apple Ads attribution or a consent-compliant attribution provider before optimizing to installs.
- Review Apple Ads search terms weekly and SEO queries monthly.

Official references:

- Google software-app structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app
- Google App campaign overview: https://support.google.com/google-ads/answer/6247380
- Google App campaign assets: https://support.google.com/google-ads/answer/6357595
- Apple Ads campaign structure: https://ads.apple.com/app-store/best-practices/campaign-structure
- Apple Ads keywords: https://ads.apple.com/app-store/best-practices/keywords
- Apple Ads ad variations: https://ads.apple.com/app-store/best-practices/ad-variations
