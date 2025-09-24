---
title: "Rustdoc Generator - Generate Rust Docs | Online Free DevTools by Hexmos"
name: rustdoc
path: /freedevtools/tldr/common/rustdoc
canonical: "https://hexmos.com/freedevtools/tldr/common/rustdoc/"
description: "Generate Rust documentation quickly with Rustdoc Generator. Convert Rust code into readable documentation with various options. Free online tool, no registration required."
category: common
keywords:
- rust documentation generator
- rust crate documentation
- rust code documentation
- rustdoc command line
- rustdoc markdown documentation
- rustdoc output directory
- rustdoc project name
- rustdoc library documentation
- rust library documentation
- rust documentation tool
features:
- Generate documentation from Rust crate roots
- Specify the project name for documentation
- Create documentation from Markdown files
- Designate a specific output directory
- Customize documentation generation options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rustdoc

> Generate documentation for a Rust crate.
> More information: <https://doc.rust-lang.org/stable/rustdoc>.

- Generate documentation from the crate's root:

`rustdoc {{src/lib.rs}}`

- Pass a name for the project:

`rustdoc {{src/lib.rs}} --crate-name {{name}}`

- Generate documentation from Markdown files:

`rustdoc {{path/to/file.md}}`

- Specify the output directory:

`rustdoc {{src/lib.rs}} --out-dir {{path/to/output_directory}}`
