---
title: "Everything Search - Find Files Quickly | Online Free DevTools by Hexmos"
name: es
path: "/freedevtools/tldr/windows/es"
canonical: "https://hexmos.com/freedevtools/tldr/windows/es/"
description: "Search Everything files and folders with the Everything command-line interface. Quickly locate files and refine searches using regex. Free online tool, no registration required."
category: windows
keywords:
- windows file search
- everything cli search
- command line file finder
- regex file search windows
- es command windows
- windows directory listing
- fast windows search
- voidtools everything command line
- windows file search tool
- windows advanced search
features:
- Search files and folders by name using the Everything index
- Filter search results using regular expressions
- Limit the number of search results displayed
- Search for files only or folders only
- Sort search results by name, size, or other criteria
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# es

> Command-line interface for Everything, a fast file and folder search tool for Windows.
> Requires Everything to be installed and running in the background.
> More information: <https://www.voidtools.com/support/everything/command_line_interface/>.

- Search for a file or folder by name:

`es {{search_term}}`

- Search using a `regex`:

`es -r {{regex}}`

- Match whole words:

`es -w {{search_term}}`

- Limit the number of results shown:

`es -n {{10}} {{search_term}}`

- Search within a specific folder:

`es -path {{folder_path}} {{search_term}}`

- List folders only:

`es /ad`

- List files only:

`es /a-d`

- Sort results (e.g., by name):

`es -sort {{name-ascending}}`
