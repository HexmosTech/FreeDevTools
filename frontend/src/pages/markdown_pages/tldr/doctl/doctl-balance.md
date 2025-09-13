---
title: "doctl Balance - Show Account Balance | Free DevTools"
name: doctl-balance
path: /freedevtools/tldr/doctl/doctl-balance
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-balance/"
description: "Show account balance with doctl Balance. Get DigitalOcean account balance and manage billing information with ease using the command line tool. Free online tool, no registration required."
category: common
keywords:
- doctl account balance
- DigitalOcean balance check
- doctl billing information
- command line balance
- DigitalOcean CLI
- doctl access token balance
- doctl context balance
- cloud account balance
- doctl get balance
- doctl financial management
features:
- Display DigitalOcean account balance
- Authenticate using access token
- Authenticate using configured context
- Show current account credit
- Retrieve billing information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doctl balance

> Show the balance of a Digital Ocean account.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/balance/>.

- Get balance of the account associated with the current context:

`doctl balance {{[g|get]}}`

- Get the balance of an account associated with an access token:

`doctl balance {{[g|get]}} {{[-t|--access-token]}} {{access_token}}`

- Get the balance of an account associated with a specified context:

`doctl balance {{[g|get]}} --context`
