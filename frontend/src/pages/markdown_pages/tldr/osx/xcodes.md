---
title: "Xcode Manager - Control Xcode Versions | Online Free DevTools by Hexmos"
name: xcodes
path: /freedevtools/tldr/osx/xcodes
canonical: "https://hexmos.com/freedevtools/tldr/osx/xcodes/"
description: "Control Xcode versions with Xcode Manager. Download, install, and select specific Xcode versions for macOS development. Free online tool, no registration required."
category: osx
keywords:
- Xcode version manager
- macOS Xcode installer
- Xcode command line tools
- Xcode select version
- Xcode download manager
- Xcode installation guide
- Xcode command-line interface
- macOS developer tools
- Xcode version control
- Xcode build environment
features:
- List all installed Xcode versions
- Download and install specific Xcode versions
- Select an Xcode version for use
- Manage multiple Xcode installations
- Download Xcode archives without installation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcodes

> Download, install and manage multiple Xcode versions.
> See also: `xcodes runtimes`.
> More information: <https://github.com/xcodesorg/xcodes>.

- List all installed Xcode versions:

`xcodes installed`

- List all available Xcode versions:

`xcodes list`

- Select an Xcode version by specifying a version number or a path:

`xcodes select {{xcode_version|path/to/Xcode.app}}`

- Download and install a specific Xcode version:

`xcodes install {{xcode_version}}`

- Install the latest Xcode release and select it:

`xcodes install --latest --select`

- Download a specific Xcode version archive to a given directory without installing it:

`xcodes download {{xcode_version}} --directory {{path/to/directory}}`
