package cli

import (
	"fmt"
	"os"
	"unicode"

	"golang.org/x/term"
)

// dbOptions lists all available DB short names in display order.
var dbOptions = []string{
	"bannerdb",
	"cheatsheetsdb",
	"emojidb",
	"ipmdb",
	"manpagesdb",
	"mcpdb",
	"pngiconsdb",
	"svgiconsdb",
	"tldrdb",
}

// readScriptName reads a slug-style name (a-z, 0-9, hyphen) from stdin in raw
// mode. The caller must print the prompt prefix ("  ❯ ") before calling.
func readScriptName() (string, error) {
	fd := int(os.Stdin.Fd())
	oldState, err := term.MakeRaw(fd)
	if err != nil {
		return "", fmt.Errorf("raw mode: %w", err)
	}
	defer term.Restore(fd, oldState)

	var buf []rune

	redraw := func() {
		os.Stdout.WriteString("\r\033[K  ❯ " + string(buf))
	}

	for {
		b := make([]byte, 4)
		n, _ := os.Stdin.Read(b)
		if n == 0 {
			continue
		}

		switch b[0] {
		case 3: // Ctrl+C
			os.Stdout.WriteString("\r\n")
			return "", fmt.Errorf("cancelled")

		case 13, 10: // Enter
			if len(buf) == 0 {
				redraw() // require at least one character
				continue
			}
			os.Stdout.WriteString("\r\n")
			return string(buf), nil

		case 127, 8: // Backspace / Delete
			if len(buf) > 0 {
				buf = buf[:len(buf)-1]
				redraw()
			}

		default:
			if n == 1 {
				ch := unicode.ToLower(rune(b[0]))
				if (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '-' {
					buf = append(buf, ch)
					redraw()
				}
			}
			// Silently drop everything else (escape sequences, spaces, etc.)
		}
	}
}

// selectDBInteractive shows a numbered, arrow-key navigable list of DB short
// names plus a "▶  Create" item at the bottom.
//
// Navigation: ↑/↓ moves the cursor, Enter toggles the checkmark (multi-select
// supported), Enter on "▶  Create" (with ≥1 DB checked) confirms.
// Returns the slice of selected DB short names in selection order.
func selectDBInteractive() ([]string, error) {
	const createLabel = "▶  Create"
	total := len(dbOptions) + 1 // DB options + Create row
	createIdx := len(dbOptions)

	cursor := 0
	checked := make([]bool, len(dbOptions)) // true = selected
	// Track order in which items were checked so we can preserve it.
	var order []int

	fd := int(os.Stdin.Fd())
	oldState, err := term.MakeRaw(fd)
	if err != nil {
		return nil, fmt.Errorf("raw mode: %w", err)
	}
	defer term.Restore(fd, oldState)

	// Reserve vertical space upfront, then jump back to the top.
	for i := 0; i < total; i++ {
		os.Stdout.WriteString("\r\n")
	}
	fmt.Fprintf(os.Stdout, "\033[%dA", total)

	draw := func() {
		for i := 0; i < total; i++ {
			arrow := "   "
			if i == cursor {
				arrow = " ► "
			}
			var line string
			if i == createIdx {
				line = fmt.Sprintf("\r%s%s\033[K\r\n", arrow, createLabel)
			} else {
				check := "[ ]"
				if checked[i] {
					check = "[✓]"
				}
				line = fmt.Sprintf("\r%s %s %2d. %s\033[K\r\n", arrow, check, i+1, dbOptions[i])
			}
			os.Stdout.WriteString(line)
		}
		// Move cursor back to the top of the list for the next redraw.
		fmt.Fprintf(os.Stdout, "\033[%dA", total)
	}

	draw()

	for {
		b := make([]byte, 4)
		n, _ := os.Stdin.Read(b)
		if n == 0 {
			continue
		}

		// Arrow key sequences: ESC [ A (up) / ESC [ B (down)
		if n >= 3 && b[0] == 27 && b[1] == '[' {
			switch b[2] {
			case 'A': // Up
				if cursor > 0 {
					cursor--
					draw()
				}
			case 'B': // Down
				if cursor < total-1 {
					cursor++
					draw()
				}
			}
			continue
		}

		if n == 1 {
			switch b[0] {
			case 3: // Ctrl+C
				fmt.Fprintf(os.Stdout, "\033[%dB\r\n", total)
				return nil, fmt.Errorf("cancelled")

			case 13: // Enter
				if cursor == createIdx {
					// Count checked items.
					var result []string
					for _, idx := range order {
						result = append(result, dbOptions[idx])
					}
					if len(result) == 0 {
						// Nothing selected yet — ignore.
						continue
					}
					fmt.Fprintf(os.Stdout, "\033[%dB\r\n", total)
					return result, nil
				}
				// Toggle the checkmark on the highlighted DB.
				if checked[cursor] {
					checked[cursor] = false
					// Remove from order slice.
					for j, idx := range order {
						if idx == cursor {
							order = append(order[:j], order[j+1:]...)
							break
						}
					}
				} else {
					checked[cursor] = true
					order = append(order, cursor)
				}
				draw()
			}
		}
	}
}

// RunInteractiveCreateChangeset drives the full wizard:
//  1. Prompt for a slug-style script name.
//  2. Arrow-key multi-select DB selector.
//  3. Create the changeset file with values filled in.
func RunInteractiveCreateChangeset() error {
	// ── Step 1: script name ───────────────────────────────────────────────────
	fmt.Println("╔══════════════════════════════════════════╗")
	fmt.Println("║       Create New Changeset Script        ║")
	fmt.Println("╚══════════════════════════════════════════╝")
	fmt.Println()
	fmt.Println("  What is the script name you want to create?")
	fmt.Println("  (lowercase letters, digits, and hyphens · no spaces)")
	fmt.Println()
	fmt.Print("  ❯ ")

	phrase, err := readScriptName()
	if err != nil {
		return err
	}

	// ── Step 2: DB selector ───────────────────────────────────────────────────
	fmt.Printf("\n  Script name : %s\n\n", phrase)
	fmt.Println("  Select one or more DB short names:")
	fmt.Println("  ↑/↓ navigate  ·  Enter to toggle ✓  ·  go to Create + Enter to confirm")
	fmt.Println()

	dbShortNames, err := selectDBInteractive()
	if err != nil {
		return err
	}

	// ── Step 3: create file ───────────────────────────────────────────────────
	fmt.Printf("\n  DB(s) selected : %v\n\n", dbShortNames)
	return CreateChangeset(phrase, dbShortNames)
}
