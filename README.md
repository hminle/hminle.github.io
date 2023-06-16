# hminle.com/hminle.github.io
A personal website of Hoang M. Le

- Local development: `docker run --rm --label=jekyll --volume=%CD%:/srv/jekyll  -it -p 4001:4000 jekyll/jekyll jekyll serve`
- Or: `docker run --rm --label=jekyll --volume="$PWD":/srv/jekyll  -it -p 4000:4000 jekyll/jekyll jekyll serve`