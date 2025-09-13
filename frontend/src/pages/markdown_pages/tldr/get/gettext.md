---
title: "Gettext - Translate Strings with Domain Files | Free DevTools"
name: gettext
path: /freedevtools/tldr/common/gettext
canonical: "https://hexmos.com/freedevtools/tldr/common/gettext/"
description: "Translate strings easily with Gettext, using compiled .mo files. Localize software and applications for different languages. Free online tool, no registration required."
category: common
keywords:
- gettext string translation
- compiled mo file localization
- internationalization gettext
- linux gettext command
- macos gettext command
- domain file translation
- locale specific translation
- message catalog translation
- multilingual software support
- software localization gettext
features:
- Translate strings based on domain files
- Utilize compiled .mo files for translations
- Support multiple locales for internationalization
- Fallback to msgid if translation is not found
- Display gettext version and help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gettext

> Translates a string using stored translations in a compiled `.mo` file.
> Translations are stored in `/usr/share/locale/<locale_name>/LC_MESSAGES/` with `domain` being the filename without its extension.
> See also: `msgfmt`, `msgunfmt`.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#gettext-Invocation>.

- Get the translation of a string as specified in the domain file (falls back to given `msgid` if no translation exists):

`LANGUAGE={{locale}} gettext {{[-d|--domain]}} {{domain}} "{{msgid}}"`

- Display help:

`gettext {{[-h|--help]}}`

- Display gettext version:

`gettext {{[-V|--version]}}`
