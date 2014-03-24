# Client-side web application playground

This is a brief NodeJS/Grunt starter project, or a simple bootstrap, for web developers who just want to start simple from scratch. No fluff, just start coding right away on HTML5/CSS and Javascript as soon as you clone the project!

This version of the playground is using AngularJS and RequireJS as libraries for you to start up. It also has a unit test set up for you to get going with TDD.

The data used for character bios is courtesy of this project: https://github.com/johnHackworth/GameOfThrones

## How To Dev

1. Install [NodeJS w. NPM](http://nodejs.org/) if you haven't done so
2. Install [Grunt CLI](http://gruntjs.com/) with `npm install -g grunt-cli` if you haven't done so
3. Install project dependencies with `npm install`
4. Run `grunt` to start server, watch the files for changes, and browse to index

To get started look at `www/index.html` and `www/scripts/main.js`.

# Notes for Web Devs

This project is set up to use [RequireJS](http://requirejs.org/) and default [Twitter Bootstrap](http://getbootstrap.com/) from when you clone this repository. There is also code for you to start up with [AngularJS](http://angularjs.org/) and also includes [Directives for Bootstrap's Components](http://angular-ui.github.io/bootstrap/).

The [Gruntfile](http://gruntjs.com/sample-gruntfile) is set up to the [watch task](https://github.com/gruntjs/grunt-contrib-watch). Javascript files are monitored by default and are running through [JSHint](http://www.jshint.com/). The default watch task also runs unit tests with [Mocha](http://visionmedia.github.io/mocha/) and [Chai](http://chaijs.com/) by using the [Karma test runner](http://karma-runner.github.io/).

## License

![Creative Commons Attribution 4.0 International](http://i.creativecommons.org/l/by/4.0/88x31.png)

This project, except for third-party tools and libraries used, is licensed under a [Creative Commons Attribution 4.0 International license](http://creativecommons.org/licenses/by/4.0/).