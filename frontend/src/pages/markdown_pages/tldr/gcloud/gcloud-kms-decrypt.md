---
title: "Gcloud KMS Decrypt - Decrypt Files Securely | Free DevTools"
name: gcloud-kms-decrypt
path: /freedevtools/tldr/common/gcloud-kms-decrypt
canonical: "https://hexmos.com/freedevtools/tldr/common/gcloud-kms-decrypt/"
description: "Decrypt files easily with Gcloud KMS Decrypt. Utilize Cloud KMS keys to protect sensitive data using command-line decryption. Free online tool, no registration required."
category: common
keywords:
- KMS file decryption
- Cloud KMS decrypt
- Gcloud KMS decryption tool
- Command line decrypt tool
- KMS ciphertext decryption
- Gcloud command decryption
- Data decryption tool
- Google Cloud KMS decrypt
- Symmetric key decryption
- Gcloud AAD decryption
features:
- Decrypts ciphertext files using Cloud KMS keys.
- Supports specifying key, keyring, and location for decryption.
- Allows decryption using additional authenticated data (AAD).
- Can write decrypted plaintext to `stdout`.
- Provides command-line interface for secure decryption operations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcloud kms decrypt

> Decrypt a ciphertext file using a Cloud KMS key.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/kms/decrypt>.

- Decrypt a file using a specified key, key ring, and location:

`gcloud kms decrypt --key={{key_name}} --keyring={{keyring_name}} --location={{global}} --ciphertext-file={{path/to/ciphertext}} --plaintext-file={{path/to/plaintext}}`

- Decrypt a file with additional authenticated data (AAD) and write the decrypted plaintext to `stdout`:

`gcloud kms decrypt --key={{key_name}} --keyring={{keyring_name}} --location={{global}} --additional-authenticated-data-file={{path/to/file.aad}} --ciphertext-file={{path/to/ciphertext}} --plaintext-file=-`
