---
title: "Findstr - Search Text in Files | Online Free DevTools by Hexmos"
name: findstr
path: /freedevtools/tldr/windows/findstr
canonical: "https://hexmos.com/freedevtools/tldr/windows/findstr/"
description: "Search text within files with Findstr. Quickly locate specific strings or patterns in multiple files. Free online tool, no registration required."
category: windows
keywords:
- text search windows
- file search windows
- find text windows
- string search command
- windows findstr command
- windows command line find
- text pattern matching windows
- regex search windows
- file content search windows
- find string in files
features:
- Find text within multiple files
- Perform case-insensitive text searches
- Search files recursively
- Search using regular expressions
- Display line numbers for matches
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# findstr

> Find specified text within one or more files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/findstr>.

- Find one or more strings in all files:

`findstr "{{string1 string2 ...}}" *`

- Find one or more strings in a piped command's output:

`{{dir}} | findstr "{{string1 string2 ...}}"`

- Find one or more strings in all files recur[s]ively:

`findstr /s "{{string1 string2 ...}}" *`

- Find strings using a case-insensitive search:

`findstr /i "{{string1 string2 ...}}" *`

- Find strings in all files using `regex`:

`findstr /r "{{regex}}" *`

- Find a literal string (containing spaces) in all text files:

`findstr /c:"{{string1 string2 ...}}" *.txt`

- Display the line number before each matching line:

`findstr /n "{{string1 string2 ...}}" *`

- Display only the filenames that contain a match:

`findstr /m "{{string1 string2 ...}}" *`
