---
title: "Print Mail Headers - Inspect Mailbox Details | Online Free DevTools by Hexmos"
name: from
path: /freedevtools/tldr/common/from
canonical: "https://hexmos.com/freedevtools/tldr/common/from/"
description: "Print mail headers with From command. Display mailbox summaries, filter by sender, and access specific mail directories effortlessly. Free online tool, no registration required."
category: common
keywords:
- mail header printer
- mailbox summary tool
- email sender filter
- mail directory browser
- command line mail
- linux mail utility
- unix mail command
- mailutils from command
- mail inspection tool
- email troubleshooting tool
features:
- List messages in a user's mailbox
- Display the total count of messages stored
- Specify a mailbox directory to inspect
- Filter mail headers by sender address
- Print information about email messages from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# from

> Print mail header lines from the current user's mailbox.
> More information: <https://mailutils.org/manual/html_chapter/Programs.html#frm-and-from>.

- List mail:

`from`

- Display the number of messages stored:

`from --count`

- List mail in the specified mailbox directory:

`MAIL={{path/to/mailbox}} from`

- Print the mail from the specified address:

`from --sender={{me@example.com}}`
