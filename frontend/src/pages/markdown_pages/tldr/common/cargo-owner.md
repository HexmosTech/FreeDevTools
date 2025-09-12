---
title: "Cargo Owner - Manage Rust Crate Owners | Free DevTools"
name: cargo-owner
path: /freedevtools/tldr/common/cargo-owner
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-owner/"
description: "Manage Rust crate owners effectively with Cargo Owner. Control access, add or remove owners and list current contributors. Free online tool, no registration required."
category: common
keywords:
- rust crate owner manager
- cargo registry access control
- rust package ownership
- crates.io owner management
- cargo owner command line
- rust package maintainer
- crate collaboration tool
- rust project administration
- cargo access permissions
- rust developer collaboration
features:
- Add users or teams as crate owners
- Remove users or teams from crate ownership
- List current owners of a specified crate
- Specify a custom registry for owner management
- Manage permissions on Rust packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo owner

> Manage the owners of a crate on the registry.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-owner.html>.

- Invite the given user or team as an owner:

`cargo owner {{[-a|--add]}} {{username|github:org_name:team_name}} {{crate}}`

- Remove the given user or team as an owner:

`cargo owner {{[-r|--remove]}} {{username|github:org_name:team_name}} {{crate}}`

- List owners of a crate:

`cargo owner {{[-l|--list]}} {{crate}}`

- Use the specified registry (registry names can be defined in the configuration - the default is <https://crates.io>):

`cargo owner --registry {{name}}`
