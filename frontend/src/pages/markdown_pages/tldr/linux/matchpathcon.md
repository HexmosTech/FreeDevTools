---
title: "Lookup SELinux Context - Control Path Security | Online Free DevTools by Hexmos"
name: matchpathcon
path: /freedevtools/tldr/linux/matchpathcon
canonical: "https://hexmos.com/freedevtools/tldr/linux/matchpathcon/"
description: "Lookup SELinux security context with Matchpathcon. Manage file security and verify SELinux settings. Free online tool, no registration required."
category: linux
keywords:
  - SELinux context lookup
  - path security context
  - file context manager
  - security policy enforcement
  - SELinux policy management
  - linux security settings
  - matchpathcon command
  - file context verification
  - security attribute retrieval
  - linux access control
features:
  - Lookup persistent SELinux security context
  - Restrict lookup to specific file types
  - Verify persistent and current security contexts
  - Manage file security attributes
  - Retrieve security settings for paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# matchpathcon

> Lookup the persistent SELinux security context setting of a path.
> See also: `semanage-fcontext`, `secon`, `chcon`, `restorecon`.
> More information: <https://manned.org/matchpathcon.8>.

- Lookup the persistent security context setting of an absolute path:

`matchpathcon /{{path/to/file}}`

- Restrict lookup to settings on a specific file type:

`matchpathcon -m {{file|dir|pipe|chr_file|blk_file|lnk_file|sock_file}} /{{path/to/file}}`

- [V]erify that the persistent and current security context of a path agree:

`matchpathcon -V /{{path/to/file}}`
