---
title: "Send Email - Send Emails via SMTP with msmtp | Free DevTools"
name: msmtp
path: /freedevtools/tldr/common/msmtp
canonical: "https://hexmos.com/freedevtools/tldr/common/msmtp/"
description: "Send emails instantly with msmtp. Control SMTP settings and configure accounts for streamlined email sending via command line. Free online tool, no registration required."
category: common
keywords:
- smtp client
- email sender
- command line email
- linux email
- msmtp configuration
- email authentication
- send email from terminal
- smtp protocol
- email account manager
- email command
features:
- Send emails via SMTP protocol
- Configure multiple email accounts
- Authenticate with SMTP servers
- Send emails directly from the command line
- Specify custom SMTP settings for each email
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msmtp

> An SMTP client.
> It reads text from `stdin` and sends it to an SMTP server.
> More information: <https://marlam.de/msmtp>.

- Send an email using the default account configured in `~/.msmtprc`:

`echo "{{Hello world}}" | msmtp {{to@example.org}}`

- Send an email using a specific account configured in `~/.msmtprc`:

`echo "{{Hello world}}" | msmtp --account={{account_name}} {{to@example.org}}`

- Send an email without a configured account. The password should be specified in the `~/.msmtprc` file:

`echo "{{Hello world}}" | msmtp --host={{localhost}} --port={{999}} --from={{from@example.org}} {{to@example.org}}`
