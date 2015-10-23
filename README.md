# Grunt Bower App

This app aims to illustrate the advantages of using Grunt and Bower to help develop a basic web app.

## How it works

We will use Bower to install and maintain the dependencies of:

* Twitter Bootstrap
* jQuery 

We will use Grunt to perform the following tasks:

* Uglify and minify our HTML, CSS and JS
* Copy custom HTML, CSS & JS minified files to a dist folder
* Copy files our app is dependant on to the dist folder (e.g. bootstrap CSS & JS)
* Update the paths in our HTML to redirect to the minified files

To perform the above tasks, we'll be using the following Grunt plugins:

* [grunt-processhtml](https://www.npmjs.com/package/grunt-processhtml) - redirect paths
* [grunt-contrib-jshint]() - lint our Javascript
* [grunt-contrib-clean]() - delete the dist directory before a rebuild
* [grunt-contrib-uglify]() - use Uglify to minify our Javascript
* [grunt-contirb-cssmin]() - minify our css
* [grunt-contrib-htmlmin]() - minify our html
* [grunt-contrib-copy]() - copy dependency files (e.g. bootstrap css/js) to dist 



