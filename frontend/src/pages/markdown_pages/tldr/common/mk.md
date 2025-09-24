---
title: "Mk Task Runner - Control Compilation Tasks | Online Free DevTools by Hexmos"
name: mk
path: /freedevtools/tldr/common/mk
canonical: "https://hexmos.com/freedevtools/tldr/common/mk/"
description: "Control compilation tasks with Mk task runner. Automate builds, manage dependencies, and execute custom commands for efficient development. Free online tool, no registration required."
category: common
keywords:
- mk task runner
- plan 9 mk
- compilation task runner
- mkfile build automation
- source code compilation
- build system command line
- parallel job execution
- dependency management mk
- mk target execution
- mk build tool
features:
- Execute targets defined in Mkfile
- Automate source code compilation
- Manage build dependencies
- Run jobs in parallel for faster execution
- Force updates of targets and dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mk

> Task runner for targets described in Mkfile.
> Mostly used to control the compilation of an executable from source code.
> More information: <https://doc.cat-v.org/plan_9/4th_edition/papers/mk>.

- Call the first target specified in the Mkfile (usually named "all"):

`mk`

- Call a specific target:

`mk {{target}}`

- Call a specific target, executing 4 jobs at a time in parallel:

`NPROC=4 mk {{target}}`

- Force mking of a target, even if source files are unchanged:

`mk -w{{target}} {{target}}`

- Assume all targets to be out of date. Thus, update `target` and all of its dependencies:

`mk -a {{target}}`

- Keep going as far as possible on error:

`mk -k`
