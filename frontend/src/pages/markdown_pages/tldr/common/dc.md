---
title: "DC Calculator - Precise Calculations with RPN | Free DevTools"
name: dc
path: /freedevtools/tldr/common/dc
canonical: "https://hexmos.com/freedevtools/tldr/common/dc/"
description: "Perform precise calculations with DC Calculator using Reverse Polish Notation. Execute scripts, calculate expressions and manage decimal precision with ease. Free online tool, no registration required."
category: common
keywords:
- rpn calculator
- arbitrary precision calculator
- dc calculator
- command line calculator
- reverse polish notation calculator
- gnu dc
- bc alternative
- qalc alternative
- linux calculator
- terminal calculator
features:
- Perform arbitrary precision calculations
- Execute dc scripts from the command line
- Specify the scale for decimal precision
- Evaluate complex mathematical expressions
- Print calculation outputs directly to the terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dc

> An arbitrary precision calculator. Uses reverse polish notation (RPN).
> See also: `bc`, `qalc`.
> More information: <https://www.gnu.org/software/bc/manual/dc-1.05/html_mono/dc.html>.

- Start an interactive session:

`dc`

- Execute a script:

`dc {{path/to/script.dc}}`

- Calculate an expression with the specified scale:

`dc {{[-e|--expression]}} '{{10}} k {{5 3 /}} p'`

- Calculate 4 times 5 (4 5 *), subtract 17 (17 -), and [p]rint the output:

`dc {{[-e|--expression]}} '4 5 * 17 - p'`

- Specify the number of decimal places to 7 (7 k), calculate 5 divided by -3 (5 _3 /) and [p]rint:

`dc {{[-e|--expression]}} '7 k 5 _3 / p'`

- Calculate the golden ratio, phi: set number of decimal places to 100 (100 k), square root of 5 (5 v) plus 1 (1 +), divided by 2 (2 /), and [p]rint result:

`dc {{[-e|--expression]}} '100 k 5 v 1 + 2 / p'`
