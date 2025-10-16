---
title: "Wrangler - Cloudflare Workers Control | Online Free DevTools by Hexmos"
name: wrangler
path: "/freedevtools/tldr/common/wrangler/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wrangler/"
description: "Control Cloudflare Workers with Wrangler. Deploy, manage, and develop serverless applications effortlessly. Free online tool, no registration required."
category: common
keywords:
- cloudflare workers deploy
- wrangler command line tool
- serverless application development
- cloudflare workers publish
- wrangler init project
- wrangler dev server
- cloudflare workers logs
- wrangler tail command
- cloudflare workers authentication
- wrangler cloudflare deployment
features:
- Initialize a new Cloudflare Workers project
- Authenticate with your Cloudflare account
- Start a local development server for testing
- Publish your worker script to Cloudflare
- Aggregate logs from your production worker
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wrangler

> Cloudflare Workers tool.
> More information: <https://developers.cloudflare.com/workers/wrangler/commands/>.

- Initialize a project with a skeleton configuration:

`wrangler init {{project_name}}`

- Authenticate with Cloudflare:

`wrangler login`

- Start a local development server:

`wrangler dev --host {{hostname}}`

- Publish the worker script:

`wrangler publish`

- Aggregate logs from the production worker:

`wrangler tail`
