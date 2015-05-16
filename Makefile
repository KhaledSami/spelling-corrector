test:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui tdd

cov:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui tdd \
		--require blanket \
		-R html-cov > coverage.html

test-w:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui tdd \
		--watch

.PHONY: test test-w