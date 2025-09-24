---
title: "Vale Style Checker - Validate Text Style | Online Free DevTools by Hexmos"
name: vale
path: /freedevtools/tldr/common/vale
canonical: "https://hexmos.com/freedevtools/tldr/common/vale/"
description: "Validate text style with Vale, a powerful command-line style checker for Markdown and AsciiDoc files. Ensure consistency and quality in your writing. Free online tool, no registration required."
category: common
keywords:
  - markdown style validation
  - asciidoc style validation
  - text style checker CLI
  - vale style linter
  - command line style guide
  - documentation style guide
  - vale configuration file
  - vale alert levels
  - markdown linting vale
  - asciidoc linting vale
features:
  - Check style of Markdown and AsciiDoc files.
  - Customize style checking with configuration files.
  - Output style results in JSON format for programmatic use.
  - Define minimum alert levels (suggestion, warning, error) for style issues.
  - Check style from standard input with markup format specification.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
