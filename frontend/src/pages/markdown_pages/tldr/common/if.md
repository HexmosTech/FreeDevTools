---
title: "Control Shell Script Flow - if Command | Online Free DevTools by Hexmos"
name: if
path: /freedevtools/tldr/common/if
canonical: "https://hexmos.com/freedevtools/tldr/common/if/"
description: "Control shell script execution with the `if` command. Implement conditional logic and automate tasks based on conditions. Free online tool, no registration required."
category: common
keywords:
- shell script if statement
- bash conditional execution
- conditional logic linux
- command line if control
- linux if conditional
- if statement example
- script conditional flow
- bash if else
- shell scripting conditionals
- if command syntax
features:
- Execute commands based on condition exit status
- Implement if/else branching in shell scripts
- Check for file or directory existence
- Verify variable definition
- Control script flow with complex conditions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# if

> Performs conditional processing in shell scripts.
> See also: `test`, `[`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Conditional-Constructs>.

- Execute the specified commands if the condition command's exit status is zero:

`if {{condition_command}}; then {{echo "Condition is true"}}; fi`

- Execute the specified commands if the condition command's exit status is not zero:

`if ! {{condition_command}}; then {{echo "Condition is true"}}; fi`

- Execute the first specified commands if the condition command's exit status is zero otherwise execute the second specified commands:

`if {{condition_command}}; then {{echo "Condition is true"}}; else {{echo "Condition is false"}}; fi`

- Check whether a [f]ile exists:

`if [[ -f {{path/to/file}} ]]; then {{echo "Condition is true"}}; fi`

- Check whether a [d]irectory exists:

`if [[ -d {{path/to/directory}} ]]; then {{echo "Condition is true"}}; fi`

- Check whether a file or directory [e]xists:

`if [[ -e {{path/to/file_or_directory}} ]]; then {{echo "Condition is true"}}; fi`

- Check whether a variable is defined:

`if [[ -n "${{variable}}" ]]; then {{echo "Condition is true"}}; fi`

- List all possible conditions (`test` is an alias to `[`; both are commonly used with `if`):

`man test`
