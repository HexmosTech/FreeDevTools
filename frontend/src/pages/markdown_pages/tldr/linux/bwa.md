---
title: "BWA Alignment - Map DNA Sequences | Online Free DevTools by Hexmos"
name: bwa
path: /freedevtools/tldr/linux/bwa
canonical: "https://hexmos.com/freedevtools/tldr/linux/bwa/"
description: "Map DNA sequences with BWA Alignment Tool. Align short, low-divergent reads against large reference genomes. Free online tool, no registration required."
category: linux
keywords:
- DNA sequence alignment
- BWA alignment
- Burrows-Wheeler Aligner
- Genome mapping
- Sequence mapper
- SAM file generation
- FASTQ to SAM conversion
- Linux alignment tool
- Bioinformatics command line
- Reference genome indexing
features:
- Index reference genomes for alignment
- Align single-end and pair-end reads
- Compress alignment results to save space
- Mark shorter split hits as secondary
- Append FASTA/Q comments to output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bwa

> Burrows-Wheeler Alignment tool.
> Short, low-divergent DNA sequences mapper against a large reference genome, such as the human genome.
> More information: <https://manned.org/bwa>.

- Index the reference genome:

`bwa index {{path/to/reference.fa}}`

- Map single-end reads (sequences) to indexed genome using 32 [t]hreads and compress the result to save space:

`bwa mem -t 32 {{path/to/reference.fa}} {{path/to/read_single_end.fq.gz}} | gzip > {{path/to/alignment_single_end.sam.gz}}`

- Map pair-end reads (sequences) to the indexed genome using 32 [t]hreads and compress the result to save space:

`bwa mem -t 32 {{path/to/reference.fa}} {{path/to/read_pair_end_1.fq.gz}} {{path/to/read_pair_end_2.fq.gz}} | gzip > {{path/to/alignment_pair_end.sam.gz}}`

- Map pair-end reads (sequences) to the indexed genome using 32 [t]hreads with [M]arking shorter split hits as secondary for output SAM file compatibility in Picard software and compress the result:

`bwa mem -M -t 32 {{path/to/reference.fa}} {{path/to/read_pair_end_1.fq.gz}} {{path/to/read_pair_end_2.fq.gz}} | gzip > {{path/to/alignment_pair_end.sam.gz}}`

- Map pair-end reads (sequences) to indexed genome using 32 [t]hreads with FASTA/Q [C]omments (e.g. BC:Z:CGTAC) appending to a compressed result:

`bwa mem -C -t 32 {{path/to/reference.fa}} {{path/to/read_pair_end_1.fq.gz}} {{path/to/read_pair_end_2.fq.gz}} | gzip > {{path/to/alignment_pair_end.sam.gz}}`
