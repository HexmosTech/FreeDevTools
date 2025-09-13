---
title: "Stripe CLI - Manage Stripe Accounts | Free DevTools"
name: stripe
path: /freedevtools/tldr/common/stripe
canonical: "https://hexmos.com/freedevtools/tldr/common/stripe/"
description: "Manage Stripe accounts with Stripe CLI. Interact with Stripe API, listen for events, and trigger test webhooks. Free online tool, no registration required."
category: common
keywords:
- stripe command line interface
- stripe api client
- stripe webhook trigger
- stripe event listener
- stripe account management
- stripe cli tool
- stripe logs
- stripe customers
- payment gateway cli
- stripe development
features:
- Tail activity logs for a Stripe account
- Listen for and forward Stripe events to a local server
- Trigger test webhook events
- Create Stripe customers
- Print Stripe event data in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stripe

> Interact with a Stripe account.
> More information: <https://docs.stripe.com/stripe-cli>.

- Follow the logs of activity on the account:

`stripe logs tail`

- Listen for events, filtering on events with the name `charge.succeeded` and forwarding them to localhost:3000/events:

`stripe listen --events="{{charge.succeeded}}" --forward-to="{{localhost:3000/events}}"`

- Send a test webhook event:

`stripe trigger {{charge.succeeded}}`

- Create a customer:

`stripe customers create --email="{{test@example.com}}" --name="{{Jenny Rosen}}"`

- Print to JSON:

`stripe listen --print-json`
