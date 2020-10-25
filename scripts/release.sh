#!bin/sh

git checkout master
npm run build

npm version patch
npm publish -access public
