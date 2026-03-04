.PHONY: emoji-blob-to-files add-emoji-indexes verify-indexes optimize-order-by-indexes optimize-man-pages-indexes create_html_content drop_content_column categorize-urls add-see-also-column man-page-sub-category-extender insert-emojis bump-etag

# Bump DB version and etag: copy each DB to next version, set updated_at to now.
# Usage: make bump-etag DB=all   or   make bump-etag DB=mcp
DB ?= all
bump-etag:
	@cd .. && python3 scripts/update_updated_at/bump_etag.py etag --db=$(DB)
	@echo "✅ Bump done!"

emoji-blob-to-files:
	@echo "📦 Extracting emoji images from database to public/emojis/..."
	@cd .. && python3 scripts/emojis/emoji_db_base64_to_files.py

add-emoji-indexes:
	@echo "🔧 Adding composite indexes for Apple and Discord images query optimization..."
	@cd .. && sqlite3 db/all_dbs/emoji-db-v6.db < scripts/emojis/add_apple_images_index.sql
	@echo "✅ Indexes created!"

verify-indexes:
	@echo "🔍 Verifying and creating emoji indexes..."
	@cd .. && sqlite3 db/all_dbs/emoji-db-v6.db < scripts/emojis/verify_and_create_indexes.sql
	@echo "✅ Index verification complete!"

optimize-order-by-indexes:
	@echo "🔧 Adding indexes to optimize ORDER BY performance..."
	@cd .. && sqlite3 db/all_dbs/emoji-db-v6.db < scripts/emojis/optimize_order_by_indexes.sql
	@echo "✅ Order BY indexes created!"

optimize-man-pages-indexes:
	@echo "🔧 Adding indexes to optimize man pages queries..."
	@cd .. && sqlite3 db/all_dbs/man-pages-db-v6.db < scripts/man-pages/optimize_man_pages_indexes.sql
	@echo "✅ Man pages indexes created!"

create_html_content:
	@echo "🔄 Creating HTML content column for man pages..."
	@cd .. && go run scripts/man-pages/create_html_content.go
	@echo "✅ HTML content column created and populated!"

drop_content_column:
	@echo "🗑️  Dropping content column from man_pages table..."
	@cd .. && go run scripts/man-pages/drop_content_column.go
	@echo "✅ Content column dropped!"

categorize-urls:
	@echo "📊 Categorizing URLs from crawled_not_indexed.csv..."
	@cd .. && python3 scripts/categorize_urls.py

add-see-also-column:
	@echo "➕ Adding see_also column to all databases..."
	@cd .. && ./scripts/add_see_also_column.sh
	@echo "✅ see_also columns added!"

man-page-sub-category-extender:
	@echo "📝 Extending man-pages subcategories from 404.txt..."
	@cd .. && python3 scripts/man-pages/sub_category_extender.py
	@echo "✅ Subcategories extended!"

insert-emojis:
	@echo "➕ Inserting emojis from JSON into database..."
	@cd .. && python3 scripts/emojis/data_extender/insert_emojis.py
	@echo "✅ Emojis inserted!"