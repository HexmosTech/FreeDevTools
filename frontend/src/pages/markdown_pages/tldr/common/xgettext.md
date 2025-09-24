---
title: "xgettext - Extract Text Strings | Online Free DevTools by Hexmos"
name: xgettext
path: /freedevtools/tldr/common/xgettext
canonical: "https://hexmos.com/freedevtools/tldr/common/xgettext/"
description: "Extract text strings with xgettext for internationalization. Create translation files from source code effortlessly. Free online tool, no registration required."
category: common
keywords:
- gettext string extraction
- po file generation
- internationalization tool
- text domain creation
- translation file parser
- multilingual software development
- i18n support
- gnu gettext
- message catalog creation
- common
features:
- Extract translatable strings from source code.
- Generate .po files for translations.
- Append new strings to existing translation files.
- Omit metadata header in output files.
- Support multiple input file formats.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xgettext

> Extract gettext strings from code files.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#xgettext-Invocation>.

- Scan file and output strings to `messages.po`:

`xgettext {{path/to/input_file}}`

- Use a different output filename:

`xgettext {{[-o|--output]}} {{path/to/output_file}} {{path/to/input_file}}`

- Append new strings to an existing file:

`xgettext {{[-j|--join-existing]}} {{[-o|--output]}} {{path/to/output_file}} {{path/to/input_file}}`

- Don't add a header containing metadata to the output file:

`xgettext --omit-header {{path/to/input_file}}`

- Display help:

`xgettext {{[-h|--help]}}`
