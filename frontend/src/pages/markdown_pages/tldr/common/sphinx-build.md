---
title: "Generate Documentation with Sphinx-build | Free DevTools"
name: sphinx-build
path: /freedevtools/tldr/common/sphinx-build
canonical: "https://hexmos.com/freedevtools/tldr/common/sphinx-build/"
description: "Generate documentation with Sphinx-build. Build HTML, LaTeX, and more from reStructuredText sources. Free online tool, no registration required."
category: common
keywords:
- documentation generator
- sphinx documentation
- restructuredtext to html
- rst to html
- documentation builder
- sphinx builder
- documentation compiler
- readthedocs documentation
- python documentation
- documentation tool
features:
- Generates documentation in various formats (HTML, LaTeX, ePub, etc.).
- Supports reStructuredText as the source format.
- Integrates with ReadTheDocs for online hosting.
- Automates the documentation build process.
- Can be customized with extensions and themes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sphinx-build

> Sphinx documentation generator.
> More information: <https://www.sphinx-doc.org/en/master/man/sphinx-build.html>.

- Build documentation:

`sphinx-build {{[-b|--builder]}} {{html|epub|text|latex|man|...}} {{path/to/source_dir}} {{path/to/build_dir}}`

- Build documentations intended for readthedocs.io (requires the sphinx-rtd-theme pip package):

`sphinx-build {{[-b|--builder]}} {{html}} {{path/to/docs_dir}} {{path/to/build_dir}}`
