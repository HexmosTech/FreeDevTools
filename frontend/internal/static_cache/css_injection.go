package static_cache

import (
	"fdt-templ/assets"
	"strings"
)

const CSSPlaceholder = "<!-- FDT_INJECTED_CSS -->"
const CSSSidebarPlaceholder = "<!-- FDT_INJECTED_SIDEBAR_CSS -->"

// Compile the Replacer ONCE at startup to make it extremely fast
var cssReplacer = strings.NewReplacer(
	CSSPlaceholder, "<style>"+assets.CriticalCSS+"</style>",
	CSSSidebarPlaceholder, "<style>"+assets.SidebarCSS+"</style>",
)

// InjectCSS inserts the CSS natively in a single pass
func InjectCSS(html []byte) []byte {
	return []byte(cssReplacer.Replace(string(html)))
}
