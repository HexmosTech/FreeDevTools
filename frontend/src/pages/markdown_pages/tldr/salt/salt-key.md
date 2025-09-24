---
title: "Salt-Key - Control Salt Minion Keys | Online Free DevTools by Hexmos"
name: salt-key
path: /freedevtools/tldr/salt/salt-key
canonical: "https://hexmos.com/freedevtools/tldr/salt/salt-key/"
description: "Control Salt minion keys securely with Salt-Key. Manage, accept, reject and fingerprint keys for secure communication. Free online tool, no registration required."
category: common
keywords:
- salt minion key management
- salt-key command line
- saltstack key authentication
- salt key accept
- salt key reject
- salt key fingerprint
- salt master security
- linux salt-key
- salt security best practices
- salt key list
features:
- List accepted, unaccepted, and rejected minion keys
- Accept a specific minion key
- Reject a specific minion key
- Print fingerprints of all public keys
- Manage salt minion keys from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# salt-key

> Manage salt minion keys on the salt master.
> Needs to be run on the salt master, likely as root or with sudo.
> More information: <https://docs.saltproject.io/en/latest/ref/cli/salt-key.html>.

- List all accepted, unaccepted and rejected minion keys:

`salt-key {{[-L|--list-all]}}`

- Accept a minion key by name:

`salt-key {{[-a|--accept-all]}} {{MINION_ID}}`

- Reject a minion key by name:

`salt-key {{[-r|--reject]}} {{MINION_ID}}`

- Print fingerprints of all public keys:

`salt-key {{[-F|--finger-all]}}`
