---
title: "Compile GLib Resources - Generate Resource Bundles | Online Free DevTools by Hexmos"
name: glib-compile-resources
path: "/freedevtools/tldr/common/glib-compile-resources/"
canonical: "https://hexmos.com/freedevtools/tldr/common/glib-compile-resources/"
description: "Compile GLib resources with glib-compile-resources. Create binary resource bundles and C source files for GTK applications. Free online tool, no registration required."
category: common
keywords:
- GLib resource compiler
- GResource bundle generator
- GTK resource compilation
- XML resource compilation
- Compile resources Linux
- Compile resources MacOS
- Resource binary creator
- GResource C source
- Generate resource dependencies
- Binary resource creator
features:
- Compile resource files to binary bundles
- Generate C source code from resource files
- Generate resource dependencies list
- Specify target file for compiled resources
- Integrate resources into GTK applications
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# glib-compile-resources

> Compiles resource files (e.g. images) into a binary resource bundle.
> These may be linked into GTK applications using the GResource API.
> More information: <https://manned.org/glib-compile-resources>.

- Compile resources referenced in `file.gresource.xml` to a .gresource binary:

`glib-compile-resources {{file.gresource.xml}}`

- Compile resources referenced in `file.gresource.xml` to a C source file:

`glib-compile-resources --generate-source {{file.gresource.xml}}`

- Compile resources in `file.gresource.xml` to a chosen target file, with `.c`, `.h` or `.gresource` extension:

`glib-compile-resources --generate --target={{file.ext}} {{file.gresource.xml}}`

- Print a list of resource files referenced in `file.gresource.xml`:

`glib-compile-resources --generate-dependencies {{file.gresource.xml}}`
