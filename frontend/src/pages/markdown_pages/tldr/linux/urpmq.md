---
title: "Query Package Info - Control Mageia Packages | Free DevTools"
name: urpmq
path: /freedevtools/tldr/unknown/urpmq
canonical: "https://hexmos.com/freedevtools/tldr/unknown/urpmq/"
description: "Query package information with urpmq. Find dependencies, list media sources, and search for packages using Mageia's package manager. Free online tool, no registration required."
category: unknown
keywords:
- Mageia package query
- RPM package information
- Package dependency check
- Mageia media sources list
- URPMQ search package
- Linux package management
- RPM package manager
- Mageia package database
- Command-line package query
- Dependency resolution linux
features:
- Display installable package information
- List direct and indirect package dependencies
- List required packages for an RPM file with sources
- List all configured media with their URLs
- Search for packages by keyword and display group/version/release
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# urpmq

> Query information about packages and media in Mageia.
> See also: `urpmi`, `urpmi.update`, `urpmi.addmedia`, `urpmi.removemedia`, `urpmf`, `urpme`.
> More information: <https://man.linuxreviews.org/man8/urpmq.8.html>.

- Display information about an installable package:

`urpmq -i {{package}}`

- Display direct dependencies of a package:

`urpmq --requires {{package}}`

- Display direct and indirect dependencies of a package:

`urpmq {{[-d|--requires-recursive]}} {{package}}`

- List the not installed packages needed for an RPM file with their sources:

`sudo urpmq {{[-d|--requires-recursive]}} -m --sources {{path/to/file.rpm}}`

- List all configured media with their URLs, including inactive media:

`urpmq --list-media --list-url`

- Search for a package printing [g]roup, version and [r]elease:

`urpmq -g -r {{[-y|--fuzzy]}} {{keyword}}`

- Search for a package with using its exact name:

`urpmq -g -r {{package}}`
