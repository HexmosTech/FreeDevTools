---
title: "dotenvx - Manage Environment Variables | Free DevTools"
name: dotenvx
path: /freedevtools/tldr/common/dotenvx
canonical: "https://hexmos.com/freedevtools/tldr/common/dotenvx/"
description: "Manage environment variables securely with dotenvx. Load .env files, encrypt secrets, and manage variables efficiently using the command line. Free online tool, no registration required."
category: common
keywords:
- dotenv management
- .env file loader
- environment variable encryption
- secure variable storage
- cross-platform environment variables
- dotenvx command line tool
- .env configuration
- command line secrets
- environment variable manager
- application configuration
features:
- Load environment variables from .env files.
- Run commands with environment variables.
- Set and encrypt environment variables.
- Retrieve environment variable values.
- Manage environment variables across multiple platforms.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dotenvx

> A better `dotenv`, from the creator of `dotenv`.
> More information: <https://dotenvx.com/docs>.

- Run a command with environment variables from a `.env` file:

`dotenvx run -- {{command}}`

- Run a command with environment variables from a specific `.env` file:

`dotenvx run -f {{path/to/file.env}} -- {{command}}`

- Set an environment variable with encryption:

`dotenvx set {{key}} {{value}}`

- Set an environment variable without encryption:

`dotenvx set {{key}} {{value}} --plain`

- Return environment variables defined in a `.env` file:

`dotenvx get`

- Return the value of an environment variable defined in a `.env` file:

`dotenvx get {{key}}`

- Return all environment variables from `.env` files and OS:

`dotenvx get --all`
