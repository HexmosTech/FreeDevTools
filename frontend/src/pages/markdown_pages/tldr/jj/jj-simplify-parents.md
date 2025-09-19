---
title: "Simplify Parents - Control JJ Revisions | Online Free DevTools by Hexmos"
name: jj-simplify-parents
path: /freedevtools/tldr/jj/jj-simplify-parents
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-simplify-parents/"
description: "Control JJ revisions with Simplify Parents. Effortlessly manage parent edges and optimize your repository history. Free online tool, no registration required."
category: common
keywords:
- jj revision control
- simplify jj history
- jj parent edge management
- jj commit graph optimization
- jj repository cleaner
- jj revision simplifier
- version control simplification
- directed acyclic graph tools
- jj dag manipulation
- jj history rewriting
features:
- Simplify parent edges of specified revisions
- Optimize repository history for clarity
- Reduce commit graph complexity
- Rewrite history to remove unnecessary branches
- Handle revision history in JJ VCS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj simplify-parents

> Simplify parent edges for the specified revision(s).
> For example, "A -> B -> C | A -> C" gets simplified to "A -> B -> C".
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-simplify-parents>.

- Simplify parent edges of given revisions:

`jj simplify-parents {{[-r|--revisions]}} {{revsets}}`

- Simplify parent edges of given revisions and trees of their descendants:

`jj simplify-parents {{[-s|--source]}} {{revsets}}`
