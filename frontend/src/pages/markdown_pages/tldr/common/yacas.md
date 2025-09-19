---
title: "Control Yacas Algebra - Interactive Session | Online Free DevTools by Hexmos"
name: yacas
path: /freedevtools/tldr/common/yacas
canonical: "https://hexmos.com/freedevtools/tldr/common/yacas/"
description: "Control symbolic mathematics with Yacas, a general-purpose computer algebra system. Execute statements, load scripts, and automate calculations with ease. Free online tool, no registration required."
category: common
keywords:
- yacas algebra system
- computer algebra system
- symbolic computation
- mathematical calculations
- yacas script execution
- command line algebra
- automated math solver
- yacas interactive session
- algebra calculation tool
- yacas expressions processing
features:
- Start interactive Yacas sessions from the command line
- Execute mathematical statements and display results
- Load and execute Yacas scripts for automated calculations
- Perform symbolic differentiation and integration
- Automate complex mathematical operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yacas

> Yet Another Computer Algebra System.
> More information: <https://www.yacas.org>.

- Start an interactive `yacas` session:

`yacas`

- While in a `yacas` session, execute a statement:

`{{Integrate(x)Cos(x)}};`

- While in a `yacas` session, display an example:

`Example();`

- Quit from a `yacas` session:

`quit`

- Execute one or more `yacas` scripts (without terminal or prompts), then exit:

`yacas -p -c {{path/to/script1 path/to/script2 ...}}`

- Execute and print the result of one statement, then exit:

`echo "{{Echo( Deriv(x)Cos(1/x) );}}" | yacas -p -c /dev/stdin`
