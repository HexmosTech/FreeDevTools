---
title: "Cargo Bench - Execute Rust Benchmarks | Online Free DevTools by Hexmos"
name: cargo-bench
path: /freedevtools/tldr/cargo/cargo-bench
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-bench/"
description: "Execute Rust benchmarks effortlessly with Cargo Bench. Analyze performance, identify bottlenecks and optimize code. Free online tool, no registration required."
category: common
keywords:
- rust benchmark execution
- cargo performance testing
- rust code analysis
- benchmark command line
- rust performance profiling
- cargo bench examples
- rust benchmark arguments
- cross-platform benchmarking
- rust performance tuning
- cargo benchmark library
features:
- Execute all benchmarks within a Rust package.
- Skip failures and continue benchmarking.
- Compile benchmarks without running them.
- Benchmark specific targets with custom profiles.
- Benchmark example and binary targets.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo bench

> Compile and execute benchmarks.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-bench.html>.

- Execute all benchmarks of a package:

`cargo bench`

- Don't stop when a benchmark fails:

`cargo bench --no-fail-fast`

- Compile, but don't run benchmarks:

`cargo bench --no-run`

- Benchmark the specified benchmark:

`cargo bench --bench {{benchmark}}`

- Benchmark with the given profile (default: `bench`):

`cargo bench --profile {{profile}}`

- Benchmark all example targets:

`cargo bench --examples`

- Benchmark all binary targets:

`cargo bench --bins`

- Benchmark the package's library:

`cargo bench --lib`
