---
title: "Manage npm Teams - Organize Users | Free DevTools"
name: npm-team
path: /freedevtools/tldr/npm/npm-team
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-team/"
description: "Manage npm teams to control user access within your organization with npm-team. Add, remove, create, and list teams for efficient collaboration. Free online tool, no registration required."
category: common
keywords:
- npm team management
- npm user roles
- npm organization team
- npm access control
- npm team add user
- npm team remove user
- npm team create
- npm team list
- npm registry team
- node package manager teams
features:
- Add users to npm teams within an organization.
- Remove users from existing npm teams.
- Create new npm teams for organized collaboration.
- Delete unused npm teams to maintain clean organization.
- List all teams or users within specific teams in an organization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm team

> Manage teams in an organization on the `npm` registry.
> More information: <https://docs.npmjs.com/cli/npm-team>.

- Add a user to a team in an organization:

`npm team add {{organization:team}} {{username}}`

- Remove a user from a team:

`npm team rm {{organization:team}} {{username}}`

- Create a new team in an organization:

`npm team create {{organization:team}}`

- Delete a team from an organization:

`npm team destroy {{organization:team}}`

- List all teams in an organization:

`npm team ls {{organization}}`

- List all users in a specific team:

`npm team ls {{organization:team}}`
