---
title: "Generate PO File - po4a-gettextize | Online Free DevTools by Hexmos"
name: po4a-gettextize
path: /freedevtools/tldr/linux/po4a-gettextize
canonical: "https://hexmos.com/freedevtools/tldr/linux/po4a-gettextize/"
description: "Generate PO files with po4a-gettextize. Translate text files to PO format for localization. Free online tool, no registration required."
category: linux
keywords:
- text to po conversion
- po file generator
- localization file format
- linux po4a-gettextize
- po4a gettext converter
- text translation tool
- multilingual document converter
- gettext po file creation
- po file creation from text
- linux text localization
features:
- Convert text files to PO files
- Handle localized documents for translation
- List available conversion formats
- Support multiple localized documents
- Integrate with gettext translation workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# po4a-gettextize

> Convert a file to a PO file.
> More information: <https://po4a.org/man/man1/po4a-gettextize.1.php>.

- Convert a text file to PO file:

`po4a-gettextize --format {{text}} --master {{path/to/master.txt}} --po {{path/to/result.po}}`

- List all available formats:

`po4a-gettextize --help-format`

- Convert a text file along with a translated document to a PO file (`-l` option can be provided multiple times):

`po4a-gettextize --format {{text}} --master {{path/to/master.txt}} --localized {{path/to/translated.txt}} --po {{path/to/result.po}}`
