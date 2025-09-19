---
title: "Secure MySQL - Improve Database Security | Online Free DevTools by Hexmos"
name: mysql_secure_installation
path: /freedevtools/tldr/common/mysql_secure_installation
canonical: "https://hexmos.com/freedevtools/tldr/common/mysql_secure_installation/"
description: "Secure MySQL database installations with mysql_secure_installation. Harden your MySQL server by setting root password, removing anonymous users, and disallowing remote root login. Free online tool, no registration required."
category: common
keywords:
- MySQL security
- MySQL secure installation
- Database security setup
- MySQL hardening
- MySQL root password
- Remove anonymous MySQL users
- Disallow remote root login
- MySQL command line
- MySQL server security
- Secure MySQL database
features:
- Set the root password for MySQL installations
- Remove anonymous user accounts from MySQL
- Disallow root login remotely
- Remove the test database and access to it
- Reload privilege tables to apply changes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mysql_secure_installation

> Set up MySQL to have better security.
> More information: <https://dev.mysql.com/doc/refman/en/mysql-secure-installation.html>.

- Start an interactive setup:

`mysql_secure_installation`

- Use specific host and port:

`mysql_secure_installation --host {{host}} --port {{port}}`

- Display help:

`mysql_secure_installation --help`
