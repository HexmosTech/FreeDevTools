---
title: "File Pager - Display Files Interactively with More | Online Free DevTools by Hexmos"
name: more
path: /freedevtools/tldr/common/more
canonical: "https://hexmos.com/freedevtools/tldr/common/more/"
description: "Display files interactively with More, a command-line file pager for browsing and searching text files on Unix-like systems. Free online tool, no registration required."
category: common
keywords:
- file pager
- command-line pager
- text file viewer
- more command
- linux more
- unix more
- terminal file viewer
- scroll text file
- search text file
- pager command
features:
- Interactively display file content in the terminal
- Navigate through file content page by page
- Search for specific strings within the file
- Jump to a specific line number in the file
- Display help information about available commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# more

> Interactively display a file, allowing scrolling and searching.
> See also: `less`.
> More information: <https://manned.org/more.1p>.

- Open a file:

`more {{path/to/file}}`

- Display a specific line:

`more +{{line_number}} {{path/to/file}}`

- Go to the next page:

`<Space>`

- Search for a string (press `<n>` to go to the next match):

`</>{{something}}<Enter>`

- Exit:

`<q>`

- Display help about interactive commands:

`<h>`
