---
title: "Control Terminal Settings - Using Tput | Online Free DevTools by Hexmos"
name: tput
path: /freedevtools/tldr/common/tput
canonical: "https://hexmos.com/freedevtools/tldr/common/tput/"
description: "Control terminal settings and capabilities with Tput. Modify cursor position, text colors, and terminal attributes using command line. Free online tool, no registration required."
category: common
keywords:
- terminal settings control
- tput terminal configuration
- linux terminal attributes
- command-line terminal control
- ansi color codes terminal
- cursor positioning terminal
- terminal text attributes
- tput command examples
- terminal word wrap control
- terminal cursor visibility
features:
- Move the terminal cursor to a specific row and column.
- Set foreground and background colors using ANSI color codes.
- Reverse text and background colors for emphasis.
- Reset all terminal text attributes to default.
- Save and restore the terminal screen's content.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tput

> View and modify terminal settings and capabilities.
> More information: <https://manned.org/tput>.

- Move the cursor to a screen location:

`tput cup {{row}} {{column}}`

- Set foreground (af) or background (ab) color:

`tput {{setaf|setab}} {{ansi_color_code}}`

- Reverse text and background colors:

`tput rev`

- Reset all terminal text attributes:

`tput sgr0`

- Show number of columns, lines, or colors:

`tput {{cols|lines|colors}}`

- Enable or disable word wrap:

`tput {{smam|rmam}}`

- Hide or show the terminal cursor:

`tput {{civis|cnorm}}`

- Save or restore terminal text status (smcup also captures scroll wheel events):

`tput {{smcup|rmcup}}`
