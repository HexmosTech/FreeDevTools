---
title: "Decrypt Text - Reveal Hidden Data with nms | Online Free DevTools by Hexmos"
name: nms
path: "/freedevtools/tldr/common/nms/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nms/"
description: "Decrypt text instantly with nms, a data decryption tool mimicking the 'Sneakers' effect. Reveal hidden messages from standard input. Free online tool, no registration required."
category: common
keywords:
- data decryption
- text decryption
- sneakers effect
- stdin decryption
- command-line decryption
- terminal decryption
- nms decrypt
- linux decryption
- macos decryption
- text scrambling
features:
- Decrypts text from standard input
- Provides instant decryption option
- Allows customization of output color
- Clears the screen before decryption
- Recreates the 'Sneakers' decryption effect
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nms

> Tool that recreates the famous data decryption effect seen in the 1992 movie Sneakers from `stdin`.
> More information: <https://github.com/bartobri/no-more-secrets>.

- Decrypt text after a keystroke:

`echo "{{Hello, World!}}" | nms`

- Decrypt output immediately, without waiting for a keystroke:

`{{ls -la}} | nms -a`

- Decrypt the content of a file, with a custom output color:

`cat {{path/to/file}} | nms -a -f {{blue|white|yellow|black|magenta|green|red}}`

- Clear the screen before decrypting:

`{{command}} | nms -a -c`
