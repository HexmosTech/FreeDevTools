---
title: "Ruby Interpreter - Execute Ruby Code | Online Free DevTools by Hexmos"
name: ruby
path: "/freedevtools/tldr/common/ruby/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ruby/"
description: "Execute Ruby code effortlessly with Ruby Interpreter. Run scripts, check syntax, and start local servers instantly using command line. Free online tool, no registration required."
category: common
keywords:
- ruby interpreter
- ruby script execution
- ruby command line
- ruby syntax checker
- ruby http server
- ruby gem dependency
- ruby rake task
- ruby irb interactive shell
- ruby version check
- common linux ruby
features:
- Execute Ruby scripts from the command line.
- Check Ruby script syntax for errors.
- Start a local HTTP server using Ruby.
- Execute single Ruby commands directly.
- Display the installed Ruby version.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ruby

> Ruby programming language interpreter.
> See also: `gem`, `bundler`, `rake`, `irb`.
> More information: <https://manned.org/ruby>.

- Execute a Ruby script:

`ruby {{path/to/script.rb}}`

- Execute a single Ruby command in the command-line:

`ruby -e "{{command}}"`

- Check for syntax errors on a given Ruby script:

`ruby -c {{path/to/script.rb}}`

- Start the built-in HTTP server on port 8080 in the current directory:

`ruby -run -e httpd`

- Locally execute a Ruby binary without installing the required library it depends on:

`ruby -I {{path/to/library_folder}} -r {{library_require_name}} {{path/to/bin_folder/bin_name}}`

- Display version:

`ruby {{[-v|--version]}}`
