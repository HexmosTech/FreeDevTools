---
title: "XML List - Generate XML Directory Listings | Online Free DevTools by Hexmos"
name: xml-list
path: /freedevtools/tldr/xml/xml-list
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-list/"
description: "Generate XML listings instantly with XML List. Convert directory content to XML format, and display directory structure. Free online tool, no registration required."
category: common
keywords:
- XML directory listing
- XML file listing
- Directory to XML conversion
- XML file explorer
- Linux XML listing
- macOS XML listing
- Command line XML tool
- XML file generation
- XML output from directory
- XML ls command
features:
- Convert directory contents to XML format
- Generate XML documents from directory structures
- List files and directories in XML format
- Output XML listings to a file
- Display help information for XML listing command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml list

> List a directory's contents (like `ls`) in XML format.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139535968>.

- Write the current directory's listing to an XML document:

`xml {{[ls|list]}} > {{path/to/dir_list.xml}}`

- Write the specified directory's listing to an XML document:

`xml {{[ls|list]}} {{path/to/directory}} > {{path/to/dir_list.xml}}`

- Display help:

`xml {{[ls|list]}} --help`
