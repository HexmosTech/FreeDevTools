---
title: "Cargo Test - Execute Rust Tests | Online Free DevTools by Hexmos"
name: cargo-test
path: /freedevtools/tldr/cargo/cargo-test
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-test/"
description: "Execute Rust package tests with Cargo Test. Debug Rust code, optimize test execution and control test concurrency. Free online tool, no registration required."
category: common
keywords:
- rust test execution
- cargo test command
- rust unit testing
- rust integration testing
- rust test runner
- rust testing framework
- cross platform testing rust
- rust command line testing
- rust workspace testing
- rust package testing
features:
- Run tests with specific name filters
- Set the number of test threads for concurrency
- Test artifacts in release mode with optimizations
- Test all packages in a workspace
- Run tests for a specific package
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo test

> Execute the unit and integration tests of a Rust package.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-test.html>.

- Only run tests containing a specific string in their names:

`cargo {{[t|test]}} {{test_name}}`

- Set the number of simultaneous running test cases:

`cargo {{[t|test]}} -- --test-threads {{count}}`

- Test artifacts in release mode, with optimizations:

`cargo {{[t|test]}} {{[-r|--release]}}`

- Test all packages in the workspace:

`cargo {{[t|test]}} --workspace`

- Run tests for a specific package:

`cargo {{[t|test]}} {{[-p|--package]}} {{package}}`

- Run tests without hiding output from test executions:

`cargo {{[t|test]}} -- --nocapture`
