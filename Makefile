install:
	npm ci
rain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint
