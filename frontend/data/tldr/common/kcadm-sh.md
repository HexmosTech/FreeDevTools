---
title: "Keycloak Admin - Control Keycloak Server | Online Free DevTools by Hexmos"
name: kcadm.sh
path: "/freedevtools/tldr/common/kcadm-sh/"
canonical: "https://hexmos-com/freedevtools/tldr/common/kcadm-sh/"
description: "Control Keycloak server administration with Keycloak Admin CLI. Manage users, realms, and configurations using the command line. Free online tool, no registration required."
category: common
keywords:
- Keycloak administration
- Keycloak CLI control
- Realm management
- User creation
- Server configuration
- Authentication management
- kcadm.sh commands
- Java identity management
- OpenID Connect
- Identity provider control
features:
- Authenticate Keycloak sessions via command line
- Create and manage Keycloak users
- List and retrieve Keycloak realms
- Update realm configurations with JSON files
- Perform administrative tasks on Keycloak servers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kcadm.sh

> Perform administration tasks.
> More information: <https://www.keycloak.org/docs/latest/server_admin/#admin-cli>.

- Start an authenticated session:

`kcadm.sh config credentials --server {{host}} --realm {{realm_name}} --user {{username}} --password {{password}}`

- Create a user:

`kcadm.sh create users -s username={{username}} -r {{realm_name}}`

- List all realms:

`kcadm.sh get realms`

- Update a realm with JSON config:

`kcadm.sh update realms/{{realm_name}} -f {{path/to/file.json}}`
