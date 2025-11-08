---
title: "Manage Elasticsearch Users - Create & Delete Users | Online Free DevTools by Hexmos"
name: elasticsearch-users
path: "/freedevtools/tldr/elasticsearch/elasticsearch-users/"
canonical: "https://hexmos.com/freedevtools/tldr/elasticsearch/elasticsearch-users/"
description: "Manage Elasticsearch users with elasticsearch-users. Secure your cluster by creating, updating, and deleting native realm users. Free online tool, no registration required."
category: common
keywords:
- Elasticsearch user management
- Elasticsearch create user
- Elasticsearch delete user
- Elasticsearch role management
- Elasticsearch native realm
- Elasticsearch useradd command
- Elasticsearch passwd command
- Elasticsearch userdel command
- Elasticsearch user list
- Elasticsearch security
features:
- Add new Elasticsearch users interactively
- Assign roles to Elasticsearch users
- Change existing Elasticsearch user passwords
- Delete Elasticsearch users
- List all Elasticsearch users in the native realm
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# elasticsearch-users

> Manage native realm users in Elasticsearch, including creating, updating, and deleting users.
> More information: <https://www.elastic.co/guide/en/elasticsearch/reference/current/users-command.html>.

- Add a new user interactively (prompts for password):

`elasticsearch-users useradd {{username}}`

- Add a new user and specify roles:

`elasticsearch-users useradd {{username}} -r {{role1,role2}}`

- Change the password for an existing user:

`elasticsearch-users passwd {{username}}`

- Delete a user:

`elasticsearch-users userdel {{username}}`

- List all users in the native realm:

`elasticsearch-users list`
