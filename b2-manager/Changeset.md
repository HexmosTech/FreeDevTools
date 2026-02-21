# 17th Feb 2026

# DB Changeset Script Policy

To Upload server db / local db to b2 without any data loss.

## States of DB

Db will be present in these 3 locations mainly:

1. b2: 
- It is the source of truth for the database version.
- Any db updated and inserted, should be done via changeset script integrated with `b2m`.

2. Server:
- This is the production db.
- Data will be inserted regularly from API and inserted/updated data should reflect in live server.
- Inserted/Updated Data should be exportable during changeset phase which I will be further defining on how it is done in changeset script.
3. Local
- These are the db which are present in the local machine of the developer.
- These db are used for the development purposes.
- Any new feature or changes in the db can be done with only changeset script.


## Changeset Script 

I have divided into two types of changeset scripts based on where it is triggered from:

1. Server -> B2: No version confict (happy flow)
2. Server -> B2: Version conflict (Changeset required)
4. Team Member -> B2: No version confict (happy flow) 
5. Team Member -> B2: Version conflict (Changeset required) 

Both of these should be well defined by the developer in the changeset script.
### Automated Changeset Script
In this changeset script, It should automatically applies changeset of data from server to b2. Both b2 and New data should be present before uploading to b2.


#### Scenario 1: Server -> B2: No version confict (happy flow)

Assume These Constraints :
1. Current IPM DB Version States at 2PM.

| DB Location | version |
| ----------- | ------- |
| b2          | v1      |
| server      | v1      |

**At 3PM:**
1. DB version in same state.
2. User runs ipm and generates IPM json for a new repo which didn't exist earlier.
3. The db gets updated in server db immediately.

| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v1              |
| server      | v2*             |

Using `*` to say db is updated and not present in b2. 

**At 6PM:**
Changeset script is triggered at 6pm daily.
Step 1: Check Status of DB using `b2m`.
Result:`b2m` will result **Ready to upload** as both DB.
Step 2: Trigger `b2m` to upload DB to b2.
DB Version After Upload to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2 db       | v2              |
| server db   | v2              |

#### Scenario 2: Server -> B2: Version conflict (Changeset required)
1. Current IPM DB Version States at 2PM.

| DB Location | DB Version |
| ----------- | ---------- |
| b2          | v1         |
| server      | v1         |

**At 3PM:**
1. DB version in same state.
2. User runs ipm and generates IPM json for a new repo which didn't exist earlier.
3. The db gets updated in server db immediately.

| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v1              |
| server      | v2*             |

Using `*` to say db is updated and not present in b2. 
**At 4PM:**
 1. IPM db was updated with bulk json insertion.
 2. This db is uploaded to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v2              |
| server      | v2*             |

Using `*` to say db is updated and not present in b2. 

**At 6PM:**
Changeset script is triggered at 6pm.
Step 1: Check Status of DB using `b2m`.
Result:`b2m` will result **Outdated DB** as both DB.
Step 2: Changeset should export/backup db version `v2*` 
Step 3: Download `v2` from `b2` via`b2m`
Step 4: Trigger builk insertion of json from `v2*` to `v2` hence creating `v3`
Step 4: Trigger `b2m` to upload `v3` db to b2.
DB Version After Upload to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2 db       | v3              |
| server db   | v3              |





#### Scenario 3: Team Member -> B2: No version confict (happy flow)


Assume These Constraints :
1. Current emoji DB  Version States at 2PM.

| DB Location | version |
| ----------- | ------- |
| b2          | v1      |
| Athreya     | v1      |

**At 2:10PM:**
1. DB version in same state.
2. Athreya uses Changeset Script to update emoji db


| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v1              |
| Athreya     | v2*             |

Using `*` to say db is updated and not present in b2. 

3. Changeset script will be triggered by Athreya and it will continue with these steps.
Step 1: Check Status of DB using `b2m`.
Result:`b2m` will result **Ready to upload** as both DB.
Step 2: Trigger `b2m` to upload DB to b2.
DB Version After Upload to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2 db       | v2              |
| Athreya db  | v2              |


#### Scenario 4: Team Member -> B2: Version conflict (Changeset required)


Assume These Constraints :
1. Current emoji DB  Version States at 2PM.

| DB Location | version |
| ----------- | ------- |
| b2          | v1      |
| Athreya     | v1      |
| Lince       | v1      |

**At 2:10PM:**
1. DB version in same state.
2. Athreya uses Changeset Script to update emoji db


| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v1              |
| Athreya     | v2*             |
| Lince       | v1              |

Using `*` to say db is updated and not present in b2. 

Also Currently Athreya's db is updating DB


**At 2:11PM:**

1. Lince uses Changeset Script to update emoji db


| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v1              |
| Athreya     | v2*             |
| Lince       | v2*             |

Using `*` to say db is updated and not present in b2. 

3. Changeset script will be triggered by Lince and it will continue with these steps.
Step 1: Check Status of DB using `b2m`.
Result:`b2m` will result **Ready to upload** as both DB.
Step 2: Trigger `b2m` to upload DB to b2.
DB Version After Upload to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2 db       | v2              |
| Athreya db  | v2*             |
| Lince db    | v2              |


**At 2:12PM:**

4. Changeset script will be triggered by Athreya and it will continue with these steps.
Step 1: Check Status of DB using `b2m`.
Result:`b2m` will result **Outdated DB** as both DB.
Step 2: Changeset should export/backup db version `v2*` 
Step 3: Download `v2` from `b2` via`b2m`
Step 4: Trigger builk insertion of json from `v2*` to `v2` hence creating `v3`
Step 5: Trigger `b2m` to upload `v3` db to b2.
DB Version After Upload to b2

| DB Location | Initial Version |
| ----------- | --------------- |
| b2          | v3              |
| Athreya     | v3              |
| Lince db    | v2              |




### Default Action Performed by Changeset Script.

These rules should be followed on start of changeset script.

This is my assumption, you can correct me if I am wrong.
1. `*-wal` file and the `*-shm` file should not be present. There should be no active connection to the db.
2. `fdt-templ` should have cli to disconnect to slected changeset db's.
3. Make sure Server should still be serving other pages even the db which is being migrated via recent cache.
4. Trigger `b2m` to check status of db.
5. If `b2m` returns **Ready to upload** then trigger `b2m` to upload db to b2.
6. If `b2m` returns **Outdated DB** then 
    1. trigger `b2m` to export new data from db version `v2*` or create cp of `v2*` to predifned directory.
    2. download `v2` from `b2` via `b2m` 
    3. Insertion of new data from `v2*` to `v2` hence creating `v3` 
    4. trigger `b2m` to upload `v3` db to b2.
7. `fdt-templ` should have cli to connect to slected changeset db's.



### How To Use `b2m` cli in Changeset Script.

> This is proposal of `b2m` cli integration.

`b2m` cli should have 


1. `--status` flag to check status of db.
    Return `ready_to_upload`, `outdated_db` and `up_to_date`.
Multiple DBs can be checked at once.
```shell
./b2m --status 
```
This Will Check DB Version Status.
    1. `ready_to_upload` - Local DB is up to date and ready to upload to `b2`.
    2. `outdated_db` - Local DB is outdated and needs to download from `b2` and proceed with changeset and then upload to `b2`.
    3. `up_to_date` - Local DB is up to date with `b2`.

Single DB Check
```shell
./b2m --status <db_name>
```
This will be for single DB amd Result will be same.

2. `--upload` flag to upload db to b2.
    return `success` or `failed`.


```shell
./b2m --upload <db_name1> <db_name2> <db_name3>
```
This will upload selected DBs to b2.



3. `--download` flag to download db from b2.
    return `success` or `failed`.

```shell
./b2m --download <db_name1> <db_name2> <db_name3>
```
This will download selected DBs from b2.
> Note: This will override local DBs. Have a backup of local DBs before downloading. 




# 18th Feb 2026

## Goal 

Implementation of Changeset Script Where Team can use it for db version changes, Db Upload to b2 and Db Download from b2 without any data loss/Server Downtime.


## Current State

Identified 4 Scenarios where db version changes can happen. 
Many Comments on Proposal 

I have added ✅ and ❌ to the comments to indicate that the comment has been addressed or not.


1. How To execute changeset script? ✅
2. Is there any command for it? ✅
3. What is the naming convention for that script? ✅
4. How does it look like? ✅
5. Download : Isnt this destructive? Some safeguards can be put right? ❌
7. even in scenario 2,3and 4 changeset should be used to create the v2* db ❌ 
1. when git pull happens? cuz changesets *.py are commited to git right for every conflict case ❌
2. after changing versions how are you handing in code? we have paths hardcoded in code man-pages-db-v2.db ❌


## Problem

Team Coudn't Understand the Proposal especially in implementation of the changeset script.
1. No Clear Explaination of the the changeset script, How it works.
2. How ipm-db-v2.db -> ipm-db-v3.db is handled?
3. How is changescript will handle hardcoded values in `fdt-templ` server?
4. Does git pull play major role in this?

## Expectations

In this iteration on defineing changeset script and it's deps. 

1. Defining Changeset Script Template and how to create changeset script.
2. Explaination of how to execute changeset script.
3. How Change Set script handles ipm-db-v2.db -> ipm-db-v3.db?
4. Changeset script should have these main criteria.
    1. Script will be generated using `b2m` cli.
    2. File will be placed in `changeset` with structure mentioned below by `b2m`.
    3. `changeset_cron`: cron job script (ex: 6:00PM db changeset).
        `changeset`: Will be common changeset script  
        ```shell
        changeset/
        ├── changeset_scripts/
        │   ├── <nanosecond-TimeStamp>_<phrase>.py or <custom_changeset_name>.py
        │   └── ...
        │   changeset.py # common functions.
        └── README.md
        ```
    3. Script should have same template with version tag inside it. (#Template Version: v1) 
    4. All the migration (sql scripts), Data extraction (sql scripts), Data insertion (sql scripts) should be in one file.
    5. Script should be executable using `python <script_name>`
5. Final Expectation Full template to write code for changeset script.


## Solution
### 1. Changeset Script Generation

1. This will be done by `b2m` cli.
```shell
./b2m --changeset <phrase>
```
2. This will create a changeset script in `changeset` directory.
3. It will be generated based on predifned template.


### 2. Defining Changeset Script Template


Template Proposal:

Template should look like this.

1. Predifned Imports and Functions 
2. These can be done by creating custom common library where changeset script can import it.
```py
# Template Version: v1
# <script_name> : <nanosecond-TimeStamp>_<phrase>
# <phrase> is a short description of the change.

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

def upload(db_name):
    # Define <b2m> cli command to upload db to b2.
    # This will be added once <b2m> cli defined
    # Example: 
    # os.system(f"./b2m --upload {db_name}")
    pass

def download(db_name):
    # Define <b2m> cli command to download db from b2.
    # This will be added once <b2m> cli defined
    # Example: 
    # os.system(f"./b2m --download {db_name}")
    pass

def status(db_name):
    # Define <b2m> cli command to export db to json.
    # This will be added once <b2m> cli defined
    # Example: 
    # os.system(f"./b2m --status {db_name}")
    pass

def update(db_name):
    # Use migration code.
    # This consist of sql script to update db.
    # 
    pass
### There will be still more need to define those gradualy.

def main():
    # Check status of db.
    # If status is outdated_db, then download db from b2.
    # If status is ready_to_upload, then upload db to b2.
    # If status is up_to_date, then do nothing.
    pass

if __name__ == "__main__":
    main()
```


### 3. Exectuing Changeset Script

1. This will be done by `b2m` cli.
```shell
./b2m --execute <script_name>
```
2. This will execute the changeset script.
3. It will update the db and upload it to b2.


## Result

1. Defined script template, execution methods.


## Difference

1. Main comments not addressed.



# 19th Feb 2026


## Goal 2

I have added ✅ and ❌ to the comments to indicate that the comment has been addressed or not.

1. Address lot of ambiguity in the proposal.(Did 2 iteration before posting for review)✅
2. How ipm-db-v2.db -> ipm-db-v3.db is handled? (Trying to automate this also) so, not yet solved ❌
3. How changescript will handle hardcoded values in `fdt-templ` server?✅
4. Does git pull play major role in this?❌ As, of now I don't think we need push from server side.

## Expectation 
Defineing these points.
1. How to create, execute changeset script?
2. Template of changeset script.
3. Common functions used.
4. Give Example of how changeset script will be handling ipm db changeset.
5. Steps involved in changeset script. with proper description.
6. `db.toml` file will be used to define the db version.


## Proposal


In this Proposal first I will define all the structure's which include any cli and steps involved in defining changeset script.


**Structure**

This Consist of 4 main parts.
1. `changeset` directory
2. `b2m` cli
3. `db.toml` file
4. `fdt-templ` server
5. `changeset_script` template
6. `changeset.py` common function

### Create changeset script

Folder Structure:
```
changeset/
├── scripts/
│   ├── <nanosecond-TimeStamp>_<phrase>.py 
│   └── ...
├── dbs/
|   ├── <nanosecond-TimeStamp>_<phrase>/
|   |   ├── <db_name>_b2.db
|   |   ├── <db_name>_server.db     
|   |   └── ...
|   └── ...
├── logs/
|   ├── <nanosecond-TimeStamp>_<phrase>.log
|   └── ...
├── changeset.py # common functions.
└── README.md
```


1. `<nanosecond-TimeStamp>_<phrase>.py` will be generated by `b2m` cli.
```shell
./b2m --create-changeset <phrase>
```
2. Create a changeset script in `changeset/scripts` directory.
3. It consist of 2 subdirectories.
    1. `scripts`: This will contain changeset script.
    2. `dbs`: (Details Explaination Below)
        1. Temporary dbs until changeset is executed.
        2. This is for safety purpose.
        3. Any Db download, upload should be done in this file. 
3. `logs`: 
        1. This will contain logs of changeset script.
        2. This is for logging purpose.
4. `changeset.py`: Common functions used in changeset script. 
    1. Such as `b2m --upload <db_path>`, `b2m --download <db_path>`, `b2m --status <db_path>`, etc.


Reason For dbs Directory:


Goal:
1. Move new data added to ipm db in master to b2.

Understanding Situation with IPM Db:
1. B2 has new data and Master has new data.
2. To Keep Both data we need to download latest db from b2 and insert new data to b2 db.


Options to do this:

1. Use same `db/all_dbs` directory for changeset operations. (Can be done but need to be careful)
2. Use changeset directory for operation. (safe)


Option 1:

1. Export New data to prediffned json file to `db/all_dbs` directory. 
2. Download latest db from b2 to `db/all_dbs` directory. 
3. Insert new data to b2 db. 
4. Upload b2 db to b2. 

Option 2:

1. Create a copy of original ipm db to `changeset/dbs/<nanosecond-TimeStamp>_<phrase>` directory name `ipm-v3.master.db`.
2. Download latest db from b2 to `changeset/dbs/<nanosecond-TimeStamp>_<phrase>` directory name `ipm-v3.b2.db` (it can be `ipm-v4.b2.db` depends on version present in b2).
3. Insert new data from `ipm-v3.master.db` to `ipm-v3.b2.db`.
4. Upload `ipm-v3.b2.db` to b2.
5. copy `ipm-v3.b2.db` to `db/all_dbs` directory.
6. Remove `changeset/dbs/<nanosecond-TimeStamp>_<phrase>` directory if all the operations are successfully done.

I choosed option 2 to define any db changeset operations should be done in changeset directory.




### B2M CLI

1. `b2m` cli will be used to create, execute, and manage changeset script.
2. `b2m` cli will be placed in `frontend` directory.
3. `b2m` cli will be having following commands. There are 2 types of commands.
    1. User specific commands: These commands are used regurly by us. 
        1. `b2m --create-changeset <phrase>`: Create a changeset script.
            1. This will create a changeset script in `changeset/scripts` directory. (Added Detailed Description Above)
        2. `b2m --execute <script_name>`: Execute a changeset script.
            1. This will execute the changeset script. It can also be done by `python <script_name>` just adding for making it easy to execute.
    2. Db specific commands: These commands are used and predifned in `changeset.py`. (Added Detailed Descript Above)
        1. `b2m --status <db_path>`: Check status of db.
            1. This will check the status of db.
            2. It will check the status of db.
        2. `b2m --upload <db_path>`: Upload db to b2.
            1. This will upload the db to b2 form `changeset/dbs/<phrase>/<db_name>_b2.db`. (Added Detailed Description Above)
        3. `b2m --download <db_path>`: Download db from b2.
            1. This will download the db from b2 to `changeset/dbs/<phrase>/<db_name>_b2.db`. (Added Detailed Description Above)

Reasons:

1. Potentially use only 2 commands `b2m --create-changeset <phrase>` and `b2m --execute <script_name>`.
2. Other commands will defined under `changeset.py`.


### Db.toml

This is added to remove any hardcoded values in `fdt-templ` server.

```toml
[db]
ipmdb = "ipm-db-v2.db"
emojidb = "emoji-db-v2.db"
path = "/frontend/db/alldbs/"
```

This can also be defined in `fdt-dev.toml`, `fdt-prod.toml`, `fdt-staging.toml` but
for defining I have choosed `db.toml` to avoid confusion of multiple db definition.


### fdt-templ server

This is cli version integration of `fdt-templ` server.

Reason:
1. For Perform any changeset to any DB it should never be connected to any DB.
2. If Server connected to db file like `*-wal` and  `*-shm` which will cause db curruption if done any operations.
![image](https://hackmd.io/_uploads/B1QZvgUO-g.png)

3. Currently only ipm db need server -> b2 db upload which also means we can do db status, copy only for ipm db.


For this case we have 2 options:
1. Complete Server Shutdown while doing changeset.
2. Tell `./server` bin to disconnect the `ipm` db without stoping server.

`fdt-templ` cli

1. `./server --disconnect <db_name>`: This will trigger db connection close function.
2. `./server --connect <db_name>` : This will initiates db connection.


Pro: 

1. Can reduce complete downtime of server.
2. Can use in-memory cache for serving `ipm` db.
3. Can add queue for ipm installation command insertion.


Cons:
1. Takes more time to implement.
2. Other than reducing downtime there is no much benefit.

Please let me know your thoughts on this.

### Changeset Script Template

1. This Include teamplate version
2. This also include Common Functions
```py
# Template Version: v1
# <script_name> : <nanosecond-TimeStamp>_<phrase>
# <phrase> is a short description of the change.

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

## Import Common Functions
from changeset import db_status, db_download, db_upload # Still many more should be added.


def main():
    # Check status of db.
    # If status is outdated_db, then download db from b2.
    # If status is ready_to_upload, then upload db to b2.
    # If status is up_to_date, then do nothing.
    pass

if __name__ == "__main__":
    main()
```


### `changeset.py` common functions

1. Mainly all helper commands will be defined here.
2. This will reduce defining again and again.
3. It consist of `b2m` cli commands. Further I we can add more based on requirements.

```py
# Common Functions
#!/usr/bin/env python3
import subprocess

def db_status(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--status", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error checking status for {db_name}: {e}")

def db_upload(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--upload", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error uploading {db_name}: {e}")

def db_download(db_name):
    """
    Function description.
    """

    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--download", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {db_name}: {e}")


```

## Complete Steps Involved in Changeset Creation and Execution


### Requirements

This is a changeset example for Server -> B2.

There are 2 types of changeset:
1. ipm-db-v3.db -> ipm-db-v3.db (6:00 PM Backup)
2. ipm-db-v3.db -> ipm-db-v4.db (Manual Triggered On Major DB Version Bump)

#### Scenario 1: ipm-db-v3.db -> ipm-db-v3.db (6:00 PM Backup)

This will be added for cron job based script which trigger at 6:00 PM for ipm db backup.

Assume These Constraints :
1. Current ipm-db-v3.db Version States at 2PM.

| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v1      | v3              |
| server      | v1      | v3              |


This version is hash of `ipm-db-v3.db`.

> Note: Hash is generated using `b3sum` command.
> This will be created when db is downloaded from b2 -> server. Hash will be uptodate with b2 version of db.


There will be 3 states:
1. Server DB has new data and ready to upload. (NO Version Conflict)
2. Server DB has new data but Outdated and Need Proper Migration (Version Conflict)
3. DB is Up to Date (NO Version Conflict)

Case 1: Server DB has new data and ready to upload. (NO Version Conflict)
Initials State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v1      | v3              |
| server      | v2*     | v3              |

Final State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v2      | v3              |
| server      | v2      | v3              |


`*` : This is a marker to show that DB is updated by new data.

Case 2: Server DB is Outdated and Need Proper miragtion (Version Conflict)

Initial State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v2     | v3              |
| server      | v2*    | v3              |

Final State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v3     | v3              |
| server      | v3     | v3              |

Case 3: DB is Up to Date (NO Version Conflict)

Initial State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v1     | v3              |
| server      | v1     | v3              |

Final State
| DB Location | version | DB Bump Version |
| ----------- | ------- | --------------- |
| b2          | v1     | v3              |
| server      | v1     | v3              |


**At 6PM:**
Changeset script is triggered at 6pm daily.


1. Disconnect Fdt Server from IPM DB.
2. Check Status of DB using `b2m`.
    1. Case 1:`b2m` will result **Ready to upload** as both DB.
        1. Step 1: Copy DB from changeset db location to server db location.
        2. Step 2: Reconnect Fdt Server to IPM DB.
        3. Step 3: Trigger `b2m` to upload DB to b2.
        4. Step 4: Reconnect Fdt Server to IPM DB.
        5. Step 5: Verify fdt Server is connected to IPM DB.
    2. Case 2:`b2m` will result **Outdated DB** as both DB.
        1. Step 1: Download DB from b2 to changeset db location.
        2. Step 2: Copy DB from changeset db location to server db location.
        3. Step 3: Migrate New Data from Server DB to Downloaded DB.
        4. Step 4: Trigger `b2m` to upload DB to b2.
        5. Step 5: Copy DB from server db location to changeset db location.
        6. Step 6: Reconnect Fdt Server to IPM DB.
    3. Case 3:`b2m` will result **Up to date** as both DB.
        1. Step 1: Reconnect Fdt Server to IPM DB.
        2. Step 2: Exit Changeset Script.
    

Here is example of how script looks like 

```py
# Template Version: v1
# <script_name> : <nanosecond-TimeStamp>_<phrase>
# 

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

DB_NAME = "ipm-db-v5.db" ## This will be Config defined but for example I have taken this
## Import Common Functions
from changeset import db_status, db_download, db_upload # Still many more should be added.

def db_migration(db_name):
    ## Donwload b2 db to changeset db location which will be predefined.
    status = db_download(db_name)
    if status == "downloaded":
        ## Now we have the db in our changeset db location.
        ## Now we need to migrate new data from the server db to the new db.
        return True
    else:
        return False

## This will be added to common functions
def copy_db(db_name):
    try:
        subprocess.run(["cp", db_name, "changeset/dbs/"], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error copying {db_name}: {e}")
        return False

def handle_db_status(db_name):
    status = db_status(db_name)
    if status == "outdated_db":
        if copy_db(db_name):
            if db_migration(db_name):
                if db_upload(db_name):
                    copy_db(db_name)
                    print("DB Migration successful")
                else:
                    print("Error: db_upload failed")
            else:
                print("Error: db_migration failed")
        else:
            print("Error: copy_db failed")
    elif status == "ready_to_upload":
        db_upload(db_name)
    elif status == "up_to_date":
        pass
    else:
        print(f"Error: Unknown status {status}")
    

def main(db_name):
    handle_db_status(db_name)


if __name__ == "__main__":

    main(DB_NAME)
```
#### Scenario 2: ipm-db-v3.db -> ipm-db-v4.db (Manual Triggered On Major DB Version Bump)



This is I am currently thinking.

This is nothing but same as `outdated_db` case in scenario 1. But need to make this script more robust. in identifying the db version and bump version and automaticaly update the data.



## Goal

1. Writing Test Script for all the states which comes under b2m.
2. Write Clear Documentation on Explaing the Scenario and the script implementation.
3. Create a Proper Design on the b2m cli.
4. Final Implemention Logic.



## Expectation

1. Writing Final Implementation Docs.


# Implementation Of Changeset


For Example of db I will be taking `ipm-db-v1.db`, `ipm-db-v2.db` and `ipm-db-v3.db`. 

Any Update in the db should be bumped to new version as default which will be handled by `b2m` cli.

## Structure

This Consist of 4 main parts.
1. `changeset` directory
2. `b2m` cli
3. `db.toml` file
5. `changeset_script` template
6. `changeset.py` common function

###   Create changeset script

Folder Structure:
```
changeset/
├── scripts/
│   ├── <nanosecond-TimeStamp>_<phrase>.py 
│   └── ...
├── dbs/
|   ├── <nanosecond-TimeStamp>_<phrase>/
|   |   ├── <db_name>_b2.db
|   |   ├── <db_name>_server.db     
|   |   └── ...
|   └── ...
├── logs/
|   ├── <nanosecond-TimeStamp>_<phrase>.log
|   └── ...
├── changeset.py # common functions.
└── README.md
```


1. `<nanosecond-TimeStamp>_<phrase>.py` will be generated by `b2m` cli.
```shell
./b2m --create-changeset <phrase>
```
2. Create a changeset script in `changeset/scripts` directory.
3. It consist of 2 subdirectories.
    1. `scripts`: This will contain changeset script.
    2. `dbs`: (Details Explaination Below)
        1. Temporary dbs until changeset is executed.
        2. This is for safety purpose.
        3. Any Db download, upload should be done in this file. 
3. `logs`: 
        1. This will contain logs of changeset script.
        2. This is for logging purpose.
4. `changeset.py`: Common functions used in changeset script. 
    1. Such as `b2m upload <db_path>`, `b2m download <db_path>`, `b2m status <db_path>`, etc.


### B2M CLI

1. `b2m` cli will be used to create, execute, and manage changeset script.
2. `b2m` cli will be placed in `frontend` directory.
3. `b2m` cli will be having following commands. There are 2 types of commands.
    1. User specific commands: These commands are used regurly by us. 
        1. `b2m create-changeset <phrase>`: Create a changeset script.
            1. This will create a changeset script in `changeset/scripts` directory. (Added Detailed Description Above)
        2. `b2m execute-changeset <script_name>`: Execute a changeset script.
            1. This will execute the changeset script. It can also be done by `python <script_name>` just adding for making it easy to execute.
    2. Db specific commands: These commands are used and predifned in `changeset.py`. (Added Detailed Descript Above)
        1. `b2m status <db_path>`: Check status of db.
            1. This will check the status of db.
            2. It will check the status of db.
        2. `b2m upload <db_path>`: Upload db to b2.
            1. This will upload the db to b2 form `changeset/dbs/<phrase>/<db_name>_b2.db`. (Added Detailed Description Above)
        3. `b2m download <db_path>`: Download db from b2.
            1. This will download the db from b2 to `changeset/dbs/<phrase>/<db_name>_b2.db`. (Added Detailed Description Above)
        4. `b2m fetch-db-toml`: Fetch db.toml from b2.
            1. This will fetch db.toml from b2 to `db/all_dbs/db.toml`. (Added Detailed Description Above)

Reasons:

1. We will be using only 2 commands `b2m create-changeset <phrase>` and `b2m execute-changeset <script_name>`.
2. Other commands will defined under `changeset.py`.


### Db.toml

This is added to remove any hardcoded values in `fdt-templ` server.

```toml
[db]
ipmdb = "ipm-db-v2.db"
emojidb = "emoji-db-v2.db"
path = "/frontend/db/alldbs/"
```

This can also be defined in `fdt-dev.toml`, `fdt-prod.toml`, `fdt-staging.toml` but
for defining I have choosed `db.toml` to avoid confusion of multiple db definition.

There are 2 situation for db version update happen:
1. Team 
2. Server Dialy cron job (ipm db only)



Changeset script will automatically bump the db version and update in `db.toml`.
For tracking this change we have 2 options:
1. git based.
2. b2 bucket based using b2m.

I have choosed option 2.

1. git based: 
    1. This involves `git pull origin main` before checking any db status.
    2. Once updated it should be pushed to git by `git push origin main`.
    
    Pros: 
        1. Easy to track changes.
        2. It will be git native
    Cons:
        1. This will create 2 types of db versioning system. 
        2. b2m uses b2 bucket for full db versioning system. If we use git for `db.toml` it will create confusion. 
        3. If there are any conflicts in pushing to git it will be very hard to resolve.
        4. Need to implement seperate functions to handle it.
2. b2 based
    1. This uses existing b2m db versioning system.
    2. db.toml file will be present in b2 bucket.
    Pros:
        1. Adding on top of existing b2m db versioning system.
        2. Easier to integrate with b2m as b2m already managing db `metadata`,`hash` and `lock` safely.
        3. This will create seperate versioning system for dbs independent with git.
        4. Any db ops done will be done using b2 bucket as source of truth.
        5. Anyone starting server will be depending on b2m for checking db.toml fetched from b2m.
    Cons:
        1. Integrating b2m to `make start-prod` or `make run` command to identify any db changes.




### Changeset Script Template

1. This Include teamplate version
2. This also include Common Functions
```py
# Template Version: v1
# <script_name> : <nanosecond-TimeStamp>_<phrase>
# <phrase> is a short description of the change.

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

## Import Common Functions
from changeset import db_status, db_download, db_upload # Still many more should be added.


def main():
    # Check status of db.
    # If status is outdated_db, then download db from b2.
    # If status is ready_to_upload, then upload db to b2.
    # If status is up_to_date, then do nothing.
    pass

if __name__ == "__main__":
    main()
```


### `changeset.py` common functions

1. Mainly all helper commands will be defined here.
2. This will reduce defining again and again.
3. It consist of `b2m` cli commands. Further I we can add more based on requirements.

```py
# Common Functions
#!/usr/bin/env python3
import subprocess

def db_status(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--status", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error checking status for {db_name}: {e}")

def db_upload(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--upload", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error uploading {db_name}: {e}")

def db_download(db_name):
    """
    Function description.
    """

    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--download", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {db_name}: {e}")


```




## Working Flow Of Changeset Script

Assume these constraints:

On Changeset Script Trigger From (Team or Cron Job):

1. B2m status will return `ready_to_upload` or `outdated_db` or `up_to_date`.
2. This will be defined in `b2m status` command.


There will be 3 states:
1. `ready_to_upload`: `ipm-db-v1.db` has new data (NO Version Conflict)
2. `outdated_db`: `ipm-db-v1.db` has new data but Outdated and Need Proper Migration (Version Conflict)
3. `up_to_date`: `ipm-db-v1.db` is Up to Date (NO Version Conflict)

Case 1: `ready_to_upload`: `ipm-db-v1.db` has new data (NO Version Conflict)
Initials State

| DB Location | version       | New Data |
| ----------- | ------------- | -------- |
| b2          | ipm-db-v1.db  | No       |
| server      | ipm-db-v1.db  | Yes      |

There is new data in `ipm-db-v1.db` in server side, so we will bump the version `ipm-db-v1.db` to `ipm-db-v2.db` and upload it to b2.

Final State
| DB Location | version       | New Data |
| ----------- | ------------- | -------- |
| b2          | ipm-db-v2.db  | No       |
| server      | ipm-db-v2.db  | No       |


Case 2: `outdated_db`: Server DB is Outdated and Need Proper miragtion (Version Conflict)
Case 2.1: B2 has `ipm-db-v2.db` and server has `ipm-db-v1.db`. 
Initial State
| DB Location | version | New Data |
| ----------- | ------- | -------- |
| b2          | ipm-db-v2.db     | Yes      |
| server      | ipm-db-v1.db    | Yes      |

There is new data in `ipm-db-v1.db` in server side and new version `ipm-db-v2.db` in b2 side.
1. Download to `ipm-db-v2.db` to `changeset/dbs/<nanosecond-timestamp>_<phrase>/` from b2.
2. Copy `ipm-db-v1.db` to `changeset/dbs/<nanosecond-timestamp>_<phrase>/` from `db/alldb.db`.
3. DB Migration 
    1. We have Export/Select new from `ipm-db-v1.db` to `ipm-db-v2.db` in `changeset/dbs/<nanosecond-timestamp>_<phrase>/` via sql query which have be defined `<nanosecond-timestamp>_<phrase>.py`.
4. rename `ipm-db-v2.db` to `ipm-db-v3.db`.
5. Stop FDT Server with `make stop-prod`.
6. copy `ipm-db-v3.db` to `db/alldb`.
7. Update `db.toml` with `version = "v3"`.
8. Start FDT Server with `make start-prod`.
9. Upload `ipm-db-v3.db` from `changeset/dbs/<nanosecond-timestamp>_<phrase>/` to b2.
10. Once Sucessful, Remove `changeset/dbs/<nanosecond-timestamp>_<phrase>/`.(or keep it in `changeset/dbs/<nanosecond-timestamp>_<phrase>/backup/` folder for safety)

Final State
| DB Location | version | New Data |
| ----------- | ------- | -------- |
| b2          | ipm-db-v3.db     | No       |
| server      | ipm-db-v3.db    | No       |



Case 2.2: B2 has `ipm-db-v1.db` and server has `ipm-db-v1.db` but both have new data.


> Note: This case should never and will never happen. 
> I have added how to this case is handled.


We can have discord notification that this type of case has failed due to this


Case 3: DB is Up to Date (NO Version Conflict)

Initial State
| DB Location | version | New Data |
| ----------- | ------- | --------------- |
| b2          | v1     | No              |
| server      | v1     | No              |

Final State
| DB Location | version | New Data |
| ----------- | ------- | --------------- |
| b2          | v1     | No              |
| server      | v1     | No              |

