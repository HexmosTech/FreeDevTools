---
title: "Nextclade - Analyze Virus Genomes | Online Free DevTools by Hexmos"
name: nextclade
path: "/freedevtools/tldr/common/nextclade/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nextclade/"
description: "Analyze virus genomes with Nextclade. Perform sequence alignment, clade assignment, and QC checks. Free online tool, no registration required."
category: common
keywords:
- virus genome analysis
- sequence alignment tool
- clade assignment
- phylogenetic analysis
- viral mutation analysis
- bioinformatics tool
- nextstrain analysis
- SARS-CoV-2 analysis
- fasta alignment
- genome QC check
features:
- Align virus sequences against a reference genome
- Assign viral sequences to specific clades
- Perform quality control checks on genome sequences
- Identify mutations in viral genomes
- Generate reports for virus genome analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nextclade

> Bioinformatics tool for virus genome alignment, clade assignment and qc checks.
> More information: <https://docs.nextstrain.org/projects/nextclade/en/stable/user/nextclade-cli/reference.html>.

- Align sequences to user provided reference, outputting the alignment to a file:

`nextclade run {{path/to/sequences.fa}} {{[-r|--input-ref]}} {{path/to/reference.fa}} {{[-o|--output-fasta]}} {{path/to/alignment.fa}}`

- Create a TSV report, auto-downloading the latest dataset:

`nextclade run {{path/to/fasta}} {{[-d|--dataset-name]}} {{dataset_name}} {{[-t|--output-tsv]}} {{path/to/report.tsv}}`

- List all available datasets:

`nextclade dataset list`

- Download the latest SARS-CoV-2 dataset:

`nextclade dataset get {{[-n|--name]}} sars-cov-2 {{[-o|--output-dir]}} {{path/to/directory}}`

- Use a downloaded dataset, producing all outputs:

`nextclade run {{[-D|--input-dataset]}} {{path/to/dataset_dir}} {{[-O|--output-all]}} {{path/to/output_dir}} {{path/to/sequences.fasta}}`

- Run on multiple files:

`nextclade run {{[-d|--dataset-name]}} {{dataset_name}} {{[-t|--output-tsv]}} {{path/to/output_tsv}} -- {{path/to/input_fasta_1 path/to/input_fasta_2 ...}}`

- Try reverse complement if sequence does not align:

`nextclade run --retry-reverse-complement {{[-d|--dataset-name]}} {{dataset_name}} {{[-t|--output-tsv]}} {{path/to/output_tsv}} {{path/to/input_fasta}}`
