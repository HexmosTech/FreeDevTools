# Overivew

Currenlty i have implemented tldr schema in the db/tldrs/tldr-schema.ts file.
and tldr_to_db.go file to insert tldr data into the db.

But for any small change in migration we might waste time in future

folow rules of scheam of db/emojis
this also folow the same rules of sitemap generation. present in src/pages/emojis

First explain How db is created scripts/emojis

and explain how pagination and other things are implemented in src/pages/emojis.

no need to change tldr end pages logic
i.e., freedevtools/tldr/adb/adb this will be same.

Only fix main_page table and remove sitemap table let it be same as emojis sitemap generation
