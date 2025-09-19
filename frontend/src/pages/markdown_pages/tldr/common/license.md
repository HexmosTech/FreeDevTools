---
title: "Generate Open-Source Licenses | Online Free DevTools by Hexmos"
name: license
path: /freedevtools/tldr/common/license
canonical: "https://hexmos.com/freedevtools/tldr/common/license/"
description: "Generate open-source licenses quickly with License. Customize author and year for legal compliance. Free online tool, no registration required."
category: common
keywords:
- open-source license generator
- license creation tool
- software license generation
- MIT license generator
- Apache license generator
- GPL license generator
- BSD license generator
- license command line tool
- license file creator
- open-source project licensing
features:
- Generate licenses from the command line
- Customize author name and year
- Save licenses to a file
- List available licenses
- Use default settings for quick license generation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# license

> Create license files for open-source projects.
> More information: <https://nishanths.github.io/license>.

- Print a license to `stdout`, using the defaults (auto-detected author name, and current year):

`license {{license_name}}`

- Generate a license and save it to a file:

`license -o {{path/to/file}} {{license_name}}`

- List all available licenses:

`license ls`

- Generate a license with custom author name and year:

`license --name {{author}} --year {{release_year}} {{license_name}}`
