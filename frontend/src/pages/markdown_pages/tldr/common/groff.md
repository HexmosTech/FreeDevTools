---
title: "Format Documents - Groff Typesetting | Online Free DevTools by Hexmos"
name: groff
path: /freedevtools/tldr/common/groff
canonical: "https://hexmos.com/freedevtools/tldr/common/groff/"
description: "Format documents with Groff, a powerful typesetting system for creating professional-quality documents. Convert text to PostScript, HTML, or PDF. Free online tool, no registration required."
category: common
keywords:
- roff typesetting
- groff document formatting
- postscript generation
- html conversion
- pdf output
- gnu troff replacement
- man page rendering
- linux typesetting
- command-line formatting
- document publishing
features:
- Format documents to PostScript for printing
- Render man pages for display in terminal
- Convert man pages to HTML for web publishing
- Typeset documents with tables and pictures to PDF
- Execute groff commands with automatic preprocessor options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# groff

> GNU replacement for the `troff` and `nroff` typesetting utilities.
> More information: <https://www.gnu.org/software/groff/manual/groff.html.node/Groff-Options.html>.

- Format output for a PostScript printer, saving the output to a file:

`groff {{path/to/input.roff}} > {{path/to/output.ps}}`

- Render a man page using the ASCII output device, and display it using a pager:

`groff -man -T ascii {{path/to/manpage.1}} | less --RAW-CONTROL-CHARS`

- Render a man page into an HTML file:

`groff -man -T html {{path/to/manpage.1}} > {{path/to/manpage.html}}`

- Typeset a roff file containing [t]ables and [p]ictures, using the [me] macro set, to PDF, saving the output:

`groff {{-t}} {{-p}} -{{me}} -T {{pdf}} {{path/to/input.me}} > {{path/to/output.pdf}}`

- Run a `groff` command with preprocessor and macro options guessed by the `grog` utility:

`eval "$(grog -T utf8 {{path/to/input.me}})"`
