---
title: "Phpspec BDD - Create PHP Specifications | Online Free DevTools by Hexmos"
name: phpspec
path: /freedevtools/tldr/php/phpspec
canonical: "https://hexmos.com/freedevtools/tldr/php/phpspec/"
description: "Generate PHP specifications with Phpspec BDD. Define behavior-driven tests and ensure code quality. Free online tool, no registration required."
category: common
keywords:
- php specification
- php bdd
- behaviour driven development php
- phpspec testing
- phpspec run
- phpspec describe
- php test driven development
- php testing framework
- php unit testing
- phpspec configuration
features:
- Generate specifications for PHP classes
- Run all specifications in a project directory
- Run a specific specification file
- Use custom configuration files for specification runs
- Disable code generation prompts for faster testing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpspec

> A Behaviour Driven Development tool for PHP.
> More information: <https://phpspec.net>.

- Create a specification for a class:

`phpspec describe {{class_name}}`

- Run all specifications in the "spec" directory:

`phpspec run`

- Run a single specification:

`phpspec run {{path/to/class_specification_file}}`

- Run specifications using a specific configuration file:

`phpspec run {{[-c|--config]}} {{path/to/configuration_file}}`

- Run specifications using a specific bootstrap file:

`phpspec run {{[-b|--bootstrap]}} {{path/to/bootstrap_file}}`

- Disable code generation prompts:

`phpspec run --no-code-generation`

- Enable fake return values:

`phpspec run --fake`
