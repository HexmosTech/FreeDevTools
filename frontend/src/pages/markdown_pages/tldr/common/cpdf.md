---
title: "Control PDF Files - Manipulate Documents | Free DevTools"
name: cpdf
path: "/freedevtools/tldr/common/cpdf"
canonical: "https://hexmos.com/freedevtools/tldr/common/cpdf/"
description: "Control PDF files with cpdf, a command-line PDF manipulation tool. Merge, split, encrypt, and decrypt PDF documents easily. Free online tool, no registration required."
category: common
keywords:
- pdf manipulation
- pdf merge
- pdf split
- pdf encryption
- pdf decryption
- pdf metadata editor
- command-line pdf tools
- pdf page selection
- pdf bookmark extraction
- pdf annotation extraction
features:
- Select and extract specific pages from PDF documents
- Merge multiple PDF files into a single document
- Encrypt and decrypt PDF files with password protection
- Split PDF documents into smaller chunks
- Extract bookmarks and annotations from PDF files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpdf

> Manipulate PDF files.
> More information: <https://www.coherentpdf.com/cpdfmanual/cpdfmanual.html>.

- Select pages 1, 2, 3 and 6 from a source document and write those to a destination document:

`cpdf {{path/to/source_document.pdf}} {{1-3,6}} -o {{path/to/destination_document.pdf}}`

- Merge two documents into a new one:

`cpdf -merge {{path/to/source_document_one.pdf}} {{path/to/source_document_two.pdf}} -o {{path/to/destination_document.pdf}}`

- Show the bookmarks of a document:

`cpdf -list-bookmarks {{path/to/document.pdf}}`

- Split a document into ten-page chunks, writing them to `chunk001.pdf`, `chunk002.pdf`, etc:

`cpdf -split {{path/to/document.pdf}} -o {{path/to/chunk%%%.pdf}} -chunk {{10}}`

- Encrypt a document using 128bit encryption, providing `fred` as owner password and `joe` as user password:

`cpdf -encrypt {{128bit}} {{fred}} {{joe}} {{path/to/source_document.pdf}} -o {{path/to/encrypted_document.pdf}}`

- Decrypt a document using the owner password `fred`:

`cpdf -decrypt {{path/to/encrypted_document.pdf}} owner={{fred}} -o {{path/to/decrypted_document.pdf}}`

- Show the annotations of a document:

`cpdf -list-annotations {{path/to/document.pdf}}`

- Create a new document from an existing one with additional metadata:

`cpdf -set-metadata {{path/to/metadata.xml}} {{path/to/source_document.pdf}} -o {{path/to/destination_document.pdf}}`
