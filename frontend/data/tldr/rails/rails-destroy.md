---
title: "Rails Destroy - Remove Rails Resources | Online Free DevTools by Hexmos"
name: rails-destroy
path: "/freedevtools/tldr/rails/rails-destroy/"
canonical: "https://hexmos.com/freedevtools/tldr/rails/rails-destroy/"
description: "Destroy Rails resources with Rails Destroy. Quickly remove models, controllers, migrations, and scaffolds from your Rails application. Free online tool, no registration required."
category: common
keywords:
- rails destroy
- rails resource destruction
- rails model removal
- rails controller removal
- rails migration removal
- rails scaffold removal
- ruby on rails
- rails generators
- rails command line
- ruby development
features:
- Destroy Rails models
- Destroy Rails controllers
- Destroy Rails migrations
- Destroy Rails scaffolds
- List available generators to destroy resources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rails destroy

> Destroy Rails resources.
> More information: <https://guides.rubyonrails.org/command_line.html#bin-rails-destroy>.

- List all available generators to destroy:

`rails destroy`

- Destroy a model named Post:

`rails destroy model {{Post}}`

- Destroy a controller named Posts:

`rails destroy controller {{Posts}}`

- Destroy a migration that creates Posts:

`rails destroy migration {{CreatePosts}}`

- Destroy a scaffold for a model named Post:

`rails destroy scaffold {{Post}}`
