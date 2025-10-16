---
title: "PHP Copy Paste Detector - Analyze Duplicate PHP Code | Online Free DevTools by Hexmos"
name: phpcpd
path: "/freedevtools/tldr/php/phpcpd/"
canonical: "https://hexmos.com/freedevtools/tldr/php/phpcpd/"
description: "Analyze PHP code for duplicate blocks with PHPCPD, a copy/paste detector. Improve code quality and maintainability with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- PHP code duplication analysis
- PHP copy paste detection
- PHPCPD command line
- Duplicate code detection PHP
- PHP code clone detection
- Code similarity analyzer
- Software plagiarism detection
- PHP code refactoring tool
- Code quality analysis PHP
- PHPCPD fuzzy matching
features:
- Detect duplicated code blocks in PHP files
- Analyze code using fuzzy matching for variable names
- Customize minimum line and token thresholds for detection
- Exclude specific directories from the analysis scope
- Output results in PHP-CPD XML format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# phpcpd

> A copy and paste detector for PHP code.
> More information: <https://github.com/sebastianbergmann/phpcpd>.

- Analyze duplicated code for a specific file or directory:

`phpcpd {{path/to/file_or_directory}}`

- Analyze using fuzzy matching for variable names:

`phpcpd --fuzzy {{path/to/file_or_directory}}`

- Specify a minimum number of identical lines (defaults to 5):

`phpcpd --min-lines {{number_of_lines}} {{path/to/file_or_directory}}`

- Specify a minimum number of identical tokens (defaults to 70):

`phpcpd --min-tokens {{number_of_tokens}} {{path/to/file_or_directory}}`

- Exclude a directory from analysis (must be relative to the source):

`phpcpd --exclude {{path/to/excluded_directory}} {{path/to/file_or_directory}}`

- Output the results to a PHP-CPD XML file:

`phpcpd --log-pmd {{path/to/log_file}} {{path/to/file_or_directory}}`
