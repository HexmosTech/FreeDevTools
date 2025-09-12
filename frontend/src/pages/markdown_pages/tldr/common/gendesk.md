---
title: "Generate Desktop File - Create .desktop Files | Free DevTools"
name: gendesk
path: /freedevtools/tldr/common/gendesk
canonical: "https://hexmos.com/freedevtools/tldr/common/gendesk/"
description: "Generate .desktop files easily with gendesk. Create application launchers and download icons quickly using the command line. Free online tool, no registration required."
category: common
keywords:
- desktop file generator
- .desktop file creator
- linux launcher generator
- application launcher maker
- freedesktop entry
- desktop icon creator
- command line launcher
- linux application shortcut
- debian desktop entry
- ubuntu launcher tool
features:
- Generate .desktop files from the command line
- Create application launchers with minimal information
- Customize application name, execution path, and icon
- Overwrite existing desktop files
- Suppress output for silent operation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gendesk

> Specifies the command to generate a `.desktop` file and a download icon with minimal information.
> More information: <https://manned.org/gendesk>.

- Create a `.desktop` file named `app`:

`gendesk -n --name "{{app}}" --exec "/{{path/to/app}}" --icon "/{{path/to/icon.png}}" --comment "{{This is application}}"`

- Create a `.desktop` file named `app`, do not display any output, and overwrite it if it exists:

`gendesk -q -f -n --name "{{app}}" --exec "/{{path/to/app}}" --icon "/{{path/to/icon.png}}" --comment "{{This is application}}"`

- Display help:

`gendesk {{[-h|--help]}}`
