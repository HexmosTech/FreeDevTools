---
title: "Generate Rust Reports - Cargo Report | Online Free DevTools by Hexmos"
name: cargo-report
path: /freedevtools/tldr/cargo/cargo-report
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-report/"
description: "Generate comprehensive Rust reports with Cargo Report. Analyze future incompatibilities and package dependencies with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- rust report generator
- cargo dependency report
- rust future incompatibility report
- cargo package analysis
- rust crate analyzer
- cargo build report
- rust compilation warnings
- cargo project inspection
- rust dependency tree
- cargo audit report
features:
- Generate future incompatibility reports
- Display reports by Cargo-generated ID
- Analyze reports for specified packages
- Identify potential compilation issues
- Inspect crate dependencies and versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo report

> Display various kinds of reports.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-report.html>.

- Display a report of crates which will eventually stop compiling:

`cargo report future-incompatibilities`

- Display a report with the specified Cargo-generated ID:

`cargo report future-incompatibilities --id {{id}}`

- Display a report for the specified package:

`cargo report future-incompatibilities {{[-p|--package]}} {{package}}`
