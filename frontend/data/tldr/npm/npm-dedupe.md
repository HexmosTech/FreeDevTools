---
title: "Dedupe NPM Packages - Reduce Node Modules Duplicates | Online Free DevTools by Hexmos"
name: npm-dedupe
path: "/freedevtools/tldr/npm/npm-dedupe/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-dedupe/"
description: "Reduce NPM package duplicates with npm-dedupe. Optimize your node_modules directory and shrink bundle sizes. Free online tool, no registration required."
category: common
keywords:
- npm dedupe
- node modules deduplication
- npm package optimization
- javascript dependency management
- npm shrinkwrap
- package-lock.json
- npm cli
- node modules cleanup
- npm install optimization
- javascript project efficiency
features:
- Reduce duplication in the node_modules directory.
- Follow package-lock.json or npm-shrinkwrap.json configurations.
- Execute deduplication in strict mode for thorough optimization.
- Skip optional or peer dependencies during the process.
- Provide detailed logging for debugging and troubleshooting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm dedupe

> Reduce duplication in the `node_modules` directory.
> More information: <https://docs.npmjs.com/cli/npm-dedupe>.

- Deduplicate packages in `node_modules`:

`npm {{[ddp|dedupe]}}`

- Follow `package-lock.json` or `npm-shrinkwrap.json` during deduplication:

`npm {{[ddp|dedupe]}} --lock`

- Run deduplication in strict mode:

`npm {{[ddp|dedupe]}} --strict`

- Skip optional/peer dependencies during deduplication:

`npm {{[ddp|dedupe]}} --omit {{optional|peer}}`

- Enable detailed logging for troubleshooting:

`npm {{[ddp|dedupe]}} --loglevel verbose`

- Limit deduplication to a specific package:

`npm {{[ddp|dedupe]}} {{package_name}}`
