---
title: "Control SMB ACLs - Manage Windows Permissions | Free DevTools"
name: smbcacls
path: /freedevtools/tldr/unknown/smbcacls
canonical: "https://hexmos.com/freedevtools/tldr/unknown/smbcacls/"
description: "Control SMB ACLs with smbcacls. Manage Windows file sharing permissions and access control lists. Free online tool, no registration required."
category: unknown
keywords:
- SMB ACL control
- Windows ACL management
- Samba permissions
- smbcacls command
- SMB share security
- Network file access control
- Linux SMB administration
- Windows file permissions
- CIFS ACL manipulation
- Samba access control
features:
- Display ACLs for files and directories on SMB shares
- Set new ACLs for files on remote SMB shares
- Remove all existing ACL entries and set a new ACL
- Specify alternative workgroups or domains
- Manage Windows file sharing permissions from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# smbcacls

> View and manipulate Windows ACLs on SMB shares.
> Part of the Samba suite.
> More information: <https://www.samba.org/samba/docs/current/man-html/smbcacls.1.html>.

- Display the ACLs for a file or directory on a remote SMB share:

`smbcacls //{{server}}/{{share}} {{path/to/file_or_directory}} --user {{domain\\username}}%{{password}}`

- Set a new ACL for a file on a remote SMB share (replace `"ACL:..."` with a valid Windows ACL specification):

`smbcacls //{{server}}/{{share}} {{path/to/file}} --user {{domain\\username}}%{{password}} "ACL:{{DACL}}"`

- Remove all existing ACL entries and set a new ACL:

`smbcacls //{{server}}/{{share}} {{path/to/file}} --user {{domain\\username}}%{{password}} "RESET" "ACL:{{DACL}}"`

- Specify an alternative workgroup (or domain) and have the program prompt for a password interactively:

`smbcacls //{{server}}/{{share}} {{path/to/file}} --user {{username}} --workgroup {{workgroup}}`
