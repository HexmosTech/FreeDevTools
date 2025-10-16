---
title: "Index Email - Search Maildir with mu | Online Free DevTools by Hexmos"
name: mu
path: "/freedevtools/tldr/common/mu/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mu/"
description: "Index and search email messages with mu, a powerful command-line tool for Maildir. Find emails by keywords, sender, date, and attachments. Free online tool, no registration required."
category: common
keywords:
- email index
- maildir search
- command line email
- mu email
- email database
- email query
- email filter
- email attachments
- linux email
- macos email
features:
- Index emails from a local Maildir directory
- Search emails by keywords and specific criteria
- Filter emails by sender, subject, or date
- Find emails with specific attachments
- List contacts and their email addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mu

> Index and search emails from a local Maildir.
> More information: <https://man.cx/mu>.

- Initialize the email database, optionally specifying the Maildir directory and email addresses:

`mu init --maildir={{path/to/directory}} --my-address={{name@example.com}}`

- Index new emails:

`mu index`

- Find messages using a specific keyword (in message body, subject, sender, ...):

`mu find {{keyword}}`

- Find messages to Alice with subject `jellyfish` containing the words `apples` or `oranges`:

`mu find to:{{alice}} subject:{{jellyfish}} {{apples}} OR {{oranges}}`

- Find unread messages about words starting with `soc` (the `*` only works at the end of the search term) in the Sent Items folder:

`mu find 'subject:{{soc}}*' flag:{{unread}} maildir:'/{{Sent Items}}'`

- Find messages from Sam with attached images, between 2 KiB and 2 MiB, written in 2021:

`mu find 'mime:{{image/*}} size:{{2k..2m}} date:{{20210101..20211231}} from:{{sam}}`

- List contacts with `Bob` in either name or email address:

`mu cfind {{Bob}}`
