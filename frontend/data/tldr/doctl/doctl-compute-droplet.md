---
title: "Droplet Control - Manage DigitalOcean VMs | Online Free DevTools by Hexmos"
name: doctl-compute-droplet
path: "/freedevtools/tldr/doctl/doctl-compute-droplet/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-compute-droplet/"
description: "Control DigitalOcean droplets with doctl compute droplet. Easily manage virtual machines, create, delete, and list droplets. Free online tool, no registration required."
category: common
keywords:
- DigitalOcean droplet management
- doctl droplet create
- doctl droplet delete
- doctl compute list
- DigitalOcean vm manager
- doctl cloud cli
- droplet command line tool
- DigitalOcean API control
- cloud virtual machine management
- doctl vm control
features:
- Create DigitalOcean droplets with specified configurations
- Delete DigitalOcean droplets by ID or name
- List all DigitalOcean droplets associated with an account
- Manage droplet regions, images, and sizes
- Automate droplet deployments using the doctl CLI
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl compute droplet

> List, create, and delete virtual machines which are called droplets.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/>.

- Create a droplet:

`doctl compute {{[d|droplet]}} {{[c|create]}} --region {{region}} --image {{os_image}} --size {{vps_type}} {{droplet_name}}`

- Delete a droplet:

`doctl compute {{[d|droplet]}} {{[d|delete]}} {{droplet_id|droplet_name}}`

- List droplets:

`doctl compute {{[d|droplet]}} {{[ls|list]}}`
