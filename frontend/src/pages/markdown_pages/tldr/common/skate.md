---
title: "Manage Key-Value Store - Skate | Free DevTools"
name: skate
path: /freedevtools/tldr/common/skate
canonical: "https://hexmos.com/freedevtools/tldr/common/skate/"
description: "Manage key-value store data with Skate, a simple and powerful command-line tool. Quickly store, list, and delete data using a free online tool, no registration required."
category: common
keywords:
- key-value store manager
- command-line database
- skate k-v store
- data storage common
- kv store linux
- kv store macos
- charmbracelet skate tool
- terminal key-value tool
- database manager common
- skate key-value database
features:
- Store key-value pairs in default or named databases
- List keys stored in a specific database
- Delete specific keys and values from the database
- Reset and pull fresh copy from Charm Cloud
- Manage multiple databases locally
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# skate

> Simple and powerful key-value store.
> More information: <https://github.com/charmbracelet/skate>.

- Store a key and a value on the default database:

`skate set "{{key}}" "{{value}}"`

- Show your keys saved on the default database:

`skate list`

- Delete key and value from the default database:

`skate delete "{{key}}"`

- Create a new key and value in a new database:

`skate set "{{key}}"@"{{database_name}}" "{{value}}"`

- Show your keys saved in a non default database:

`skate list @"{{database_name}}"`

- Delete key and value from a specific database:

`skate delete "{{key}}"@"{{database_name}}"`

- Show the databases available:

`skate list-dbs`

- Delete local db and pull down fresh copy from Charm Cloud:

`skate reset @"{{database_name}}"`
