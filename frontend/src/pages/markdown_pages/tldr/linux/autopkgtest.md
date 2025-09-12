---
title: "Run Debian Package Tests with autopkgtest | Free DevTools"
name: autopkgtest
path: /freedevtools/tldr/linux/autopkgtest
canonical: "https://hexmos.com/freedevtools/tldr/linux/autopkgtest/"
description: "Run tests on Debian packages with autopkgtest.  Automate testing, manage different test scenarios, and improve software quality. Free online tool, no registration required."
category: linux
keywords:
  - Debian package testing
  - autopkgtest commands
  - Linux package testing
  - automated package testing
  - Debian package build
  - autopkgtest tutorial
  - run system tests
  - test Debian packages
  - chroot testing
  - package test automation
features:
  - Build and test Debian packages directly on the system.
  - Run specific tests by name.
  - Test packages downloaded via apt-get.
  - Utilize a chroot environment for isolated testing.
  - Test existing packages without rebuilding.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autopkgtest

> Run tests on Debian packages.
> More information: <https://manpages.debian.org/bookworm/autopkgtest/autopkgtest.1.en.html>.

- Build the package in the current directory and run all tests directly on the system:

`autopkgtest -- {{null}}`

- Run a specific test for the package in the current directory:

`autopkgtest --test-name={{test_name}} -- {{null}}`

- Download and build a specific package with `apt-get`, then run all tests:

`autopkgtest {{package}} -- {{null}}`

- Test the package in the current directory using a new root directory:

`autopkgtest -- {{chroot}} {{path/to/new/root}}`

- Test the package in the current directory without rebuilding it:

`autopkgtest {{[-B|--no-built-binaries]}} -- {{null}}`
