---
title: "Stack Manager - Create Haskell Projects | Online Free DevTools by Hexmos"
name: stack
path: "/freedevtools/tldr/st/stack/"
canonical: "https://hexmos.com/freedevtools/tldr/st/stack/"
description: "Create Haskell projects easily with Stack Manager. Streamline development, build processes, and manage dependencies efficiently. Free online tool, no registration required."
category: common
keywords:
- haskell project manager
- stack build tool
- haskell package creation
- stack dependency management
- haskell project testing
- stack file watching
- stack command execution
- haskell build automation
- stack executable argument passing
- haskell project compilation
features:
- Create new Haskell packages using templates.
- Compile Haskell projects and manage dependencies.
- Run tests within Haskell packages.
- Automatically re-compile projects on file changes.
- Execute custom commands after compilation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stack

> Manage Haskell projects.
> More information: <https://github.com/commercialhaskell/stack>.

- Create a new package:

`stack new {{package}} {{template}}`

- Compile a package:

`stack build`

- Run tests inside a package:

`stack test`

- Compile a project and re-compile every time a file changes:

`stack build --file-watch`

- Compile a project and execute a command after compilation:

`stack build --exec "{{command}}"`

- Run a program and pass an argument to it:

`stack exec {{program}} -- {{argument}}`
