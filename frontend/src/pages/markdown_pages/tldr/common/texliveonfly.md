---
title: "Compile LaTeX - Download Packages with texliveonfly | Free DevTools"
name: texliveonfly
path: /freedevtools/tldr/common/texliveonfly
canonical: "https://hexmos.com/freedevtools/tldr/common/texliveonfly/"
description: "Compile LaTeX documents and automatically download missing packages with texliveonfly. Streamline your LaTeX workflow and resolve dependencies on-the-fly. Free online tool, no registration required."
category: common
keywords:
- latex compiler
- texlive package manager
- tex compiler
- texlive on the fly
- latex dependency resolver
- pdflatex compiler
- texlive installer
- tex package manager
- latex document compiler
- command line latex
features:
- Automatically download missing LaTeX packages during compilation
- Use a custom LaTeX compiler
- Specify a custom TeX Live binary folder
- Compile LaTeX documents from the command line
- Resolve LaTeX dependencies on-the-fly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# texliveonfly

> Downloads missing TeX Live packages while compiling `.tex` files.
> More information: <https://ctan.org/tex-archive/support/texliveonfly>.

- Download missing packages while compiling:

`texliveonfly {{source.tex}}`

- Use a specific compiler (defaults to `pdflatex`):

`texliveonfly {{[-c|--compiler]}} {{compiler}} {{source.tex}}`

- Use a custom TeX Live `bin` folder:

`texliveonfly --texlive_bin={{path/to/texlive_bin}} {{source.tex}}`
