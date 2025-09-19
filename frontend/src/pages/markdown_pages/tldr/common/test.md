---
title: "Test Command - Validate File Types | Online Free DevTools by Hexmos"
name: test
path: /freedevtools/tldr/common/test
canonical: "https://hexmos.com/freedevtools/tldr/common/test/"
description: "Validate file types and compare values with Test Command. Determine file existence and compare strings. Free online tool, no registration required."
category: common
keywords:
- file type validation
- string comparison test
- file existence check
- directory existence check
- shell script test
- command line test
- bash test command
- zsh test command
- linux test command
- macos test command
features:
- Check if a file exists
- Compare string values
- Determine if a variable is empty
- Verify directory existence
- Execute conditional statements based on test results
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# test

> Check file types and compare values.
> Returns 0 if the condition evaluates to true, 1 if it evaluates to false.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/test-invocation.html>.

- Test if a given variable is equal to a given string:

`test "{{$MY_VAR}}" = "{{/bin/zsh}}"`

- Test if a given variable is empty ([z]ero length):

`test -z "{{$GIT_BRANCH}}"`

- Test if a [f]ile exists:

`test -f "{{path/to/file_or_directory}}"`

- Test if a [d]irectory does not exist:

`test ! -d "{{path/to/directory}}"`

- If A is true, then do B, or C in the case of an error (notice that C may run even if A fails):

`test {{condition}} && {{echo "true"}} || {{echo "false"}}`

- Use `test` in a conditional statement:

`if test -f "{{path/to/file}}"; then echo "File exists"; else echo "File does not exist"; fi`
