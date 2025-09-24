---
title: "Manage Ruby Dependencies - Bundle Gem with Bundler | Online Free DevTools by Hexmos"
name: bundle
path: /freedevtools/tldr/common/bundle
canonical: "https://hexmos.com/freedevtools/tldr/common/bundle/"
description: "Manage Ruby gem dependencies efficiently with Bundler. Install, update, and execute commands within your Ruby projects. Free online tool, no registration required."
category: common
keywords:
- ruby dependency management
- bundle gem management
- bundler command line
- ruby gem installation
- gemfile dependencies
- bundler update gems
- ruby bundler install
- ruby gem outdated
- bundler gem skeleton
- bundler exec command
features:
- Install gems defined in a Gemfile
- Execute commands within the bundle environment
- Update specific or all gems in a project
- Check for outdated gems in a Gemfile
- Create a new gem skeleton using bundler
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bundle

> Dependency manager for the Ruby programming language.
> More information: <https://bundler.io/man/bundle.1.html>.

- Install all gems defined in the `Gemfile` expected in the working directory:

`bundle install`

- Execute a command in the context of the current bundle:

`bundle exec {{command}} {{arguments}}`

- Update all gems by the rules defined in the `Gemfile` and regenerate `Gemfile.lock`:

`bundle update`

- Update one or more specific gem(s) defined in the `Gemfile`:

`bundle update {{gem_name1}} {{gem_name2}}`

- Update one or more specific gems(s) defined in the `Gemfile` but only to the next patch version:

`bundle update --patch {{gem_name1}} {{gem_name2}}`

- Update all gems within the given group in the `Gemfile`:

`bundle update --group {{development}}`

- List installed gems in the `Gemfile` with newer versions available:

`bundle outdated`

- Create a new gem skeleton:

`bundle gem {{gem_name}}`
