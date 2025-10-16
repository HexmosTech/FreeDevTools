---
title: "Create User - Manage Linux Users | Online Free DevTools by Hexmos"
name: useradd
path: "/freedevtools/tldr/linux/useradd/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/useradd/"
description: "Create Linux users effortlessly with useradd. Manage user accounts, assign groups, and configure home directories. Free online tool, no registration required."
category: linux
keywords:
- linux user creation
- user account management linux
- linux useradd command
- add user linux
- linux system administration
- user group management linux
- user id linux
- shell assignment linux
- home directory creation linux
- linux user security
features:
- Create new user accounts on Linux systems.
- Assign specific user IDs during user creation.
- Configure default shells for new users.
- Add users to multiple groups simultaneously.
- Create home directories for new user accounts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# useradd

> Create a new user.
> See also: `users`, `userdel`, `usermod`.
> More information: <https://manned.org/useradd>.

- Create a new user:

`sudo useradd {{username}}`

- Create a new user with the specified user ID:

`sudo useradd {{[-u|--uid]}} {{id}} {{username}}`

- Create a new user with the specified shell:

`sudo useradd {{[-s|--shell]}} {{path/to/shell}} {{username}}`

- Create a new user belonging to additional groups (mind the lack of whitespace):

`sudo useradd {{[-G|--groups]}} {{group1,group2,...}} {{username}}`

- Create a new user with the default home directory:

`sudo useradd {{[-m|--create-home]}} {{username}}`

- Create a new user with the home directory filled by template directory files:

`sudo useradd {{[-k|--skel]}} {{path/to/template_directory}} {{[-m|--create-home]}} {{username}}`

- Create a new system user without the home directory:

`sudo useradd {{[-r|--system]}} {{username}}`
