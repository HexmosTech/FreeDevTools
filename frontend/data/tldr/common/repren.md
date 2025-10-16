---
title: "Rename Files - Replace Strings with Repren | Online Free DevTools by Hexmos"
name: repren
path: "/freedevtools/tldr/common/repren/"
canonical: "https://hexmos.com/freedevtools/tldr/common/repren/"
description: "Replace strings to rename files easily with Repren. Perform batch file renaming and text substitution with regular expressions. Free online tool, no registration required."
category: common
keywords:
- string replacement
- file renaming
- batch rename
- regular expression
- pattern matching
- mass rename
- filename editor
- text substitution
- linux rename
- macos rename
features:
- Rename files using literal string replacement.
- Rename files using regular expressions.
- Perform find and replace operations on file contents.
- Execute both rename and find-and-replace using pattern files.
- Perform case-insensitive renames.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# repren

> Multi-pattern string replacement and file renaming tool.
> More information: <https://github.com/jlevy/repren>.

- Do a dry-run renaming a directory of PNGs with a literal string replacement:

`repren {{[-n|--dry-run]}} --rename --literal --from '{{find_string}}' --to '{{replacement_string}}' {{*.png}}`

- Do a dry-run renaming a directory of JPEGs with a `regex`:

`repren --rename {{[-n|--dry-run]}} --from '{{regex}}' --to '{{replacement_string}}' {{*.jpg}} {{*.jpeg}}`

- Do a find-and-replace on the contents of a directory of CSV files:

`repren --from '{{([0-9]+) example_string}}' --to '{{replacement_string \1}}' {{*.csv}}`

- Do both a find-and-replace and a rename operation at the same time, using a pattern file:

`repren {{[-p|--patterns]}} {{path/to/patfile.ext}} --full {{*.txt}}`

- Do a case-insensitive rename:

`repren --rename {{[-i|--insensitive]}} {{[-p|--patterns]}} {{path/to/patfile.ext}} *`
