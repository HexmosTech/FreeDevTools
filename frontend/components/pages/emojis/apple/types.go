package apple

import (
	emojis_db "fdt-templ/internal/db/emojis"
)

// EmojiWithImage represents an emoji with its latest Apple image
type EmojiWithImage struct {
	Emoji       *emojis_db.EmojiData
	LatestImage *string
}

