---
title: "Control Travis CI - Interface with CLI | Online Free DevTools by Hexmos"
name: travis
path: "/freedevtools/tldr/common/travis/"
canonical: "https://hexmos.com/freedevtools/tldr/common/travis/"
description: "Control Travis CI with the command-line interface. Authenticate, manage repositories, encrypt values, and initialize projects quickly. Free online tool, no registration required."
category: common
keywords:
- travis ci cli
- travis ci command line
- ci cd pipeline
- github actions
- devops automation
- travis yml generator
- continuous integration
- build automation
- travis encrypt
- travis repos
features:
- Authenticate Travis CI client
- List accessible repositories
- Encrypt values for .travis.yml
- Generate .travis.yml files
- Initialize Travis CI projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# travis

> Interface with Travis CI.
> More information: <https://github.com/travis-ci/travis.rb>.

- Display the client version:

`travis version`

- Authenticate the CLI client against the server, using an authentication token:

`travis login`

- List repositories the user has permissions on:

`travis repos`

- Encrypt values in `.travis.yml`:

`travis encrypt {{token}}`

- Generate a `.travis.yml` file and enable the project:

`travis init`
