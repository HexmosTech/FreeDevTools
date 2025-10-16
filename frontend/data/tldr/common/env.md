---
title: "Environment Variables - Control Env Settings | Online Free DevTools by Hexmos"
name: env
path: "/freedevtools/tldr/common/env/"
canonical: "https://hexmos.com/freedevtools/tldr/common/env/"
description: "Control environment variables with env. Easily manage and modify environment settings for programs. Free online tool, no registration required."
category: common
keywords:
- environment variables control
- env variable management
- linux environment variables
- macos environment variables
- shell environment configuration
- program environment setup
- cli environment manager
- command line environment
- unset environment variable
- set environment variable
features:
- Display current environment variables
- Run a program with a modified environment
- Clear the environment before execution
- Remove specific variables from the environment
- Set variables for a specific program execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# env

> Show the environment or run a program in a modified environment.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/env-invocation.html>.

- Show the environment:

`env`

- Run a program. Often used in scripts after the shebang (#!) for looking up the path to the program:

`env {{program}}`

- Clear the environment and run a program:

`env {{[-i|--ignore-environment]}} {{program}}`

- Remove variable from the environment and run a program:

`env {{[-u|--unset]}} {{variable}} {{program}}`

- Set a variable and run a program:

`env {{variable}}={{value}} {{program}}`

- Set one or more variables and run a program:

`env {{variable1=value variable2=value variable3=value ...}} {{program}}`

- Run a program under a different name:

`env {{[-a|--argv0]}} {{custom_name}} {{program}}`
