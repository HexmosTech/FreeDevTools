---
title: "Restore SELinux Context - Manage File Security | Online Free DevTools by Hexmos"
name: restorecon
path: /freedevtools/tldr/linux/restorecon
canonical: "https://hexmos.com/freedevtools/tldr/linux/restorecon/"
description: "Restore SELinux context with Restorecon, a command-line tool for managing file security labels. Secure your Linux system effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - selinux security context
  - restore selinux labels
  - linux security management
  - file security context
  - selinux file labeling
  - command line selinux tool
  - selinux policy enforcement
  - file context restoration
  - linux file permissions
  - semanage fcontext
features:
  - Restore SELinux context to files
  - Recursively apply context to directories
  - Preview label changes before applying
  - Utilize multi-threading for faster restoration
  - Display verbose output of changed labels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# restorecon

> Restore SELinux security context on files/directories according to persistent rules.
> See also: `semanage-fcontext`.
> More information: <https://manned.org/restorecon>.

- View the current security context of a file or directory:

`ls {{[-dlZ|--directory -l --context]}} {{path/to/file_or_directory}}`

- Restore the security context of a file or directory:

`restorecon {{path/to/file_or_directory}}`

- Restore the security context of a directory recursively, and show all changed labels:

`restorecon -R -v {{path/to/directory}}`

- Restore the security context of a directory recursively, using all available threads, and show progress:

`restorecon -R -T {{0}} -p {{path/to/directory}}`

- Preview the label changes that would happen without applying them:

`restorecon -R -n -v {{path/to/directory}}`
