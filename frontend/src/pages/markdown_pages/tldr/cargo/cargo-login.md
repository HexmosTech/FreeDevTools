---
title: "Cargo Login - Save API Token | Online Free DevTools by Hexmos"
name: cargo-login
path: /freedevtools/tldr/cargo/cargo-login
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-login/"
description: "Save API token for Rust packages with Cargo Login. Securely store credentials and authenticate with registries. Free online tool, no registration required."
category: common
keywords:
- cargo login
- rust package manager
- api token management
- cargo registry authentication
- cargo credentials storage
- rust crates.io login
- command line login
- toml credentials file
- rust authentication
- cargo logout
features:
- Save API token for package registry authentication
- Authenticate with crates.io or custom registries
- Store credentials in `$CARGO_HOME/credentials.toml`
- Specify a registry to login to
- Remove stored API token with `cargo logout`
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo login

> Save an API token from the registry locally.
> The token is used to authenticate to a package registry. You can remove it using `cargo logout`.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-login.html>.

- Add an API token to the local credential storage (located in `$CARGO_HOME/credentials.toml`):

`cargo login`

- Use the specified registry (registry names can be defined in the configuration - the default is <https://crates.io>):

`cargo login --registry {{name}}`
