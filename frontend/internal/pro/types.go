package pro

// ProStatus represents the pro status of a user
type ProStatus struct {
	IsPro bool
}

// contextKey is a type for context keys to avoid collisions
type contextKey string

const (
	// ProStatusKey is the key used to store pro status in request context
	ProStatusKey contextKey = "proStatus"
)

