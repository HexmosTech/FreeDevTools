
pm2logs:
	@if [ -z "$(LABEL)" ]; then \
		echo "❌ Please provide LABEL=some-name"; \
		exit 1; \
	fi
	@python3 pm2_logs.py "$(LABEL)"

pdlogs:
	@if [ -z "$(LABEL)" ]; then \
		echo "❌ Please provide LABEL=some-name"; \
		exit 1; \
	fi
	@python3 pdlogs.py "$(LABEL)"


test-svg-req-pm2:
	clear
	# npm run build
	clear
	rm -rf logs/*
	pm2 flush
	pm2 stop all
	pm2 start ../ecosystem.config.cjs
	pm2 ls
	./pin.sh
	./verifypin.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -z 10s -host hexmos.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	@sleep 2
	@pm2 flush
	@echo "⬇️  Requesting SVG icon -----------"
	hey -z 1m -host hexmos.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
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

test-svg-req-pd:
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
	pmdaemon --config ../ecosystem.json start
	@sleep 2
	pmdaemon list
	./pin-pd.sh
	./verifypin-pd.sh
	@echo "⬇️  Server up -----------"
	@sleep 2
	@echo "⬇️  Warming up server logs will be flushed for the below requests, ignore the below curls -----------"
	hey -z 10s -host hexmos.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	@sleep 2
	@echo "⬇️  Requesting SVG icon -----------"
	hey -z 10s -host hexmos.com http://127.0.0.1/freedevtools/emojis/two-hump-camel/
	@sleep 2
	@echo "⬇️  Showing logs -----------"
	@pmdaemon logs astro-4321 
	@pmdaemon logs astro-4322 
	make pdlogs LABEL=test-svg-req-pd