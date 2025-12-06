
pm2logs:
	@if [ -z "$(LABEL)" ]; then \
		echo "❌ Please provide LABEL=some-name"; \
		exit 1; \
	fi
	@python3 pm2_logs.py "$(LABEL)"

pmdlogs:
	@if [ -z "$(LABEL)" ]; then \
		echo "❌ Please provide LABEL=some-name"; \
		exit 1; \
	fi
	@python3 pmd_logs.py "$(LABEL)"


test-svg-req-pm2:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pm2 flush
	pm2 stop all
	pm2 start pm2.config.cjs
	pm2 ls
	./pm2-pin.sh
	./pm2-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -z 10s  -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	@sleep 2
	@pm2 flush
	@echo "⬇️  Requesting SVG icon -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	@sleep 2
	@echo "⬇️  Showing logs -----------"
	@LOG_FILES=$$(ls -1t ~/.pm2/logs/astro-*-out-*.log 2>/dev/null | head -n2); \
	if [ -n "$$LOG_FILES" ]; then \
		for LOG_FILE in $$LOG_FILES; do \
			echo "=== $$(basename $$LOG_FILE) ==="; \
			cat "$$LOG_FILE"; \
			echo ""; \
		done; \
	else \
		echo "No astro-out log yet."; \
	fi
	@echo ""
	@echo "⬇️  Showing PM2 logs -----------"
	make pm2logs LABEL=test-svg-req-pm2
	pm2 stop all
	pm2 delete all --force 2>/dev/null || true

test-svg-req-pmd:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pmdaemon delete all --force 2>/dev/null || true
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	pmdaemon --config pmd.config.json start
	@sleep 2
	pmdaemon list
	./pmd-pin.sh
	./pmd-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -z 10s http://localhost:4321/freedevtools/mcp/blockchain-and-crypto/armorwallet--armor-crypto-mcp/
	@sleep 2
	@echo "⬇️  Requesting SVG icon -----------"
	hey -z 1m  http://localhost:4321/freedevtools/mcp/blockchain-and-crypto/armorwallet--armor-crypto-mcp/
	@sleep 2
	@echo "⬇️  Showing logs -----------"
	@LOG_FILES=$$(ls -1t ~/.pmdaemon/logs/astro-*-out.log 2>/dev/null | head -n2); \
	if [ -n "$$LOG_FILES" ]; then \
		for LOG_FILE in $$LOG_FILES; do \
			echo "=== $$(basename $$LOG_FILE) ==="; \
			cat "$$LOG_FILE"; \
			echo ""; \
		done; \
	else \
		echo "No astro-out log yet."; \
	fi
	@echo ""
	@echo "⬇️  Showing PMDaemon logs -----------"
	make pmdlogs LABEL=test-svg-req-pmd
	pmdaemon stop all
	pmdaemon delete all --force 2>/dev/null || true
	bash kill-ports.sh

test-mcp-req-pmd:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pmdaemon delete all --force 2>/dev/null || true
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	pmdaemon --config pmd.config.json start
	@sleep 2
	pmdaemon list
	./pmd-pin.sh
	./pmd-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -n 5 -c 5 -host hexmos-local.com http://127.0.0.1/freedevtools/mcp/apis-and-http-requests/1/
	@sleep 2
	@echo "⬇️  Requesting MCP index -----------"
	hey -z 5m -host hexmos-local.com http://127.0.0.1/freedevtools/mcp/1/
	@sleep 2
	@echo "⬇️  Requesting MCP category -----------"
	hey -z 5m -host hexmos-local.com http://127.0.0.1/freedevtools/mcp/data-analytics/1/
	@sleep 2
	@echo "⬇️  Requesting MCP end page -----------"
	hey -z 5m -host hexmos-local.com http://127.0.0.1/freedevtools/mcp/data-analytics/24mlight--a-share-mcp-is-just-i-need/

	@echo "⬇️  Showing logs -----------"
# 	@LOG_FILES=$$(ls -1t ~/.pmdaemon/logs/astro-*-out.log 2>/dev/null | head -n2); \
# 	if [ -n "$$LOG_FILES" ]; then \
# 		for LOG_FILE in $$LOG_FILES; do \
# 			echo "=== $$(basename $$LOG_FILE) ==="; \
# 			cat "$$LOG_FILE"; \
# 			echo ""; \
# 		done; \
# 	else \
# 		echo "No astro-out log yet."; \
# 	fi
	@echo ""
	@echo "⬇️  Showing PMDaemon logs -----------"
	make pmdlogs LABEL=test-mcp-req-pmd
	pmdaemon stop all
	pmdaemon delete all --force 2>/dev/null || true
	bash kill-ports.sh


test-cheatsheets-req-pmd:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pmdaemon delete all --force 2>/dev/null || true
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	pmdaemon --config pmd.config.json start
	@sleep 2
	pmdaemon list
	./pmd-pin.sh
	./pmd-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -n 5 -c 5 -host hexmos-local.com http://127.0.0.1/freedevtools/c/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet index -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/c/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet category -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/c/security/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet end page -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/c/security/medusa/
	@sleep 2

	@echo "⬇️  Showing logs -----------"
# 	@LOG_FILES=$$(ls -1t ~/.pmdaemon/logs/astro-*-out.log 2>/dev/null | head -n2); \
# 	if [ -n "$$LOG_FILES" ]; then \
# 		for LOG_FILE in $$LOG_FILES; do \
# 			echo "=== $$(basename $$LOG_FILE) ==="; \
# 			cat "$$LOG_FILE"; \
# 			echo ""; \
# 		done; \
# 	else \
# 		echo "No astro-out log yet."; \
# 	fi
	@echo ""
	@echo "⬇️  Showing PMDaemon logs -----------"
	make pmdlogs LABEL=test-mcp-req-pmd
	pmdaemon stop all
	pmdaemon delete all --force 2>/dev/null || true
	bash kill-ports.sh

test-man-pages-req-pmd:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pmdaemon delete all --force 2>/dev/null || true
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	pmdaemon --config pmd.config.json start
	@sleep 2
	pmdaemon list
	./pmd-pin.sh
	./pmd-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -n 5 -c 5 -host hexmos-local.com http://127.0.0.1/freedevtools/man-pages/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet index -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/man-pages/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet category -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/man-pages/library-functions/
	@sleep 2
	@echo "⬇️  Requesting Cheatsheet end page -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/man-pages/library-functions/cryptography/

	@sleep 2
	@echo "⬇️  Requesting Cheatsheet end page -----------"
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/man-pages/library-functions/computer-science/pcmax1/

	@echo "⬇️  Showing logs -----------"
# 	@LOG_FILES=$$(ls -1t ~/.pmdaemon/logs/astro-*-out.log 2>/dev/null | head -n2); \
# 	if [ -n "$$LOG_FILES" ]; then \
# 		for LOG_FILE in $$LOG_FILES; do \
# 			echo "=== $$(basename $$LOG_FILE) ==="; \
# 			cat "$$LOG_FILE"; \
# 			echo ""; \
# 		done; \
# 	else \
# 		echo "No astro-out log yet."; \
# 	fi
	@echo ""
	@echo "⬇️  Showing PMDaemon logs -----------"
	make pmdlogs LABEL=test-mcp-req-pmd
	pmdaemon stop all
	pmdaemon delete all --force 2>/dev/null || true
	bash kill-ports.sh


curl-all-kind-of-page:
	@echo "SVG Icon (localhost:4321):"
	@hey -n 10 -c 1 http://localhost:4321/freedevtools/svg_icons/8bit/sharp-solid-alien-8bit/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "PNG Icon (localhost:4321):"
	@hey -n 10 -c 1 http://localhost:4321/freedevtools/png_icons/8bit/sharp-solid-alien-8bit/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "Emoji (localhost:4321):"
	@hey -n 10 -c 1 http://localhost:4321/freedevtools/emojis/two-hump-camel/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "PNG Icon (nginx:127.0.0.1):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/png_icons/8bit/sharp-solid-alien-8bit/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "SVG Icon (nginx:127.0.0.1):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/svg_icons/8bit/sharp-solid-alien-8bit/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "Emoji (nginx:127.0.0.1):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo ""
	@echo "Emoji (localhost:4321):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo "Emoji category (localhost:4321):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/animals-nature/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"
	@echo "Emoji end page (localhost:4321):"
	@hey -n 10 -c 1 -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/ 2>&1 | grep -A 10 "Status code distribution" || echo "  No status codes found"



test-emoji-req-pmd:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pmdaemon delete all --force 2>/dev/null || true
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	bash kill-ports.sh
	@sleep 2
	pmdaemon --config pmd.config.json start
	@sleep 2
	pmdaemon list
	./pmd-pin.sh
	./pmd-verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	# hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	hey -z 10s -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/
	pmdaemon logs astro-4321
	@sleep 2
	@echo "⬇️  Requesting SVG icon -----------"
	# hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	hey -z 1m -host hexmos-local.com http://127.0.0.1/freedevtools/emojis/
	@sleep 2
	@echo "⬇️  Showing logs -----------"
	@LOG_FILES=$$(ls -1t ~/.pmdaemon/logs/astro-*-out.log 2>/dev/null | head -n2); \
	if [ -n "$$LOG_FILES" ]; then \
		for LOG_FILE in $$LOG_FILES; do \
			echo "=== $$(basename $$LOG_FILE) ==="; \
			cat "$$LOG_FILE"; \
			echo ""; \
		done; \
	else \
		echo "No astro-out log yet."; \
	fi
	@echo ""
	@echo "⬇️  Showing PMDaemon logs -----------"
	make pmdlogs LABEL=test-svg-req-pmd
	pmdaemon stop all
	pmdaemon delete all --force 2>/dev/null || true
	bash kill-ports.sh
