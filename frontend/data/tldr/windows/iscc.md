---
title: "Create Inno Setup Installer - Compile Scripts | Online Free DevTools by Hexmos"
name: iscc
path: "/freedevtools/tldr/windows/iscc/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/iscc/"
description: "Create Windows installers with ISCC, the Inno Setup Compiler. Easily compile Inno Setup scripts into executable installers. Free online tool, no registration required."
category: windows
keywords:
- Inno Setup compiler
- Windows installer creator
- ISS script compiler
- Setup executable generator
- Installer package builder
- Windows software packaging
- Software deployment tool
- Inno Setup script tool
- ISCC command line
- Silent installer compilation
features:
- Compile Inno Setup scripts to create Windows installers.
- Silently compile installers using command-line options.
- Create signed Inno Setup installers for enhanced security.
- Automate installer creation using command-line scripting.
- Generate Windows installer packages from ISS configuration files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iscc

> Compiler for Inno Setup installers.
> It compiles an Inno Setup scripts into an Windows installer executable.
> More information: <https://jrsoftware.org/isinfo.php>.

- Compile an Inno Setup script:

`iscc {{path\to\file.iss}}`

- Quietly compile an Inno Setup installer:

`iscc /Q {{path\to\file.iss}}`

- Compile a signed Inno Setup installer:

`iscc /S={{name}}={{command}} {{path\to\file.iss}}`
