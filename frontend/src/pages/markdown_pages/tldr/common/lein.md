---
title: "Manage Clojure Projects - With Lein | Online Free DevTools by Hexmos"
name: lein
path: /freedevtools/tldr/common/lein
canonical: "https://hexmos.com/freedevtools/tldr/common/lein/"
description: "Manage Clojure projects efficiently with Lein, the declarative configuration tool. Generate scaffolding, run tests, and package applications with ease. Free online tool, no registration required."
category: common
keywords:
- clojure project manager
- lein clojure
- clojure dependency management
- clojure build tool
- clojure repl
- clojure uberjar
- leiningen clojure
- lein command line
- clojure scaffolding
- clojure testing
features:
- Generate new Clojure project scaffolding from templates
- Start an interactive REPL session for Clojure development
- Run a Clojure project's main function with arguments
- Execute project tests using command line
- Package Clojure project and dependencies into a single JAR file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lein

> Manage Clojure projects with declarative configuration.
> More information: <https://leiningen.org>.

- Generate scaffolding for a new project based on a template:

`lein new {{template_name}} {{project_name}}`

- Start a REPL session either with the project or standalone:

`lein repl`

- Run the project's `-main` function with optional args:

`lein run {{args}}`

- Run the project's tests:

`lein test`

- Package up the project files and all its dependencies into a jar file:

`lein uberjar`
