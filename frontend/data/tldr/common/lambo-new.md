---
title: "Create Laravel Projects - Lambo New Command | Online Free DevTools by Hexmos"
name: lambo-new
path: "/freedevtools/tldr/common/lambo-new/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lambo-new/"
description: "Create Laravel applications quickly with Lambo New. Scaffold new projects, install dependencies, and configure databases easily. Free online tool, no registration required."
category: common
keywords:
- Laravel project creator
- Lambo application generator
- Valet site creation
- Laravel scaffolding tool
- PHP project initialization
- Command line Laravel setup
- Database setup automation
- Authentication scaffolding tool
- Frontend template installer
- Dependency management tool
features:
- Scaffold new Laravel applications
- Install npm dependencies automatically
- Create and link Valet sites
- Configure databases during project creation
- Add authentication scaffolding
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lambo new

> A super-powered `laravel new` for Laravel and Valet.
> More information: <https://github.com/tighten/lambo>.

- Create a new Laravel application:

`lambo new {{app_name}}`

- Install the application in a specific path:

`lambo new --path={{path/to/directory}} {{app_name}}`

- Include authentication scaffolding:

`lambo new --auth {{app_name}}`

- Include a specific frontend:

`lambo new --{{vue|bootstrap|react}} {{app_name}}`

- Install `npm` dependencies after the project has been created:

`lambo new --node {{app_name}}`

- Create a Valet site after the project has been created:

`lambo new --link {{app_name}}`

- Create a new MySQL database with the same name as the project:

`lambo new --create-db --dbuser={{user}} --dbpassword={{password}} {{app_name}}`

- Open a specific editor after the project has been created:

`lambo new --editor="{{editor}}" {{app_name}}`
