---
title: "Decrypt Bluetooth - Crack BLE Encryption | Online Free DevTools by Hexmos"
name: crackle
path: "/freedevtools/tldr/common/crackle/"
canonical: "https://hexmos.com/freedevtools/tldr/common/crackle/"
description: "Crack BLE encryption with Crackle, a powerful Bluetooth Low Energy decryption tool. Recover temporary keys and decrypt recorded communications easily. Free online tool, no registration required."
category: common
keywords:
- BLE encryption cracker
- Bluetooth decryption tool
- PCAP decryption
- LTK decryption
- Bluetooth low energy
- Crackle command
- wireless security
- network forensics
- packet analysis
- Bluetooth communication
features:
- Crack and decrypt BLE encryption
- Recover temporary keys from recorded pairing events
- Decrypt communication using a specified long-term key
- Analyze PCAP files for recoverable temporary keys
- Decrypt subsequent communications after TK recovery
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crackle

> Crack and decrypt Bluetooth Low Energy (BLE) encryption.
> More information: <https://github.com/mikeryan/crackle>.

- Check whether the recorded BLE communications contain the packets necessary for recovering temporary keys (TKs):

`crackle -i {{path/to/input.pcap}}`

- Use brute force to recover the TK of the recorded pairing events and use it to decrypt all subsequent communications:

`crackle -i {{path/to/input.pcap}} -o {{path/to/decrypted.pcap}}`

- Use the specified long-term key (LTK) to decrypt the recorded communication:

`crackle -i {{path/to/input.pcap}} -o {{path/to/decrypted.pcap}} -l {{81b06facd90fe7a6e9bbd9cee59736a7}}`
