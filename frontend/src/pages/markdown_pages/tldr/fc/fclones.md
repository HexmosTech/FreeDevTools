---
title: "Find Duplicate Files - fclones | Online Free DevTools by Hexmos"
name: fclones
path: /freedevtools/tldr/fc/fclones
canonical: "https://hexmos.com/freedevtools/tldr/fc/fclones/"
description: "Find duplicate files with fclones, an efficient file comparison tool. Quickly identify and manage redundant files on your system. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- file duplicate remover
- duplicate file comparison
- find duplicate files Linux
- find duplicate files MacOS
- fclones command line
- file deduplication
- disk space analyzer
- file integrity checker
- remove duplicate files
features:
- Group duplicate files based on content
- Move or delete duplicate files
- Create hard or soft links to deduplicate files
- Transform files before comparison (e.g., remove EXIF data)
- Cache file hashes for faster subsequent searches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fclones

> Efficient duplicate file finder and remover.
> More information: <https://github.com/pkolaczk/fclones>.

- Search for duplicate files in the current directory:

`fclones group .`

- Search multiple directories for duplicate files and cache the results:

`fclones group --cache {{path/to/directory1 path/to/directory2}}`

- Search only the specified directory for duplicate files, skipping subdirectories and save the results into a file:

`fclones group {{path/to/directory}} --depth 1 > {{path/to/file.txt}}`

- Move the duplicate files in a TXT file to a different directory:

`fclones move {{path/to/target_directory}} < {{path/to/file.txt}}`

- Perform a dry run for soft links in a TXT file without actually linking:

`fclones link --soft < {{path/to/file.txt}} --dry-run 2 > /dev/null`

- Delete the newest duplicates from the current directory without storing them in a file:

`fclones group . | fclones remove --priority newest`

- Preprocess JPEG files in the current directory by using an external command to strip their EXIF data before matching for duplicates:

`fclones group . --name '*.jpg' -i --transform 'exiv2 -d a $IN' --in-place`
