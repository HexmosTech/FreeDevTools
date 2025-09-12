---
title: "Convert JPEG to ASCII - Generate Art | Free DevTools"
name: jp2a
path: /freedevtools/tldr/common/jp2a
canonical: "https://hexmos.com/freedevtools/tldr/common/jp2a/"
description: "Generate ASCII art with jp2a. Convert JPEG images to text-based representations. Free online tool, no registration required. Supports color and custom character sets."
category: common
keywords:
- JPEG to ASCII converter
- Image to ASCII art generator
- ASCII art command line tool
- Linux image converter
- macOS image converter
- jp2a image conversion
- Command line image tools
- Terminal art generator
- Text-based image representation
- Image ASCII art generator
features:
- Convert JPEG images to ASCII art
- Support colorized ASCII output
- Allow customization of ASCII characters
- Write ASCII output to a file
- Generate HTML for web browser viewing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jp2a

> Convert JPEG images to ASCII.
> More information: <https://manned.org/jp2a>.

- Read JPEG image from a file and print in ASCII:

`jp2a {{path/to/image.jpeg}}`

- Read JPEG image from a URL and print in ASCII:

`jp2a {{www.example.com/image.jpeg}}`

- Colorize the ASCII output:

`jp2a --colors {{path/to/image.jpeg}}`

- Specify characters to be used for the ASCII output:

`jp2a --chars='{{..-ooxx@@}}' {{path/to/image.jpeg}}`

- Write the ASCII output into a file:

`jp2a --output={{path/to/output_file.txt}} {{path/to/image.jpeg}}`

- Write the ASCII output in HTML file format, suitable for viewing in web browsers:

`jp2a --html --output={{path/to/output_file.html}} {{path/to/image.jpeg}}`
