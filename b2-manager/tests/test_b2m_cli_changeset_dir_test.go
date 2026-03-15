package tests

import (
	"b2m/config"
	"b2m/model"
	"bytes"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
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
	// Find the frontend directory
	workDir, _ := os.Getwd()
	projectRoot := filepath.Dir(filepath.Dir(workDir))
	frontendDir := filepath.Join(projectRoot, "frontend")
	if !filepath.IsAbs(frontendDir) {
		frontendDir, _ = filepath.Abs(frontendDir)
	}

	specificChangesetDir := "1772031633645610550_sample-phrase"
	changsetParam := "changeset_dir=" + specificChangesetDir
	dbDir := filepath.Join(frontendDir, "changeset", "dbs", specificChangesetDir)
	b2mBin := filepath.Join(frontendDir, "b2m")

	var cmd *exec.Cmd
	var out []byte
	var err error

	// Helper to cleanup B2
	cleanupB2 := func() {
		t.Log("Cleaning up B2 artifacts...")
		bucketName := "Amazing-Stardom:db"
		for _, ver := range []string{"v1", "v2", "v3"} {
			dbFileName := "test-db-" + ver + ".db"
			remoteDB := bucketName + "/" + dbFileName
			remoteMeta := bucketName + "/version/" + dbFileName + ".metadata.json"

			delCmd := exec.Command("rclone", "deletefile", remoteDB)
			t.Logf("Executing: %s", strings.Join(delCmd.Args, " "))
			delCmd.Run()

			delMetaCmd := exec.Command("rclone", "deletefile", remoteMeta)
			t.Logf("Executing: %s", strings.Join(delMetaCmd.Args, " "))
			delMetaCmd.Run()
		}
	}

	// Ensure dbDir exists
	if err := os.MkdirAll(dbDir, 0755); err != nil {
		t.Fatalf("Failed to create dbDir: %v", err)
	}

	baseDBDir := filepath.Join(frontendDir, "db", "all_dbs")
	srcDB := filepath.Join(baseDBDir, "test-db-back.db")
	localV1 := filepath.Join(dbDir, "test-db-v1.db")

	// Pre-cleanup
	cleanupB2()

	// Step 1: Build the b2m binary
	t.Log("Step 1: Building b2m")
	cmd = exec.Command("make", "build-b2m")
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to build b2m: %v\nOutput: %s", err, string(out))
	}

	// Step 2: Copy test-db-back.db to test-db-v1.db locally
	t.Log("Step 2: Copying test-db-back.db to test-db-v1.db")
	cpCmd := exec.Command("cp", srcDB, localV1)
	t.Logf("Executing: %s", strings.Join(cpCmd.Args, " "))
	if err := cpCmd.Run(); err != nil {
		t.Fatalf("Failed to copy v1: %v", err)
	}

	// Step 3: Initial upload
	t.Log("Step 3: Initial b2m upload")
	// Ensure no stale local meta
	resetCmd := exec.Command(b2mBin, "reset")
	t.Logf("Executing: %s", strings.Join(resetCmd.Args, " "))
	resetCmd.Dir = frontendDir
	resetCmd.Run()

	cmd = exec.Command(b2mBin, "upload", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Step 3 upload failed: %v\nOutput: %s", err, string(out))
	}

	// Step 4: Verify status up_to_date
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, _ = cmd.CombinedOutput()
	if !strings.Contains(string(out), "up_to_date") {
		t.Fatalf("Expected up_to_date but got: %s", string(out))
	}

	// SQL for updates
	sqlFile := filepath.Join(baseDBDir, "test-db.sql")
	sqlData, _ := os.ReadFile(sqlFile)

	// --- EDGE CASE 1: bump_and_upload ---
	t.Log("Edge Case 1: bump_and_upload verification")

	// 1. Modify local DB
	sqliteCmd := exec.Command("sqlite3", localV1)
	t.Logf("Executing: %s < %s", strings.Join(sqliteCmd.Args, " "), sqlFile)
	sqliteCmd.Stdin = bytes.NewReader(sqlData)
	sqliteCmd.Run()

	// 2. Verify status is bump_and_upload
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, _ = cmd.CombinedOutput()
	if !strings.Contains(string(out), "bump_and_upload") {
		t.Fatalf("Expected bump_and_upload but got: %s", string(out))
	}

	// 3. REQUIREMENT: Verify upload is blocked
	cmd = exec.Command(b2mBin, "upload", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s (expecting failure)", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	if err = cmd.Run(); err == nil {
		t.Fatal("Expected upload to be blocked in bump_and_upload state")
	}

	// 4. Run bump-and-upload
	// We need to set FrontentTomlPath for GetDBNameFromToml
	model.AppConfig.FrontendTomlPath = filepath.Join(frontendDir, "db.toml")

	cmd = exec.Command(b2mBin, "bump-and-upload", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
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

	cmd = exec.Command(b2mBin, "status", "test-db-v2.db")
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, _ = cmd.CombinedOutput()
	if !strings.Contains(string(out), "up_to_date") {
		t.Fatalf("Expected up_to_date for v2 but got: %s", string(out))
	}

	// Cleanup before next edge case
	cleanupB2()

	// --- EDGE CASE 2: outdated_version ---
	t.Log("Edge Case 2: outdated_version verification")

	// 1. Setup: Upload v2 to remote, keep v1 locally
	t.Log("Step 2.1: Uploading v2 to remote")
	copyV2Cmd := exec.Command("cp", srcDB, localV2)
	t.Logf("Executing: %s", strings.Join(copyV2Cmd.Args, " "))
	copyV2Cmd.Run()

	uploadV2Cmd := exec.Command(b2mBin, "upload", "test-db-v2.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(uploadV2Cmd.Args, " "))
	uploadV2Cmd.Dir = frontendDir
	if err := uploadV2Cmd.Run(); err != nil {
		t.Fatalf("Failed to setup remote v2: %v", err)
	}

	// 2. Check v1 status (should be outdated_version)
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, _ = cmd.CombinedOutput()
	if !strings.Contains(string(out), "outdated_version") {
		t.Fatalf("Expected outdated_version for v1 but got: %s", string(out))
	}

	// 3. REQUIREMENT: Verify upload is blocked
	cmd = exec.Command(b2mBin, "upload", "test-db-v1.db", changsetParam)
	t.Logf("Executing: %s (expecting failure)", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	if err = cmd.Run(); err == nil {
		t.Fatal("Expected upload to be blocked in outdated_version state")
	}

	// 4. Download latest db (v2)
	cmd = exec.Command(b2mBin, "download-latest-db", "test", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	if err := cmd.Run(); err != nil {
		t.Fatalf("download-latest-db failed: %v", err)
	}

	// 5. Execute query on latest db (v2)
	sqliteCmdV2 := exec.Command("sqlite3", localV2)
	t.Logf("Executing: %s < %s", strings.Join(sqliteCmdV2.Args, " "), sqlFile)
	sqliteCmdV2.Stdin = bytes.NewReader(sqlData)
	sqliteCmdV2.Run()

	// 6. perform bump-and-upload on v2 (resulting in v3)
	cmd = exec.Command(b2mBin, "bump-and-upload", "test-db-v2.db", changsetParam)
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("bump-and-upload on v2 failed: %v\nOutput: %s", err, string(out))
	}

	// 7. Verify v3 in toml
	dbFromToml, _ = config.GetDBNameFromToml("test")
	if !strings.Contains(dbFromToml, "v3") {
		t.Fatalf("Expected v3 in toml but got: %s", dbFromToml)
	}

	// 8. Copy to all_dbs and verify up_to_date
	localV3 := filepath.Join(dbDir, "test-db-v3.db")
	serverV3 := filepath.Join(baseDBDir, "test-db-v3.db")
	data, _ = os.ReadFile(localV3)
	os.WriteFile(serverV3, data, 0644)

	cmd = exec.Command(b2mBin, "status", "test-db-v3.db")
	t.Logf("Executing: %s", strings.Join(cmd.Args, " "))
	cmd.Dir = frontendDir
	out, _ = cmd.CombinedOutput()
	if !strings.Contains(string(out), "up_to_date") {
		t.Fatalf("Expected up_to_date for v3 but got: %s", string(out))
	}

	t.Log("TestChangesetDirB2MCLI completed successfully.")
	cleanupB2()
	os.WriteFile(model.AppConfig.FrontendTomlPath, []byte("[db]\ntest = \"test-db-v1.db\"\n"), 0644)
}
