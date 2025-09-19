---
title: "Create Temporary Email - Manage Mail from Terminal | Online Free DevTools by Hexmos"
name: tmpmail
path: /freedevtools/tldr/common/tmpmail
canonical: "https://hexmos.com/freedevtools/tldr/common/tmpmail/"
description: "Create Temporary Email with tmpmail. Manage email inboxes and view messages directly from your terminal using this simple command-line utility. Free online tool, no registration required."
category: common
keywords:
- temporary email generator
- command line email
- terminal email client
- tmpmail linux
- tmpmail bash
- disposable email address
- email inbox viewer
- posix shell email
- temporary mailbox
- email message reader
features:
- Generate a temporary email inbox
- List available messages in the inbox
- Display the content of the most recent email
- Open and view a specific email by ID
- View email as raw text, removing HTML formatting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tmpmail

> A temporary email right from your terminal written in POSIX sh.
> More information: <https://github.com/sdushantha/tmpmail#usage>.

- Create a temporary inbox:

`tmpmail {{[-g|--generate]}}`

- List messages and their numeric ID:

`tmpmail`

- Display the most recent received email:

`tmpmail {{[-r|--recent]}}`

- Open a specific message:

`tmpmail {{email_id}}`

- View email as raw text without HTML tags:

`tmpmail {{[-t|--text]}}`

- Open email with a specific browser (default is w3m):

`tmpmail {{[-b|--browser]}} {{browser}}`
