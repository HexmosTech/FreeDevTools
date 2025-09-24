---
title: "Create Laravel Projects - Installer | Online Free DevTools by Hexmos"
name: laravel
path: /freedevtools/tldr/common/laravel
canonical: "https://hexmos.com/freedevtools/tldr/common/laravel/"
description: "Create Laravel projects easily with Laravel Installer. Quickly set up new applications, manage dependencies, and scaffold your development environment. Free online tool, no registration required."
category: common
keywords:
- Laravel project installer
- PHP framework installation
- Laravel application creation
- Composer Laravel package
- Laravel Jetstream scaffolding
- PHP web development
- Laravel command-line interface
- Application deployment Laravel
- Database setup Laravel
- Laravel project management
features:
- Create new Laravel applications
- Install Laravel Jetstream scaffolding
- Force overwrite existing directories
- Use the latest development release
- List available installer commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# laravel

> Installer for the Laravel framework.
> More information: <https://laravel.com/docs/installation>.

- Create a new Laravel application:

`laravel new {{name}}`

- Use the latest development release:

`laravel new {{name}} --dev`

- Overwrite if the directory already exists:

`laravel new {{name}} --force`

- Install the Laravel Jetstream scaffolding:

`laravel new {{name}} --jet`

- Install the Laravel Jetstream scaffolding with a specific stack:

`laravel new {{name}} --jet --stack {{livewire|inertia}}`

- Install the Laravel Jetstream scaffolding with support for teams:

`laravel new {{name}} --jet --teams`

- List the available installer commands:

`laravel list`
