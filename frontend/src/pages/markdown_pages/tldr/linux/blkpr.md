---
title: "Control Persistent Reservations - blkpr | Free DevTools"
name: blkpr
path: /freedevtools/tldr/linux/blkpr
canonical: "https://hexmos.com/freedevtools/tldr/linux/blkpr/"
description: "Control persistent reservations with blkpr. Manage block device reservations, register keys, and clear reservations. Free online tool, no registration required."
category: linux
keywords:
- persistent reservation control
- block device management
- Linux persistent reservation
- SCSI reservations
- persistent reservation register
- persistent reservation preempt
- persistent reservation release
- block device reservation clear
- reservation key management
- blkpr command-line tool
features:
- Register persistent reservations with unique keys.
- Reserve block devices for exclusive access.
- Preempt existing reservations and replace them.
- Release reservations based on key and type.
- Clear all reservations from a block device.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# blkpr

> Register, reserve, release, preempt, and clear persistent reservations on a block device that supports Persistent Reservations.
> More information: <https://manned.org/blkpr>.

- Register (command) a new reservation with a given key on a given device:

`blkpr {{[-c|--command]}} register {{[-k|--key]}} {{reservation_key}} {{path/to/device}}`

- Set the type of an existing reservation to exclusive access:

`blkpr {{[-c|--command]}} reserve {{[-k|--key]}} {{reservation_key}} {{[-t|--type]}} exclusive-access {{path/to/device}}`

- Preempt the existing reservation with a given key and replace it with a new reservation:

`blkpr {{[-c|--command]}} preempt {{[-K|--oldkey]}} {{old_key}} {{[-k|--key]}} {{new_key}} {{[-t|--type]}} write-exclusive {{path/to/device}}`

- Release a reservation with a given key and type on a given device:

`blkpr {{[-c|--command]}} release {{[-k|--key]}} {{reservation_key}} {{[-t|--type]}} {{reservation_type}} {{path/to/device}}`

- Clear all reservations from a given device:

`blkpr {{[-c|--command]}} clear {{[-k|--key]}} {{key}} {{path/to/device}}`
