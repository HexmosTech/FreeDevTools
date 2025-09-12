---
title: "Extract Tables - Tabula PDF Extractor | Free DevTools"
name: tabula
path: /freedevtools/tldr/common/tabula
canonical: "https://hexmos.com/freedevtools/tldr/common/tabula/"
description: "Extract tables from PDF files with Tabula PDF Extractor. Convert PDF tables to CSV, JSON, or other formats effortlessly. Free online tool, no registration required."
category: common
keywords:
- PDF table extraction
- PDF to CSV
- PDF to JSON
- Tabula PDF converter
- Extract PDF data
- Command line PDF tool
- PDF data extraction
- PDF table to excel
- PDF table parser
- PDF data scraper
features:
- Extract tables from PDF files to CSV format
- Convert PDF tables to JSON format
- Extract tables from specific pages of a PDF
- Detect table boundaries using ruling lines or blank space
- Automatically guess table portion on a page
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tabula

> Extract tables from PDF files.
> More information: <https://tabula.technology>.

- Extract all tables from a PDF to a CSV file:

`tabula -o {{file.csv}} {{file.pdf}}`

- Extract all tables from a PDF to a JSON file:

`tabula --format JSON -o {{file.json}} {{file.pdf}}`

- Extract tables from pages 1, 2, 3, and 6 of a PDF:

`tabula --pages {{1-3,6}} {{file.pdf}}`

- Extract tables from page 1 of a PDF, guessing which portion of the page to examine:

`tabula --guess --pages {{1}} {{file.pdf}}`

- Extract all tables from a PDF, using ruling lines to determine cell boundaries:

`tabula --spreadsheet {{file.pdf}}`

- Extract all tables from a PDF, using blank space to determine cell boundaries:

`tabula --no-spreadsheet {{file.pdf}}`
