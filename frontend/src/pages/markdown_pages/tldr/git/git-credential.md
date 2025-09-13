---
title: "Git Credential - Retrieve Credentials | Free DevTools"
name: git-credential
path: /freedevtools/tldr/git/git-credential
canonical: "https://hexmos.com/freedevtools/tldr/git/git-credential/"
description: "Retrieve user credentials with Git Credential. Store, approve, and reject credential information using Git's configured helpers. Free online tool, no registration required."
category: common
keywords:
- git credential management
- git credential storage
- git credential retrieval
- git username password
- git authentication
- git credential helper
- git configuration
- git security
- git credential approve
- git credential reject
features:
- Retrieve user credentials from configuration
- Store credential information securely
- Approve credentials for future use
- Reject and erase stored credentials
- Interact with multiple credential helpers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git credential

> Retrieve and store user credentials.
> More information: <https://git-scm.com/docs/git-credential>.

- Display credential information, retrieving the username and password from configuration files:

`echo "{{url=http://example.com}}" | git credential fill`

- Send credential information to all configured credential helpers to store for later use:

`echo "{{url=http://example.com}}" | git credential approve`

- Erase the specified credential information from all the configured credential helpers:

`echo "{{url=http://example.com}}" | git credential reject`
