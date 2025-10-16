---
title: "Validate MATLAB Code - Find Bugs with mh_lint | Online Free DevTools by Hexmos"
name: mh_lint
path: "/freedevtools/tldr/common/mh_lint/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mh_lint/"
description: "Validate MATLAB code with mh_lint, a static analysis tool for finding bugs and potential issues in your scripts. Free online tool, no registration required."
category: common
keywords:
- MATLAB code analysis
- Octave code linting
- MATLAB bug detection
- Octave static analysis
- MATLAB code validation
- Octave code verification
- m-file code check
- mh_lint command line
- MATLAB programming errors
- Octave script debugging
features:
- Detect potential bugs in MATLAB code
- Identify issues in Octave scripts
- Analyze code in a specified directory recursively
- Validate single MATLAB (.m) files
- Validate single Octave files with the --octave flag
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mh_lint

> Attempt to find bugs in MATLAB or Octave code.
> Please note that this tool is neither sound nor complete.
> More information: <https://misshit.org>.

- Check the current directory:

`mh_lint`

- Check a specific directory recursively:

`mh_lint {{path/to/directory}}`

- Check a MATLAB file:

`mh_lint {{path/to/file.m}}`

- Check an Octave file:

`mh_lint --octave {{path/to/file.m}}`
