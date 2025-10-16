---
title: "Manage PlatformIO Teams - Create & Control | Online Free DevTools by Hexmos"
name: pio-team
path: "/freedevtools/tldr/pio/pio-team/"
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-team/"
description: "Manage PlatformIO teams efficiently with pio-team. Create, delete, add users, and update team details effortlessly. Free online tool, no registration required."
category: common
keywords:
- PlatformIO team management
- PlatformIO team create
- PlatformIO team add user
- PlatformIO team delete
- PlatformIO team list
- PlatformIO team update
- pio organization team
- PlatformIO collaboration tool
- PlatformIO team access control
- PlatformIO user management
features:
- Create new PlatformIO teams with descriptions
- Add and remove users from existing teams
- List all teams the user belongs to
- Update team names and descriptions
- Delete PlatformIO teams within an organization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio team

> Manage PlatformIO teams.
> More information: <https://docs.platformio.org/en/latest/core/userguide/team/>.

- Create a new team with the specified description:

`pio team create --description {{description}} {{organization_name}}:{{team_name}}`

- Delete a team:

`pio team destroy {{organization_name}}:{{team_name}}`

- Add a new user to a team:

`pio team add {{organization_name}}:{{team_name}} {{username}}`

- Remove a user from a team:

`pio team remove {{organization_name}}:{{team_name}} {{username}}`

- List all teams that the user is part of and their members:

`pio team list`

- List all teams in an organization:

`pio team list {{organization_name}}`

- Rename a team:

`pio team update --name {{new_team_name}} {{organization_name}}:{{team_name}}`

- Change the description of a team:

`pio team update --description {{new_description}} {{organization_name}}:{{team_name}}`
