---
title: "Format Numbers - Convert Numbers to Human-Readable Format | Online Free DevTools by Hexmos"
name: numfmt
path: /freedevtools/tldr/common/numfmt
canonical: "https://hexmos.com/freedevtools/tldr/common/numfmt/"
description: "Format numbers with numfmt and convert them into human-readable strings or SI units. Free online tool, no registration required."
category: common
keywords:
- number formatting
- human-readable numbers
- SI units conversion
- IEC units conversion
- linux numfmt
- macos numfmt
- command line number format
- number string converter
- data formatting
- command line data conversion
features:
- Convert numbers to human-readable format
- Convert numbers to SI units
- Convert numbers to IEC units
- Format numbers with padding and alignment
- Parse and format numbers from command line output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# numfmt

> Convert numbers to and from human-readable strings.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/numfmt-invocation.html>.

- Convert 1.5K (SI Units) to 1500:

`numfmt --from si 1.5K`

- Convert 5th field (1-indexed) to IEC Units without converting header:

`ls -l | numfmt --header=1 --field 5 --to iec`

- Convert to IEC units, pad with 5 characters, left aligned:

`du {{[-s|--summarize]}} * | numfmt --to iec --format "%-5f"`
