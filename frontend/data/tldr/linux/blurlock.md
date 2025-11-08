---
title: "Blur Screen Lock - Control Screen Blurring | Online Free DevTools by Hexmos"
name: blurlock
path: "/freedevtools/tldr/linux/blurlock/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/blurlock/"
description: "Control screen blurring with Blur Screen Lock, a simple i3lock wrapper. Secure your Linux desktop with blurred screenshots for privacy. Free online tool, no registration required."
category: linux
keywords:
- linux screen lock
- blur screen lock
- i3lock wrapper
- secure screen lock linux
- linux privacy tool
- command line screen lock
- blurlock linux command
- linux security command
- blurred screenshot lock
- i3 window manager lock
features:
- Lock the screen with a blurred screenshot.
- Disable the unlock indicator for enhanced security.
- Choose to show or hide the mouse pointer.
- Display the number of failed login attempts.
- Integrate with i3 window manager for screen locking.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# blurlock

> A simple wrapper around the i3 screen locker `i3lock`, which blurs the screen.
> See also: `i3lock`.
> More information: <https://gitlab.manjaro.org/packages/community/i3/i3exit/-/blob/master/blurlock>.

- Lock the screen to a blurred screenshot of the current screen:

`blurlock`

- Lock the screen and disable the unlock indicator (removes feedback on keypress):

`blurlock {{[-u|--no-unlock-indicator]}}`

- Lock the screen and don't hide the mouse pointer:

`blurlock {{[-p|--pointer]}} {{default}}`

- Lock the screen and show the number of failed login attempts:

`blurlock {{[-f|--show-failed-attempts]}}`
