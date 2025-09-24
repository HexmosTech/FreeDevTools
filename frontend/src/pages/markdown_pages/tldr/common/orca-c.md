---
title: "Control ORCA Sequencer with orca-c | Online Free DevTools by Hexmos"
name: orca-c
path: /freedevtools/tldr/common/orca-c
canonical: "https://hexmos.com/freedevtools/tldr/common/orca-c/"
description: "Control ORCA sequencer parameters with orca-c, a C-port command-line tool.  Create procedural music sequences easily, set tempo, grid size, and more. Free online tool, no registration required."
category: common
keywords:
- orca sequencer control
- orca c command line
- procedural music sequencer
- live coding orca
- orca tempo control
- orca grid size control
- orca c programming
- orca command reference
- c language orca
- orca music generation
features:
- Start ORCA with a blank workspace.
- Open and load existing ORCA projects.
- Set custom tempo (BPM) for the sequencer.
- Define the grid dimensions (columns x rows).
- Adjust the maximum number of undo operations.
ogImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
---

# orca-c

> A C-port of the ORCA live programming environment.
> ORCA is an esoteric programming language for creating procedural sequencers.
> More information: <https://github.com/hundredrabbits/Orca-c>.

- Start ORCA with an empty workspace:

`orca-c`

- Start ORCA and open a specific file:

`orca-c {{path/to/file.orca}}`

- Start ORCA and set a specific tempo (defaults to 120):

`orca-c --bpm {{beats_per_minute}}`

- Start ORCA and set the size of the grid:

`orca-c --initial-size {{columns}}x{{rows}}`

- Start ORCA and set the maximum number of undo steps (defaults to 100):

`orca-c --undo-limit {{limit}}`

- Show the main menu inside of ORCA:

`<F1>`

- Show all shortcuts inside of ORCA:

`<?>`

- Show all ORCA operators inside of ORCA:

`<Ctrl g>`
