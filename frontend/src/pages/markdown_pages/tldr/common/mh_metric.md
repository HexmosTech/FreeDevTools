---
title: "Code Metrics Calculator - Calculate Code Metrics with mh_metric | Online Free DevTools by Hexmos"
name: mh_metric
path: /freedevtools/tldr/common/mh_metric
canonical: "https://hexmos.com/freedevtools/tldr/common/mh_metric/"
description: "Calculate code metrics with mh_metric for MATLAB and Octave code. Analyze code complexity, assess code quality, and enforce coding standards. Free online tool, no registration required."
category: common
keywords:
  - MATLAB code metrics calculator
  - Octave code metrics analyzer
  - MATLAB code complexity analysis
  - Octave code quality assessment
  - Software metrics calculation tool
  - Static code analysis for MATLAB
  - Static code analysis for Octave
  - mh_metric command line tool
  - MATLAB code analysis tool
  - Octave code analysis tool
features:
  - Calculate various code metrics (e.g., cyclomatic complexity, lines of code).
  - Generate comprehensive reports in HTML or JSON format.
  - Analyze single files or entire directories recursively.
  - Supports both MATLAB and Octave codebases.
  - Enforce coding standards based on calculated metric thresholds.
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
