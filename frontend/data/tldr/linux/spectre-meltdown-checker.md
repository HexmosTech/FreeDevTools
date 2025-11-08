---
title: "Spectre Meltdown Checker - Detect Vulnerabilities | Online Free DevTools by Hexmos"
name: spectre-meltdown-checker
path: "/freedevtools/tldr/linux/spectre-meltdown-checker/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/spectre-meltdown-checker/"
description: "Detect Spectre and Meltdown vulnerabilities with Spectre Meltdown Checker.  This Linux security checker provides detailed reports and mitigation guidance. Free online tool, no registration required."
category: linux
keywords:
  - linux security checker
  - kernel vulnerability detection
  - spectre meltdown mitigation
  - system security analysis
  - linux kernel analysis
  - command-line security tool
  - vulnerability scanner linux
  - spectre meltdown scanner
  - security audit linux
  - kernel exploit detection
features:
  - Detects Spectre and Meltdown vulnerabilities in the running kernel.
  - Provides detailed explanations on how to mitigate detected vulnerabilities.
  - Supports checking specific vulnerability variants.
  - Offers multiple output formats (text, JSON, NRPE, Prometheus, short).
  - Allows checking of non-running kernels using a provided kernel file path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spectre-meltdown-checker

> Spectre and Meltdown mitigation detection tool.
> More information: <https://manned.org/spectre-meltdown-checker>.

- Check the currently running kernel for Spectre or Meltdown:

`sudo spectre-meltdown-checker`

- Check the currently running kernel and show an explanation of the actions to take to mitigate a vulnerability:

`sudo spectre-meltdown-checker --explain`

- Check for specific variants (defaults to all):

`sudo spectre-meltdown-checker --variant {{1|2|3|3a|4|l1tf|msbds|mfbds|mlpds|mdsum|taa|mcespc|srbds}}`

- Display output using a specific output format:

`sudo spectre-meltdown-checker --batch {{text|json|nrpe|prometheus|short}}`

- Don't use the `/sys` interface even if present:

`sudo spectre-meltdown-checker --no-sysfs`

- Check a non-running kernel:

`sudo spectre-meltdown-checker --kernel {{path/to/kernel_file}}`
