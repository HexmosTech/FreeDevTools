---
title: "Display Cow - Generate Cowsay Messages on Linux | Free DevTools"
name: xcowsay
path: /freedevtools/tldr/linux/xcowsay
canonical: "https://hexmos.com/freedevtools/tldr/linux/xcowsay/"
description: "Generate Cowsay messages with Xcowsay on Linux. Display custom messages with an adorable cow image on your desktop. Free online tool, no registration required."
category: linux
keywords:
- Cowsay message generator
- Linux cowsay command
- Terminal cow display
- Xcowsay custom message
- Command line cow
- Desktop notification cow
- Linux terminal message
- Cowsay script Linux
- Cowsay with image
- Display thought bubble
features:
- Display a cow with custom text on the Linux desktop
- Show output from other commands through a cow
- Position the cow at specific X and Y coordinates
- Choose between small, medium, or large cow sizes
- Display a thought bubble instead of a speech bubble
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcowsay

> Display a cute cow and message on your Linux desktop.
> The cow is displayed for either a fixed amount of time, or an amount of time calculated from the size of the text. Click on the cow to dismiss it immediately.
> More information: <https://manned.org/xcowsay>.

- Display a cow saying "hello, world":

`xcowsay "{{hello, world}}"`

- Display a cow with output from another command:

`ls | xcowsay`

- Display a cow at the specified X and Y coordinates:

`xcowsay --at {{X}},{{Y}}`

- Display a different sized cow:

`xcowsay --cow-size {{small|med|large}}`

- Display a thought bubble instead of a speech bubble:

`xcowsay --think`

- Display a different image instead of the default cow:

`xcowsay --image {{path/to/file}}`
