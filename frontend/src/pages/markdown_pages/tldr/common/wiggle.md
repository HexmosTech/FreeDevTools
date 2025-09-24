---
title: "Wiggle - Patch Application Tool | Online Free DevTools by Hexmos"
name: wiggle
path: /freedevtools/tldr/common/wiggle
canonical: "https://hexmos.com/freedevtools/tldr/common/wiggle/"
description: "Apply patches easily with Wiggle, resolving conflicts in patches that `patch` can't handle. Merge changes automatically and extract branches effortlessly. Free online tool, no registration required."
category: common
keywords:
  - patch application tool
  - patch conflict resolver
  - wiggle patch
  - patch merging
  - file patching linux
  - code patching macos
  - patch extractor
  - reject file merging
  - command line patch tool
  - diff application tool
features:
  - Resolve patch conflicts automatically
  - Apply changes from patch files
  - Merge changes from reject files
  - Extract specific branches from patches
  - Apply patches and save compared words
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wiggle

> A patch application tool resolving conflicts in patches that `patch` cannot handle.
> Note: Wiggle forcefully applies all changes, merging when conflicts arise, and reporting unresolvable issues.
> More information: <https://manned.org/wiggle>.

- Apply changes from the patch file to the original file:

`wiggle {{path/to/my_patch.patch}}`

- Apply changes to the output file:

`wiggle {{path/to/my_patch.patch}} {{[-o|--output]}} {{path/to/output_file.txt}}`

- Take any changes in `file.rej` that could not have been applied and merge them into a file:

`wiggle {{[-r|--replace]}} {{path/to/file}} {{path/to/file.rej}}`

- Extract one branch of a patch or merge file:

`wiggle {{[-x|--extract]}} {{path/to/my_patch.patch}}`

- Apply a patch and save the compared words to the output file:

`wiggle {{[-w|--words]}} {{path/to/my_word_patch.patch}} {{[-o|--output]}} {{path/to/word_patched_code.c}}`

- Display help about the merge function:

`wiggle {{[-m|--merge]}} {{[-h|--help]}}`
