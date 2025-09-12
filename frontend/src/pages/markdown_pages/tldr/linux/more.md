---
title: "Display File - Interact and Scroll with More | Free DevTools"
name: more
path: /freedevtools/tldr/unknown/more
canonical: "https://hexmos.com/freedevtools/tldr/unknown/more/"
description: "Display a file interactively with More, allowing scrolling and searching within the file content. Easily navigate large text files using command line. Free online tool, no registration required."
category: unknown
keywords:
- file display tool
- command line pager
- text file viewer
- more command
- unix more
- linux more
- macos more
- interactive file viewer
- terminal file pager
- command line text display
features:
- Display files page by page in the terminal
- Search for specific strings within a file
- Navigate forward one page at a time
- Display a file starting from a specified line number
- Provide interactive help about available commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# more

> Interactively display a file, allowing scrolling and searching.
> See also: `less`.
> More information: <https://manned.org/more>.

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
