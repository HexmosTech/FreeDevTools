---
title: "Checksec - Analyze Executable Security | Online Free DevTools by Hexmos"
name: checksec
path: /freedevtools/tldr/common/checksec
canonical: "https://hexmos.com/freedevtools/tldr/common/checksec/"
description: "Analyze executable security with Checksec. Identify potential vulnerabilities and security properties in binaries, processes, and the kernel. Free online tool, no registration required."
category: common
keywords:
- executable security analysis
- binary security scanner
- checksec binary analysis
- elf security properties
- linux executable security
- process security scanner
- kernel security audit
- security check for executables
- hardening check linux
- security testing tool
features:
- Analyze security properties of executable files
- Recursively scan directories for executable security issues
- Inspect security settings of running processes
- Evaluate the security configuration of the kernel
- Report on common security vulnerabilities in binaries
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# checksec

> Check security properties of executables.
> More information: <https://github.com/slimm609/checksec.sh>.

- List security properties of an executable binary file:

`checksec --file={{path/to/binary}}`

- List security properties recursively of all executable files in a directory:

`checksec --dir={{path/to/directory}}`

- List security properties of a process:

`checksec --proc={{pid}}`

- List security properties of the running kernel:

`checksec --kernel`
