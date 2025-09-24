---
title: "VSCE - Manage VS Code Extensions | Online Free DevTools by Hexmos"
name: vsce
path: /freedevtools/tldr/common/vsce
canonical: "https://hexmos.com/freedevtools/tldr/common/vsce/"
description: "Manage VS Code extensions with VSCE. Package, publish, and unpublish extensions quickly. Streamline your Visual Studio Code development workflow. Free online tool, no registration required."
category: common
keywords:
- vscode extension manager
- vsce package
- vsce publish
- vsce unpublish
- vs code extension development
- vsix package
- visual studio code extensions
- extension marketplace
- vscode cli
- vsce show
features:
- Package VS Code extensions into VSIX files
- Publish extensions to the VS Code Marketplace
- Unpublish extensions from the VS Code Marketplace
- List extensions by publisher
- Show metadata associated with an extension
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vsce

> Extension manager for Visual Studio Code.
> More information: <https://github.com/microsoft/vscode-vsce>.

- List all the extensions created by a publisher:

`vsce list {{publisher}}`

- Publish an extension as major, minor or patch version:

`vsce publish {{major|minor|patch}}`

- Unpublish an extension:

`vsce unpublish {{extension_id}}`

- Package the current working directory as a `.vsix` file:

`vsce package`

- Show the metadata associated with an extension:

`vsce show {{extension_id}}`
