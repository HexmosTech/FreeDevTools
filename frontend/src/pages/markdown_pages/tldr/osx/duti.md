---
title: "Control Default Apps - Duti macOS | Online Free DevTools by Hexmos"
name: duti
path: "/freedevtools/tldr/osx/duti"
canonical: "https://hexmos.com/freedevtools/tldr/osx/duti/"
description: "Control default application associations with duti. Set handlers for document types and URL schemes on macOS using the command line. Free online tool, no registration required."
category: osx
keywords:
- macOS default app
- UTI handler
- URL scheme association
- file type association
- duti macOS
- command line app association
- macOS file association
- default application setter
- macOS app linker
- macOS handler tool
features:
- Set default applications for specific file extensions
- Associate applications with URL schemes (e.g., ftp, http)
- Display information about default applications for given extensions
- Query the default handler for a specific Uniform Type Identifier (UTI)
- List all handlers registered for a given UTI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# duti

> Set default applications for document types and URL schemes on macOS.
> More information: <https://github.com/moretension/duti>.

- Set Safari as the default handler for HTML documents:

`duti -s {{com.apple.Safari}} {{public.html}} all`

- Set VLC as the default viewer for files with `.m4v` extensions:

`duti -s {{org.videolan.vlc}} {{m4v}} viewer`

- Set Finder as the default handler for the ftp:// URL scheme:

`duti -s {{com.apple.Finder}} "{{ftp}}"`

- Display information about the default application for a given extension:

`duti -x {{ext}}`

- Display the default handler for a given UTI:

`duti -d {{uti}}`

- Display all handlers of a given UTI:

`duti -l {{uti}}`
