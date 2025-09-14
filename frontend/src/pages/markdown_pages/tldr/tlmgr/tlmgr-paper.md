---
title: "Manage TeX Paper Size - Control Paper Settings | Free DevTools"
name: tlmgr-paper
path: /freedevtools/tldr/tlmgr/tlmgr-paper
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-paper/"
description: "Control TeX paper size settings with tlmgr-paper. Configure paper sizes for different TeX Live programs using the command line interface. Free online tool, no registration required."
category: common
keywords:
- TeX paper size manager
- TeX Live paper settings
- tlmgr paper configuration
- LaTeX paper size control
- Command line paper size
- TeX paper format
- Paper size specification
- TeX distribution settings
- TeX A4 paper size
- TeX US letter paper size
features:
- Set the default paper size for TeX Live programs
- Configure paper size for specific TeX programs
- List available paper sizes for a program
- Display the current default paper size
- Export paper size configuration in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr paper

> Manage paper size options of an TeX Live installation.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#paper>.

- Show the default paper size used by all TeX Live programs:

`tlmgr paper`

- Set the default paper size for all TeX Live programs to A4:

`sudo tlmgr paper {{a4}}`

- Show the default paper size used by a specific TeX Live program:

`tlmgr {{pdftex}} paper`

- Set the default paper size for a specific TeX Live program to A4:

`sudo tlmgr {{pdftex}} paper {{a4}}`

- List all available paper sizes for a specific TeX Live program:

`tlmgr {{pdftex}} paper --list`

- Dump the default paper size used by all TeX Live programs in JSON format:

`tlmgr paper --json`
