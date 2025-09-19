---
title: "Create Genome Tree - mashtree | Online Free DevTools by Hexmos"
name: mashtree
path: /freedevtools/tldr/linux/mashtree
canonical: "https://hexmos.com/freedevtools/tldr/linux/mashtree/"
description: "Create genome tree structures with mashtree. Generate phylogenetic trees efficiently from genomic data. Free online tool, no registration required."
category: linux
keywords:
  - genome tree generation
  - phylogenetic tree creation
  - fast tree construction
  - genomic distance estimation
  - fasta tree builder
  - fastq tree builder
  - mashtree genome analysis
  - command line genomics
  - microbial phylogeny
  - sequence alignment alternative
features:
  - Generates trees from FASTA or FASTQ files
  - Supports multi-threading for faster processing
  - Offers configurable depth options for accuracy
  - Creates Newick format output files
  - Estimates genetic distance between genomes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mashtree

> Make a fast tree from genomes.
> Does not make a phylogeny.
> More information: <https://github.com/lskatz/mashtree>.

- Fastest method in mashtree to create a tree from fastq and/or fasta files using multiple threads, piping into a newick file:

`mashtree --numcpus {{12}} {{*.fastq.gz}} {{*.fasta}} > {{mashtree.dnd}}`

- Most accurate method in mashtree to create a tree from fastq and/or fasta files using multiple threads, piping into a newick file:

`mashtree --mindepth {{0}} --numcpus {{12}} {{*.fastq.gz}} {{*.fasta}} > {{mashtree.dnd}}`

- Most accurate method to create a tree with confidence values (note that any options for `mashtree` itself has to be on the right side of the `--`):

`mashtree_bootstrap.pl --reps {{100}} --numcpus {{12}} {{*.fastq.gz}} -- --min-depth {{0}} > {{mashtree.bootstrap.dnd}}`
