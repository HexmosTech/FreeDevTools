---
title: "Mongoexport - Export MongoDB Data to JSON or CSV | Online Free DevTools by Hexmos"
name: mongoexport
path: "/freedevtools/tldr/mongo/mongoexport/"
canonical: "https://hexmos.com/freedevtools/tldr/mongo/mongoexport/"
description: "Export MongoDB data with Mongoexport. Convert MongoDB collections to JSON or CSV format for data analysis and migration. Free online tool, no registration required."
category: common
keywords:
- MongoDB export
- JSON export MongoDB
- CSV export MongoDB
- MongoDB data export tool
- Command line MongoDB export
- MongoDB export collection
- MongoDB export to file
- MongoDB export query
- MongoDB export JSON array
- MongoDB export CSV fields
features:
- Export MongoDB collections to JSON format.
- Export MongoDB data to CSV format with specified fields.
- Export MongoDB data based on query filters.
- Export MongoDB data to stdout for piping.
- Export MongoDB data as a JSON array.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mongoexport

> Produce exports of data stored in a MongoDB instance formatted as JSON or CSV.
> More information: <https://docs.mongodb.com/database-tools/mongoexport/>.

- Export a collection to `stdout`, formatted as JSON:

`mongoexport --uri={{connection_string}} --collection={{collection_name}}`

- Export the documents in the specified collection that match a query to a JSON file:

`mongoexport --db={{database_name}} --collection={{collection_name}} --query="{{query_object}}" --out={{path/to/file.json}}`

- Export documents as a JSON array instead of one object per line:

`mongoexport --collection={{collection_name}} --jsonArray`

- Export documents to a CSV file:

`mongoexport --collection={{collection_name}} --type={{csv}} --fields="{{field1,field2,...}}" --out={{path/to/file.csv}}`

- Export documents that match the query in the specified file to a CSV file, omitting the list of field names on the first line:

`mongoexport --collection={{collection_name}} --type={{csv}} --fields="{{field1,field2,...}}" --queryFile={{path/to/file}} --noHeaderLine --out={{path/to/file.csv}}`

- Export documents to `stdout`, formatted as human-readable JSON:

`mongoexport --uri={{mongodb_uri}} --collection={{collection_name}} --pretty`

- Display help:

`mongoexport --help`
