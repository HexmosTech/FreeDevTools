---
title: "elink Command - Link NCBI Databases | Free DevTools"
name: elink
path: /freedevtools/tldr/linux/elink
canonical: "https://hexmos.com/freedevtools/tldr/linux/elink/"
description: "Link NCBI databases with the elink command.  Find related sequences and biosamples efficiently using this free online tool; no registration required."
category: linux
keywords:
  - NCBI database linking
  - elink command
  - bioinformatics command-line
  - pubmed sequence linking
  - nuccore biosample association
  - esearch elink workflow
  - NCBI data integration
  - biological data linking
  - genomic data analysis
  - command-line bioinformatics
features:
  - Links records across NCBI databases (e.g., PubMed, Nucleotide, BioSample).
  - Retrieves associated sequences from nucleotide databases based on PubMed searches.
  - Identifies related biosamples from nucleotide query results.
  - Integrates seamlessly with the esearch command for efficient database querying.
  - Simplifies complex database navigation and data retrieval for biological research.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# elink

> Look up precomputed neighbors within a database, or find associated records in other databases.
> It is part of the `edirect` package.
> More information: <https://www.ncbi.nlm.nih.gov/books/NBK179288/>.

- Search pubmed then find related sequences:

`esearch -db pubmed -query "{{selective serotonin reuptake inhibitor}}" | elink -target nuccore`

- Search nucleotide then find related biosamples:

`esearch -db nuccore -query "{{insulin [PROT] AND rodents [ORGN]}}" | elink -target biosample`
