#!bin/sh

git checkout master
git merge dev
npm run build

npm version patch
npm publish -access public
