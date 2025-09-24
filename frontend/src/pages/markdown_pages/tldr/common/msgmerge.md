---
title: "Update Translation File - msgmerge | Online Free DevTools by Hexmos"
name: msgmerge
path: /freedevtools/tldr/common/msgmerge
canonical: "https://hexmos.com/freedevtools/tldr/common/msgmerge/"
description: "Update translation files with msgmerge. Merge changes from template files into existing translations. Free online tool, no registration required."
category: common
keywords:
- translation file update
- po file merge
- gettext update
- pot file merge
- i18n update
- l10n update
- message file merge
- translation template
- gnu gettext
- msgmerge command
features:
- Updates existing translation files from templates
- Merges changes from .pot files into .po files
- Supports updating translation files using the `-U` flag
- Provides helpful usage information via the `-h` flag
- Facilitates internationalization (i18n) and localization (l10n) processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# msgmerge

> Update an existing translation file from a new template.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#msgmerge-Invocation>.

- Update a translation file:

`msgmerge {{[-U|--update]}} {{path/to/file.po}} {{path/to/messages.pot}}`

- Display help:

`msgmerge {{[-h|--help]}}`
