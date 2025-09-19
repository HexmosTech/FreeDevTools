---
title: "Godoc - View Go Package Documentation | Online Free DevTools by Hexmos"
name: godoc
path: "/freedevtools/tldr/common/godoc"
canonical: "https://hexmos.com/freedevtools/tldr/common/godoc/"
description: "View Go package documentation with Godoc. Explore package details, function definitions, and serve documentation locally. Free online tool, no registration required."
category: common
keywords:
- go documentation
- go package documentation
- godoc documentation
- go package explorer
- go api reference
- go language documentation
- golang documentation server
- go package viewer
- go api documentation
- go documentation tool
features:
- Display documentation for Go packages
- Serve documentation as a local web server
- Generate an index file for faster searching
- Search documentation using an index file
- Display documentation for specific functions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# godoc

> View documentation for go packages.
> More information: <https://pkg.go.dev/golang.org/x/tools/cmd/godoc>.

- Display help for a specific package:

`godoc {{fmt}}`

- Display help for the function "Printf" of "fmt" package:

`godoc {{fmt}} {{Printf}}`

- Serve documentation as a web server on port 6060:

`godoc -http=:{{6060}}`

- Create an index file:

`godoc -write_index -index_files={{path/to/file}}`

- Use the given index file to search the docs:

`godoc -http=:{{6060}} -index -index_files={{path/to/file}}`
