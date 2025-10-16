---
title: "TeX Live Info - Show Package Information | Online Free DevTools by Hexmos"
name: tlmgr-info
path: "/freedevtools/tldr/tlmgr/tlmgr-info/"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-info/"
description: "Show TeX Live package information with tlmgr info. Manage TeX distribution, list installed packages, and inspect package details easily. Free online tool, no registration required."
category: common
keywords:
- TeX Live info
- TeX package manager
- tlmgr command
- TeX package information
- list TeX packages
- TeX distribution manager
- TeX package details
- TeX Live collections
- TeX Live schemes
- command line package manager
features:
- List all available TeX Live packages
- Show information about a specific package
- List all files contained in a package
- Display only installed packages
- Output package data in JSON format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr info

> Show information about TeX Live packages.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#info>.

- List all available TeX Live packages, prefexing installed ones with `i`:

`tlmgr info`

- List all available collections:

`tlmgr info collections`

- List all available schemes:

`tlmgr info scheme`

- Show information about a specific package:

`tlmgr info {{package}}`

- List all files contained in a specific package:

`tlmgr info {{package}} --list`

- List all installed packages:

`tlmgr info --only-installed`

- Show only specific information about a package:

`tlmgr info {{package}} --data "{{name}},{{category}},{{installed}},{{size}},{{depends}},{{...}}"`

- Print all available packages as JSON encoded array:

`tlmgr info --json`
