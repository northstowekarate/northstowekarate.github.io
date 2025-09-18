.PHONY: build serve push pull clean

build: clean setup
	npm run build
setup:
	npm i
clean:
	rm -rf _site
serve: build
	npm run serve
push:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" push -u origin main --force-with-lease
pull:
	git -c "core.sshCommand=ssh -i ~/.ssh/id_ed25519_northstowekarate" pull
