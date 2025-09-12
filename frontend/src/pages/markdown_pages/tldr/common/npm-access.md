---
title: "Control npm Package Access - Manage Permissions | Free DevTools"
name: npm-access
path: /freedevtools/tldr/common/npm-access
canonical: "https://hexmos.com/freedevtools/tldr/common/npm-access/"
description: "Control npm package access and permissions with npm access. Manage collaborators, set package status, and configure two-factor authentication. Free online tool, no registration required."
category: common
keywords:
- npm access control
- npm package permissions
- npm collaborator management
- npm scope access
- npm package visibility
- npm two-factor authentication
- node package manager access
- npm access management
- npm publish access
- npm team access
features:
- List packages for a user or scope in npm registry.
- List collaborators on an npm package.
- Set public or private status for npm packages.
- Grant or revoke access to a specific scope or team.
- Configure two-factor authentication for npm package publishing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm access

> Set access level on published packages.
> More information: <https://docs.npmjs.com/cli/npm-access>.

- List packages for a user or scope:

`npm access list packages {{user|scope|scope:team}} {{package_name}}`

- List collaborators on a package:

`npm access list collaborators {{package_name}} {{username}}`

- Get status of a package:

`npm access get status {{package_name}}`

- Set package status (public or private):

`npm access set status {{public|private}} {{package_name}}`

- Grant access to a package:

`npm access grant {{read-only|read-write}} {{scope:team}} {{package_name}}`

- Revoke access to a package:

`npm access revoke {{scope:team}} {{package_name}}`

- Configure two-factor authentication requirement:

`npm access set mfa {{none|publish|automation}} {{package_name}}`
