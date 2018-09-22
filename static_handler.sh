#!/usr/bin/env bash

rm -rf static
python manage.py collectstatic --no-input

find static/js -type f \
    -name "*.js" ! -name "*.min.*" ! -name "vfs_fonts*" \
    -exec echo {} \; \
    -exec ./node_modules/uglify-js/bin/uglifyjs -o {}.min {} \; \
    -exec rm {} \; \
    -exec mv {}.min {} \;

find static/css -type f \
    -name "*.css" ! -name "*.min.*" \
    -exec echo {} \; \
    -exec node ./node_modules/uglifycss/uglifycss --output {}.min {} \; \
    -exec rm {} \; \
    -exec mv {}.min {} \;

gzip -rk static