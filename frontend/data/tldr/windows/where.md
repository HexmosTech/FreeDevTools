---
title: "Locate Files - Find Files with Where Command | Online Free DevTools by Hexmos"
name: where
path: "/freedevtools/tldr/windows/where/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/where/"
description: "Find files instantly with Where Command. Locate files by pattern, search recursively, and verify file existence using command line. Free online tool, no registration required."
category: windows
keywords:
  - file location command
  - find file by name
  - where command windows
  - command line file search
  - locate file path
  - file search utility
  - windows command where
  - path environment variable
  - search files recursively
  - command line tools
features:
  - Locate files matching a specified pattern.
  - Recursively search for files in a given directory.
  - Display file size and date along with location.
  - Silently check for file existence using exit codes.
  - Search for files using the PATH environment variable.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# where

> Display the location of files that match the search pattern.
> Defaults to current work directory and paths in the PATH environment variable.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/where>.

- Display the location of file pattern:

`where {{file_pattern}}`

- Display the location of file pattern including file size and date:

`where /T {{file_pattern}}`

- Recursively search for file pattern at specified path:

`where /R {{path\to\directory}} {{file_pattern}}`

- Silently return the error code for the location of the file pattern:

`where /Q {{file_pattern}}`
