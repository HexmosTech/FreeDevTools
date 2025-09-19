---
title: "Datamash - Process Data with Command Line | Online Free DevTools by Hexmos"
name: datamash
path: /freedevtools/tldr/linux/datamash
canonical: "https://hexmos.com/freedevtools/tldr/linux/datamash/"
description: "Process textual data with Datamash, a powerful command-line tool for performing statistical operations. Analyze and manipulate data efficiently. Free online tool, no registration required."
category: linux
keywords:
- data processing
- command line data manipulation
- linux data analysis
- datamash statistics
- textual data processing
- numeric data aggregation
- csv data manipulation
- data summarization linux
- statistical analysis linux
- gnu datamash tool
features:
- Calculate max, min, mean, and median of data columns
- Aggregate data from multiple input files
- Perform basic statistical analysis on command line
- Round numeric results to a specified precision
- Ignore specified values during calculations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# datamash

> Perform basic numeric, textual and statistical operations on input textual data files.
> More information: <https://www.gnu.org/software/datamash/manual/datamash.html#Invoking-datamash>.

- Get max, min, mean and median of a single column of numbers:

`seq 3 | datamash max 1 min 1 mean 1 median 1`

- Get the mean of a single column of float numbers (floats must use "," and not "."):

`echo -e '1.0\n2.5\n3.1\n4.3\n5.6\n5.7' | tr '.' ',' | datamash mean 1`

- Get the mean of a single column of numbers with a given decimal precision:

`echo -e '1\n2\n3\n4\n5\n5' | datamash {{[-R|--round]}} {{number_of_decimals_wanted}} mean 1`

- Get the mean of a single column of numbers ignoring "Na" and "NaN" (literal) strings:

`echo -e '1\n2\nNa\n3\nNaN' | datamash --narm mean 1`
