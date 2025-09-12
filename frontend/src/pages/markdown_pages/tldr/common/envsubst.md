---
title: "Envsubst - Substitute Variables | Free DevTools"
name: envsubst
path: /freedevtools/tldr/common/envsubst
canonical: "https://hexmos.com/freedevtools/tldr/common/envsubst/"
description: "Substitute environment variables with Envsubst. Replace variables in strings and files. Free online tool, no registration required."
category: common
keywords:
- envsubst variable replacement
- substitute environment variables
- shell variable substitution
- envsubst command line
- linux variable substitution
- bash variable substitution
- gettext envsubst
- env variable expander
- environment string substitution
- shell script variable
features:
- Substitute environment variables in stdin to stdout
- Replace variables in an input file
- Output substitutions to a file
- Substitute variables from a defined list
- Perform variable substitution within shell scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# envsubst

> Substitutes environment variables with their value in shell format strings.
> Variables to be replaced should be in either `${var}` or `$var` format.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#envsubst-Invocation>.

- Replace environment variables in `stdin` and output to `stdout`:

`echo '{{$HOME}}' | envsubst`

- Replace environment variables in an input file and output to `stdout`:

`envsubst < {{path/to/input_file}}`

- Replace environment variables in an input file and output to a file:

`envsubst < {{path/to/input_file}} > {{path/to/output_file}}`

- Replace environment variables in an input file from a space-separated list:

`envsubst '{{$USER $SHELL $HOME}}' < {{path/to/input_file}}`
