---
title: "Calculate Code Metrics - mh_metric Tool | Online Free DevTools by Hexmos"
name: mh_metric
path: "/freedevtools/tldr/common/mh_metric/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mh_metric/"
description: "Calculate code metrics with mh_metric for MATLAB and Octave. Improve code quality, identify complexity, and enforce coding standards. Free online tool, no registration required."
category: common
keywords:
  - MATLAB code metrics
  - Octave code metrics
  - Code complexity analysis
  - Code quality assessment
  - Software metrics calculator
  - Static code analysis
  - Programming metrics
  - mh_metric command
  - Code analysis tool
  - Software quality metrics
features:
  - Calculate various code metrics for MATLAB and Octave.
  - Generate reports in HTML or JSON format.
  - Analyze code in specified files.
  - Analyze code in specified directories recursively.
  - Enforce coding standards by evaluating metrics.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mh_metric

> Calculate and enforce code metrics for MATLAB or Octave code.
> More information: <https://misshit.org>.

- Print the code metrics for the specified files:

`mh_metric {{path/to/file1.m path/to/file2.m ...}}`

- Print the code metrics for the specified Octave files:

`mh_metric --octave {{path/to/file1.m path/to/file2.m ...}}`

- Print the code metrics for the specified directory recursively:

`mh_metric {{path/to/directory}}`

- Print the code metrics for the current directory:

`mh_metric`

- Print the code metrics report in HTML or JSON format:

`mh_metric --{{html|json}} {{path/to/output_file}}`
