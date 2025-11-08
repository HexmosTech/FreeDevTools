---
title: "BLASTN - Align Nucleotide Sequences | Online Free DevTools by Hexmos"
name: blastn
path: "/freedevtools/tldr/linux/blastn/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/blastn/"
description: "Align nucleotide sequences with BLASTN using command-line interface. Perform sequence similarity searches and identify homologous genes. Free online tool, no registration required."
category: linux
keywords:
- nucleotide alignment
- blastn sequence search
- DNA sequence analysis
- nucleotide database search
- linux blastn
- command-line blastn
- blastn parameters
- sequence homology detection
- blastn remote search
- blastn tabular output
features:
- Align nucleotide sequences using various BLASTN algorithms.
- Search nucleotide databases for similar sequences.
- Customize output format for detailed sequence analysis.
- Utilize multi-threading for faster sequence alignment.
- Perform remote BLASTN searches against NCBI databases.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# blastn

> Nucleotide-Nucleotide BLAST.
> More information: <https://www.ncbi.nlm.nih.gov/books/NBK279684/table/appendices.T.blastn_application_options/>.

- Align two or more sequences using megablast (default), with the e-value threshold of 1e-9, pairwise output format (default):

`blastn -query {{query.fa}} -subject {{subject.fa}} -evalue {{1e-9}}`

- Align two or more sequences using blastn:

`blastn -task blastn -query {{query.fa}} -subject {{subject.fa}}`

- Align two or more sequences, custom tabular output format, output to file:

`blastn -query {{query.fa}} -subject {{subject.fa}} -outfmt {{'6 qseqid qlen qstart qend sseqid slen sstart send bitscore evalue pident'}} -out {{output.tsv}}`

- Search nucleotide databases using a nucleotide query, 16 threads (CPUs) to use in the BLAST search, with a maximum number of 10 aligned sequences to keep:

`blastn -query {{query.fa}} -db {{path/to/blast_db}} -num_threads {{16}} -max_target_seqs {{10}}`

- Search the remote non-redundant nucleotide database using a nucleotide query:

`blastn -query {{query.fa}} -db {{nt}} -remote`

- Display help (use `-help` for detailed help):

`blastn -h`
