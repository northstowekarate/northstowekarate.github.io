.PHONY: build serve push pull

build:
	rm -rf _site ; npx @11ty/eleventy
serve: build
	npx @11ty/eleventy --serve --ignore-initial
push:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" push -u origin main --force-with-lease
pull:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" pull
