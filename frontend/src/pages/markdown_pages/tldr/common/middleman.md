---
title: "Generate Static Sites - Middleman Generator | Free DevTools"
name: middleman
path: /freedevtools/tldr/common/middleman
canonical: "https://hexmos.com/freedevtools/tldr/common/middleman/"
description: "Generate static websites with Middleman, the Ruby static site generator. Build, deploy, and manage your site effortlessly. Free online tool, no registration required."
category: common
keywords:
- static site generator
- ruby static site generator
- middleman static site
- middleman deploy
- middleman build
- middleman server
- website generator
- static website development
- ruby website generator
- middleman command line
features:
- Create new Middleman projects with ease.
- Start a local server for testing and development.
- Build projects for deployment to production.
- Deploy Middleman projects to remote servers.
- Customize server ports for flexible development environments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# middleman

> Static site generator written in Ruby.
> More information: <https://middlemanapp.com/basics/install/>.

- Create a new Middleman project:

`middleman init "{{project_name}}"`

- Start local server for current project on port 4567:

`middleman server`

- Start local server for current project on a specified port:

`middleman server -p "{{port}}"`

- Build the project in the current directory to prepare for deployment:

`bundle exec middleman build`

- Deploy the Middleman project in the current directory:

`middleman deploy`
