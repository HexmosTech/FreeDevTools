---
title: "Boot Builder - Build Clojure Projects | Online Free DevTools by Hexmos"
name: boot
path: /freedevtools/tldr/common/boot
canonical: "https://hexmos.com/freedevtools/tldr/common/boot/"
description: "Build Clojure projects effortlessly with Boot Builder. Streamline project setup, dependency management, and deployment using a single command. Free online tool, no registration required."
category: common
keywords:
- clojure project builder
- boot clj build tool
- clojure uberjar generator
- boot repl session
- clojure project scaffolding
- clojure development environment
- clojure production build
- clojure dependency management
- clojure build automation
- boot clj repl
features:
- Build Clojure projects into executable JAR files.
- Generate new Clojure project scaffolding from templates.
- Start a Clojure REPL session for interactive development.
- Build development-ready project environments.
- Build production-ready project environments.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# boot

> Build tooling for the Clojure programming language.
> More information: <https://github.com/boot-clj/boot>.

- Start a REPL session either with the project or standalone:

`boot repl`

- Build a single `uberjar`:

`boot jar`

- Generate scaffolding for a new project based on a template:

`boot --dependencies boot/new new --template {{template_name}} --name {{project_name}}`

- Build for development (if using the boot/new template):

`boot dev`

- Build for production (if using the boot/new template):

`boot prod`

- Display help for a specific task:

`boot {{task}} --help`
