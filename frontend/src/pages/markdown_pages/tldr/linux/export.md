---
title: "Export Shell Variables - Control Environment | Online Free DevTools by Hexmos"
name: export
path: /freedevtools/tldr/linux/export
canonical: "https://hexmos.com/freedevtools/tldr/linux/export/"
description: "Control environment variables with the export command.  Set, unset, and manage environment variables for child processes easily. Free online tool, no registration required."
category: linux
keywords:
  - shell variable export
  - export environment variables
  - bash export command
  - linux export command
  - unix export command
  - export function
  - set environment variables
  - unset environment variables
  - modify PATH variable
  - shell environment management
features:
  - Set environment variables for child processes.
  - Unset environment variables.
  - Export functions to child processes.
  - Modify the PATH environment variable.
  - Display all exported variables.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# export

> Export shell variables to child processes.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-export>.

- Set an environment variable:

`export {{VARIABLE}}={{value}}`

- Unset an environment variable:

`export -n {{VARIABLE}}`

- Export a [f]unction to child processes:

`export -f {{FUNCTION_NAME}}`

- Append a pathname to the environment variable `PATH`:

`export PATH=$PATH:{{path/to/append}}`

- Display a list of active exported variables in shell command form:

`export -p`
