---
title: "Erlang Runtime - Run Erlang Programs | Online Free DevTools by Hexmos"
name: erl
path: "/freedevtools/tldr/common/erl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/erl/"
description: "Run Erlang programs easily with Erlang Runtime. Compile and execute Erlang code, connect to nodes, and manage modules. Free online tool, no registration required."
category: common
keywords:
- erlang runtime
- erlang shell
- erlang compiler
- erlang programming
- beam file execution
- erlang node connection
- erlang module loading
- erlang sequential programming
- erlang distributed programming
- erlang cookie authentication
features:
- Compile and run Erlang programs from the command line
- Connect to running Erlang nodes for remote shell access
- Specify directory paths for loading Erlang modules
- Execute sequential Erlang scripts without starting the shell
- Authenticate using cookie-based security for node connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# erl

> Run and manage programs in the Erlang programming language.
> More information: <https://www.erlang.org>.

- Compile and run sequential Erlang program as a common script and then exit:

`erlc {{path/to/file1 path/to/file2 ...}} && erl -noshell '{{mymodule:myfunction(arguments)}}, init:stop().'`

- Connect to a running Erlang node:

`erl -remsh {{nodename}}@{{hostname}} -sname {{custom_shortname}} -hidden -setcookie {{cookie_of_remote_node}}`

- Tell the Erlang shell to load modules from a directory:

`erl -pa {{path/to/directory_with_beam_files}}`
