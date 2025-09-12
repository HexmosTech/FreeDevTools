---
title: "Benchmark Tool - Run Command Benchmarks | Free DevTools"
name: hyperfine
path: /freedevtools/tldr/common/hyperfine
canonical: "https://hexmos.com/freedevtools/tldr/common/hyperfine/"
description: "Run benchmarks with Hyperfine, a command-line benchmarking tool. Compare command execution times and optimize performance with ease. Free online tool, no registration required."
category: common
keywords:
- command line benchmark
- hyperfine benchmark tool
- shell script benchmark
- performance testing
- execution time measurement
- comparative benchmarking
- code optimization tool
- cli performance analysis
- Linux benchmark
- MacOS benchmark
features:
- Measure command execution time precisely
- Compare performance of different commands
- Specify minimum number of benchmark runs
- Perform benchmark with warmup iterations
- Prepare environment before each benchmark run
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hyperfine

> A benchmarking tool.
> More information: <https://github.com/sharkdp/hyperfine/>.

- Run a basic benchmark, performing at least 10 runs:

`hyperfine '{{make}}'`

- Run a comparative benchmark:

`hyperfine '{{make target1}}' '{{make target2}}'`

- Change minimum number of benchmarking runs:

`hyperfine {{[-m|--min-runs]}} {{7}} '{{make}}'`

- Perform benchmark with warmup:

`hyperfine {{[-w|--warmup]}} {{5}} '{{make}}'`

- Run a command before each benchmark run (to clear caches, etc.):

`hyperfine {{[-p|--prepare]}} '{{make clean}}' '{{make}}'`

- Run a benchmark where a single parameter changes for each run:

`hyperfine {{[-p|--prepare]}} '{{make clean}}' {{[-P|--parameter-scan]}} {{num_threads}} {{1}} {{10}} '{{make --jobs {num_threads}}}'`
