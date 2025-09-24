---
title: "Generate Static Sites - Control Site Building with Hugo | Online Free DevTools by Hexmos"
name: hugo
path: /freedevtools/tldr/common/hugo
canonical: "https://hexmos.com/freedevtools/tldr/common/hugo/"
description: "Generate static sites quickly and easily with Hugo. Build and manage websites using themes, templates, and components. Free online tool, no registration required."
category: common
keywords:
- static site generator
- hugo static site
- hugo theme builder
- hugo module management
- website deployment
- website builder
- static website generator
- gohugo commands
- hugo server
- hugo build
features:
- Generate new Hugo sites
- Create custom Hugo themes
- Build websites from markdown content
- Automatically reload on page edits
- Build sites with draft content included
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hugo

> Template-based static site generator. Uses modules, components, and themes.
> Some subcommands such as `server` have their own usage documentation.
> More information: <https://gohugo.io/commands/>.

- Create a new Hugo site:

`hugo new site {{path/to/site}}`

- Create a new Hugo theme (themes may also be downloaded from <https://themes.gohugo.io/>):

`hugo new theme {{theme_name}}`

- Create a new page:

`hugo new {{section_name}}/{{page_name}}`

- Build a site to the `./public/` directory:

`hugo`

- Build a site including pages that are marked as a "draft":

`hugo {{[-D|--buildDrafts]}}`

- Build a site on your local IP:

`hugo server --bind {{local_ip}} {{[-b|--baseURL]}} {{http://local_ip}}`

- Build a site to a given directory:

`hugo {{[-d|--destination]}} {{path/to/destination}}`

- Build a site, start up a webserver to serve it, and automatically reload when pages are edited:

`hugo server`
