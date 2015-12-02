---
Date: 2015-11-30
Instructor: Sebastiaan Deckers
---
# RESTful JSON API back end

Code: https://github.com/cbas/pfnp-playground

## Tools

### Terminal
Text-only interface to run commands and launch our server. By default Mac OS X uses a shell called Bash. On Windows the alternatives are called the Command Prompt and Powershell.

### Atom
Code Editor with syntax highlighting. Open the project directory to see the list of files.

### GitHub Desktop
Tracks changes made to source code files. *Commit* changes to save a snapshot. *Sync* commits to publish them to GitHub.

### Node.js
Use Node.js to run JavaScript on the command line. Once installed, open a Terminal window and run `node` to open a REPL, or Read-Evaluate-Print-Loop. Can also execute `*.js` files.

## Building a Backend
Open the **Terminal** (Mac OS X) or **Command Prompt** (Windows) and navigate to the app directory. Right-click on the project in **GitHub Desktop** and choose **Open in Terminal**.
```
Sebs-MacBook:pfnp-playground seb$
```
Open the folder in Atom.
```
atom .
```
Install Express and Nodemon and save them as dependencies.
```
npm insall --save express nodemon
```
Create a file using Atom called `server.js`. Enter the following:
```js
var express = require('express')
var app = express()

var message = 'How are you today?'

app.get('/', function (req, res) {
  res.send(message)
})

app.get('/edit/:motd', function (req, res) {
  message = req.params.motd
  res.send('Message updated.')
})

app.listen(process.env.PORT || 3000)
```
Initialise an NPM `package.json` file to describe the app. Follow the instructions or simply accept the default values by pressing *Enter*.
```
npm init
```
Update the `start` script to:
```
"start": "nodemon server.js",
```
Run the server using:
```
npm start
```
Open the app in the browser.
- Home: http://localhost:3000/
- Edit: http://localhost:3000/edit/anything

## Deployment
Commit the changed code and sync the code to GitHub.

Sign up for Heroku and create a new App. Connect it to GitHub and choose automatic deployments.

Visit: https://appname.herokuapp.com/ (replace `appname` with the name of your Heroku app)
