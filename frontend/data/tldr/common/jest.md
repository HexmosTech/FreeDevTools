---
title: "Jest Tests - Run JavaScript Tests | Online Free DevTools by Hexmos"
name: jest
path: "/freedevtools/tldr/common/jest/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jest/"
description: "Run JavaScript tests with Jest testing framework. Execute test suites, find related tests and watch for changes with this CLI tool. Free online tool, no registration required."
category: common
keywords:
- javascript testing framework
- jest test runner
- javascript unit testing
- react testing
- jest watch mode
- jest command line
- nodejs testing
- zero config testing
- jest regex test selection
- jest related tests
features:
- Execute all available JavaScript tests.
- Run specific test suites from file paths.
- Filter test suites by matching file paths against regular expressions.
- Execute tests whose names match a provided regular expression.
- Run test suites related to a specified source file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jest

> A zero-configuration JavaScript testing platform.
> More information: <https://jestjs.io>.

- Run all available tests:

`jest`

- Run the test suites from the given files:

`jest {{path/to/file1 path/to/file2 ...}}`

- Run the test suites from files within the current and subdirectories, whose paths match the given `regex`:

`jest {{regex1}} {{regex2}}`

- Run the tests whose names match the given `regex`:

`jest --testNamePattern {{regex}}`

- Run test suites related to a given source file:

`jest --findRelatedTests {{path/to/source_file.js}}`

- Run test suites related to all uncommitted files:

`jest --onlyChanged`

- Watch files for changes and automatically re-run related tests:

`jest --watch`

- Display help:

`jest --help`
