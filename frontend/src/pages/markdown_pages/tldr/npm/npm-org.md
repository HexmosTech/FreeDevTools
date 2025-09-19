---
title: "NPM Org - Manage Organization Memberships | Online Free DevTools by Hexmos"
name: npm-org
path: /freedevtools/tldr/npm/npm-org
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-org/"
description: "Manage NPM organization memberships efficiently with NPM Org. Add users, change roles, and list organization members. Free online tool, no registration required."
category: common
keywords:
- npm organization management
- npm user role
- npm add user to org
- npm remove user from org
- npm organization list
- npm organization developer
- npm organization admin
- npm organization owner
- npm cli org
- npm org membership
features:
- Add users to NPM organizations.
- Change user roles within NPM organizations.
- Remove users from NPM organizations.
- List all users within an NPM organization.
- Display a specific user's role in an NPM organization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm org

> Manage organizations.
> More information: <https://docs.npmjs.com/cli/npm-org>.

- Add a new user to an organization:

`npm org set {{organization_name}} {{username}}`

- Change a user's role in an organization:

`npm org set {{organization_name}} {{username}} {{developer|admin|owner}}`

- Remove a user from an organization:

`npm org rm {{organization_name}} {{username}}`

- List all users in an organization:

`npm org ls {{organization_name}}`

- List all users in an organization, output in JSON format:

`npm org ls {{organization_name}} --json`

- Display a user's role in an organization:

`npm org ls {{organization_name}} {{username}}`
