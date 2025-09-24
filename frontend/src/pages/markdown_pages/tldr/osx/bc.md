---
title: "Calculate with bc - Precision Calculation Tool | Online Free DevTools by Hexmos"
name: bc
path: /freedevtools/tldr/osx/bc
canonical: "https://hexmos.com/freedevtools/tldr/osx/bc/"
description: "Calculate expressions with bc, an arbitrary precision calculator language. Perform complex math and execute scripts with ease. Free online tool, no registration required."
category: osx
keywords:
  - arbitrary precision calculation
  - bc calculator linux
  - bc math scripting
  - bc command line calculator
  - bc expression evaluator
  - bc scale calculation
  - bc mathlib functions
  - bc command examples
  - bc shell scripting
  - bc interactive mode
features:
  - Perform arbitrary precision calculations
  - Execute bc scripts for complex computations
  - Utilize the standard math library for advanced functions
  - Calculate expressions directly from the command line
  - Control the scale (number of decimal places) of calculations
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
