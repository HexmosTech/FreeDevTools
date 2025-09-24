---
title: "Crawl Websites - Manage Scrapy Projects | Online Free DevTools by Hexmos"
name: scrapy
path: /freedevtools/tldr/common/scrapy
canonical: "https://hexmos.com/freedevtools/tldr/common/scrapy/"
description: "Crawl websites effectively with Scrapy. Manage web scraping projects, extract data, and automate web crawling tasks. Free online tool, no registration required."
category: common
keywords:
- web crawling framework
- scrapy project management
- web scraping spider
- data extraction tool
- website crawler
- scrapy commands
- python web scraping
- scrapy tutorial
- command line crawler
- headless browser scraping
features:
- Create Scrapy projects with ease
- Generate and edit web scraping spiders
- Run spiders to crawl and extract data
- Fetch webpage content as Scrapy sees it
- Interact with page source via the Scrapy shell
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# scrapy

> Web-crawling framework.
> More information: <https://scrapy.org>.

- Create a project:

`scrapy startproject {{project_name}}`

- Create a spider (in project directory):

`scrapy genspider {{spider_name}} {{website_domain}}`

- Edit spider (in project directory):

`scrapy edit {{spider_name}}`

- Run spider (in project directory):

`scrapy crawl {{spider_name}}`

- Fetch a webpage as Scrapy sees it and print the source to `stdout`:

`scrapy fetch {{url}}`

- Open a webpage in the default browser as Scrapy sees it (disable JavaScript for extra fidelity):

`scrapy view {{url}}`

- Open Scrapy shell for URL, which allows interaction with the page source in a Python shell (or IPython if available):

`scrapy shell {{url}}`
