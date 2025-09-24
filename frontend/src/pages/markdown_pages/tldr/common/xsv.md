---
title: "Control CSV Files - xsv Toolkit | Online Free DevTools by Hexmos"
name: xsv
path: /freedevtools/tldr/common/xsv
canonical: "https://hexmos.com/freedevtools/tldr/common/xsv/"
description: "Control CSV files easily with xsv toolkit. Analyze and manipulate CSV data efficiently using command line. Free online tool, no registration required."
category: common
keywords:
- CSV file analysis
- CSV data manipulation
- command line CSV tool
- xsv CSV toolkit
- Rust CSV processor
- CSV column selection
- CSV data overview
- common
- linux
- macos
features:
- Inspect CSV file headers
- Count entries in CSV files
- Generate CSV data statistics
- Select specific CSV columns
- Join CSV files based on columns
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xsv

> A CSV toolkit written in Rust.
> More information: <https://github.com/BurntSushi/xsv>.

- Inspect the headers of a file:

`xsv headers {{path/to/file.csv}}`

- Count the number of entries:

`xsv count {{path/to/file.csv}}`

- Get an overview of the shape of entries:

`xsv stats {{path/to/file.csv}} | xsv table`

- Select a few columns:

`xsv select {{column1,column2}} {{path/to/file.csv}}`

- Show 10 random entries:

`xsv sample {{10}} {{path/to/file.csv}}`

- Join a column from one file to another:

`xsv join --no-case {{column1}} {{path/to/file1.csv}} {{column2}} {{path/to/file2.csv}} | xsv table`
