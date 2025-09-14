---
title: "Create Matrix User - Register Users on Linux | Free DevTools"
name: register_new_matrix_user
path: /freedevtools/tldr/linux/register_new_matrix_user
canonical: "https://hexmos.com/freedevtools/tldr/linux/register_new_matrix_user/"
description: "Create Matrix user accounts easily with register_new_matrix_user. Register new users on a Linux home server when registration is disabled. Free online tool, no registration required."
category: linux
keywords:
- matrix user creation
- linux user registration
- homeserver user management
- matrix account creation
- register matrix user command
- linux matrix administration
- homeserver configuration tool
- matrix user script linux
- matrix user account linux
- register_new_matrix_user tool
features:
- Register new Matrix users on Linux.
- Create administrator Matrix accounts.
- Configure user accounts non-interactively.
- Automate user registration process.
- Manage user registration on Matrix homeserver.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# register_new_matrix_user

> Register new users in a home server when registration has been disabled.
> More information: <https://manned.org/register_new_matrix_user>.

- Create a user interactively:

`register_new_matrix_user --config {{path/to/homeserver.yaml}}`

- Create an admin user interactively:

`register_new_matrix_user --config {{path/to/homeserver.yaml}} --admin`

- Create an admin user non-interactively (not recommended):

`register_new_matrix_user --config {{path/to/homeserver.yaml}} --user {{username}} --password {{password}} --admin`
