---
title: "Format Manual Pages - Display Documentation | Online Free DevTools by Hexmos"
name: man
path: "/freedevtools/tldr/common/man/"
canonical: "https://hexmos.com/freedevtools/tldr/common/man/"
description: "Format documentation with Man command. Display manual pages and access command information. Free online tool, no registration required."
category: common
keywords:
- manual pages formatter
- display man pages
- command documentation
- linux man command
- macos man command
- unix man pages
- command line help
- system documentation
- apropos search
- man page viewer
features:
- Format and display command documentation
- Search for man pages by keyword
- Display man pages in a specific locale
- Show the path to man page files
- Open man pages in a web browser
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# man

> Format and display manual pages.
> More information: <https://manned.org/man>.

- Display the man page for a command:

`man {{command}}`

- Open the man page for a command in a browser (`BROWSER` environment variable can replace `=browser_name`):

`man {{[-Hbrowser_name|--html=browser_name]}} {{command}}`

- Display the man page for a command from section 7:

`man {{7}} {{command}}`

- List all available sections for a command:

`man {{[-f|--whatis]}} {{command}}`

- Display the path searched for manpages:

`man {{[-w|--path]}}`

- Display the location of a manpage rather than the manpage itself:

`man {{[-w|--where]}} {{command}}`

- Display the man page using a specific locale:

`man {{[-L|--locale]}} {{locale}} {{command}}`

- Search for manpages containing a search string:

`man {{[-k|--apropos]}} "{{search_string}}"`
