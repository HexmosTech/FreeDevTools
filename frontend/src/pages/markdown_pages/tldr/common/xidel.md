---
title: "Extract Data with Xidel - HTML/XML Parser | Free DevTools"
name: xidel
path: /freedevtools/tldr/common/xidel
canonical: "https://hexmos.com/freedevtools/tldr/common/xidel/"
description: "Extract data easily with Xidel, a powerful HTML/XML parser. Scrape web pages and APIs efficiently. Free online tool, no registration required."
category: common
keywords:
- html data extraction
- xml data extraction
- json api parser
- web scraping tool
- command line scraper
- xidel xpath
- xidel css selector
- xidel pattern matching
- html parsing linux
- xml parsing macos
features:
- Extract data from HTML/XML using XPath expressions
- Parse JSON APIs for structured data retrieval
- Follow links on web pages for recursive scraping
- Utilize CSS selectors for HTML element targeting
- Employ pattern matching for flexible data extraction
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xidel

> Download and extract data from HTML/XML pages as well as JSON APIs.
> More information: <https://www.videlibri.de/xidel.html>.

- Print all URLs found by a Google search:

`xidel {{https://www.google.com/search?q=test}} {{[-e|--extract]}} "//a/extract(@href, 'url[?]q=([^&]+)&', 1)[. != '']"`

- Print the title of all pages found by a Google search and download them:

`xidel {{https://www.google.com/search?q=test}} {{[-f|--follow]}} "{{//a/extract(@href, 'url[?]q=([^&]+)&', 1)[. != '']}}" {{[-e|--extract]}} {{//title}} --download {{'{$host}/'}}`

- Follow all links on a page and print the titles, with XPath:

`xidel {{https://example.org}} {{[-f|--follow]}} {{//a}} {{[-e|--extract]}} {{//title}}`

- Follow all links on a page and print the titles, with CSS selectors:

`xidel {{https://example.org}} {{[-f|--follow]}} "{{css('a')}}" --css {{title}}`

- Follow all links on a page and print the titles, with pattern matching:

`xidel {{https://example.org}} {{[-f|--follow]}} "{{<a>{.}</a>*}}" {{[-e|--extract]}} "{{<title>{.}</title>}}"`

- Read the pattern from example.xml (which will also check if the element containing "ood" is there, and fail otherwise):

`xidel {{path/to/example.xml}} {{[-e|--extract]}} "{{<x><foo>ood</foo><bar>{.}</bar></x>}}"`

- Print all newest Stack Overflow questions with title and URL using pattern matching on their RSS feed:

`xidel {{http://stackoverflow.com/feeds}} {{[-e|--extract]}} "{{<entry><title>{title:=.}</title><link>{uri:=@href}</link></entry>+}}"`

- Check for unread Reddit mail, Webscraping, combining CSS, XPath, JSONiq, and automatically form evaluation:

`xidel {{https://reddit.com}} {{[-f|--follow]}} "{{form(css('form.login-form')[1], {'user': '$your_username', 'passwd': '$your_password'})}}" {{[-e|--extract]}} "{{css('#mail')/@title}}"`
