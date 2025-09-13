---
title: "Create Ada Packages - Manage Projects with Alr | Free DevTools"
name: alr
path: /freedevtools/tldr/common/alr
canonical: "https://hexmos.com/freedevtools/tldr/common/alr/"
description: "Create Ada packages with Alr, the Ada package manager. Manage dependencies, build projects, and run binaries effortlessly. Free online tool, no registration required."
category: common
keywords:
- Ada package manager
- Ada dependency management
- Alire Ada toolchain
- Ada build tool
- Ada library manager
- Ada project initialization
- Ada crate management
- Ada binary runner
- Ada compiler
- Ada development tools
features:
- Initialize Ada binary or library projects
- Add dependencies to Ada projects
- Run compiled Ada binaries directly
- Compile Ada projects in different modes (release, development, validation)
- Manage Ada toolchains and libraries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# alr

> Ada package manager.
> Manage Ada toolchains, dependencies, tools and libraries.
> More information: <https://alire.ada.dev/docs/#first-steps>.

- Create a binary or library project:

`alr init {{--bin|--lib}} {{project_name}}`

- Add a dependency to the project:

`alr add {{crate}}`

- Run the compiled binary (no need to do `build` before):

`alr run`

- Compile the project:

`alr build {{--release|--development|--validation}}`
