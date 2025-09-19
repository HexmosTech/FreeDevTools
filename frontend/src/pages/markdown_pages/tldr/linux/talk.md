---
title: "Control Terminal Talk - Communicate Visually | Online Free DevTools by Hexmos"
name: talk
path: /freedevtools/tldr/linux/talk
canonical: "https://hexmos.com/freedevtools/tldr/linux/talk/"
description: "Control terminal communication with Talk, a visual communication program on Linux. Real-time interaction and remote messaging made simple. Free online tool, no registration required."
category: linux
keywords:
- linux terminal talk
- talk visual communication
- remote terminal session
- linux chat program
- command line messaging
- user terminal communication
- talk session control
- real-time text transfer
- terminal to terminal talk
- linux communication tool
features:
- Initiate talk sessions with local users
- Communicate with users on remote machines
- Specify the tty for local talk sessions
- Clear the terminal screen during talk
- End the talk session gracefully
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# talk

> A visual communication program which copies lines from your terminal to that of another user.
> More information: <https://www.gnu.org/software/inetutils/manual/inetutils.html#talk-invocation>.

- Start a talk session with a user on the same machine:

`talk {{username}}`

- Start a talk session with a user on the same machine, who is logged in on tty3:

`talk {{username}} {{tty3}}`

- Start a talk session with a user on a remote machine:

`talk {{username}}@{{hostname}}`

- Clear text on both terminal screens:

`<Ctrl d>`

- Exit the talk session:

`<Ctrl c>`
