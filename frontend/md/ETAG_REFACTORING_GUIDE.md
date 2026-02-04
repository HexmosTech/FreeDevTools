# ETag Caching and Route Refactoring Guide


We will use the **Cheatsheets** implementation as the primary reference.

## Architecture Overview

The refactoring moves logic from monolithic route files (`cmd/server/*_routes.go`) to a layered architecture:
1.  **Database Layer**: optimized queries for timestamp retrieval.
2.  **HTTP Cache Layer**: Logic to map routes to database timestamps.
3.  **Controller Layer**: Request handlers using standard Request/Response patterns.
4.  **Route Layer**: Simplified routing using `utils.DetectRoute` and `http_cache.CheckCache`.

---

## Step 1: Database Layer Updates

**File:** `internal/db/<section>/queries.go`

Add methods to retrieve only the `updated_at` timestamp for specific resources. This allows validatin cache without fetching heavy data.

### 1.1 Cache Keys and TTLs
Ensure `internal/db/<section>/cache.go` defines appropriate TTL constants.

### 1.2 Implement `Get*UpdatedAt` Methods

**Example (Cheatsheets):**

```go
// GetCheatsheetUpdatedAt returns the updated_at timestamp for a cheatsheet
func (db *DB) GetCheatsheetUpdatedAt(category, cheatName string) (string, error) {
    // 1. Calculate Cache Key
    hash := CalculateHash(category, cheatName)
    key := fmt.Sprintf("GetCheatsheetUpdatedAt:%d", hash)
    
    // 2. Check internal DB Cache
    if val, ok := db.cache.Get(key); ok {
        return val.(string), nil
    }

    // 3. Query Database (optimized to select ONLY updated_at)
    query := `SELECT updated_at FROM cheatsheet WHERE hash = ?`
    // ... execute query ...

    // 4. Set Cache
    db.cache.Set(key, updatedAt, CacheTTLCheat)
    return updatedAt, nil
}
```

Implement similar methods for other resource types (e.g., `GetClusterUpdatedAt` for categories).

---

## Step 2: HTTP Cache Logic

**File:** `internal/http_cache/<section>.go` (Create if new)

Create a function to dispatch cache checks based on `RouteType`.

**Example:**

```go
package http_cache

import (
    "fdt-templ/internal/db/cheatsheets"
    "fdt-templ/internal/types"
)

func CheckCheatsheetUpdatedAt(db *cheatsheets.DB, routeType types.RouteType, category, param string) (string, *types.RouteInfo) {
    info := &types.RouteInfo{
        Type:         routeType,
        CategorySlug: category,
        ParamSlug:    param,
        // Calculate and set HashID if your controllers use it for optimization
        HashID:       cheatsheets.CalculateHash(category, param), 
    }

    var updatedAt string
    var err error

    switch routeType {
    case types.TypeIndex:
        // Get generic overview/index timestamp
        updatedAt, err = db.GetLastUpdatedAt()
    case types.TypeCategory:
        updatedAt, err = db.GetCategoryUpdatedAt(category)
    case types.TypeDetail:
        updatedAt, err = db.GetCheatsheetUpdatedAt(category, param)
    }

    // ... handle errors ...
    return updatedAt, info
}
```

**File:** `internal/http_cache/http_cache.go`

Update the `CheckCache` function to include your new section in the switch statement.

```go
    case "cheatsheets":
        if csDB, ok := db.(*cheatsheets.DB); ok {
            updatedAt, info = CheckCheatsheetUpdatedAt(csDB, routeInfo.Type, routeInfo.CategorySlug, routeInfo.ParamSlug)
        }
```

---

## Step 3: Controller Layer

**File:** `internal/controllers/<section>/handlers.go` (Create if new)

Move handler logic from the routes file to this controller.

**Best Practices:**
*   Use `fdt-templ/internal/config` for site configuration (Base URL, Ads, etc.).
*   Accept `page` (int) and `HashID` (int64) as arguments where applicable to avoid recalculation.
*   **Parallel Queries**: If using goroutines for parallel DB fetching (e.g., in Index handlers), ensure you **close channels** on error to prevent deadlocks.

**Example (Handler Signature):**

```go
func HandleCheatsheet(w http.ResponseWriter, r *http.Request, db *cheatsheets.DB, category, name string, hashID int64) {
    // Logic to fetch data and render template
    // ...
}
```

---

## Step 4: Route Layer

**File:** `cmd/server/<section>_routes.go`

Refactor the setup function to use `utils.DetectRoute`.

**Workflow:**
1.  **Static Files**: Handle valid static file extensions first (if any).
2.  **Sitemaps**: Handle sitemap routes.
3.  **Exceptions**: Handle "credits" page.
4.  **Route Detection**: Use `utils.DetectRoute(relativePath)`.
5.  **Caching**: Call `http_cache.CheckCache`. If it returns true, return immediately (response is already sent).
6.  **Dispatch**: Switch on `routeInfo.Type` and call the appropriate Controller handler.

**Example:**

```go
func setupCheatsheetRoutes(mux *http.ServeMux, db *cheatsheets.DB) {
    pathPrefix := basePath + "/cheatsheets"
    
    mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
        relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")

        // Detect Route
        routeInfo, ok := utils.DetectRoute(relativePath)
        if !ok {
            http.NotFound(w, r)
            return
        }

        // Check Cache
        cached, enrichedInfo := http_cache.CheckCache(w, r, db, "cheatsheets", routeInfo)
        if cached {
            return
        }

        // Dispatch
        switch routeInfo.Type {
        case types.TypeIndex:
            cheatsheets_controllers.HandleIndex(w, r, db, routeInfo.Page)
        case types.TypeCategory:
            cheatsheets_controllers.HandleCategory(w, r, db, routeInfo.CategorySlug, routeInfo.Page)
        case types.TypeDetail:
            // Use enrichedInfo.HashID if available
            cheatsheets_controllers.HandleCheatsheet(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug, enrichedInfo.HashID)
        }
    })
}
```

## How to verify?
Open browser and go to any section page.
Open network tab and refresh page.
You should see 304 Not Modified for svg_icons page.