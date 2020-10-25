#!bin/sh

# dev
git checkout dev
npm run build
VERSION=`npm version patch`
git push origin dev

# master
git checkout master
git merge dev
git push origin master
npm publish -access public
git push origin refs/tags/$VERSION
git checkout dev
