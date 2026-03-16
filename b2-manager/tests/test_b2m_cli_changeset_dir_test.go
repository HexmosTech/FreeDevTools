package tests

import (
	"b2m/config"
	"b2m/model"
	"bytes"
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
	"time"
)

// TestChangesetDirB2MCLI verifies the database management lifecycle using the b2m CLI
// when a specific changeset directory is provided via the 'changeset_dir=' parameter.
// It performs the following sequence of checks:
//  1. Builds the b2m binary.
//  2. Uploads a local database from a specific changeset directory and verifies status as 'up_to_date'.
//  3. Modifies the local database and verifies the status changes to 'bump_and_upload'.
//  4. Uploads a newer version of the database (v2) and verifies that the older version (v1)
//     now reports an 'outdated_version' status.
//  5. Cleans up test artifacts from the B2 bucket.
func TestChangesetDirB2MCLI(t *testing.T) {
	// --- TEST CONFIGURATION ---
	// Toggle these boolean values to enable/disable specific test steps or cleanup operations.
	testConfig := struct {
		CleanupB2AtStart    bool
		CleanupB2AtEnd      bool
		BumpAndUploadCase   bool
		OutdatedVersionCase bool
	}{
		CleanupB2AtStart:    true,
		CleanupB2AtEnd:      true,
		BumpAndUploadCase:   true,
		OutdatedVersionCase: true,
	}
	// ---------------------------

	os.Setenv("SKIP_B2M_GIT", "true")

	// Find the frontend directory
	workDir, _ := os.Getwd()
	projectRoot := filepath.Dir(filepath.Dir(workDir))
	frontendDir := filepath.Join(projectRoot, "frontend")
	if !filepath.IsAbs(frontendDir) {
		frontendDir, _ = filepath.Abs(frontendDir)
	}

	specificChangesetDir := "1772031633645610550_sample-phrase"
	changesetParam := "changeset_dir=" + specificChangesetDir
	dbDir := filepath.Join(frontendDir, "changeset", "dbs", specificChangesetDir)
	b2mBin := filepath.Join(frontendDir, "b2m")

	var out []byte
	var err error

	// Helper to run command with timeout
	runCmd := func(dir string, name string, args ...string) ([]byte, error) {
		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
		defer cancel()
		c := exec.CommandContext(ctx, name, args...)
		c.Dir = dir
		t.Logf("Executing: %s (in %s)", strings.Join(c.Args, " "), dir)
		out, err := c.CombinedOutput()
		if ctx.Err() == context.DeadlineExceeded {
			return nil, fmt.Errorf("command timed out: %s %v", name, args)
		}
		return out, err
	}

	// Helper to cleanup B2
	cleanupB2 := func() {
		t.Log("Cleaning up B2 artifacts...")
		bucketName := "Amazing-Stardom:db"
		for _, ver := range []string{"v1", "v2", "v3"} {
			dbFileName := "test-db-" + ver + ".db"
			remoteDB := bucketName + "/" + dbFileName
			remoteMeta := bucketName + "/version/" + dbFileName + ".metadata.json"

			_, _ = runCmd("", "rclone", "deletefile", remoteDB)
			_, _ = runCmd("", "rclone", "deletefile", remoteMeta)
		}
	}

	// Ensure dbDir exists
	if err := os.MkdirAll(dbDir, 0755); err != nil {
		t.Fatalf("Failed to create dbDir: %v", err)
	}

	baseDBDir := filepath.Join(frontendDir, "db", "all_dbs")
	srcDB := filepath.Join(baseDBDir, "test-db-back.db")
	localV1 := filepath.Join(dbDir, "test-db-v1.db")

	// Pre-cleanup if configured
	if testConfig.CleanupB2AtStart {
		cleanupB2()
	}

	// Step 1: Build the b2m binary (Mandatory)
	t.Log("Step 1: Building b2m")
	out, err = runCmd(frontendDir, "make", "build-b2m")
	if err != nil {
		t.Fatalf("Failed to build b2m: %v\nOutput: %s", err, string(out))
	}

	// Step 2: Copy test-db-back.db to test-db-v1.db locally (Mandatory)
	t.Log("Step 2: Copying test-db-back.db to test-db-v1.db")
	_, err = runCmd("", "cp", srcDB, localV1)
	if err != nil {
		t.Fatalf("Failed to copy v1: %v", err)
	}

	// Step 3: Initial b2m upload (Mandatory)
	t.Log("Step 3: Initial b2m upload")
	out, err = runCmd(frontendDir, b2mBin, "upload", "test-db-v1.db", changesetParam)
	if err != nil {
		t.Fatalf("Step 3 upload failed: %v\nOutput: %s", err, string(out))
	}

	// Step 4: Verify status up_to_date (Mandatory)
	out, err = runCmd(frontendDir, b2mBin, "status", "test-db-v1.db", changesetParam)
	if !strings.Contains(string(out), "up_to_date") {
		t.Fatalf("Expected up_to_date but got: %s", string(out))
	}

	// SQL for updates
	sqlFile := filepath.Join(baseDBDir, "test-db.sql")
	sqlData, _ := os.ReadFile(sqlFile)

	// --- EDGE CASE 1: bump_and_upload ---
	if testConfig.BumpAndUploadCase {
		t.Log("Edge Case 1: bump_and_upload verification")

		// 1. Modify local DB
		sqliteCtx, sqliteCancel := context.WithTimeout(context.Background(), 1*time.Minute)
		defer sqliteCancel()
		sqliteCmd := exec.CommandContext(sqliteCtx, "sqlite3", localV1)
		t.Logf("Executing: %s < %s", strings.Join(sqliteCmd.Args, " "), sqlFile)
		sqliteCmd.Stdin = bytes.NewReader(sqlData)
		if err := sqliteCmd.Run(); err != nil {
			t.Fatalf("sqlite3 failed: %v", err)
		}

		// 2. Verify status is bump_and_upload
		out, err = runCmd(frontendDir, b2mBin, "status", "test-db-v1.db", changesetParam)
		if !strings.Contains(string(out), "bump_and_upload") {
			t.Fatalf("Expected bump_and_upload but got: %s", string(out))
		}

		// 3. REQUIREMENT: Verify upload is blocked
		out, err = runCmd(frontendDir, b2mBin, "upload", "test-db-v1.db", changesetParam)
		if err == nil {
			t.Fatal("Expected upload to be blocked in bump_and_upload state")
		}

		// 4. Run bump-and-upload
		// We need to set FrontendTomlPath for GetDBNameFromToml
		model.AppConfig.FrontendTomlPath = filepath.Join(frontendDir, "db.toml")

		out, err = runCmd(frontendDir, b2mBin, "bump-and-upload", "test-db-v1.db", changesetParam)
		if err != nil {
			t.Fatalf("bump-and-upload failed: %v\nOutput: %s", err, string(out))
		}

		// 5. Verify v1 bump to v2 in toml
		dbFromToml, _ := config.GetDBNameFromToml("test")
		if !strings.Contains(dbFromToml, "v2") {
			t.Fatalf("Expected v2 in toml but got: %s", dbFromToml)
		}

		// 6. Copy to all_dbs and verify up_to_date
		localV2 := filepath.Join(dbDir, "test-db-v2.db")
		serverV2 := filepath.Join(baseDBDir, "test-db-v2.db")
		data, _ := os.ReadFile(localV2)
		os.WriteFile(serverV2, data, 0644)

		out, err = runCmd(frontendDir, b2mBin, "status", "test-db-v2.db")
		if !strings.Contains(string(out), "up_to_date") {
			t.Fatalf("Expected up_to_date for v2 but got: %s", string(out))
		}
	}

	// --- EDGE CASE 2: outdated_version ---
	if testConfig.OutdatedVersionCase {
		// Cleanup before next edge case if we want a fresh start
		// (We can use a separate internal cleanup if needed, but for now we follow general cleanup logic)
		cleanupB2()

		t.Log("Edge Case 2: outdated_version verification")

		localV2 := filepath.Join(dbDir, "test-db-v2.db")

		// 1. Setup: Upload v2 to remote, keep v1 locally
		t.Log("Step 2.1: Uploading v2 to remote")
		_, err = runCmd("", "cp", srcDB, localV2)
		if err != nil {
			t.Fatalf("Failed to copy v2: %v", err)
		}

		_, err = runCmd(frontendDir, b2mBin, "upload", "test-db-v2.db", changesetParam)
		if err != nil {
			t.Fatalf("Failed to setup remote v2: %v", err)
		}

		// 2. Check v1 status (should be outdated_version)
		out, err = runCmd(frontendDir, b2mBin, "status", "test-db-v1.db", changesetParam)
		if !strings.Contains(string(out), "outdated_version") {
			t.Fatalf("Expected outdated_version for v1 but got: %s", string(out))
		}

		// 3. REQUIREMENT: Verify upload is blocked
		out, err = runCmd(frontendDir, b2mBin, "upload", "test-db-v1.db", changesetParam)
		if err == nil {
			t.Fatal("Expected upload to be blocked in outdated_version state")
		}

		// 4. Download latest db (v2)
		_, err = runCmd(frontendDir, b2mBin, "download-latest-db", "test", changesetParam)
		if err != nil {
			t.Fatalf("download-latest-db failed: %v", err)
		}

		// 5. Execute query on latest db (v2)
		sqliteCtx2, sqliteCancel2 := context.WithTimeout(context.Background(), 1*time.Minute)
		defer sqliteCancel2()
		sqliteCmdV2 := exec.CommandContext(sqliteCtx2, "sqlite3", localV2)
		t.Logf("Executing: %s < %s", strings.Join(sqliteCmdV2.Args, " "), sqlFile)
		sqliteCmdV2.Stdin = bytes.NewReader(sqlData)
		if err := sqliteCmdV2.Run(); err != nil {
			t.Fatalf("sqlite3 v2 failed: %v", err)
		}

		// 6. perform bump-and-upload on v2 (resulting in v3)
		out, err = runCmd(frontendDir, b2mBin, "bump-and-upload", "test-db-v2.db", changesetParam)
		if err != nil {
			t.Fatalf("bump-and-upload on v2 failed: %v\nOutput: %s", err, string(out))
		}

		// 7. Verify v3 in toml
		dbFromToml, err := config.GetDBNameFromToml("test")
		if err != nil {
			t.Fatalf("Failed to get DB from toml: %v", err)
		}
		if !strings.Contains(dbFromToml, "v3") {
			t.Fatalf("Expected v3 in toml but got: %s", dbFromToml)
		}

		// 8. Copy to all_dbs and verify up_to_date
		localV3 := filepath.Join(dbDir, "test-db-v3.db")
		serverV3 := filepath.Join(baseDBDir, "test-db-v3.db")
		data, err := os.ReadFile(localV3)
		if err != nil {
			t.Fatalf("Failed to read v3: %v", err)
		}
		os.WriteFile(serverV3, data, 0644)

		out, err = runCmd(frontendDir, b2mBin, "status", "test-db-v3.db")
		if !strings.Contains(string(out), "up_to_date") {
			t.Fatalf("Expected up_to_date for v3 but got: %s", string(out))
		}
	}

	t.Log("TestChangesetDirB2MCLI completed successfully.")
	if testConfig.CleanupB2AtEnd {
		cleanupB2()
	}
	os.WriteFile(model.AppConfig.FrontendTomlPath, []byte("[db]\ntest = \"test-db-v1.db\"\n"), 0644)
}
