---
title: "InfluxDB Client - Control InfluxDB Instances | Free DevTools"
name: influx
path: /freedevtools/tldr/common/influx
canonical: "https://hexmos.com/freedevtools/tldr/common/influx/"
description: "Control InfluxDB instances with the InfluxDB client. Connect to databases, execute queries, and format output. Free online tool, no registration required."
category: common
keywords:
- InfluxDB client
- time-series database control
- InfluxDB query execution
- InfluxDB data formatting
- InfluxDB shell commands
- InfluxQL command line
- InfluxDB administration
- InfluxDB monitoring
- data query tool
- influx command-line interface
features:
- Connect to local or remote InfluxDB instances
- Execute InfluxQL queries directly from the command line
- Format query output in JSON, CSV, or columnar format
- Authenticate with username and password
- Specify the database to use for operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# influx

> InfluxDB v1 client.
> More information: <https://docs.influxdata.com/influxdb/v1/tools/influx-cli/use-influx-cli/>.

- Connect to an InfluxDB running on localhost with no credentials:

`influx`

- Connect with a specific username (will prompt for a password):

`influx -username {{username}} -password ""`

- Connect to a specific host:

`influx -host {{hostname}}`

- Use a specific database:

`influx -database {{database_name}}`

- Execute a given command:

`influx -execute "{{influxql_command}}"`

- Return output in a specific format:

`influx -execute "{{influxql_command}}" -format {{json|csv|column}}`
