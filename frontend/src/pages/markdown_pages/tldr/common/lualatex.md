---
title: "Compile LaTeX - Create PDFs with LuaLaTeX | Free DevTools"
name: lualatex
path: /freedevtools/tldr/common/lualatex
canonical: "https://hexmos.com/freedevtools/tldr/common/lualatex/"
description: "Compile LaTeX documents effortlessly with LuaLaTeX. Generate PDFs from .tex files with advanced customization options. Free online tool, no registration required."
category: common
keywords:
- latex compiler
- latex to pdf
- lua latex
- tex compiler
- tex to pdf
- command line latex
- latex command
- linux latex
- macos latex
- windows latex
features:
- Compile LaTeX files to PDF format
- Run LaTeX compilation without error interruption
- Specify a custom output file name for the PDF
- Execute LaTeX commands using Lua scripting
- Integrate with other TeX-based tools and environments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lualatex

> An extended version of TeX using Lua to compile.
> More information: <https://manned.org/lualatex.1>.

- Start `texlua` to act as a Lua interpreter:

`lualatex`

- Compile a Tex file to PDF:

`lualatex {{path/to/file.tex}}`

- Compile a Tex file without error interruption:

`lualatex -interaction nonstopmode {{path/to/file.tex}}`

- Compile a Tex file with a specific output file name:

`lualatex -jobname={{filename}} {{path/to/file.tex}}`
