---
title: "Extract MIME Attachments - Rip Email Content | Online Free DevTools by Hexmos"
name: ripmime
path: /freedevtools/tldr/linux/ripmime
canonical: "https://hexmos.com/freedevtools/tldr/linux/ripmime/"
description: "Extract MIME attachments with ripmime.  Unpack email content, recover lost files, and analyze email structure effortlessly. Free online tool, no registration required."
category: linux
keywords:
- MIME attachment extractor
- email attachment recovery
- linux email analysis
- ripmime linux command
- extract email content
- MIME decoder
- email file parser
- command-line email tool
- linux attachment tool
- ripmime file extraction
features:
- Extract attachments from MIME encoded emails
- Save extracted files to a specified directory
- Display verbose output for debugging
- Provide detailed information about the decoding process
- Process email content directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ripmime

> Extract attachments out of a MIME encoded email package.
> More information: <https://pldaniels.com/ripmime>.

- Extract file contents in the current directory:

`ripmime -i {{path/to/file}}`

- Extract file contents in a specific directory:

`ripmime -i {{path/to/file}} -d {{path/to/directory}}`

- Extract file contents and print verbose output:

`ripmime -i {{path/to/file}} -v`

- Get detailed information about the whole decoding process:

`ripmime -i {{path/to/file}} --debug`
