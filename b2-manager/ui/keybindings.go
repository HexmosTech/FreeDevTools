package ui

import (
	"fmt"
	"strings"

	"github.com/jroimartin/gocui"
)

// Keybinding definition
type Keybinding struct {
	Key         interface{}
	Handler     func(*gocui.Gui, *gocui.View) error
	Description string
}

func (lc *ListController) GetKeybindings() []*Keybinding {
	return []*Keybinding{
		{
			Key:         gocui.KeyArrowDown,
			Handler:     lc.cursorDown,
			Description: "",
		},
		{
			Key:         gocui.KeyArrowUp,
			Handler:     lc.cursorUp,
			Description: "",
		},
		{
			Key:         'u',
			Handler:     lc.onUpload,
			Description: "Upload",
		},
		{
			Key:         'p',
			Handler:     lc.onDownload,
			Description: "Download",
		},
		{
			Key:         'c',
			Handler:     lc.onCancel,
			Description: "Cancel",
		},
		{
			Key:         gocui.KeyCtrlR,
			Handler:     func(g *gocui.Gui, v *gocui.View) error { lc.app.refreshStatus(); return nil },
			Description: "Refresh",
		},
	}
}

func (app *AppUI) renderKeybindingsView(g *gocui.Gui) {
	v, err := g.View("keybindings")
	if err != nil {
		return
	}
	v.Clear()

	bindings := app.listController.GetKeybindings()
	var parts []string
	for _, kb := range bindings {
		if kb.Description == "" {
			continue
		}
		keyName := ""
		switch k := kb.Key.(type) {
		case rune:
			keyName = string(k)
		case gocui.Key:
			switch k {
			case gocui.KeyCtrlR:
				keyName = "Ctrl+R"
			case gocui.KeyCtrlC:
				keyName = "Ctrl+C"
			}
		}
		parts = append(parts, fmt.Sprintf("%s: %s", keyName, kb.Description))
	}
	parts = append(parts, "Ctrl+C: Quit")

	fmt.Fprint(v, " "+strings.Join(parts, " \t ")) // Tab separated for spacing
}

func (app *AppUI) keybindings() error {
	// Global Quit - catch Ctrl+C anywhere initially
	if err := app.g.SetKeybinding("", gocui.KeyCtrlC, gocui.ModNone, app.quit); err != nil {
		return err
	}

	// Register Controller Bindings to "main" view
	bindings := app.listController.GetKeybindings()
	for _, kb := range bindings {
		if err := app.g.SetKeybinding("main", kb.Key, gocui.ModNone, kb.Handler); err != nil {
			return err
		}
	}
	return nil
}
