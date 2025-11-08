---
title: "SFDK Scrape - Create Patches from Source Changes | Online Free DevTools by Hexmos"
name: sfdk-scrape
path: "/freedevtools/tldr/sfdk/sfdk-scrape/"
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-scrape/"
description: "Create patches easily with SFDK Scrape. Convert source code modifications into patch files for seamless code management and collaboration. Free online tool, no registration required."
category: common
keywords:
- source code patch
- patch file generation
- SFDK scrape patch
- code modification patch
- sailfishos patch creation
- git patch management
- patch file converter
- source code diff tool
- command line patch tool
- sailfishos development
features:
- Generate patch files from source code changes
- Preview commit lists before scraping
- Preserve original patch file names
- Specify output directory for patches
- Keep commits in submodules after patch creation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk scrape

> Converts source code modifications to patches.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/65-maintaining-mb2/doc/command.scrape.adoc>.

- Save source modifications as patches:

`sfdk scrape`

- Preview the list of commits to be scrapped:

`sfdk scrape {{[-n|--dry-run]}}`

- Scrape while preserving the original patches file names:

`sfdk scrape --stable`

- Scrape while saving patches to a specified [o]utput directory:

`sfdk scrape {{[-o|--output-dir]}} {{directory}}`

- Scrape without removing commits from submodules after creating patches:

`sfdk scrape --keep`
