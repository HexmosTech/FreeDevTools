---
title: "Go Documentation - View Go Packages | Online Free DevTools by Hexmos"
name: go-doc
path: "/freedevtools/tldr/go/go-doc/"
canonical: "https://hexmos.com/freedevtools/tldr/go/go-doc/"
description: "View Go packages and symbols with Go Documentation. Access exported symbols, source code, and package details quickly. Free online tool, no registration required."
category: common
keywords:
- go documentation
- go package documentation
- go symbol documentation
- go pkg
- go dev
- golang documentation
- golang packages
- go source code
- go package symbols
- command line documentation
features:
- View documentation for Go packages
- Display exported symbols for a package
- Show source code for Go elements
- Inspect specific symbols within a package
- Access documentation via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# go doc

> View documentation for a package or symbol.
> More information: <https://pkg.go.dev/cmd/go#hdr-Show_documentation_for_package_or_symbol>.

- View documentation for the current package:

`go doc`

- Show package documentation and exported symbols:

`go doc {{encoding/json}}`

- Show also documentation of symbols:

`go doc -all {{encoding/json}}`

- Show also sources:

`go doc -all -src {{encoding/json}}`

- Show a specific symbol:

`go doc -all -src {{encoding/json.Number}}`
