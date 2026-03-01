package static_cache

// InjectScripts no longer needs to inject JS strings since they are served statically
// It simply returns the HTML untouched.
func InjectScripts(html []byte) []byte {
	return html
}
