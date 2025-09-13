---
title: "Report NPM Bugs - Package Bug Reporting | Free DevTools"
name: npm-bugs
path: /freedevtools/tldr/npm/npm-bugs
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-bugs/"
description: "Report NPM bugs quickly with npm-bugs. Instantly open bug trackers for your packages directly from the command line. Free online tool, no registration required."
category: common
keywords:
- npm bug report
- npm package bugs
- javascript bug tracker
- nodejs bug reporting
- npm bugs command
- npm package manager bugs
- npm bug URL
- node package bugs
- npm cli bugs
- npm bug workflow
features:
- Open bug trackers for specific npm packages
- Open bug trackers for the current package
- Configure the default browser for opening URLs
- Control URL opening behavior (browser vs. terminal)
- Report package issues directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm bugs

> Report bugs for a package in a web browser.
> Attempts to open the package's bug tracker URL or support email.
> More information: <https://docs.npmjs.com/cli/npm-bugs>.

- Report bugs for a specific package by opening the bug tracker for the specified package:

`npm bugs {{package_name}}`

- Open the bug tracker for the current package by searching for a `package.json` file and using its name:

`npm bugs`

- Configure the browser used to open URLs by setting your preferred browser for `npm` commands:

`npm {{[c|config]}} set browser {{browser_name}}`

- Control URL opening: set `browser` to `true` for the system URL opener, or `false` to print URLs in the terminal:

`npm {{[c|config]}} set browser {{true|false}}`
