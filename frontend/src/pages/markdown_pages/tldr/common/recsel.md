---
title: "Extract Recfile Records - Print Data | Online Free DevTools by Hexmos"
name: recsel
path: /freedevtools/tldr/common/recsel
canonical: "https://hexmos.com/freedevtools/tldr/common/recsel/"
description: "Extract recfile records with recsel. Select, filter, and print data from recfile databases. Free online tool, no registration required."
category: common
keywords:
- recfile record extraction
- recfile data selection
- recfile database query
- recfile field filtering
- recfile data printing
- gnu recutils
- linux database
- text database query
- command line database
- recfile data manipulation
features:
- Extract specific fields from recfiles
- Filter records based on regular expressions
- Print records matching complex predicates
- Select records based on field values
- Query recfile databases from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# recsel

> Print records from a recfile: a human-editable, plain text database.
> More information: <https://www.gnu.org/software/recutils/manual/recutils.html#Invoking-recsel>.

- Extract name and version field:

`recsel {{[-p|--print]}} name,version {{data.rec}}`

- Use "~" to match a string with a given `regex`:

`recsel {{[-e|--expression]}} "{{field_name}} ~ '{{regex}}' {{data.rec}}"`

- Use a predicate to match a name and a version:

`recsel {{[-e|--expression]}} "name ~ '{{regex}}' && version ~ '{{regex}}'" {{data.rec}}`
