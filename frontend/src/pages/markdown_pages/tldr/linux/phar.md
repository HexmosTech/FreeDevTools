---
title: "Create PHP Archives - Manage PHAR Files | Free DevTools"
name: phar
path: /freedevtools/tldr/unknown/phar
canonical: "https://hexmos.com/freedevtools/tldr/unknown/phar/"
description: "Create and manage PHP archives with PHAR command. Package, compress, and sign PHP applications for easy distribution. Free online tool, no registration required."
category: unknown
keywords:
- php archive creation
- phar file management
- phar compression tool
- phar signing tool
- php package manager
- command line phar
- phar extraction tool
- php application packaging
- phar update utility
- phar metadata retrieval
features:
- Add files and directories to a PHAR archive.
- List the contents of a PHAR archive.
- Delete files or directories from a PHAR archive.
- Compress or uncompress files within a PHAR archive.
- Sign a PHAR archive with a hash algorithm or OpenSSL key.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phar

> Create, update or extract PHP archives (PHAR).
> More information: <https://manned.org/phar>.

- Add one or more files or directories to a Phar file:

`phar add -f {{path/to/phar_file}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Display the contents of a Phar file:

`phar list -f {{path/to/phar_file}}`

- Delete the specified file or directory from a Phar file:

`phar delete -f {{path/to/phar_file}} -e {{file_or_directory}}`

- Compress or uncompress files and directories in a Phar file:

`phar compress -f {{path/to/phar_file}} -c {{algorithm}}`

- Get information about a Phar file:

`phar info -f {{path/to/phar_file}}`

- Sign a Phar file with a specific hash algorithm:

`phar sign -f {{path/to/phar_file}} -h {{algorithm}}`

- Sign a Phar file with an OpenSSL private key:

`phar sign -f {{path/to/phar_file}} -h openssl -y {{path/to/private_key}}`

- Display help and available hashing/compression algorithms:

`phar help`
