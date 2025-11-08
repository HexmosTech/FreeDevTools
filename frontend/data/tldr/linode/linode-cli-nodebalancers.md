---
title: "Control Linode NodeBalancers - Manage Load Balancers | Online Free DevTools by Hexmos"
name: linode-cli-nodebalancers
path: "/freedevtools/tldr/linode/linode-cli-nodebalancers/"
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-nodebalancers/"
description: "Control Linode NodeBalancers with linode-cli. Manage load balancing configurations, update instances, and ensure high availability. Free online tool, no registration required."
category: common
keywords:
- linode nodebalancer management
- linode load balancer control
- linode cli nodebalancer
- linode nodebalancer configuration
- linode nodebalancer instance
- linode cloud load balancing
- linode cli commands
- linux linode nodebalancer
- command line load balancer
- nodebalancer configuration management
features:
- List all Linode NodeBalancers
- Create a new Linode NodeBalancer
- View details of a specific NodeBalancer
- Update existing NodeBalancer configurations
- Delete unwanted NodeBalancers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli nodebalancers

> Manage Linode NodeBalancers.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-nodebalancers>.

- List all NodeBalancers:

`linode-cli nodebalancers list`

- Create a new NodeBalancer:

`linode-cli nodebalancers create --region {{region}}`

- View details of a specific NodeBalancer:

`linode-cli nodebalancers view {{nodebalancer_id}}`

- Update an existing NodeBalancer:

`linode-cli nodebalancers update {{nodebalancer_id}} --label {{new_label}}`

- Delete a NodeBalancer:

`linode-cli nodebalancers delete {{nodebalancer_id}}`

- List configurations for a NodeBalancer:

`linode-cli nodebalancers configs list {{nodebalancer_id}}`

- Add a new configuration to a NodeBalancer:

`linode-cli nodebalancers configs create {{nodebalancer_id}} --port {{port}} --protocol {{protocol}}`
