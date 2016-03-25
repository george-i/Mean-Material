MEAN Material is MongoDB - Express - AngularJS - NodeJS + Material Design.
---
Description
--------------
This toolkit creates the environment for the development of an AngularJS based project.


In addition, it compiles the code to run a smooth and fast application.

This is a screen recording of the result, right after finishing the setup:
https://www.youtube.com/watch?v=aUzyFjiAVSM


Features
--------------
- all JavaScript
- real time integration
- API service designed
- compile and test tool



Recommended for:
--------------
- real time apps
- starting projects from scratch
- apps which require full stack structure (frontend and backend)


For apps which already have a backend, <a href="https://github.com/george-i/angular-lineman-toolkit-light">Lineman Angular Toolkit (light)</a> is more suitable.


Components
--------------
Frontend
- <a href="http://linemanjs.com/" title="Lineman JS">Lineman JS</a> - a CLI tool. With it, most of required tasks in the development process are silently handled.<br />
Lineman includes <b>Grunt</b>, <b>Jasmine</b> and also runs a local server for development purposes.
- <a href="http://bower.io/">Bower</a> - for package management
- <a href="https://angularjs.org/">AngularJS</a> - you know, the framework :)
- <a href="https://github.com/angular-ui/ui-router">AngularUI Router</a> - the coolest routing solution for AngularJS
- <a href="http://jquery.com/">jQuery</a>
- <a href="http://getbootstrap.com/">Twitter Bootstrap</a>
- <a href="http://fontawesome.io/">Font Awesome</a>


Backend
- <a href="http://nodejs.org/">NodeJS</a> server
- <a href="http://www.mongodb.org/">MongoDB</a>
- <a href="http://expressjs.com/">ExpressJS</a>

Mixins
- <a href="http://socket.io/">socket.io</a>

Tools
- <a href="http://sass-lang.com/">SASS</a> - is compiled to CSS
- <a href="http://coffeescript.org/">Coffeescript</a> - is compiled to JS

Setup & run
--------------
It is assumed that NodeJS, MongoDB, SASS, Bower and Lineman are installed.
<br />
```sh
npm install
bower install
mongod --dbpath C:\mongodb\data\db\ /* start MongoDB */
lineman clean run
```

Finally, open http://localhost:8000 in your browser.
