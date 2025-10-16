---
title: "Mail Command - Send Email from Command Line | Online Free DevTools by Hexmos"
name: mail
path: "/freedevtools/tldr/common/mail/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mail/"
description: "Send email with Mail Command from your terminal. Compose messages, include attachments, and manage your mailbox quickly. Free online tool, no registration required."
category: common
keywords:
- command line email
- terminal mail
- linux mail
- unix mail
- email client command line
- mail sender command line
- email composition command line
- email attachment command line
- bsd mail
- send email from shell
features:
- Send email messages directly from the command line
- Include file contents as email body
- Attach files to email messages
- Check and manage personal mail interactively
- Specify recipients, subject, and CC addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mail

> Operate on the user's mailbox.
> To send an email the message body is built from `stdin`.
> More information: <https://manned.org/mail>.

- Open an interactive prompt to check personal mail:

`mail`

- Send a typed email message with optional CC. The command-line below continues after pressing `<Enter>`. Input message text (can be multiline). Press `<Ctrl d>` to complete the message text:

`mail --subject "{{subject line}}" {{to_user@example.com}} --cc "{{cc_email_address}}"`

- Send an email that contains file content:

`mail --subject "{{$HOSTNAME filename.txt}}" {{to_user@example.com}} < {{path/to/filename.txt}}`

- Send a `tar.gz` file as an attachment:

`tar cvzf - {{path/to/directory1 path/to/directory2}} | uuencode {{data.tar.gz}} | mail --subject "{{subject_line}}" {{to_user@example.com}}`

- Display help:

`mail {{[-h|--help]}}`
