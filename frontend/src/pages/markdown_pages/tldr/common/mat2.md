---
title: "Metadata Removal - Anonymize Files with mat2 | Free DevTools"
name: mat2
path: /freedevtools/tldr/common/mat2
canonical: "https://hexmos.com/freedevtools/tldr/common/mat2/"
description: "Anonymize files with mat2. Remove metadata from various file formats to protect privacy. Free online tool, no registration required."
category: common
keywords:
- file metadata removal
- mat2 metadata cleaner
- metadata anonymization tool
- file privacy protection
- remove exif data
- metadata scrubbing
- command line metadata tool
- linux metadata removal
- macos metadata removal
- file format anonymizer
features:
- List supported file formats
- Remove metadata from files
- Display detailed output of metadata removal
- Show file metadata without removing
- Remove metadata in place without backup
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mat2

> Anonymise various file formats by removing metadata.
> More information: <https://0xacab.org/jvoisin/mat2>.

- List supported file formats:

`mat2 --list`

- Remove metadata from a file:

`mat2 {{path/to/file}}`

- Remove metadata from a file and print detailed output to the console:

`mat2 --verbose {{path/to/file}}`

- Show metadata in a file without removing it:

`mat2 --show {{path/to/file}}`

- Partially remove metadata from a file:

`mat2 --lightweight {{path/to/file}}`

- Remove metadata from a file in place, without creating a backup:

`mat2 --inplace {{path/to/file}}`
