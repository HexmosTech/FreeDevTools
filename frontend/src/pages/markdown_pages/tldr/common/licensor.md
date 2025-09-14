---
title: "Generate License Files - Licensor | Free DevTools"
name: licensor
path: /freedevtools/tldr/common/licensor
canonical: "https://hexmos.com/freedevtools/tldr/common/licensor/"
description: "Generate license files effortlessly with Licensor. Quickly create MIT, Apache, and other open-source licenses. Free online tool, no registration required."
category: common
keywords:
- license generator
- open source license
- MIT license
- Apache license
- GPL license
- BSD license
- license creator
- software license
- license template
- command line license
features:
- Generate licenses from the command line
- Support for common open-source licenses (MIT, Apache, GPL, BSD)
- Allow specifying a copyright holder
- List available licenses
- List available license exceptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# licensor

> Write licenses to `stdout`.
> More information: <https://github.com/raftario/licensor>.

- Write the MIT license to a file named `LICENSE`:

`licensor {{MIT}} > {{LICENSE}}`

- Write the MIT license with a placeholder copyright notice to a file named `LICENSE`:

`licensor {{[-p|--keep-placeholder]}} {{MIT}} > {{LICENSE}}`

- Specify a copyright holder named Bobby Tables:

`licensor {{MIT}} "{{Bobby Tables}}" > {{LICENSE}}`

- Specify licence exceptions with a WITH expression:

`licensor "{{Apache-2.0 WITH LLVM-exception}}" > {{LICENSE}}`

- List all available licenses:

`licensor {{[-l|--licenses]}}`

- List all available exceptions:

`licensor {{[-e|--exceptions]}}`
