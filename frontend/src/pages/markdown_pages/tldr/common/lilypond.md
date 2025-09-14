---
title: "Lilypond - Typeset Music & Generate MIDI | Free DevTools"
name: lilypond
path: /freedevtools/tldr/common/lilypond
canonical: "https://hexmos.com/freedevtools/tldr/common/lilypond/"
description: "Typeset music with Lilypond & generate MIDI files from your scores. Convert Lilypond files to PDF and other formats. Free online tool, no registration required."
category: common
keywords:
- Lilypond music typesetting
- Lilypond MIDI generation
- Music notation compiler
- Lilypond to PDF converter
- Lilypond command line
- Music score typesetting
- Lilypond format conversion
- Common music tools
- Lilypond Linux
- Lilypond macOS
features:
- Compile Lilypond files to PDF format.
- Generate MIDI files from Lilypond notation.
- Convert Lilypond files to various output formats.
- Suppress progress updates during compilation.
- Specify the output filename for compiled files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lilypond

> Typeset music and/or produce MIDI from file.
> See also: `musescore`.
> More information: <https://lilypond.org>.

- Compile a lilypond file into a PDF:

`lilypond {{path/to/file}}`

- Compile into the specified format:

`lilypond {{[-f|--format]}} {{format_dump}} {{path/to/file}}`

- Compile the specified file, suppressing progress updates:

`lilypond {{[-s|--silent]}} {{path/to/file}}`

- Compile the specified file, and also specify the output filename:

`lilypond {{[-o|--output]}} {{path/to/output_file}} {{path/to/input_file}}`

- Show the current version of lilypond:

`lilypond {{[-v|--version]}}`
