---
title: "GitHub Release - Manage Releases | Free DevTools"
name: gh-release
path: /freedevtools/tldr/common/gh-release
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-release/"
description: "Manage GitHub releases quickly with gh-release. Create, delete, download, and upload release assets directly from the command line. Free online tool, no registration required."
category: common
keywords:
- github release manager
- github release command line
- gh release create
- gh release delete
- gh release upload
- gh release download
- github release automation
- git release tools
- github release assets
- command line github release
features:
- List releases in a GitHub repository.
- Display information about a specific GitHub release.
- Create new releases with custom tags.
- Delete specific releases from the repository.
- Download assets from existing releases.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh release

> Manage GitHub releases.
> More information: <https://cli.github.com/manual/gh_release>.

- List releases in a GitHub repository, limited to 30 items:

`gh release list`

- Display information about a specific release:

`gh release view {{tag}}`

- Create a new release:

`gh release create {{tag}}`

- Delete a specific release:

`gh release delete {{tag}}`

- Download assets from a specific release:

`gh release download {{tag}}`

- Upload assets to a specific release:

`gh release upload {{tag}} {{path/to/file1 path/to/file2 ...}}`
