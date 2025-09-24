---
title: "Samtools - Manage Genomics Data | Online Free DevTools by Hexmos"
name: samtools
path: /freedevtools/tldr/common/samtools
canonical: "https://hexmos.com/freedevtools/tldr/common/samtools/"
description: "Manage Genomics data with Samtools, the command-line tool for processing SAM/BAM/CRAM files. Analyze sequencing data effortlessly. Free online tool, no registration required."
category: common
keywords:
- genomics data management
- samtools bam manipulation
- sequence alignment processing
- sam bam cram format
- htslib toolkit
- genomics analysis command line
- bioinformatics tools
- genomics sequencing data
- genomics file conversion
- genomics data indexing
features:
- Convert SAM to BAM format
- Sort genomics data files
- Index sorted BAM files for fast access
- Merge multiple genomics files
- Split files based on read groups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# samtools

> Tools for handling high-throughput sequencing (genomics) data.
> Used for reading/writing/editing/indexing/viewing of data in SAM/BAM/CRAM format.
> More information: <https://www.htslib.org/doc/samtools.html>.

- Convert a SAM input file to BAM stream and save to file:

`samtools view -S {{[-b|--bam]}} {{input.sam}} > {{output.bam}}`

- Take input from `stdin` (-) and print the SAM header and any reads overlapping a specific region to `stdout`:

`{{other_command}} | samtools view {{[-h|--with-header]}} - chromosome:start-end`

- Sort file and save to BAM (the output format is automatically determined from the output file's extension):

`samtools sort {{input}} {{[-o|--output]}} {{output.bam}}`

- Index a sorted BAM file (creates `sorted_input.bam.bai`):

`samtools index {{sorted_input.bam}}`

- Print alignment statistics about a file:

`samtools flagstat {{sorted_input}}`

- Count alignments to each index (chromosome/contig):

`samtools idxstats {{sorted_indexed_input}}`

- Merge multiple files:

`samtools merge {{output}} {{input1 input2 ...}}`

- Split input file according to read groups:

`samtools split {{merged_input}}`
