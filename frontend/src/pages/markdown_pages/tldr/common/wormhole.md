---
title: "Wormhole - Transfer Files Securely | Free DevTools"
name: wormhole
path: /freedevtools/tldr/common/wormhole
canonical: "https://hexmos.com/freedevtools/tldr/common/wormhole/"
description: "Transfer files securely with Wormhole. Share files of any size using a secure, encrypted channel. Free online tool, no registration required."
category: common
keywords:
- file transfer secure
- secure file transfer
- encrypted file transfer
- command-line file transfer
- cross-platform file transfer
- wormhole file transfer
- file sharing command line
- secure data transfer
- magic wormhole
- file transfer linux
features:
- Send files and directories securely
- Receive files using a wormhole code
- Transfer raw text securely
- Specify a custom code phrase for file transfers
- Perform cross-platform file transfers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wormhole

> Get things from one computer to another, safely.
> More information: <https://magic-wormhole.readthedocs.io>.

- Send a file:

`wormhole send {{path/to/file}}`

- Receive a file:

`wormhole receive {{wormhole_code}}`

- Send raw text:

`wormhole send`

- Send a file with a custom code phrase:

`wormhole send --code {{custom_code}} {{path/to/file}}`
