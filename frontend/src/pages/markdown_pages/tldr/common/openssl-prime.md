---
title: "OpenSSL Prime - Generate Prime Numbers | Free DevTools"
name: openssl-prime
path: /freedevtools/tldr/common/openssl-prime
canonical: "https://hexmos.com/freedevtools/tldr/common/openssl-prime/"
description: "Generate prime numbers with OpenSSL Prime. Validate prime numbers using various algorithms. Free online tool, no registration required."
category: common
keywords:
- openssl prime number
- prime number generator
- prime number validator
- openssl prime check
- cryptographic prime generation
- command line prime tools
- linux prime utility
- openssl prime command
- hexadecimal prime number
- bit prime generator
features:
- Generate prime numbers of specified bit lengths.
- Validate if a given number is prime.
- Output prime numbers in hexadecimal format.
- Utilize command-line interface for prime number operations.
- Support prime number generation and validation using OpenSSL library.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openssl prime

> OpenSSL command to compute prime numbers.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-prime.html>.

- Generate a 2048bit prime number and display it in hexadecimal:

`openssl prime -generate -bits 2048 -hex`

- Check if a given number is prime:

`openssl prime {{number}}`
