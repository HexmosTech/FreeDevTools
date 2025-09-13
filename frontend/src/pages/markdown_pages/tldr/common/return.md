---
title: "Control Function Return - Exit Early | Free DevTools"
name: return
path: /freedevtools/tldr/common/return
canonical: "https://hexmos.com/freedevtools/tldr/common/return/"
description: "Control function return with this simple command. Exit functions early and specify return values in shell scripts. Free online tool, no registration required."
category: common
keywords:
- Bash function return
- Shell script exit
- Function exit code
- Bash return value
- Linux function control
- macOS script return
- Command-line return
- Bash script control
- Shell function return
- Common return command
features:
- Exit a function prematurely
- Specify a function's return value
- Control script execution flow
- Manage exit codes in scripts
- Terminate functions conditionally
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# return

> Exit a function or a script if run with `source`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-return>.

- Exit a function prematurely:

`{{func_name}}() { {{echo "This is reached"}}; return; {{echo "This is not"}}; }`

- Specify the function's return value:

`{{func_name}}() { return {{exit_code}}; }`
