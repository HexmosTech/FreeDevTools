---
title: "Generate PHP Documentation - phpDox | Online Free DevTools by Hexmos"
name: phpdox
path: /freedevtools/tldr/php/phpdox
canonical: "https://hexmos.com/freedevtools/tldr/php/phpdox/"
description: "Generate PHP documentation with phpDox. Automate the process of creating API documentation and enhance code readability. Free online tool, no registration required."
category: common
keywords:
- PHP documentation generator
- phpDox documentation
- PHP API documentation
- command line documentation tool
- PHP code documentation
- generate documentation XML
- phpDox configuration
- PHP documentation tool Linux
- PHP documentation tool macOS
- PHP documentation tool Windows
features:
- Generate documentation from PHP source code
- Create annotated configuration XML files
- Customize documentation output with configuration
- Run metadata collection independently
- Run documentation generation independently
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# phpdox

> A PHP documentation generator.
> More information: <https://phpdox.net>.

- Display an annotated skeleton configuration XML file:

`phpdox --skel`

- Generate documentation for the current working directory:

`phpdox`

- Generate documentation using a specific configuration file:

`phpdox {{[-f|--file]}} {{path/to/phpdox.xml}}`

- Only run the metadata collection process:

`phpdox {{[-c|--collector]}}`

- Only run the documentation generator process:

`phpdox {{[-g|--generator]}}`
