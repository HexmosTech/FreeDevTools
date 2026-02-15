# Load .env file if it exists
ifneq (,$(wildcard ./.env))
    include .env
    export
endif

VSIX := freedevtools.vsix

.PHONY: package clean install publish

package:
	npm run package
	npx @vscode/vsce package -o $(VSIX)

install: package
	code --install-extension $(VSIX) --force

publish:
	npx @vscode/vsce publish
	npx ovsx publish --pat "$(OVSX_PAT)"

clean:
	rm -f $(VSIX) 
