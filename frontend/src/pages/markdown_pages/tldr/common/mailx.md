---
title: "Send Mail - Send and Receive Email with Mailx | Online Free DevTools by Hexmos"
name: mailx
path: /freedevtools/tldr/common/mailx
canonical: "https://hexmos.com/freedevtools/tldr/common/mailx/"
description: "Send mail easily with Mailx. Compose, send, and manage emails directly from the command line with this email client tool. Free online tool, no registration required."
category: common
keywords:
- mailx send mail
- command line email client
- linux send email
- terminal email
- email command line
- send email attachments
- mailx cc
- mailx from address
- mailx subject
- mailx email tool
features:
- Send email from the command line
- Include attachments in emails
- Specify sender address
- Carbon copy (CC) recipients
- Define email subject
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mailx

> Send and receive mail.
> More information: <https://manned.org/mailx>.

- Send mail (the content should be typed after the command, and ended with `<Ctrl d>`):

`mailx {{[-s|--subject]}} "{{subject}}" {{to_addr}}`

- Send mail with content passed from another command:

`echo "{{content}}" | mailx {{[-s|--subject]}} "{{subject}}" {{to_addr}}`

- Send mail with content read from a file:

`mailx {{[-s|--subject]}} "{{subject}}" {{to_addr}} < {{content.txt}}`

- Send mail to a recipient and CC to another address:

`mailx {{[-s|--subject]}} "{{subject}}" {{[-c|--cc]}} {{cc_addr}} {{to_addr}}`

- Send mail specifying the sender address:

`mailx {{[-s|--subject]}} "{{subject}}" {{[-r|--from-address]}} {{from_addr}} {{to_addr}}`

- Send mail with an attachment:

`mailx {{[-a|--attach]}} {{path/to/file}} {{[-s|--subject]}} "{{subject}}" {{to_addr}}`
