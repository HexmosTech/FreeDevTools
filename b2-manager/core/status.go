package core

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"b2m/config"
	"b2m/model"

	"github.com/jedib0t/go-pretty/v6/text"
)

// CalculateDBStatus determines the user-facing status of a database by evaluating state in this specific order:
//
// 1. Lock Status (Highest Priority):
//   - Checks if the database is currently locked in the lock map.
//   - If Locked by Other: Returns "LockedByOther" (Yellow/Red), potentially showing "Uploading" if active.
//   - If Locked by You (Local): Returns "Ready to Upload" or "Uploading/Updating" based on remote metadata.
//
// 2. Existence Check (If Unlocked):
//   - Checks physical presence of files locally and remotely.
//   - New Local File -> "Ready To Upload".
//   - Remote Only -> "Download DB ⬇️".
//
// 3. History (Anchor) Check:
//   - Compares the 'LocalVersion' (anchor) hash against the Remote Metadata hash.
//   - If they differ, the Remote has been updated since we last synced -> "DB Outdated".
//
// 4. Consistency Check:
//   - Calculates the actual SHA256 hash of the local file.
//   - Matches Remote Hash -> "Up to Date".
//   - Mismatch + Anchor Matches -> "Ready To Upload" (Local changes).
//   - Mismatch + No Anchor -> "DB Outdated" (Safety fallback).
func CalculateDBStatus(db model.DBInfo, locks map[string]model.LockEntry, remoteMetas map[string]*model.Metadata, localVersions map[string]*model.Metadata) (string, string, text.Colors) {
	// -------------------------------------------------------------------------
	// PHASE 1: LOCK STATUS CHECK
	// Priority 1: If a database is locked, the lock state overrides everything.
	// -------------------------------------------------------------------------
	if l, ok := locks[db.Name]; ok {
		if l.Type == "lock" {
			if l.Owner != config.AppConfig.CurrentUser {
				// CASE 1.1: Locked by Other User
				// We check the remote metadata to see if they are actively uploading or updating.
				remoteMeta, hasMeta := remoteMetas[db.Name]
				if hasMeta {
					if remoteMeta.Status == "uploading" {
						return model.StatusCodeLockedByOther, fmt.Sprintf("%s is Uploading ⬆️", l.Hostname), text.Colors{model.DBStatuses.LockedByOther.Color}
					}
					if remoteMeta.Status == "updating" {
						return model.StatusCodeLockedByOther, fmt.Sprintf("%s is Updating 🔄", l.Hostname), text.Colors{model.DBStatuses.LockedByOther.Color}
					}
				}

				// Fallback: Default dynamic message showing Owner and Hostname
				who := fmt.Sprintf("%s@%s", l.Owner, l.Hostname)
				return model.StatusCodeLockedByOther, fmt.Sprintf(model.DBStatuses.LockedByOther.Text, who), text.Colors{model.DBStatuses.LockedByOther.Color}
			}

			// CASE 1.2: Locked by Current User
			if l.Hostname == config.AppConfig.Hostname {
				// We hold the lock on THIS machine.
				// Check metadata status to see if we are in the middle of an operation.
				remoteMeta, hasRemoteMeta := remoteMetas[db.Name]
				if hasRemoteMeta {
					if remoteMeta.Status == "uploading" {
						return model.StatusCodeUploading, model.DBStatuses.Uploading.Text, text.Colors{model.DBStatuses.Uploading.Color}
					}
					if remoteMeta.Status == "updating" {
						return model.StatusCodeUploading, "You are Updating 🔄", text.Colors{model.DBStatuses.Uploading.Color}
					}
				}
				// Default status when locked by us but idle: "Ready to Upload"
				return model.StatusCodeLockedByYou, model.DBStatuses.LockedByYou.Text, text.Colors{model.DBStatuses.LockedByYou.Color}
			} else {
				// Locked by YOU but on a DIFFERENT machine. Treated as "Other".
				who := fmt.Sprintf("%s@%s)", l.Owner, l.Hostname)
				return model.StatusCodeLockedByOther, fmt.Sprintf(model.DBStatuses.LockedByOther.Text, who), text.Colors{model.DBStatuses.LockedByOther.Color}
			}
		}
	}

	// -------------------------------------------------------------------------
	// PHASE 2: EXISTENCE CHECK (UNLOCKED)
	// If unlocked, we check if the file is new or missing.
	// -------------------------------------------------------------------------
	remoteMeta, hasRemoteMeta := remoteMetas[db.Name]
	localVersion, hasLocalVersion := localVersions[db.Name]

	// CASE 2.1: New Local File (Exists Local, Not Remote) -> "Ready To Upload"
	if !db.ExistsRemote && db.ExistsLocal {
		return model.StatusCodeNewLocal, model.DBStatuses.NewLocal.Text, text.Colors{model.DBStatuses.NewLocal.Color}
	}
	// CASE 2.2: Remote Only (Exists Remote, Not Local) -> "DB Outdated"
	if db.ExistsRemote && !db.ExistsLocal {
		return model.StatusCodeRemoteOnly, model.DBStatuses.RemoteOnly.Text, text.Colors{model.DBStatuses.RemoteOnly.Color}
	}

	// -------------------------------------------------------------------------
	// PHASE 3: HISTORY (ANCHOR) CHECK
	// We check our last known sync point (LocalVersion) against the current Remote.
	// -------------------------------------------------------------------------
	if hasLocalVersion && hasRemoteMeta {
		if localVersion.Hash == remoteMeta.Hash {
			// Local-Version matches Remote.
			// This means we started from the current remote state.
			// Proceed to consistency check (Phase 4).
		} else {
			// CASE 3.1: Remote Changed
			// Our anchor does NOT match Remote. Remote has been updated since we last synced.
			LogInfo("Status Check: %s -> Remote Newer (LocalVersion Hash %s != Remote Hash %s)", db.Name, localVersion.Hash[:8], remoteMeta.Hash[:8])
			return model.StatusCodeRemoteNewer, model.DBStatuses.RemoteNewer.Text, text.Colors{model.DBStatuses.RemoteNewer.Color}
		}
	} else if !hasLocalVersion && hasRemoteMeta {
		// No local version but remote exists.
		// "No local-version file found" -> Proceed to Consistency (Phase 4).
	}

	// -------------------------------------------------------------------------
	// PHASE 4: CONSISTENCY CHECK (CONTENT)
	// We compare the actual Local File Hash vs Remote Metadata Hash.
	// -------------------------------------------------------------------------
	if db.ExistsLocal && hasRemoteMeta {
		localPath := filepath.Join(config.AppConfig.LocalDBDir, db.Name)
		localHash, err := CalculateSHA256(localPath)
		if err != nil {
			LogError("Status Check: Failed to verify %s: %v", db.Name, err)
			return model.StatusCodeErrorReadLocal, model.DBStatuses.ErrorReadLocal.Text, text.Colors{model.DBStatuses.ErrorReadLocal.Color}
		}

		// At this point, if LocalVersion Existed, we know it matched Remote (Phase 3 passed).
		// So any mismatch here implies LOCAL changes.

		if localHash == remoteMeta.Hash {
			// CASE 4.1: Up To Date (Local Hash == Remote Hash)

			// Auto-Heal: If we have no local version anchor but hashes match,
			// it means we are in sync but missing the tracking file. Create it.
			if !hasLocalVersion {
				LogInfo("CalculateDBStatus: Auto-healing missing anchor for %s", db.Name)
				if err := UpdateLocalVersion(db.Name, *remoteMeta); err != nil {
					LogError("CalculateDBStatus: Failed to auto-heal anchor for %s: %v", db.Name, err)
				}
			}

			return model.StatusCodeUpToDate, model.DBStatuses.UpToDate.Text, text.Colors{model.DBStatuses.UpToDate.Color}
		} else {
			// Local Hash != Remote Hash.

			if !hasLocalVersion {
				// CASE 4.2: Conflict/Unknown (No Anchor + Mismatch)
				// If we have no local history/anchor, and the file differs from remote,
				// we flag it as "Remote Ahead" to avoid accidental overwrite.
				LogInfo("Status Check: %s -> Remote Newer (No Anchor + Mismatch Local %s != Remote %s)", db.Name, localHash[:8], remoteMeta.Hash[:8])
				return model.StatusCodeRemoteNewer, model.DBStatuses.RemoteNewer.Text, text.Colors{model.DBStatuses.RemoteNewer.Color}
			}

			// CASE 4.3: Local Changes
			// Anchor matched Remote, but File differs. Therefore, User changed the file.
			LogInfo("Status Check: %s -> Local Newer (Local File Hash %s != Remote Hash %s)", db.Name, localHash[:8], remoteMeta.Hash[:8])
			return model.StatusCodeLocalNewer, model.DBStatuses.LocalNewer.Text, text.Colors{model.DBStatuses.LocalNewer.Color}
		}
	}

	return model.StatusCodeUnknown, model.DBStatuses.Unknown.Text, text.Colors{model.DBStatuses.Unknown.Color}
}

// FetchDBStatusData fetches all databases, locks, and metadata in parallel, then calculates status for each
func FetchDBStatusData(ctx context.Context) ([]model.DBStatusInfo, error) {
	// Check for cancellation
	select {
	case <-ctx.Done():
		return nil, fmt.Errorf("cancelled")
	default:
	}

	var (
		wg          sync.WaitGroup
		localDBs    []string
		remoteDBs   []string
		locks       map[string]model.LockEntry
		remoteMetas map[string]*model.Metadata
		errLocal    error
		errRemote   error
		errLocks    error
		errMetas    error
	)

	wg.Add(4)

	// 1. Get Local DBs (Fast)
	go func() {
		defer wg.Done()
		localDBs, errLocal = getLocalDBs()
	}()

	// 2. Get Remote DBs (Network)
	go func() {
		defer wg.Done()
		remoteDBs, errRemote = getRemoteDBs()
	}()

	// 3. Fetch Locks (Network)
	go func() {
		defer wg.Done()
		locks, errLocks = FetchLocks(ctx)
	}()

	// 4. Download Metadata (Network)
	go func() {
		defer wg.Done()
		remoteMetas, errMetas = DownloadAndLoadMetadata()
	}()

	// 5. Load Local-Version Metadata (Local IO)
	var localVersions map[string]*model.Metadata
	var errLocalVersions error
	wg.Add(1)
	go func() {
		defer wg.Done()
		localVersions = make(map[string]*model.Metadata)
		// Iterate over local DBs list (wait, we don't have it here yet, it runs in parallel)
		// We can scan the local-version directory directly.
		entries, err := os.ReadDir(config.AppConfig.LocalAnchorDir)
		if err != nil {
			if !os.IsNotExist(err) {
				errLocalVersions = err
			}
			return
		}
		for _, entry := range entries {
			if !entry.IsDir() && filepath.Ext(entry.Name()) == ".json" {
				// Construct DB name from metadata filename (helper does logic, but we need dbname for map key)
				name := entry.Name()
				if strings.HasSuffix(name, ".metadata.json") {
					base := strings.TrimSuffix(name, ".metadata.json")
					dbName := base + ".db"

					// Load it
					// We can use GetLocalVersion, but it reads file again. It's fine.
					meta, err := GetLocalVersion(dbName)
					if err == nil && meta != nil {
						localVersions[dbName] = meta
					}
				}
			}
		}
	}()

	// Wait for all
	doneCh := make(chan struct{})
	go func() {
		wg.Wait()
		close(doneCh)
	}()

	select {
	case <-ctx.Done():
		return nil, fmt.Errorf("cancelled")
	case <-doneCh:
		// Completed
	}

	// Check errors
	if errLocal != nil {
		LogError("Failed to get local DBs: %v", errLocal)
		return nil, errLocal
	}
	LogInfo("FetchDBStatusData: Found %d local DBs", len(localDBs))

	if errRemote != nil {
		LogError("Failed to get remote DBs: %v", errRemote)
		// Critical failure: Without remote list, we cannot determine sync status accurately.
		return nil, fmt.Errorf("failed to list remote databases: %w", errRemote)
	}
	LogInfo("FetchDBStatusData: Found %d remote DBs", len(remoteDBs))

	if errLocks != nil {
		LogError("Failed to fetch locks: %v", errLocks)
		return nil, fmt.Errorf("failed to fetch locks: %w", errLocks)
	}
	LogInfo("FetchDBStatusData: Found %d active locks", len(locks))

	if errMetas != nil {
		LogError("Failed to sync/load metadata: %v", errMetas)
		return nil, fmt.Errorf("failed to download metadata: %w", errMetas)
	}
	LogInfo("FetchDBStatusData: Loaded metadata for %d databases", len(remoteMetas))

	// Aggregate
	allDBs, err := AggregateDBs(localDBs, remoteDBs)
	if err != nil {
		LogError("Aggregation failed: %v", err)
		return nil, fmt.Errorf("aggregation failed: %w", err)
	}
	LogInfo("FetchDBStatusData: Aggregated total %d databases", len(allDBs))

	if errLocalVersions != nil {
		LogInfo("FetchDBStatusData: Failed to read local versions: %v", errLocalVersions)
		// Non-critical, just means we can't do smart status
	}

	// Calculate status for each database
	var statusData []model.DBStatusInfo
	for _, db := range allDBs {
		statusCode, statusText, statusColor := CalculateDBStatus(db, locks, remoteMetas, localVersions)

		colorVal := text.FgWhite
		if len(statusColor) > 0 {
			colorVal = statusColor[0]
		}

		statusData = append(statusData, model.DBStatusInfo{
			DB:         db,
			Status:     statusText,
			StatusCode: statusCode,
			Color:      colorVal,
		})
	}

	return statusData, nil
}
