---
title: "Format Message Catalog - Compile PO Files with msgfmt | Free DevTools"
name: msgfmt
path: /freedevtools/tldr/common/msgfmt
canonical: "https://hexmos.com/freedevtools/tldr/common/msgfmt/"
description: "Format message catalogs with msgfmt. Compile .po files to .mo files for gettext localization. Streamline translation workflows. Free online tool, no registration required."
category: common
keywords:
- message catalog formatter
- PO file compiler
- gettext MO file generator
- localization compiler
- msgfmt linux
- msgfmt macOS
- msgfmt command
- compile translations
- .po to .mo converter
- gettext compiler
features:
- Compiles .po files to .mo binary message catalogs
- Converts message catalogs for gettext
- Supports custom output file names
- Provides help information via command-line arguments
- Optimizes message catalogs for efficient lookup
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msgfmt

> Compile message catalog to binary format.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#msgfmt-Invocation>.

- Compile a file to `messages.mo`:

`msgfmt {{file.po}}`

- Convert a `.po` file to a `.mo` file:

`msgfmt {{path/to/file.po}} {{[-o|--output-file]}} {{path/to/file.mo}}`

- Display help:

`msgfmt {{[-h|--help]}}`
