---
title: "Hledger-web - Manage Accounts | Online Free DevTools by Hexmos"
name: hledger-web
path: "/freedevtools/tldr/hledger/hledger-web/"
canonical: "https://hexmos.com/freedevtools/tldr/hledger/hledger-web/"
description: "Manage accounts easily with hledger-web, a powerful accounting tool. View financial data, track expenses, and create insightful reports. Free online tool, no registration required."
category: common
keywords:
- hledger web interface
- hledger accounting
- plain text accounting
- ledger web app
- finance management
- expense tracking
- ledger reporting
- financial data analysis
- command-line accounting
- journal accounting
features:
- Start a local hledger-web instance with browser integration
- Serve the hledger-web application with specified host and port
- Serve hledger-web JSON API with read-only access
- Convert amounts to current market value using inferred prices
- Display hledger manual in Info format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hledger-web

> A web interface and API for `hledger`, a robust, friendly plain text accounting app.
> More information: <https://hledger.org/hledger-web.html>.

- Start the web app, and a browser if possible, for local viewing and adding only:

`hledger-web`

- As above but with a specified file, and allow editing of existing data:

`hledger-web {{[-f|--file]}} {{path/to/file.journal}} --allow edit`

- Start just the web app, and accept incoming connections to the specified host and port:

`hledger-web --serve --host {{my.host.name}} --port 8000`

- Start just the web app's JSON API, and allow only read access:

`hledger-web --serve-api --host {{my.host.name}} --allow view`

- Show amounts converted to current market value in your base currency when known:

`hledger-web --value now --infer-market-prices`

- Show the manual in Info format if possible:

`hledger-web --info`

- Display help:

`hledger-web {{[-h|--help]}}`
