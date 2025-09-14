---
title: "Generate ASCII Art - Figlet Text Banners | Free DevTools"
name: figlet
path: /freedevtools/tldr/common/figlet
canonical: "https://hexmos.com/freedevtools/tldr/common/figlet/"
description: "Generate ASCII art with Figlet for banners and text graphics. Create impressive terminal displays using custom fonts. Free online tool, no registration required."
category: common
keywords:
- ascii art generator
- text banner creator
- figlet text converter
- command line banner
- terminal text art
- linux figlet
- macos figlet
- text to ascii art
- figlet font styles
- command line text effects
features:
- Generate ASCII art banners from text input.
- Support for custom font files and styles.
- Pipe command output for dynamic text banners.
- Control text alignment and width within the terminal.
- Display available FIGlet fonts for text customization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# figlet

> Generate ASCII banners from user input.
> See also: `showfigfonts`.
> More information: <http://www.figlet.org/figlet-man.html>.

- Generate by directly inputting text:

`figlet {{input_text}}`

- Use a custom [f]ont file:

`figlet -f {{path/to/font_file.flf}} {{input_text}}`

- Use a [f]ont from the default font directory (the extension can be omitted):

`figlet -f {{font_filename}} {{input_text}}`

- Pipe command output through FIGlet:

`{{command}} | figlet`

- Show available FIGlet fonts:

`showfigfonts {{optional_string_to_display}}`

- Use the full width of the [t]erminal and [c]enter the input text:

`figlet -t -c {{input_text}}`

- Display all characters at full [W]idth to avoid overlapping:

`figlet -W {{input_text}}`
