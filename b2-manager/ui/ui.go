package ui

import (
	"context"
	"fmt"
	"log"
	"sync"
	"time"

	"b2m/core"
	"b2m/model"

	"github.com/jroimartin/gocui"
)

const (
	HeaderHeight       = 2
	ProgressBarWidth   = 20
	ProgressColPadding = 10
)

// AppUI is the main application UI struct
type AppUI struct {
	g         *gocui.Gui
	dbs       []model.DBStatusInfo
	selected  int
	loading   bool
	statusMsg string
	ctx       context.Context
	cancel    context.CancelFunc
	mu        sync.Mutex

	activeOps map[string]context.CancelFunc
	dbStatus  map[string]UIStatus

	listController *ListController
}

func NewListController(app *AppUI) *ListController {
	return &ListController{app: app}
}

func RunUI(sigHandler *core.SignalHandler) {
	g, err := gocui.NewGui(gocui.OutputNormal)
	if err != nil {
		log.Panicln(err)
	}
	defer g.Close()

	g.Cursor = true // Enable cursor for selection
	g.Highlight = true
	g.SelFgColor = gocui.ColorGreen
	g.SelBgColor = gocui.ColorBlack

	// NOTE: We do NOT use core.GetContext() as parent here, because we want to intercept
	// the signal and decide whether to cancel app.ctx (which kills ops) or not.
	ctx, cancel := context.WithCancel(context.Background())
	app := &AppUI{
		g:         g,
		ctx:       ctx,
		cancel:    cancel,
		activeOps: make(map[string]context.CancelFunc),
		dbStatus:  make(map[string]UIStatus),
	}
	app.listController = NewListController(app)

	g.SetManagerFunc(app.layout)

	if err := app.keybindings(); err != nil {
		log.Panicln(err)
	}

	// Watch for global signal (Ctrl+C)
	go func() {
		// handleSignalLoop:
		for {
			// Wait for signal
			<-sigHandler.Context().Done()

			// Check active operations
			app.mu.Lock()
			count := len(app.activeOps)
			app.mu.Unlock()

			if count == 0 {
				// Safe to exit immediately
				g.Update(func(g *gocui.Gui) error {
					return gocui.ErrQuit
				})
				return
			}

			// Active operations exist - Prompt user
			var userCh = make(chan bool)
			app.confirm("Exit Warning", "Active operations in progress.\nStop them and exit?", func() {
				userCh <- true
			}, func() {
				userCh <- false
			})

			// Wait for user choice
			shouldExit := <-userCh

			if shouldExit {
				// Update status for all active ops to give visual feedback
				app.mu.Lock()
				var activeDBs []string
				for dbName := range app.activeOps {
					activeDBs = append(activeDBs, dbName)
				}
				app.mu.Unlock()

				for _, dbName := range activeDBs {
					// Manually update status to Cancelling (like 'c' key does)
					app.updateDBStatus(dbName, "Cancelling...", -1, -1, "", "")
				}

				// Cancel all operations
				app.cancel()

				// Wait Loop
				for i := 0; i < 50; i++ { // Wait max 5 seconds
					app.mu.Lock()
					c := len(app.activeOps)
					app.mu.Unlock()
					if c == 0 {
						break
					}
					time.Sleep(100 * time.Millisecond)
				}

				g.Update(func(g *gocui.Gui) error {
					return gocui.ErrQuit
				})
				return
			} else {
				// User said No.
				// Reset the signal context so we can catch Ctrl+C again
				sigHandler.Reset()
				// loop runs again
			}
		}
	}()

	// Spinner Ticker
	go func() {
		ticker := time.NewTicker(50 * time.Millisecond)
		defer ticker.Stop()
		for {
			select {
			case <-ticker.C:
				app.mu.Lock()
				loading := app.loading
				app.mu.Unlock()
				if loading {
					app.g.Update(func(g *gocui.Gui) error {
						app.renderStatusLine(g)
						return nil
					})
				}
			case <-app.ctx.Done():
				return
			}
		}
	}()

	// Initial fetch
	app.refreshStatus()

	if err := g.MainLoop(); err != nil && err != gocui.ErrQuit {
		log.Panicln(err)
	}
}

func (app *AppUI) layout(g *gocui.Gui) error {
	maxX, maxY := g.Size()

	// 1. Main View (Top)
	// Leave 2 lines for keybindings at bottom
	if v, err := g.SetView("main", 0, 0, maxX-1, maxY-3); err != nil {
		if err != gocui.ErrUnknownView {
			return err
		}
		v.Title = " b2m "
		v.Frame = true
		v.Highlight = true
		v.SelBgColor = gocui.ColorGreen
		v.SelFgColor = gocui.ColorBlack
		// v.Wrap = true

		if _, err := g.SetCurrentView("main"); err != nil {
			return err
		}
	}

	// 2. Keybindings View (Bottom)
	// Shift up to make room for statusline
	if v, err := g.SetView("keybindings", 0, maxY-4, maxX-1, maxY-2); err != nil {
		if err != gocui.ErrUnknownView {
			return err
		}
		v.Frame = true
		v.Title = " Keybindings "
	}

	// 3. Status Line (Very Bottom)
	if v, err := g.SetView("statusline", -1, maxY-2, maxX, maxY); err != nil {
		if err != gocui.ErrUnknownView {
			return err
		}
		v.Frame = false
		v.FgColor = gocui.ColorCyan
	}

	app.renderMainView(g)
	app.renderKeybindingsView(g)
	app.renderStatusLine(g)

	return nil
}

// Confirm shows a confirmation dialog
func (app *AppUI) confirm(title, message string, onYes, onNo func()) {
	// Schedule update to UI thread
	app.g.Update(func(g *gocui.Gui) error {
		maxX, maxY := g.Size()
		name := "msg"
		if _, err := g.View(name); err == nil {
			return nil
		}

		if v, err := g.SetView(name, maxX/2-30, maxY/2-3, maxX/2+30, maxY/2+3); err != nil {
			if err != gocui.ErrUnknownView {
				return err
			}
			v.Title = " " + title + " "
			v.Wrap = true
			v.Frame = true
			// Center text manually or just write
			msg := fmt.Sprintf("\n %s\n\n [y] Confirm   [n] Cancel", message)
			v.Write([]byte(msg))

			if _, err := g.SetCurrentView(name); err != nil {
				return err
			}

			g.SetKeybinding(name, 'y', gocui.ModNone, func(g *gocui.Gui, v *gocui.View) error {
				g.DeleteView(name)
				g.DeleteKeybindings(name)
				g.SetCurrentView("main")
				if onYes != nil {
					onYes()
				}
				return nil
			})
			g.SetKeybinding(name, 'n', gocui.ModNone, func(g *gocui.Gui, v *gocui.View) error {
				g.DeleteView(name)
				g.DeleteKeybindings(name)
				g.SetCurrentView("main")
				if onNo != nil {
					onNo()
				}
				return nil
			})
		}
		return nil
	})
}

func (app *AppUI) quit(g *gocui.Gui, v *gocui.View) error {
	app.mu.Lock()
	count := len(app.activeOps)
	app.mu.Unlock()

	if count == 0 {
		app.confirm("Confirm Exit", "Are you sure you want to quit? (y/n)", func() {
			g.Update(func(g *gocui.Gui) error {
				return gocui.ErrQuit
			})
		}, nil)
		return nil
	}

	app.confirm("Exit Warning", "Active operations in progress.\nStop them and exit?", func() {
		// Update status for all active ops to give visual feedback
		app.mu.Lock()
		var activeDBs []string
		for dbName := range app.activeOps {
			activeDBs = append(activeDBs, dbName)
		}
		app.mu.Unlock()

		for _, dbName := range activeDBs {
			app.updateDBStatus(dbName, "Cancelling...", -1, -1, "", "")
		}

		app.cancel()

		// Wait Loop in background to not block UI thread immediately?
		// But confirm callbacks run on UI loop usually.
		// If we block here, UI freezes.
		// But we want to exit.
		// Let's spawn a goroutine to wait and then quit.
		go func() {
			for i := 0; i < 50; i++ {
				app.mu.Lock()
				c := len(app.activeOps)
				app.mu.Unlock()
				if c == 0 {
					break
				}
				time.Sleep(100 * time.Millisecond)
			}
			g.Update(func(g *gocui.Gui) error {
				return gocui.ErrQuit
			})
		}()
	}, nil)
	return nil
}

func (app *AppUI) startOperation(opName string, op func(context.Context, string) error) error {
	app.mu.Lock()
	if app.selected < 0 || app.selected >= len(app.dbs) {
		app.mu.Unlock()
		return nil
	}
	dbName := app.dbs[app.selected].DB.Name
	if _, ok := app.activeOps[dbName]; ok {
		app.mu.Unlock()
		return nil
	}

	ctx, cancel := context.WithCancel(app.ctx)
	app.activeOps[dbName] = cancel
	app.mu.Unlock()

	go func() {
		defer func() {
			app.mu.Lock()
			delete(app.activeOps, dbName)
			app.mu.Unlock()
			app.clearDBStatus(dbName)
			app.refreshStatus()
		}()

		if err := op(ctx, dbName); err != nil {
			if ctx.Err() != nil {
				// Cancelled
			} else {
				app.updateDBStatus(dbName, "Error", 0, 0, "", "")
				time.Sleep(2 * time.Second)
			}
		} else {
			app.updateDBStatus(dbName, "Done", 100, 0, "", "")
			time.Sleep(1 * time.Second)
		}
	}()
	return nil
}

func (app *AppUI) refreshStatus() {
	app.mu.Lock()
	app.loading = true
	app.statusMsg = "Initializing..."
	app.mu.Unlock()

	// Update immediately to show spinner
	app.g.Update(func(g *gocui.Gui) error {
		app.renderStatusLine(g)
		return nil
	})

	go func() {
		dbs, err := core.FetchDBStatusData(app.ctx, func(msg string) {
			app.mu.Lock()
			app.statusMsg = msg
			app.mu.Unlock()
			app.g.Update(func(g *gocui.Gui) error {
				app.renderStatusLine(g)
				return nil
			})
		})

		app.mu.Lock()
		if err == nil {
			app.dbs = dbs
		}
		app.loading = false
		app.statusMsg = ""
		app.mu.Unlock()

		app.g.Update(func(g *gocui.Gui) error {
			app.renderMainView(g)
			app.renderStatusLine(g) // Clear spinner
			return nil
		})
	}()
}

func (app *AppUI) updateDBStatus(dbName string, msg string, percent int, speed float64, opType string, eta string) {
	app.mu.Lock()
	defer app.mu.Unlock()
	stat := app.dbStatus[dbName]
	if msg != "" {
		stat.Message = msg
	}
	if percent >= 0 {
		stat.Percent = percent
	}
	if speed >= 0 {
		stat.Speed = speed
	}
	if opType != "" {
		stat.OpType = opType
	}
	stat.ETA = eta

	app.dbStatus[dbName] = stat

	app.g.Update(func(g *gocui.Gui) error {
		app.renderMainView(g)
		return nil
	})
}

func (app *AppUI) clearDBStatus(dbName string) {
	app.mu.Lock()
	defer app.mu.Unlock()
	delete(app.dbStatus, dbName)
	app.g.Update(func(g *gocui.Gui) error {
		app.renderMainView(g)
		return nil
	})
}

// Spinner frames
var spinnerFrames = []string{"|", "/", "-", "\\"}

func (app *AppUI) renderStatusLine(g *gocui.Gui) {
	v, err := g.View("statusline")
	if err != nil {
		return
	}
	v.Clear()

	app.mu.Lock()
	loading := app.loading
	app.mu.Unlock()

	if loading {
		// Calculate frame
		idx := (time.Now().UnixMilli() / 50) % int64(len(spinnerFrames))
		spinner := spinnerFrames[idx]
		msg := app.statusMsg
		if msg == "" {
			msg = "Fetching status..."
		}
		fmt.Fprintf(v, " %s %s", spinner, msg)
	} else {
		// Show nothing or 'Ready'
		// fmt.Fprint(v, " Ready")
	}
}

// Update RunUI to include ticker
// We need to modify the RunUI function.
// Since I can't easily replace the whole function if it's huge, I'll rely on the user applying this carefully.
// Wait, I should probably replace RunUI to add the ticker.

// Let's modify layout first to include statusline
