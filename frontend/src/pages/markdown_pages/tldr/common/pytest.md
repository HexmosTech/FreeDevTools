---
title: "Pytest - Run Python Tests | Online Free DevTools by Hexmos"
name: pytest
path: /freedevtools/tldr/common/pytest
canonical: "https://hexmos.com/freedevtools/tldr/common/pytest/"
description: "Run Python tests effortlessly with Pytest. Execute tests, filter by keywords, and control execution flow for efficient debugging. Free online tool, no registration required."
category: common
keywords:
- python test runner
- pytest testing framework
- python unit testing
- pytest command line
- python test automation
- pytest markers
- pytest expression matching
- python testing linux
- python testing macos
- pytest continuous integration
features:
- Run tests from specific Python files
- Filter tests using keyword expressions
- Halt execution on first failure
- Select tests based on markers
- Continue testing after a failure
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pytest

> Run Python tests.
> More information: <https://docs.pytest.org/en/latest/how-to/usage.html>.

- Run tests from specific files:

`pytest {{path/to/test_file1.py path/to/test_file2.py ...}}`

- Run tests with names matching a specific [k]eyword expression:

`pytest -k {{expression}}`

- Exit as soon as a test fails or encounters an error:

`pytest --exitfirst`

- Run tests matching or excluding markers:

`pytest -m {{marker_name1 and not marker_name2}}`

- Run until a test failure, continuing from the last failing test:

`pytest --stepwise`

- Run tests without capturing output:

`pytest --capture=no`
