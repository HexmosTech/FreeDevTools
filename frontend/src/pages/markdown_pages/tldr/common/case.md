---
title: "Control Case Statements - Bash Multi-Choice | Online Free DevTools by Hexmos"
name: case
path: /freedevtools/tldr/common/case
canonical: "https://hexmos.com/freedevtools/tldr/common/case/"
description: "Control branching logic with Case statements in Bash. Enhance shell scripting with multi-choice conditional execution. Free online tool, no registration required."
category: common
keywords:
- bash case statement
- shell script case
- linux conditional logic
- unix case syntax
- bash multi-choice
- pattern matching bash
- shell scripting patterns
- bash scripting conditional
- linux scripting case
- conditional execution shell
features:
- Match variables against string literals
- Combine patterns with logical OR
- Match multiple patterns simultaneously
- Continue to the next pattern's commands
- Create fallback patterns for unmatched cases
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# case

> Bash builtin construct for creating multi-choice conditional statements.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-case>.

- Match a variable against string literals to decide which command to run:

`case {{$COUNTRULE}} in {{words}}) {{wc --words README}} ;; {{lines}}) {{wc --lines README}} ;; esac`

- Combine patterns with |, use * as a fallback pattern:

`case {{$COUNTRULE}} in {{[wW]|words}}) {{wc --words README}} ;; {{[lL]|lines}}) {{wc --lines README}} ;; *) {{echo "what?"}} ;; esac`

- Allow matching multiple patterns:

`case {{$ANIMAL}} in {{cat}}) {{echo "It's a cat"}} ;;& {{cat|dog}}) {{echo "It's a cat or a dog"}} ;;& *) {{echo "Fallback"}} ;; esac`

- Continue to the next pattern's commands without checking the pattern:

`case {{$ANIMAL}} in {{cat}}) echo {{"It's a cat"}} ;& {{dog}}) {{echo "It's either a dog or cat fell through"}} ;& *) {{echo "Fallback"}} ;; esac`

- Display help:

`help case`
