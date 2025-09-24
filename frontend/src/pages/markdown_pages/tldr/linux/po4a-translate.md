---
title: "PO4A Translate - Convert PO to Doc | Online Free DevTools by Hexmos"
name: po4a-translate
path: /freedevtools/tldr/linux/po4a-translate
canonical: "https://hexmos.com/freedevtools/tldr/linux/po4a-translate/"
description: "Convert PO files with PO4A Translate. Translate PO files back to documentation format on Linux. Free online tool, no registration required."
category: linux
keywords:
- po4a translate linux
- po4a documentation converter
- po to doc translation
- pot to po conversion
- linux po translation tool
- translate text from po
- documentation localization linux
- po file converter
- gettext po translation
- localized document generator
features:
- Convert PO files to documentation format
- Translate documentation using PO files
- Support various documentation formats
- List available document formats
- Localize documentation with translations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# po4a-translate

> Convert a PO file back to documentation format.
> The provided PO file should be the translation of the POT file which was produced by `po4a-gettextize`.
> More information: <https://po4a.org/man/man1/po4a-translate.1.php>.

- Convert a translated PO file back to a document:

`po4a-translate --format {{text}} --master {{path/to/master.doc}} --po {{path/to/result.po}} --localized {{path/to/translated.txt}}`

- List all available formats:

`po4a-translate --help-format`
