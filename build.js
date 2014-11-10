'use strict'

var Metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');
var markdown = require('metalsmith-markdown');
var ignore = require('metalsmith-ignore');
var watch = require('metalsmith-watch');
var serve = require('metalsmith-serve');

var metalsmith = Metalsmith(__dirname)
  .use(sass({
    outputDir: "css/"
  }))
  .use(markdown())
  .use(templates({
    engine: "handlebars",
    directory: "src/templates",
    partials: {
      head: "partials/head",
      header: "partials/header",
      footer: "partials/footer"
    }
  }))
  .use(ignore([
    "templates/**/*",
    "sass/**/*",
    "sass/**/.bower.json",
    "sass/**/.gitignore"
  ]))
  .use(watch())
  .use(serve({
    port: '8000' 
  }))
  .build(function(err){
    if (err) throw err;
  });
