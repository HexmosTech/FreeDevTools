---
title: "Translate Characters - Replace Text | Online Free DevTools by Hexmos"
name: tr
path: /freedevtools/tldr/common/tr
canonical: "https://hexmos.com/freedevtools/tldr/common/tr/"
description: "Translate characters with tr. Replace characters in text strings or files using command-line utilities. Free online tool, no registration required."
category: common
keywords:
- character translation
- text replacement
- string manipulation
- character mapping
- delete characters
- squeeze characters
- uppercase conversion
- non-printable character removal
- character set translation
- linux tr command
features:
- Replace specific characters in files
- Translate characters from command output
- Map characters between sets
- Delete specified characters from input
- Compress repeating characters in text
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tr

> Translate characters: run replacements based on single characters and character sets.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/tr-invocation.html>.

- Replace all occurrences of a character in a file, and print the result:

`tr {{find_character}} {{replace_character}} < {{path/to/file}}`

- Replace all occurrences of a character from another command's output:

`echo {{text}} | tr {{find_character}} {{replace_character}}`

- Map each character of the first set to the corresponding character of the second set:

`tr '{{abcd}}' '{{jkmn}}' < {{path/to/file}}`

- Delete all occurrences of the specified set of characters from the input:

`tr {{[-d|--delete]}} '{{input_characters}}' < {{path/to/file}}`

- Compress a series of identical characters to a single character:

`tr {{[-s|--squeeze-repeats]}} '{{input_characters}}' < {{path/to/file}}`

- Translate the contents of a file to upper-case:

`tr "[:lower:]" "[:upper:]" < {{path/to/file}}`

- Strip out non-printable characters from a file:

`tr {{[-cd|--complement --delete]}} "[:print:]" < {{path/to/file}}`
