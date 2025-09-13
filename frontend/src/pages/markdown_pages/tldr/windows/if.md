---
title: "If Command - Control Conditional Processing | Free DevTools"
name: if
path: /freedevtools/tldr/windows/if
canonical: "https://hexmos.com/freedevtools/tldr/windows/if/"
description: "Control conditional processing with the If command. Manage execution flow based on conditions, error levels, and string comparisons. Free online tool, no registration required."
category: windows
keywords:
  - batch if command
  - cmd if statement
  - windows if command
  - conditional execution
  - batch script condition
  - errorlevel check
  - string comparison batch
  - file existence check
  - batch script logic
  - command line conditional
features:
  - Execute commands based on condition evaluation
  - Check error levels to determine command execution
  - Compare strings for equality or inequality
  - Verify the existence of a specified file path
  - Perform case-insensitive string comparisons
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# if

> Performs conditional processing in batch scripts.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/if>.

- Execute the specified commands if the condition is true:

`if {{condition}} ({{echo Condition is true}})`

- Execute the specified commands if the condition is false:

`if not {{condition}} ({{echo Condition is true}})`

- Execute the first specified commands if the condition is true otherwise execute the second specified commands:

`if {{condition}} ({{echo Condition is true}}) else ({{echo Condition is false}})`

- Check whether `%errorlevel%` is greater than or equal to the specified exit code:

`if errorlevel {{2}} ({{echo Condition is true}})`

- Check whether two strings are equal:

`if %{{variable}}% == {{string}} ({{echo Condition is true}})`

- Check whether two strings are equal without respecting letter case:

`if /i %{{variable}}% == {{string}} ({{echo Condition is true}})`

- Check whether a file exist:

`if exist {{path\to\file}} ({{echo Condition is true}})`
