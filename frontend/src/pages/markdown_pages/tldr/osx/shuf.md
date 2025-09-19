---
title: "Generate Random Permutations with Shuf | Online Free DevTools by Hexmos"
name: shuf
path: /freedevtools/tldr/osx/shuf
canonical: "https://hexmos.com/freedevtools/tldr/osx/shuf/"
description: "Generate random permutations with Shuf. Easily shuffle lines in a file or generate random numbers. Free online tool, no registration required."
category: osx
keywords:
  - random permutation generator
  - shuf randomizer
  - linux shuf command
  - macos shuf command
  - file shuffling tool
  - random number generator
  - command line shuf
  - text permutation tool
  - data randomization tool
  - shuf file order
features:
  - Randomize the order of lines in a file
  - Output only a specific number of entries
  - Write shuffled output to a new file
  - Generate a sequence of random numbers
  - Specify an input range for number generation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# shuf

> Generate random permutations.
> More information: <https://manpagez.com/man/1/shuf/>.

- Randomize the order of lines in a file and output the result:

`shuf {{path/to/file}}`

- Only output the first 5 entries of the result:

`shuf --head-count=5 {{path/to/file}}`

- Write output to another file:

`shuf {{path/to/input_file}} --output {{ath/to/output_file}}`

- Generate random numbers in the range 1 to 10:

`shuf --input-range=1-10`
