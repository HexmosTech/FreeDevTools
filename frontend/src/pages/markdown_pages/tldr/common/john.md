---
title: "Crack Passwords - John the Ripper | Online Free DevTools by Hexmos"
name: john
path: /freedevtools/tldr/common/john
canonical: "https://hexmos.com/freedevtools/tldr/common/john/"
description: "Crack password hashes with John the Ripper, a powerful password cracking tool. Recover lost passwords, audit security, and test password strength. Free online tool, no registration required."
category: common
keywords:
- password cracker
- John the Ripper
- password recovery
- hash cracking
- password audit
- password security
- linux password cracking
- password strength tester
- hash format identification
- wordlist attack
features:
- Crack password hashes from various formats
- Display recovered passwords from hash files
- Crack passwords using custom wordlists
- Identify supported hash formats
- Restore interrupted cracking sessions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# john

> Password cracker.
> More information: <https://www.openwall.com/john/>.

- Crack password hashes:

`john {{path/to/hashes.txt}}`

- Show passwords cracked:

`john --show {{path/to/hashes.txt}}`

- Display users' cracked passwords by user identifier from multiple files:

`john --show --users={{user_ids}} {{path/to/hashes1.txt path/to/hashes2.txt ...}}`

- Crack password hashes, using a custom wordlist:

`john --wordlist={{path/to/wordlist.txt}} {{path/to/hashes.txt}}`

- List available hash formats:

`john --list=formats`

- Crack password hashes, using a specific hash format:

`john --format={{md5crypt}} {{path/to/hashes.txt}}`

- Crack password hashes, enabling word mangling rules:

`john --rules {{path/to/hashes.txt}}`

- Restore an interrupted cracking session from a state file, e.g. `mycrack.rec`:

`john --restore={{path/to/mycrack.rec}}`
