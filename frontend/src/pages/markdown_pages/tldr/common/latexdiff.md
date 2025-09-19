---
title: "Latexdiff - Determine LaTeX Differences | Online Free DevTools by Hexmos"
name: latexdiff
path: "/freedevtools/tldr/common/latexdiff"
canonical: "https://hexmos.com/freedevtools/tldr/common/latexdiff/"
description: "Determine LaTeX differences with Latexdiff. Compare LaTeX files, highlight changes, and generate diff documents effortlessly. Free online tool, no registration required."
category: common
keywords:
- latex diff tool
- latexdiff command
- tex difference finder
- compare latex files
- latex change tracker
- latex version control
- latexdiff linux
- latexdiff macos
- latexdiff windows
- latex equation diff
features:
- Highlight differences between LaTeX files
- Generate diff documents with underlines
- Support boldface highlighting for changes
- Compare equations with markup options
- Display added and deleted graphics in diffs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# latexdiff

> Determine differences between two LaTeX files.
> More information: <https://ctan.org/pkg/latexdiff>.

- Determine changes between different versions of a LaTeX file (the resulting LaTeX file can be compiled to show differences underlined):

`latexdiff {{old.tex}} {{new.tex}} > {{diff.tex}}`

- Determine changes between different versions of a LaTeX file by highlighting differences in boldface:

`latexdiff --type=BOLD {{old.tex}} {{new.tex}} > {{diff.tex}}`

- Determine changes between different versions of a LaTeX file, and display minor changes in equations with both added and deleted graphics:

`latexdiff --math-markup=fine --graphics-markup=both {{old.tex}} {{new.tex}} > {{diff.tex}}`
