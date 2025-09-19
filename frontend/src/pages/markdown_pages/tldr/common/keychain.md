---
title: "Keychain - Manage SSH & GPG Agents | Online Free DevTools by Hexmos"
name: keychain
path: /freedevtools/tldr/common/keychain
canonical: "https://hexmos.com/freedevtools/tldr/common/keychain/"
description: "Manage SSH and GPG agents with Keychain. Reuse agents between logins for improved security and workflow. Free online tool, no registration required."
category: common
keywords:
- ssh agent manager
- gpg agent manager
- keychain manager
- linux ssh agent
- macos ssh agent
- reuse ssh keys
- reuse gpg keys
- ssh key management
- gpg key management
- keychain login
features:
- Reuse SSH and GPG agents across logins
- Manage agent lifetimes with timeouts
- List active SSH keys
- List active GPG keys
- Integrate with existing SSH and GPG setups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# keychain

> Re-use ssh-agent and/or gpg-agent between logins.
> More information: <https://funtoo.org/Keychain>.

- Check for a running ssh-agent, and start one if needed:

`keychain`

- Also check for gpg-agent:

`keychain --agents "{{gpg,ssh}}"`

- List signatures of all active keys:

`keychain --list`

- List fingerprints of all active keys:

`keychain --list-fp`

- Add a timeout for identities added to the agent, in minutes:

`keychain --timeout {{minutes}}`
