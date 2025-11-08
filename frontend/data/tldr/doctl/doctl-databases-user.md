---
title: "Control Databases User - Manage Users with doctl | Online Free DevTools by Hexmos"
name: doctl-databases-user
path: "/freedevtools/tldr/doctl/doctl-databases-user/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-user/"
description: "Manage database users with doctl. Create, list, reset passwords, and delete database users easily. Streamline your DigitalOcean database management. Free online tool, no registration required."
category: common
keywords:
- DigitalOcean databases user control
- doctl database user management
- database user password reset
- doctl create database user
- list database users DigitalOcean
- DigitalOcean CLI databases user
- database user access control
- doctl delete database user
- mysql user management doctl
- postgres user management doctl
features:
- Create new database users
- List existing database users
- Reset user authentication passwords
- Delete database users
- Manage MySQL authentication plugins
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases user

> View details for, and create, database users.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/user>.

- Run a `doctl databases user` command with an access token:

`doctl {{[d|databases]}} {{[u|user]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve details about a database user:

`doctl {{[d|databases]}} {{[u|user]}} {{[g|get]}} {{database_id}} {{user_name}}`

- Retrieve a list of database users for a given database:

`doctl {{[d|databases]}} {{[u|user]}} {{[ls|list]}} {{database_id}}`

- Reset the auth password for a given user:

`doctl {{[d|databases]}} {{[u|user]}} {{[rs|reset]}} {{database id}} {{user_name}}`

- Reset the MySQL auth plugn for a given user:

`doctl {{[d|databases]}} {{[u|user]}} {{[rs|reset]}} {{database_id}} {{user_name}} {{caching_sha2_password|mysql_native_password}}`

- Create a user in the given database with a given username:

`doctl {{[d|databases]}} {{[u|user]}} {{[c|create]}} {{database_id}} {{user_name}}`

- Delete a user from the given database with the given username:

`doctl {{[d|databases]}} {{[u|user]}} {{[rm|delete]}} {{database_id}} {{user_name}}`
