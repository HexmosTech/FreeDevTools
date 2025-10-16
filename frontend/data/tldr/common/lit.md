---
title: "Execute LLVM Tests - lit Test Runner | Online Free DevTools by Hexmos"
name: lit
path: "/freedevtools/tldr/common/lit/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lit/"
description: "Execute LLVM tests with lit, an LLVM integrated tester for efficient code testing. Automate test suites and analyze results. Free online tool, no registration required."
category: common
keywords:
- LLVM test runner
- C++ test execution
- Clang test suite
- lit test framework
- LLVM integrated tester
- Compiler testing tool
- Code performance analysis
- Regression test automation
- Test suite execution
- Code validation tool
features:
- Run individual test cases
- Execute entire test suites
- Measure wall time for test execution
- Integrate with Valgrind for memory checks
- Summarize test results in a report
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lit

> LLVM integrated tester for executing LLVM and Clang style test suites, summarizing results.
> Part of LLVM.
> More information: <https://www.llvm.org/docs/CommandGuide/lit.html>.

- Run a specified test case:

`lit {{path/to/test_file.test}}`

- Run all test cases in a specified directory:

`lit {{path/to/test_suite}}`

- Run all test cases and check the wall time for each cases, then report to summary output:

`lit {{path/to/test_suite}} --time-tests`

- Run individual tests with Valgrind (memory check and memory leak test):

`lit {{path/to/test_file.test}} --vg --vg-leak --vg-args={{args_to_valgrind}}`
