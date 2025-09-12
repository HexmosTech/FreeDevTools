---
title: "PIO Access - Control Resource Permissions | Free DevTools"
name: pio-access
path: /freedevtools/tldr/common/pio-access
canonical: "https://hexmos.com/freedevtools/tldr/common/pio-access/"
description: "Control PlatformIO resource access levels with PIO Access. Manage user permissions and restrict access to packages with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- pio access control
- platformio access management
- package permission manager
- pio registry permissions
- resource access level
- pio access grant
- pio access revoke
- pio access private
- pio access public
- platformio cli access
features:
- Grant user access to specific resources
- Revoke user access to specific resources
- List resources accessible to a user
- Restrict resource access to specific users
- Allow public access to a resource
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio access

> Set the access level on published resources (packages) in the registry.
> More information: <https://docs.platformio.org/en/latest/core/userguide/access/>.

- Grant a user access to a resource:

`pio access grant {{guest|maintainer|admin}} {{username}} {{resource_urn}}`

- Remove a user's access to a resource:

`pio access revoke {{username}} {{resource_urn}}`

- Show all resources that a user or team has access to and the access level:

`pio access list {{username}}`

- Restrict access to a resource to specific users or team members:

`pio access private {{resource_urn}}`

- Allow all users access to a resource:

`pio access public {{resource_urn}}`
