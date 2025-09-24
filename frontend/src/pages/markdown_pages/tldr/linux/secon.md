---
title: "Control SELinux Context - View Security Context | Online Free DevTools by Hexmos"
name: secon
path: /freedevtools/tldr/linux/secon
canonical: "https://hexmos.com/freedevtools/tldr/linux/secon/"
description: "Control SELinux context instantly with secon. View security attributes of processes and files, and parse SELinux context strings with this free online tool, no registration required."
category: linux
keywords:
- selinux context viewer
- linux security context
- selinux attribute inspector
- security context parser
- linux security attributes
- file security context
- process security context
- selinux context string
- selinux linux command
- security policy tool
features:
- Display the SELinux context of the current process
- Determine the SELinux context of any running process by PID
- Resolve the SELinux context of a file, including traversing symlinks
- Show the SELinux context of a symbolic link itself without dereferencing
- Parse and explain a SELinux context specification string
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# secon

> Get the SELinux security context of a file, pid, current execution context, or a context specification.
> See also: `semanage`, `runcon`, `chcon`.
> More information: <https://manned.org/secon>.

- Get the security context of the current execution context:

`secon`

- Get the current security context of a process:

`secon --pid {{1}}`

- Get the current security context of a file, resolving all intermediate symlinks:

`secon --file {{path/to/file_or_directory}}`

- Get the current security context of a symlink itself (i.e. do not resolve):

`secon --link {{path/to/symlink}}`

- Parse and explain a context specification:

`secon {{system_u:system_r:container_t:s0:c899,c900}}`
