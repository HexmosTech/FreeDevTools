---
title: "Diffoscope - Compare Files and Directories | Online Free DevTools by Hexmos"
name: diffoscope
path: /freedevtools/tldr/common/diffoscope
canonical: "https://hexmos.com/freedevtools/tldr/common/diffoscope/"
description: "Compare files and directories effortlessly with Diffoscope. Analyze archives and identify differences between versions for effective debugging. Free online tool, no registration required."
category: common
keywords:
- file comparison
- directory comparison
- archive analysis
- diff tool
- file analyzer
- directory analyzer
- diffoscope linux
- diffoscope compare
- file versioning
- directory versioning
features:
- Compare files and directories recursively
- Generate HTML reports for detailed analysis
- Exclude files based on pattern matching
- Control directory metadata comparison behavior
- Display or suppress progress bar during comparison
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# diffoscope

> Compare files, archives, and directories.
> More information: <https://diffoscope.org>.

- Compare two files:

`diffoscope {{path/to/file1}} {{path/to/file2}}`

- Compare two files without displaying a progress bar:

`diffoscope --no-progress {{path/to/file1}} {{path/to/file2}}`

- Compare two files and write an HTML-report to a file (use `-` for `stdout`):

`diffoscope --html {{path/to/outfile|-}} {{path/to/file1}} {{path/to/file2}}`

- Compare two directories excluding files with a name matching a specified pattern:

`diffoscope --exclude {{pattern}} {{path/to/directory1}} {{path/to/directory2}}`

- Compare two directories and control whether directory metadata is considered:

`diffoscope --exclude-directory-metadata {{auto|yes|no|recursive}} {{path/to/directory1}} {{path/to/directory2}}`
