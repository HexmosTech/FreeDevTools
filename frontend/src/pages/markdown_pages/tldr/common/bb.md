---
title: "Babashka Interpreter - Execute Clojure Scripts | Online Free DevTools by Hexmos"
name: bb
path: /freedevtools/tldr/common/bb
canonical: "https://hexmos.com/freedevtools/tldr/common/bb/"
description: "Execute Clojure scripts swiftly with Babashka Interpreter. Effortlessly run Clojure code for scripting tasks and interactive evaluations. Free online tool, no registration required."
category: common
keywords:
- clojure interpreter
- clojure scripting
- babashka scripting
- babashka clojure
- clojure runtime
- babashka interpreter linux
- babashka interpreter macos
- clojure script execution
- babashka script runner
- clojure command line
features:
- Evaluate Clojure expressions directly from the command line.
- Execute Clojure scripts from a specified file path.
- Process data from standard input as a sequence of lines.
- Process data from standard input as a sequence of EDN values.
- Script Clojure projects without the JVM.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bb

> Native Clojure interpreter for scripting.
> More information: <https://book.babashka.org/#usage>.

- Evaluate an expression:

`bb {{[-e|--eval]}} "(+ 1 2 3)"`

- Evaluate a script file:

`bb {{[-f|--file]}} {{path/to/script.clj}}`

- Bind [i]nput to a sequence of lines from `stdin`:

`printf "first\nsecond" | bb -i "(map clojure.string/capitalize *input*)"`

- Bind [I]nput to a sequence of EDN (Extensible Data Notation) values from `stdin`:

`echo "{:key 'val}" | bb -I "(:key (first *input*))"`
