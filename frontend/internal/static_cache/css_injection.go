package static_cache

import (
	"fdt-templ/assets"
	"strings"
)

const CSSPlaceholder = "<!-- FDT_INJECTED_CSS -->"

// Compile the Replacer ONCE at startup to make it extremely fast
var cssReplacer = strings.NewReplacer(
	CSSPlaceholder, "<style>"+assets.CriticalCSS+"</style>",
)

// InjectCSS inserts the CSS natively in a single pass
func InjectCSS(html []byte) []byte {
	return []byte(cssReplacer.Replace(string(html)))
}
