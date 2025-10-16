---
title: "Generate Rust Docs - cargo-rustdoc | Online Free DevTools by Hexmos"
name: cargo-rustdoc
path: "/freedevtools/tldr/cargo/cargo-rustdoc/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-rustdoc/"
description: "Generate Rust documentation with cargo-rustdoc. Build API documentation, customize rustdoc options, and control linting. Free online tool, no registration required."
category: common
keywords:
- rust documentation generator
- cargo rustdoc build
- rust API documentation
- rustdoc options
- rustdoc linting
- cargo rustdoc flags
- rust package documentation
- command line documentation tool
- rustdoc configuration
- rust code documentation
features:
- Build documentation for Rust packages.
- Pass custom options to rustdoc.
- Control documentation linting.
- Document specific libraries, binaries, examples, or tests.
- Generate API documentation for Rust projects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo rustdoc

> Build the documentation of Rust packages.
> Similar to `cargo doc`, but you can pass options to `rustdoc`. See `rustdoc --help` for all available options.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-rustdoc.html>.

- Pass options to `rustdoc`:

`cargo rustdoc -- {{rustdoc_options}}`

- Warn about a documentation lint:

`cargo rustdoc -- --warn rustdoc::{{lint_name}}`

- Ignore a documentation lint:

`cargo rustdoc -- --allow rustdoc::{{lint_name}}`

- Document the package's library:

`cargo rustdoc --lib`

- Document the specified binary:

`cargo rustdoc --bin {{name}}`

- Document the specified example:

`cargo rustdoc --example {{name}}`

- Document the specified integration test:

`cargo rustdoc --test {{name}}`
