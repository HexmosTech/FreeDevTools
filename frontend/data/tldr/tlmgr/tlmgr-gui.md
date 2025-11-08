---
title: "TLMGR GUI - Control TeX Live Manager Graphically | Online Free DevTools by Hexmos"
name: tlmgr-gui
path: "/freedevtools/tldr/tlmgr/tlmgr-gui/"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-gui/"
description: "Control TeX Live Manager graphically with TLMGR GUI. Configure TeX packages and settings using an intuitive interface. Free online tool, no registration required."
category: common
keywords:
- TeX Live Manager GUI
- TLMGR GUI Linux
- TLMGR GUI macOS
- TLMGR Package Manager
- TeX Package Configuration
- TeX Live Update Manager
- TLMGR Perl-Tk Interface
- TeX Distribution Manager
- LaTeX Package Manager GUI
- TLMGR Font Configuration
features:
- Launch graphical user interface for TLMGR
- Customize background and foreground colors
- Set custom font and font size
- Specify window geometry for the GUI
- Pass arbitrary X resource strings to the GUI
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr gui

> Start a graphical user interface for `tlmgr`.
> `tlmgr gui` depends on the package `perl-tk`, which has to be installed manually.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#gui>.

- Start a GUI for `tlmgr`:

`sudo tlmgr gui`

- Start a GUI specifying the background color:

`sudo tlmgr gui -background "{{#f39bc3}}"`

- Start a GUI specifying the foreground color:

`sudo tlmgr gui -foreground "{{#0ef3bd}}"`

- Start a GUI specifying the font and font size:

`sudo tlmgr gui -font "{{helvetica 18}}"`

- Start a GUI setting a specific geometry:

`sudo tlmgr gui -geometry {{width}}x{{height}}-{{xpos}}+{{ypos}}`

- Start a GUI passing an arbitrary X resource string:

`sudo tlmgr gui -xrm {{xresource}}`
