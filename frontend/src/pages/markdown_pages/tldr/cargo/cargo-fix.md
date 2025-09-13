---
title: "Cargo Fix - Auto-Fix Rust Code with Cargo | Free DevTools"
name: cargo-fix
path: /freedevtools/tldr/cargo/cargo-fix
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-fix/"
description: "Auto-fix Rust code instantly with Cargo Fix. Resolve lint warnings and migrate Rust editions effortlessly using cargo command. Free online tool, no registration required."
category: common
keywords:
- cargo fix rust
- rust code fixer
- rust lint auto fix
- cargo rust edition migration
- cargo fix broken code
- rust compiler warnings fix
- cargo workspace fix
- rust cargo commands
- rust code refactoring
- rust auto code fix
features:
- Fixes code with compiler errors
- Allows fixing code in dirty working directories
- Migrates packages to newer Rust editions
- Fixes specific integration tests
- Fixes all members within a workspace
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo fix

> Automatically fix lint warnings reported by `rustc`.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-fix.html>.

- Fix code even if it already has compiler errors:

`cargo fix --broken-code`

- Fix code even if the working directory has changes:

`cargo fix --allow-dirty`

- Migrate a package to the next Rust edition:

`cargo fix --edition`

- Fix the package's library:

`cargo fix --lib`

- Fix the specified integration test:

`cargo fix --test {{name}}`

- Fix all members in the workspace:

`cargo fix --workspace`
