---
title: "Create Backups with Duplicity - Encrypted & Versioned | Online Free DevTools by Hexmos"
name: duplicity
path: "/freedevtools/tldr/common/duplicity/"
canonical: "https://hexmos.com/freedevtools/tldr/common/duplicity/"
description: "Create encrypted backups with Duplicity. Securely archive data, manage versions, and restore files with this powerful backup solution. Free online tool, no registration required."
category: common
keywords:
- Duplicity backup
- Encrypted backup
- Incremental backup
- Versioned backup
- Backup encryption
- S3 backup
- FTPS backup
- WebDAV backup
- Backup restore
- Command line backup
features:
- Create incremental backups
- Encrypt backups using GPG
- Upload backups to various cloud services
- Restore specific files or directories from backups
- Delete old backup versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# duplicity

> Create incremental, compressed, encrypted and versioned backups.
> Can also upload the backups to a variety of backend services.
> It is worth mentioning that depending on the version, some options may not be available (e.g. `--gio` in 2.0.0).
> More information: <https://duplicity.gitlab.io/stable/duplicity.1.html#name>.

- Backup a directory via FTPS to a remote machine, encrypting it with a password:

`FTP_PASSWORD={{ftp_login_password}} PASSPHRASE={{encryption_password}} duplicity {{path/to/source/directory}} {{ftps://user@hostname/target/directory/path/}}`

- Backup a directory to Amazon S3, doing a full backup every month:

`duplicity --full-if-older-than {{1M}} s3://{{bucket_name[/prefix]}}`

- Delete versions older than 1 year from a backup stored on a WebDAV share:

`FTP_PASSWORD={{webdav_login_password}} duplicity remove-older-than {{1Y}} --force {{webdav[s]://user@hostname[:port]/some_dir}}`

- List the available backups:

`duplicity collection-status "file://{{absolute/path/to/backup/directory}}"`

- List the files in a backup stored on a remote machine, via SSH:

`duplicity list-current-files {{[-t|--time]}} {{YYYY-MM-DD}} scp://{{user@hostname}}/{{path/to/backup/dir}}`

- Restore a subdirectory from a GnuPG-encrypted local backup to a given location:

`PASSPHRASE={{gpg_key_password}} duplicity restore --encrypt-key {{gpg_key_id}} --path-to-restore {{relative/path/restoredirectory}} file://{{absolute/path/to/backup/directory}} {{path/to/directory/to/restore/to}}`
