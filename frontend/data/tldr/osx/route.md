---
title: "Route - Control Network Routing Tables on OSX | Online Free DevTools by Hexmos"
name: route
path: "/freedevtools/tldr/osx/route/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/route/"
description: "Control network routing tables with Route on OSX. Add, delete, and manage routes for efficient network communication. Free online tool, no registration required."
category: osx
keywords:
- osx route control
- macos route manager
- network routing table
- command line route
- destination route configuration
- gateway route setup
- subnet route management
- osx network route
- internet route configuration
- static route configuration
features:
- Add static routes to network tables
- Delete specific routes from the routing table
- Flush all existing routes in the table
- Lookup and display route information for destinations
- Test route configurations without applying changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# route

> Manually manipulate the routing tables.
> Requires root privileges.
> More information: <https://keith.github.io/xcode-man-pages/route.8.html>.

- Add a route to a destination through a gateway:

`sudo route add "{{destination_ip_address}}" "{{gateway_address}}"`

- Add a route to a /24 subnet through a gateway:

`sudo route add "{{subnet_ip_address}}/24" "{{gateway_address}}"`

- Run in test mode (does not do anything, just print):

`sudo route -t add "{{destination_ip_address}}/24" "{{gateway_address}}"`

- Remove all routes:

`sudo route flush`

- Delete a specific route:

`sudo route delete "{{destination_ip_address}}/24"`

- Lookup and display the route for a destination (hostname or IP address):

`sudo route get "{{destination}}"`
