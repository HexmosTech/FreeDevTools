package pro

import (
	"context"
	"net/http"
)

// GetProStatus retrieves the pro status from the request context
// Returns false if not set (defaults to free user)
func GetProStatus(r *http.Request) bool {
	if r == nil {
		return false
	}
	status, ok := r.Context().Value(ProStatusKey).(ProStatus)
	if !ok {
		return false
	}
	return status.IsPro
}

// WithProStatus adds pro status to the request context
func WithProStatus(r *http.Request, isPro bool) *http.Request {
	ctx := context.WithValue(r.Context(), ProStatusKey, ProStatus{IsPro: isPro})
	return r.WithContext(ctx)
}

