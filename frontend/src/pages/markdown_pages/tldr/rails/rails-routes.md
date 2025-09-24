---
title: "Rails Routes - List Routes in Rails Apps | Online Free DevTools by Hexmos"
name: rails-routes
path: /freedevtools/tldr/rails/rails-routes
canonical: "https://hexmos.com/freedevtools/tldr/rails/rails-routes/"
description: "List routes easily with Rails Routes. Inspect routes, filter by controller or path, and debug routing configurations. Free online tool, no registration required."
category: common
keywords:
- rails routing
- rails routes command
- ruby on rails routes
- rails routes grep
- rails controller routes
- rails route listing
- rails route inspection
- rails route debugging
- ruby on rails application routes
- command line routes
features:
- List all routes in a Rails application.
- Display routes in expanded format.
- Filter routes by URL helper, HTTP verb, or URL path.
- List routes mapped to a specific controller.
- Inspect detailed routing information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rails routes

> List routes in a Rails application.
> More information: <https://guides.rubyonrails.org/routing.html>.

- List all routes:

`rails routes`

- List all routes in an expanded format:

`rails routes {{[-E|--expanded]}}`

- List routes partially matching URL helper method name, HTTP verb, or URL path:

`rails routes {{[-g|--grep]}} {{posts_path|GET|/posts}}`

- List routes that map to a specified controller:

`rails routes {{[-c|--controller]}} {{posts|Posts|Blogs::PostsController}}`
