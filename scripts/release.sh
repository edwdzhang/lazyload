#!bin/sh

# dev
git checkout dev
npm run build
VERSION=`npm version patch`
git push origin dev

# master
git checkout master
git merge dev
git add -A
git commit -m "merge dev"
git push origin master

# publish
npm config set registry=https://registry.npmjs.org/
npm publish --access public
git push origin refs/tags/$VERSION

# dev
git checkout dev
