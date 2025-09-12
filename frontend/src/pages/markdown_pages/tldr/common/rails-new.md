---
title: "Create Rails App - Generate New Rails Projects | Free DevTools"
name: rails-new
path: /freedevtools/tldr/common/rails-new
canonical: "https://hexmos.com/freedevtools/tldr/common/rails-new/"
description: "Create Rails applications instantly with Rails new. Generate API-only apps, specify databases, and skip JavaScript generation. Free online tool, no registration required."
category: common
keywords:
- Rails application generator
- Rails new command
- Ruby on Rails project
- Rails API creation
- Rails database configuration
- Rails JavaScript skip
- Rails project scaffolding
- Rails application development
- Ruby on Rails command line
- Rails project initialization
features:
- Generate new Rails applications
- Create API-only Rails projects
- Specify database for Rails application
- Skip JavaScript file generation in Rails project
- Display help information for rails new command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails new

> Create a new Rails application.
> More information: <https://guides.rubyonrails.org/command_line.html#rails-new>.

- Create a Rails app named `blog` in the current directory:

`rails new blog`

- Create a Rails app with API-only configuration:

`rails new {{app_name}} --api`

- Create a Rails app with `postgresql` as the database:

`rails new {{app_name}} {{[-d|--database]}} postgresql`

- Create a Rails app without generating JavaScript files:

`rails new {{app_name}} {{[-J|--skip-javascript]}}`

- Display help:

`rails new {{[-h|--help]}}`
