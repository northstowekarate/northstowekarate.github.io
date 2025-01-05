.PHONY: build serve

build:
	rm -rf _site ; npm run build 
serve: build
	npx @11ty/eleventy --serve --ignore-initial
push:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" push -u origin main --force-with-lease
pull:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" pull
