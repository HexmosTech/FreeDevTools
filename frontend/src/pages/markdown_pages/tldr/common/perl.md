---
title: "Perl Script Interpreter - Run Perl Scripts | Online Free DevTools by Hexmos"
name: perl
path: /freedevtools/tldr/common/perl
canonical: "https://hexmos.com/freedevtools/tldr/common/perl/"
description: "Run Perl scripts instantly with the Perl Script Interpreter. Execute commands, filter text, and manipulate files using the Perl language. Free online tool, no registration required."
category: common
keywords:
- Perl script execution
- Perl code interpreter
- Perl regex filtering
- Perl file manipulation
- Perl in-place substitution
- Perl command line
- Linux Perl
- Perl one-liner
- Perl text processing
- Perl documentation lookup
features:
- Execute Perl scripts directly from the command line.
- Filter text using complex regular expressions with Perl.
- Perform in-place file substitutions with backup options.
- Access Perl's extensive inline documentation.
- Extract specific capture groups from text using regular expressions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# perl

> The Perl 5 language interpreter.
> More information: <https://www.perl.org>.

- Print lines from `stdin` [m/] matching `regex1` and case insensitive [/i] `regex2`:

`perl -n -e 'print if m/{{regex1}}/ and m/{{regex2}}/i'`

- Say [-E] first match group, using a `regex`, ignoring space in `regex` [/x]:

`perl -n -E 'say $1 if m/{{before}} ( {{group_regex}} ) {{after}}/x'`

- [-i]n-place, with backup, [s/] substitute all occurrence [/g] of `regex` with replacement:

`perl -i'.bak' -p -e 's/{{regex}}/{{replacement}}/g' {{path/to/files}}`

- Use perl's inline documentation, some pages also available via manual pages on Linux:

`perldoc perlrun ; perldoc module ; perldoc -f splice; perldoc -q perlfaq1`
