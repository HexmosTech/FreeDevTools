---
title: "Flask-Unsign - Control Flask Sessions | Free DevTools"
name: flask-unsign
path: /freedevtools/tldr/common/flask-unsign
canonical: "https://hexmos.com/freedevtools/tldr/common/flask-unsign/"
description: "Control Flask sessions with Flask-Unsign. Decode, brute-force, and craft Flask session cookies. Free online tool, no registration required."
category: common
keywords:
- Flask session control
- Flask cookie manipulation
- Python Flask security
- Flask session decoding
- Flask secret key recovery
- Flask session brute force
- Flask cookie signing
- Flask application security
- Web session management
- Command-line cookie tool
features:
- Decode Flask session cookies
- Brute-force Flask secret keys
- Sign new Flask session cookies
- Use custom wordlists for brute-forcing
- Handle legacy Flask session timestamps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flask-unsign

> A tool to brute-force, decode and craft `Flask` session cookies.
> More information: <https://github.com/Paradoxis/Flask-Unsign>.

- Decode a Flask session cookie:

`flask-unsign {{[-d|--decode]}} {{[-c|--cookie]}} {{cookie}}`

- Decode a session cookie fetched from a URL which returns a `Set-Cookie` header:

`flask-unsign {{[-d|--decode]}} --server {{URL}}`

- Brute-force a secret key using the default flask-unsign-wordlist (requires `flask-unsign-wordlist`):

`flask-unsign {{[-u|--unsign]}} {{[-c|--cookie]}} {{cookie}}`

- Brute-force a secret key with a custom wordlist (use `--no-literal-eval` for unquoted entries):

`flask-unsign {{[-u|--unsign]}} {{[-c|--cookie]}} {{cookie}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}}`

- Sign a new session cookie with a secret key:

`flask-unsign {{[-s|--sign]}} {{[-c|--cookie]}} {{"{'logged_in': False}"}} {{[-S|--secret]}} {{secret}}`

- Sign a session cookie using legacy timestamp (useful for old versions):

`flask-unsign {{[-s|--sign]}} {{[-c|--cookie]}} {{"{'logged_in': False}"}} {{[-S|--secret]}} {{secret}} {{[-l|--legacy]}}`

- Brute-force a session cookie with custom threads and no literal evaluation:

`flask-unsign {{[-u|--unsign]}} {{[-c|--cookie]}} {{cookie}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} {{[-t|--threads]}} {{threads}} {{[-nE|--no-literal-eval]}}`
