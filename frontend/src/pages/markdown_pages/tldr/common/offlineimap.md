---
title: "Synchronize IMAP - Manage Mail with Offlineimap | Free DevTools"
name: offlineimap
path: /freedevtools/tldr/common/offlineimap
canonical: "https://hexmos.com/freedevtools/tldr/common/offlineimap/"
description: "Synchronize IMAP server with Offlineimap. Manage email, and backup your important messages. Free online tool, no registration required."
category: common
keywords:
- imap synchronization
- maildir synchronization
- offlineimap linux
- offlineimap mail backup
- email synchronization tool
- imap client linux
- mail transfer agent
- email archiving
- imap server sync
- offlineimap configuration
features:
- Synchronize a remote IMAP server with local Maildir folders.
- Perform a one-time synchronization without autorefresh.
- Synchronize a specific mail account.
- Synchronize a specific mail folder.
- Manage your email offline with local access.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# offlineimap

> Synchronize a remote IMAP server with local Maildir folders.
> More information: <https://www.offlineimap.org>.

- Synchronize once, without enabling autorefresh:

`offlineimap -o`

- Synchronize a specific account:

`offlineimap -a {{account}}`

- Synchronize a specific folder:

`offlineimap -f {{folder}}`
