---
title: "Debsecan - List Debian Vulnerabilities | Online Free DevTools by Hexmos"
name: debsecan
path: /freedevtools/tldr/linux/debsecan
canonical: "https://hexmos.com/freedevtools/tldr/linux/debsecan/"
description: "List Debian vulnerabilities quickly with Debsecan. Identify security issues, find fixed vulnerabilities, and upgrade vulnerable packages. Free online tool, no registration required."
category: linux
keywords:
  - debian vulnerability scanner
  - debian security analyzer
  - debian security audit
  - linux vulnerability detection
  - apt vulnerability check
  - debsecan security report
  - debian package security
  - debian sid vulnerability
  - debian upgrade packages
  - debian security update
features:
  - Scan for vulnerabilities in installed Debian packages.
  - Filter vulnerabilities by Debian release suite.
  - List only fixed vulnerabilities.
  - Generate package lists for upgrades.
  - Integrate with apt for package upgrades.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# debsecan

> Debian Security Analyzer, a tool to list vulnerabilities on a particular Debian installation.
> More information: <https://manned.org/debsecan>.

- List vulnerable installed packages on the current host:

`debsecan`

- List vulnerable installed packages of a specific suite:

`debsecan --suite {{release_code_name}}`

- List only fixed vulnerabilities:

`debsecan --suite {{release_code_name}} --only-fixed`

- List only fixed vulnerabilities of unstable ("sid") and mail to root:

`debsecan --suite {{sid}} --only-fixed --format {{report}} --mailto {{root}} --update-history`

- Upgrade vulnerable installed packages:

`sudo apt upgrade $(debsecan --only-fixed --format {{packages}})`
