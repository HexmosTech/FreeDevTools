---
title: "Asterisk Server - Manage Phone Instances | Online Free DevTools by Hexmos"
name: asterisk
path: /freedevtools/tldr/linux/asterisk
canonical: "https://hexmos.com/freedevtools/tldr/linux/asterisk/"
description: "Manage Asterisk phone server instances with this command line tool. Configure SIP clients, monitor channels, and control voicemail boxes. Free online tool, no registration required."
category: linux
keywords:
  - asterisk server management
  - asterisk command line
  - sip configuration asterisk
  - voicemail management asterisk
  - phone server asterisk
  - asterisk monitoring tool
  - asterisk channel control
  - asterisk hangup command
  - asterisk reload configuration
  - asterisk cli tool
features:
  - Manage telephone and exchange server instances
  - Reload SIP configuration settings
  - Terminate active call channels
  - Display connected SIP clients (phones)
  - Show active call and channel information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asterisk

> Run and manage telephone and exchange (phone) server instances.
> More information: <https://docs.asterisk.org/Operation/>.

- [r]econnect to a running server, and turn on logging 3 levels of [v]erbosity:

`asterisk -r -vvv`

- [r]econnect to a running server, run a single command, and return:

`asterisk -r -x "{{command}}"`

- Show chan_SIP clients (phones):

`asterisk -r -x "sip show peers"`

- Show active calls and channels:

`asterisk -r -x "core show channels"`

- Show voicemail mailboxes:

`asterisk -r -x "voicemail show users"`

- Terminate a channel:

`asterisk -r -x "hangup request {{channel_ID}}"`

- Reload chan_SIP configuration:

`asterisk -r -x "sip reload"`
