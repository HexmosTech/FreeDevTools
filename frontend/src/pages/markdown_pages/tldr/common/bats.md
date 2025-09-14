---
title: "Bash Test System - Automate Bash Tests | Free DevTools"
name: bats
path: /freedevtools/tldr/common/bats
canonical: "https://hexmos.com/freedevtools/tldr/common/bats/"
description: "Automate Bash tests effortlessly with Bats, a TAP-compliant framework. Enhance testing efficiency and streamline your shell scripting workflows. Free online tool, no registration required."
category: common
keywords:
- Bash test automation
- TAP testing framework
- shell script testing
- Bats testing tool
- Linux test automation
- continuous integration bash
- Bash unit testing
- automated testing Bash
- shell scripting testing
- CI/CD bash tests
features:
- Run BATS test scripts in TAP format
- Count test cases without execution
- Recursively execute tests in directories
- Customize output format (pretty, tap, junit)
- Parallel test execution with GNU parallel
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bats

> Bash Automated Testing System: a TAP (<https://testanything.org/>) compliant testing framework for Bash.
> More information: <https://bats-core.readthedocs.io/en/stable/usage.html>.

- Run a BATS test script and output results in the TAP (Test Anything Protocol) format:

`bats {{[-t|--tap]}} {{path/to/test.bats}}`

- Count test cases of a test script without running any tests:

`bats {{[-c|--count]}} {{path/to/test.bats}}`

- Run BATS test cases recursively (files with a `.bats` extension):

`bats {{[-r|--recursive]}} {{path/to/directory}}`

- Output results in a specific format:

`bats {{[-F|--formatter]}} {{pretty|tap|tap13|junit}} {{path/to/test.bats}}`

- Add timing information to tests:

`bats {{[-T|--timing]}} {{path/to/test.bats}}`

- Run specific number of jobs in parallel (requires GNU `parallel` to be installed):

`bats {{[-j|--jobs]}} {{number}} {{path/to/test.bats}}`
