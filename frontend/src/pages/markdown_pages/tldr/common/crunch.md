---
title: "Crunch - Generate Wordlists | Online Free DevTools by Hexmos"
name: crunch
path: "/freedevtools/tldr/common/crunch"
canonical: "https://hexmos.com/freedevtools/tldr/common/crunch/"
description: "Generate wordlists with Crunch. Create custom wordlists based on character sets, patterns and lengths. Free online tool, no registration required."
category: common
keywords:
- wordlist generator
- password list generator
- custom wordlist
- permutation generator
- dictionary attack wordlist
- Kali Linux wordlist
- Linux password cracker
- wordlist creator
- Brute force wordlist generator
- crunch wordlist
features:
- Generate wordlists with specified character sets
- Create wordlists of varying lengths and patterns
- Generate permutations of characters and strings
- Output wordlists to files with custom chunk sizes
- Compress generated wordlists for efficient storage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crunch

> Wordlist generator.
> More information: <https://manned.org/crunch>.

- Output a list of words of length 1 to 3 with only lowercase characters:

`crunch {{1}} {{3}}`

- Output a list of hexadecimal words of length 8:

`crunch {{8}} {{8}} {{0123456789abcdef}}`

- Output a list of all permutations of abc (lengths are not processed):

`crunch {{1}} {{1}} -p {{abc}}`

- Output a list of all permutations of the given strings (lengths are not processed):

`crunch {{1}} {{1}} -p {{abc}} {{def}} {{ghi}}`

- Output a list of words generated according to the given pattern and a maximum number of duplicate letters:

`crunch {{5}} {{5}} {{abcde123}} -t {{@@@12}} -d 2@`

- Write a list of words in chunk files of a given size, starting with the given string:

`crunch {{3}} {{5}} -o {{START}} -b {{10kb}} -s {{abc}}`

- Write a list of words stopping with the given string and inverting the wordlist:

`crunch {{1}} {{5}} -o {{START}} -e {{abcde}} -i`

- Write a list of words in compressed chunk files with a specified number of words:

`crunch {{1}} {{5}} -o {{START}} -c {{1000}} -z {{gzip|bzip2|lzma|7z}}`
