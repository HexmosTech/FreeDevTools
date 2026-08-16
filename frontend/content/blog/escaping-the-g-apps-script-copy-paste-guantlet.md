---
title: "At Last, I clasp: Escaping the G's Apps Script Copy-Paste Gauntlet"
date: 2026-07-19
description: "How a Chrome extension talking to a Google Sheet through an Apps Script Web App led to a 401 rabbit hole, a manifest gotcha, and finally clasp."
tags: [google, apps-script]
author: "Athreya"
feature_image: "./cover.gif"
slug: "escaping-the-g-apps-script-copy-paste-guantlet"
---

_Hello, I'm Maneshwar. I'm building git-lrc, a Micro AI code reviewer that runs on every commit. It is free and source-available on Github. [Star git-lrc](https://github.com/HexmosTech/git-lrc) to help devs discover the project. Do give it a try and share your feedback._

Hey. Come sit down. I need to tell you about the dumbest few hours of debugging I've had this year, and how it ended with me weirdly fond of a command line tool called clasp.

## The setup: why does a LinkedIn extension need a backend

Here's the use case. I built myself a Chrome extension called ProfileKit.

It sits on LinkedIn profile pages, scrapes the useful bits (name, headline, current company). Nice, simple, personal tooling.

Then I wanted one more feature: a "Save Profile" button.

Click it on a profile, and that person gets attached to their company's row in a big Google Sheet I use to track.

Multiple profiles per company, no duplicates, all synced automatically.

Cool idea. Except now my little scraper needs a backend.

I don't want to stand up a server for a side project that runs maybe twenty times a day.

[Shrijith](https://www.linkedin.com/in/shrijith-venkatramana-32741b2b0/) gave me the idea of turning a Google Apps Script Web App into a free API, with a Google Sheet playing the role of the database

The wiring looks like this from the extension side:

```js
// background.js
fetch(SHEET_SYNC_URL, {
  method: "POST",
  body: JSON.stringify(message.payload),
  redirect: "follow",
})
  .then((res) => res.text())
  .then((text) => sendResponse({ ok: true, data: JSON.parse(text) }))
  .catch((err) => sendResponse({ ok: false, error: err.message }));
```

And on the other end, an Apps Script `doPost` matches the lead to a company row and appends it.

Free hosting, free auth (in theory), free database.

What could go wrong.

Here's roughly what that whole handshake looks like when it's working, redirect and all:

![Image description](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/alx9394hdvo5yzowver1.png)

That redirect-to-an-echo-URL dance is a real thing Apps Script does for every response.

First time I saw it in the network tab I assumed something was broken.

It was not. It was just Google being Google.

![Image description](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/fetwge9aei0o2cnacbhp.png)

## The bug that made me question reality

Small bug first, for context: my original "Save Lead" logic matched leads to companies by name.

Text like "EmpInfo" versus "EmpInfo, Inc." versus whatever a headline happened to say.

Ambiguous, fragile, occasionally hilarious.

I fixed that by capturing the company's actual LinkedIn URL the moment you click "Search Relevant people" on a company page, and using that URL as the real key instead of vibes-based string matching. Good, solid, boring fix.

Then I redeployed the updated Apps Script code and everything broke.

Every single sync attempt failed with a 401.

Not "your code has a bug."

Not "column not found."

A flat, personality-free 401, straight from Google's infrastructure, before my code even ran.

I checked the deployment settings about four times. Right there, big as day: **Who has access: Anyone.**

Anyone. It said Anyone. I stared at that word like it owed me money.

Turns out they are not the same picture.

Under the hood, in the actual manifest that controls the deployment, the setting was:

```json
"webapp": {
  "executeAs": "USER_DEPLOYING",
  "access": "ANYONE"
}
```

And in Google's API, `ANYONE` quietly means "anyone who is logged into a Google account." Not anonymous. Not a `curl` request. Not my extension's `fetch()` call, which carries zero Google session cookies because why would it.

The setting that actually means "the public, no login, total strangers, machines, whatever" is a completely different value: `ANYONE_ANONYMOUS`.

So the UI says "Anyone," the API has two different flavors of anyone, and only one of them is actually anyone.

It's the access-control equivalent of a landlord's listing saying "pet friendly" and then you find out that means one goldfish, supervised.

Fixed it, and confirmed with a plain request:

```bash
curl -s "$DEPLOY_URL" -w "\n%{http_code}\n"
# {"ok":false,"error":"Use POST"}
# 200
```

200. A real response. From a stranger. Anonymously. As advertised, eventually.

## Enter clasp, stage left

Here's the part that actually made this worth writing about.

Every time I fixed something in the Apps Script file, the workflow to ship it was: open the web editor, paste the code in by hand, click Deploy, click Manage Deployments, cut a new version, copy the new `/exec` URL, go paste that URL into my extension's `background.js`, bump the manifest version, reload the extension, refresh every open LinkedIn tab.

For one changed line of code.

I did this enough times that I finally asked out loud: isn't there a package for this.

Turns out yes.

It's called [clasp](https://github.com/google/clasp), Google's own CLI for Apps Script, and it lets you push code, cut versions, and manage deployments straight from your terminal.

```bash
npm install -g @google/clasp
clasp login          # one-time OAuth in your browser
clasp clone <scriptId>
```

The part that actually solved my URL-churn problem is this flag:

```bash
clasp deploy -i <existingDeploymentId> -V <newVersionNumber>
```

That updates an *existing* deployment to point at a new version, in place.

Same deployment ID, same `/exec` URL, forever.

No more copy-pasting a new URL into the extension every single time I fix a typo.

## Automating the whole dance

So I wrapped push, version, and redeploy into one script and one make target:

```bash
make apps-script-deploy MSG="fix lead matching"
```

That's it. That's the whole release process now.

Here's the before and after, roughly:

![Image description](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/5b7jufh7b8u9km6b95hl.png)

![Image description](https://dev-to-uploads.s3.us-east-2.amazonaws.com/uploads/articles/ljufajmkhiv1kyzv8gdi.png)

## Why this pattern is underrated

Chrome extension talking to a Google Sheet through an Apps Script Web App is not a serious architecture.

I want to be clear about that.

It is also completely free, needs no server, no database, no auth system, and took me an evening to wire up.

For a personal tool that a handful of people (one person, me) use a few dozen times a day, that trade is fantastic.

Just know the one gotcha buried in the manifest, and maybe keep clasp installed before you need it instead of after three hours of 401s.

## A quick shoutout

clasp was built by [Grant Timmerman](https://grant.cm/), who spent his time at Google Workspace basically inventing the developer story for Apps Script from scratch, this CLI included.

It still quietly handles a huge amount of traffic for people building Sheets and Docs add-ons, years later.

If you ever wire an extension or a script up to Google Workspace, you've probably benefited from his work without knowing it.

Tagging him properly when this goes live, he deserves the credit :)

Further reading:
- [clasp on GitHub](https://github.com/google/clasp)
- [Apps Script web apps guide](https://developers.google.com/apps-script/guides/web)
- [Grant Timmerman's site](https://grant.cm/)

Disclaimer: This article was written by me; AI was used to fix grammar and improve readability.

---

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ed6ratvd5eb5bp0ep9ck.png)

AI agents write code fast. They also silently remove logic, change behavior, and introduce bugs — without telling you. You often find out in production.

git-lrc fixes this. It hooks into git commit and reviews every diff before it lands. 60-second setup. Completely free.

Any feedback or contributors are welcome! It's online, source-available, and ready for anyone to use.

⭐ Star [git-lrc on GitHub](https://github.com/HexmosTech/git-lrc)
