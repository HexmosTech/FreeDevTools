---
title: "Stormlock - Control Centralized Locks | Online Free DevTools by Hexmos"
name: stormlock
path: "/freedevtools/tldr/st/stormlock/"
canonical: "https://hexmos.com/freedevtools/tldr/st/stormlock/"
description: "Control centralized locks with Stormlock. Acquire, release, and check lease status using a simple CLI. Free online tool, no registration required."
category: common
keywords:
- centralized locking system
- distributed locking
- lease management
- resource locking
- concurrency control
- command-line lock manager
- lock acquisition
- lock release
- stormlock cli
- distributed systems
features:
- Acquire a lease for a specified resource
- Release a specific lease based on its ID
- Display current lease information for a resource
- Verify if a lease is currently active
- Manage locks in distributed environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stormlock

> Centralized locking system.
> More information: <https://github.com/tmccombs/stormlock>.

- Acquire a lease for resource:

`stormlock acquire {{resource}}`

- Release the given lease for the given resource:

`stormlock release {{resource}} {{lease_id}}`

- Show information on the current lease for a resource, if any:

`stormlock current {{resource}}`

- Test if a lease for given resource is currently active:

`stormlock is-held {{resource}} {{lease_id}}`
