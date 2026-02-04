#!/usr/bin/env bash
set -e

PORT=${PORT:-4321}
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Starting development server with live reload...${NC}"
echo ""

# Kill any existing processes on the port
echo "🧹 Cleaning up existing processes..."
lsof -ti:${PORT} | xargs -r kill -9 2>/dev/null || true
sleep 1

# Check if air is installed
if ! command -v air >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  'air' not found.${NC}"
    echo "   Installing air for live reload..."
    echo "   Run: go install github.com/cosmtrek/air@latest"
    echo "   Or install from: https://github.com/cosmtrek/air"
    echo ""
    echo "   Falling back to basic file watching..."
    echo ""
    
    # Fallback mode
    echo "📦 Initial build..."
    make generate >/dev/null 2>&1
    make build-css >/dev/null 2>&1
    make build-js >/dev/null 2>&1
    echo -e "${GREEN}✅ Initial build complete${NC}"
    echo ""
    
    # Start templ watcher
    echo "👀 Starting templ file watcher..."
    if command -v templ >/dev/null 2>&1; then
        templ generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    elif [ -f "$HOME/go/bin/templ" ]; then
        "$HOME/go/bin/templ" generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    else
        go run github.com/a-h/templ/cmd/templ@latest generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    fi
    echo -e "  ${GREEN}✓${NC} Templ watcher started (PID: $TEMPL_PID)"
    
    # Start CSS watcher
    echo "👀 Starting CSS watcher..."
    npm run watch:css >/dev/null 2>&1 &
    CSS_PID=$!
    echo -e "  ${GREEN}✓${NC} CSS watcher started (PID: $CSS_PID)"
    
    # Start JS watcher
    echo "👀 Starting frontend JS watcher..."
    npm run watch:js >/dev/null 2>&1 &
    JS_PID=$!
    echo -e "  ${GREEN}✓${NC} Frontend JS watcher started (PID: $JS_PID)"
    echo ""
    
    # Cleanup function
    cleanup() {
        echo ""
        echo "🛑 Stopping watchers..."
        kill $TEMPL_PID $CSS_PID $JS_PID 2>/dev/null || true
        lsof -ti:${PORT} | xargs -r kill -9 2>/dev/null || true
        echo "✅ Cleanup complete"
        exit 0
    }
    
    trap cleanup INT TERM EXIT
    
    # Run server
    echo -e "${CYAN}🎯 Starting Go server...${NC}"
    echo "   Note: Go file changes require manual restart (Ctrl+C then make start-dev)"
    echo "   Install 'air' for automatic Go file reloading"
    echo "   Press Ctrl+C to stop"
    echo ""
    
    # Load environment variables
    if [ -f .env ]; then
        set -a
        source .env
        set +a
    fi
    
    PORT=${PORT} go run ./cmd/server
else
    # Air is installed - use it
    echo "📦 Initial build..."
    make generate >/dev/null 2>&1
    make build-css >/dev/null 2>&1
    make build-js >/dev/null 2>&1
    echo -e "${GREEN}✅ Initial build complete${NC}"
    echo ""
    
    # Start templ watcher in background
    echo "👀 Starting templ file watcher..."
    if command -v templ >/dev/null 2>&1; then
        templ generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    elif [ -f "$HOME/go/bin/templ" ]; then
        "$HOME/go/bin/templ" generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    else
        go run github.com/a-h/templ/cmd/templ@latest generate --watch >/dev/null 2>&1 &
        TEMPL_PID=$!
    fi
    echo -e "  ${GREEN}✓${NC} Templ watcher started (PID: $TEMPL_PID)"
    
    # Start CSS watcher in background
    echo "👀 Starting CSS watcher..."
    npm run watch:css >/dev/null 2>&1 &
    CSS_PID=$!
    echo -e "  ${GREEN}✓${NC} CSS watcher started (PID: $CSS_PID)"
    
    # Start JS watcher in background
    echo "👀 Starting frontend JS watcher..."
    npm run watch:js >/dev/null 2>&1 &
    JS_PID=$!
    echo -e "  ${GREEN}✓${NC} Frontend JS watcher started (PID: $JS_PID)"
    echo ""
    
    # Cleanup function
    cleanup() {
        echo ""
        echo "🛑 Stopping watchers..."
        kill $TEMPL_PID $CSS_PID $JS_PID 2>/dev/null || true
        lsof -ti:${PORT} | xargs -r kill -9 2>/dev/null || true
        echo "✅ Cleanup complete"
        exit 0
    }
    
    trap cleanup INT TERM EXIT
    
    # Start air for Go file watching
    echo -e "${CYAN}🎯 Starting Go server with air (watching .go files)...${NC}"
    echo "   Server will auto-reload on .go and .templ file changes"
    echo "   CSS and frontend JS changes will auto-rebuild"
    echo "   Press Ctrl+C to stop all watchers"
    echo ""
    
    # Load environment variables
    if [ -f .env ]; then
        set -a
        source .env
        set +a
    fi
    
    PORT=${PORT} air
fi

