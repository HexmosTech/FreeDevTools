---
title: "Chmod - Control File Permissions | Online Free DevTools by Hexmos"
name: chmod
path: /freedevtools/tldr/common/chmod
canonical: "https://hexmos.com/freedevtools/tldr/common/chmod/"
description: "Control file permissions with Chmod. Secure your files and directories by managing access rights. Free online tool, no registration required."
category: common
keywords:
- chmod file permissions
- file permissions management
- linux chmod command
- unix file security
- chmod access rights
- chmod recursive permissions
- change file ownership
- chmod octal mode
- command line permissions
- chmod setuid
features:
- Change file and directory access permissions
- Set read, write, and execute permissions for users, groups, and others
- Recursively modify permissions for directories and subdirectories
- Remove specific permissions from users or groups
- Set permissions based on octal mode or symbolic representation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chmod

> Change the access permissions of a file or directory.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html>.

- Give the [u]ser who owns a file the right to e[x]ecute it:

`chmod u+x {{path/to/file}}`

- Give the [u]ser rights to [r]ead and [w]rite to a file/directory:

`chmod u+rw {{path/to/file_or_directory}}`

- Remove e[x]ecutable rights from the [g]roup:

`chmod g-x {{path/to/file}}`

- Give [a]ll users rights to [r]ead and e[x]ecute:

`chmod a+rx {{path/to/file}}`

- Give [o]thers (not in the file owner's group) the same rights as the [g]roup:

`chmod o=g {{path/to/file}}`

- Remove all rights from [o]thers:

`chmod o= {{path/to/file}}`

- Change permissions recursively giving [g]roup and [o]thers the ability to [w]rite:

`chmod {{[-R|--recursive]}} g+w,o+w {{path/to/directory}}`

- Recursively give [a]ll users [r]ead permissions to files and e[X]ecute permissions to sub-directories within a directory:

`chmod {{[-R|--recursive]}} a+rX {{path/to/directory}}`
