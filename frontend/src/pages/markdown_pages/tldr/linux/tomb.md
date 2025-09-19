---
title: "Manage Encrypted Storage - Tomb Command | Online Free DevTools by Hexmos"
name: tomb
path: /freedevtools/tldr/linux/tomb
canonical: "https://hexmos.com/freedevtools/tldr/linux/tomb/"
description: "Manage and control encrypted storage directories with the Tomb command.  Create, lock, open, and securely manage encrypted data using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - encrypted storage management
  - secure directory command
  - tomb command line tool
  - filesystem encryption
  - data protection command
  - encrypted data management
  - secure file storage
  - command-line encryption
  - linux encryption tool
  - portable encrypted directory
features:
  - Create and manage encrypted storage directories.
  - Securely lock and unlock encrypted tombs using keys.
  - Mount encrypted tombs as regular filesystem directories.
  - Forcefully close open tombs, even if in use.
  - List all currently open encrypted tombs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tomb

> Manage encrypted storage directories that can be safely transported and hidden in a filesystem.
> More information: <https://dyne.org/docs/tomb/manpage/>.

- Create a new tomb with an initial size of 100 MB:

`tomb dig -s {{100}} {{encrypted_directory.tomb}}`

- Create a new key file that can be used to lock a tomb; user will be prompted for a password for the key:

`tomb forge {{encrypted_directory.tomb.key}}`

- Forcefully create a new key, even if the tomb isn't allowing key forging (due to swap):

`tomb forge {{encrypted_directory.tomb.key}} -f`

- Initialize and lock an empty tomb using a key made with `forge`:

`tomb lock {{encrypted_directory.tomb}} -k {{encrypted_directory.tomb.key}}`

- Mount a tomb (by default in `/media`) using its key, making it usable as a regular filesystem directory:

`tomb open {{encrypted_directory.tomb}} -k {{encrypted_directory.tomb.key}}`

- Close a tomb (fails if the tomb is being used by a process):

`tomb close {{encrypted_directory.tomb}}`

- Forcefully close all open tombs, killing any applications using them:

`tomb slam all`

- List all open tombs:

`tomb list`
