---
title: "Systemd Escape - Generate Unit Names | Online Free DevTools by Hexmos"
name: systemd-escape
path: /freedevtools/tldr/linux/systemd-escape
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-escape/"
description: "Generate systemd unit names with Systemd Escape. Efficiently escape strings for systemd and reverse the process for easy manipulation. Free online tool, no registration required."
category: linux
keywords:
- systemd unit name generator
- systemd escape string
- linux systemd escape
- systemd unit file
- systemd escape path
- systemd name reverse
- systemd escape suffix
- systemd escape template
- systemd service manager
- linux service configuration
features:
- Escape strings for valid systemd unit names
- Reverse the escaping process to retrieve original strings
- Treat input as a path for path-based escaping
- Append a custom suffix to the escaped output
- Use a template to inject the escaped string into a predefined format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-escape

> Escape strings for usage in systemd unit names.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-escape.html>.

- Escape the given text:

`systemd-escape {{text}}`

- Reverse the escaping process:

`systemd-escape {{[-u|--unescape]}} {{text}}`

- Treat the given text as a path:

`systemd-escape {{[-p|--path]}} {{text}}`

- Append the given suffix to the escaped text:

`systemd-escape --suffix {{suffix}} {{text}}`

- Use a template and inject the escaped text:

`systemd-escape --template {{template}} {{text}}`
