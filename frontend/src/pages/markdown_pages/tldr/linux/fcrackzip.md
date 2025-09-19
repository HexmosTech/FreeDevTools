---
title: "Crack ZIP Passwords - fcrackzip Password Cracker | Online Free DevTools by Hexmos"
name: fcrackzip
path: /freedevtools/tldr/linux/fcrackzip
canonical: "https://hexmos.com/freedevtools/tldr/linux/fcrackzip/"
description: "Crack ZIP archive passwords quickly with fcrackzip.  This powerful command-line utility supports brute-force attacks and dictionary attacks. Free online tool, no registration required."
category: linux
keywords:
  - zip password cracker
  - fcrackzip command
  - password cracking tool
  - brute-force password attack
  - dictionary attack zip
  - zip archive security
  - command line password cracker
  - fcrackzip tutorial
  - linux password cracking
  - zip file encryption
features:
  - Performs brute-force attacks on ZIP archives.
  - Uses dictionary files for password cracking.
  - Supports specifying password length and character sets.
  - Offers verbose mode for detailed output during cracking.
  - Allows benchmarking of cracking performance.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fcrackzip

> ZIP archive password cracking utility.
> More information: <https://manned.org/fcrackzip>.

- Brute-force a password with a length of 4 to 8 characters, and contains only alphanumeric characters (order matters):

`fcrackzip {{[-b|--brute-force]}} {{[-l|--length]}} 4-8 {{[-c|--charset]}} aA1 {{archive}}`

- Brute-force a password in verbose mode with a length of 3 characters that only contains lowercase characters, `$` and `%`:

`fcrackzip {{[-v|--verbose]}} {{[-b|--brute-force]}} {{[-l|--length]}} 3 {{[-c|--charset]}} a:$% {{archive}}`

- Brute-force a password that contains only lowercase and special characters:

`fcrackzip {{[-b|--brute-force]}} {{[-l|--length]}} 4 {{[-c|--charset]}} a! {{archive}}`

- Brute-force a password containing only digits, starting from the password `12345`:

`fcrackzip {{[-b|--brute-force]}} {{[-l|--length]}} 5 {{[-c|--charset]}} 1 {{[-p|--init-password]}} 12345 {{archive}}`

- Crack a password using a wordlist:

`fcrackzip {{[-u|--use-unzip]}} {{[-D|--dictionary]}} {{[-p|--init-password]}} {{wordlist}} {{archive}}`

- Benchmark cracking performance:

`fcrackzip {{[-B|--benchmark]}}`
