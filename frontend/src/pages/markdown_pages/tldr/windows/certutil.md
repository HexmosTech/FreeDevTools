---
title: "CertUtil - Manage Certificate Information | Free DevTools"
name: certutil
path: "/freedevtools/tldr/widows/certutil"
canonical: "https://hexmos.com/freedevtools/tldr/widows/certutil/"
description: "Manage certificate information with CertUtil. Encode, decode, and hash files for secure data handling using this command-line tool. Free online tool, no registration required."
category: windows
keywords:
  - certificate management
  - certutil command
  - file encoding
  - file decoding
  - cryptographic hashing
  - windows certificate utility
  - certutil examples
  - base64 encode
  - hexadecimal encode
  - sha256 hash
features:
  - Encode files to Base64 format
  - Decode Base64-encoded files
  - Generate cryptographic hashes for files
  - Encode files in hexadecimal format
  - Display configuration information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# certutil

> A tool to manage and configure certificate information.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/certutil>.

- Dump the configuration information or files:

`certutil {{filename}}`

- Encode a file in hexadecimal:

`certutil -encodehex {{path\to\input_file}} {{path\to\output_file}}`

- Encode a file to Base64:

`certutil -encode {{path\to\input_file}} {{path\to\output_file}}`

- Decode a Base64-encoded file:

`certutil -decode {{path\to\input_file}} {{path\to\output_file}}`

- Generate and display a cryptographic hash over a file:

`certutil -hashfile {{path\to\input_file}} {{md2|md4|md5|sha1|sha256|sha384|sha512}}`
