# Script that does what the npm package gh-pages does.
# Requires associated ssh-key in the GitHub settings.
cd build
git init
git add ./
git config --global user.name ""
git config --global user.email ""
git commit -m "Updates"
git remote add origin git@github.com:aaronlam1004/aaronlam1004.github.io.git
git push --force origin master:gh-pages
