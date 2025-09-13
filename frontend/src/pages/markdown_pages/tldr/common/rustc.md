---
title: "Compile Rust Code - Execute Rust Programs | Free DevTools"
name: rustc
path: /freedevtools/tldr/common/rustc
canonical: "https://hexmos.com/freedevtools/tldr/common/rustc/"
description: "Compile Rust code quickly with rustc. Optimize Rust programs for size and speed. Free online tool, no registration required."
category: common
keywords:
- Rust compiler
- Rust code compilation
- Binary crate compilation
- Rust optimization
- Rust debugging
- rustc explain error
- target-specific compilation
- Rust target list
- compile Rust program
- rustup target add
features:
- Compile Rust source code into executable binaries
- Optimize compiled code for size and performance
- Generate debugging information for easier troubleshooting
- Explain error codes produced by the compiler
- Compile code for specific target architectures
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustc

> The Rust compiler.
> Rust projects usually use `cargo` instead of invoking `rustc` directly.
> More information: <https://doc.rust-lang.org/rustc>.

- Compile a binary crate:

`rustc {{path/to/main.rs}}`

- Compile with optimizations (`s` means optimize for binary size; `z` is the same with even more optimizations):

`rustc {{[-C|--codegen]}} lto {{[-C|--codegen]}} opt-level={{0|1|2|3|s|z}} {{path/to/main.rs}}`

- Compile with debugging information:

`rustc -g {{path/to/main.rs}}`

- Explain an error message:

`rustc --explain {{error_code}}`

- Compile with architecture-specific optimizations for the current CPU:

`rustc {{[-C|--codegen]}} target-cpu={{native}} {{path/to/main.rs}}`

- Display the target list (Note: You have to add a target using `rustup` first to be able to compile for it):

`rustc --print target-list`

- Compile for a specific target:

`rustc --target {{target_triple}} {{path/to/main.rs}}`
