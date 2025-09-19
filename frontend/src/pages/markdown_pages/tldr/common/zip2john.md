---
title: "Extract Zip Hashes - Crack Passwords | Online Free DevTools by Hexmos"
name: zip2john
path: /freedevtools/tldr/common/zip2john
canonical: "https://hexmos.com/freedevtools/tldr/common/zip2john/"
description: "Extract Zip archive hashes with zip2john for password cracking. Recover lost passwords and test security. Free online tool, no registration required."
category: common
keywords:
- zip password cracker
- zip hash extractor
- password cracking tool
- john the ripper zip
- linux password recovery
- zip security testing
- archive password analysis
- zip2john usage
- command line password cracker
- zip file vulnerability scan
features:
- Extract password hashes from ZIP archives.
- Support single-file compressed archive extraction.
- Generate hashes compatible with John the Ripper.
- Specify individual compressed files for hash extraction.
- Output hashes to a file for password cracking.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zip2john

> Extract password hashes from Zip archives for use with John the Ripper password cracker.
> This is a utility tool usually installed as part of the John the Ripper installation.
> More information: <https://www.openwall.com/john/>.

- Extract the password hash from an archive, listing all files in the archive:

`zip2john {{path/to/file.zip}}`

- Extract the password hash using [o]nly a specific compressed file:

`zip2john -o {{path/to/compressed_file}} {{path/to/file.zip}}`

- Extract the password hash from a compressed file to a specific file (for use with John the Ripper):

`zip2john -o {{path/to/compressed_file}} {{path/to/file.zip}} > {{file.hash}}`
