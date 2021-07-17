#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd docs
# if you are deploying to a custom domain
echo 'isixeko-sam.co.za' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github-personal:Mitso/mitso.github.io.git master:gh-pages
cd -