---
title: "Create Borg Backups - Deduplicate Data | Online Free DevTools by Hexmos"
name: borg
path: /freedevtools/tldr/common/borg
canonical: "https://hexmos.com/freedevtools/tldr/common/borg/"
description: "Create backups with Borg, a deduplicating backup tool. Securely store and manage your data with efficient compression and encryption. Free online tool, no registration required."
category: common
keywords:
- Borg backup
- Deduplicating backup
- Data backup
- Remote backup
- Encrypted backup
- Linux backup
- MacOS backup
- Command-line backup
- Archive creation
- Data recovery
features:
- Create deduplicated backups of directories and files
- Mount backups as FUSE filesystems for easy access
- Encrypt backups for secure storage
- Prune backups based on age or retention policies
- List and extract specific files from archives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# borg

> Deduplicating backup tool.
> Create local or remote backups that are mountable as filesystems.
> More information: <https://borgbackup.readthedocs.io/en/stable/usage/general.html>.

- Initialize a (local) repository:

`borg init {{path/to/repo_directory}}`

- Backup a directory into the repository, creating an archive called "Monday":

`borg create --progress {{path/to/repo_directory}}::{{Monday}} {{path/to/source_directory}}`

- List all archives in a repository:

`borg list {{path/to/repo_directory}}`

- Extract a specific directory from the "Monday" archive in a remote repository, excluding all `*.ext` files:

`borg extract {{user}}@{{host}}:{{path/to/repo_directory}}::{{Monday}} {{path/to/target_directory}} --exclude '{{*.ext}}'`

- Prune a repository by deleting all archives older than 7 days, listing changes:

`borg prune --keep-within {{7d}} --list {{path/to/repo_directory}}`

- Mount a repository as a FUSE filesystem:

`borg mount {{path/to/repo_directory}}::{{Monday}} {{path/to/mountpoint}}`

- Display help on creating archives:

`borg create --help`
