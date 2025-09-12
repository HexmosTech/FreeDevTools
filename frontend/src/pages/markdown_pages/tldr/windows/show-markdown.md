---
title: "Show Markdown - Render Markdown Files to Console | Free DevTools"
name: show-markdown
path: /freedevtools/tldr/windows/show-markdown
canonical: "https://hexmos.com/freedevtools/tldr/windows/show-markdown/"
description: "Render Markdown files quickly with Show-Markdown. Display Markdown content in the console or a browser. Free online tool, no registration required."
category: windows
keywords:
- markdown console renderer
- markdown to vt100
- markdown to html converter
- powershell markdown viewer
- windows markdown display
- command line markdown
- markdown preview windows
- show-markdown windows
- file converter powershell
- markdown formatter powershell
features:
- Render Markdown to console using VT100 escape sequences
- Display Markdown in a web browser
- Read Markdown content from a file path
- Process Markdown content from a string
- Format Markdown for command-line readability
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Show-Markdown

> Shows a Markdown file or string in the console in a friendly way using VT100 escape sequences or in a browser using HTML.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/show-markdown>.

- Render markdown to console from a file:

`Show-Markdown -Path {{path\to\file}}`

- Render markdown to console from string:

`"{{# Markdown content}}" | Show-Markdown`

- Open Markdown file in a browser:

`Show-Markdown -Path {{path\to\file}} -UseBrowser`
