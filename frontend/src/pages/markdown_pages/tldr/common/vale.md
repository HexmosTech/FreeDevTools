---
title: "Vale - Validate Style with CLI Tool | Online Free DevTools by Hexmos"
name: vale
path: /freedevtools/tldr/common/vale
canonical: "https://hexmos.com/freedevtools/tldr/common/vale/"
description: "Validate text style with Vale, a powerful CLI style checker. Ensure consistency and quality across Markdown and AsciiDoc files. Free online tool, no registration required."
category: common
keywords:
- markdown style validation
- asciidoc style validation
- text style checker
- vale style linter
- command line style guide
- documentation style guide
- vale configuration
- vale alerts
- vale markdown
- vale asciidoc
features:
- Check style of files using Vale CLI
- Customize style checking with configurations
- Output style results in JSON format
- Define minimum alert levels for style issues
- Check style from stdin with markup format specification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vale

> Extensible style checker that supports multiple markup formats, such as Markdown and AsciiDoc.
> More information: <https://vale.sh>.

- Check the style of a file:

`vale {{path/to/file}}`

- Check the style of a file with a specified configuration:

`vale --config='{{path/to/.vale.ini}}' {{path/to/file}}`

- Output the results in JSON format:

`vale --output=JSON {{path/to/file}}`

- Check style issues at the specific severity and higher:

`vale --minAlertLevel={{suggestion|warning|error}} {{path/to/file}}`

- Check the style from `stdin`, specifying markup format:

`cat {{file.md}} | vale --ext=.md`

- List the current configuration:

`vale ls-config`
