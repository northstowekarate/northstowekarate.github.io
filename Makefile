.PHONY: build serve

build:
	rm -rf _site ; npx @11ty/eleventy
serve: build
	npx @11ty/eleventy --serve
