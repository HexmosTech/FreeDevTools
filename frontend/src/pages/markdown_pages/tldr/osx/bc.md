---
title: "bc Calculator - Perform Precision Calculations | Online Free DevTools by Hexmos"
name: bc
path: /freedevtools/tldr/osx/bc
canonical: "https://hexmos.com/freedevtools/tldr/osx/bc/"
description: "Perform arbitrary precision calculations with the bc command-line calculator. Execute bc scripts and utilize math functions for complex computations. Free online tool, no registration required."
category: osx
keywords:
  - bc arbitrary precision calculator
  - bc command line calculator osx
  - bc math scripting osx
  - bc scale calculation osx
  - bc expression evaluator osx
  - bc mathlib functions osx
  - osx bc command examples
  - macos bc calculator
  - bc shell scripting macos
  - bc interactive mode osx
features:
  - Perform arbitrary-precision arithmetic calculations.
  - Execute bc scripts for automated computations.
  - Utilize the built-in math library for advanced functions.
  - Control the number of decimal places (scale) in calculations.
  - Interact with bc in interactive mode or via command-line expressions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bc

> An arbitrary precision calculator language.
> See also: `dc`.
> More information: <https://keith.github.io/xcode-man-pages/bc.1.html>.

- Start an interactive session:

`bc`

- Start an interactive session with the standard math library enabled:

`bc --mathlib`

- Calculate an expression:

`bc --expression '{{5 / 3}}'`

- Execute a script:

`bc {{path/to/script.bc}}`

- Calculate an expression with the specified scale:

`bc --expression '{{scale = 10; 5 / 3}}'`

- Calculate a sine/cosine/arctangent/natural logarithm/exponential function using `mathlib`:

`bc --mathlib --expression '{{s|c|a|l|e}}({{1}})'`
