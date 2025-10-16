---
title: "RHash - Generate Message Digests | Online Free DevTools by Hexmos"
name: rhash
path: "/freedevtools/tldr/common/rhash/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rhash/"
description: "Generate message digests with RHash. Calculate CRC32, SHA1, SHA3 checksums for files and messages. Free online tool, no registration required."
category: common
keywords:
- message digests generator
- checksum calculator
- rhash checksum
- crc32 generator
- sha1 hash
- sha3 digest
- sfv file generator
- integrity checker
- file checksum linux
- rhash command line
features:
- Calculate various message digests (CRC32, SHA1, SHA3)
- Verify file integrity using SFV files
- Process directories recursively
- Output digests in multiple formats (base64, BSD)
- Customize output using printf templates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rhash

> Calculate or check common message digests.
> More information: <https://rhash.sourceforge.net/manpage.php>.

- Calculate default CRC32 digests of a file:

`rhash {{path/to/file}}`

- Recursively process a directory to generate an SFV file using SHA1:

`rhash --sha1 --recursive {{path/to/folder}} > {{path/to/output.sfv}}`

- Verify the integrity of files based on an SFV file:

`rhash --check {{path/to/file.sfv}}`

- Calculate the SHA3 digest of a text message:

`rhash --sha3-256 --message '{{message}}'`

- Calculate CRC32 digest of a file and output digest encoded in base64 using BSD format:

`rhash --base64 --bsd {{path/to/file}}`

- Use custom output template:

`rhash --printf '{{%p\t%s\t%{mtime}\t%m\n}}' {{path/to/file}}`
