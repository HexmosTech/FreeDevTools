---
title: "WordPress Control - Manage WP Instances | Online Free DevTools by Hexmos"
name: wp
path: "/freedevtools/tldr/common/wp/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wp/"
description: "Control WordPress instances easily with WP-CLI. Manage plugins, update core, and interact with the database through command-line. Free online tool, no registration required."
category: common
keywords:
- wordpress command line
- wp-cli management
- wordpress plugin installer
- wordpress database search replace
- wordpress core update
- wordpress configuration generator
- wordpress import export
- wordpress development tools
- linux wordpress management
- macos wordpress management
features:
- Update WordPress core and plugins via command line
- Automate database search and replace operations
- Generate WordPress configuration files
- Import WordPress content from WXR files
- Manage WordPress installations from the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wp

> The official interface to manage WordPress instances.
> More information: <https://developer.wordpress.org/cli/commands/>.

- Print information about the operating system, shell, PHP, and WP-CLI (`wp`) installation:

`wp --info`

- Update WP-CLI:

`wp cli update`

- Download a fresh WordPress installation to current directory, optionally specifying the locale:

`wp core download --locale={{locale}}`

- Create basic `wpconfig` file (assuming database on `localhost`):

`wp config create --dbname={{dbname}} --dbuser={{dbuser}} --dbpass={{dbpass}}`

- Install and activate a WordPress plugin:

`wp plugin install {{plugin}} --activate`

- Replace all instances of a string in the database:

`wp search-replace {{old_string}} {{new_string}}`

- Import the contents of a WordPress Extended RSS (WXR) file:

`wp import {{path/to/file.xml}}`
