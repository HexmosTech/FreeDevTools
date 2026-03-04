---
name: AdSense pro users no load
overview: AdSense script and push() currently run for everyone because they are in static HTML; pro users only get the ad container hidden with CSS. That causes the "No slot size for availableWidth=0" error and policy risk. Fix by loading the script only from base_layout (never in static HTML) and gating every push() on pro status so pro users never load or execute ad code.
todos: []
isProject: false
---

# Stop AdSense from loading/executing for pro users

## Why you still see AdSense as pro

- **Pro is enforced only by hiding the container**: Critical CSS in [base_layout.templ](components/layouts/base_layout.templ) hides `[data-hide-when-pro="true"]` when `html[data-pro="1"]`. The ad **markup and scripts remain in the DOM** and still run.
- **Script is loaded from the banner and index too**: [base_layout.templ](components/layouts/base_layout.templ) conditionally injects `adsbygoogle.js` only when `!getProStatusCookie()`, but:
  - [adsense_banner.templ](components/banner/adsense_banner.templ) has its own **static** `<script async src="...adsbygoogle.js">` inside the GAS-3 (laptop) block (lines 59–60).
  - [index.templ](components/pages/index.templ) has another static load for the gas-5 card (lines 289–290).
- Those static script tags are in the HTML for every user, so the browser loads and runs `adsbygoogle.js` regardless of the cookie. The base_layout logic that removes the script runs on DOMContentLoaded (or after), so it can run after the async script has already executed.
- **Unconditional push()**: Both the banner (GAS-3 immediate push and GAS-4-phone via IntersectionObserver) and the index gas-5 block call `(adsbygoogle = window.adsbygoogle || []).push({});` with no pro check. When the container is hidden, the slot has **availableWidth=0** → `TagError: No slot size for availableWidth=0`, and ad code runs for users who don’t see ads (policy risk).

So yes: we are effectively “just hiding with CSS” while the script and slot registration still run.

## Required changes

### 1. Single source for `adsbygoogle.js` (no static script tags)

- **Remove** the static `<script async src="...adsbygoogle.js">` from:
  - [components/banner/adsense_banner.templ](components/banner/adsense_banner.templ) (GAS-3 block, lines 59–60).
  - [components/pages/index.templ](components/pages/index.templ) (gas-5 block, lines 289–290).
- Rely **only** on the conditional loader in [base_layout.templ](components/layouts/base_layout.templ) (lines 171–221) so the script is never added to the page for pro users.

### 2. Gate every `push()` on pro status

- **adsense_banner.templ**
  - **Mobile (GAS-4-phone)**: In the IntersectionObserver callback and in the fallback `load` listener, call `initAd()` only when `!window.getProStatusCookie()`.
  - **Desktop (GAS-3)**: Replace the immediate `(adsbygoogle = ...).push({});` with a small inline script that runs only when `!window.getProStatusCookie()` (and only runs after DOM/script ready so the script may be injected by base_layout for non-pro).
- **index.templ (gas-5)**: Wrap the `(adsbygoogle = ...).push({});` in a check so it runs only when `!window.getProStatusCookie()` (and optionally only when the ad card is not hidden, though no-push when pro is the critical part).

### 3. Optional cleanup

- Remove the `console.log('GA Read Cookie Status:', ...)` in [base_layout.templ](components/layouts/base_layout.templ) (around line 144) to avoid leaking pro status in the console.

### 4. Regenerate templ

- Run `templ generate` (or your project’s templ command) after editing `.templ` files so the generated `*_templ.go` files stay in sync.

## Resulting behavior

- **Pro**: Script is never injected (base_layout skips it), no static script in banner/index, and no `push()` runs → no AdSense execution, no TagError, policy-safe.
- **Non-pro**: Script is injected by base_layout, push() runs only for them, slots have real size → ads load as today.

## Files to touch


| File                                                                             | Change                                                                                       |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [components/banner/adsense_banner.templ](components/banner/adsense_banner.templ) | Remove GAS-3 script tag; gate mobile initAd() and desktop push() on `!getProStatusCookie()`. |
| [components/pages/index.templ](components/pages/index.templ)                     | Remove gas-5 script tag; gate gas-5 push() on `!getProStatusCookie()`.                       |
| [components/layouts/base_layout.templ](components/layouts/base_layout.templ)     | Remove the GA cookie `console.log` (optional).                                               |


No backend or config changes; pro status stays client-side via cookie and existing `data-pro` / `getProStatusCookie()`.