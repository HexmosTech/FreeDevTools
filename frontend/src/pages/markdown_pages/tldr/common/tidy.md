---
title: "Tidy - Format HTML and XML Files | Online Free DevTools by Hexmos"
name: tidy
path: /freedevtools/tldr/common/tidy
canonical: "https://hexmos.com/freedevtools/tldr/common/tidy/"
description: "Format HTML and XML files easily with Tidy. Clean up code, add indentation and improve readability using command line interface. Free online tool, no registration required."
category: common
keywords:
- HTML formatter
- XML formatter
- HTML pretty printer
- XML pretty printer
- HTML tidy
- XML tidy
- HTML beautifier
- XML beautifier
- HTML validator
- XML validator
features:
- Format HTML files for better readability
- Format XML files for better readability
- Indent and wrap HTML/XML code
- Modify HTML files in-place
- Clean up HTML and XML code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tidy

> Clean up and pretty print HTML, XHTML and XML files.
> Note: `tidy` cannot preserve original indentation.
> More information: <https://api.html-tidy.org/tidy/tidylib_api_next/group__options__cli.html#gad7a9fcaf7b2a712a82e625e84c042b28>.

- Pretty print an HTML file:

`tidy {{path/to/file.html}}`

- Enable indentation, wrapping lines in 100, saving to `output.html`:

`tidy {{[-i|--indent]}} y {{[-w|--wrap]}} 100 {{[-o|-output]}} {{path/to/output.html}} {{path/to/file.html}}`

- Modify an HTML file in-place using a configuration file:

`tidy -config {{path/to/configuration}} {{[-m|-modify]}} {{path/to/file.html}}`
