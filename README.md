
# Function Camp - Create React App Seed

This project is similar to running `npx create-react-app` with some differences:

- It has prettier built in
- When you run `git commit` it checks the lint / prettier formats your code for you
- It has a Github actions build, so you can check builds pass when you practice with Pull Requests
- All files are lowercase, because we're not savages!

## Setup

Make sure you have a recent version of node installed and yarn installed.

Run:

```bash
git clone https://github.com/functioncamp/create-react-app-seed.git my-project
cd my-project
rm -rf ./.git # deletes all the git things
git init # creates a new git repo from scratch
git add .
git commit -m 'Initial commit'
git remote add origin https://github..../you/your-repo # link the repo to your github repo
git push origin master # push it to your repo
yarn install
yarn start # get to work!
```

## Ejecting

Do not eject unless you absolutely have to. It loses most of the benefits of using this. You could try using [customize-cra](https://github.com/arackaf/customize-cra) instead.
