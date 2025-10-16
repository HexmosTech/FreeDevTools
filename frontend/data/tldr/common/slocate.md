---
title: "Locate Secure Files - Search Files Securely | Online Free DevTools by Hexmos"
name: slocate
path: "/freedevtools/tldr/common/slocate/"
canonical: "https://hexmos.com/freedevtools/tldr/common/slocate/"
description: "Search files securely with slocate, a secure alternative to GNU locate. Find files by name efficiently on Linux systems. Free online tool, no registration required."
category: common
keywords:
- secure file locator
- slocate command linux
- find files securely
- linux file search
- updatedb alternative
- secure locate alternative
- slocate database update
- slocate security level
- locate files by regex
- slocate configuration
features:
- Enable quiet mode to suppress error messages
- Limit the number of search results shown
- Build or update the slocate database
- Set the security level for searching
- Search for files using regular expressions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slocate

> Secure variant of GNU Locate.
> See also: `locate`.
> More information: <https://manned.org/slocate>.

- Enable quiet mode to suppress error messages:

`slocate -q`

- Limit the number of results shown:

`slocate -n {{number}}`

- Build an `slocate` database starting at path `/`:

`slocate -u`

- Build an `slocate` database starting at a given directory:

`slocate -U {{path/to/directory}}`

- Update an `slocate` database using the default `/etc/updatedb.conf` configuration:

`slocate -c`

- Set the security level of `slocate`, with `0` being disabled, and `1` being secure:

`slocate -l {{0|1}}`

- Specify the database that `slocate` should search in:

`slocate {{[-d|--database]}} {{path/to/directory}}`

- Search the `slocate` database using a specific `regex` string:

`slocate {{[-r|--regexp]}} {{regex}}`
