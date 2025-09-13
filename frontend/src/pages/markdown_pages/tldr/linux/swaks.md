---
title: "SMTP Tester - Test Email Deliverability with swaks | Free DevTools"
name: swaks
path: /freedevtools/tldr/linux/swaks
canonical: "https://hexmos.com/freedevtools/tldr/linux/swaks/"
description: "Test email deliverability with swaks SMTP tester.  Send test emails, authenticate with various methods, and test spam/virus scanners. Free online tool, no registration required."
category: linux
keywords:
  - smtp testing
  - email deliverability testing
  - swaks command
  - smtp server testing
  - email authentication testing
  - spam test email
  - virus scan test email
  - smtp protocol test
  - lmtp protocol test
  - email transaction testing
features:
  - Send standard test emails with various SMTP options.
  - Authenticate using different methods (e.g., CRAM-MD5).
  - Test email attachments for virus scanning.
  - Test email content for spam scanning.
  - Use LMTP protocol via UNIX domain sockets.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# swaks

> Swiss Army Knife SMTP, the all-purpose SMTP transaction tester.
> More information: <https://github.com/jetmore/swaks/blob/develop/doc/base.pod>.

- Deliver a standard test email to `user@example.com` on port 25 of `test-server.example.net`:

`swaks {{[-t|--to]}} {{user@example.com}} {{[-s|--server]}} {{test-server.example.net}}`

- Deliver a standard test email, requiring CRAM-MD5 authentication as user `me@example.com`. An "X-Test" header will be added to the email body:

`swaks {{[-t|--to]}} {{user@example.com}} {{[-f|--from]}} {{me@example.com}} {{[-a|--auth]}} {{CRAM-MD5}} {{[-au|--auth-user]}} {{me@example.com}} --header-X-Test "{{test_email}}"`

- Test a virus scanner using EICAR in an attachment. Don't show the message DATA part:

`swaks {{[-t|--to]}} {{user@example.com}} --attach - {{[-s|--server]}} {{test-server.example.com}} {{[-n|--suppress-data]}} {{path/to/eicar.txt}}`

- Test a spam scanner using GTUBE in the body of an email, routed via the MX records for `example.com`:

`swaks {{[-t|--to]}} {{user@example.com}} --body {{path/to/gtube_file}}`

- Deliver a standard test email to `user@example.com` using the LMTP protocol via a UNIX domain socket file:

`swaks {{[-t|--to]}} {{user@example.com}} --socket {{/var/lda.sock}} --protocol {{LMTP}}`
