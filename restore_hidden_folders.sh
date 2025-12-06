PAGES_DIR="frontend/src/pages"

echo "🔄 Restoring hidden folders..."

cd "$PAGES_DIR"

for dir in _*/; do
  orig="${dir#_}"
  orig="${orig%/}"

  echo "🔁 Restoring: $dir -> $orig"
  mv "$dir" "$orig"
done