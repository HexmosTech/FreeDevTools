---
title: "Generate ASCII Art - Cowsay Command | Free DevTools"
name: cowsay
path: /freedevtools/tldr/common/cowsay
canonical: "https://hexmos.com/freedevtools/tldr/common/cowsay/"
description: "Generate ASCII art with Cowsay. Create customizable talking cows and other animals using this versatile command-line tool. Free online tool, no registration required."
category: common
keywords:
- ascii art generator
- cowsay command
- linux cowsay
- terminal ascii art
- command line art
- customizable ascii
- talking cow generator
- ascii cow
- cowsay alternatives
- text to ascii art
features:
- Print ASCII art from the command line
- Customize the animal displayed
- Use standard input as message source
- List available art types for selection
- Customize eyes of the ASCII art character
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cowsay

> Print ASCII art (by default a cow) saying or thinking something.
> More information: <https://manned.org/cowsay>.

- Print an ASCII cow saying "hello, world":

`cowsay "{{hello, world}}"`

- Print an ASCII cow saying text from `stdin`:

`echo "{{hello, world}}" | cowsay`

- List all available art types:

`cowsay -l`

- Print the specified ASCII art saying "hello, world":

`cowsay -f {{art}} "{{hello, world}}"`

- Print a dead thinking ASCII cow:

`cowthink -d "{{I'm just a cow, not a great thinker...}}"`

- Print an ASCII cow with custom eyes saying "hello, world":

`cowsay -e {{characters}} "{{hello, world}}"`
