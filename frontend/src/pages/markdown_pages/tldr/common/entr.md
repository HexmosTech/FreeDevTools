---
title: "Entr - Control File Change Actions | Free DevTools"
name: entr
path: /freedevtools/tldr/common/entr
canonical: "https://hexmos.com/freedevtools/tldr/common/entr/"
description: "Control actions on file changes with Entr. Execute commands automatically when files are modified. Free online tool, no registration required."
category: common
keywords:
- file change trigger
- file modification monitor
- automatic command execution
- entr command runner
- file system events
- linux file watcher
- macOS file watcher
- command line automation
- process automation
- real-time build trigger
features:
- Trigger commands on file changes
- Monitor entire directory trees
- Send signals to running processes
- Execute commands with changed file path
- Clear the screen before executing commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# entr

> Run arbitrary commands when files change.
> More information: <https://eradman.com/entrproject/>.

- Rebuild with `make` if any file in any subdirectory changes:

`{{ag --files-with-matches}} | entr {{make}}`

- Rebuild and test with `make` if any `.c` source files in the current directory change:

`{{ls *.c}} | entr {{'make && make test'}}`

- Send a `SIGTERM` to any previously spawned ruby subprocesses before executing `ruby main.rb`:

`{{ls *.rb}} | entr -r {{ruby main.rb}}`

- Run a command with the changed file (`/_`) as an argument:

`{{ls *.sql}} | entr {{psql -f}} /_`

- [c]lear the screen and run a query after the SQL script is updated:

`{{echo my.sql}} | entr -cp {{psql -f}} /_`

- Rebuild the project if source files change, limiting output to the first few lines:

`{{find src/}} | entr -s {{'make | sed 10q'}}`

- Launch and auto-[r]eload a Node.js server:

`{{ls *.js}} | entr -r {{node app.js}}`
