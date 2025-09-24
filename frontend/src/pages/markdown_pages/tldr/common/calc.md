---
title: "Calculator - Perform Arbitrary Precision Calculations | Online Free DevTools by Hexmos"
name: calc
path: /freedevtools/tldr/common/calc
canonical: "https://hexmos.com/freedevtools/tldr/common/calc/"
description: "Perform arbitrary precision calculations with calc. Use calc for interactive terminal calculations and scripting. Free online tool, no registration required."
category: common
keywords:
- arbitrary precision calculator
- terminal calculator linux
- command line calculator
- interactive calculator
- calc math calculations
- calc scripting
- calc formatting output
- calc permission mode
- calc manual
- calc help documentation
features:
- Calculate expressions with arbitrary precision.
- Execute calculations in interactive or non-interactive mode.
- Suppress output formatting for scripting purposes.
- Switch to interactive mode after performing a calculation.
- Set a specific permission mode for calculator operations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# calc

> An interactive arbitrary-precision calculator in the terminal.
> More information: <https://manned.org/calc>.

- Start `calc` in interactive mode:

`calc`

- Perform a calculation in non-interactive mode:

`calc '{{85 * (36 / 4)}}'`

- Don't format the output (for use with [p]ipes):

`calc -p '{{4/3 * pi() * 5^3}}'`

- Perform a calculation and then switch to [i]nteractive mode:

`calc -i '{{sqrt(2)}}'`

- Start `calc` in a specific permission [m]ode (0 to 7, defaults to 7):

`calc -m {{mode}}`

- View an introduction to `calc`:

`calc help intro`

- View an overview of `calc`:

`calc help overview`

- Open the `calc` manual:

`calc help`
