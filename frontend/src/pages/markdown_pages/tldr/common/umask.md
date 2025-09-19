---
title: "Umask - Control File Permissions | Online Free DevTools by Hexmos"
name: umask
path: "/freedevtools/tldr/common/umask"
canonical: "https://hexmos.com/freedevtools/tldr/common/umask/"
description: "Control file permissions with Umask. Restrict read, write, and execute access for newly created files. Free online tool, no registration required."
category: common
keywords:
- umask file permissions
- linux umask
- unix umask
- macos umask
- command line umask
- file access control
- octal permission mask
- symbolic permission mask
- default file permissions
- restrict file access
features:
- Display the current permission mask
- Modify the permission mask in octal format
- Modify the permission mask symbolically
- Restrict permissions for specific user groups
- Manage default file creation permissions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# umask

> Manage the read/write/execute permissions that are masked out (i.e. restricted) for newly created files by the user.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-umask>.

- Display the current mask in octal notation:

`umask`

- Display the current mask in symbolic (human-readable) mode:

`umask -S`

- Change the mask symbolically to allow read permission for all users (the rest of the mask bits are unchanged):

`umask {{a+r}}`

- Set the mask (using octal) to restrict no permissions for the file's owner, and restrict all permissions for everyone else:

`umask {{077}}`
