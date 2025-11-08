---
title: "Esearch - Perform Entrez Searches | Online Free DevTools by Hexmos"
name: esearch
path: "/freedevtools/tldr/linux/esearch/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/esearch/"
description: "Perform advanced Entrez searches with Esearch to query biological databases like PubMed and protein. Quickly retrieve data with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - entrez search
  - database search
  - biological data retrieval
  - ncbi esearch
  - pubmed search
  - protein database search
  - nucleotide database search
  - sequence search
  - edirect esearch
  - command line search
features:
  - Search NCBI databases using specified query terms.
  - Filter search results based on indexed fields.
  - Retrieve sequences containing metadata.
  - Query pubmed database.
  - Support regular expression based searching.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# esearch

> Perform a new Entrez search using terms in indexed fields.
> It is part of the `edirect` package.
> More information: <https://www.ncbi.nlm.nih.gov/books/NBK179288/>.

- Search the pubmed database for selective serotonin reuptake inhibitor:

`esearch -db pubmed -query "{{selective serotonin reuptake inhibitor}}"`

- Search the protein database using a query and `regex`:

`esearch -db {{protein}} -query {{'Escherichia*'}}`

- Search the nucleotide database for sequences whose metadata contain insulin and rodents:

`esearch -db nuccore -query "{{insulin [PROT] AND rodents [ORGN]}}"`

- Display help:

`esearch {{[-h|-help]}}`
