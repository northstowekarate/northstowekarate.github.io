.PHONY: build serve

build:
	rm -rf _site ; npx @11ty/eleventy ; cp robots.txt favicon.ico  _site
serve: build
	npx @11ty/eleventy --serve
push:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" push -u origin main --force-with-lease
pull:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" pull
