---
title: "Arthas Trace - Trace Method Calls | Online Free DevTools by Hexmos"
name: arthas-trace
path: "/freedevtools/tldr/arthas/arthas-trace/"
canonical: "https://hexmos.com/freedevtools/tldr/arthas/arthas-trace/"
description: "Trace method calls with Arthas Trace, debug Java applications, and identify performance bottlenecks with detailed invocation chain analysis. Free online tool, no registration required."
category: common
keywords:
- Java method tracing
- Arthas invocation chain analysis
- JVM method call analysis
- Java performance profiling
- Arthas debugging
- Java application troubleshooting
- Arthas method execution analysis
- JVM call stack tracing
- Java bytecode instrumentation
- Arthas command-line tool
features:
- Trace the execution path of Java methods
- Measure the time spent in each method call
- Filter trace output based on execution time thresholds
- Analyze nested method invocations and their performance impact
- Identify performance bottlenecks within Java applications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arthas-trace

> Trace method invoke chain, and output the time cost for each node in the path.
> See also: `arthas`, `arthas-watch`.
> More information: <https://arthas.aliyun.com/en/doc/trace.html>.

- Trace method invoke chain:

`trace {{class-pattern}} {{method-pattern}}`

- Trace method invoke chains and only display invoke information longer than 10 ms:

`trace {{class-pattern}} {{method-pattern}} '#cost > {{10}}'`

- Trace the invoke chain of multiple classes or multiple methods:

`trace -E {{class-pattern1}}|{{class-patter2}} {{method-pattern1}}|{{method-pattern2}}|{{method-pattern3}}`

- Track method invoke chains, only display invoke information that exceeds 10 ms, and exit after 5 times:

`trace {{class-pattern}} {{method-pattern}} '#cost > {{10}}' -n 5`
