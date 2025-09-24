---
title: "Install Python Packages - Control pipwin Packages | Online Free DevTools by Hexmos"
name: pipwin
path: /freedevtools/tldr/windows/pipwin
canonical: "https://hexmos.com/freedevtools/tldr/windows/pipwin/"
description: "Install Python packages effortlessly with pipwin, your go-to tool for unofficial binaries on Windows. Download, search, and manage packages with ease. Free online tool, no registration required."
category: windows
keywords:
- Python package installer
- Windows Python binaries
- pipwin package manager
- Python dependency installer
- Windows package repository
- Unofficial Python packages
- pipwin command line
- pipwin search packages
- pipwin install packages
- pipwin Windows tool
features:
- Install unofficial Python packages on Windows
- Search for specific packages available for download
- Download packages to a custom directory
- Install packages from a requirements.txt file
- Uninstall installed packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pipwin

> A tool to install unofficial Python package binaries on Windows.
> More information: <https://github.com/lepisma/pipwin>.

- List all available packages for download:

`pipwin list`

- Search packages:

`pipwin search {{partial_name|name}}`

- Install a package:

`pipwin install {{package}}`

- Uninstall a package:

`pipwin uninstall {{package}}`

- Download a package to a specific directory:

`pipwin download --dest {{path\to\directory}} {{package}}`

- Install packages according to `requirements.txt`:

`pipwin install --file {{path\to\requirements.txt}}`
