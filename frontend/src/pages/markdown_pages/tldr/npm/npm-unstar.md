---
title: "Unstar NPM Package - Remove Package Stars | Free DevTools"
name: npm-unstar
path: /freedevtools/tldr/npm/npm-unstar
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-unstar/"
description: "Unstar NPM packages effortlessly with NPM Unstar. Remove starred packages from your NPM registry and manage your favorite packages easily. Free online tool, no registration required."
category: common
keywords:
- npm unstar
- npm remove star
- npm package manager
- javascript package management
- node package unstar
- command line tools
- npm cli
- npm registry management
- package unstarring
- npm package removal
features:
- Remove a package from your starred list.
- Unstar packages from specific NPM registries.
- Support for authentication when unstarring private packages.
- Utilize OTP for two-factor authentication.
- Control logging level during the unstarring process.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm unstar

> Remove the favorite/star mark from a package.
> More information: <https://docs.npmjs.com/cli/npm-unstar>.

- Unstar a public package from the default registry:

`npm unstar {{package_name}}`

- Unstar a package within a specific scope:

`npm unstar @{{scope}}/{{package_name}}`

- Unstar a package from a specific registry:

`npm unstar {{package_name}} --registry {{registry_url}}`

- Unstar a private package that requires authentication:

`npm unstar {{package_name}} --auth-type {{legacy|oauth|web|saml}}`

- Unstar a package by providing an OTP for two-factor authentication:

`npm unstar {{package_name}} --otp {{otp}}`

- Unstar a package with a specific logging level:

`npm unstar {{package_name}} --loglevel {{silent|error|warn|notice|http|timing|info|verbose|silly}}`
