---
title: "TMT Try - Experiment with Tests | Online Free DevTools by Hexmos"
name: tmt-try
path: /freedevtools/tldr/linux/tmt-try
canonical: "https://hexmos.com/freedevtools/tldr/linux/tmt-try/"
description: "Experiment quickly with TMT Try for streamlined testing.  Easily run tests, specify OS, and customize environments. Free online tool, no registration required."
category: linux
keywords:
  - tmt test execution
  - tmt environment control
  - tmt test framework
  - tmt command line tool
  - tmt automated testing
  - tmt system provisioning
  - tmt test filtering
  - tmt guest access
  - linux test automation
  - automated test runner
features:
  - Quickly run tests in various environments.
  - Specify target operating systems for tests.
  - Select custom test images and provision methods.
  - Filter tests using flexible selection criteria.
  - Directly access and control guest environments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tmt try

> Quickly experiment with tests and environments.
> More information: <https://tmt.readthedocs.io/en/stable/stories/cli.html#try>.

- Quickly experiment with the default provision method (no tests in the CWD):

`tmt try`

- Run a test in the current working directory:

`cd {{path/to/test}} && tmt try`

- Use a specific operating system:

`tmt try {{fedora-41}}`

- Select both custom image and provision method:

`tmt try {{fedora@container}}`

- Select tests with custom filter:

`tmt try --test {{feature}}`

- Provision guest and wait for instructions:

`tmt try --ask`

- Directly log into the guest without asking:

`tmt try --login`

- Display help:

`tmt try --help`
