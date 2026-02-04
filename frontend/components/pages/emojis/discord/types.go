package discord

import (
	emojis_db "fdt-templ/internal/db/emojis"
)

// EmojiWithImage represents an emoji with its latest Discord image
type EmojiWithImage struct {
	Emoji       *emojis_db.EmojiData
	LatestImage *string
}

