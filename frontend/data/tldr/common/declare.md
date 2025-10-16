---
title: "Declare Variables - Control Bash Shell Variables | Online Free DevTools by Hexmos"
name: declare
path: "/freedevtools/tldr/common/declare/"
canonical: "https://hexmos.com/freedevtools/tldr/common/declare/"
description: "Control Bash shell variables with Declare Variables. Define variable types, scopes, and attributes. Improve script efficiency with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- bash declare variable
- bash variable assignment
- shell variable declaration
- linux variable attributes
- bash readonly variable
- shell global variable
- bash associative array
- bash integer variable
- bash function definition
- bash variable definition
features:
- Define string variables with specific values
- Declare integer variables for arithmetic operations
- Create and initialize array variables
- Define associative arrays with key-value pairs
- Create read-only variables to prevent modification
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# declare

> Declare variables and give them attributes.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-declare>.

- Declare a string variable with the specified value:

`declare {{variable}}="{{value}}"`

- Declare an integer variable with the specified value:

`declare -i {{variable}}="{{value}}"`

- Declare an array variable with the specified value:

`declare -a {{variable}}=({{item_a item_b item_c}})`

- Declare an associative array variable with the specified value:

`declare -A {{variable}}=({{[key_a]=item_a [key_b]=item_b [key_c]=item_c}})`

- Declare a readonly string variable with the specified value:

`declare -r {{variable}}="{{value}}"`

- Declare a global variable within a function with the specified value:

`declare -g {{variable}}="{{value}}"`

- Print a function definition:

`declare -f {{function_name}}`

- Print a variable definition:

`declare -p {{variable_name}}`
