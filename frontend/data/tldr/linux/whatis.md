---
title: "Whatis Command - Display Man Page Descriptions | Online Free DevTools by Hexmos"
name: whatis
path: "/freedevtools/tldr/linux/whatis/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/whatis/"
description: "Quickly display man page descriptions with the whatis command.  Access concise summaries and detailed information using various options. Free online tool, no registration required."
category: linux
keywords:
  - man page description
  - command line description
  - whatis command linux
  - whatis command usage
  - whatis command examples
  - unix whatis command
  - find man page summary
  - display man page info
  - whatis wildcard search
  - whatis regex search
features:
  - Display one-line descriptions from man pages.
  - Retrieve long, uncut descriptions using the --long option.
  - Search for multiple commands matching a glob pattern using --wildcard.
  - Utilize regular expressions for targeted searches with --regex.
  - Specify language for descriptions using --locale.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whatis

> Display one-line descriptions from manual pages.
> More information: <https://manned.org/whatis>.

- Display a description from a man page:

`whatis {{command}}`

- Don't cut the description off at the end of the line:

`whatis --long {{command}}`

- Display descriptions for all commands matching a glob:

`whatis --wildcard {{net*}}`

- Search man page descriptions with a `regex`:

`whatis --regex '{{wish[0-9]\.[0-9]}}'`

- Display descriptions in a specific language:

`whatis --locale={{en}} {{command}}`
