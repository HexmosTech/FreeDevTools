---
title: "Hashcat - Recover Passwords Rapidly | Free DevTools"
name: hashcat
path: /freedevtools/tldr/common/hashcat
canonical: "https://hexmos.com/freedevtools/tldr/common/hashcat/"
description: "Recover passwords rapidly with Hashcat, the advanced password recovery tool. Perform brute-force, dictionary, and rule-based attacks. Free online tool, no registration required."
category: common
keywords:
- password recovery
- hash cracking
- brute-force attack
- dictionary attack
- rule-based attack
- password analysis
- hashcat linux
- hashcat command line
- password decryption
- password security
features:
- Perform brute-force password attacks using customizable masks
- Execute dictionary attacks using wordlists and rule-based mutations
- Crack passwords from various hash types with specific algorithms
- Combine words from multiple dictionaries for enhanced attacks
- Display recovered passwords for cracked hashes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hashcat

> Fast and advanced password recovery tool.
> More information: <https://hashcat.net/wiki/doku.php?id=hashcat>.

- Perform a brute-force attack (mode 3) with the default hashcat mask:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{3}} {{hash_value}}`

- Perform a brute-force attack (mode 3) with a known pattern of 4 digits:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{3}} {{hash_value}} "{{?d?d?d?d}}"`

- Perform a brute-force attack (mode 3) using at most 8 of all printable ASCII characters:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{3}} --increment {{hash_value}} "{{?a?a?a?a?a?a?a?a}}"`

- Perform a dictionary attack (mode 0) using the RockYou wordlist of a Kali Linux box:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{0}} {{hash_value}} {{/usr/share/wordlists/rockyou.txt}}`

- Perform a rule-based dictionary attack (mode 0) using the RockYou wordlist mutated with common password variations:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{0}} --rules-file {{/usr/share/hashcat/rules/best64.rule}} {{hash_value}} {{/usr/share/wordlists/rockyou.txt}}`

- Perform a combination attack (mode 1) using the concatenation of words from two different custom dictionaries:

`hashcat --hash-type {{hash_type_id}} --attack-mode {{1}} {{hash_value}} /{{path/to/dictionary1.txt}} /{{path/to/dictionary2.txt}}`

- Show result of an already cracked hash:

`hashcat --show {{hash_value}}`

- Show all example hashes:

`hashcat --example-hashes`
