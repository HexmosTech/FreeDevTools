---
title: "Generate Random Number - mcookie | Online Free DevTools by Hexmos"
name: mcookie
path: "/freedevtools/tldr/linux/mcookie"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mcookie/"
description: "Generate random hexadecimal numbers with mcookie, a command-line tool for Linux. Securely create unique identifiers and seeds. Free online tool, no registration required."
category: linux
keywords:
- random number generator
- hexadecimal generator linux
- 128-bit random number
- mcookie linux command
- secure random number
- linux security tools
- pseudo-random number generator
- cryptographic seed generator
- random number seed
- linux command line random
features:
- Generate 128-bit hexadecimal numbers
- Seed random numbers from a file
- Limit the bytes used for seeding
- Print details about the randomness origin and seed
- Create unique identifiers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mcookie

> Generate random 128-bit hexadecimal numbers.
> More information: <https://manned.org/mcookie>.

- Generate a random number:

`mcookie`

- Generate a random number, using the contents of a file as a seed for the randomness:

`mcookie {{[-f|--file]}} {{path/to/file}}`

- Generate a random number, using a specific number of bytes from a file as a seed for the randomness:

`mcookie {{[-f|--file]}} {{path/to/file}} {{[-m|--max-size]}} {{number_of_bytes}}`

- Print the details of the randomness used, such as the origin and seed for each source:

`mcookie {{[-v|--verbose]}}`
