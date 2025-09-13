---
title: "Print Formatter - Format Files for Printing | Free DevTools"
name: pr
path: /freedevtools/tldr/common/pr
canonical: "https://hexmos.com/freedevtools/tldr/common/pr/"
description: "Format files with Print Formatter (pr) for printing. Control layout, add headers/footers, and paginate documents using the command line. Free online tool, no registration required."
category: common
keywords:
- print formatter
- file pagination
- command line printing
- format files for printing
- pr command
- linux print formatting
- gnu coreutils pr
- text formatting tool
- printing utility
- document formatting
features:
- Paginate files with customizable headers and footers.
- Number lines for easy reference in printed output.
- Merge multiple files into columns for side-by-side printing.
- Set custom page lengths and widths for precise control.
- Add line offsets for improved readability.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pr

> Paginate or columnate files for printing.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/pr-invocation.html>.

- Print multiple files with a default header and footer:

`pr {{path/to/file1 path/to/file2 ...}}`

- Print with a custom centered header:

`pr {{[-h|--header]}} "{{header}}" {{path/to/file1 path/to/file2 ...}}`

- Print with numbered lines and a custom date format:

`pr {{[-n|--number-lines]}} {{[-D|--date-format]}} "{{format}}" {{path/to/file1 path/to/file2 ...}}`

- Print all files together, one in each column, without a header or footer:

`pr {{[-m|--merge]}} {{[-T|--omit-pagination]}} {{path/to/file1 path/to/file2 ...}}`

- Print, beginning at page 2 up to page 5, with a given page length (including header and footer):

`pr +2:5 {{[-l|--length]}} {{page_length}} {{path/to/file1 path/to/file2 ...}}`

- Print with an offset for each line and a truncating custom page width:

`pr {{[-o|--indent]}} {{offset}} {{[-W|--page_width]}} {{width}} {{path/to/file1 path/to/file2 ...}}`
