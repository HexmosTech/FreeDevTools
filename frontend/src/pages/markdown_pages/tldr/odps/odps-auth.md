---
title: "Create ODPS Authorities - Manage User Access | Online Free DevTools by Hexmos"
name: odps-auth
path: /freedevtools/tldr/odps/odps-auth
canonical: "https://hexmos.com/freedevtools/tldr/odps/odps-auth/"
description: "Create ODPS authorities with this command. Manage user access and permissions in Alibaba Cloud's Open Data Processing Service (ODPS). Free online tool, no registration required."
category: common
keywords:
- ODPS user authority
- ODPS role management
- Alibaba Cloud ODPS access control
- Grant ODPS permissions
- ODPS command line tool
- ODPS access management
- ODPS user role creation
- ODPS privilege control
- ODPS data security
- ODPS command-line interface
features:
- Add users to an ODPS project.
- Grant specific authorities to users or roles.
- Show authorities granted to a specific user.
- Create and manage user roles for simplified permission assignment.
- Describe the permissions associated with a specific role.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# odps auth

> User authorities in ODPS (Open Data Processing Service).
> See also: `odps`.
> More information: <https://www.alibabacloud.com/help/doc-detail/27971.htm>.

- Add a user to the current project:

`add user {{username}};`

- Grant a set of authorities to a user:

`grant {{action_list}} on {{object_type}} {{object_name}} to user {{username}};`

- Show authorities of a user:

`show grants for {{username}};`

- Create a user role:

`create role {{role_name}};`

- Grant a set of authorities to a role:

`grant {{action_list}} on {{object_type}} {{object_name}} to role {{role_name}};`

- Describe authorities of a role:

`desc role {{role_name}};`

- Grant a role to a user:

`grant {{role_name}} to {{username}};`
