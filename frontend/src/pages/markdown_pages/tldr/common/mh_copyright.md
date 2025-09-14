---
title: "Format Copyright - Adjust MATLAB/Octave Headers | Free DevTools"
name: mh_copyright
path: /freedevtools/tldr/common/mh_copyright
canonical: "https://hexmos.com/freedevtools/tldr/common/mh_copyright/"
description: "Format copyright headers automatically with mh_copyright. Update year ranges in MATLAB/Octave code files. Free online tool, no registration required."
category: common
keywords:
- MATLAB copyright header
- Octave copyright header
- Code copyright updater
- File header manager
- MATLAB license manager
- Octave license manager
- M-file copyright tool
- Script copyright formatter
- MATLAB file modification
- Octave file modification
features:
- Update copyright year ranges in MATLAB/Octave files
- Automate copyright header adjustments
- Apply copyright updates to multiple files
- Specify the primary entity for the copyright notice
- Update all files in a directory recursively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mh_copyright

> Adjust copyright headers for MATLAB or Octave code.
> More information: <https://misshit.org>.

- Update the year (range) to include the current year for the specified files:

`mh_copyright --primary-entity="{{entity}}" --update-year {{path/to/file_or_directory1.m path/to/file_or_director2.m ...}}`

- Update the year (range) to include the current year for all files:

`mh_copyright --primary-entity="{{entity}}" --update-year`
