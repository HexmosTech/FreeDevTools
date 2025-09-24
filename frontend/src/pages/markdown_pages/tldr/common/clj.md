---
title: "Clojure REPL - Start Interactive Shell | Online Free DevTools by Hexmos"
name: clj
path: /freedevtools/tldr/common/clj
canonical: "https://hexmos.com/freedevtools/tldr/common/clj/"
description: "Start Clojure REPL with clj for interactive development and function execution. Resolve dependencies and manage ClojureScript projects easily. Free online tool, no registration required."
category: common
keywords:
- clojure repl
- clojure interactive shell
- clojure function execution
- clojure dependency management
- clojure repl server
- clojurescript repl
- clj repl
- clj function
- deps.edn clojure
- clojure cider nrepl
features:
- Start an interactive Clojure REPL environment
- Execute Clojure functions from the command line
- Resolve project dependencies defined in deps.edn
- Launch a ClojureScript REPL with browser integration
- Start an nREPL server with CIDER middleware for enhanced development
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clj

> Clojure tool to start a REPL or invoke a function with data.
> All options can be defined in a `deps.edn` file.
> More information: <https://clojure.org/guides/deps_and_cli>.

- Start a REPL (interactive shell):

`clj`

- Execute a function:

`clj -X {{namespace/function_name}}`

- Run the main function of a specified namespace:

`clj -M {{[-m|--main]}} {{namespace}} {{args}}`

- Prepare a project by resolving dependencies, downloading libraries, and making/caching classpaths:

`clj -P`

- Start an nREPL server with the CIDER middleware:

`clj -Sdeps '{:deps {nrepl {:mvn/version "0.7.0"} cider/cider-nrepl {:mvn/version "0.25.2"}}}' {{[-m|--main]}} nrepl.cmdline --middleware '["cider.nrepl/cider-middleware"]' --interactive`

- Start a REPL for ClojureScript and open a web browser:

`clj -Sdeps '{:deps {org.clojure/clojurescript {:mvn/version "1.10.758"}}}' {{[-m|--main]}} cljs.main {{[-r|--repl]}}`
