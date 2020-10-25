#!bin/sh

npm version patch
npm run build

git checkout master
git merge dev

npm publish -access public
