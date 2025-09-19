---
title: "NPM Star - Mark Packages as Favorites | Online Free DevTools by Hexmos"
name: npm-star
path: /freedevtools/tldr/npm/npm-star
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-star/"
description: "Mark packages as favorites with NPM Star. Effortlessly manage your preferred NPM packages and discover new ones within the NPM ecosystem. Free online tool, no registration required."
category: common
keywords:
- npm star package
- npm package favorite
- npm star registry
- npm star scope
- npm star authentication
- npm star otp
- npm star list
- node package manager star
- npm cli star
- javascript package star
features:
- Star packages from the default NPM registry
- Star packages within a specific scope
- Star packages from a specific registry URL
- Authenticate and star private NPM packages
- List all starred packages from a registry
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm star

> Mark a package as favorite.
> More information: <https://docs.npmjs.com/cli/npm-star>.

- Star a public package from the default registry:

`npm star {{package_name}}`

- Star a package within a specific scope:

`npm star @{{scope}}/{{package_name}}`

- Star a package from a specific registry:

`npm star {{package_name}} --registry {{registry_url}}`

- Star a private package that requires authentication:

`npm star {{package_name}} --auth-type {{legacy|oauth|web|saml}}`

- Star a package by providing an OTP for two-factor authentication:

`npm star {{package_name}} --otp {{otp}}`

- Star a package with detailed logging:

`npm star {{package_name}} --loglevel verbose`

- List all your starred packages:

`npm star --list`

- List your starred packages from a specific registry:

`npm star --list --registry {{registry_url}}`
