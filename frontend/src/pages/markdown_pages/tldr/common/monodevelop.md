---
title: "C# IDE - Create C# Applications with MonoDevelop | Free DevTools"
name: monodevelop
path: /freedevtools/tldr/common/monodevelop
canonical: "https://hexmos.com/freedevtools/tldr/common/monodevelop/"
description: "Create C# applications effortlessly with MonoDevelop IDE. Develop, debug, and manage C#, F#, and .NET projects seamlessly. Free online tool, no registration required."
category: common
keywords:
- c# ide
- .net ide
- f# ide
- c# development environment
- cross platform ide
- monodevelop c#
- monodevelop .net
- linux c# ide
- macos c# ide
- windows c# ide
features:
- Open and edit C#, F#, and .NET files
- Start MonoDevelop from the command line
- Open specific files at specific line and column numbers
- Force MonoDevelop to open a new window
- Disable `stdout` and `stderr` redirection
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# monodevelop

> Cross platform IDE for C#, F# and more.
> More information: <https://www.monodevelop.com/documentation/>.

- Start MonoDevelop:

`monodevelop`

- Open a specific file:

`monodevelop {{path/to/file}}`

- Open a specific file with the caret at a specific position:

`monodevelop {{path/to/file}};{{line_number}};{{column_number}}`

- Force opening a new window instead of switching to an existing one:

`monodevelop --new-window`

- Disable redirection of `stdout` and `stderr` to a log file:

`monodevelop --no-redirect`

- Enable performance monitoring:

`monodevelop --perf-log`
