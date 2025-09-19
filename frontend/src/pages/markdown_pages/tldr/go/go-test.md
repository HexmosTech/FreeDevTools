---
title: "Go Test - Test Go Packages | Online Free DevTools by Hexmos"
name: go-test
path: /freedevtools/tldr/go/go-test
canonical: "https://hexmos.com/freedevtools/tldr/go/go-test/"
description: "Test Go packages easily with Go Test. Execute unit tests, run benchmarks, and analyze code coverage for your Go projects. Free online tool, no registration required."
category: common
keywords:
- go test package
- go unit testing
- go coverage analysis
- go benchmark testing
- golang test execution
- go test command
- linux go testing
- macos go testing
- windows go testing
- go test verbose
features:
- Execute Go unit tests in a package
- Run benchmarks to measure code performance
- Analyze code coverage to identify untested code
- Verbose output for detailed test results
- Test packages in subdirectories recursively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# go test

> Tests Go packages (files have to end with `_test.go`).
> More information: <https://pkg.go.dev/cmd/go#hdr-Testing_flags>.

- Test the package found in the current directory:

`go test`

- [v]erbosely test the package in the current directory:

`go test -v`

- Test the packages in the current directory and all subdirectories (note the `...`):

`go test -v ./...`

- Test the package in the current directory and run all benchmarks:

`go test -v -bench .`

- Test the package in the current directory and run all benchmarks for 50 seconds:

`go test -v -bench . -benchtime {{50s}}`

- Test the package with coverage analysis:

`go test -cover`
