---
title: "Validate PHP Code - Detect Coding Standards with phpcs | Online Free DevTools by Hexmos"
name: phpcs
path: /freedevtools/tldr/php/phpcs
canonical: "https://hexmos.com/freedevtools/tldr/php/phpcs/"
description: "Validate PHP code against coding standards with phpcs. Detect coding style violations and improve code quality. Free online tool, no registration required."
category: common
keywords:
- PHP code sniffer
- PHP coding standards
- code style validator
- PHP syntax checker
- coding standards fixer
- PEAR coding standard
- PSR coding standards
- PHP code analysis
- command line validator
- PHP code quality
features:
- Sniff directories for code style violations
- Validate against specified coding standards
- Output reports in various formats (full, xml, json)
- Configure settings for the validation process
- Include external files for customization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpcs

> Tokenize PHP, JavaScript and CSS files to detect violations of a defined set of coding standards.
> More information: <https://github.com/squizlabs/PHP_CodeSniffer>.

- Sniff the specified directory for issues (defaults to the PEAR standard):

`phpcs {{path/to/directory}}`

- Display a list of installed coding standards:

`phpcs -i`

- Specify a coding standard to validate against:

`phpcs {{path/to/directory}} --standard {{standard}}`

- Specify comma-separated file extensions to include when sniffing:

`phpcs {{path/to/directory}} --extensions {{file_extension1,file_extension2,...}}`

- Specify the format of the output report (e.g. `full`, `xml`, `json`, `summary`):

`phpcs {{path/to/directory}} --report {{format}}`

- Set configuration variables to be used during the process:

`phpcs {{path/to/directory}} --config-set {{key}} {{value}}`

- A comma-separated list of files to load before processing:

`phpcs {{path/to/directory}} --bootstrap {{path/to/file1,path/to/file2,...}}`

- Don't recurse into subdirectories:

`phpcs {{path/to/directory}} -l`
