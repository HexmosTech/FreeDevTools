---
title: "Shred File - Securely Delete Data | Online Free DevTools by Hexmos"
name: shred
path: "/freedevtools/tldr/common/shred/"
canonical: "https://hexmos.com/freedevtools/tldr/common/shred/"
description: "Securely delete data with Shred File tool. Overwrite files to prevent recovery and protect sensitive information. Free online tool, no registration required."
category: common
keywords:
- file shredder
- secure file deletion
- data wiping
- shred command linux
- shred command example
- data sanitization
- linux command line security
- command line shred tool
- permanently delete files
- overwrite file data
features:
- Overwrite files with random data.
- Specify the number of overwrite iterations.
- Remove files after overwriting.
- Overwrite with zeros as the final step.
- Display progress during the shredding process.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shred

> Overwrite files to securely delete data.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/shred-invocation.html>.

- Overwrite a file:

`shred {{path/to/file}}`

- Overwrite a file and show progress on the screen:

`shred {{[-v|--verbose]}} {{path/to/file}}`

- Overwrite a file, leaving zeros instead of random data:

`shred {{[-z|--zero]}} {{path/to/file}}`

- Overwrite a file a specific number of times:

`shred {{[-n|--iterations]}} {{25}} {{path/to/file}}`

- Overwrite a file and remove it:

`shred {{[-u|--remove]}} {{path/to/file}}`

- Overwrite a file 100 times, add a final overwrite with zeros, remove the file after overwriting it and show verbose progress on the screen:

`shred {{[-vzun|--verbose --zero --remove --iterations]}} 100 {{path/to/file}}`
