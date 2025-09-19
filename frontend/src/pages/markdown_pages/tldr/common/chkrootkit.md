---
title: "Chkrootkit - Scan System for Rootkits | Online Free DevTools by Hexmos"
name: chkrootkit
path: /freedevtools/tldr/common/chkrootkit
canonical: "https://hexmos.com/freedevtools/tldr/common/chkrootkit/"
description: "Scan system for rootkits with chkrootkit. Detect security threats and vulnerabilities on Linux systems. Free online tool, no registration required."
category: common
keywords:
- linux rootkit scanner
- system security audit
- detect malware linux
- chkrootkit command
- rootkit detection tool
- linux security scanner
- system integrity check
- vulnerability assessment linux
- security exploit detection
- compromised system scan
features:
- Scan a system for known rootkits
- Detect signs of kernel-level modification
- Identify backdoors and trojans
- Perform system binaries integrity checks
- Exclude specific files from scanning
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chkrootkit

> Scan system for rootkits.
> More information: <https://manned.org/chkrootkit>.

- Enable [q]uiet mode and suppress normal test results:

`chkrootkit -q`

- Enable e[x]pert mode and produce additional outputs:

`chkrootkit -x`

- Enable [d]ebug mode to show all output:

`chkrootkit -d`

- Specify [e]xcluded files for some tests:

`chkrootkit -e "{{path/to/file}}"`

- Specify a directory as the [r]oot for testing (e.g. mounted `ext` drives):

`chkrootkit -r {{path/to/directory}}`

- Ignore [n]fs-mounted directories:

`chkrootkit -n`

- Invoke [T]ests and ignore specific filesystem types:

`chkrootkit -T {{filesystemtype}}`

- Generate [l]ist of available tests:

`chkrootkit -l`
