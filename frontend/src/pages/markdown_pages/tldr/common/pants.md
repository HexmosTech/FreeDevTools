---
title: "Pants Build Tool - Automate Build Processes | Free DevTools"
name: pants
path: /freedevtools/tldr/common/pants
canonical: "https://hexmos.com/freedevtools/tldr/common/pants/"
description: "Automate builds with Pants, the fast and scalable build system. Streamline development workflows, manage dependencies, and generate distributable packages. Free online tool, no registration required."
category: common
keywords:
- Python build tool
- Code formatting tool
- Code linting tool
- Package builder
- Dependency manager
- Scalable build system
- Pants build system
- Pants build tool
- Build automation
- Python project management
features:
- List project targets for building and testing
- Run all tests within a project effortlessly
- Automatically fix, format, and lint uncommitted files
- Typecheck uncommitted files and their dependencies
- Generate distributable packages for specified targets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pants

> Fast, scalable, user-friendly, open-source build and developer workflow tool.
> More information: <https://www.pantsbuild.org/stable/docs/using-pants/command-line-help>.

- List all targets:

`pants list ::`

- Run all tests:

`pants test ::`

- Fix, format, and lint only uncommitted files:

`pants --changed-since=HEAD fix fmt lint`

- Typecheck only uncommitted files and their dependents:

`pants --changed-since=HEAD --changed-dependents=transitive check`

- Create a distributable package for the specified target:

`pants package {{path/to/directory:target-name}}`

- Auto-generate BUILD file targets for new source files:

`pants tailor ::`

- Display help:

`pants help`
