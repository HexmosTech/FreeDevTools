---
title: "Tarsnap Backup - Control Encrypted Archives | Online Free DevTools by Hexmos"
name: tarsnap
path: "/freedevtools/tldr/common/tarsnap/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tarsnap/"
description: "Control Tarsnap encrypted backups with this online tool. Create, list, delete, and restore archives securely. Free online tool, no registration required."
category: common
keywords:
- tarsnap backup
- encrypted backup
- online backup tool
- tarsnap archive
- command line backup
- secure data backup
- tarsnap restore
- tarsnap command
- tarsnap keyfile
- cloud backup tool
features:
- Create encrypted backups of files and directories.
- List the contents of existing archives.
- Delete specific Tarsnap archives.
- Restore files from Tarsnap backups.
- Copy Tarsnap archives.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tarsnap

> Manipulate remote Tarsnap encrypted backups.
> Note: You don't need to specify the key file and the cache directory if you configure them in `/usr/local/etc/tarsnap.conf` or `~/.tarsnaprc`.
> See also: `tarsnap-keygen`.
> More information: <https://www.tarsnap.com/man-tarsnap.1.html>.

- [c]reate a backup archive of one or more files or directories, specifying the cryptographic key and the cache directory:

`tarsnap -c --keyfile {{path/to/key_file}} --cachedir {{path/to/cache_directory}} -f {{archive_name}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Display how much data would be uploaded:

`tarsnap -c --dry-run --print-stats --keyfile {{path/to/key_file}} --cachedir {{path/to/cache_directory}} -f {{archive_name}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- List stored archives:

`tarsnap --list-archives --keyfile {{path/to/key_file}}`

- [d]elete a specific archive:

`tarsnap -d --keyfile {{path/to/key_file}} --cachedir {{path/to/cache_directory}} -f {{archive_name}}`

- Lis[t] the contents of a specific archive in [v]erbose mode:

`tarsnap -tv --keyfile {{path/to/key_file}} -f {{archive_name}}`

- Restore one or more files or directories from a specific archive:

`tarsnap -x --keyfile {{path/to/key_file}} -f {{archive_name}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Copy an archive:

`tarsnap -c --keyfile {{path/to/key_file}} -f {{new_archive_name}} @@{{source_archive_name}}`
