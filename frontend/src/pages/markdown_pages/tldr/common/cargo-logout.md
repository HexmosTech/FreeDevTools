---
title: "Cargo Logout - Remove API Token | Free DevTools"
name: cargo-logout
path: /freedevtools/tldr/common/cargo-logout
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-logout/"
description: "Remove Cargo API tokens easily with Cargo Logout. Securely manage your Rust package registry credentials from the command line. Free online tool, no registration required."
category: common
keywords:
- cargo logout
- rust cargo logout
- cargo registry authentication
- rust package management
- cargo credentials management
- cargo api token
- cargo crates.io
- rust authentication
- cargo configuration
- rust registry
features:
- Remove API tokens from local storage
- Manage cargo registry credentials
- Specify the registry to logout from
- Securely remove cargo authentication tokens
- Clear cargo registry login information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo logout

> Remove an API token from the registry locally.
> The token is used to authenticate to a package registry. You can add it back using `cargo login`.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-logout.html>.

- Remove an API token from the local credential storage (located in `$CARGO_HOME/credentials.toml`):

`cargo logout`

- Use the specified registry (registry names can be defined in the configuration - the default is <https://crates.io>):

`cargo logout --registry {{name}}`
