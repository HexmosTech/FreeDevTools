---
title: "Create Online Books - With Mdbook | Online Free DevTools by Hexmos"
name: mdbook
path: /freedevtools/tldr/linux/mdbook
canonical: "https://hexmos.com/freedevtools/tldr/linux/mdbook/"
description: "Create online books easily with Mdbook. Build, serve, and watch Markdown files for automatic book generation. Free online tool, no registration required."
category: linux
keywords:
  - markdown book creator
  - online book generator
  - mdbook markdown compiler
  - rust mdbook tool
  - markdown to book converter
  - static site generator
  - documentation generator
  - command line book builder
  - markdown documentation tool
  - mdbook serve localhost
features:
  - Initialize a new mdbook project
  - Build an mdbook project from Markdown files
  - Serve an mdbook project locally for testing
  - Watch for changes and automatically rebuild
  - Clean the generated book directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mdbook

> Create online books by writing Markdown files.
> More information: <https://rust-lang.github.io/mdBook/cli/index.html>.

- Create an mdbook project in the current directory:

`mdbook init`

- Create an mdbook project in a specific directory:

`mdbook init {{path/to/directory}}`

- Clean the directory with the generated book:

`mdbook clean`

- Serve a book at <http://localhost:3000>, auto build when file changes:

`mdbook serve`

- Watch a set of Markdown files and automatically build when a file is changed:

`mdbook watch`
