## How To Use Changset 

### Creart Changeset Script.

```
make create-changeset test-db-last-mod-update
```

### Update Changeset Script.

Based on predefined functions, update the changeset script.
```
query = "UPDATE ipm_data SET updated_at = CURRENT_TIMESTAMP where slug_hash = -9222828972620712306;"
```


### Execute Changeset Script.

```
make exe-changeset test-db-last-mod-update
```