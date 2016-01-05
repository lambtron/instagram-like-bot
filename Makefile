#
# Binaries
#

nodemon = ./node_modules/.bin/nodemon --harmony --quiet
BIN := ./node_modules/.bin

#
# Default
#

default: get

#
#
#

get: node_modules
	@node --harmony ./server/index.js

#
# Remove non-checked-in dependencies
#

clean:
	@rm -rf node_modules components

#
# Targets
#

node_modules: package.json
	@npm install
	@touch node_modules

#
# Phonies
#

.PHONY: clean
.PHONY: debug
.PHONY: run
.PHONY: serve
