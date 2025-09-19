---
title: "Heroku Manager - Manage Heroku Apps | Online Free DevTools by Hexmos"
name: heroku
path: /freedevtools/tldr/common/heroku
canonical: "https://hexmos.com/freedevtools/tldr/common/heroku/"
description: "Manage Heroku apps effortlessly with Heroku Manager. Deploy, monitor, and scale your applications directly from the command line. Free online tool, no registration required."
category: common
keywords:
- Heroku app manager
- Heroku command line tool
- Heroku cloud deployment
- Heroku application scaling
- Heroku dyno manager
- Heroku logs analysis
- Heroku process runner
- Heroku CLI commands
- Heroku application deployment
- Heroku cloud platform
features:
- Deploy and manage Heroku applications
- Monitor application logs and performance
- Run one-off processes within Heroku dynos
- List and manage Heroku dynos (virtual machines)
- Destroy Heroku applications permanently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# heroku

> Create and manage Heroku apps.
> More information: <https://devcenter.heroku.com/articles/heroku-cli#get-started-with-the-heroku-cli>.

- Log in to your Heroku account:

`heroku login`

- Create a Heroku app:

`heroku create`

- Show logs for an app:

`heroku logs --app {{app_name}}`

- Run a one-off process inside a dyno (Heroku virtual machine):

`heroku run {{process_name}} --app {{app_name}}`

- List dynos (Heroku virtual machines) for an app:

`heroku ps --app {{app_name}}`

- Permanently destroy an app:

`heroku destroy --app {{app_name}}`
