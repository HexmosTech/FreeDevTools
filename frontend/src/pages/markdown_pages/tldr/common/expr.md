---
title: "Evaluate Expression - Manipulate Strings with Expr | Free DevTools"
name: expr
path: /freedevtools/tldr/common/expr
canonical: "https://hexmos.com/freedevtools/tldr/common/expr/"
description: "Evaluate expressions and manipulate strings with Expr. Perform arithmetic operations, substring extractions, and pattern matching. Free online tool, no registration required."
category: common
keywords:
- string evaluation
- expression evaluation
- substring extraction
- pattern matching
- arithmetic operations
- linux expr
- shell script expr
- command line expr
- text manipulation
- coreutils expr
features:
- Evaluate arithmetic expressions
- Extract substrings from strings
- Match strings against regular expressions
- Find the index of characters in a string
- Perform string manipulation tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# expr

> Evaluate expressions and manipulate strings.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/expr-invocation.html>.

- Get the length of a specific string:

`expr length "{{string}}"`

- Get the substring of a string with a specific length:

`expr substr "{{string}}" {{from}} {{length}}`

- Match a specific substring against an anchored pattern:

`expr match "{{string}}" '{{pattern}}'`

- Get the first char position from a specific set in a string:

`expr index "{{string}}" "{{chars}}"`

- Calculate a specific mathematic expression:

`expr {{expression1}} {{+|-|*|/|%}} {{expression2}}`

- Get the first expression if its value is non-zero and not null otherwise get the second one:

`expr {{expression1}} \| {{expression2}}`

- Get the first expression if both expressions are non-zero and not null otherwise get zero:

`expr {{expression1}} \& {{expression2}}`
