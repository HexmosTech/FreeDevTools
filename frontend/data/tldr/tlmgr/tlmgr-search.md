---
title: "TeX Live Search - Find Packages with Regex | Online Free DevTools by Hexmos"
name: tlmgr-search
path: "/freedevtools/tldr/tlmgr/tlmgr-search/"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-search/"
description: "Find TeX Live packages instantly with TeX Live Search. Discover packages by name, description, or file with regular expressions. Free online tool, no registration required."
category: common
keywords:
- TeX Live package search
- TeX package manager search
- tlmgr search regex
- TeX Live database search
- TeX package names search
- TeX package descriptions search
- tlmgr package finder
- TeX Live package discovery
- TeX regex search
- tlmgr search command
features:
- Search TeX Live packages by name or description using regular expressions.
- Search TeX Live package files using regular expressions.
- Search local or global TeX Live databases.
- Restrict search to whole words in package names and descriptions.
- Find specific TeX Live packages for installation or management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr search

> Search for TeX Live packages using (Perl) `regex`.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#search>.

- Search for a package name and descriptions of all locally installed packages from a specific `regex`:

`tlmgr search "{{regex}}"`

- Search for all file names of all locally installed packages from a `regex`:

`tlmgr search --file "{{regex}}"`

- Search for all file names, package names, and descriptions of all locally installed packages from a `regex`:

`tlmgr search --all "{{regex}}"`

- Search the TeX Live database, instead of the local installation:

`tlmgr search --global "{{regex}}"`

- Restrict the matches for package names and descriptions (but not for file names) to whole words:

`tlmgr search --all --word "{{regex}}"`
