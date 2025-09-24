---
title: "Analyze Inclusivity - Check Text with Alex | Online Free DevTools by Hexmos"
name: alex
path: /freedevtools/tldr/common/alex
canonical: "https://hexmos.com/freedevtools/tldr/common/alex/"
description: "Analyze text inclusivity with Alex, a command-line tool for identifying insensitive writing. Detect gender-biased and unequal phrasing in your documents. Free online tool, no registration required."
category: common
keywords:
- inclusivity checker
- text analysis
- insensitive writing
- bias detection
- inclusive language
- alex command line
- gender bias
- race bias
- language sensitivity
- text phrasing
features:
- Analyze text from standard input
- Analyze multiple files simultaneously
- Exclude specific files from analysis
- Identify potentially offensive or exclusionary phrases
- Improve the sensitivity of your writing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# alex

> Catch insensitive, inconsiderate writing.
> It helps you find gender favouring, polarising, race related, religion inconsiderate, or other unequal phrasing in text.
> More information: <https://github.com/get-alex/alex>.

- Analyze text from `stdin`:

`echo {{His network looks good}} | alex --stdin`

- Analyze all files in the current directory:

`alex`

- Analyze a specific file:

`alex {{path/to/file.md}}`

- Analyze all Markdown files except `example.md`:

`alex *.md !{{example.md}}`
