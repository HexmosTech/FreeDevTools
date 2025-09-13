---
title: "Git Secret - Securely Store Data in Git | Free DevTools"
name: git-secret
path: /freedevtools/tldr/git/git-secret
canonical: "https://hexmos.com/freedevtools/tldr/git/git-secret/"
description: "Secure data storage with Git Secret. Encrypt and manage sensitive information directly within your Git repositories. Free online tool, no registration required."
category: common
keywords:
- git secret encryption
- git secret management
- git secret bash
- git secret linux
- git secret macos
- git repository secret
- secure git data
- encrypt git files
- git secret access control
- git secret reveal
features:
- Initialize Git Secret in a repository
- Grant and revoke access to secrets via email
- List users with access to encrypted data
- Add and register secret files for encryption
- Encrypt and decrypt sensitive files within Git
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git secret

> Stores private data inside a Git repository. Written in Bash.
> More information: <https://github.com/sobolevn/git-secret>.

- Initialize `git-secret` in a local repository:

`git secret init`

- Grant access to the current Git user's email:

`git secret tell -m`

- Grant access by email:

`git secret tell {{email}}`

- Revoke access by email:

`git secret killperson {{email}}`

- List emails with access to secrets:

`git secret whoknows`

- Register a secret file:

`git secret add {{path/to/file}}`

- Encrypt secrets:

`git secret hide`

- Decrypt secret files:

`git secret reveal`
