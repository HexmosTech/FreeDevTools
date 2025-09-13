---
title: "Clippy - Improve Rust Code with cargo clippy | Free DevTools"
name: cargo-clippy
path: /freedevtools/tldr/cargo/cargo-clippy
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-clippy/"
description: "Improve your Rust code with cargo clippy. Analyze code, catch mistakes and enhance code quality easily. Free online tool, no registration required."
category: common
keywords:
- rust code analysis
- rust linting
- cargo clippy
- rust code improvement
- rust style checker
- rust static analysis
- clippy lints
- rust best practices
- cargo clippy warnings
- rust code diagnostics
features:
- Analyze Rust code for common mistakes
- Enforce coding style guidelines
- Suggest code improvements automatically
- Check code for performance issues
- Identify potential bugs and errors
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo clippy

> A collection of lints to catch common mistakes and improve your Rust code.
> More information: <https://github.com/rust-lang/rust-clippy>.

- Run checks over the code in the current directory:

`cargo clippy`

- Require that `Cargo.lock` is up to date:

`cargo clippy --locked`

- Run checks on all packages in the workspace:

`cargo clippy --workspace`

- Run checks for a package:

`cargo clippy --package {{package}}`

- Run checks for a lint group (see <https://rust-lang.github.io/rust-clippy/stable/index.html#?groups=cargo,complexity,correctness,deprecated,nursery,pedantic,perf,restriction,style,suspicious>):

`cargo clippy -- {{[-W|--warn]}} clippy::{{lint_group}}`

- Treat warnings as errors:

`cargo clippy -- {{[-D|--deny]}} warnings`

- Run checks and ignore warnings:

`cargo clippy -- {{[-A|--allow]}} warnings`

- Apply Clippy suggestions automatically:

`cargo clippy --fix`
