---
title: "Create PlatformIO Organizations - Manage Users | Free DevTools"
name: pio-org
path: /freedevtools/tldr/pio/pio-org
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-org/"
description: "Create and manage PlatformIO organizations with pio org. Control user access, list organizations, and update organization details. Free online tool, no registration required."
category: common
keywords:
- platformio organization management
- pio org create
- pio org add user
- pio organization list
- platformio user management
- pio organization delete
- platformio organization update
- platformio cli organization
- pio user access control
- platformio organization owner
features:
- Create new PlatformIO organizations
- Add and remove users from organizations
- List organizations the user belongs to
- Delete existing PlatformIO organizations
- Update organization details like name and email
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio org

> Manage PlatformIO organizations and their owners.
> More information: <https://docs.platformio.org/en/latest/core/userguide/org/>.

- Create a new organization:

`pio org create {{organization_name}}`

- Delete an organization:

`pio org destroy {{organization_name}}`

- Add a user to an organization:

`pio org add {{organization_name}} {{username}}`

- Remove a user from an organization:

`pio org remove {{organization_name}} {{username}}`

- List all organizations the current user is a member of and their owners:

`pio org list`

- Update the name, email or display name of an organization:

`pio org update --orgname {{new_organization_name}} --email {{new_email}} --displayname {{new_display_name}} {{organization_name}}`
