---
title: "RSA Key Recovery - Crack Keys with RsaCtfTool.py | Free DevTools"
name: rsactftool.py
path: /freedevtools/tldr/common/rsactftool.py
canonical: "https://hexmos.com/freedevtools/tldr/common/rsactftool.py/"
description: "Recover RSA private keys with RsaCtfTool.py, a CTF RSA cracking tool. Decrypt ciphertexts and analyze weak keys effortlessly. Free online tool, no registration required."
category: common
keywords:
- RSA key recovery
- RSA private key cracker
- CTF RSA tool
- decrypt RSA ciphertext
- RSA public key analysis
- RSA key generator
- RSA attack script
- Fermat factorization tool
- RSA modulus extraction
- RSA exponent extraction
features:
- Recover private keys from weak public keys
- Decrypt data using a public key
- Dump RSA key components (modulus, exponent)
- Generate a public key from modulus and exponent
- Execute specific RSA attacks (e.g., Fermat)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# RsaCtfTool.py

> RSA attack tool for CTF challenges - recover private keys from weak public keys and/or decrypt data.
> More information: <https://github.com/RsaCtfTool/RsaCtfTool>.

- Recover a private key from a public key file:

`RsaCtfTool.py --publickey {{path/to/key.pub}} --private`

- Decrypt a file using a public key:

`RsaCtfTool.py --publickey {{path/to/key.pub}} --decryptfile {{path/to/ciphered_file}}`

- Decrypt a specific ciphertext string:

`RsaCtfTool.py --publickey {{path/to/key.pub}} --decrypt "{{ciphertext}}"`

- Dump RSA key components (e.g., modulus, exponent) from a key file:

`RsaCtfTool.py --dumpkey --key {{path/to/key.pub}}`

- Run a specific attack (e.g., Fermat factorization) to recover the private key:

`RsaCtfTool.py --publickey {{path/to/key.pub}} --private --attack fermat`

- Generate a public key from modulus (n) and exponent (e):

`RsaCtfTool.py --createpub -n {{modulus}} -e {{exponent}}`

- Attempt all available attacks to recover the private key:

`RsaCtfTool.py --publickey {{path/to/key.pub}} --private --attack all`
