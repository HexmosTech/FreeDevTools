## b2m

There are lot of user confusions about using this script.
This include user knowing core features.

## Problem

1. Users cannot easily determine if the database is up-to-date due to confusing lock messages.
2. Redundant "DB" text in "Download DB" options.
3. Lack of upload speed/progress indication.

## Goal

I will be guiding you step by step to solve this and how to modify changes.

### Phase 1.1

1. I will be going to define how to update existing code to new logic.
2. Solving Status check issues
3. User can't able understand current status check logic.
4. It is currently checking diff and if there is diff then it is asking download.
5. Remove this logic of checking.
6. Let's have `<dbname>.metadata.json` file.

#### Metadata File content

```json
{
  "file_id": "banner-db",
  "hash": "a1b2c3d4...",
  "timestamp": 1738058400, // Unix Timestamp
  "size_bytes": 1048576,
  "uploader": "ganesh",
  "hostname": "archlinux-laptop",
  "platform": "linux",
  "tool_version": "v1.4.0",
  "upload_duration_sec": 2.5,
  "datetime": "2026-01-28 10:00:00 UTC",
  "events": [
    {
      "sequence_id": 1,
      "datetime": "2026-01-28 10:00:00 UTC",
      "timestamp": 1738057400,
      "hash": "a1b2c3d4e5...",
      "size_bytes": 1048576,
      "uploader": "ganesh",
      "hostname": "archlinux-laptop",
      "platform": "linux",
      "tool_version": "v1.4.0",
      "upload_duration_sec": 2.5
    }
  ]
}
```

#### New Status Check Logic Status Check

We store all necessary information in the **metadata file**.

1. **Calculate Local Data**

- Read Local File (Binary Mode)
- Generate BLAKE3 Hash (String)
- Get Local Modification Time (Unix Timestamp)

2. **Construct Version Filename**

- Format: `<dbname>.metadata.json`
- _Example: banner-db.metadata.json_

3. **Read Metadata File**

- Read the metadata file (JSON)
- Parse the JSON into a struct

4. **Compare Data**

- Compare the local data with the metadata file
- If the local data matches the metadata file, the database is up to date
- If the local data does not match the metadata file, the database is out of date

#### The Status Check Algorithm

**Step 1: Fetch & Parse**

1. Run `rclone lsf b2-config:hexmos/freedevtools/content/db/version/` to get the list of metadata files.
2. Run `rclone lsf b2-config:hexmos/freedevtools/content/db/lock/` to get the list of lock files.
3. Calculate the **BLAKE3 Hash** and **ModTime** of your **Local** database.

**Step 2: Comparison Conditions**
![image](https://hackmd.io/_uploads/BJQuIjP8We.png)

![image](https://hackmd.io/_uploads/SkqWSoPI-e.png)

```
Check DB Lock Status
  No DB not locked: Does Remote Hash exist?
    Yes: Is Local Hash == Remote Hash?
      Yes: Status : Upto Date
      No: Is Local Time > Remote Time?
        Yes: Status : Local Newer Ready to Upload 🔼
        No: Status :  Outdated DB Download Now 🔽 DB Overwrite Warning
    No: Status = Upload DB.
  Yes DB is Locked: Status =  Show User Uploading 🔼.....


```

#### Removal

1. Remove Current status UI and Update based on new logic.
2. Remove UI mention of Download DB's db and replace with download db.
3. Remove Lock DB and Upload option (it should be done but don't show to user) don't change any logic

#### UI

1. Upload page should have single select DB.
2. New status check feature.
3. Just show Upload , back, main menu options.

#### Hints and Tips

1. If you have any questions, please ask me.

## Phase 1.2

1. Cancel any opearations in the middle safely.
2. In Download DB's page, if user do ctr+c, it should cancel the operation safely.
3. In Status page, if user do ctr+c, it should cancel the operation safely.
4. In Upload page, if user do ctr+c, it should cancel the operation safely.
   1. That is if upload should first stop uploading and then update metadata saying upload failed in the event's and release lock.

```json
{
  "file_id": "banner-db",
  "hash": "a1b2c3d4...",
  "timestamp": 1738058400,
  "size_bytes": 1048576,
  "uploader": "ganesh",
  "hostname": "archlinux-laptop",
  "platform": "linux",
  "tool_version": "v1.4.0",
  "upload_duration_sec": 2.5,
  "datetime": "2026-01-28 10:00:00 UTC",
  "status": "success",
  "events": [
    {
      "sequence_id": 2,
      "datetime": "2026-01-29 10:00:00 UTC",
      "timestamp": 1738058400,
      "hash": "a1b2c3feqwe...",
      "size_bytes": 1048576,
      "uploader": "ganesh",
      "hostname": "archlinux-laptop",
      "platform": "linux",
      "tool_version": "v1.4.1",
      "upload_duration_sec": 2.5,
      "status": "cancelled"
    },
    {
      "sequence_id": 1,
      "datetime": "2026-01-28 10:00:00 UTC",
      "timestamp": 1738057400,
      "hash": "a1b2c3d4e5...",
      "size_bytes": 1048576,
      "uploader": "ganesh",
      "hostname": "archlinux-laptop",
      "platform": "linux",
      "tool_version": "v1.4.0",
      "upload_duration_sec": 2.5,
      "status": "success"
    }
  ]
}
```

For Success Upload

```json
{
  "file_id": "banner-db",
  "hash": "a1b2c3feqwe...",
  "timestamp": 1738058400,
  "size_bytes": 1048576,
  "uploader": "ganesh",
  "hostname": "archlinux-laptop",
  "platform": "linux",
  "tool_version": "v1.4.1",
  "upload_duration_sec": 2.5,
  "datetime": "2026-01-29 10:00:00 UTC",
  "status": "success",
  "events": [
    {
      "sequence_id": 2,
      "datetime": "2026-01-29 10:00:00 UTC",
      "timestamp": 1738058400,
      "hash": "a1b2c3feqwe...",
      "size_bytes": 1048576,
      "uploader": "ganesh",
      "hostname": "archlinux-laptop",
      "platform": "linux",
      "tool_version": "v1.4.1",
      "upload_duration_sec": 2.5,
      "status": "success"
    },
    {
      "sequence_id": 1,
      "datetime": "2026-01-28 10:00:00 UTC",
      "timestamp": 1738057400,
      "hash": "a1b2c3d4e5...",
      "size_bytes": 1048576,
      "uploader": "ganesh",
      "hostname": "archlinux-laptop",
      "platform": "linux",
      "tool_version": "v1.4.0",
      "upload_duration_sec": 2.5,
      "status": "success"
    }
  ]
}
```

### Phase 1.3

1. Explain current status check logic.

```
EXISTING DATABASES
┏━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ DB NAME              ┃ STATUS                              ┃
┣━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ banner-db.db         ┃ Unknown Status                      ┃
┃ cheatsheets-db-v4.db ┃ Unknown Status                      ┃
┃ cheatsheets-db-v3.db ┃ Unknown Status                      ┃
┃ emoji-db-v4.db       ┃ Unknown Status                      ┃
┃ emoji-db-v3.db       ┃ Unknown Status                      ┃
┃ ipm-db-v5.db         ┃ Unknown Status                      ┃
┃ ipm-db-v4.db         ┃ Unknown Status                      ┃
┃ ipm-db-v3.db         ┃ Unknown Status                      ┃
┃ man-pages-db-v4.db   ┃ Unknown Status                      ┃
┃ man-pages-db-v3.db   ┃ Unknown Status                      ┃
┃ mcp-db-v5.db         ┃ Unknown Status                      ┃
┃ mcp-db-v4.db         ┃ Remote Only (Download Available 🔽) ┃
┃ mcp-db-v3.db         ┃ Unknown Status                      ┃
┃ png-icons-db-v4.db   ┃ Unknown Status                      ┃
┃ png-icons-db-v3.db   ┃ Unknown Status                      ┃
┃ svg-icons-db-v4.db   ┃ Unknown Status                      ┃
┃ svg-icons-db-v3.db   ┃ Unknown Status                      ┃
┃ test-db.db           ┃ Unknown Status                      ┃
┃ tldr-db-v4.db        ┃ Unknown Status                      ┃
┃ tldr-db-v3.db        ┃ Unknown Status                      ┃
┗━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛


```

### Phaze 2

1. Remove all the unwanted code / not used function from this project directory
2. Remove all the parallel processing code.
3. metadata's should be downloaded to local directory and then processed.
4. reading metadata should be done in a single thread.
5. update local metadata and then upload to remote.
6. if there is no metadata, of any db then create it and upload to remote.

### Progress

![alt text](image.png)

### Issues solved

1. Code Review.
2. Cancel any opearations in the middle safely.
3. Upload Safe cancelation.
4. Download bug fix.

Here are the detailed meanings for each status message displayed in the CLI:

### Locking Logic (Highest Priority)

| Status            | Message              | Meaning                                                                                                                                                                        |
| :---------------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LockedByOther** | `%s is Uploading ⬆️` | Another user is currently uploading this DB. You cannot sync or upload until they finish.                                                                                      |
| **LockedByYou**   | `Ready to Upload ⬆️` | **Currently confusing**. Indicates YOU have an active lock on this DB (perhaps from a previous failed/incomplete upload). Should likely be changed to "Locked (Retry Upload)". |

### Existence Logic (When not locked)

| Status         | Message                     | Meaning                                                                    |
| :------------- | :-------------------------- | :------------------------------------------------------------------------- |
| **NewLocal**   | `New DB (Upload Ready ⬆️)`  | You created this DB locally, and it hasn't been uploaded to the cloud yet. |
| **RemoteOnly** | `Remote Only (Download 🔽)` | This DB exists in the cloud but not on your machine. You can download it.  |

### Metadata Logic (When both Local and Remote exist)

| Status                | Message                        | Meaning                                                                                             |
| :-------------------- | :----------------------------- | :-------------------------------------------------------------------------------------------------- |
| **NoMetadata**        | `No Meta (Upload ⬆️)`          | Both exist, but no `metadata.json` found in B2. Treat as orphan/new. Upload to fix.                 |
| **UploadCancelled**   | `❌ Upload Cancelled Retry ⬆️` | Last upload was explicitly cancelled by user. Metadata records this "cancelled" state.              |
| **RecievedStaleMeta** | `Ready to Upload ⬆️`           | Inconsistent state (metadata exists but remote file missing, or similar). Treat as ready to upload. |

### Version Comparison (Standard State)

| Status          | Message                | Meaning                                                                                         |
| :-------------- | :--------------------- | :---------------------------------------------------------------------------------------------- |
| **UpToDate**    | `Up to Date ✅`        | Local BLAKE3 matches Remote BLAKE3.                                                             |
| **LocalNewer**  | `Local Newer ⬆️`       | Hashes differ, and local modification time is **after** remote timestamp. You should upload.    |
| **RemoteNewer** | `Remote Newer 🔽`      | Hashes differ, and local modification time is **before** remote timestamp. You should download. |
| **Error**       | `Error (Read/Stat ❌)` | File permission or IO errors during check.                                                      |

## Status Definitions

| Category            | Statuses Included                                               | UI Display                                                                                                                                                       | Meaning & Action                                                                                                                                                                                                                                                                                                                                                                       |
| :------------------ | :-------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UpToDate**        | `UpToDate`                                                      | `Up to Date ✅` <br>_(Green)_                                                                                                                                    | **Meaning**: The local database and remote database are identical (hashes match).<br>**Action**: No action required. You are in UptoDate. ✅                                                                                                                                                                                                                                           |
| **Download Needed** | `RemoteOnly`<br>`RemoteNewer`                                   | `Remote Ahead (Download Now 🔽)`<br>_(Yellow)_                                                                                                                   | **RemoteOnly**: Database exists in the cloud but not on your machine.<br>**RemoteNewer**: The cloud version has a newer timestamp than your local copy.<br>**Action**: Use the **Download** feature to get the latest version.                                                                                                                                                         |
| **Upload Needed**   | `NewLocal`<br>`LocalNewer`<br>`NoMetadata`<br>`UploadCancelled` | `Local Ahead (Upload Now ⬆️)`                                                                                                                                    | **NewLocal**: You created this DB locally; it's not in the cloud yet.<br>**LocalNewer**: You modified the DB locally; it's ahead of the cloud version.<br>**NoMetadata**: Remote file exists but is missing version info (orphan).<br>**UploadCancelled**: Your last upload attempt was stopped mid-way.<br>**Action**: Select the database and **Upload** to sync your changes/fixes. |
| **Locked**          | `LockedByOther`<br>`LockedByYou` <br> `Uploading` (TODO)        | `%s is Uploading ⬆️` <br>_(Yellow)_<br>`Ready to Upload ⬆️` <br>_(Green)_ <br>`Ready to Upload ⬆️` <br>_(Green) <br>`You are Uploading ⬆️` (TODO)<br>_(Green) \_ | **LockedByOther**: Another user is currently uploading this database. A lock file prevents concurrent edits.<br>**LockedByYou**: You have an active lock (possibly from a previous incomplete upload).<br>**Uploading**: You are uploading this DB. (TODO)<br>**Action**: If locked by other, wait. If locked by you, retry upload. If You are Uploading wait.                         |
| **Errors**          | `Error`<br>`Unknown`                                            | `Error (Read ❌)` <br>_(Red)_                                                                                                                                    | **Meaning**: The tool could not read the local file or filesystem stats (permissions/IO error).<br>**Action**: Check local file permissions/path availability.                                                                                                                                                                                                                         |
|                     |                                                                 |                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                        |

## Phase 3

### Goal

The main goal of this phase is making the tool more user-friendly and stable.
This also means implementing TODOs and fixing any remaining issues.
Iterating with module implementation in mind.

Readability of the code and ease of use are key priorities.

### Phase 3.0

Implement common UI status display function based on the Status Definitions table above.

Any questions? Please ask

Make sure don't change any existing functionality.
Just Have above UI display.

### Phase 3.1

Implement TODOs Adding check for `Uploading` status display.

### Expectation

1. This should be checked while the status found the db is locked and directly saying retry.
2. Check the metadata.json file of selected db name.
3. If the metadata.json file has the status `cancel` then the db is uploading.
4. Also better to have a condition like this whenver upload is selected created lock update latest db metadata.json file status to `uploading` and start upload.
5. So, Whenever status check is done it will say you are uploading.

### Phase 3.2

Implementing single UI/UX page for all the operations.
Similar to lazygit UI/UX.

Single page no need to switch between pages.

### User Interface

Using gocui https://github.com/jroimartin/gocui which lazygit uses for ui.

Window 1
This will be having only one window.
Full screen with no renderHeader

This window will be having 3 columns.

1. DB Name
2. Status
3. Progree Bar Which already implemented just need to display inside this specific row.

### User Experience (Keyboard Shortcuts)

u - upload
p - download
c - cancel
ctr + c - exit
ctr + r - refresh status check

### Implementation Guidelines

1. Implement using gocui
2. Use the existing progress bar implementation
3. Use Above UI/UX design
4. Corrently ctl + c was implemented to stop/ cancel any operation now it should be handled with c with row specific.
5. on ctr + c it should ask prompt to confirm to exit main ui.
6. No need to change any core functionality.
7. Action u/p/c should be handled with row specific.
8. Finaly make sure to remove all unused code of previous ui (ex renderHeader, clearScreen, etc).

## Issues

1. There is no table used which was used in previous ui.
2. Keyboard should be in button of the terminal
3. Can't able to ctr + c y/n.
4. can't able to use up and down arrow keys to navigate between rows.
   4

## Phase 4

This Phase is final improvement and validation phase.

### Expectation

1. Progress should only disaplay progree bar with percentage and speed and time remaining which can be extracted from the rclone output.
2. Progreess should also include 5% Locking 5% Updating metadata.json operations and 80% rclone progress bar and final 5% Updating metadata.json and 5% Unlocking operations.
3. The above progress bar should have locking,metadata.json update , unlocking and metadata.json update operations messge in the same progree column.
4. Finaly I want table to be static with no dynamic column seperation with `|` which is casuing ui issues in table and with 3 columns DB Name, Status, Progress.
5. So, for table i recomment have 25% DB Name, 25% Status, 50% Progress.
6. Even though the table updated with status it should not cause the issues with table column misplacement.
7. Majorly on this is done we can progress with validation phase
8. There should be no changes with current functionality.

### Improvemnt

now progress bar is going out of column

do one thing inside the progress bar column have hiddle 2 columns 10% width from overlall screen should be these messges and remaing 40 % should be progress bar make it has ETA

have this
bar := progressbar.NewOptions(1000,
progressbar.OptionSetWriter(ansi.NewAnsiStdout()), //you should install "github.com/k0kubun/go-ansi"
progressbar.OptionEnableColorCodes(true),
progressbar.OptionShowBytes(true),
progressbar.OptionSetWidth(15),
progressbar.OptionSetDescription("[cyan][1/3][reset] Writing moshable file..."),
progressbar.OptionSetTheme(progressbar.Theme{
Saucer: "[green]=[reset]",
SaucerHead: "[green]>[reset]",
SaucerPadding: " ",
BarStart: "[",
BarEnd: "]",
}))
for i := 0; i < 1000; i++ {
bar.Add(1)
time.Sleep(5 \* time.Millisecond)
}

ETA should be only present when there is rclone progress bar is running.

Remaining it 5% progress it should not have ETA.
Also 5% progress should not proceed untill it is successfull completed.

### Refactoring

1. Move ui.go into ui folder.
2. Move Keybindings UI and config into ui/keybindings.go
3. Move main table to ui/table.go
4. Move keyboard operations to ui/operations.go
5. Move progress bar to ui/progress.go

So, finaly we should have 5 files in ui folder.

1. ui.go
2. keybindings.go
3. table.go
4. operations.go
5. progress.go

Make sure nothing is broken after moving

## Phase 5

Implement Edge cases

1. Force Upload DB if lock is present.
2. This should be done with pop up with yes/no confirmation.
3. This for edge case to avoid deadlock conditions.
4. Update doc/workflow/upload.md file with this implementation.

Implemeting Another Edge cases

1. whenver user tries to do ctr+c safely cancel the operation and remove all the lock files and update the metadata.json file with status `cancel` and exit.

## Final Validation

1. checking race conditions in local code.
2. there are multiple files use parallelism used.
3. So, I want find all these files and check if they are using parallelism correctly.
4. Add a doc in parallelism.md file with all the files and their parallelism implementation. under docs/concurrent/parallelism.md
5. Make sure u mention where the parallelism is used and mention it in docs breilfy.

6. If found any issues with parallelism implementation then fix it.

## Fixing UI Issues

1. Status fetch should show small
2. Adding status fetch animation in buttom whenever user presses ctr + r or there is refresh is going on.

similar lazygit

1. Configuration (The Frames)
   The actual characters used for the spinner are defined in
   pkg/config/user_config.go
   . It uses a standard set of 4 characters and runs at 50ms per frame.

go
// pkg/config/user_config.go
Spinner: SpinnerConfig{
Frames: []string{"|", "/", "-", "\\"},
Rate: 50, // 50 milliseconds per frame
}, 2. Logic (The Animation)
The logic to pick the correct frame based on the current time is in
pkg/gui/presentation/loader.go
. It uses the current Unix timestamp in milliseconds to "index" into the frames array.

go
// pkg/gui/presentation/loader.go
// Loader dumps a string to be displayed as a loader
func Loader(now time.Time, config config.SpinnerConfig) string {
milliseconds := now.UnixMilli()
// Divide time by rate to get the "frame number", then modulo by frame count
index := milliseconds / int64(config.Rate) % int64(len(config.Frames))
return config.Frames[index]
}

The Layout Logic
File:
pkg/gui/controllers/helpers/window_arrangement_helper.go

In the
GetWindowDimensions
function, the layout is defined as a tree of boxes.

Bottom Line Detection: It checks if the bottom info section should be shown. This includes the app status.
go
showInfoSection := args.UserConfig.Gui.ShowBottomLine ||
args.InSearchPrompt ||
args.IsAnyModeActive ||
args.AppStatus != ""
Vertical Stacking: It creates a root column with two children:
Top: The main content (side panels + main view). This has Weight: 1, meaning it takes up all available remaining space.
Bottom: The info section. This has Size: 1 (if shown), meaning it takes exactly 1 row at the bottom.
go
root := &boxlayout.Box{
Direction: boxlayout.ROW, // Main layout row
Children: []\*boxlayout.Box{
// ... (Top Section: Side panels + Main View)
{
Direction: boxlayout.COLUMN,
Size: infoSectionSize, // 1 if visible, 0 if hidden
Children: infoSectionChildren(args),
},
},
}
Horizontal Stacking (The Bottom Bar): deeper in
infoSectionChildren
, it decides how to arrange the items in that bottom row.
If
AppStatus
exists (e.g. "Fetching..."), it adds a box for it.
It adds spacer boxes to push content to the left or right as needed.
So, essentially, it reserves the last row of the terminal for this status bar whenever there is a status message or if "show bottom line" is enabled in settings.

3. Finaly there is a bug in showing DB status if the user updated DB it is showing db is outdated please download.
4. Even Though there is hash + date check some bug is there we need to fix it.
5. If someone is uploading to other it showing You are Uploading which is wrong.

## Phase 6: Overall Logic Changes and New Implementation

This phase introduces a "Local-Version" () tracking system. This acts as a synchronization anchor (snapshot) to distinguish between **"Local Changes"** (safe to upload) and **"Remote Changes"** (unsafe to upload without pulling).

### Phase 6.1: Updating Status Check Logic

The status check workflow is refactored to collect and compare three distinct states:

1. \*\*\*\*: Remote Metadata (The current state on the server).
2. \*\*\*\*: Local DB File (The current state of the file on disk).
3. \*\*\*\*: Local-Version Metadata (The snapshot of the file when we last synced).

#### 1. Updated Parallel Data Collection

The `FetchDBStatusData` function (in `core/status.go`) is expanded to include a **5th parallel operation**.

| Operation                 | Source        | Action                                                                              |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------- |
| **A. List Local DBs**     | `os.ReadDir`  | Scans `db/all_dbs/*.db`.                                                            |
| **B. List Remote DBs**    | `rclone lsf`  | Lists files in B2 bucket.                                                           |
| **C. Fetch Locks**        | `rclone lsf`  | Lists `locks/` directory on B2.                                                     |
| **D. Download Metadata**  | `rclone sync` | Updates `db/metadata/` from B2.                                                     |
| **E. Load Local-Version** | `os.ReadFile` | **(NEW)** Reads `db/all_dbs/.b2m/local-version/*.metadata.json` for every DB found. |

#### 2. Updated Status Calculation Logic

The `CalculateDBStatus` function is updated to use \*\*\*\* as the baseline.

**Variables:**

- \*\*\*\*: Hash from Remote Metadata.
- \*\*\*\*: Hash from `db/all_dbs/.b2m/local-version/<name>.metadata.json`.
- \*\*\*\*: Hash calculated from the current local `.db` file.

**Logic Flow (Priority Order):**

| Priority           | Condition                                | Status            | UI Display         | Color  |
| ------------------ | ---------------------------------------- | ----------------- | ------------------ | ------ |
| **1. Lock**        | Generic Lock exists                      | **LockedByOther** | `Locked by [User]` | Red    |
|                    | Lock by Self + Meta="uploading"          | **Uploading**     | `Uploading...`     | Yellow |
|                    | Lock by Self                             | **LockedByYou**   | `Locked by You`    | Yellow |
| **2. Existence**   | Remote Missing, Local Exists             | **NewLocal**      | `New (Local)`      | Green  |
|                    | Remote Exists, Local Missing             | **RemoteOnly**    | `Download Needed`  | Blue   |
| **3. History ()**  | **No file found** (First run or deleted) |                   |                    |        |
|                    | If                                       | **UpToDate**      | `Synced`           | Green  |
|                    | If                                       | **RemoteNewer**   | `Remote Newer`     | Blue   |
| **4. Consistency** | ** file exists**                         |                   |                    |        |
|                    | **Case A: Remote Changed**               |                   |                    |        |
|                    | If                                       | **Outdated**      | `Remote Newer`     | Blue   |
|                    | **Case B: Remote Unchanged**             |                   |                    |        |
|                    | If                                       | **UpToDate**      | `Synced`           | Green  |
|                    | If                                       | **LocalNewer**    | `Ready to Upload`  | Cyan   |

> **Critical Conflict Rule:** If **Case A** is true (), the user is **blocked** from uploading, even if they have local changes. They _must_ pull the latest remote changes first.

---

### Phase 6.2: Local-Version Persistence (New Implementation)

This logic ensures the anchor is updated only upon **successful** synchronization events.

**Location:** `db/all_dbs/.b2m/local-version/`
**File:** `<dbname>.metadata.json`

#### 1. Hook into "Download Workflow"

Inside `DownloadDatabase` (in `core/rclone.go`), immediately after a **successful** `rclone copy`:

1. **Retrieve**: Get the fresh metadata object that was just downloaded/synced from B2.
2. **Write**: Save this JSON object to `db/all_dbs/.b2m/local-version/<dbname>.metadata.json`.
3. **Result**: is now equal to (Remote) and (Local). Status becomes `Synced`.

#### 2. Hook into "Upload Workflow"

Inside `PerformUpload` (in `core/upload.go`), immediately after **Phase 3: Finalization** (Metadata Upload):

1. **Construct**: Use the _exact_ metadata object that was just generated and uploaded to B2 (containing the new Hash, Timestamp, and `status: success`).
2. **Write**: Overwrite `db/all_dbs/.b2m/local-version/<dbname>.metadata.json` with this object.
3. **Result**: is updated to match the new and current . Status becomes `Synced`.

#### 3. Standard JSON Structure

The content of the local-version file must strictly follow this schema:

```json
{
  "file_id": "tldr-db-v3",
  "hash": "e9b08b8989454296be811cbdbf37ef3220c89a20842849dd23bcdf13bb0faaf2",
  "timestamp": 1769187739,
  "size_bytes": 28958720,
  "uploader": "gk",
  "hostname": "jarvis",
  "platform": "linux",
  "tool_version": "v1.0",
  "upload_duration_sec": 26.36,
  "datetime": "2026-01-23 17:02:19 UTC",
  "status": "success"
}
```

### Phase 6.3: Helper Functions (Implementation Guide)

You will need a helper to manage these files.

```go
// core/helpers.go

// UpdateLocalVersion writes the metadata to db/all_dbs/.b2m/local-version/<dbname>.metadata.json
func UpdateLocalVersion(dbName string, meta model.Metadata) error {
    // 1. Define Path: db/all_dbs/.b2m/local-version/ + dbName + .metadata.json
    // 2. Marshal 'meta' struct to Indented JSON
    // 3. os.WriteFile(path, data, 0644)
    return nil
}

// GetLocalVersion reads the metadata from the local-version directory
func GetLocalVersion(dbName string) (*model.Metadata, error) {
    // 1. Read file
    // 2. Unmarshal
    // 3. Return *model.Metadata or nil if not found
    return nil
}

```

---

### Phase 6.4: Impact on "Overwrite Warning"

With this logic, the CLI can now smartly warn the user:

- **Old Logic:** "Remote exists. Overwrite?" (Vague)
- **New Logic ():**
- If `Status == LocalNewer`: **No warning needed.** (We know we started from the current remote state).
- If `Status == Outdated`: **HARD STOP / Warning.** "Remote has changed since you last downloaded. Overwriting will lose remote data. Please download first."

This is excellent progress. You have now completed the backend logic (Phase 6.1) and the persistence layer (Phase 6.2). Your system can now mathematically prove whether a database is safe to upload or if it requires a pull.

However, **logic is not enough**. You now need to enforce the rules in the UI layer. Currently, your CLI might calculate `RemoteNewer`, but if the user selects "Upload," does the code actually stop them?

Let's move to **Phase 6.5: UI Safeguards & Conflict Resolution**.

---

### Phase 6.5: Enforcing Rules in the UI

We need to modify the interaction layer to respect the new statuses we calculate.

#### Goal

1. **Block Uploads** when status is `RemoteNewer` (Outdated).
2. **Allow Uploads** when status is `LocalNewer` (Safe).
3. **Prompt for Overwrite** when status is `RemoteNewer` but the user tries to "Download" (to warn them they will lose local changes).

#### Step 1: Update `HandleAction` (CLI Interaction)

You need to modify the function where you handle the user's keypress (e.g., in `ui/list.go` or wherever your main input loop lives).

**Logic to Implement:**

- **IF** User presses `u` (Upload):
- Check Status of selected item.
- **Case `Synced**`: Print "Already up to date."
- **Case `RemoteNewer` (Outdated)**: **REJECT ACTION.**
- Show Error Message: _"Conflict: Remote database has changed. You must DOWNLOAD/PULL first."_
- _Do not allow the upload to proceed._

- **Case `LockedByOther**`: **REJECT ACTION.**
- Show Error Message: _"Locked by [User]. Cannot upload."_

- **Case `LocalNewer**`: **ALLOW.** Proceed to `PerformUpload`.

- **IF** User presses `d` (Download):
- Check Status of selected item.
- **Case `LocalNewer**`: **WARNING REQUIRED.**
- The user has local changes that they haven't uploaded. If they download now, they destroy their work.
- Prompt: _"Warning: You have unsaved local changes. Overwrite with remote version? (y/n)"_

- **Case `RemoteNewer**`: **ALLOW.** Proceed to `DownloadDatabase`.

#### Step 2: Refactor `main.go` / Action Handler

I recommend creating a `ValidateAction(db model.DBInfo, action string) error` function to keep your UI code clean.

**Proposed Helper Function:**

```go
// core/validation.go

func ValidateAction(db model.DBInfo, action string) error {
    switch action {
    case "upload":
        if db.Status == model.StatusRemoteNewer {
            return fmt.Errorf("CONFLICT: Remote is newer. Please download first.")
        }
        if db.Status == model.StatusLockedByOther {
            return fmt.Errorf("LOCKED: Database is locked by %s.", db.LockOwner)
        }
        // Add other blocking conditions...

    case "download":
        if db.Status == model.StatusLocalNewer {
             // This isn't a hard error, but a signal that the UI needs to ask for confirmation
             return fmt.Errorf("WARNING_LOCAL_CHANGES")
        }
    }
    return nil
}


## Phase 7: New Feature

Situation :
1. If user has 2 hours update he can just lock by using `l` key
2. This should show a message
2. This will crete lock file and update metadata with `status: "updating"`
3.
```

## TODO

1. Custom Lock and unlock
2. new version of db will not have any previous data check.

## Phase 8:

This phase is for other to test the system

in this directory the scipt is b2-manager/testing/test.sh

but actual project are manily localted frontend

so create make command to update db which is located in frontend

```bash
make b2m-test
```

curerrntly db location is this frontend/db/all_dbs/test-db.db
in this db add
SELECT c.\* FROM category AS c

Update this table with random words each time and append to next table make sure u only do this for this db frontend/db/all_dbs/test-db.db

also make sure use sqlite cli to do this opration

{
"SELECT c.\* FROM category AS c where c.slug = \"aggregators\"": [
{
"slug" : "aggregators",
"name" : "asdfasd",
"description" : "Servers for accessing many apps and tools through a single MCP server.",
"count" : 19,
"updated_at" : "2025-11-26T16:31:40.312Z"
}
]}

## Testing Phase

1. If user has old db it should show Download DB now.
2. If user has updated an outdated db it should show Download DB now. with Warning of potential data loss
3. if other is user uploading it should user is uploading.
4. if user only uploading it should show you are uploading.
5. if user is updating db and he locked so other don't upload it should show user is updating.

# **Testing Procedure: `b2m` Database Synchronization & Concurrency**

**Date:** February 8, 2026
**Testers:** @athreya7023, @lince_m
**Location:** `frontend` directory

### **1. Prerequisites & Setup**

Before beginning the test, ensure you are in the `frontend` directory and have disconnected from all active database connections.

- **Build the executable:**

```bash
make build-b2m

```

### **2. Initialization & Status Verification**

1. **Launch the tool:**

```bash
./b2m

```

2. **Verify DB Status:**

- Allow the tool time to load the database list.
- **Success Criteria:** The status for `test-db.db` must display as **"Outdated DB"**.

### **3. Local Update Simulation**

While the first terminal is running, open a **second terminal** in the `frontend` directory to simulate a local change.

1. **Run the test update command:**

```bash
make b2m-test

```

- _Note: This will update one row in `test-db.db`._

2. **Refresh the view:**

- Return to the first terminal and press `Ctrl + R`.
- **Success Criteria:** The status should reflect the updated state.

### **4. Concurrency & Locking Test (Collaborative)**

**Scenario:** Two users attempting to upload changes simultaneously to test locking mechanisms.

#### **Step A: Conflict Warning Check**

1. **Both testers (@athreya7023 & @lince_m):** Attempt to upload by pressing `u`.
2. **Expected Result:** Both users should see a **warning prompt**.
3. **Action:** Press `n` (No) to cancel the upload.

#### **Step B: Remote Download Check**

1. **Action:** Press `p` to pull/download the remote database.
2. **Success Criteria:** The local database syncs successfully with the remote version.

#### **Step C: Sequential Lock Verification**

1. **Tester 1 (@lince_m):** Initiate an upload (`u`) and confirm.
2. **Tester 2 (@athreya7023):** Attempt to upload (`u`) _while_ Tester 1 is uploading.
3. **Success Criteria:**

- **Tester 1:** Upload proceeds.
- **Tester 2:** Receives a warning stating that **Lince is currently uploading**.

4. **Final Verification:** Once Tester 1 finishes, Tester 2 tries to upload again.

- **Expected Result:** Tester 2 **cannot** upload (due to version mismatch/outdated DB requiring a pull first).

## TODO

1. Custom Lock and unlock
2. new version of db will not have any previous data check.

### Problem

For more than 2 hour update of db there is no status or notification to other user.

> say i'm running a script for 2 hours which is also doing a db insertion or updation.
> According to this logic, if someone in between updated the db and pushed it, after pulling the latest db, i have to run the script again right?

This issue can be solved by adding a new feature of custom lock.

1. User can lock the db for update by pressing `l` key.
2. This should show {user} is updating {db_name}.
3. This `l` commad should only create lock and update metadata with `status: "updating"`
4. For other with current implementation it will show {user} is updating {db_name} and will not allow to upload.
5. Also should show small warning notification suggesting to downloader that db is updating
6. This keybinding should be added to keybinding list which is impelementated `ui/keybindings.go`.

## Problem 2

1. If user trying to upload new version he should only update when there is no

## Design and Structure

1. @core/rclone.go have only command rclone function only.



# Migration Integration
## Phase 1


## Cases



| Case No | Local | Remote | Action              |
| ------- | ----- | ------ | ------------------- |
| 1       | New   | Old    | Upload              |
| 2       | Old   | New    | Download            |
| 3       | New   | New    | Download and Upload |


Case 3

Local New and Remote New
Assume New DB.

1. Data Modification
2. Data insertion
3. Data Deletion


It sounds like you have built a clever workaround for sharing an SQLite database using B2, but you have hit the classic wall of **distributed database concurrency**.

To be completely candid: sharing a single raw `.sqlite` file over cloud storage for multiple developers to actively write to is a known anti-pattern. Because SQLite is a local file, when Dev A and Dev B both make local changes and try to sync, you get a "split-brain" scenario.

"Normal engineers" solve this by separating **Schema Migrations** (changes to tables/structure) from **Data Synchronization** (day-to-day row updates).

Here are the most efficient, low-effort options to solve your problem, ranging from adapting your current B2 setup to adopting industry-standard practices.

### Option 2: The `sqldiff` Auto-Merge Approach (Best for your current B2 setup)

If you don't want developers to manually write `.sql` files for every data entry, you can automate the extraction of their local changes using SQLite's built-in `sqldiff` utility.

`sqldiff` compares two SQLite databases and generates the exact `INSERT`, `UPDATE`, and `DELETE` statements needed to make the first database match the second.

**The Workflow Script:**

1. **Download:** The script downloads the latest `remote.db` from B2.
    
2. **Diff:** The script runs `sqldiff remote.db local.db > my_changes.sql`. This captures _only_ the new work the developer did locally.
    
3. **Merge:** The script applies `my_changes.sql` to the newly downloaded `remote.db`.
    
4. **Upload:** The script uploads the newly merged `remote.db` back to B2 and replaces the developer's `local.db` with it.
    

**Why this fits your needs:**

- **No Lost Updates:** Even if a developer has to download a new DB, their local updates are saved into a `.sql` file first and re-applied automatically.
    
- **Small Work:** You just need to download the `sqldiff` binary (provided officially by SQLite) and wrap it in a 10-line bash or python script.
    
- **Warning:** You will face **Primary Key collisions**. If Dev A inserts a row with `ID=10` and Dev B inserts a row with `ID=10`, `sqldiff` will conflict. _Fix this by using UUIDs for your primary keys instead of auto-incrementing integers._
    
I already have Lock  + Safe Upload Workflow with hash check and other things 

Since you already enforce download-before-upload, extend it:

## Safe workflow

```
1. Acquire lock
2. Download latest DB
3. Run migrations automatically
4. Apply local changes
5. Generate migration file
6. Commit migration
7. Upload DB
8. Release lock
```

Migration generation can be partially automated via scripts.

---

# Recommended Setup for Your Team (Best Fit)

For 5 engineers + SQLite + B2:

## Use this:

**Migration files + migration runner script**

Minimal stack:

```
/db
  migrations/
  migrate.py
  schema.sql
```

Runner script:

- checks migration table
    
- runs missing files
    
- records them
    
- runs automatically before upload
    

---

## Dev workflow

```
git pull
python migrate.py
work
create new migration file
git commit
push
```

---

## Rebuild DB anytime

```
delete db.sqlite
python migrate.py
```

Fully reproducible.

---

# What Engineers Normally Avoid

Do NOT rely on:

- manual DB edits
    
- uploading full DB as truth
    
- editing rows directly without migration logs
    
- schema changes without versioning
    

Those always break collaboration.
