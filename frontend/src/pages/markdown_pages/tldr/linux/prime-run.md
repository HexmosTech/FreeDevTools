---
title: "Run Program on GPU - Prime-run | Free DevTools"
name: prime-run
path: /freedevtools/tldr/unknown/prime-run
canonical: "https://hexmos.com/freedevtools/tldr/unknown/prime-run/"
description: "Run programs using Nvidia GPU with Prime-run. Offload rendering tasks and improve performance using dedicated graphics. Free online tool, no registration required."
category: unknown
keywords:
- GPU program execution
- Nvidia GPU offload
- prime-run command
- Linux GPU control
- OpenGL renderer check
- Dedicated GPU program
- Nvidia graphics performance
- Render offload utility
- Command line GPU
- System graphics control
features:
- Execute programs on a dedicated Nvidia GPU
- Offload rendering tasks to an alternative graphics card
- Verify if a program is using the Nvidia GPU
- Utilize PRIME render offload functionality
- Enhance application performance by using a dedicated GPU
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prime-run

> Run a program using an alternative Nvidia graphics card.
> More information: <https://wiki.archlinux.org/title/PRIME#PRIME_render_offload>.

- Run a program using a dedicated Nvidia GPU:

`prime-run {{command}}`

- Validate whether the Nvidia card is being used:

`prime-run glxinfo | grep "OpenGL renderer"`
