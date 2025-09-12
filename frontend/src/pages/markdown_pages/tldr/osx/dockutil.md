---
title: "Control Dock Items - Manage macOS Dock with dockutil | Free DevTools"
name: dockutil
path: /freedevtools/tldr/osx/dockutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/dockutil/"
description: "Control macOS dock items easily with dockutil. Add, remove, and organize applications, directories, and URLs in your dock. Free online tool, no registration required."
category: osx
keywords:
- macOS dock manager
- dock item controller
- application launcher manager
- dock customization tool
- osx dock configuration
- dockutil command-line
- dock item organizer
- dock application adder
- dock URL manager
- spacer tile remover
features:
- Add applications to the macOS dock.
- Remove applications from the macOS dock.
- Manage dock items using command-line interface.
- Add spacers to organize dock sections.
- Customize dock item views and display types.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dockutil

> Manage macOS dock items.
> More information: <https://github.com/kcrawford/dockutil>.

- Add an application to the end of the current user's dock:

`dockutil --add {{path/to/application}}`

- Replace one application with another in the current user's dock:

`dockutil --add /{{path/to/application}} --replacing '{{dock_item_label}}'`

- Add a directory with view options and display it as a folder icon or stack:

`dockutil --add /{{path/to/directory}} --view {{grid|fan|list|auto}} --display {{folder|stack}}`

- Add a URL dock item after another item:

`dockutil --add {{vnc://example_server.local}} --label '{{Example VNC}}' --after {{dock_item_label}}`

- Remove an application from the dock given its dock label name:

`dockutil --remove '{{dock_item_label}}'`

- Add a spacer in a section after an application:

`dockutil --add '' --type {{spacer|small-spacer|flex-spacer}} --section {{apps}} --after {{dock_item_label}}`

- Remove all spacer tiles:

`dockutil --remove spacer-tiles`
