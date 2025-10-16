---
title: "Calculator qalc - Perform Calculations | Online Free DevTools by Hexmos"
name: qalc
path: "/freedevtools/tldr/common/qalc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/qalc/"
description: "Perform calculations with qalc, a powerful command-line calculator. Convert units, evaluate expressions, and update currency rates quickly. Free online tool, no registration required."
category: common
keywords:
- command line calculator
- qalc calculator
- unit conversion tool
- currency converter command line
- mathematical expression evaluator
- linux calculator
- macos calculator
- command line arithmetic
- interactive calculator
- terminal calculator
features:
- Perform calculations non-interactively from the command line
- Launch the calculator in interactive mode
- Update currency exchange rates directly from the terminal
- Execute calculations from a file
- List available functions, prefixes, units, and variables
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qalc

> Powerful and easy to use calculator.
> See also: `bc`.
> More information: <https://qalculate.github.io/manual/qalc.html>.

- Launch in interactive mode:

`qalc {{[-i|--interactive]}}`

- Launch in terse mode (print the results only):

`qalc {{[-t|--terse]}}`

- Update currency exchange rates:

`qalc {{[-e|--exrates]}}`

- Perform calculations non-interactively:

`qalc {{66+99|2^4|6 feet to cm|1 bitcoin to USD|20 kmph to mph|...}}`

- List all supported functions/prefixes/units/variables:

`qalc --{{list-functions|list-prefixes|list-units|list-variables}}`

- Execute commands from a file:

`qalc {{[-f|--file]}} {{path/to/file}}`
