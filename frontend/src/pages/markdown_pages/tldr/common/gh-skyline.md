---
title: "Generate GitHub Skyline - Visualize Contributions | Free DevTools"
name: gh-skyline
path: /freedevtools/tldr/common/gh-skyline
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-skyline/"
description: "Generate GitHub contribution skyline with gh-skyline. Visualize your GitHub activity in 3D and create STL files for 3D printing. Free online tool, no registration required."
category: common
keywords:
- GitHub Skyline Generator
- GitHub Contribution Visualizer
- 3D Model Generator
- STL File Generator
- GitHub Activity Graph
- gh Skyline Command
- GitHub Profile Visualizer
- GitHub Contributions 3D
- Git Activity Skyline
- GitHub Activity to STL
features:
- Generate 3D model of GitHub contribution history
- Create STL files for 3D printing
- Visualize contribution activity for a specific user and year
- Generate a full skyline from the user's join year to the current year
- Specify output file path for generated skyline
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh skyline

> Generate a 3D model of your GitHub contribution history.
> By default, it will create a `{username}-{year}-github-skyline.stl` file in the current directory.
> More information: <https://github.com/github/gh-skyline>.

- Generate a skyline STL file for the current year and authenticated user:

`gh skyline`

- Generate a skyline for a specific user and year:

`gh skyline {{[-u|--user]}} {{username}} {{[-y|--year]}} {{year}}`

- Generate a skyline for a range of years:

`gh skyline {{[-u|--user]}} {{username}} {{[-y|--year]}} {{first_year}}-{{last_year}}`

- Generate a full skyline (from the user's join year to the current year):

`gh skyline {{[-u|--user]}} {{username}} {{[-f|--full]}}`

- Enable debug logging:

`gh skyline {{[-d|--debug]}}`

- Generate a skyline and specify the output file path:

`gh skyline {{[-o|--output]}} {{path/to/output_file.stl}}`

- Open the GitHub profile for a specific user:

`gh skyline {{[-u|--user]}} {{username}} {{[-w|--web]}}`

- Display help:

`gh skyline {{[-h|--help]}}`
