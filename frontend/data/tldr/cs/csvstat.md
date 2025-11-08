---
title: "Analyze CSV Data - Descriptive Statistics | Online Free DevTools by Hexmos"
name: csvstat
path: "/freedevtools/tldr/cs/csvstat/"
canonical: "https://hexmos.com/freedevtools/tldr/cs/csvstat/"
description: "Analyze CSV data quickly with csvstat, a command-line tool for generating descriptive statistics. Get insights into your data structure and values effortlessly. Free online tool, no registration required."
category: common
keywords:
- CSV data analysis
- CSV statistics tool
- CSV column summary
- CSV descriptive statistics
- CSV command line tool
- CSV unique values
- CSV data profiling
- CSV data exploration
- CSV file analyzer
- Linux CSV statistics
features:
- Calculate descriptive statistics for CSV columns
- Display sums for numeric columns in CSV files
- Determine the maximum value length in CSV columns
- Count unique values within a specific CSV column
- Analyze and profile CSV data from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# csvstat

> Print descriptive statistics for all columns in a CSV file.
> Included in csvkit.
> More information: <https://csvkit.readthedocs.io/en/latest/scripts/csvstat.html>.

- Show all stats for all columns:

`csvstat {{data.csv}}`

- Show all stats for columns 2 and 4:

`csvstat {{[-c|--columns]}} {{2,4}} {{data.csv}}`

- Show sums for all columns:

`csvstat --sum {{data.csv}}`

- Show the max value length for column 3:

`csvstat {{[-c|--columns]}} {{3}} --len {{data.csv}}`

- Show the number of unique values in the "name" column:

`csvstat {{[-c|--columns]}} {{name}} --unique {{data.csv}}`
