---
title: "Send Email with Mutt - Command Line Mail | Free DevTools"
name: mutt
path: /freedevtools/tldr/common/mutt
canonical: "https://hexmos.com/freedevtools/tldr/common/mutt/"
description: "Send email with Mutt command-line client. Compose, send, and manage email from the terminal with advanced customization. Free online tool, no registration required."
category: common
keywords:
- command line email
- mutt email client
- terminal email
- send email linux
- send email command line
- mutt send attachments
- mutt configuration
- mutt tutorial
- email client linux
- linux email command
features:
- Send email with specified subject and recipients
- Attach files to email messages
- Specify a file as the email message body
- Use a draft file for email composition
- Open specific mailboxes from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mutt

> Command-line email client.
> More information: <http://mutt.org/doc/mutt.1.txt>.

- Open the specified mailbox:

`mutt -f {{mailbox}}`

- Send an email and specify a subject and a cc recipient:

`mutt -s {{subject}} -c {{cc@example.com}} {{recipient@example.com}}`

- Send an email with files attached:

`mutt -a {{file1 file2 ...}} -- {{recipient@example.com}}`

- Specify a file to include as the message body:

`mutt -i {{path/to/file}} {{recipient@example.com}}`

- Specify a draft file containing the header and the body of the message, in RFC 5322 format:

`mutt -H {{path/to/file}} {{recipient@example.com}}`
