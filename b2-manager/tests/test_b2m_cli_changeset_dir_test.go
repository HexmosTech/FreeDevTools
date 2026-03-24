package tests

import (
	"b2m/cli"
	"b2m/config"
	"b2m/model"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
)

// Response structs for JSON parsing - matching cli.go and status.go templates
type statusResponse struct {
	Status      string `json:"status"`
	DBName      string `json:"db_name"`
	StatusCode  string `json:"status_code"`
	VersionRole string `json:"version_role"`
}

type genericResponse struct {
	Status string `json:"status"`
	Action string `json:"action"`
}

type bumpResponse struct {
	BumpedDBName string `json:"bumped_db_name"`
	BaseDBName   string `json:"base_db_name"`
	Status       string `json:"status"`
}

type downloadResponse struct {
	Status string `json:"status"`
	Action string `json:"action"`
	DBName string `json:"db_name"`
	DBPath string `json:"db_path"`
}

// TestChangesetDirB2MCLI verifies the database management lifecycle using the b2m CLI
// when a specific changeset directory is provided via the 'changeset_dir=' parameter.
func TestChangesetDirB2MCLI(t *testing.T) {
	// --- TEST CONFIGURATION ---
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

	// Response variables for JSON parsing
	var statResp statusResponse
	var genResp genericResponse
	var bResp bumpResponse
	var dResp downloadResponse

	os.Setenv("SKIP_B2M_GIT", "true")

	// Find the project root robustly relative to this file
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		t.Fatal("Failed to get current file path")
	}
	// filename is /path/to/repo/b2-manager/tests/test_...go
	// Project root is 3 levels up
	projectRoot := filepath.Dir(filepath.Dir(filepath.Dir(filename)))

	frontendDir := filepath.Join(projectRoot, "frontend")
	if !filepath.IsAbs(frontendDir) {
		frontendDir, _ = filepath.Abs(frontendDir)
	}

	// Initialize system (config + logger) for the test
	os.Setenv("B2M_PROJECT_ROOT", frontendDir)
	sigHandler, err := config.InitSystem()
	if err != nil {
		t.Fatalf("Failed to initialize system: %v", err)
	}
	// Ensure cleanup is called at the end
	defer config.Cleanup()
	_ = sigHandler // We don't need it but avoids unused variable

	specificChangesetDir := "1772031633645610550_sample-phrase"
	changesetParam := "changeset_dir=" + specificChangesetDir
	dbDir := filepath.Join(frontendDir, "changeset", "dbs", specificChangesetDir)

	// App instance for direct calls
	app := cli.NewApp()

	// Helper to run b2m internally
	runB2M := func(args ...string) ([]byte, error) {
		var buf bytes.Buffer
		app.Writer = &buf
		app.ErrWriter = &buf

		// urfave/cli expects os.Args[0] as the first element
		fullArgs := append([]string{"b2m"}, args...)
		t.Logf("Executing Internal: %s", strings.Join(fullArgs, " "))

		err := app.Run(fullArgs)
		return buf.Bytes(), err
	}

	// Helper to run external command with timeout
	runCmd := func(dir string, name string, args ...string) ([]byte, error) {
		ctx, cancel := context.WithTimeout(context.Background(), model.TimeoutTestDefault)
		defer cancel()
		c := exec.CommandContext(ctx, name, args...)
		c.Dir = dir
		t.Logf("Executing External: %s (in %s)", strings.Join(c.Args, " "), dir)
		out, err := c.CombinedOutput()
		if ctx.Err() == context.DeadlineExceeded {
			return nil, fmt.Errorf("command timed out: %s %v", name, args)
		}
		return out, err
	}

	// cleanupB2 removes test artifacts from Backblaze B2 using a single rclone command for efficiency.
	cleanupB2 := func() {
		t.Log("Cleaning up B2 artifacts from remote...")
		bucketName := "Amazing-Stardom:db"
		// We delete both the database files and their corresponding metadata files in one go
		// using include patterns to avoid multiple round-trips.
		_, _ = runCmd("", "rclone", "delete", bucketName,
			"--include", "test-db-v*.db",
			"--include", "version/test-db-v*.db.metadata.json")
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

	// Step 1: No build needed anymore

	// --- TEST SET-UP ---
	// Test 1: Preparing the local database environment for the changeset.
	// We copy a backup of the database to the specific changeset directory.
	t.Log("Step 2: Copying test-db-back.db to test-db-v1.db in changeset dir")
	fmt.Printf("DEBUG: Entering Step 2 (Copy local DB)\n")
	_, err = runCmd("", "cp", srcDB, localV1)
	if err != nil {
		t.Fatalf("Failed to copy v1: %v", err)
	}
	fmt.Printf("DEBUG: Step 2 Complete\n")

	// --- INITIAL UPLOAD ---
	// Test 2: Perform the initial upload of the new database using the changeset_dir parameter.
	// This command uses 'changeset_dir=...' to tell b2m to look for the file in the custom location.
	t.Log("Step 3: Initial b2m upload (JSON mode)")
	fmt.Printf("DEBUG: Entering Step 3 (Initial b2m upload)\n")
	out, err := runB2M("--json", "upload", "test-db-v1.db", changesetParam)
	if err != nil {
		fmt.Printf("DEBUG: Step 3 Failed: %v\n", err)
		t.Fatalf("Step 3 upload failed: %v\nOutput: %s", err, string(out))
	}
	fmt.Printf("DEBUG: Step 3 Complete\n")
	if err := json.Unmarshal(out, &genResp); err != nil {
		t.Fatalf("Failed to parse upload JSON: %v. Output: %s", err, string(out))
	}
	if genResp.Status != "success" {
		t.Fatalf("Expected status success but got: %s", genResp.Status)
	}

	// --- STATUS CHECK ---
	// Test 3: Verifying that 'b2m status' reports 'up_to_date' after a successful upload.
	// This ensures that the local-version anchor matches the remote state.
	t.Log("Step 4: Verify status is 'up_to_date'")
	fmt.Printf("DEBUG: Entering Step 4 (Verify status)\n")
	out, err = runB2M("--json", "status", "test-db-v1.db", changesetParam)
	if err != nil {
		fmt.Printf("DEBUG: Step 4 Failed: %v\n", err)
		t.Fatalf("Step 4 status failed: %v\nOutput: %s", err, string(out))
	}
	fmt.Printf("DEBUG: Step 4 Complete\n")
	if err := json.Unmarshal(out, &statResp); err != nil {
		t.Fatalf("Failed to parse status JSON: %v. Output: %s", err, string(out))
	}
	if statResp.Status != "up_to_date" {
		t.Fatalf("Expected status up_to_date but got: %s", statResp.Status)
	}

	// SQL for updates
	sqlFile := filepath.Join(baseDBDir, "test-db.sql")
	sqlData, err := os.ReadFile(sqlFile)
	if err != nil {
		t.Fatalf("Failed to read sqlFile: %v", err)
	}

	// --- EDGE CASE 1: bump_and_upload ---
	// Test 4: Modifying the local DB and verifying that it requires a version bump
	if testConfig.BumpAndUploadCase {
		t.Log("Edge Case 1: Verifying 'bump_and_upload' workflow")

		// 1. Modify the local database by executing some SQL queries.
		// This makes the local version different from what's on B2.
		sqliteCtx, sqliteCancel := context.WithTimeout(context.Background(), model.TimeoutSqlite)
		defer sqliteCancel()
		sqliteCmd := exec.CommandContext(sqliteCtx, "sqlite3", localV1)
		sqliteCmd.Stdin = bytes.NewReader(sqlData)
		if err := sqliteCmd.Run(); err != nil {
			t.Fatalf("sqlite3 failed: %v", err)
		}

		// 2. Verify that 'b2m status' correctly identifies the need for a bump.
		// It should return 'bump_and_upload'.
		out, err = runB2M("--json", "status", "test-db-v1.db", changesetParam)
		if err != nil {
			t.Fatalf("Status check failed: %v", err)
		}
		if err := json.Unmarshal(out, &statResp); err != nil {
			t.Fatalf("Failed to parse status JSON: %v", err)
		}
		if statResp.Status != "bump_and_upload" {
			t.Fatalf("Expected bump_and_upload but got: %s", statResp.Status)
		}

		// 3. Verify that a direct 'upload' is blocked in this state.
		// The tool should prevent overwriting the remote version without a bump.
		out, err = runB2M("--json", "upload", "test-db-v1.db", changesetParam)
		if err == nil {
			t.Fatal("Expected upload to be blocked in bump_and_upload state")
		}

		// 4. Perform the 'bump-and-upload' operation.
		// This should increment the version (v1 -> v2) and then upload it.
		out, err = runB2M("--json", "bump-and-upload", "test-db-v1.db", changesetParam)
		if err != nil {
			t.Fatalf("bump-and-upload failed: %v\nOutput: %s", err, string(out))
		}
		if err := json.Unmarshal(out, &bResp); err != nil {
			t.Fatalf("Failed to parse bump JSON: %v. Output: %s", err, string(out))
		}
		if bResp.Status != "success" || !strings.Contains(bResp.BumpedDBName, "v2") {
			t.Fatalf("Unexpected bump response: %+v", bResp)
		}

		// 5. Verify v1 bump to v2 in toml
		dbFromToml, err := config.GetDBNameFromToml("test")
		if err != nil {
			t.Fatalf("Failed to get DB from toml: %v", err)
		}
		if !strings.Contains(dbFromToml, "v2") {
			t.Fatalf("Expected v2 in toml but got: %s", dbFromToml)
		}

		// 6. Copy to all_dbs and verify up_to_date (JSON)
		localV2 := filepath.Join(dbDir, "test-db-v2.db")
		serverV2 := filepath.Join(baseDBDir, "test-db-v2.db")
		data, err := os.ReadFile(localV2)
		if err != nil {
			t.Fatalf("Failed to read localV2: %v", err)
		}
		if err := os.WriteFile(serverV2, data, 0644); err != nil {
			t.Fatalf("Failed to write serverV2: %v", err)
		}

		out, err = runB2M("--json", "status", "test-db-v2.db")
		if err != nil {
			t.Fatalf("Status check failed: %v", err)
		}
		if err := json.Unmarshal(out, &statResp); err != nil {
			t.Fatalf("Failed to parse status JSON: %v", err)
		}
		if statResp.Status != "up_to_date" {
			t.Fatalf("Expected up_to_date for v2 but got: %s", statResp.Status)
		}
	}

	// --- EDGE CASE 2: outdated_version ---
	// Test 5: Simulating a remote update and verifying that the local version becomes outdated
	if testConfig.OutdatedVersionCase {
		t.Log("Edge Case 2: Verifying 'outdated_version' workflow")
		localV2 := filepath.Join(dbDir, "test-db-v2.db")

		// 2. Verify that 'b2m status' for the older local 'v1' returns 'outdated_version'.
		// Since Edge Case 1 performed a bump-and-upload, 'v2' is already on remote.
		out, err = runB2M("--json", "status", "test-db-v1.db", changesetParam)
		if err != nil {
			t.Fatalf("Status check failed: %v", err)
		}
		if err := json.Unmarshal(out, &statResp); err != nil {
			t.Fatalf("Failed to parse status JSON: %v", err)
		}
		if statResp.Status != "outdated_version" {
			t.Fatalf("Expected outdated_version but got: %s", statResp.Status)
		}

		// 3. Verify that 'uploading' the older version is blocked.
		out, err = runB2M("--json", "upload", "test-db-v1.db", changesetParam)
		if err == nil {
			t.Fatal("Expected upload to be blocked in outdated_version state")
		}

		// 4. Download the 'latest' version (v2) from B2.
		t.Log("Step 2.4: Downloading latest DB version (v2)")
		out, err = runB2M("--json", "download-latest-db", "test", changesetParam)
		if err != nil {
			t.Fatalf("download-latest-db failed: %v", err)
		}
		if err := json.Unmarshal(out, &dResp); err != nil {
			t.Fatalf("Failed to parse download JSON: %v. Output: %s", err, string(out))
		}
		if dResp.Status != "success" || !strings.Contains(dResp.DBName, "v2") {
			t.Fatalf("Unexpected download response: %+v", dResp)
		}

		// 5. Execute query on latest db (v2)
		sqliteCtx2, sqliteCancel2 := context.WithTimeout(context.Background(), model.TimeoutSqlite)
		defer sqliteCancel2()
		sqliteCmdV2 := exec.CommandContext(sqliteCtx2, "sqlite3", localV2)
		sqliteCmdV2.Stdin = bytes.NewReader(sqlData)
		if err := sqliteCmdV2.Run(); err != nil {
			t.Fatalf("sqlite3 v2 failed: %v", err)
		}

		// 6. perform bump-and-upload on v2 (resulting in v3) (JSON)
		out, err = runB2M("--json", "bump-and-upload", "test-db-v2.db", changesetParam)
		if err != nil {
			t.Fatalf("bump-and-upload on v2 failed: %v\nOutput: %s", err, string(out))
		}
		if err := json.Unmarshal(out, &bResp); err != nil {
			t.Fatalf("Failed to parse bump JSON: %v", err)
		}
		if bResp.Status != "success" || !strings.Contains(bResp.BumpedDBName, "v3") {
			t.Fatalf("Unexpected bump response: %+v", bResp)
		}

		// 7. Verify v3 in toml
		dbFromToml, err := config.GetDBNameFromToml("test")
		if err != nil {
			t.Fatalf("Failed to get DB from toml: %v", err)
		}
		if !strings.Contains(dbFromToml, "v3") {
			t.Fatalf("Expected v3 in toml but got: %s", dbFromToml)
		}

		// 8. Copy to all_dbs and verify up_to_date (JSON)
		localV3 := filepath.Join(dbDir, "test-db-v3.db")
		serverV3 := filepath.Join(baseDBDir, "test-db-v3.db")
		data, err := os.ReadFile(localV3)
		if err != nil {
			t.Fatalf("Failed to read v3: %v", err)
		}
		if err := os.WriteFile(serverV3, data, 0644); err != nil {
			t.Fatalf("Failed to write serverV3: %v", err)
		}

		out, err = runB2M("--json", "status", "test-db-v3.db")
		if err != nil {
			t.Fatalf("Status check failed: %v", err)
		}
		if err := json.Unmarshal(out, &statResp); err != nil {
			t.Fatalf("Failed to parse status JSON: %v", err)
		}
		if statResp.Status != "up_to_date" {
			t.Fatalf("Expected up_to_date for v3 but got: %s", statResp.Status)
		}
	}

	t.Log("TestChangesetDirB2MCLI completed successfully.")
	if testConfig.CleanupB2AtEnd {
		cleanupB2()
	}
	if err := os.WriteFile(model.AppConfig.FrontendTomlPath, []byte("[db]\ntest = \"test-db-v1.db\"\n"), 0644); err != nil {
		t.Fatalf("Failed to restore toml: %v", err)
	}
}
