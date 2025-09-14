---
title: "VeraCrypt Encryption - Create Secure Volumes | Free DevTools"
name: veracrypt
path: /freedevtools/tldr/linux/veracrypt
canonical: "https://hexmos.com/freedevtools/tldr/linux/veracrypt/"
description: "Create secure volumes with VeraCrypt, a powerful disk encryption software. Encrypt and decrypt partitions with ease using this free online tool, no registration required."
category: linux
keywords:
- disk encryption linux
- veracrypt volume creation
- linux partition encryption
- veracrypt keyfile decryption
- secure volume management linux
- command line encryption tool
- veracrypt command examples
- data encryption linux
- linux veracrypt guide
- open source disk encryption
features:
- Create encrypted volumes using the command line
- Mount and decrypt VeraCrypt volumes to a specified directory
- Use keyfiles for secure volume decryption
- Dismount volumes from the command line
- Utilize /dev/urandom for strong random data generation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# veracrypt

> Free and open source disk encryption software.
> More information: <https://arcanecode.com/2021/06/21/veracrypt-on-the-command-line-for-ubuntu-linux/>.

- Create a new volume through a text user interface and use `/dev/urandom` as a source of random data:

`veracrypt {{[-t|--text]}} {{[-c|--create]}} --random-source={{/dev/urandom}}`

- Decrypt a volume interactively through a text user interface and mount it to a directory:

`veracrypt {{[-t|--text]}} {{path/to/volume}} {{path/to/mount_point}}`

- Decrypt a partition using a keyfile and mount it to a directory:

`veracrypt {{[-k|--keyfiles]}} {{path/to/keyfile}} {{/dev/sdXN}} {{path/to/mount_point}}`

- Dismount a volume on the directory it is mounted to:

`veracrypt {{[-d|--dismount]}} {{path/to/mounted_point}}`
