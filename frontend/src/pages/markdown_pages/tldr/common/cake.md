---
title: "CakePHP Framework - Control App Building | Online Free DevTools by Hexmos"
name: cake
path: /freedevtools/tldr/common/cake
canonical: "https://hexmos.com/freedevtools/tldr/common/cake/"
description: "Control CakePHP framework app building with Cake. Clear caches, manage routes, and start development servers. Free online tool, no registration required."
category: common
keywords:
- CakePHP framework
- CakePHP development
- CakePHP console
- CakePHP routing
- CakePHP cache
- CakePHP server
- CakePHP command-line
- PHP framework
- web development
- CakePHP schema
features:
- Clear application configuration caches
- Build and clear metadata cache
- List available routes within a CakePHP application
- Start a development web server for CakePHP projects
- Launch a REPL interactive shell for development
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cake

> The processor for the CakePHP framework.
> More information: <https://cakephp.org>.

- Display basic information about the current app and available commands:

`cake`

- List available routes:

`cake routes`

- Clear configuration caches:

`cake cache clear_all`

- Build the metadata cache:

`cake schema_cache build --connection {{connection}}`

- Clear the metadata cache:

`cake schema_cache clear`

- Clear a single cache table:

`cake schema_cache clear {{table_name}}`

- Start a development web server (defaults to port 8765):

`cake server`

- Start a REPL (interactive shell):

`cake console`
