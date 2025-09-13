---
title: "Manage Patches with Quilt - Patch Management | Free DevTools"
name: quilt
path: /freedevtools/tldr/common/quilt
canonical: "https://hexmos.com/freedevtools/tldr/common/quilt/"
description: "Manage code patches with Quilt, a powerful patch management tool. Import, create, and refresh patches with ease. Free online tool, no registration required."
category: common
keywords:
- Quilt patch management
- Quilt patch series
- Quilt import patch
- Quilt create patch
- Quilt refresh patch
- Quilt push patch
- Quilt pop patch
- Linux patch management
- Code patch manager
- Software patch utility
features:
- Import existing patches from files
- Create new patches for code changes
- Add files to a current patch
- Refresh patches with updated changes
- Apply and remove patches from a series
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# quilt

> Manage a series of patches.
> More information: <https://manned.org/quilt>.

- Import an existing patch from a file:

`quilt import {{path/to/filename.patch}}`

- Create a new patch:

`quilt new {{filename.patch}}`

- Add a file to the current patch:

`quilt add {{path/to/file}}`

- After editing the file, refresh the current patch with the changes:

`quilt refresh`

- Apply all the patches in the series file:

`quilt push -a`

- Remove all applied patches:

`quilt pop -a`
