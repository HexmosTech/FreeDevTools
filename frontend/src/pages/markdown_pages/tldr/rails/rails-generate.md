---
title: "Rails Generate - Create Rails Templates | Online Free DevTools by Hexmos"
name: rails-generate
path: /freedevtools/tldr/rails/rails-generate
canonical: "https://hexmos.com/freedevtools/tldr/rails/rails-generate/"
description: "Generate Rails templates with Rails Generate. Quickly scaffold models, controllers, and migrations. Streamline Rails development with this free online tool, no registration required."
category: common
keywords:
- rails generate
- rails scaffolding
- ruby on rails
- rails model generator
- rails controller generator
- rails migration generator
- rails templates
- rails code generation
- ruby code generation
- rails development
features:
- Generate Rails models with specified attributes
- Generate Rails controllers with predefined actions
- Generate database migrations to modify schema
- Scaffold complete CRUD interfaces for models
- Automate Rails project setup and code creation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rails generate

> Generate new Rails templates in an existing project.
> More information: <https://guides.rubyonrails.org/command_line.html#bin-rails-generate>.

- List all available generators:

`rails generate`

- Generate a new model named Post with attributes title and body:

`rails generate model {{Post}} {{title:string}} {{body:text}}`

- Generate a new controller named Posts with actions index, show, new and create:

`rails generate controller {{Posts}} {{index}} {{show}} {{new}} {{create}}`

- Generate a new migration that adds a category attribute to an existing model called Post:

`rails generate migration {{AddCategoryToPost}} {{category:string}}`

- Generate a scaffold for a model named Post, predefining the attributes title and body:

`rails generate scaffold {{Post}} {{title:string}} {{body:text}}`
