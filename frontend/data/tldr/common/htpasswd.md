---
title: "Create htpasswd Files - Manage Basic Authentication | Online Free DevTools by Hexmos"
name: htpasswd
path: "/freedevtools/tldr/common/htpasswd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/htpasswd/"
description: "Create htpasswd files with htpasswd to protect web directories using basic authentication. Secure your web server. Free online tool, no registration required."
category: common
keywords:
- htpasswd file creation
- basic authentication manager
- web server password protection
- htpasswd user management
- htpasswd command linux
- apache htpasswd generator
- htpasswd file editor
- htpasswd password checker
- htpasswd command common
- htpasswd batch mode
features:
- Create htpasswd files for user authentication
- Add new users to htpasswd files
- Update existing user passwords in htpasswd files
- Delete users from htpasswd files
- Verify user passwords against an htpasswd file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# htpasswd

> Create and manage htpasswd files to protect web server directories using basic authentication.
> More information: <https://httpd.apache.org/docs/current/programs/htpasswd.html>.

- Create/overwrite htpasswd file:

`htpasswd -c {{path/to/file}} {{username}}`

- Add user to htpasswd file or update existing user:

`htpasswd {{path/to/file}} {{username}}`

- Add user to htpasswd file in batch mode without an interactive password prompt (for script usage):

`htpasswd -b {{path/to/file}} {{username}} {{password}}`

- Delete user from htpasswd file:

`htpasswd -D {{path/to/file}} {{username}}`

- Verify user password:

`htpasswd -v {{path/to/file}} {{username}}`

- Display a string with username (plain text) and password (md5):

`htpasswd -nbm {{username}} {{password}}`
