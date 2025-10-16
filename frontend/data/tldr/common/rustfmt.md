---
title: "Format Rust Code - Instantly Improve Code Style | Online Free DevTools by Hexmos"
name: rustfmt
path: "/freedevtools/tldr/common/rustfmt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rustfmt/"
description: "Format Rust code quickly with Rustfmt, ensuring consistent style across projects. Improve readability and maintainability of Rust projects. Free online tool, no registration required."
category: common
keywords:
- rust formatter
- rustfmt command
- rust code style
- rust code formatting tool
- rust style guide
- rust language formatting
- rust source code formatter
- rust auto formatter
- rust code beautifier
- cargo fmt
features:
- Format Rust source code in place
- Check Rust code for formatting issues
- Backup modified files before formatting
- Format code with specific Rust style edition
- Support for multiple Rust editions (2015, 2018, 2021, 2024)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rustfmt

> Format Rust source code.
> More information: <https://github.com/rust-lang/rustfmt>.

- Format a file, overwriting the original file in-place:

`rustfmt {{path/to/source.rs}}`

- Check a file for formatting and display any changes on the console:

`rustfmt --check {{path/to/source.rs}}`

- Backup any modified files before formatting (the original file is renamed with a `.bk` extension):

`rustfmt --backup {{path/to/source.rs}}`

- Format code using a specific Rust style edition (formatting rules) verbosely:

`rustfmt --style-edition {{2015|2018|2021|2024}} {{[-v|--verbose]}} {{path/to/source1.rs path/to/source2.rs ...}}`

- Format code using a specific Rust edition (language features and parsing):

`rustfmt --edition {{2015|2018|2021|2024}} {{path/to/source1.rs path/to/source2.rs ...}}`
