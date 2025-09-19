---
title: "Fix Files - Secure File Contexts | Online Free DevTools by Hexmos"
name: fixfiles
path: /freedevtools/tldr/linux/fixfiles
canonical: "https://hexmos.com/freedevtools/tldr/linux/fixfiles/"
description: "Secure file contexts with Fix Files. Restore correct SELinux contexts to protect your system. Free online tool, no registration required."
category: linux
keywords:
  - selinux file context
  - fix file permissions
  - restore file security
  - linux file context
  - file relabeling
  - selinux policy
  - chcon alternative
  - fixfiles command
  - file security
  - selinux restorecon
features:
  - Reset file contexts to match file_context definitions
  - Restore file contexts based on RPM database information
  - Restore file contexts of files modified since a specific date
  - Mount filesystems before relabeling to fix context issues
  - Force reset of context for customizable files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fixfiles

> Fix file SELinux security contexts.
> More information: <https://manned.org/fixfiles>.

- If specified with onboot, this fixfiles will record the current date in the `/.autorelabel` file, so that it can be used later to speed up labeling. If used with restore, the restore will only affect files that were modified today:

`fixfiles -B`

- [F]orce reset of context to match `file_context` for customizable files:

`fixfiles -F`

- Clear `/tmp` directory without confirmation:

`fixfiles -f`

- Use the [R]pm database to discover all files within specific packages and restore the file contexts:

`fixfiles -R {{rpm_package1,rpm_package2 ...}}`

- Run a diff on the `PREVIOUS_FILECONTEXT` file to the [C]urrently installed one, and restore the context of all affected files:

`fixfiles -C PREVIOUS_FILECONTEXT`

- Only act on files created after a specific date which will be passed to find `--newermt` command:

`fixfiles -N {{YYYY-MM-DD HH:MM}}`

- Bind [M]ount filesystems before relabeling them, this allows fixing the context of files or directories that have been mounted over:

`fixfiles -M`

- Modify [v]erbosity from progress to verbose and run `restorecon` with `-v` instead of `-p`:

`fixfiles -v`
