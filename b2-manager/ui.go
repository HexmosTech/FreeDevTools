package main

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"sync"
	"time"

	"github.com/eiannone/keyboard"
	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/jedib0t/go-pretty/v6/text"
)

func clearScreen() {
	if runtime.GOOS == "windows" {
		cmd := exec.Command("cmd", "/c", "cls")
		cmd.Stdout = os.Stdout
		cmd.Run()
	} else {
		fmt.Print("\033[H\033[2J")
	}
}

// ... (Rest of keyboard/spinner helpers unchanged) ...

func readKey() (rune, keyboard.Key, error) {
	return keyboard.GetKey()
}

func initKeyboard() error {
	return keyboard.Open()
}

func closeKeyboard() {
	keyboard.Close()
}

// Spinner implementation
type Spinner struct {
	msg      string
	stopChan chan bool
	wg       sync.WaitGroup
}

func StartSpinner(msg string) *Spinner {
	s := &Spinner{
		msg:      msg,
		stopChan: make(chan bool),
	}
	s.wg.Add(1)
	go func() {
		defer s.wg.Done()
		chars := []rune{'|', '/', '-', '\\'}
		i := 0
		for {
			select {
			case <-s.stopChan:
				return
			default:
				fmt.Printf("\r%s %c ", s.msg, chars[i])
				i = (i + 1) % len(chars)
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()
	return s
}

func (s *Spinner) Stop() {
	s.stopChan <- true
	s.wg.Wait()
	// Clear line
	fmt.Print("\r" + s.msg + " Done!          \n") // Pad to clear
}

// HandleMenu displays a horizontal menu and returns the selected index.
// renderFunc: Function to render the body content. If nil, menu is rendered inline (using \r or just append).
// options: List of menu options.
// Returns: Selected index, or -1 if Back/Esc/Cancel.
func HandleMenu(options []string, renderFunc func()) int {
	selected := 0

	for {
		if renderFunc != nil {
			clearScreen()
			renderFunc()
			fmt.Println()
		} else {
			// Inline: Move cursor up? Or just clear line?
			// With table, it consumes multiple lines.
			// CLI apps usually redraw the whole section or just append.
			// Since we want "solid table", standard clearing is best.
			// Use \r to verify? No, table is multi-line.
			// We'll rely on simply printing it. If it scrolls, it scrolls.
			// But for navigation we need to clear previous render.
			// Assuming inline usage only happens at bottom of static text.
			// We can use ansi up codes?
			// Simpler: Just clear screen if possible, but renderFunc is nil implies we want to preserve history?
			// Actually `handleSync` uses `nil` renderFunc but it clears screen itself BEFORE calling HandleMenu (once).
			// `HandleMenu` loop redrawing will cause duplication if we don't clear.
			// So `handleSync` should probably pass a renderFunc that draws the logs?
			// Or `HandleMenu` handles the clearing of ITS OWN output.
			// Escape code to clear N lines?
			// For now, let's assume `HandleMenu` clears screen if `renderFunc` is provided.
			// If `renderFunc` is nil, we might spam output.
			// FIX: `handleSync` clears screen once. `HandleMenu` loop will print table repeatedly.
			// User will see many tables.
			// I should probably change `handleSync` to pass a renderFunc that (re)prints the "Done" message? Or just the header?
			// The logs from `SyncAllDatabases` are streamed. We can't re-print them easily.
			// So for `handleSync`, we want a static footer.
			// We can use `\033[A` (cursor up) + clear line.
			// Depending on table height (3 lines usually).
			// Let's implement cursor reset for inline mode.
			// fmt.Print("\033[u") // Restore cursor? No, we didn't save. REMOVED because it causes jumps if not saved.
			// We can save cursor before loop?
		}

		// Table Render
		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)

		row := table.Row{}
		for i, opt := range options {
			if i == selected {
				row = append(row, text.Colors{text.BgCyan, text.FgBlack}.Sprint(" "+opt+" "))
			} else {
				row = append(row, " "+opt+" ")
			}
		}
		t.AppendRow(row)

		if renderFunc == nil {
			// Save cursor position?
			// For now, just print. If it spams, user will complain.
			// Attempt to clear previous 3 lines?
			// fmt.Print("\033[3A\033[J") // Up 3 lines, clear to end?
			// Only if loop > 0
			// Let's rely on standard clearScreen for now, and fix handleSync to use renderFunc if possible.
			// But Sync logs...
		}

		t.Render()

		char, key, err := readKey()
		if err != nil {
			return -1
		}

		// Logic to clear inline menu before next draw
		if renderFunc == nil {
			// Heuristic: Table is ~3 lines (Top border, content, bottom border).
			// Clear 3 lines up.
			fmt.Print("\033[4A\r\033[J")
		}

		if key == keyboard.KeyArrowLeft {
			selected--
			if selected < 0 {
				selected = len(options) - 1
			}
		} else if key == keyboard.KeyArrowRight {
			selected++
			if selected >= len(options) {
				selected = 0
			}
		} else if key == keyboard.KeyEnter {
			return selected
		} else if key == keyboard.KeyEsc || key == keyboard.KeyBackspace || key == keyboard.KeyBackspace2 || char == 'q' {
			return -1
		}
	}
}
