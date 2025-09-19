---
title: "Count TeX Words - Analyze LaTeX Documents | Online Free DevTools by Hexmos"
name: texcount
path: /freedevtools/tldr/common/texcount
canonical: "https://hexmos.com/freedevtools/tldr/common/texcount/"
description: "Analyze TeX documents and count words with Texcount. Quickly estimate LaTeX document length, including subfiles and chapters. Free online tool, no registration required."
category: common
keywords:
- TeX word count
- LaTeX word counter
- document word count
- TeX document analysis
- LaTeX document statistics
- command line word count
- texcount command
- word count by chapter
- TeX subfile counting
- LaTeX subfile counting
features:
- Count words in TeX documents, excluding macros.
- Merge and count words in subdocuments using `\input` or `\include`.
- List word counts for individual subfiles in a TeX project.
- Produce word counts by chapter instead of subsection.
- Provide verbose output for detailed word count analysis.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# texcount

> Count words in TeX documents omitting macros.
> Note: If the TeX document uses `\include` or `\input` and you want to count the included files, `texcount` must be run in the directory of the root TeX file.
> More information: <https://app.uio.no/ifi/texcount/howto.html>.

- Count words in a TeX file:

`texcount {{path/to/file.tex}}`

- Count words in a document and subdocuments built with `\input` or `\include`:

`texcount -merge {{file.tex}}`

- Count words in a document and subdocuments, listing each file separately (and a total count):

`texcount -inc {{file.tex}}`

- Count words in a document and subdocuments, producing subcounts by chapter (instead of subsection):

`texcount -merge -sub=chapter {{file.tex}}`

- Count words with verbose output:

`texcount -v {{path/to/file.tex}}`
