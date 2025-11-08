---
title: "BC Calculator - Arbitrary Precision Calculation | Online Free DevTools by Hexmos"
name: bc
path: "/freedevtools/tldr/common/bc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bc/"
description: "Calculate with BC arbitrary precision calculator. Perform complex math, execute scripts, and define custom functions effortlessly. Free online tool, no registration required."
category: common
keywords:
- arbitrary precision calculator
- command line calculator
- bc math calculator
- linux calculator
- unix calculator
- bc scripting
- bc factorial
- bc sine cosine
- bc mathlib
- bc command
features:
- Perform arbitrary precision calculations.
- Execute bc scripts.
- Utilize the standard math library.
- Define custom functions.
- Control calculation scale.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bc

> An arbitrary precision calculator language.
> See also: `dc`, `qalc`.
> More information: <https://manned.org/bc>.

- Start an interactive session:

`bc`

- Start an interactive session with the standard math library enabled:

`bc {{[-i|--interactive]}} {{[-l|--mathlib]}}`

- Calculate an expression:

`echo '{{5 / 3}}' | bc`

- Execute a script:

`bc {{path/to/script.bc}}`

- Calculate an expression with the specified scale:

`echo 'scale = {{10}}; {{5 / 3}}' | bc`

- Calculate a sine/cosine/arctangent/natural logarithm/exponential function using `mathlib`:

`echo '{{s|c|a|l|e}}({{1}})' | bc {{[-l|--mathlib]}}`

- Execute an inline factorial script:

`echo "define factorial(n) { if (n <= 1) return 1; return n*factorial(n-1); }; factorial({{10}})" | bc`
