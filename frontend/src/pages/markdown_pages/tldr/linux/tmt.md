---
title: "Tmt - Test Management | Free DevTools"
name: tmt
path: /freedevtools/tldr/linux/tmt
canonical: "https://hexmos.com/freedevtools/tldr/linux/tmt/"
description: "Manage tests efficiently with Tmt, the Test Management Tool for Linux. Create, run, and debug tests with ease. Free online tool, no registration required."
category: linux
keywords:
- test management linux
- linux test management
- tmt test tool
- tmt command line
- test automation linux
- beakerlib test creation
- linux test metadata
- tmt lint validation
- tmt filter tests
- linux test debugging
features:
- Initialize test project structures
- Create tests from templates with links
- List available tests, plans, and stories
- Show detailed test metadata
- Validate Tmt files against specification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tmt

> Test Management Tool for creating, running, and debugging tests.
> Some subcommands such as `run`, `try`, etc. have their own usage documentation.
> More information: <https://tmt.readthedocs.io>.

- List available tests, plans, and stories:

`tmt`

- Initialize tmt files/project structure:

`tmt init`

- Create a new test with a template and a link:

`tmt test create --template {{beakerlib}} --link {{verifies:issue#1234}}`

- List available tests, plans, or stories:

`tmt {{test|plan|story}} ls {{pattern}}`

- Show detailed test metadata in the given context:

`tmt --context {{arch=aarch64}} test show`

- Validate tmt files against the specification:

`tmt lint`

- Use filter:

`tmt tests ls --filter {{tag:foo}} --filter {{tier:0}}`

- Display help:

`tmt --help`
