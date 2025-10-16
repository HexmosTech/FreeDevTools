---
title: "Install NPM Dependencies - Clean Install with npm ci | Online Free DevTools by Hexmos"
name: npm-ci
path: "/freedevtools/tldr/npm/npm-ci/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-ci/"
description: "Install NPM dependencies cleanly with npm ci. Ensure consistent builds by installing packages based on package-lock.json. Free online tool, no registration required."
category: common
keywords:
- npm ci
- npm install clean
- node dependencies install
- package-lock install
- npm shrinkwrap install
- ci cd npm
- npm automation
- javascript dependencies
- node modules install
- npm ignore scripts
features:
- Installs project dependencies from `package-lock.json` or `npm-shrinkwrap.json`.
- Skips specified dependency types like dev, optional, or peer dependencies.
- Ignores pre- and post-scripts defined in `package.json`.
- Ensures consistent builds across different environments.
- Provides a faster and more reliable installation process.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm ci

> Clean install of `npm` project dependencies for automated environments.
> Installs packages based on `package-lock.json` or `npm-shrinkwrap.json`.
> More information: <https://docs.npmjs.com/cli/npm-ci>.

- Install project dependencies from `package-lock.json` or `npm-shrinkwrap.json`:

`npm ci`

- Install project dependencies but skip the specified dependency type:

`npm ci --omit {{dev|optional|peer}}`

- Install project dependencies without running any pre-/post-scripts defined in `package.json`:

`npm ci --ignore-scripts`
