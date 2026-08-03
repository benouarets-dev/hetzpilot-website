# HetzPilot website

Product and support website for the HetzPilot iOS app, deployed as a Next.js Worker with OpenNext on Cloudflare.

## Local development

```bash
pnpm install
pnpm dev
```

The release state is controlled at build time:

- `RELEASE=unpublished` renders the Coming Soon state and disables App Store links.
- If `RELEASE` is unset (or has any other value), the website renders the published state.

```bash
RELEASE=unpublished pnpm build
pnpm build
```

Set `NEXT_PUBLIC_APP_STORE_URL` to override the App Store destination.

## Cloudflare

The Worker and its custom domain `hetzpilot.benouarets.dev` are configured in `wrangler.jsonc`.

```bash
pnpm preview
pnpm deploy
pnpm upload
pnpm cf-typegen
```

For a Coming Soon deployment through Cloudflare Workers Builds, add `RELEASE=unpublished` as a build variable. Leave it unset for the productive website.
