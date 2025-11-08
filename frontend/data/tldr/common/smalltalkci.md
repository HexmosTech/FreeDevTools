---
title: "SmalltalkCI - Test Smalltalk Projects | Online Free DevTools by Hexmos"
name: smalltalkci
path: "/freedevtools/tldr/common/smalltalkci/"
canonical: "https://hexmos.com/freedevtools/tldr/common/smalltalkci/"
description: "Test Smalltalk projects with SmalltalkCI, a framework supporting GitHub Actions, Travis CI, and GitLab CI. Automate your Smalltalk testing workflows. Free online tool, no registration required."
category: common
keywords:
- smalltalk testing framework
- smalltalk ci/cd
- github actions smalltalk
- travis ci smalltalk
- gitlab ci smalltalk
- smalltalk image testing
- smalltalk automation
- ston configuration smalltalk
- smalltalk vm runner
- smalltalk project tester
features:
- Run Smalltalk tests from a configuration file.
- Debug Smalltalk tests in headful mode (with GUI).
- Download and prepare pre-configured Smalltalk images for testing.
- Specify a custom Smalltalk image and VM for testing.
- Clean up caches and delete builds after testing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# smalltalkci

> Framework for testing Smalltalk projects with GitHub Actions, Travis CI, AppVeyor, GitLab CI, and others.
> More information: <https://github.com/hpi-swa/smalltalkCI>.

- Run tests for a configuration file:

`smalltalkci {{path/to/.smalltalk.ston}}`

- Run tests for the `.smalltalk.ston` configuration in the current directory:

`smalltalkci`

- Debug tests in headful mode (show VM window):

`smalltalkci --headful`

- Download and prepare a well-known smalltalk image for the tests:

`smalltalkci --smalltalk {{Squeak64-Trunk}}`

- Specify a custom Smalltalk image and VM:

`smalltalkci --image {{path/to/Smalltalk.image}} --vm {{path/to/vm}}`

- Clean up caches and delete builds:

`smalltalkci --clean`
