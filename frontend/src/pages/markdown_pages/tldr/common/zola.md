---
title: "Generate Static Sites - Control Zola Builds | Online Free DevTools by Hexmos"
name: zola
path: /freedevtools/tldr/common/zola
canonical: "https://hexmos.com/freedevtools/tldr/common/zola/"
description: "Generate static websites with Zola. Control site builds, manage output directories and preview locally with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- static site generator
- zola static site
- zola build command
- zola serve command
- zola init command
- markdown to html
- static website deployment
- static site development
- zola documentation
- static content management
features:
- Initialize a new Zola project structure
- Build the entire site into the public directory
- Specify a custom output directory for built site
- Build and serve the website using a local server
- Check for errors without writing to disk
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zola

> A static site generator in a single binary with everything built-in.
> More information: <https://www.getzola.org/documentation/getting-started/cli-usage/>.

- Create the directory structure used by Zola at the given directory:

`zola init {{my_site}}`

- Build the whole site in the `public` directory after deleting it:

`zola build`

- Build the whole site into a different directory:

`zola build --output-dir {{path/to/output_directory}}/`

- Build and serve the site using a local server (default is `127.0.0.1:1111`):

`zola serve`

- Build all pages just like the build command would, but without writing any of the results to disk:

`zola check`
