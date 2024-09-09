# Build Site
```
npx @11ty/eleventy
```

# Serve Site dev mode

```
npx @11ty/eleventy --serve
```

# Spellcheck

for f in _site/**/*.html
do ;
aspell --mode=html check $f
done

