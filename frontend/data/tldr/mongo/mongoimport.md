---
title: "Mongoimport - Import Data to MongoDB | Online Free DevTools by Hexmos"
name: mongoimport
path: "/freedevtools/tldr/mongo/mongoimport/"
canonical: "https://hexmos.com/freedevtools/tldr/mongo/mongoimport/"
description: "Import data to MongoDB with Mongoimport. Convert JSON, CSV, and TSV files into MongoDB collections using command-line. Free online tool, no registration required."
category: common
keywords:
- mongoimport json
- mongoimport csv
- mongoimport tsv
- mongodb import utility
- database import tool
- command line import tool
- json to mongodb
- csv to mongodb
- tsv to mongodb
- mongodb data migration
features:
- Import JSON, CSV, and TSV files into MongoDB
- Specify the target database and collection for the imported data
- Use a query to match existing documents during import
- Read field names from a separate CSV file
- Control import mode (delete, merge, or upsert)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mongoimport

> Imports content from a JSON, CSV, or TSV file into a MongoDB database.
> More information: <https://docs.mongodb.com/database-tools/mongoimport/>.

- Import a JSON file into a specific collection:

`mongoimport --file {{path/to/file.json}} --uri {{mongodb_uri}} {{[-c|--collection]}} {{collection_name}}`

- Import a CSV file, using the first line of the file to determine field names:

`mongoimport --type {{csv}} --file {{path/to/file.csv}} {{[-d|--db]}} {{database_name}} {{[-c|--collection]}} {{collection_name}}`

- Import a JSON array, using each element as a separate document:

`mongoimport --jsonArray --file {{path/to/file.json}}`

- Import a JSON file using a specific mode and a query to match existing documents:

`mongoimport --file {{path/to/file.json}} --mode {{delete|merge|upsert}} --upsertFields "{{field1,field2,...}}"`

- Import a CSV file, reading field names from a separate CSV file and ignoring fields with empty values:

`mongoimport --type {{csv}} --file {{path/to/file.csv}} --fieldFile {{path/to/field_file.csv}} --ignoreBlanks`

- Display help:

`mongoimport --help`
