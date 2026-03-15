package tests

import (
	"bytes"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"testing"
)

func TestIPMDB(t *testing.T) {
	// Find the frontend directory
	// go test runs in the package directory (b2-manager/tests)
	workDir, err := os.Getwd()
	if err != nil {
		t.Fatalf("Failed to get working directory: %v", err)
	}

	// Traverses up from b2-manager/tests -> b2-manager -> FreeDevTools
	projectRoot := filepath.Dir(filepath.Dir(workDir))
	frontendDir := filepath.Join(projectRoot, "frontend")
	if !filepath.IsAbs(frontendDir) {
		frontendDir, _ = filepath.Abs(frontendDir)
	}

	dbDir := filepath.Join(frontendDir, "db", "all_dbs")
	b2mBin := filepath.Join(frontendDir, "b2m")

	srcDB := filepath.Join(dbDir, "test-db-back.db")
	localV1 := filepath.Join(dbDir, "test-db-v1.db")

	// Step 1: Build the b2m binary
	t.Log("Step 1: Building b2m")
	cmd := exec.Command("make", "build-b2m")
	cmd.Dir = frontendDir
	out, err := cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to build b2m: %v\nOutput: %s", err, string(out))
	}

	// Step 2: Copy test-db-back.db to test-db-v1.db locally using cp
	t.Log("Step 2: Copying test-db-back.db to test-db-v1.db locally using cp")
	cpCmd := exec.Command("cp", srcDB, localV1)
	cpOut, err := cpCmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to copy srcDB using cp: %v\nOutput: %s", err, string(cpOut))
	}

	// Step 3: Use b2m upload to push the local v1 DB to B2
	t.Logf("Step 3: Uploading test-db-v1.db via b2m upload")
	cmd = exec.Command(b2mBin, "upload", "test-db-v1.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to upload test-db-v1.db: %v\nOutput: %s", err, string(out))
	}

	// 4. execute ./b2m status test-db-v1.db and it should return up_to_date.
	t.Log("Step 4: Running b2m status test-db-v1.db (expecting up_to_date)")
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to run b2m status: %v\nOutput: %s", err, string(out))
	}
	if !strings.Contains(string(out), "up_to_date") {
		t.Fatalf("Expected up_to_date but got: %s", string(out))
	}

	// 5. Update ipmdb using sqlite cli.(using sqlite3 cli with sql queries file).
	t.Log("Step 5: Updating test-db-v1.db using sqlite3 CLI")
	sqlFile := filepath.Join(dbDir, "test-db.sql")
	sqlData, err := os.ReadFile(sqlFile)
	if err != nil {
		t.Fatalf("Failed to read sql file: %v", err)
	}

	cmd = exec.Command("sqlite3", localV1)
	cmd.Stdin = bytes.NewReader(sqlData)
	cmd.Dir = dbDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to run sqlite3: %v\nOutput: %s", err, string(out))
	}

	// 6. execute ./b2m status test-db-v1.db and it should return bump_and_upload.
	t.Log("Step 6: Running b2m status test-db-v1.db (expecting bump_and_upload)")
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		// Just log the error, sometimes status commands return non-zero if there's actionable state
		t.Logf("b2m status returned error (can be ignored if output is correct): %v", err)
	}
	if !strings.Contains(string(out), "bump_and_upload") {
		t.Fatalf("Expected bump_and_upload but got: %s", string(out))
	}

	// 7. again use b2m upload test-db-v1.db to b2 with name test-db-v1.db
	// and then followed with b2m upload test-db-v2.db to b2 with name test-db-v2.db.
	t.Logf("Step 7a: Uploading updated test-db-v1.db to B2 via b2m upload")
	cmd = exec.Command(b2mBin, "upload", "test-db-v1.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to upload updated test-db-v1.db for step 7a: %v\nOutput: %s", err, string(out))
	}

	t.Log("Step 7b: Copying test-db-back.db to test-db-v2.db locally using cp")
	localV2 := filepath.Join(dbDir, "test-db-v2.db")
	cpCmd2 := exec.Command("cp", srcDB, localV2)
	cpOut2, err := cpCmd2.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to copy srcDB to localV2 using cp: %v\nOutput: %s", err, string(cpOut2))
	}

	t.Logf("Step 7c: Uploading test-db-v2.db to B2 via b2m upload")
	cmd = exec.Command(b2mBin, "upload", "test-db-v2.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Fatalf("Failed to upload test-db-v2.db for step 7c: %v\nOutput: %s", err, string(out))
	}

	// 8. execute ./b2m status test-db-v1.db and it should return outdated_version.
	t.Log("Step 8: Running b2m status test-db-v1.db (expecting outdated_version)")
	cmd = exec.Command(b2mBin, "status", "test-db-v1.db")
	cmd.Dir = frontendDir
	out, err = cmd.CombinedOutput()
	if err != nil {
		t.Logf("b2m status returned error (can be ignored if output is correct): %v", err)
	}
	if !strings.Contains(string(out), "outdated_version") {
		t.Fatalf("Expected outdated_version but got: %s", string(out))
	}

	t.Log("TestIPMDB passed successfully.")

	// 9. Cleanup: delete v2 db in b2 directory and it's metadata
	t.Log("Step 9: Cleaning up test-db-v2.db and its metadata from B2")
	bucketName := "Amazing-Stardom:db"
	remoteV2 := bucketName + "/test-db-v2.db"
	remoteMetaV2 := bucketName + "/version/test-db-v2.db.json"

	// Delete DB file
	t.Logf("Deleting %s", remoteV2)
	delCmd := exec.Command("rclone", "deletefile", remoteV2)
	if out, err := delCmd.CombinedOutput(); err != nil {
		t.Logf("Warning: Failed to delete %s: %v\nOutput: %s", remoteV2, err, string(out))
	}

	// Delete Metadata file
	t.Logf("Deleting %s", remoteMetaV2)
	delMetaCmd := exec.Command("rclone", "deletefile", remoteMetaV2)
	if out, err := delMetaCmd.CombinedOutput(); err != nil {
		t.Logf("Warning: Failed to delete %s: %v\nOutput: %s", remoteMetaV2, err, string(out))
	}
}
