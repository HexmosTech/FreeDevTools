---
title: "Fix PHP Code - Correct Coding Standards with phpcbf | Free DevTools"
name: phpcbf
path: /freedevtools/tldr/common/phpcbf
canonical: "https://hexmos.com/freedevtools/tldr/common/phpcbf/"
description: "Fix PHP code style and standards with phpcbf. Automatically correct coding violations and enforce consistency using various coding standards. Free online tool, no registration required."
category: common
keywords:
- PHP code fixer
- PHP coding standards
- PHP code beautifier
- PHP code style
- phpcbf command line
- PHP CS Fixer
- PHP linting tool
- PHP code formatter
- PHP coding style checker
- PSR coding standards
features:
- Automatically fix PHP coding standard violations.
- Enforce coding style consistency across projects.
- Support for various coding standards (PEAR, PSR1, PSR2, etc.).
- Integrate with CI/CD pipelines for automated code formatting.
- Automatically correct coding violations using the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpcbf

> Fix violations detected by phpcs.
> More information: <https://github.com/squizlabs/PHP_CodeSniffer>.

- Fix issues in the specified directory (defaults to the PEAR standard):

`phpcbf {{path/to/directory}}`

- Display a list of installed coding standards:

`phpcbf -i`

- Specify a coding standard to validate against:

`phpcbf {{path/to/directory}} --standard {{standard}}`

- Specify comma-separated file extensions to include when sniffing:

`phpcbf {{path/to/directory}} --extensions {{file_extension1,file_extension2,...}}`

- A comma-separated list of files to load before processing:

`phpcbf {{path/to/directory}} --bootstrap {{path/to/file1,path/to/file2,...}}`

- Don't recurse into subdirectories:

`phpcbf {{path/to/directory}} -l`
