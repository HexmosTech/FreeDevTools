---
title: "Manage Gentoo News - eselect news Control | Free DevTools"
name: eselect-news
path: /freedevtools/tldr/linux/eselect-news
canonical: "https://hexmos.com/freedevtools/tldr/linux/eselect-news/"
description: "Control Gentoo news items with eselect news.  Read, mark as read/unread, and manage news efficiently using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - Gentoo news manager
  - eselect news commands
  - linux news reader
  - gentoo package manager news
  - command line news tool
  - eselect news list
  - eselect news read
  - gentoo system news
  - portage news updates
  - linux system updates
features:
  - List available Gentoo news items.
  - Read specific Gentoo news items by number.
  - Mark Gentoo news items as read or unread.
  - Delete all read Gentoo news items.
  - Count available (new or all) Gentoo news items.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eselect news

> An `eselect` module for reading Gentoo news items.
> Note: Portage will print a notice when a repository is synchronized and there are unread news items.
> More information: <https://wiki.gentoo.org/wiki/Eselect#News>.

- List available news items with their numbers (all by default):

`eselect news list {{all|new}}`

- Print the specified news items:

`eselect news read {{number1 number2 ...}}`

- Print all unread news items:

`eselect news read`

- Mark the specified news items as unread:

`eselect news unread {{number1 number2 ...}}`

- Delete all read news items:

`eselect news purge`

- Print the number of available news items (new by default):

`eselect news count {{all|new}}`
