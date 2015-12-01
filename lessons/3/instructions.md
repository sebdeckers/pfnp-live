## Create a repository on GitHub

Create a new repository on GitHub and clone the repo to your GitHub Desktop

## Node.js

Open the Terminal and check that you already have Node.js installed by running `npm --version`. Download and install [Node.js](https://nodejs.org) if you don't have it installed

## Create a package.json file

Run `npm init` to create a `package.json` file

## Install Express

Run `npm install --save express` to install [Express](http://expressjs.com/)

## Install nodemon

Run `npm install --save-dev nodemon` to install [nodemon](https://www.npmjs.com/package/nodemon)

## Hello, browser!

Open the repo with [Atom](https://atom.io/) (or your preferred text editor) by running `atom .`

Create a new file and rename it `server.js` then copy and paste the following lines of code: 

```
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello, browser!')
})

app.listen(3000)
```

Remember to save the `server.js` file. Now go back to Terminal and run `node server.js` then open a web browser (e.g. Firefox, Chrome) and go to `localhost:3000`

Tada! You've created your first server! 
