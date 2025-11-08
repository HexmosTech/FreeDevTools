---
title: "Go Clean - Remove Go Object Files | Online Free DevTools by Hexmos"
name: go-clean
path: "/freedevtools/tldr/go/go-clean/"
canonical: "https://hexmos.com/freedevtools/tldr/go/go-clean/"
description: "Clean Go object files and cached data with Go Clean. Streamline your Go development workflow and optimize build processes. Free online tool, no registration required."
category: common
keywords:
- go clean command
- go build cache cleanup
- go test cache removal
- go module cache deletion
- go object file removal
- go build optimization
- go dependency management
- go development workflow
- golang clean
- go package management
features:
- Remove object files generated during compilation
- Delete the build cache to force recompilation
- Clear cached test results to rerun tests
- Delete the module cache for fresh dependencies
- Preview removal actions without execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# go clean

> Remove object files and cached files.
> More information: <https://pkg.go.dev/cmd/go#hdr-Remove_object_files_and_cached_files>.

- Print the remove commands instead of actually removing anything:

`go clean -n`

- Delete the build cache:

`go clean -cache`

- Delete all cached test results:

`go clean -testcache`

- Delete the module cache:

`go clean -modcache`
