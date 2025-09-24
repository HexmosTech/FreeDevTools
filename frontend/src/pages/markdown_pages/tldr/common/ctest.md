---
title: "CTest - Generate Test Reports | Online Free DevTools by Hexmos"
name: ctest
path: /freedevtools/tldr/common/ctest
canonical: "https://hexmos.com/freedevtools/tldr/common/ctest/"
description: "Generate test reports with CTest. Automate software testing, manage test suites, and analyze results using CMake's test driver. Free online tool, no registration required."
category: common
keywords:
- CMake test automation
- CTest test driver
- software test report generator
- parallel testing CMake
- regression testing CMake
- CTest Linux
- CTest MacOS
- CTest Windows
- CMake CI/CD
- CMake testing framework
features:
- Run all tests defined in a CMake project
- Execute tests in parallel for faster results
- List available tests within a CMake project
- Run a single test by name or regular expression
- Output test results on failure for debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ctest

> CMake test driver program.
> More information: <https://gitlab.kitware.com/cmake/community/wikis/doc/ctest/Testing-With-CTest>.

- Run all tests defined in the CMake project, executing 4 [j]obs at a time in parallel:

`ctest {{[-j|--parallel]}} {{4}} --output-on-failure`

- List available tests:

`ctest {{[-N|--show-only]}}`

- Run a single test based on its name, or filter on a `regex`:

`ctest --output-on-failure {{[-R|--tests-regex]}} '^{{test_name}}$'`
