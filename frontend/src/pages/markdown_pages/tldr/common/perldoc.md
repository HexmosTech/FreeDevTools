---
title: "Perldoc - View Perl Documentation | Online Free DevTools by Hexmos"
name: perldoc
path: /freedevtools/tldr/common/perldoc
canonical: "https://hexmos.com/freedevtools/tldr/common/perldoc/"
description: "View Perl documentation with Perldoc. Access documentation for built-in functions, search Perl FAQ, and specify language translations. Free online tool, no registration required."
category: common
keywords:
- perl documentation viewer
- perl pod viewer
- perl module documentation
- perl api documentation
- perl faq search
- perl command line documentation
- perl language code specification
- perl function lookup
- perl variable lookup
- common perldoc commands
features:
- View documentation for Perl built-in functions.
- Search within the question headings of Perl FAQ.
- Send output directly to stdout, bypassing the pager.
- Specify the language code for documentation translation.
- Access documentation for Perl modules and programs.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# perldoc

> Look up Perl documentation in `.pod` format.
> More information: <https://perldoc.perl.org/perldoc>.

- View documentation for a builtin [f]unction, a [v]ariable or an [a]PI:

`perldoc -{{f|v|a}} {{name}}`

- Search in the question headings of Perl FAQ:

`perldoc -q {{regex}}`

- Send output directly to `stdout` (by default, it is send to a pager):

`perldoc -T {{page|module|program|URL}}`

- Specify the language code of the desired translation:

`perldoc -L {{language_code}} {{page|module|program|URL}}`
