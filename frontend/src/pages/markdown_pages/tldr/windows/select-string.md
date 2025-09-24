---
title: "Select-String - Find Text in Files | Online Free DevTools by Hexmos"
name: select-string
path: /freedevtools/tldr/windows/select-string
canonical: "https://hexmos.com/freedevtools/tldr/windows/select-string/"
description: "Find text with Select-String, the powerful text searching tool. Search files and strings using patterns and exact matches. Free online tool, no registration required."
category: windows
keywords:
- powershell text search
- windows string search
- file pattern matching
- select-string command
- powershell grep alternative
- windows findstr alternative
- regex file search
- powershell search stdin
- select-string notmatch
- powershell context search
features:
- Search files for patterns using regular expressions
- Find exact string matches in files
- Search for patterns in multiple files using wildcards
- Capture lines before and after a matching line
- Search standard input (stdin) for non-matching lines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Select-String

> Finds text in strings and files in PowerShell.
> Note: This command can only be used through PowerShell.
> You can use `Select-String` similar to `grep` in UNIX or `findstr.exe` in Windows.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/select-string>.

- Search for a pattern within a file:

`Select-String -Path "{{path\to\file}}" -Pattern '{{search_pattern}}'`

- Search for an exact string (disables `regex`):

`Select-String -SimpleMatch "{{exact_string}}" {{path\to\file}}`

- Search for pattern in all `.ext` files in current dir:

`Select-String -Path "{{*.ext}}" -Pattern '{{search_pattern}}'`

- Capture the specified number of lines before and after the line that matches the pattern:

`Select-String --Context {{2,3}} "{{search_pattern}}" {{path\to\file}}`

- Search `stdin` for lines that do not match a pattern:

`Get-Content {{path\to\file}} | Select-String --NotMatch "{{search_pattern}}"`
