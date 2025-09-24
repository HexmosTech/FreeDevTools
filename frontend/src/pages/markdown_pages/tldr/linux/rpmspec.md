---
title: "RPM Spec - Query Package Specs on Linux | Online Free DevTools by Hexmos"
name: rpmspec
path: "/freedevtools/tldr/linux/rpmspec"
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpmspec/"
description: "Query RPM package specs with rpmspec. Inspect package metadata, list dependencies and extract build instructions. Free online tool, no registration required."
category: linux
keywords:
- rpm spec query
- linux package inspection
- rpm metadata extract
- rpm build instructions
- rpm dependency list
- rpm package details
- rpmspec command linux
- rpm spec file analysis
- rpmbuild specification
- rpm package content
features:
- List binary packages from RPM spec
- Show query format options for RPM spec
- Extract summary information from RPM spec
- Generate source RPM from RPM spec
- Parse and display RPM spec file content
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpmspec

> Query a RPM spec file.
> More information: <https://manned.org/rpmspec>.

- List binary packages which would be generated from a RPM spec file:

`rpmspec --query {{path/to/rpm.spec}}`

- List all options for `--queryformat`:

`rpmspec --querytags`

- Get summary information for single binary packages generated from a RPM spec file:

`rpmspec --query --queryformat "{{%{name}: %{summary}\n}}" {{path/to/rpm.spec}}`

- Get the source package which would be generated from a RPM spec file:

`rpmspec --query --srpm {{path/to/rpm.spec}}`

- Parse a RPM spec file to `stdout`:

`rpmspec --parse {{path/to/rpm.spec}}`
