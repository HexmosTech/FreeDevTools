---
title: "Rake Task Runner - Execute Ruby Tasks | Free DevTools"
name: rake
path: /freedevtools/tldr/common/rake
canonical: "https://hexmos.com/freedevtools/tldr/common/rake/"
description: "Execute Ruby tasks effortlessly with Rake Task Runner. Streamline build processes and automate development tasks using Rakefile configurations. Free online tool, no registration required."
category: common
keywords:
- rake task execution
- ruby build automation
- rake command line
- rake Rakefile configuration
- rake parallel processing
- rake task management
- ruby task runner
- rake linux
- rake macos
- rake ruby
features:
- Execute default Rakefile tasks
- Run specific tasks defined in Rakefile
- Execute tasks in parallel for faster processing
- Use custom Rakefile locations
- Execute Rake from different directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rake

> A Make-like program for Ruby.
> Tasks for `rake` are specified in a Rakefile.
> More information: <https://ruby.github.io/rake>.

- Run the `default` Rakefile task:

`rake`

- Run a specific task:

`rake {{task}}`

- Execute `n` jobs at a time in parallel (number of CPU cores + 4 by default):

`rake --jobs {{n}}`

- Use a specific Rakefile:

`rake --rakefile {{path/to/Rakefile}}`

- Execute `rake` from another directory:

`rake --directory {{path/to/directory}}`
