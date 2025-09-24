---
title: "GYB - Backup Gmail Messages Locally | Online Free DevTools by Hexmos"
name: gyb
path: /freedevtools/tldr/common/gyb
canonical: "https://hexmos.com/freedevtools/tldr/common/gyb/"
description: "Backup Gmail messages with GYB, a Gmail backup tool. Secure your emails and restore them easily. Free online tool, no registration required."
category: common
keywords:
- Gmail backup tool
- Gmail message backup
- GYB backup
- Gmail API backup
- Gmail local backup
- Email backup utility
- Email archive tool
- Gmail backup command line
- HTTPS Gmail backup
- Email disaster recovery
features:
- Back up entire Gmail accounts locally
- Estimate Gmail storage usage before backup
- Restore backed up emails to a Gmail account
- Filter backup based on email flags like starred or important
- Archive emails using Gmail's API
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gyb

> Locally back up Gmail messages using Gmail's API over HTTPS.
> More information: <https://github.com/GAM-team/got-your-back>.

- Estimate the number and the size of all emails on your Gmail account:

`gyb --email {{email@gmail.com}} --action estimate`

- Backup a Gmail account to a specific directory:

`gyb --email {{email@gmail.com}} --action backup --local-folder {{path/to/directory}}`

- Backup only important or starred emails from a Gmail account to the default local folder:

`gyb --email {{email@gmail.com}} --search "{{is:important OR is:starred}}"`

- Restore from a local folder to a Gmail account:

`gyb --email {{email@gmail.com}} --action restore --local-folder {{path/to/directory}}`
