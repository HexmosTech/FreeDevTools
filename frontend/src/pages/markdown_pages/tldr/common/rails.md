---
title: "Create Rails Projects - MVC Framework | Free DevTools"
name: rails
path: /freedevtools/tldr/common/rails
canonical: "https://hexmos.com/freedevtools/tldr/common/rails/"
description: "Create projects instantly with Rails, the server-side MVC framework. Generate scaffolds, run migrations, and start servers easily. Free online tool, no registration required."
category: common
keywords:
- rails framework
- ruby on rails
- rails command line
- rails generate scaffold
- rails db migrate
- rails server
- rails console
- rails routes
- mvc framework
- ruby framework
features:
- Generate new Rails projects
- Scaffold models with predefined attributes
- Run database migrations
- List available routes
- Start a local server for development
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails

> A server-side MVC framework written in Ruby.
> Some subcommands such as `generate` have their own usage documentation.
> More information: <https://guides.rubyonrails.org/command_line.html>.

- Create a new rails project:

`rails new "{{project_name}}"`

- Generate a scaffold for a model named Post, predefining the attributes title and body:

`rails generate scaffold Post title:string body:text`

- Run migrations:

`rails db:migrate`

- List all routes:

`rails routes`

- Start local server for current project on port 3000:

`rails server`

- Start local server for current project on a specified port:

`rails server {{[-p|--port]}} "{{port}}"`

- Open console to interact with application from command-line:

`rails console`

- Check current version of rails:

`rails {{[-v|--version]}}`
