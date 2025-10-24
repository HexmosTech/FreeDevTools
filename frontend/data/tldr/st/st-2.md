---
title: 'Statistics Tool - Generate Descriptive Stats | Online Free DevTools by Hexmos'
name: st-2
path: '/freedevtools/tldr/st/st-2/'
canonical: 'https://hexmos-com/freedevtools/tldr/st/st-2/'
description: 'Generate descriptive statistics with Statistics Tool (st). Calculate mean, sum, standard deviation, and more from data. Free online tool, no registration required.'
category: common
keywords:
  - descriptive statistics generator
  - number statistics calculator
  - command line statistics
  - data analysis tools
  - standard deviation calculator
  - mean value calculator
  - statistics from file
  - linux statistics tool
  - macos statistics tool
  - number summary statistics
features:
  - Calculate sum of input numbers
  - Determine mean (average) value
  - Compute standard deviation
  - Identify minimum and maximum values
  - Transpose output for readability
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# st

> Print basic descriptive statistics from input numbers.
> More information: <https://github.com/nferraz/st>.

- Print count, min, max, sum, mean, and standard deviation for numbers in a file:

`st {{path/to/file}}`

- Print statistics from standard input:

`cat {{path/to/file}} | st`

- Print only the sum of the numbers:

`st {{[-s|--sum]}} {{path/to/file}}`

- Print only the mean of the numbers:

`st {{[-m|--mean]}} {{path/to/file}}`

- Print only the standard deviation:

`st {{[-s|--sd]}} {{path/to/file}}`

- Transpose output (keys in one column, values in another):

`st {{[-t|--transpose]}} {{path/to/file}}`
