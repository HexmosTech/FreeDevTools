---
title: "Vitest - Run Fast JavaScript Tests | Online Free DevTools by Hexmos"
name: vitest
path: /freedevtools/tldr/common/vitest
canonical: "https://hexmos.com/freedevtools/tldr/common/vitest/"
description: "Run fast JavaScript tests with Vitest. Execute unit, integration, and snapshot tests with a Jest-compatible API. Free online tool, no registration required."
category: common
keywords:
- javascript testing framework
- vitest testing
- vite testing
- jest alternative
- unit testing javascript
- integration testing javascript
- snapshot testing javascript
- typescript testing
- javascript test runner
- vite test environment
features:
- Execute all available Vitest tests quickly
- Run specific test suites from provided file paths
- Filter tests using regular expression matching
- Watch files and automatically re-run tests on changes
- Generate code coverage reports
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vitest

> Fast, modern testing framework built for Vite, offering seamless integration, TypeScript support, and a Jest-compatible API for unit, integration, and snapshot testing.
> More information: <https://vitest.dev/guide>.

- Run all available tests:

`vitest run`

- Run the test suites from the given files:

`vitest run {{path/to/file1 path/to/file2 ...}}`

- Run the test suites from files within the current and subdirectories, whose paths match the given `regex`:

`vitest run {{regex1}} {{regex2}}`

- Run the tests whose names match the given `regex`:

`vitest run --testNamePattern {{regex}}`

- Watch files for changes and automatically re-run related tests:

`vitest`

- Run tests with coverage:

`vitest run --coverage`

- Run all tests but stops immediately after the first test failure:

`vitest run --bail=1`

- Display help:

`vitest --help`
