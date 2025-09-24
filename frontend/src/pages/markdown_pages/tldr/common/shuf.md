---
title: "Generate Random Permutations with Shuf | Online Free DevTools by Hexmos"
name: shuf
path: /freedevtools/tldr/common/shuf
canonical: "https://hexmos.com/freedevtools/tldr/common/shuf/"
description: "Generate random permutations with Shuf. Randomize the order of lines or numbers. Command-line tool for shuffling data. Free online tool, no registration required."
category: common
keywords:
- random permutations generator
- data shuffling command
- shuffle lines tool
- random number generator linux
- shuf command linux
- shuf random order
- bash shuffle data
- command line randomizer
- random sequence generator
- linux data manipulation
features:
- Randomize the order of lines in a file.
- Output only a specific number of shuffled entries.
- Write shuffled output to a file.
- Generate random numbers within a defined range.
- Repeat number generation for persistent randomness.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shuf

> Generate random permutations.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/shuf-invocation.html>.

- Randomize the order of lines in a file and output the result:

`shuf {{path/to/file}}`

- Only output the first 5 entries of the result:

`shuf {{[-n|--head-count]}} 5 {{path/to/file}}`

- Write the output to another file:

`shuf {{path/to/input_file}} {{[-o|--output]}} {{path/to/output_file}}`

- Generate 3 random numbers in the range 1-10 (inclusive):

`shuf {{[-n|--head-count]}} 3 {{[-i|--input-range]}} 1-10 {{[-r|--repeat]}}`
