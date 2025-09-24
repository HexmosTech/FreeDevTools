---
title: "Validate REUSE Compliance - Manage License and Copyright Info | Online Free DevTools by Hexmos"
name: reuse
path: "/freedevtools/tldr/common/reuse"
canonical: "https://hexmos.com/freedevtools/tldr/common/reuse/"
description: "Validate REUSE compliance with REUSE. Manage license and copyright information efficiently for your projects. Free online tool, no registration required."
category: common
keywords:
- REUSE compliance validation
- SPDX license identifier
- Copyright statement generator
- Software license manager
- Open source licensing
- Metadata verification
- License compliance checker
- REUSE lint command
- Project license downloader
- Software copyright management
features:
- Lint projects for REUSE compliance
- Annotate files with copyright statements
- Add license information to files
- Download licenses by SPDX identifier
- Download all missing licenses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# reuse

> Tool for compliance with the REUSE recommendations.
> More information: <https://reuse.readthedocs.io/en/stable/man/index.html>.

- Lint for REUSE compliance for the current project (version control aware):

`reuse lint`

- Lint for REUSE compliance from the specified directory:

`reuse --root {{path/to/directory}} lint`

- Add copyright statement to file:

`reuse annotate {{[-c|--copyright]}} "{{your_name}} <{{your_email}}>" --fallback-dot-license {{path/to/file}}`

- Add licence information to file:

`reuse annotate {{[-l|--license]}} {{spdx_identifier}} --fallback-dot-license {{path/to/file}}`

- Download a license by its SPDX identifier and place it in the LICENSES directory:

`reuse download {{spdx-identifier}}`

- Download all missing licenses detected in the project:

`reuse download --all`
