---
title: "Local Variables - Declare Variables | Online Free DevTools by Hexmos"
name: local
path: /freedevtools/tldr/common/local
canonical: "https://hexmos.com/freedevtools/tldr/common/local/"
description: "Declare local variables instantly with Local Variables. Assign values, set attributes, and manage variable scope in shell scripts. Free online tool, no registration required."
category: common
keywords:
- bash local variables
- shell local variables
- linux local variables
- declare bash variables
- declare local variables
- bash variable scope
- shell variable scope
- bash array variable
- bash associative array
- bash readonly variable
features:
- Declare string variables with specific values
- Declare integer variables with specific values
- Declare array variables with assigned items
- Declare associative array variables with assigned key-value pairs
- Declare readonly variables to prevent modification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# local

> Declare local variables and give them attributes.
> See also: `declare`, `export`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-local>.

- Declare a string variable with the specified value:

`local {{variable}}="{{value}}"`

- Declare an integer variable with the specified value:

`local -i {{variable}}="{{value}}"`

- Declare an array variable with the specified value:

`local {{variable}}=({{item_a item_b item_c}})`

- Declare an associative array variable with the specified value:

`local -A {{variable}}=({{[key_a]=item_a [key_b]=item_b [key_c]=item_c}})`

- Declare a readonly variable with the specified value:

`local -r {{variable}}="{{value}}"`

- Display help:

`local --help`
