---
title: "Golang Linter - Validate Go Code | Online Free DevTools by Hexmos"
name: golangci-lint
path: /freedevtools/tldr/common/golangci-lint
canonical: "https://hexmos.com/freedevtools/tldr/common/golangci-lint/"
description: "Validate Go code instantly with GolangCI-Lint. Find bugs, enforce coding standards, and improve code quality using this fast linter. Free online tool, no registration required."
category: common
keywords:
- Go code linter
- Go static analysis
- Go code quality check
- Golang linting tool
- Code analysis tool
- Golang CI/CD linter
- Go code style checker
- YAML linter configuration
- Golang code scanner
- Go bug finder
features:
- Run multiple linters in parallel
- Customize linter configuration using YAML
- Enable or disable specific linters
- Integrate with major IDEs
- Identify code style violations and potential bugs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# golangci-lint

> Parallelized, smart and fast Go linters runner that integrates with all major IDEs and supports YAML configuration.
> More information: <https://golangci-lint.run/welcome/quick-start/>.

- Run linters in the current folder:

`golangci-lint run`

- List enabled and disabled linters (Note: Disabled linters are shown last, do not mistake them for enabled ones):

`golangci-lint linters`

- Enable a specific linter for this run:

`golangci-lint run {{[-E|--enable]}} {{linter}}`
