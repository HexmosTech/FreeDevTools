---
title: "Compile LaTeX Files - Tectonic Engine | Online Free DevTools by Hexmos"
name: tectonic
path: "/freedevtools/tldr/common/tectonic"
canonical: "https://hexmos.com/freedevtools/tldr/common/tectonic/"
description: "Compile LaTeX documents quickly with Tectonic Engine. Generate PDFs from TeX files using this modern self-contained TeX distribution. Free online tool, no registration required."
category: common
keywords:
- LaTeX compiler
- TeX typesetting
- PDF generator
- Tectonic LaTeX engine
- Command-line LaTeX
- Cross-platform LaTeX
- TeX document build
- LaTeX project manager
- Synctex support
- LaTeX build automation
features:
- Compile TeX/LaTeX files into PDF documents
- Generate synctex data for source-PDF synchronization
- Initialize a new Tectonic project
- Build existing Tectonic projects
- Watch for changes and automatically rebuild projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tectonic

> A modern, self-contained TeX/LaTeX engine.
> More information: <https://tectonic-typesetting.github.io/book/latest>.

- Compile a standalone TeX/LaTeX file:

`tectonic -X compile {{path/to/file.tex}}`

- Compile a standalone TeX/LaTeX file with synctex data:

`tectonic -X compile --synctex {{path/to/file.tex}}`

- Initialize a tectonic project in the current directory:

`tectonic -X init`

- Initialize a tectonic project in the specified directory:

`tectonic -X new {{project_name}}`

- Build the project in the current directory:

`tectonic -X build`

- Start a watcher to build the project in the current directory on change:

`tectonic -X watch`
