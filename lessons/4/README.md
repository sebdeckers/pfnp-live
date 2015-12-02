---
Date: 2015-12-02
Instructor: Sebastiaan Deckers
---
# Real-time full-stack demo
Code: https://github.com/cbas/pfnp-playground

Demo: http://motdgopher.xyz

## Join the Chat Rooms
Class chat room: https://gitter.im/cbas/pfnp-live

SingaporeJS: https://gitter.im/SingaporeJS/discussions

SingaporeCSS: https://gitter.im/Singapore-CSS/discussions

NodeSchool: https://gitter.im/nodeschool/discussions

## Static Files & Express
Using the `express.static` middleware to make a directory (`./public`) available on the web:

```js
app.use(express.static('public'))
```
Instructions: http://expressjs.com/en/starter/static-files.html

This way the frontend can be served from `./public/index.html` which is served as the default entry in any directory.

## Calling the Backend
Using `fetch` lets the frontend make requests to, and receive responses from, the backend. We use this to read and edit the MOTD.

See: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Asynchronous Code
Because network requests take an indefinite amount of time, we use a callback function to be invoked once the response is received.

A *Promise* is returned by asynchronous operations like `fetch()`. We use `.then()` to attach a callback function. The response is decoded using `.text()` which itself is also asynchronous.

DOM event listeners and even Express route handlers are other examples of asynchronous code.

The benefit of asynchronous code is increased efficiency and utilisation of hardware resources.

Two analogies:
- Butler making a sandwich.
  - Synchronous: Wait until the butler hands you the sandwich.
  - Asynchronous: Have the butler call back when the sandwich is made.
- McDonalds vs Restaurant
  - Synchronous: Order fast-food and wait until food is done.
  - Asynchronous: Place order and continue conversation. Waiter will call back with food once it is done.

## Real-Time
Polling every second using `setInterval`. See `./public/motd.js` for details.

## Data Display & Entry
Using DOM and `window.prompt()`. See `./public/motd.js` for details.

## Registering a Domain Name
Live demo using Namecheap to set up a CNAME record that points from our `@` (top level) domain to the `*.herokuapp.com` domain.

Changes in DNS take a while to propagate.

## Demo
http://motdgopher.xyz/

## Databases
Quick overview of MongoDB and setting it up with MongoLab.

To learn more take the [learnyoumongo](https://github.com/evanlucas/learnyoumongo) workshop.

Solutions: https://github.com/cbas/learnyoumongo-solutions

## Questions
- What is it like working at startups?
- What do you think about WYSIWYG editors?
- Can you give an overview of programming languages?
- Can we use what we learned in this course to build mobile apps?
- Is it better to go to university (compsci) or to join a code school?

## Contact
Gitter: https://gitter.im/cbas

Email: <seb@ninja.sg>

Facebook: https://www.facebook.com/sebastiaan.deckers
