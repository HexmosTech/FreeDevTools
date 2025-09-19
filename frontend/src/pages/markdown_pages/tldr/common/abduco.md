---
title: "Control Terminal Sessions - Abduco | Online Free DevTools by Hexmos"
name: abduco
path: /freedevtools/tldr/common/abduco
canonical: "https://hexmos.com/freedevtools/tldr/common/abduco/"
description: "Control terminal sessions instantly with Abduco. Seamlessly manage and detach/reattach to terminal sessions for enhanced productivity. Free online tool, no registration required."
category: common
keywords:
- terminal session manager
- session multiplexer
- abduco linux
- abduco macos
- terminal detachment tool
- command line session control
- remote terminal management
- abduco attach session
- abduco detach session
- persist terminal sessions
features:
- Attach to existing terminal sessions
- Create new terminal sessions on demand
- Detach from sessions and reattach later
- Manage sessions in read-only mode
- Use with terminal multiplexers like dvtm
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# abduco

> Terminal session manager.
> More information: <https://manned.org/abduco>.

- List sessions:

`abduco`

- [A]ttach to a session, creating it if it doesn't exist:

`abduco -A {{name}} {{bash}}`

- [A]ttach to a session with `dvtm`, creating it if it doesn't exist:

`abduco -A {{name}}`

- Detach from a session:

`<Ctrl \>`

- [A]ttach to a session in [r]ead-only mode:

`abduco -Ar {{name}}`
