---
title: "Generate Translation Files - msginit | Online Free DevTools by Hexmos"
name: msginit
path: /freedevtools/tldr/common/msginit
canonical: "https://hexmos.com/freedevtools/tldr/common/msginit/"
description: "Generate translation files with msginit. Create language-specific PO files from POT templates easily. Free online tool, no registration required."
category: common
keywords:
- portable object translation
- gettext translation file
- language translation generation
- msginit command
- POT to PO conversion
- GNU gettext tool
- localization file creation
- translation template processing
- common command-line tool
- internationalization support
features:
- Generate PO files from POT templates
- Define locale for translation generation
- Use system locale for PO file creation
- Support gettext translation workflow
- Display help information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# msginit

> Generate language specific translation files based on Portable Object Templates.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#msginit-Invocation>.

- Generate Portable Object files in system locale from `messages.pot`:

`msginit`

- Define locale to generate from a specific template:

`msginit {{[-l|--locale]}} {{locale}} {{[-i|--input]}} {{path/to/messages.pot}}`

- Display help:

`msginit {{[-h|--help]}}`
