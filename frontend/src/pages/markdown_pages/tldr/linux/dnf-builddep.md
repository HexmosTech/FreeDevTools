---
title: "Build Dependencies - Manage Packages with dnf-builddep | Free DevTools"
name: dnf-builddep
path: /freedevtools/tldr/linux/dnf-builddep
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-builddep/"
description: "Manage package build dependencies with dnf-builddep.  Install required packages effortlessly, skip unavailable ones, and define macros. Free online tool, no registration required."
category: linux
keywords:
- dnf builddep manager
- linux package dependencies
- rpm build dependencies
- dnf package manager
- spec file dependencies
- install rpm dependencies
- build rpm package
- dnf builddep linux
- dnf plugins core
- rpm macro definition
features:
- Install dependencies for rpm packages
- Skip unavailable package dependencies during installation
- Define custom RPM macros for dependency resolution
- Install dependencies from .spec files
- Install dependencies from .rpm files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnf builddep

> Install dependencies to build a given package.
> Not default to `dnf` but supported via `dnf-plugins-core`.
> See also: `dnf`.
> More information: <https://dnf-plugins-core.readthedocs.io/en/latest/builddep.html>.

- Install dependencies for a given package:

`dnf builddep {{path/to/specification.spec}}`

- Install dependencies for a given package but ignore unavailable:

`dnf builddep --skip-unavailable {{path/to/specification.spec}}`

- Define the RPM macro to a given expression:

`dnf builddep {{[-D|--define]}} '{{expression}}'`

- Define an argument for a `.spec` file path:

`dnf builddep --spec {{argument}}`

- Define an argument for a `.rpm` file path:

`dnf builddep --srpm {{argument}}`

- Display help:

`dnf builddep --help-cmd`
