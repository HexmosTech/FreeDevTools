---
title: "Control NeoMutt - Manage Emails | Free DevTools"
name: neomutt
path: /freedevtools/tldr/common/neomutt
canonical: "https://hexmos.com/freedevtools/tldr/common/neomutt/"
description: "Control emails instantly with NeoMutt, a powerful command-line email client. Manage mailboxes, compose messages, and send attachments easily. Free online tool, no registration required."
category: common
keywords:
- command-line email
- neomutt email client
- linux email
- macos email
- open source email
- command line mail
- email message composer
- mail attachment sender
- mailbox manager
- email draft editor
features:
- Open and manage specified mailboxes
- Compose emails with subject and CC recipients
- Send emails with multiple file attachments
- Include a file as the email message body
- Specify a draft file with header and body
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# neomutt

> NeoMutt email client.
> More information: <https://neomutt.org/guide/reference.html>.

- Open the specified mailbox:

`neomutt -f {{path/to/mailbox}}`

- Start writing an email and specify a subject and a `cc` recipient:

`neomutt -s "{{subject}}" -c {{cc@example.com}} {{recipient@example.com}}`

- Send an email with files attached:

`neomutt -a {{path/to/file1 path/to/file2 ...}} -- {{recipient@example.com}}`

- Specify a file to include as the message body:

`neomutt -i {{path/to/file}} {{recipient@example.com}}`

- Specify a draft file containing the header and the body of the message, in RFC 5322 format:

`neomutt -H {{path/to/file}} {{recipient@example.com}}`
