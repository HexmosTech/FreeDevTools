---
title: "Display Paged Output - Control Text Output with More | Free DevTools"
name: more
path: /freedevtools/tldr/unknown/more
canonical: "https://hexmos.com/freedevtools/tldr/unknown/more/"
description: "Control paged output with More. Display content from files or stdin and format text output. Free online tool, no registration required."
category: unknown
keywords:
- paginated output display
- command line pager
- text file viewer
- more command
- stdin output display
- windows more command
- console pager
- text formatting tool
- file output control
- command line text viewer
features:
- Display output from stdin
- Display output from multiple files
- Convert tabs to spaces
- Clear the screen before displaying output
- Start output display at a specific line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# more

> Display paginated output from `stdin` or a file.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/more>.

- Display paginated output from `stdin`:

`{{echo test}} | more`

- Display paginated output from one or more files:

`more {{path\to\file}}`

- Convert tabs to the specified number of spaces:

`more {{path\to\file}} /t{{spaces}}`

- Clear the screen before displaying the page:

`more {{path\to\file}} /c`

- Display the output starting at line 5:

`more {{path\to\file}} +{{5}}`

- Enable extended interactive mode (see help for usage):

`more {{path\to\file}} /e`

- Display help:

`more /?`
