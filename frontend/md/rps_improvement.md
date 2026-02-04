# Optimize Go Server Performance

## Current Issues

- SQLite max connections: 25 → should be optimized to 10-20 (not 50)
- Missing critical SQLite pragmas for read-only performance (immutable, mmap_size, cache_size)
- Incorrect journal_mode handling: `_journal_mode=WAL` in DSN doesn't work properly for read-only/immutable mode
- Missing WAL checkpoint before shipping (required when using immutable mode)
- No GOMAXPROCS limit (should be 2 CPU cores)
- URL routing uses nested if/else (can be cleaner, but has zero performance impact)
- Makefile starts 2 processes but user wants single process
- Missing profiling setup to identify actual bottlenecks

## Critical: Profile First (Step 0)

**Before making any changes, identify the actual bottleneck:**

```bash
# Add pprof import to main.go: import _ "net/http/pprof"
# Then profile during load:
go tool pprof -http=:9999 http://localhost:8080/debug/pprof/profile?seconds=30
```

Common findings:
- CPU 98% in SQLite → DB is bottleneck
- CPU 70% JSON encoding → use easyjson
- CPU 60% string building → micro-allocations
- CPU 0% Go, 100% disk I/O → DB too slow

## Changes Required

### 0. Add Profiling Support (`cmd/server/main.go`)

- Import `_ "net/http/pprof"` to enable profiling endpoints
- Keep profiling endpoints available permanently for monitoring

### 1. Database Configuration (`internal/db/svg_icons/queries.go`)

**Important corrections:**

- **Connection pool**: Set `SetMaxOpenConns` to **20** (not 50)
  - SQLite allows unlimited concurrent readers, but each connection = its own page cache
  - Too many connections = high memory overhead + more OS file handles
  - Sweet spot on 2 vCPUs: 10-20 connections (anything above 20 gives no extra RPS)
- Set `SetMaxIdleConns` to **20** (match max open)
- Set `SetConnMaxLifetime(0)` to keep prepared statements alive (stmt caching)

**DSN connection string (runtime for reads):**
```
mode=ro&_immutable=1&_cache_size=-64000&_mmap_size=268435456&_busy_timeout=5000
```

**Do NOT include `_journal_mode=WAL` in DSN** - it doesn't work correctly for read-only/immutable mode.

**Critical: Using `_immutable=1` means SQLite ignores WAL completely**
- SQLite will NOT write to WAL
- SQLite will NOT read the WAL file either
- It treats the DB like a readonly static binary blob (makes reads insanely fast)
- **BUT**: The DB file must have a consistent WAL checkpoint before shipping

**Build-time PRAGMA setup (one-time, before shipping):**
```sql
PRAGMA journal_mode=WAL;
PRAGMA synchronous=NORMAL;
PRAGMA wal_checkpoint(FULL);  -- Critical: checkpoint before shipping
```

Add to build process:
```bash
sqlite3 your.db "PRAGMA wal_checkpoint(FULL);"
```

**Ensure single global DB handle:**
- Verify `GetDB()` is only called once at startup (already done in `main.go`)
- Do NOT create DB per request

### 2. Runtime Configuration (`cmd/server/main.go`)

- Set `runtime.GOMAXPROCS(2)` at startup to limit to 2 CPU cores
- Import `runtime` package

### 3. URL Routing Refactor (`cmd/server/routes.go`)

**Note: This is for code clarity only, NOT performance**
- net/http + if/else = fastest possible routing
- Fiber/Chi don't outperform raw stdlib routing for simple cases
- Refactor `setupSVGIconsRoutes` to use cleaner pattern matching for readability
- Create helper functions for route patterns:
  - `matchSitemap(path string) bool`
  - `matchIndex(path string) bool`
  - `matchPagination(path string) (int, bool)`
  - `matchCategory(path string) (string, bool)`
  - `matchIcon(path string) (category, iconName string, ok bool)`
- Reduce nested if/else chains for better readability

### 4. Makefile Update (`Makefile`)

- Update `start-prod` target to start only one process (remove port 4322)
- Update `stop-prod` to handle single process

## Expected Performance Improvements

- **Connection pool**: 25 → 20 connections (optimal for 2 vCPUs, reduces memory overhead)
- **SQLite pragmas**: Immutable + proper cache + mmap should significantly reduce I/O overhead
- **WAL checkpoint**: Ensures consistent database state for immutable reads
- **GOMAXPROCS**: Limits CPU contention, ensures predictable performance
- **Stmt caching**: `SetConnMaxLifetime(0)` keeps prepared statements alive
- **Cleaner routing**: Code clarity only, zero performance impact

## Files to Modify

1. `internal/db/svg_icons/queries.go` - Database connection configuration
2. `cmd/server/main.go` - Add GOMAXPROCS setting and pprof import
3. `cmd/server/routes.go` - Refactor URL routing patterns (clarity only)
4. `Makefile` - Update production start/stop to single process
5. Build process - Add WAL checkpoint step before shipping DB