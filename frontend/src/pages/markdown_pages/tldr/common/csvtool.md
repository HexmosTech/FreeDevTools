---
title: "CSV Extract - Filter CSV Data | Free DevTools"
name: csvtool
path: /freedevtools/tldr/common/csvtool
canonical: "https://hexmos.com/freedevtools/tldr/common/csvtool/"
description: "Extract data with csvtool. Filter and search CSV data using command line arguments, enhancing your data processing workflow. Free online tool, no registration required."
category: common
keywords:
- CSV extract
- CSV filter
- CSV search
- CSV data extraction
- CSV column selection
- command-line CSV tool
- CSV data manipulation
- Linux CSV tools
- macOS CSV tools
- CSV parsing
features:
- Extract specific columns from CSV files
- Filter CSV rows based on matching content
- Search for data within specific CSV columns
- Combine multiple csvtool commands for complex filtering
- Process CSV data directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# csvtool

> Utility to filter and extract data from CSV formatted sources.
> More information: <https://github.com/maroofi/csvtool>.

- Extract the second column from a CSV file:

`csvtool {{[-c|--column]}} {{2}} {{path/to/file.csv}}`

- Extract the second and fourth columns from a CSV file:

`csvtool {{[-c|--column]}} {{2,4}} {{path/to/file.csv}}`

- Extract lines from a CSV file where the second column exactly matches 'Foo':

`csvtool {{[-c|--column]}} {{2}} {{[-s|--search]}} '{{^Foo$}}' {{path/to/file.csv}}`

- Extract lines from a CSV file where the second column starts with 'Bar':

`csvtool {{[-c|--column]}} {{2}} {{[-s|--search]}} '{{^Bar}}' {{path/to/file.csv}}`

- Find lines in a CSV file where the second column ends with 'Baz' and then extract the third and sixth columns:

`csvtool {{[-c|--column]}} {{2}} {{[-s|--search]}} '{{Baz$}}' {{path/to/file.csv}} | csvtool {{[-e|--no-header]}} {{[-c|--column]}} {{3,6}}`
