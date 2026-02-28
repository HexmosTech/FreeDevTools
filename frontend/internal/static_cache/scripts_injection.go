package static_cache

import (
	_ "embed"
	"strings"
)

//go:embed js/base_layout.js
var baseLayoutJS string

//go:embed js/breadcrumb.js
var BreadcrumbJS string

//go:embed js/header.js
var HeaderJS string

//go:embed js/search_bar.js
var SearchBarJS string

//go:embed js/footer.js
var FooterJS string

//go:embed js/see_also.js
var SeeAlsoJS string

//go:embed js/theme_switcher.js
var ThemeSwitcherJS string

//go:embed js/sidebar_theme_switcher.js
var SidebarThemeSwitcherJS string

//go:embed js/sidebar.js
var SidebarJS string

//go:embed js/emojis/components.js
var EmojisComponentsJS string

//go:embed js/emojis/apple_emoji.js
var AppleEmojiJS string

//go:embed js/emojis/discord_emoji.js
var DiscordEmojiJS string

// Combined global JS
var GlobalJS = baseLayoutJS

const JSPlaceholder = "<!-- FDT_INJECTED_JS -->"
const JSBreadcrumbPlaceholder = "<!-- FDT_INJECTED_BREADCRUMB_JS -->"
const JSHeaderPlaceholder = "<!-- FDT_INJECTED_HEADER_JS -->"
const JSSearchBarPlaceholder = "<!-- FDT_INJECTED_SEARCH_BAR_JS -->"
const JSFooterPlaceholder = "<!-- FDT_INJECTED_FOOTER_JS -->"
const JSSeeAlsoPlaceholder = "<!-- FDT_INJECTED_SEE_ALSO_JS -->"
const JSThemeSwitcherPlaceholder = "<!-- FDT_INJECTED_THEME_SWITCHER_JS -->"
const JSSidebarThemeSwitcherPlaceholder = "<!-- FDT_INJECTED_SIDEBAR_THEME_SWITCHER_JS -->"
const JSSidebarPlaceholder = "<!-- FDT_INJECTED_SIDEBAR_JS -->"
const JSEmojisComponentsPlaceholder = "<!-- FDT_INJECTED_EMOJIS_COMPONENTS_JS -->"
const JSAppleEmojiPlaceholder = "<!-- FDT_INJECTED_APPLE_EMOJI_JS -->"
const JSDiscordEmojiPlaceholder = "<!-- FDT_INJECTED_DISCORD_EMOJI_JS -->"

// Compile the Replacer ONCE at startup to make it extremely fast
var scriptReplacer = strings.NewReplacer(
	JSPlaceholder, "<script>"+GlobalJS+"</script>",
	JSBreadcrumbPlaceholder, "<script>"+BreadcrumbJS+"</script>",
	JSHeaderPlaceholder, "<script>"+HeaderJS+"</script>",
	JSSearchBarPlaceholder, "<script>"+SearchBarJS+"</script>",
	JSFooterPlaceholder, "<script>"+FooterJS+"</script>",
	JSSeeAlsoPlaceholder, "<script>"+SeeAlsoJS+"</script>",
	JSThemeSwitcherPlaceholder, "<script>"+ThemeSwitcherJS+"</script>",
	JSSidebarThemeSwitcherPlaceholder, "<script>"+SidebarThemeSwitcherJS+"</script>",
	JSSidebarPlaceholder, "<script>"+SidebarJS+"</script>",
	JSEmojisComponentsPlaceholder, "<script>"+EmojisComponentsJS+"</script>",
	JSAppleEmojiPlaceholder, "<script>"+AppleEmojiJS+"</script>",
	JSDiscordEmojiPlaceholder, "<script>"+DiscordEmojiJS+"</script>",
)

// InjectScripts inserts the JS natively in a single pass
func InjectScripts(html []byte) []byte {
	return []byte(scriptReplacer.Replace(string(html)))
}
