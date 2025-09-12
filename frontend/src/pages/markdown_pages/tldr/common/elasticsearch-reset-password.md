---
title: "Reset Elasticsearch Password - Manage User Credentials | Free DevTools"
name: elasticsearch-reset-password
path: /freedevtools/tldr/common/elasticsearch-reset-password
canonical: "https://hexmos.com/freedevtools/tldr/common/elasticsearch-reset-password/"
description: "Reset Elasticsearch passwords with elasticsearch-reset-password. Securely manage user credentials and gain control over built-in users and native realms. Free online tool, no registration required."
category: common
keywords:
- Elasticsearch password reset
- Elasticsearch user management
- Reset user credentials
- Elasticsearch command line
- Elasticsearch native realm
- Elasticsearch built-in users
- Elasticsearch security
- Elasticsearch admin
- Reset Elasticsearch password Linux
- Reset Elasticsearch password MacOS
features:
- Reset passwords for users in the native realm.
- Reset passwords for built-in users.
- Generate auto-generated passwords.
- Interactively prompt for new passwords.
- Reset passwords at a specified Elasticsearch node URL.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elasticsearch-reset-password

> Reset the passwords of users in the native realm and built-in users.
> More information: <https://www.elastic.co/docs/reference/elasticsearch/command-line-tools/reset-password>.

- Reset the password of the user to an auto-generated value and print it in the console:

`elasticsearch-reset-password {{[-u|--username]}} {{user}}`

- Prompt interactively to reset the password for a native user:

`elasticsearch-reset-password {{[-u|--username]}} {{user}} {{[-i|--interactive]}}`

- Interactively reset the password for a user at a specified Elasticsearch node URL:

`elasticsearch-reset-password --url {{host}}:{{port}} {{[-u|--username]}} {{user}} {{[-i|--interactive]}}`
