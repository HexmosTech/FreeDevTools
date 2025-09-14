---
title: "Send Email - Send Email Messages | Free DevTools"
name: sendmail
path: /freedevtools/tldr/common/sendmail
canonical: "https://hexmos.com/freedevtools/tldr/common/sendmail/"
description: "Send email messages easily with Sendmail. Quickly compose and deliver emails from the command line. Free online tool, no registration required."
category: common
keywords:
- email sender
- command line email
- sendmail command
- linux send email
- unix send email
- email message tool
- command line mail
- email client cli
- sendmail utility
- send email script
features:
- Send emails from the command line
- Specify sender address
- Send files as email content
- Send emails to local users
- Pipe content into emails
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sendmail

> Send email.
> More information: <https://manned.org/sendmail>.

- Send a message with the content of `message.txt` to the mail directory of local user `username`:

`sendmail {{username}} < {{message.txt}}`

- Send an email from you@yourdomain.com (assuming the mail server is configured for this) to test@gmail.com containing the message in `message.txt`:

`sendmail -f {{you@yourdomain.com}} {{test@gmail.com}} < {{message.txt}}`

- Send an email from you@yourdomain.com (assuming the mail server is configured for this) to test@gmail.com containing the file `file.zip`:

`sendmail -f {{you@yourdomain.com}} {{test@gmail.com}} < {{file.zip}}`
