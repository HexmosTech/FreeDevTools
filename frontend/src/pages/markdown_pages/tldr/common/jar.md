---
title: "Create JAR Archive - Package Java Applications | Online Free DevTools by Hexmos"
name: jar
path: /freedevtools/tldr/common/jar
canonical: "https://hexmos.com/freedevtools/tldr/common/jar/"
description: "Create JAR archives with JAR. Package Java applications and libraries efficiently for distribution. Free online tool, no registration required. Easily compress files."
category: common
keywords:
- jar archive creator
- java package manager
- war file extractor
- jar file archiver
- compress java files
- java application packager
- jar file viewer
- jar file listing
- java library packager
- archive files
features:
- Create JAR archives from directory contents.
- Extract JAR and WAR files to the current directory.
- List the contents of a JAR or WAR file.
- View JAR/WAR file contents with verbose output.
- Recursively archive all files in a directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jar

> Java applications/libraries packager.
> More information: <https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html>.

- Recursively archive all files in the current directory into a .jar file:

`jar cf {{file.jar}} *`

- Unzip .jar/.war file to the current directory:

`jar -xvf {{file.jar}}`

- List a .jar/.war file content:

`jar tf {{path/to/file.jar}}`

- List a .jar/.war file content with verbose output:

`jar tvf {{path/to/file.jar}}`
