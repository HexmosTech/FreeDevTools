---
title: "Unset Variables - Remove Shell Variables | Online Free DevTools by Hexmos"
name: unset
path: /freedevtools/tldr/common/unset
canonical: "https://hexmos.com/freedevtools/tldr/common/unset/"
description: "Remove shell variables with Unset. Easily delete variables and functions in your shell environment. Free online tool, no registration required."
category: common
keywords:
- shell variable unset
- bash variable removal
- command line unset
- shell function removal
- unset environment variable
- linux variable unset
- macos variable unset
- gnu bash unset
- remove shell variables
- delete shell functions
features:
- Remove shell variables by name
- Remove shell functions by name
- Remove multiple variables at once
- Specify variable or function removal explicitly
- Clear environment variables via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unset

> Remove shell variables or functions.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-unset>.

- Remove the variable `foo`, or if the variable doesn't exist, remove the function `foo`:

`unset {{foo}}`

- Remove the variables foo and bar:

`unset -v {{foo}} {{bar}}`

- Remove the function my_func:

`unset -f {{my_func}}`
