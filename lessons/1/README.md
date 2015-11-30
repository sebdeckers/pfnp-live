---
Date: 2015-11-23
Instructor: Sebastiaan Deckers
---
# Intro to front- and back-end development

## Links
- [GA Fundamentals](http://fundamentals.generalassemb.ly/) introduction to the command line.
- [Nodeschool](http://nodeschool.io/) [javascripting](https://www.github.com/sethvincent/javascripting) workshop to learn the basics of JavaScript.
- Seb's previous [PFNP](https://github.com/cbas/pfnp) lesson material. This is much more than can be reasonably covered in 4 evenings with any hope of retetion.
- Mozilla Developers Network: [HTML elements](https://developer.mozilla.org/en/docs/Web/HTML/Element), [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference), [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), [CSS Selectors](http://www.w3.org/TR/css3-selectors/).
- Assets: [Giphy](http://giphy.com/gifs/pizza-king-of-the-hill-kVXtSmeOZoRIQ) images, [placeholder copy](https://baconipsum.com), [HTML/CSS colours](http://colours.neilorangepeel.com/).

## Community
- http://webuild.sg
- https://gitter.im/SingaporeJS/discussions
- http://www.meetup.com/Singapore-JS/
- http://feds.strikingly.com/

## Prerequisites
- Install [Atom](https://atom.io)
- Install [Node.js](https://nodejs.org)

## Installing `http-server`
Open the *Terminal* (Mac OS X) or *Command Prompt* (Windows).

The Node.js installer also comes with the [Node Package Manager (NPM)](https://www.npmjs.com/). Use it to install `http-server` globally on your system.

PS: NPM [has very many packages](http://www.modulecounts.com/) that help avoid rebuilding solved problems.
```
npm install --global http-server
```

On OS X you will need to use `sudo` to install globally. Try:
```
sudo npm install --global http-server
```

Create and change into a new directory called `hello-programmers`.
```
Sebs-MacBook:~ seb$ mkdir hello-programmers
Sebs-MacBook:~ seb$ cd hello-programmers/
```

Run the `http-server` command to serve the current working directory's files and sub-folders to the browser.
```
Sebs-MacBook:hello-programmers seb$ http-server
Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8080
  http:192.168.83.162:8080
Hit CTRL-C to stop the server
```

Open <http://127.0.0.1:8080/> in your web browser to see the page.

The result should look similar to the initial project on Codepen <http://codepen.io/cbas/pen/QjRWZm>
