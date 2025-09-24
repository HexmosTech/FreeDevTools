---
title: "Check Rust Code - Find Errors with Cargo Check | Online Free DevTools by Hexmos"
name: cargo-check
path: /freedevtools/tldr/cargo/cargo-check
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-check/"
description: "Check Rust code for errors instantly with Cargo Check. Analyze dependencies and ensure code quality using the command line. Free online tool, no registration required."
category: common
keywords:
- rust code check
- cargo check errors
- rust syntax check
- rust project analysis
- rust dependency check
- rust linter
- rust compiler warnings
- cargo project validation
- rust language check
- rust static analysis
features:
- Check Rust project for errors
- Analyze dependencies for issues
- Validate Rust code syntax
- Check tests within a Rust project
- Check Rust code with specific features enabled
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo check

> Check a local package and all of its dependencies for errors.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-check.html>.

- Check the current package:

`cargo {{[c|check]}}`

- Check all tests:

`cargo {{[c|check]}} --tests`

- Check the integration tests in `tests/integration_test1.rs`:

`cargo {{[c|check]}} --test {{integration_test1}}`

- Check the current package with the features `feature1` and `feature2`:

`cargo {{[c|check]}} {{[-F|--features]}} {{feature1,feature2}}`

- Check the current package with default features disabled:

`cargo {{[c|check]}} --no-default-features`
