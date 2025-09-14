---
title: "Font Diff - Compare Font Differences with ftxdiff | Free DevTools"
name: ftxdiff
path: /freedevtools/tldr/osx/ftxdiff
canonical: "https://hexmos.com/freedevtools/tldr/osx/ftxdiff/"
description: "Compare font differences instantly with ftxdiff. Analyze glyph variations and character set changes between font files on macOS. Free online tool, no registration required."
category: osx
keywords:
- font difference analyzer
- font comparison tool
- font file diff
- ttc diff osx
- font validation macos
- glyph comparison tool
- font metadata analyzer
- opentype diff
- truetype diff
- font file inspector
features:
- Output font differences to a specified text file.
- Include glyph names in the diff output.
- Include unicode names in the diff output.
- Compare two font files to identify variations.
- Analyze character set changes between fonts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ftxdiff

> Compare differences between two fonts.
> More information: <https://developer.apple.com/fonts>.

- Output differences to a specific text file:

`ftxdiff --output {{path/to/fontdiff_file.txt}} {{path/to/font_file1.ttc}} {{path/to/font_file2.ttc}}`

- Include glyph names in output:

`ftxdiff --include-glyph-names`

- Include unicode names in output:

`ftxdiff --include-unicode-names`
