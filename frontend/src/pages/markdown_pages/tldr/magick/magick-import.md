---
title: "ImageMagick Capture - Screen Capture | Free DevTools"
name: magick-import
path: /freedevtools/tldr/magick/magick-import
canonical: "https://hexmos.com/freedevtools/tldr/magick/magick-import/"
description: "Capture screens with ImageMagick Import! Grab screenshots of your X server with specific window selection. Free online tool, no registration required."
category: common
keywords:
- ImageMagick capture
- screen capture tool
- X server screenshot
- window capture Imagemagick
- PNG screenshot
- JPEG screenshot
- PostScript export
- command line screen capture
- linux screen grab
- ImageMagick import
features:
- Capture the entire X server screen
- Capture contents from a remote X server
- Capture a specific window using its ID
- Save captures to PNG, JPEG, or PostScript formats
- Capture X server display using command-line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# magick import

> Capture some or all of an X server screen and save the image to a file.
> See also: `magick`.
> More information: <https://imagemagick.org/script/import.php>.

- Capture the entire X server screen into a PostScript file:

`magick import -window root {{path/to/output.ps}}`

- Capture contents of a remote X server screen into a PNG image:

`magick import -window root -display {{remote_host}}:{{screen}}.{{display}} {{path/to/output.png}}`

- Capture a specific window given its ID as displayed by `xwininfo` into a JPEG image:

`magick import -window {{window_id}} {{path/to/output.jpg}}`
