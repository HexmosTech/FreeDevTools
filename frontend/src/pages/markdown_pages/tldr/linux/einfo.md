---
title: "Einfo - Retrieve Entrez Database Information | Online Free DevTools by Hexmos"
name: einfo
path: /freedevtools/tldr/linux/einfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/einfo/"
description: "Retrieve Entrez database information with einfo. Explore database fields, links, and update dates using the command line tool. Free online tool, no registration required."
category: linux
keywords:
- Entrez database information
- NCBI database query
- Einfo command linux
- Database metadata retrieval
- Bioinformatic command line
- Protein database links
- Nucleotide database fields
- Linux database exploration
- NCBI einfo tool
- Command line database information
features:
- Display available Entrez database names
- Retrieve complete database information in XML format
- Print all fields within a specified database
- List all linked databases for a given database
- Show the last update date of a database
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# einfo

> Provides the number of records indexed in each database field, the last update date of the database, and the available links from the database to other Entrez databases.
> More information: <https://www.ncbi.nlm.nih.gov/books/NBK179288/>.

- Print all database names:

`einfo -dbs`

- Print all information of the protein database in XML format:

`einfo -db {{protein}}`

- Print all fields of the nuccore database:

`einfo -db {{nuccore}} -fields`

- Print all links of the protein database:

`einfo -db {{protein}} -links`
