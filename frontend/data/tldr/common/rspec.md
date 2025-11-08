---
title: "RSpec - Test Ruby Code with Behavior-Driven Development | Online Free DevTools by Hexmos"
name: rspec
path: "/freedevtools/tldr/common/rspec/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rspec/"
description: "Test Ruby code effectively with RSpec, a behavior-driven development framework. Write cleaner and more maintainable tests. Free online tool, no registration required."
category: common
keywords:
- rspec testing
- ruby rspec
- behavior driven development
- rspec command line
- rspec examples
- rspec tutorial
- rspec ruby gem
- ruby testing framework
- rspec configuration
- rspec spec helper
features:
- Initialize RSpec configuration and spec helper files.
- Run all tests within a project.
- Execute tests within a specific directory.
- Run individual test files.
- Run a specific test case by line number.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rspec

> Behavior-driven development testing framework written in Ruby to test Ruby code.
> More information: <https://rspec.info>.

- Initialize an .rspec configuration and a spec helper file:

`rspec --init`

- Run all tests:

`rspec`

- Run a specific directory of tests:

`rspec {{path/to/directory}}`

- Run one or more test files:

`rspec {{path/to/file1 path/to/file2 ...}}`

- Run a specific test in a file (e.g. the test starts on line 83):

`rspec {{path/to/file}}:{{83}}`

- Run specs with a specific seed:

`rspec --seed {{seed_number}}`
