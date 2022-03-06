#!/bin/bash

rm -rf *.{js,css}
rm -rf index.html
cd ../../compound-interest-calculator
npm run build
cd ../deployments/compound-interest-calculator
cp -rf ../../compound-interest-calculator/client/dist/client/* .

rm -rf assets

git add .
git commit --amend --no-edit
git push -f