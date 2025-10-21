---
title: 'Doctl Databases Options - Manage DigitalOcean Databases | Online Free DevTools by Hexmos'
name: doctl-databases-options
path: '/freedevtools/tldr/doctl/doctl-databases-options/'
canonical: 'https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-options/'
description: 'Manage DigitalOcean databases options with doctl. Explore database engines, regions, slugs, and versions effortlessly. Free online tool, no registration required.'
category: common
keywords:
  - doctl databases options
  - DigitalOcean database management
  - doctl command line tool
  - database engine options
  - database region selection
  - database slug retrieval
  - database version listing
  - doctl databases engines
  - doctl databases regions
  - doctl databases versions
features:
  - List available database engines
  - Retrieve available regions for an engine
  - Retrieve available slugs for an engine
  - Retrieve available versions for an engine
  - Navigate DigitalOcean database options via command line
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# doctl databases options

> Enable the navigation of available options under each database engine.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/options>.

- Run a `doctl databases options` command with an access token:

`doctl {{[d|databases]}} {{[o|options]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve a list of the available database engines:

`doctl {{[d|databases]}} {{[o|options]}} {{[eng|engines]}}`

- Retrieve a list of the available regions for a given database engine:

`doctl {{[d|databases]}} {{[o|options]}} {{[r|regions]}} --engine {{pg|mysql|redis|mongodb}}`

- Retrieve a list of the available slugs for a given database engine:

`doctl {{[d|databases]}} {{[o|options]}} {{[s|slugs]}} --engine {{pg|mysql|redis|mongodb}}`

- Retrieve a list of the available versions for a given database engine:

`doctl {{[d|databases]}} {{[o|options]}} {{[v|versions]}} --engine {{pg|mysql|redis|mongodb}}`
