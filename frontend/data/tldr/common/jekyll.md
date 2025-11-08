---
title: "Generate Static Sites - Control with Jekyll | Online Free DevTools by Hexmos"
name: jekyll
path: "/freedevtools/tldr/common/jekyll/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jekyll/"
description: "Generate static websites with Jekyll. Build blogs, personal sites, and documentation effortlessly using this powerful static site generator. Free online tool, no registration required."
category: common
keywords:
- static site generator
- jekyll static site
- jekyll blog
- ruby jekyll
- jekyll serve
- jekyll build
- markdown static site
- liquid templating
- static website development
- command line static site
features:
- Generate a local development server for previewing changes
- Incrementally rebuild the site for faster development
- Build the static site for deployment
- Clean the site output directory
- Enable verbose output for detailed debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jekyll

> A simple, blog-aware, static site generator.
> More information: <https://jekyllrb.com/docs/usage/>.

- Generate a development server that will run at http://localhost:4000/:

`jekyll serve`

- Enable incremental regeneration:

`jekyll serve --incremental`

- Enable verbose output:

`jekyll serve --verbose`

- Generate the current directory into `./_site`:

`jekyll build`

- Clean the site (removes site output and `cache` directory) without building:

`jekyll clean`
